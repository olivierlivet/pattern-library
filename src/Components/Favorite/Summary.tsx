import React, { FunctionComponent, useEffect, useState } from 'react'

import {
    Box,
    Flex,
    Stack,
    Grid,
    Heading,
    Center
} from '@chakra-ui/react'

import { navigate } from 'gatsby';
import { config } from '../../config';
import { authenticationService } from '../../Service/auth';
import axios from 'axios';
import SmallProductImage from '../Image/SmallProduct';

type props = {
    isOpen: Boolean
    products: Array<String>,
    hideButton: Boolean
}

const FavoriteSummary: FunctionComponent<props> = ({ isOpen, hideButton }) => {


    const [data, setData] = useState();
    useEffect(async () => {
        const result = await axios.get(
            `${config.apiUrl}/favorite/user/${authenticationService.getUser().userId}`
        );
        setData(result.data);
    }, []);

    const products = () => {
        if (!data) { return null }

        // Process and pass in the loaded `data` necessary for your page or child components.
        return (

            data.map((item, index) =>
                <Box
                    onClick={() => navigate(item.product.slug)}
                    cursor='pointer'
                    borderTop='solid 1px'
                    borderTopColor={ index !== 0 ? 'gray.50' : 'transparent'}
                    p={2}
                    key={`${item._id}-${item.product._id}`}
                >
                    <Grid
                        templateColumns={{
                            base: `30px 1fr 50px`
                        }}
                        gap={{
                            base: 3,
                            lg: 3
                        }}
                    >
                        <Center bg='gray.50' w='30px' h='30px'>
                            <SmallProductImage
                                label={ item.product.title }
                                path={ item.product.mainPicture }
                            />
                        </Center>
                        <Flex
                            p={2}
                            alignItems='center'
                        >
                            <Heading as='p' fontWeight='normal' fontSize='sm'>
                                {item.product.title}
                            </Heading>

                        </Flex>
                        <Center color='green.400'>
                            { item.product.price }€
                        </Center>
                    </Grid>
                </Box>)
        );
    }

    return (
        data ?
                <Stack spacing={2}>
                    <Box>
                        {/* <pre>{ JSON.stringify( products, null, 1 ) }</pre> */}
                        {products()}
                    </Box>
                </Stack>
            :
                <div>Votre panier est vide</div>
    )
}

export default FavoriteSummary