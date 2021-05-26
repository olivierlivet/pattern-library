import { CheckIcon, SmallCloseIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, HStack, Table, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { config } from '../../config'

const User = ({ }) => {

    const [data, setData] = useState();
    useEffect(async () => {
        const result = await axios.get(
            `${config.apiUrl}/user`
        );
        setData(result.data);
    }, []);

    return (
        <Box w='full' my='20' bg='white' p={10}>
            <Table>
                <Thead>
                    <Th fontFamily='DM Sans'>Name</Th>
                    <Th fontFamily='DM Sans'>Email</Th>
                    <Th fontFamily='DM Sans'>Auth source</Th>
                    <Th fontFamily='DM Sans'>Newsletter</Th>
                    <Th fontFamily='DM Sans'>Action</Th>
                </Thead>

                {data ?
                    data.map(user =>
                        <Tr>
                            <Td>{user.firstName}</Td>
                            <Td>{user.email}</Td>
                            <Td>{user.source}</Td>
                            <Td>
                                { user.newsletter ? <CheckIcon /> : <SmallCloseIcon /> }
                            </Td>
                            <Td>
                                <Button size='sm'>Update</Button>
                            </Td>

                        </Tr>

                    )
                    : null}
            </Table>

        </Box>
    )
}

export default User