import React, { FunctionComponent, useEffect, useState } from 'react'
import { Button } from '@chakra-ui/button';
import { ArrowBackIcon, ArrowForwardIcon, CloseIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/layout'

import { Transition } from 'react-transition-group';
import getCategories from '../Data/getCategories'

type props = {
    isVisibe: boolean,
    univers: string,
    handleStepBack: Function,
    handleSubmit: Function
}

const duration = 300;


const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out, max-height  ${duration}ms ease-in-out`,
    maxHeight: '0px'
}

const transitionStyles = {
    entering: {
        opacity: 1,
        maxHeight: '1000px'
        // transform: `translateX(0)`
    },
    entered: {
        opacity: 1,
        maxHeight: '1000px'

        // transform: `translateX(0)`,
        // pointerEvents: `auto`
    },
    exiting: {
        opacity: 0,
        maxHeight: '0px'
        // transform: `translateX(-100%)`
    },
    exited: {
        opacity: 0,
        maxHeight: '0px'


    },
}

const CtaSearchStep2: FunctionComponent<props> = (
    {
        univers,
        isVisible,
        handleStepBack,
        handleSubmit
    }) => {
    const [categories, setCategories] = useState(null)

    useEffect(() => {
        // console.log('Load CtaSearch')
        if( univers ){
            getCategories( univers ).then((response) =>{ setCategories(response.items) })
        }
    }, [])

    return (
        <Transition in={isVisible} timeout={duration}>
            {state => (
                <Box
                    // zIndex='modal'
                    // position='absolute'

                    style={{
                        ...defaultStyle,
                        ...transitionStyles[state]
                    }}
                >
                    <Box
                        borderBottom='solid 1px'
                        borderBottomColor='gray.200'
                    >
                        <Button
                            fontWeight='normal'
                            fontFamily='DM Sans'
                            color='gray.700'
                            fontSize='sm'
                            variant='ghost'
                            w='100%'
                            justifyContent='flex-start'
                            onClick={() => handleStepBack()}

                            _hover={{
                                bg: 'none',
                                border: 'none'
                            }}
                            _focus={{
                                bg: 'none',
                                border: 'none'
                            }}
                        >
                            <ArrowBackIcon mr={2} />
                            Retour
                        </Button>
                    </Box>
                    { categories ?
                        categories.length && categories.map( category =>
                    <Box
                        borderBottom='solid 1px'
                        borderBottomColor='gray.50'
                    >
                        <Button
                            onClick={() => handleSubmit( { id: category.sys.id, label: category.fields.title } )}

                            fontWeight='normal' fontFamily='DM Sans' variant='ghost' w='100%' justifyContent='space-between' >
                            { category.fields.title }
                            <ArrowForwardIcon />
                        </Button>
                    </Box>
                        )
                    : null }
                    
                   

                </Box>
            )}
        </Transition>
    )
}

export default CtaSearchStep2