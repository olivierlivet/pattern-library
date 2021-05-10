import {
    Box,
    Button,
    Flex,
    Image,
    Grid,
    HStack,
    Text,
    ButtonGroup,
    Stack
} from '@chakra-ui/react'
import { Link } from '@reach/router';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { config } from '../../config'

const Editor = ({ }) => {

    const [data, setData] = useState();
    useEffect(async () => {
        const result = await axios.get(
            `${config.apiUrl}/editor`
        );
        setData(result.data);
    }, []);

    return (
        <Box w='full' my='20' bg='white' p={10}>
            <Button as={Link} to='/admin/editor/create'>Ad editor</Button>
            <Stack spacing={2}>
                {data ?
                    data.map(item =>
                        <Grid
                            templateColumns={{
                                base: `1fr 200px`
                            }}
                            gap={6}
                        >
                            <Flex align='center'>
                                {item.name}
                            </Flex>
                            <Box>
                                <ButtonGroup justifyContent='flex-end'>
                                    <Button>Details</Button>
                                    <Button>Update</Button>
                                </ButtonGroup>
                            </Box>
                        </Grid>


                    )
                    : null}
            </Stack>
        </Box>
    )
}

export default Editor
