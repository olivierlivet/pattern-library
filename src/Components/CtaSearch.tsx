import { Box, Button, Center, SimpleGrid } from '@chakra-ui/react'
import React, { useState } from 'react'

import CtaSearchStep1 from './CtaSearchStep1'
import CtaSearchStep2 from './CtaSearchStep2'

import { Transition } from 'react-transition-group';
import { ArrowDownIcon } from '@chakra-ui/icons';

const duration = 200;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out, transform  ${duration}ms ease-in-out`,
    opacity: 0,
    transform: `translateY(-20px)`,
}

const transitionStyles = {
    entering: {
        opacity: 1,
        transform: `translateY(0)`
    },
    entered: {
        top:'-20px',
        opacity: 1,
        transform: `translateY(0)`,
        // pointerEvents: `auto`
    },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
}

const CtaSearch = ({ }) => {
    const [step, setStep] = useState(0)
    return (
        <>
            <Center
                // p={20}

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
                        zIndex='docked'
                        position='relative'
                        onClick={() => setStep(step === 0 ? 1 : 0)}

                    >
                        Je cherche un patron pour
                        <ArrowDownIcon ml={2} />
                    </Box>

                    <Transition in={step > 0} timeout={duration}>
                        {state => (

                            <Box
                                // border='solid 2px'
                                // borderColor='#88A7AA'
                                bg='white'


                                position='absolute'
                                top='-20px'
                                left='-10px'
                                right='-10px'
                                borderRadius='xl'
                                boxShadow='xl'
                                // pt={20}
                                overflow='hidden'
                                zIndex='base'
                                style={{
                                    ...defaultStyle,
                                    ...transitionStyles[state]
                                }}
                            >
                                <SimpleGrid
                                    columns={ 2 }
                                    pt='70px'
                                    w='200%'
                                    // transform={`translateX(${ step===1 ? '0' : '-50%'})`}
                                    transition='transform 200ms ease'
                                    style={
                                        step === 2
                                            ?
                                                {transform:`translateX(-50%)`}
                                            :
                                                {transform:`none`}

                                    }
                                >
                                    <CtaSearchStep1
                                        isVisible={step === 1 ? true : false}
                                        handleNextStep={()=> setStep( step + 1 )}
                                    />
                                    <CtaSearchStep2
                                        isVisible={step === 2 ? true : false}
                                        handleStepBack={()=> setStep(1)}
                                    />
                                </SimpleGrid>
                                
                            </Box>
                        )}
                    </Transition>
                </Box>

            </Center>

        </>
    )
}

export default CtaSearch