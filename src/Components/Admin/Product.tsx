import { Box, Flex, HStack, Text} from '@chakra-ui/react'
import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { config } from '../../config'

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
            { data ?
                data.map( item =>
                    <Flex w='full' justify='space-between'>
                        { item.title }
                        <HStack>
                            <Text>{ item.price }€</Text>
                            <Text>{ item.rating }</Text>
                        </HStack>
                    </Flex>
                    )
            : null }
        </Box>
    )
}

export default Product