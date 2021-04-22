import { Button } from '@chakra-ui/button';
import { ArrowBackIcon, ArrowForwardIcon, CloseIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/layout'
import React, { FunctionComponent } from 'react'
import { Transition } from 'react-transition-group';

type props = {
    isVisibe: boolean,
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

const CtaSearchStep2: FunctionComponent<props> = ({ isVisible, handleStepBack, handleSubmit }) => {
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
                                bg:'none',
                                border:'none'
                            }}
                            _focus={{
                                bg:'none',
                                border:'none'
                            }}
                        >
                            <ArrowBackIcon mr={2} />
                            Retour
                        </Button>
                    </Box>
                    <Box
                            borderBottom='solid 1px'
                            borderBottomColor='gray.50'
                        >
                            <Button
                                onClick={()=>handleSubmit( '3v7MEyPWB0d1FOYFa9odJV')}
                                
                                fontWeight='normal' fontFamily='DM Sans' variant='ghost' w='100%' justifyContent='space-between' >
                                Une jupe
                                <ArrowForwardIcon />
                            </Button>
                        </Box>
                        <Box
                            borderBottom='solid 1px'
                            borderBottomColor='gray.50'
                        >
                            <Button
                                onClick={()=>handleSubmit( '2aMnwR8nnDdeb0PNj2SBe9')}
                                                            
                                fontWeight='normal'
                                fontFamily='DM Sans'
                                variant='ghost'
                                w='100%'
                                justifyContent='space-between'
                            >
                                Un haut
                                <ArrowForwardIcon />
                            </Button>
                        </Box>
                        <Box
                            borderBottom='solid 1px'
                            borderBottomColor='gray.50'
                        >
                            <Button fontWeight='normal' fontFamily='DM Sans' variant='ghost' w='100%' justifyContent='space-between' >
                                Un haut
                                <ArrowForwardIcon />
                            </Button>
                        </Box>
                        <Box
                            borderBottom='solid 1px'
                            borderBottomColor='gray.50'
                        >
                            <Button fontWeight='normal' fontFamily='DM Sans' variant='ghost' w='100%' justifyContent='space-between' >
                                Un pantalon
                                <ArrowForwardIcon />
                            </Button>
                        </Box>
                    
                </Box>
            )}
        </Transition>
    )
}

export default CtaSearchStep2