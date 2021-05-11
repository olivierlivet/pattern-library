import * as React from "react"
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

const EmptyLayout = (
    {
        children,
    }) => {
    return (
        <ContentfulProvider client={contentfulClient}>
        <ChakraProvider theme={theme}>
            <CSSReset />
            {children}
        </ChakraProvider>
        </ContentfulProvider>
    )
}

export default EmptyLayout