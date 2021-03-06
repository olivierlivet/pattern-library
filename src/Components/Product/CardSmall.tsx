import React, { FunctionComponent, useRef } from 'react'
import { Link as GatsbyLink } from 'gatsby'
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
import FavoriteButton from '../Favorite/Button'
import BuyButton from './BuyButton'

type productCardPropsTypes = {
    title: string,
    level: number,
    rating: number,
    backendDocumentId: string,
    intro: string,
    price: number,
    pictures: Array<string>,
    slug?: string,

    onOpen: Function
}


const ProductCard: FunctionComponent<productCardPropsTypes> = ({
    backendDocumentId,
    title,
    level,
    rating,
    intro,
    // editor,
    price,
    pictures,
    slug,
    onOpen
}) => {
    const favoriteButton = useRef()
    const handleClick = (e) => {
        onOpen()
        // console.log(e.target, favoriteButton.current)
        // e.target !== favoriteButton.current ?
        //     onOpen()
        //     :
        //     console.log('ad to favorite')
        // if (!Favorite.isFavorite(productId)) {
        //     Favorite.add(productId)
        // } else {
        //     Favorite.remove(productId)
        // }

    }
    return (
        <Box
            bg='brand.green.500'
            borderRadius='xl'

            bgGradient='linear( to-t, brand.green.600, brand.green.500 )'

        >
            <Box
                onClick={(e) => handleClick(e)}

                position='relative'
                bg='white'
                boxShadow='sm'
                borderRadius='xl'
                bgColor='white'
                cursor='pointer'
                // border='solid 2px'
                // borderColor='transparent'
                overflow='hidden'

                transition='transform 300ms ease-in-out, box-shadow 200ms ease-in-out'
                _hover={{
                    // "borderColor": 'green.100'
                    transform: { base:'none', lg:'translateX(30px)' },
                    boxShadow: 'lg'
                }}
                w={{ base: 'auto', lg: '700px' }}
            // m={ 4 }
            >
                <Grid
                    templateColumns={{
                        base: '100%',
                        lg: '300px 1fr'
                    }}
                    gap={{ base: 0, lg: 10 }}
                >
                    <Box
                        w={{ base: '100%', lg: '300px' }}
                        // h={{ base:'400px'}}
                        overflowY='hidden'
                        position='relative'
                    >
                        { pictures && pictures.url ? 
                        <ProductIllustrationWithSwipe
                            alt={title}
                            imagesUrl={pictures.url}
                        />
                        : null }
                    </Box>

                    <VStack
                        spacing={4}
                        p={5}
                        align='start'
                        justify='center'

                    >

                        <Heading
                            as={ slug ? GatsbyLink : 'h3' }
                            to={ slug }
                            fontSize='28px'
                            letterSpacing='wide'
                            fontWeight='normal'
                        >{title}</Heading>


                        <SimpleGrid
                            columns={3}
                            gap={4}
                        >
                            <Flex wrap='wrap'>
                                <Text w='100%' color='gray.600' textTransform='uppercase' fontSize='12px' letterSpacing='wider'>Évaluation</Text>
                                <Flex align='center'>
                                    <Text w='100%' mr={2} fontSize={{ base:'sm', lg:'sm'}}>4/5</Text>
                                    <StarIcon color='yellow.300' w={3} h={3} />
                                    <StarIcon color='yellow.300' w={3} h={3} />
                                    <StarIcon color='yellow.300' w={3} h={3} />
                                    <StarIcon color='yellow.300' w={3} h={3} />
                                </Flex>
                            </Flex>

                            <Flex wrap='wrap'>
                                <Text w='100%' color='gray.600' textTransform='uppercase' fontSize='12px' letterSpacing='wider'>Taille</Text>
                                <Text w='100%' fontSize={{ base:'sm', lg:'sm'}}>36→44</Text>
                            </Flex>

                            <Flex wrap='wrap'>
                                <Text w='100%' color='gray.600' textTransform='uppercase' fontSize='12px' letterSpacing='wider'>Niveau</Text>
                                <Text w='100%' fontSize={{ base:'sm', lg:'sm'}}>
                                    {
                                        level === 1 ? 'Débutante'
                                            : level === 2 ? 'Intermédiaire'
                                                : level === 3 ? 'Avancée'
                                                    : level === 4 ? 'Expert'
                                                        : null
                                    }
                                </Text>
                            </Flex>
                        </SimpleGrid>
                        <Box>
                            <BuyButton price={price} product={backendDocumentId} />
                        </Box>


                    </VStack>
                </Grid>
                <Box
                    position='absolute'
                    top={5}
                    right={5}
                >
                    <FavoriteButton
                        product={backendDocumentId}
                        price={price}
                    />
                    {/* <Button
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
                </Button> */}
                </Box>
            </Box>
        </Box>
    )
}

export default ProductCard