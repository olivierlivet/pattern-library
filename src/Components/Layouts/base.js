import * as React from "react"
import Header from './Header'
import Footer from './Footer'
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
            bg='#E3F4F0'
            px={{ base:0, lg:0 }}
            as='main'
            position='relative'
            minH='100vh'
            pt={'104px'}
        >
            { enableBackButton ?   <BackButton /> : null }
            {children}
        </Box>
        <Footer />

    </ChakraProvider>
    )
}

export default baseLayout