import {
    Box,
    Button,
    Flex,
    Image,
    Grid,
    HStack,
    Text,
    ButtonGroup,
    Stack,
    Table,
    Thead,
    Th,
    Tbody,
    Tr,
    Td
} from '@chakra-ui/react'
import { Link } from '@reach/router';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { config } from '../../config'

const Payment = ({ }) => {

    const [data, setData] = useState();
    useEffect(async () => {
        const result = await axios.get(
            `${config.apiUrl}/payment`
        );
        setData(result.data);
    }, []);

    return (
        <Box w='full' my='20' bg='white' p={10}>
            <Flex justify='flex-end'>
                <Button colorScheme='blue' size='sm' as={Link} to='/admin/payment/create'>New payment</Button>
            </Flex>
            <Table>
                <Thead>
                    <Th fontFamily='DM Sans'>Editor</Th>
                    <Th fontFamily='DM Sans'>Amount</Th>
                    <Th fontFamily='DM Sans'>Date</Th>
                </Thead>
                <Tbody>
                    {data ?
                        data.map(item =>
                            <Tr>
                                <Td>
                                    {item.editor ? item.editor.name : null}
                                </Td>
                                <Td>
                                    {item.amount}€
                                </Td>
                                <Td>
                                    {item.createdAt}
                                </Td>
                            </Tr>
                        )
                        : null}
                </Tbody>
            </Table>
        </Box>
    )
}

export default Payment
