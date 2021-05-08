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
import { AddIcon, SmallAddIcon } from '@chakra-ui/icons';


type props = {
    isOpen: Boolean
    products: Array<String>,
    hideButton: Boolean
}

const FavoriteSummary: FunctionComponent<props> = ({ products, isOpen, hideButton }) => {

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
                    </Grid>
                </Box>)
        );
    }

    return (
        products ?
                <Stack spacing={2}>
                    <Box>
                        {/* <pre>{ JSON.stringify( products, null, 1 ) }</pre> */}
                        {/* {productsInCart()} */}
                    </Box>
                </Stack>
            :
                <div>Votre panier est vide</div>
    )
}

export default FavoriteSummary