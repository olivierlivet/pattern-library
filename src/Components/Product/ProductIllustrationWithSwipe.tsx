import React, { createRef, FunctionComponent, useState, useMemo } from 'react'
import { Box, Button, Center, Flex, Image, Text } from '@chakra-ui/react'
import ReactSwipe from 'react-swipe';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { config } from '../../config';

type propTypes = {
    imagesUrl: Array<string>,
    alt: string
}

const ProductIllustrationWithSwipe: FunctionComponent<propTypes> = (
    {
        alt,
        imagesUrl
    }) => {
    // const [isHover, setIsHover] = useState(false)
    let reactSwipeEl;

    if (reactSwipeEl) {
        console.log('reactSwipeEl.getNumSlides()', reactSwipeEl.getPos())

    }
    const [currentPicture, setPicture] = useState(0)

    const Pagination = () => (
        imagesUrl ?
            <Flex fontSize='xl' justifyContent='center' w='100%'>
                { imagesUrl.length
                ? imagesUrl.map((item, index) =>
                    <Text
                        color={ index === currentPicture  ? '#88a7aa' : 'white'} key={item}>•</Text>)
                : <div>no photo</div>}
            </Flex>
        : null
    )

    const swipeOptions = useMemo(
        () => ({
            continuous: true,
            stopPropagation: true,
          transitionEnd( index ) {
            setPicture( index );
          }
        }),
        []
      );

    return (
        <>
            <Box>
                {/* <pre>
                    { JSON.stringify( imagesUrl , null, 1 )}
                </pre> */}
                <ReactSwipe
                    className="carousel"
                    swipeOptions={ swipeOptions }
                    ref={el => (reactSwipeEl = el)}
                >
                    {imagesUrl && imagesUrl[0] ?
                        imagesUrl.map(path =>
                            <Box
                                key={path}
                                h='100%'
                                minH='100%'
                            >
                                <Image
                                    // objectFit='cover'
                                    loading='lazy'
                                    w='100%'
                                    h='100%'
                                    alt={alt}
                                    src={path ? `${ config.imageCdnBaseUrl }${path}?twic=v1/cover=300x300/format=webp/quality=60` : null} />
                            </Box>
                        )
                    : null}
                </ReactSwipe>

                <Flex
                    justify='space-between'
                    alignItems='center'
                    position='absolute'
                    bottom={0}
                    top={0}
                    left={0}
                    right={0}
                    h='100%'
                    px={3}
                    display={{ base:'none', lg:'flex'}}
                >
                    <Button
                        variant='outline'
                        borderRadius='full'
                        color='white'
                        bg='blackAlpha.400'
                        _hover={{
                            color:'gray.800',
                            bg:'whiteAlpha.300'
                        }}
                        textShadow='lg'
           
                        p={0}
                        onClick={(e) =>{
                        e.stopPropagation();
                        reactSwipeEl.prev();  
                    } }>
                        <Center w={6} h={6}>
                        <ArrowBackIcon />

                        </Center>
                    </Button>

                    <Button
                        variant='outline'
                        borderRadius='full'
                        color='white'
                        bg='blackAlpha.400'
                        _hover={{
                            color:'gray.800',
                            bg:'whiteAlpha.300'
                        }}
                        textShadow='lg'
           
                        p={0}
                        onClick={(e) =>{
                        e.stopPropagation();
                        reactSwipeEl.next();  
                    } }>
                        <Center w={6} h={6}>
                        <ArrowForwardIcon />

                        </Center>
                    </Button>
                </Flex>

            </Box>
            <Box
                position='absolute'
                bottom={0}
                w='100%'
                display={{ base: 'block', lg:'none' }}
            >
            <Pagination />
            </Box>
            {/* <Box
                    position='absolute'
                    top='0'
                    left='0'
                    zIndex='tooltip'
                >
                    { reactSwipeEl ? reactSwipeEl.getPos() : 'No index detected'}
                    <button onClick={() => reactSwipeEl.next()}>Next</button>

                </Box> */}
        </>
    )
}

export default ProductIllustrationWithSwipe 