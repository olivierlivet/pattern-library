import { Heading } from '@chakra-ui/layout'
import React, { FunctionComponent } from 'react'

type props = {
    children: string
}

const AccountTitle:FunctionComponent< props >= ({ children }) => {
    return(
        <Heading
            fontSize={{ base: '3xl' , lg:'4xl'}}
            fontWeight='normal'
        >
            { children }
        </Heading>
    )
}

export default AccountTitle