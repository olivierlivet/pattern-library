import React, { FunctionComponent, useState, useEffect } from 'react'

import { Button } from '@chakra-ui/button';
import { ArrowForwardIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/layout'
import { Transition } from 'react-transition-group';

import getUnivers from '../Data/getUnivers'


type props = {
    isVisibe: boolean,
    univers: object,
    handleNextStep: Function
}

const duration = 300;


const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out, max-height  ${duration}ms ease-in-out`,
    maxHeight: 0
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

const CtaSearchStep1: FunctionComponent<props> = (
    {
        isVisible,
        handleNextStep,
    }) => {

        const [univers, setUnivers ] = useState(null)


useEffect(() => {
    // console.log('Load CtaSearch')
    getUnivers().then((response) => setUnivers( response.items ))
}, [])


        console.log( univers )
    return (
        <Transition in={isVisible} timeout={duration}>
            {state => (
                <Box
                    zIndex='modal'
                    // position='absolute'
                    w='100%'

                    style={{
                        ...defaultStyle,
                        ...transitionStyles[state]
                    }}
                > 

                    {univers && univers.length ? univers.map(item =>
                        <Box
                            key={item.sys.id}
                            borderBottom='solid 1px'
                            borderBottomColor='gray.50'
                        >
        
                            <Button
                                onClick={() => handleNextStep( { id:item.sys.id, label: item.fields.title } )}
                                fontWeight='normal'
                                fontFamily='DM Sans'
                                variant='ghost'
                                w='100%'
                                justifyContent='space-between'

                                _hover={{
                                    bg: 'none',
                                    border: 'none'
                                }}
                                _focus={{
                                    bg: 'none',
                                    border: 'none'
                                }}
                            >
                                {item.fields.title}
                            <ArrowForwardIcon />
                            </Button>
                        </Box>
                    ) : null }


                    {/* <Box
                            borderBottom='solid 1px'
                            borderBottomColor='gray.50'
                        >
                            <Button
                                onClick={()=>handleNextStep()}
                                fontWeight='normal'
                                fontFamily='DM Sans'
                                variant='ghost'
                                w='100%'
                                justifyContent='space-between'

                                _hover={{
                                    bg:'none',
                                    border:'none'
                                }}
                                _focus={{
                                    bg:'none',
                                    border:'none'
                                }}
                            >
                                Pour une femme
                                <ArrowForwardIcon />
                            </Button>
                        </Box> */}
                </Box>
            )}
        </Transition>
    )
}

export default CtaSearchStep1