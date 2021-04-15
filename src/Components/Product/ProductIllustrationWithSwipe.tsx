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

    return (
        <ReactSwipe
            className="carousel"
            swipeOptions={{ continuous: false }}
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
        </ReactSwipe>
    )
}

export default ProductIllustrationWithSwipe