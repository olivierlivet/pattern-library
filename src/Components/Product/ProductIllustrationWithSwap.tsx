import React, {FunctionComponent, useState} from 'react'
import { Box, Image } from '@chakra-ui/react'

type propTypes = {
    imagesUrl: Array<string>,
    alt: string
}

const ProductIllustrationWithSwap:FunctionComponent<propTypes> = (
    {
        alt,
        imagesUrl
    }) => {
    const [isHover, setIsHover] = useState( false )
    return (
        <Box
            onMouseEnter={()=> setIsHover( true )}
            onMouseLeave={()=>setIsHover( false)}
            // p={{ base:4, lg: 8 }}
            // maxW={{ base:'80%', lg:'100%' }}
            // maxH={{ base:''}}
            h='100%'
            w='100%'
            mx='auto'
        >
            <Image
                objectFit='cover'
                w='100%'
                alt={ alt }
                src={
                !isHover ?
                    imagesUrl[0]
                : 
                    imagesUrl[1]
            } />
        </Box>
    )
}

export default ProductIllustrationWithSwap