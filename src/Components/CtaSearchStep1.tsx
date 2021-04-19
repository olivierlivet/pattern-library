import { Button } from '@chakra-ui/button';
import { ArrowForwardIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/layout'
import React, { FunctionComponent } from 'react'
import { Transition } from 'react-transition-group';

type props = {
    isVisibe: boolean,
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

const CtaSearchStep1: FunctionComponent<props> = ({ isVisible, handleNextStep }) => {
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
                        <Box
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
                        </Box>
                        <Box
                            borderBottom='solid 1px'
                            borderBottomColor='gray.50'
                        >
                            <Button fontWeight='normal' fontFamily='DM Sans' variant='ghost' w='100%' justifyContent='space-between'
                                onClick={()=>handleNextStep()}
                            >
                                Pour un enfant
                                <ArrowForwardIcon />
                            </Button>
                        </Box>
                        <Box
                            borderBottom='solid 1px'
                            borderBottomColor='gray.50'
                        >
                            <Button fontWeight='normal' fontFamily='DM Sans' variant='ghost' w='100%' justifyContent='space-between'
                                onClick={()=>handleNextStep()}

                            >
                                Pour un homme
                                <ArrowForwardIcon />
                            </Button>
                        </Box>
                        <Box
                            borderBottom='solid 1px'
                            borderBottomColor='gray.50'
                        >
                            <Button fontWeight='normal' fontFamily='DM Sans' variant='ghost' w='100%' justifyContent='space-between'
                                onClick={()=>handleNextStep()}

                            >
                                Pour un accessoire
                                <ArrowForwardIcon />
                            </Button>
                        </Box>
                </Box>
            )}
        </Transition>
    )
}

export default CtaSearchStep1