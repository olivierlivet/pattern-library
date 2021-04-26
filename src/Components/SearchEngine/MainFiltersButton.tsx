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
        // handleLoadSearchEngine,
        setCategory,
        label,
        display,
        size
    }) => {
    const [step, setStep] = useState(0)
    const [univers, setUnivers] = useState(null)

    const [btnLabel, setBtnLabel] = useState();

    const MainButton = () => (
        size === 'small' ?
            <Button
                bg='#66878a'
                borderRadius={3}
                fontFamily='Noe Display'
                fontWeight='normal'
                fontSize='sm'
                p={2}
                py={2}
                h='auto'
                color='white'
                zIndex='overlay'
                position='relative'
                // w='85%'
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
                {btnLabel ? btnLabel : label}
                <ArrowDownIcon ml={2} />
            </Button>
            :
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
                {btnLabel ? btnLabel : label}
                <ArrowDownIcon ml={2} />
            </Button>
    )
    return (
        <>

            <Box
                position='relative'
                // mb={4}
                display={display}
            >
                <ButtonGroup w='full'>
                    <Button
                        w='15%'
                        variant='outline'
                        onClick={() => navigate('/fr')}
                        display={{ base: 'none', lg: 'block' }}
                    >
                        <ArrowBackIcon />
                    </Button>
                    <MainButton />


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
                                    handleNextStep={value => {
                                        setBtnLabel(value.label);
                                        setUnivers(value.id);
                                        setStep(step + 1);
                                    }}
                                    setCategory={(value) => setCategory(value)}
                                />
                                <CtaSearchStep2
                                    key={univers}
                                    isVisible={step === 2 ? true : false}
                                    setCategory={(value) => setCategory(value)}
                                    handleStepBack={() => setStep(1)}
                                    univers={univers}

                                    handleSubmit={(value) => {
                                        setCategory(value.id);
                                        setBtnLabel(`${btnLabel}/${value.label}`);
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