import { Box, Button, ButtonGroup, Flex, HStack, Stack, Table, Tag, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { config } from '../../config'
import { Link } from '@reach/router'
import { Link as RouterLink } from '@reach/router'

const Product = ({ }) => {

    const [data, setData] = useState();
    const [page, setPage] = useState<number>(0);
    const [hasNext, setHasNext] = useState<boolean>(false);

    useEffect(
        () => {
            getData();
        }
        , []);

    const getData = async () => {

        const result = await axios.get(
            `${config.apiUrl}/product/page/${page}`
        );
        setData(result.data.products);
        setHasNext(result.data.hasNextPage);

    }

    const handleNextPage = () => {
        setPage( page + 1 )
    }

    const handlePreviousPage = () => {
        setPage( page - 1 )
    }

    React.useEffect(() => {
        getData();
    }, [page]);

    return (
        <Box w='full' my='10' bg='white' p={10}>
            <Flex justify='flex-end'>
                <Button colorScheme='blue' size='sm' as={Link} to='/admin/product/create'>Create a product</Button>
            </Flex>
            <Stack>
                <Table>
                    <Thead>
                        <Th fontFamily='DM Sans'>Title</Th>
                        <Th fontFamily='DM Sans'>Editor</Th>
                        <Th fontFamily='DM Sans'>Price</Th>
                        <Th fontFamily='DM Sans'>Rating</Th>
                        <Th fontFamily='DM Sans'>Actions</Th>
                    </Thead>
                    {data ?
                        data.map(item =>
                            <Tr>
                                <Td>{item.title}</Td>
                                <Td>{item.editor ? item.editor.name : ''}</Td>
                                <Td>{item.price}€</Td>
                                <Td>{item.rating}</Td>
                                <Td>
                                    <ButtonGroup>
                                        <Button size='sm' as='a' target='_blank' href={`https://app.contentful.com/spaces/e6euex8rtwnm/entries/${item.cmsDocumentId}`}>CMS</Button>
                                        <Button size='sm' as={RouterLink} target='_blank' to={`/admin/product/${item._id}`}>update</Button>
                                    </ButtonGroup>
                                </Td>
                            </Tr>
                        )
                        : null}
                </Table>
                <Box>
                    <ButtonGroup>
                        <Button onClick={()=>handlePreviousPage()} isDisabled={page === 0} size='sm'>Previous</Button>
                        <Button onClick={()=>handleNextPage()} isDisabled={!hasNext} size='sm'>Next</Button>
                        <Tag>Page {page+1}</Tag>
                    </ButtonGroup>
                </Box>
            </Stack>

        </Box>
    )
}

export default Product