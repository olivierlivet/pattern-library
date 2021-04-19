import { Button } from '@chakra-ui/button';
import { ArrowBackIcon, ArrowForwardIcon, CloseIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/layout'
import React, { FunctionComponent } from 'react'
import { Transition } from 'react-transition-group';

type props = {
    isVisibe: boolean,
    handleStepBack: Function
}

const duration = 300;


const defaultStyle = {
    // transition: `opacity ${duration}ms ease-in-out, transform  ${duration}ms ease-in-out`,
    // opacity: 0,
    // top: 0,
    // left: 0,
    // transform: `translateX(+100%)`,
    // pointerEvents: `none`
}

const transitionStyles = {
    // entering: {
    //     opacity: 1,
    //     transform: `translateX(0)`
    // },
    // entered: {
    //     opacity: 1,
    //     transform: `translateX(0)`,
    //     pointerEvents: `auto`
    // },
    // exiting: {
    //     opacity: 0
    // },
    // exited: {
    //     opacity: 0,
    //     transform: `translateX(100%)`,
    // },
}

const CtaSearchStep2: FunctionComponent<props> = ({ isVisible, handleStepBack }) => {
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
                            <Button fontWeight='normal' fontFamily='DM Sans' variant='ghost' w='100%' justifyContent='space-between' onClick={()=>handleChangeStep()}>
                                Une robe
                                <ArrowForwardIcon />
                            </Button>
                        </Box>
                        <Box
                            borderBottom='solid 1px'
                            borderBottomColor='gray.50'
                        >
                            <Button fontWeight='normal' fontFamily='DM Sans' variant='ghost' w='100%' justifyContent='space-between' onClick={()=>handleChangeStep()}>
                                Une jupe
                                <ArrowForwardIcon />
                            </Button>
                        </Box>
                        <Box
                            borderBottom='solid 1px'
                            borderBottomColor='gray.50'
                        >
                            <Button fontWeight='normal' fontFamily='DM Sans' variant='ghost' w='100%' justifyContent='space-between' onClick={()=>handleChangeStep()}>
                                Un haut
                                <ArrowForwardIcon />
                            </Button>
                        </Box>
                        <Box
                            borderBottom='solid 1px'
                            borderBottomColor='gray.50'
                        >
                            <Button fontWeight='normal' fontFamily='DM Sans' variant='ghost' w='100%' justifyContent='space-between' onClick={()=>handleChangeStep()}>
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