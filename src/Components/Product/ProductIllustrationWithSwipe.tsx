import React, { FunctionComponent, useState } from 'react'
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import ReactSwipe from 'react-swipe';

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

    const [currentIndex, setIndex] = useState(0)

    const Pagination = () => (
        imagesUrl ?
            <Flex fontSize='xl' justifyContent='center' w='100%'>
                { imagesUrl.length
                ? imagesUrl.map((item, index) => <Text color={ index === currentIndex ? 'blue.300' : 'white'} key={item}>•</Text>)
                : <div>no photo</div>}
            </Flex>
        : null
    )

    return (
        <>
            <Box>


                <ReactSwipe
                    className="carousel"
                    swipeOptions={{
                        continuous: false,
                        stopPropagation: true,
                        transitionEnd: function (index, elem) { setIndex(index) }
                    }}
                    ref={el => (reactSwipeEl = el)}

                >
                    {imagesUrl && imagesUrl[0] ?
                        imagesUrl.map(item =>
                            <Box
                                // onMouseEnter={()=> setIsHover( true )}
                                // onMouseLeave={()=>setIsHover( false)}
                                // p={{ base:4, lg: 8 }}
                                // maxW={{ base:'80%', lg:'100%' }}
                                // maxH={{ base:''}}
                                key={item}
                                h='100%'
                                minH='100%'
                            // w='100%'
                            // mx='auto'
                            >
                                <Image
                                    // objectFit='cover'
                                    // w='100%'
                                    // h='100%'
                                    alt={alt}
                                    src={item} />
                            </Box>
                        )


                        : null}

                </ReactSwipe>

                {/* <Box
                    position='absolute'
                    top='0'
                >
                    <div>{currentIndex}</div>
                    <button onClick={() => reactSwipeEl.prev()}>Previous</button>
                    <button onClick={() => reactSwipeEl.next()}>Previous</button>
                    <button onClick={() => console.log(reactSwipeEl.getPos())}> Index ?</button>
                </Box>

                {reactSwipeEl ?
                    reactSwipeEl.getPos()
                    : null
                } */}

            </Box>
            <Box
                position='absolute'
                bottom={0}
                w='100%'
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