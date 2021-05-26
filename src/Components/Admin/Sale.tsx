import {
    Box,
    Button,
    Flex,
    Image,
    Grid,
    HStack,
    Text,
    ButtonGroup,
    Table,
    Thead,
    Th,
    Tr,
    Td
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
            <Table>
                <Thead fontFamily='DM Sans'>
                    <Th fontFamily='DM Sans'>What</Th>
                    <Th fontFamily='DM Sans'>Who</Th>
                    <Th fontFamily='DM Sans'>Downloads</Th>
                    <Th fontFamily='DM Sans'>Actions</Th>
                </Thead>
                {data ?
                    data.map(item =>
                        <Tr>
                            <Td>
                                {item.product.title}
                            </Td>
                            <Td>
                                {item.user.firstName}
                            </Td>
                            <Td>
                                {item.downloads}
                            </Td>
                            <Td>
                                <ButtonGroup  size='sm' justifyContent='flex-end'>
                                    <Button>Détails</Button>
                                </ButtonGroup>
                            </Td>
                        </Tr>
                    )
                    : null}
            </Table>
        </Box>
    )
}

export default Sales
