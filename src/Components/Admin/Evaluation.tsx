import { Box, Button, Flex, HStack, Stack, Table, Tag, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
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
            <Table>
                <Thead>
                    <Th fontFamily='DM Sans'>What</Th>
                    <Th fontFamily='DM Sans'>Who</Th>
                    <Th fontFamily='DM Sans'>Rating</Th>
                    <Th fontFamily='DM Sans'>Status</Th>
                    <Th fontFamily='DM Sans'>Actions</Th>
                </Thead>
                {data ?
                    data.map(item =>
                        <Tr>
                            <Td>
                                {item.product.title}
                            </Td>
                            <Td>
                                {item.user.firstName} ({item.user.email})
                            </Td>
                            <Td>
                                <Tag
                                    colorScheme={
                                    item.globalEvaluation < '50' ? 'red' :
                                    item.globalEvaluation < '70' ? 'orange' :
                                    item.globalEvaluation < '90' ? 'yellow' :
                                    item.globalEvaluation < '95' ? 'blue'
                                    : 'green' }
                                >
                                { item.globalEvaluation}
                                </Tag>
                            </Td>
                            <Td>
                                <Tag
                                    colorScheme={ item.status === 'draft' ? 'yellow' : 'green' }
                                >
                                    {item.status}
                                </Tag>
                            </Td>
                            <Td>
                                <Button
                                    size='sm'
                                    onClick={() => navigate(`/admin/evaluation/${item._id}`)}
                                >
                                    Update
                                </Button>
                            </Td>
                        </Tr>
                    )
                    : null}
            </Table>
        </Box>
    )
}

export default Evaluation