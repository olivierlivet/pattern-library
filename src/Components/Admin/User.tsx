import { CheckIcon, SmallCloseIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, HStack, Image, Table, Tag, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { config } from '../../config'
import { Link as RouterLink } from '@reach/router'

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
                            <Td>
                                <Image
                                    src={user.profilePictureUrl}
                                    w='30px'
                                    h='30px'
                                    mr={2}
                                    display='inline'
                                />
                                {user.firstName}
                            </Td>
                            <Td>
                                <a target='_blank' href={`mailto:${user.email}`}>
                                    {user.email}
                                </a>
                            </Td>
                            <Td>{user.source}</Td>
                            <Td>
                                {user.newsletterSubscription ?
                                    <Tag size='sm' colorScheme='green'>
                                        <CheckIcon />
                                    </Tag> :
                                    <Tag size='sm' colorScheme='yellow'>
                                        <SmallCloseIcon />
                                    </Tag>}
                            </Td>
                            <Td>
                                <Button
                                    as={RouterLink}
                                    to={`/admin/user/${user._id}`}
                                    size='sm'>Update</Button>
                            </Td>

                        </Tr>

                    )
                    : null}
            </Table>

        </Box>
    )
}

export default User