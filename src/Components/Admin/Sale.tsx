import {
    Box,
    Button,
    Flex,
    Image,
    Grid,
    HStack,
    Text,
    ButtonGroup
} from '@chakra-ui/react'
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { config } from '../../config'

const Sales = ({ }) => {

    const [data, setData] = useState();
    useEffect(async () => {
        const result = await axios.get(
            `${config.apiUrl}/sale`
        );
        setData(result.data);
    }, []);

    return (
        <Box w='full' my='20' bg='white' p={10}>
            { data ?
                data.map(item =>
                    <Grid
                        templateColumns={{
                            base: `1fr 200px`
                        }}
                        gap={6}
                    >
                            <Flex align='center'>
                                {item.product.title} de { item.user.firstName }
                            </Flex>
                            <Box>
                                <ButtonGroup justifyContent='flex-end'>
                                    <Button>Détails</Button>
                                </ButtonGroup>
                            </Box>
                    </Grid>


                )
                : null}
        </Box>
    )
}

export default Sales
