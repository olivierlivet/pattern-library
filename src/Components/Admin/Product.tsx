import { Box, Button, Flex, HStack, Stack, Text} from '@chakra-ui/react'
import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { config } from '../../config'
import { Link } from '@reach/router'

const Product = ({}) => {

    const [data, setData] = useState();
    useEffect(async () => {
        const result = await axios.get(
            `${config.apiUrl}/product`
        );
        setData(result.data);
    }, []);

    return(
        <Box w='full' my='20' bg='white' p={10}>
            <Flex>
                <Button as={Link} to='/admin/product/create'>Publier un nouveau patron</Button>
            </Flex>
            <Stack
                spacing={2}
            >
            { data ?
                data.map( item =>
                    <Flex w='full' justify='space-between'>
                        { item.title }
                        <HStack>
                            <Button size='sm' as='a' target='_blank' href={`https://app.contentful.com/spaces/e6euex8rtwnm/entries/${item.cmsDocumentId}`}>CMS</Button>
                            <Text>{ item.price }€</Text>
                            <Text>{ item.rating }</Text>
                        </HStack>
                    </Flex>
                    )
            : null }
            </Stack>

        </Box>
    )
}

export default Product