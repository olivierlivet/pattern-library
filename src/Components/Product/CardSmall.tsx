import React, { FunctionComponent, useRef } from 'react'

type productCardPropsTypes = {
    title: string,
    level: number,
    rating: number,
    productId: string,
    intro: string,
    price: number,
    pictures: Array<string>

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
    VStack,
    SimpleGrid,
    Flex
} from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import ProductIllustrationWithSwap from './ProductIllustrationWithSwap'
import { navigate } from 'gatsby-link'
import Favorite from '../../Services/Favorite'
import HeartIcon from '../../Images/Icons/Favorite'
import ProductIllustrationWithSwipe from './ProductIllustrationWithSwipe'
const ProductCard: FunctionComponent<productCardPropsTypes> = ({
    productId,
    title,
    level,
    rating,
    intro,
    // editor,
    price,
    pictures,
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
            bg='white'
            boxShadow='sm'
            borderRadius='xl'
            bgColor='white'
            cursor='pointer'
            // border='solid 2px'
            // borderColor='transparent'
            overflow='hidden'
            onClick={(e) => handleClick(e)}
            _hover={{
                // "borderColor": 'green.100'
            }}
            w={{ base:'auto', lg:'700px' }}
            // m={ 4 }
        >
            <Grid
                templateColumns={{
                    base: '100%',
                    lg: '300px 1fr'
                }}
                gap={{base: 0, lg:10}}
            >
                <Box
                    w={{ base:'100%', lg:'300px'}}
                    // h={{ base:'400px'}}
                    overflowY='hidden'
                    position='relative'
                >
                    <ProductIllustrationWithSwipe
                        alt={ title }
                        imagesUrl={ pictures }
                        // imagesUrl={[
                        //     'https://img.ltwebstatic.com/images3_pi/2020/10/19/160308384184b44973720f8dfb2b5c9625c3e7faac_thumbnail_600x.webp',
                        //     'https://static-mapetitemercerie.o10c.net/88723-large_default/patron-l-enfant-roi-chemise-xavier-de-2-ans-a-12-ans.jpg',
                        //     'https://www.ladroguerie.com/wp-content/uploads/2020/02/patron-couture-deauville-chemise-homme-mesures.jpg'
                        // ]}
                    />
                </Box>

                <VStack
                    spacing={4}
                    p={5}
                    align='start'
                    justify='center'

                >
                    
                    <Heading
                        as='h3'
                        fontSize='28px'
                        letterSpacing='wide'
                    >{title}</Heading>
                  

                    <SimpleGrid
                columns={3}
                gap={4}
            >
                <Flex wrap='wrap'>
                    <Text w='100%' color='gray.600' textTransform='uppercase' fontSize='12px' letterSpacing='wider'>Évaluation</Text>
                    <Flex align='center'>
                        <Text w='100%' mr={2}>4/5</Text>
                        <StarIcon color='yellow.300' w={3} h={3} />
                        <StarIcon color='yellow.300' w={3} h={3} />
                        <StarIcon color='yellow.300' w={3} h={3} />
                        <StarIcon color='yellow.300' w={3} h={3} />
                    </Flex>
                </Flex>

                <Flex wrap='wrap'>
                    <Text w='100%' color='gray.600' textTransform='uppercase' fontSize='12px' letterSpacing='wider'>Taille</Text>
                    <Text w='100%'>36→44</Text>
                </Flex>

                <Flex wrap='wrap'>
                    <Text w='100%' color='gray.600' textTransform='uppercase' fontSize='12px' letterSpacing='wider'>Prix</Text>
                    <Text w='100%'>{price}
                        <Text as="sup">€</Text>
                    </Text>
                </Flex>
            </SimpleGrid>


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
                    <HeartIcon />
                        {/* color={ Favorite.isFavorite(productId) ? 'red.500' : 'gray.400'}
                        pointerEvents='none'
                        w={3}
                        h={3}
                    /> */}
                </Button>
            </Box>
        </Box>
    )
}

export default ProductCard