import React, { FunctionComponent, useRef } from 'react'

type productCardPropsTypes = {
    title: string,
    level: number,
    rating: number,
    productId: string,
    intro: string

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
import { StarIcon } from '@chakra-ui/icons'
import ProductIllustrationWithSwap from './ProductIllustrationWithSwap'
import { navigate } from 'gatsby-link'
import Favorite from '../../Services/Favorite'
const ProductCard: FunctionComponent<productCardPropsTypes> = ({
    productId,
    title,
    level,
    rating,
    intro,

    onOpen
}) => {
    const favoriteButton = useRef()
    const handleClick = (e) => {
        console.log(e.target, favoriteButton.current)
        e.target !== favoriteButton.current ?
            onOpen()
            :
            console.log('ad to favorite')
        if (!Favorite.isFavorite(productId)) {
            Favorite.add(productId)
        } else {
            Favorite.remove(productId)
        }

    }
    return (
        <Box
            position='relative'
            w='700px'
            bg='white'
            boxShadow='sm'
            borderRadius='xl'
            cursor='pointer'
            border='solid 2px'
            borderColor='transparent'
            overflow='hidden'
            onClick={(e) => handleClick(e)}
            _hover={{
                "borderColor": 'green.100'
            }}
        >
            <Grid
                templateColumns={{
                    base: '100%',
                    lg: '300px 1fr'
                }}
                gap={10}
            >
                <Box>


                    <ProductIllustrationWithSwap
                        imagesUrl={[
                            'https://static-mapetitemercerie.o10c.net/88723-large_default/patron-l-enfant-roi-chemise-xavier-de-2-ans-a-12-ans.jpg',
                            'https://www.ladroguerie.com/wp-content/uploads/2020/02/patron-couture-deauville-chemise-homme-mesures.jpg'
                        ]}
                    />
                    {/* <AddTo */}
                </Box>

                <VStack
                    spacing={4}
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
                    <Box fontSize='small'>
                        { intro }
                    </Box>
                    <HStack>
                        <Badge>12€</Badge>
                        <Badge>Pochette</Badge>
                        <Badge variant='subtle' colorScheme='cyan'>Niveau 3</Badge>
                    </HStack>


                </VStack>
            </Grid>
            <Box
                position='absolute'
                top={5}
                right={5}
            >
                <Button
                    mt={0}
                    pt={0}
                    size='sm'
                    ref={favoriteButton}
                    title='Add to favorite'
                    key={Favorite.isFavorite(productId)}
                    variant='outline'
                    colorScheme={Favorite.isFavorite(productId) ? 'white' : 'gray'}
                >
                    <StarIcon
                        color={ Favorite.isFavorite(productId) ? 'red.500' : 'gray.400'}
                        pointerEvents='none'
                        w={3}
                        h={3}
                    />
                </Button>
            </Box>
        </Box>
    )
}

export default ProductCard