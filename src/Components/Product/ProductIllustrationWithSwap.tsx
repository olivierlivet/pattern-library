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