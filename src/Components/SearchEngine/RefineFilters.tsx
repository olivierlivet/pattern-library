import React, { FunctionComponent } from 'react'

import { Box, Flex, Stack, VStack, Text } from '@chakra-ui/react'
import filters from './filters'

import {
    DocumentType,
    Length,
    Size,
    Pocket,
    Waist,
    Closing,
    Asymetrical,
    Level,
    Neckline,
    Collar,
    Sleeve,
} from './Filters/index'


import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from "@chakra-ui/react"

type props = {
    mainFilters: Object,
    refineFilters: Object,
    handleChange: Function
}

const conf = {
    "3v7MEyPWB0d1FOYFa9odJV": { // Jupes
        size: true,
        pocket: true,
        length: false,
        level: true,
        document: true
    },
    "2aMnwR8nnDdeb0PNj2SBe9": { // Haut
        size: true,
        pocket: true,
        length: false,
        level: true
    }
}

const RefineFilters: FunctionComponent<props> = ({ mainFilters, handleChange, refineFilters }) => {
    if (!mainFilters.category) { return false }

    // const FiltersList = (

    //     Object.entries(conf['3v7MEyPWB0d1FOYFa9odJV'].forEach(( item ) =>{
    //         console.log(`${item}`);

    //     })
    // )
    // const Filters = Object.entries( conf['3v7MEyPWB0d1FOYFa9odJV'] ).map( item => {
    //     // <div>filter slice { item.key }</div>
    //     let [key, value] of item
    //     console.log( item )
    // })
    const allFilters = {
        size: Size,
        pocket: Pocket,
        length: Length,
        level: Level,
        document: DocumentType
    }

    let Filters = []

    for (const [key, value] of Object.entries(conf[mainFilters.category])) {
        let FilterComponent = allFilters[key]
        if (value && FilterComponent) {
            Filters.push(
                <AccordionItem>
                    <FilterComponent key={key} handleChange={(name,value)=> handleChange( name, value )} />
                </AccordionItem>
            )
        }
    }

    // for (const [key, value] of Object.entries( conf['3v7MEyPWB0d1FOYFa9odJV'] )) {
    //     // console.log(`${key}: ${value}`);
    //     Filters.push( key )
    //   }
    return (
        <Box
            maxH='100vh'
            overflowY='scroll'
        >
            {/* <Stack
                spacing={ 8 }   
                m={{ base:2, lg:2 }}
            > */}

            <Text p={4 }>Affiner par : </Text>
            <pre>
                { JSON.stringify( refineFilters, null, 1 )}
            </pre>
            <Accordion defaultIndex={[0]} allowMultiple>
                {Filters}
            </Accordion>
            {/* </Stack> */}
        </Box>
    )
}

export default RefineFilters