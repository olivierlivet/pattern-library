import React, {FunctionComponent, useState} from 'react'
import { Box } from '@chakra-ui/react'

type propTypes = {
    imagesUrl: Array<string>
}

const ProductIllustrationWithSwap:FunctionComponent<propTypes> = ({ imagesUrl }) => {
    const [isHover, setIsHover] = useState( false )
    return (
        <Box
            onMouseEnter={()=> setIsHover( true )}
            onMouseLeave={()=>setIsHover( false)}
            p={{ base:4, lg: 8 }}
            maxW={{ base:'80%', lg:'100%' }}
            mx='auto'
        >
            <img src={
                !isHover ?
                    imagesUrl[0]
                : 
                    imagesUrl[1]
            } />
        </Box>
    )
}

export default ProductIllustrationWithSwap