import React, { FunctionComponent } from 'react'
import { Transition } from 'react-transition-group';

import { Box, Button, Flex, Stack, VStack, Text } from '@chakra-ui/react'
import CtaSearch from '../CtaSearch'

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
    handleChange: Function,
    hideFilter: Function,
    isVisible: Boolean
}

const duration = 300;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out, transform  ${duration}ms ease-in-out`,
    transform: `translateX(-100%)`,
    opacity: 0,
    pointerEvents: `none`
}

const transitionStyles = {
    entering: {
        opacity: 1,
        transform: `translateX(0)`,
    },
    entered: {
        opacity: 1,
        pointerEvents: `auto`,
        transform: `translateX(0)`,
    },
    exiting: {
        opacity: 0,
        transform: `translateX(-10px)`
    },
    exited: {
        opacity: 0,
        transform: `translateX(-10px)`,
    },
}

const conf = {
    "3v7MEyPWB0d1FOYFa9odJV": { // Jupes
        length: true,
        pocket: true,
        waist: true,
        closing: true,
        asymetrical: true,

        size: true,
        level: true,
        document: false,
    },
    "2aMnwR8nnDdeb0PNj2SBe9": { // Haut
        size: true,
        pocket: true,
        length: false,
        level: true
    }
}

const RefineFilters: FunctionComponent<props> = (
    {
        mainFilters,
        handleChange,
        refineFilters,
        isVisible,
        hideFilter
    }) => {
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
        length: Length,
        asymetrical: Asymetrical,
        pocket: Pocket,
        closeing: Closing,
        waist: Waist,

        size: Size,
        level: Level,
        document: DocumentType
    }

    let Filters = []

    for (const [key, value] of Object.entries(conf[mainFilters.category])) {
        let FilterComponent = allFilters[key]
        if (value && FilterComponent) {
            Filters.push(
                <AccordionItem key={key} >
                    <FilterComponent handleChange={(name, value) => handleChange(name, value)} />
                </AccordionItem>
            )
        }
    }

    // for (const [key, value] of Object.entries( conf['3v7MEyPWB0d1FOYFa9odJV'] )) {
    //     // console.log(`${key}: ${value}`);
    //     Filters.push( key )
    //   }
    return (
        <Transition in={isVisible} timeout={duration}>
            {state => (
                <Box
                    w={{ base: 'full', lg: 'auto' }}
                    // h={{ base: '100vh', lg: 'auto' }}

                    // overflowY='scroll'
                    maxH={{ base: 'auto', lg: '75vh' }}

                    background={{ base: 'white', lg:'transparent' }}

                    style={{
                        ...defaultStyle,
                        ...transitionStyles[state]
                    }}

                >
                    <Box>
                        <Text p={2}>Affiner par : </Text>
                        <Accordion defaultIndex={[0]} allowMultiple>
                            {Filters}
                        </Accordion>
                        <Button
                            display={{ base:'flex', lg:'none'}}
                            mt={2}
                            w={{ base:'full', lg:'auto'}}
                            onClick={() => hideFilter()}
                        >Valider</Button>
                    </Box>
                </Box>
            )}
        </Transition>
    )
}

export default RefineFilters