import React from 'react'

import { Heading } from '@chakra-ui/layout'

const SubTitle = ({ children, as }) => {
    return(
        <Heading
            // px={ 4 }
            fontSize={{ base:'large', lg:'large'}}
            fontWeight='normal'
            fontFamily='Noe Display'
        >
            {children}
        </Heading>
    )
}

export default SubTitle