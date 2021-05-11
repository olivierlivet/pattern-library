import { Box, Button, Flex, HStack, Stack, Text } from '@chakra-ui/react'
import { navigate } from '@reach/router';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { config } from '../../config'

const Evaluation = ({ }) => {

    const [data, setData] = useState();
    useEffect(async () => {
        const result = await axios.get(
            `${config.apiUrl}/evaluation`
        );
        setData(result.data);
    }, []);

    return (
        <Box w='full' my='20' bg='white' p={10}>
            <Stack spacing='3'>
                {data ?
                    data.map(item =>
                        <Flex w='full' justify='space-between'>
                            {item._id}
                            <HStack>
                                <Text>{item.product.name}</Text>
                                <Text>{item.source}</Text>
                            </HStack>
                            <Box>
                                {item.status}
                                <Button
                                    size='sm'
                                    onClick={() => navigate(`/admin/evaluation/${item._id}`)}
                                >
                                    Update
                            </Button>
                            </Box>
                        </Flex>
                    )
                : null}
            </Stack>
        </Box>
    )
}

export default Evaluation