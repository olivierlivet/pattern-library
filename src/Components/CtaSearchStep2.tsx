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
    top: 0,
    left: 0,
    transform: `translateX(+100%)`,
    pointerEvents: `none`
}

const transitionStyles = {
    entering: {
        opacity: 1,
        transform: `translateX(0)`
    },
    entered: {
        opacity: 1,
        transform: `translateX(0)`,
        pointerEvents: `auto`
    },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
}

const CtaSearchStep2: FunctionComponent<props> = ({ isVisible, handleChangeStep }) => {
    return (
        <Transition in={isVisible} timeout={duration}>
            {state => (
                <Box
                    zIndex='modal'
                    position='absolute'

                    style={{
                        ...defaultStyle,
                        ...transitionStyles[state]
                    }}
                    >
                    <Button w='100%' justifyContent='flex-start' variant='ghost' onClick={()=>handleChangeStep()}>
                        Une jupe
                    </Button>
                    <Button variant='ghost'>
                        Un haut
                    </Button>
                    <Button variant='ghost'>
                        Un manteau
                    </Button>
                    <Button variant='ghost'>
                        Une pull
                    </Button>
                </Box>
            )}
        </Transition>
    )
}

export default CtaSearchStep2