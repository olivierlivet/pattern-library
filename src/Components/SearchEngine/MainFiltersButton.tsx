import React, { useState, useEffect } from 'react'
import { Box, Button, ButtonGroup, Center, MenuIcon, SimpleGrid } from '@chakra-ui/react'


import CtaSearchStep1 from '../CtaSearchStep1'
import CtaSearchStep2 from '../CtaSearchStep2'

import { Transition } from 'react-transition-group';
import { ArrowBackIcon, ArrowDownIcon, SmallCloseIcon } from '@chakra-ui/icons';
import { navigate } from 'gatsby-link';


const duration = 300;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out, transform  ${duration}ms ease-in-out`,
    opacity: 0,
    transform: `translateY(-20px)`,
    pointerEvents: 'none'
}

const transitionStyles = {
    entering: {
        opacity: 1,
        transform: `translateY(0)`
    },
    entered: {
        opacity: 1,
        transform: `translateY(0)`,
        pointerEvents: `auto`
    },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
}

const MainFiltersButton = (
    {
        handleLoadSearchEngine,
        setVariant,
        label
    }) => {
    const [step, setStep] = useState(0)
    const [univers, setUnivers] = useState(null)
    const [ universList, setUniversList ]       = useState(null)
    const [ category, setCategory ]     = useState(null)





    return (
        <>
        <pre>
            { JSON.stringify( univers, null, 1 )}
        </pre>
            <Box
                position='relative'
                mb={4}
                display={{ base: 'none', lg: 'block' }}
            >
                <ButtonGroup w='full'>
                    <Button
                        w='15%'
                        variant='outline'
                        onClick={() => navigate('/fr')}
                    >
                        <ArrowBackIcon />
                    </Button>
                    <Button
                        bg='#66878a'
                        borderRadius={3}
                        fontFamily='Noe Display'
                        fontWeight='normal'
                        p={6}
                        py={3}
                        color='white'
                        zIndex='overlay'
                        position='relative'
                        w='85%'
                        onClick={() => setStep(step === 0 ? 1 : 0)}
                        _hover={{
                            bg: '#4D767A',
                            outline: 'none'

                        }}
                        _active={{
                            bg: '#4D767A',
                            outline: 'none'

                        }}
                        _focus={{
                            bg: '#4D767A',
                            outline: 'none'
                        }}
                    >
                        { label }
                        <ArrowDownIcon ml={2} />
                    </Button>

                </ButtonGroup>

                <Transition in={step > 0} timeout={duration}>
                    {state => (

                        <Box
                            // border='solid 2px'
                            // borderColor='#88A7AA'
                            bg='white'


                            position='absolute'
                            top='-10px'
                            left='-10px'
                            right='-10px'
                            borderRadius='xl'
                            boxShadow='xl'
                            // pt={20}
                            overflow='hidden'
                            zIndex='banner'
                            style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}
                        >
                            <SimpleGrid
                                columns={2}
                                pt='70px'
                                w='200%'
                                // transform={`translateX(${ step===1 ? '0' : '-50%'})`}
                                transition={`transform ${duration}ms ease`}
                                style={
                                    step === 2
                                        ?
                                        { transform: `translateX(-50%)` }
                                        :
                                        { transform: `none` }

                                }
                            >
                                <CtaSearchStep1
                                    isVisible={step === 1 ? true : false}
                                    setUnivers={(value) => setUnivers(value)}
                                    handleNextStep={() => setStep(step + 1)}
                                    setCategory={(value) => setCategory(value)}
                                />
                                <CtaSearchStep2
                                    isVisible={step === 2 ? true : false}
                                    setCategory={(value) => setCategory(value)}
                                    handleStepBack={() => setStep(1)}

                                    handleSubmit={(value) => {
                                        setCategory(value);
                                        setStep(0);
                                    }
                                    }
                                />
                            </SimpleGrid>

                        </Box>
                    )}
                </Transition>
            </Box>

        </>
    )
}

export default MainFiltersButton