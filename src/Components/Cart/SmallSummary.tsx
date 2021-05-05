import React, { FunctionComponent } from 'react'

import {
    Box,
    Button,
    Flex,
    Text,
    Stack,
    Grid,
    Heading,
    Center
} from '@chakra-ui/react'

import { useContentful } from 'react-contentful';
import { navigate } from 'gatsby';


type props = {
    isOpen: Boolean
    products: Array<String>,
    hideButton: Boolean
}

const CartSummary: FunctionComponent<props> = ({ products, isOpen, hideButton }) => {

    const productsInCart = () => {
        const { data, error, fetched, loading } = useContentful({
            contentType: 'product',
            locale: 'fr',
            query: {
                'sys.id[in]': products.join(','),
            }
        });

        if (loading || !fetched) {
            return null;
        }

        if (error) {
            console.error(error);
            return null;
        }

        if (!data) {
            return <p>Page does not exist.</p>;
        }

        // See the Contentful query response
        console.debug(data);

        // Process and pass in the loaded `data` necessary for your page or child components.
        return (

            data.items.map((product, index) =>
                <Box
                    onClick={() => navigate(product.fields.slug)}
                    cursor='pointer'
                    borderTop='solid 1px'
                    borderTopColor={ index !== 0 ? 'gray.50' : 'transparent'}
                    p={2}
                >
                    <Grid
                        templateColumns={{
                            base: `40px 1fr 50px`
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
                                {product.fields.title} - { index }
                            </Heading>

                        </Flex>
                        <Center>
                            <Text color='green.400'>{product.fields.price} €</Text>
                        </Center>
                    </Grid>
                </Box>)
        );
    }

    const cartTotalAmount = () => {
        return(
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
                    <Box>
                        {productsInCart()}
                        {cartTotalAmount()}
                    </Box>
                    { !hideButton ? 
                    <Button
                        w='full'
                        onClick={()=> navigate('/fr/compte/cart')}

                        bg='brand.green.500'
                        color='white'
                        fontFamily='Noe display'
                        fontWeight='normal'
                        _hover={{
                            bg:'brand.green.400'
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

export default CartSummary