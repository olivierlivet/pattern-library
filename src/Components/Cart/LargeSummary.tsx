import React, { FunctionComponent, useEffect, useState } from 'react'

import {
    Box,
    Button,
    Flex,
    Text,
    Stack,
    Grid,
    Heading,
    Center,
    VStack,
    HStack
} from '@chakra-ui/react'

import { useContentful } from 'react-contentful';
import { navigate } from 'gatsby';
import { config } from '../../config';
import {authenticationService} from '../../Service/auth'
import axios from 'axios';


type props = {
    isOpen: Boolean
    products: Array<String>,
    hideButton: Boolean
}

const CartLargeSummary: FunctionComponent<props> = ({ products, isOpen, hideButton }) => {

    const [data, setData] = useState();
    useEffect(async () => {
        const result = await axios.get(
            `${config.apiUrl}/cart/${authenticationService.getUser().userId}/created`
        );
        setData(result.data);
    }, []);

    const productsInCart = () => {
        if ( !data ){ return null }
        // Process and pass in the loaded `data` necessary for your page or child components.
        return (

            data.products.map((product, index) =>
                <Box
                    onClick={() => navigate(product.fields.slug)}
                    cursor='pointer'
                    borderTop='solid 1px'
                    borderTopColor={index !== 0 ? 'gray.50' : 'transparent'}
                    p={2}
                >
                    <Grid
                        templateColumns={{
                            base: `40px 1fr 150px`
                        }}
                        gap={{
                            base: 1,
                            lg: 2
                        }}
                    >
                        <Center bg='gray.50' w='50px' h='50px'>
                            I
                        </Center>
                        <Flex
                            p={2}
                            alignItems='center'
                        >
                            <Heading as='p' fontWeight='normal' fontSize='sm'>
                                {product.title}
                            </Heading>

                        </Flex>
                        <HStack justify='flex-end'>
                            <Center>
                                <Text color='green.400'>{product.price}&nbsp;€</Text>
                            </Center>
                            <Button variant='outline' size='sm'>
                                Supprimer
                            </Button>
                        </HStack>

                    </Grid>
                </Box>)
        );
    }

    const cartTotalAmount = () => {
        return (
            <Flex
                p={2}
                borderTop='solid 1px'
                borderTopColor='gray.100'
                justify='space-between'
            >
                <Text>
                    Total TTC
                </Text>
                <Text color='green.500'>36€</Text>
            </Flex>
        )
    }

    return (
        products ?
            <Stack spacing={2}>
                {/* <pre>
                    { JSON.stringify( products, null, 1 )}
                </pre> */}
                <Box>
                    {productsInCart()}
                    {/* {cartTotalAmount()} */}
                </Box>
                {!hideButton ?
                    <Button
                        w='full'
                        onClick={() => navigate('/fr/compte/cart')}

                        bg='brand.green.500'
                        color='white'
                        fontFamily='Noe display'
                        fontWeight='normal'
                        _hover={{
                            bg: 'brand.green.400'
                        }}
                    >
                        Passer commande
                    </Button>
                    : null}
            </Stack>
            :
            <div>Votre panier est vide</div>
    )
}

export default CartLargeSummary