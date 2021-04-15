import React, { FunctionComponent, useState } from 'react'
import { Box, Image } from '@chakra-ui/react'
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

    if( reactSwipeEl ){
        console.log( 'reactSwipeEl.getNumSlides()', reactSwipeEl.getPos() )

    }


    return (
        <>
        <ReactSwipe
            className="carousel"
            swipeOptions={{ continuous: true }}
            ref={el => (reactSwipeEl = el)}
            >

{/* <button onClick={() => reactSwipeEl.next()}>Next</button>
<button onClick={() => reactSwipeEl.prev()}>Previous</button> */}

            {imagesUrl && imagesUrl[0] ?
                imagesUrl.map( item =>
                    <Box
                    // onMouseEnter={()=> setIsHover( true )}
                    // onMouseLeave={()=>setIsHover( false)}
                    // p={{ base:4, lg: 8 }}
                    // maxW={{ base:'80%', lg:'100%' }}
                    // maxH={{ base:''}}
                    key={ item }
                    h='100%'
                    minH='100%'
                    // w='100%'
                    // mx='auto'
                >
                    <Image
                        objectFit='cover'
                        w='100%'
                        h='100%'
                        alt={alt}
                        src={ item } />
                </Box>
                     ) 


                : null}
                <Box
                    position='absolute'
                    top='0'
                >
                    <button onClick={() => reactSwipeEl.prev()}>Previous</button>
                </Box>
                
                {/* <Box position='absolute' top='0' left='0'>{ getPos()}</Box> */}


        </ReactSwipe>
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