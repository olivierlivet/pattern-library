import * as React from "react"
import Header from './Header'
import Footer from './Footer'
import BackButton from './BackButton'
import { ChakraProvider, CSSReset, Box } from "@chakra-ui/react"
import '../../Fonts/stylesheet.css'
import { extendTheme } from "@chakra-ui/react"

const colors = {
    brand: {
        pink: {
            400: '#E7B8A9',
            300: '#EFCBBF'
        }
    }

}
const fonts = {

    body: "DM Sans",
    heading: "Noe Display, serif",
    mono: "Menlo, monospace",

}
const theme = extendTheme({
    "colors": colors,
    "fonts": fonts
})

const baseLayout = (
    {
        children,
        isFooterHidden,
        enableBackButton
    }) => {
    return (
        <ChakraProvider theme={theme}>
            <CSSReset />
            <Header />
            <Box
                // maxW='1300px'
                // mx='auto'
                // bg='#E3F4F0'
                bg='#d9e6e63d'
                px={{ base: 0, lg: 0 }}
                as='main'
                position='relative'
                minH='100vh'
                pt={'48px'}
            >
                {enableBackButton ? <BackButton /> : null}
                {children}
            </Box>
            { !isFooterHidden ? <Footer /> : null }

        </ChakraProvider>
    )
}

export default baseLayout