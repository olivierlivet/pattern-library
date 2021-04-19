import React, { FunctionComponent } from 'react'

import { Box, Grid } from '@chakra-ui/layout'

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,

    Heading
} from "@chakra-ui/react"

type props = {
    title: string,
    more: Function
}

const AccordionBlock: FunctionComponent<props> = (
    {
        title
    }) => {
    return (
        <Grid
            templateColumns={{
                base: '100%',
                lg: '500px 1fr'
            }}
            p={{ base: 6, lg: 24 }}
        >
            <Heading
                fontWeight='normal'
                fontSize={{ base:'2xl', lg:'4xl'}}
                mb={{ base: 8 }}
            >
                {title}
            </Heading>
            <Box>
                <Accordion>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    La plus large librairie de patrons en ligne
        </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
    </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    Des frais de livraisons offerts
        </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
    </AccordionPanel>
                    </AccordionItem>


                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    Les conseils avisés de toute la communauté

        </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
    </AccordionPanel>
                    </AccordionItem>



                </Accordion>
            </Box>
        </Grid>
    )
}

export default AccordionBlock