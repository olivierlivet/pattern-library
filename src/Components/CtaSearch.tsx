import { Box, Button, Center } from '@chakra-ui/react'
import React, { useState } from 'react'

import CtaSearchStep1 from './CtaSearchStep1'
import CtaSearchStep2 from './CtaSearchStep2'

import { Transition } from 'react-transition-group';

const duration = 150;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out, transform  ${duration}ms ease-in-out`,
    opacity: 0,
    top: '40px',
    left: 0,
    transform: `translateY(-40px)`,
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

const CtaSearch = ({ }) => {
    const [step, setStep] = useState(0)
    return (
        <>
            <Center
                p={20}
                minH='100vh'

            >
                <Box
                    position='relative'

                >
                    <Box
                        bg='#88A7AA'
                        borderRadius={3}
                        fontFamily='Noe Display'
                        fontWeight='normal'
                        p={4}
                        py={2}
                        color='white'
                        onClick={() => setStep(step === 0 ? 1 : 0)}

                    >
                        Je chercher un patron ↓</Box>

                    <Transition in={step > 0} timeout={duration}>
                        {state => (

                            <Box
                                border='solid 2px'
                                borderColor='#88A7AA'
                                w='200px'
                                position='absolute'
                                top='30px'
                                left='0'

                                overflow='hidden'

                                style={{
                                    ...defaultStyle,
                                    ...transitionStyles[state]
                                }}
                            >
                                <CtaSearchStep1
                                    isVisible={step === 1 ? true : false}
                                    handleChangeStep={()=> setStep( step + 1 )}
                                />
                                <CtaSearchStep2
                                    isVisible={step === 2 ? true : false}
                                />
                            </Box>
                        )}
                    </Transition>
                </Box>

            </Center>

        </>
    )
}

export default CtaSearch