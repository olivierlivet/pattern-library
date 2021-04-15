import React, { FunctionComponent } from 'react'
import { Transition } from 'react-transition-group';

import { Box } from '@chakra-ui/react'

type props = {
    isVisible: Boolean,
    onClick: Function
}

const duration = 300;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out, transform  ${duration}ms ease-in-out`,
    opacity: 0,
    pointerEvents: `none`
}

const transitionStyles = {
    entering: {
        opacity: 1,
    },
    entered: {
        opacity: 1,
        pointerEvents: `auto`
    },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
};

const CategoryChoiceOverlay: FunctionComponent<props> = ({ isVisible, onClick }) => {
    return (
        <Transition in={isVisible} timeout={duration}>
            {state => (
                <Box
                    cursor='wait'
                    position="fixed"
                    top={0}
                    bottom={0}
                    left={0}
                    right={0}
                    bg='whiteAlpha.900'
                    zIndex='docked'

                    onClick={ ()=>onClick() }

                    style={{
                        ...defaultStyle,
                        ...transitionStyles[state]
                    }}

                />
            )}
        </Transition>
    )
}

export default CategoryChoiceOverlay