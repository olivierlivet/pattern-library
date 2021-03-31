import * as React from "react"
import Header from './Header'
import BackButton from './BackButton'
import { ChakraProvider, CSSReset, Box } from "@chakra-ui/react"

const baseLayout = ({ children, enableBackButton }) => {
    return(
    <ChakraProvider>
        <CSSReset />
        <Header />
        <Box
            // maxW='1300px'
            // mx='auto'
            px={{ base:2, lg:0 }}
            as='main'
            position='relative'
        >
            { enableBackButton ?   <BackButton /> : null }
            {children}
        </Box>

    </ChakraProvider>
    )
}

export default baseLayout