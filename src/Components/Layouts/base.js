import * as React from "react"
import { ChakraProvider, CSSReset } from "@chakra-ui/react"

const baseLayout = ({ children }) => {
    return(
    <ChakraProvider>
        <CSSReset />
        {children}
    </ChakraProvider>
    )
}

export default baseLayout