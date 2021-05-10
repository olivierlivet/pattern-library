import * as React from "react"
import Header from './Header'
import Footer from './Footer'
import BackButton from './BackButton'
import { ChakraProvider, CSSReset, Box } from "@chakra-ui/react"
import '../../Fonts/stylesheet.css'
import { extendTheme } from "@chakra-ui/react"
import { ContentfulClient, ContentfulProvider } from 'react-contentful';

const colors = {
    brand: {
        pink: {
            400: '#E7B8A9',
            300: '#EFCBBF'
        },
        green: {
            500: '#66878a',
            600: '#4D767A'
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

const contentfulClient = new ContentfulClient({
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    space: process.env.CONTENTFUL_SPACE_ID
  });

const baseLayout = (
    {
        children,
        isFooterHidden,
        enableBackButton
    }) => {
    return (
        <ContentfulProvider client={contentfulClient}>

        <ChakraProvider theme={theme}>
            <CSSReset />
            <Header />
            <Box
                bg='#d9e6e63d'
                px={{ base: 0, lg: 0 }}
                as='main'
                position='relative'
                minH='100vh'
                pt={{
                    base:'48px',
                    lg:'115px'
                }}
            >
                {enableBackButton ? <BackButton /> : null}
                {children}
            </Box>
            { !isFooterHidden ? <Footer /> : null }

        </ChakraProvider>
        </ContentfulProvider>
    )
}

export default baseLayout