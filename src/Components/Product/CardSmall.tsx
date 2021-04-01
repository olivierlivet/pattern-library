import React, {FunctionComponent} from 'react'

type productCardPropsTypes = {
    title: string,
    level: number,
    rating: number,

    onOpen: Function
}

import {
    Box,
    Heading,
    Grid,
    Text,
    Button,
    HStack,
    Badge,
    VStack
} from '@chakra-ui/react'
import ProductIllustrationWithSwap from './ProductIllustrationWithSwap'

const ProductCard:FunctionComponent<productCardPropsTypes> = ({
        title,
        level,
        rating,

        onOpen
    }) =>{
    return(
    <Box
        w='700px'
        bg='white'
        boxShadow='md'
    >
        <Grid
            templateColumns={{
                base:'100%',
                lg:'300px 1fr'
            }}
            gap={10}
        >
            <Box>

            
            <ProductIllustrationWithSwap
                imagesUrl = {[
                    'https://static-mapetitemercerie.o10c.net/88723-large_default/patron-l-enfant-roi-chemise-xavier-de-2-ans-a-12-ans.jpg',
                    'https://www.ladroguerie.com/wp-content/uploads/2020/02/patron-couture-deauville-chemise-homme-mesures.jpg'
                ]}
            />
            {/* <AddTo */}
            </Box>

            <VStack
                spacing={ 4 }
                p={5}
                align='start'
                justify='center'

            >
                <Text
                    textTransform='uppercase'
                    letterSpacing='wide'
                    fontSize='small'
                    color='green.500'
                >La république du Chiffon</Text>
                <Heading
                    as='h3'
                    fontSize='28px'
                    letterSpacing='wide'
                >{title}</Heading>
                <Box>
                    Description courte
                </Box>
                <HStack>
                    <Badge>12€</Badge>
                    <Badge>Pochette</Badge>
                    <Text>Niveau 3</Text>
                </HStack>
                <Button onClick={()=>onOpen()}>View</Button>

            </VStack>
        </Grid>
    </Box>
    )
}

export default ProductCard