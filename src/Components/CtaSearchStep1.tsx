import { Button } from '@chakra-ui/button';
import { Box } from '@chakra-ui/layout'
import React, { FunctionComponent } from 'react'
import { Transition } from 'react-transition-group';

type props = {
    isVisibe: boolean,
    handleChangeStep: Function
}

const duration = 300;


const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out, transform  ${duration}ms ease-in-out`,
    opacity: 0,
    // top: 0,
    // left: 0,
    // transform: `translateX(-100%)`,
    pointerEvents: `none`
}

const transitionStyles = {
    entering: {
        opacity: 1,
        // transform: `translateX(0)`
    },
    entered: {
        opacity: 1,
        // transform: `translateX(0)`,
        pointerEvents: `auto`
    },
    exiting: {
        opacity: 0,
        transform: `translateX(-100%)`
    },
    exited: {
        opacity: 0,
        transform: `translateX(-100%)`,
    },
}

const CtaSearchStep1: FunctionComponent<props> = ({ isVisible, handleChangeStep }) => {
    return (
        <Transition in={isVisible} timeout={duration}>
            {state => (
                <Box
                    zIndex='modal'
                    // position='absolute'
                    style={{
                        ...defaultStyle,
                        ...transitionStyles[state]
                    }}
                    >
                    <Button variant='ghost' onClick={()=>handleChangeStep()}>
                        Pour une femme
                    </Button>
                    <Button variant='ghost'>
                        Pour un enfant
                    </Button>
                    <Button variant='ghost'>
                        Pour un homme
                    </Button>
                    <Button variant='ghost'>
                        Un accessoire
                    </Button>
                </Box>
            )}
        </Transition>
    )
}

export default CtaSearchStep1