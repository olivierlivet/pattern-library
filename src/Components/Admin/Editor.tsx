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
import GatsbyLink from 'gatsby-link';
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
            <Flex justify='flex-end'>
                <Button colorScheme='blue' size='sm' as={Link} to='/admin/editor/create'>New editor</Button>
            </Flex>
            <Table>
                <Thead>
                    <Th fontFamily='DM Sans'>Name</Th>
                    <Th fontFamily='DM Sans'>Email</Th>
                    <Th fontFamily='DM Sans'>Phone</Th>
                    <Th fontFamily='DM Sans'>Action</Th>
                </Thead>
                <Tbody>
                    {data ?
                        data.map(item =>
                            <Tr>
                                <Td>
                                    {item.name}

                                </Td>
                                <Td>
                                    {item.email}
                                </Td>
                                <Td>
                                    {item.phone}
                                </Td>
                                <Td>
                                    <ButtonGroup size='sm' justifyContent='flex-end'>
                                        <Button
                                            as='a'
                                            target='_blank'
                                            href={`https://app.contentful.com/spaces/e6euex8rtwnm/entries/${item.cmsDocumentId}`}
                                        >CMS</Button>
                                        <Button
                                            as={ GatsbyLink }
                                            to={`/admin/editor/edit/${item._id}`}
                                        >
                                            Edit
                                        </Button>
                                        {/* <Button>Details</Button>
                                        <Button>Update</Button> */}
                                    </ButtonGroup>
                                </Td>
                            </Tr>
                        )
                        : null}
                </Tbody>
            </Table>
        </Box>
    )
}

export default Editor
