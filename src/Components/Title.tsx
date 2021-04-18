import React from 'react'

import { Heading } from '@chakra-ui/layout'

const Title = ({ children }) => {
    return(
        <Heading
            px={ 4 }
            fontSize={{ base:'x-large', lg:'xx-large'}}
            fontFamily='Neo Display'
        >
            {children}
        </Heading>
    )
}

export default Title