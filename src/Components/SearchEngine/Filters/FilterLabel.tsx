import React, { FunctionComponent } from 'react'

import {
    AccordionButton,
    AccordionIcon,
    FormLabel } from '@chakra-ui/react'

type props = {
    children: Object
}

const Label: FunctionComponent<props> = ({ children }) => {
    return (
        <AccordionButton>
            <FormLabel flex={1} m={0}>
                {children}
            </FormLabel>
            <AccordionIcon />
        </AccordionButton>
    )
}

export default Label