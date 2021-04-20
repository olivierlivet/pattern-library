import React, { useState } from 'react'
import { Transition } from 'react-transition-group';

import { Box, Button, ButtonGroup, Divider, FormControl, FormLabel, Heading, Input, Stack, Text, Textarea } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons';

const duration = 300;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out, transform  ${duration}ms ease-in-out`,
    transform: `translateX(200%)`,
    pointerEvents: 'none',
    display: 'none'
}

const transitionStyles = {
    entering: {
        display: 'block',
        opacity: 1,
        // maxHeight: 0,
        transform: `translateX(200%)`
    },
    entered: {
        display: 'block',
        opacity: 1,
        // maxHeight: '2000px',
        transform: `translateX(0%)`,
        pointerEvents: `auto`
    },
    exiting: {
        display: 'block',
        opacity: 0,
        // maxHeight: 0,
        // padding: 0,
        transform: `translateX(-200%)`
    },
    exited: {
        // opacity: 0,
        display: 'none',
        // maxHeight: 0,
        // padding: 0,
        height: 0,
        overflow: 'hidden',
        transform: `translateX(-200%)`
    }
}

const defaultStyleTitle = {
    transition: `opacity ${duration}ms ease-in-out, transform  ${duration}ms ease-in-out`,
    opacity: 0
}
const transitionStylesTitle = {
    entering: {
        opacity: 0,
        transform:'translateY(-6px)'
    },
    entered: {
        opacity: 1,
        transform:'translateY(-0px)'

    },
    exiting: {
        opacity: 0,
        transform:'translateY(-6px)'

    },
    exited: {
        opacity: 0,
        display: 'none'

    }
}

const Step1 = ({ }) => {

    const [step, setStep] = useState(1)
    return (
        <>
            {/* <Heading
                fontSize={{ base: 'xl', lg: 'x-large' }}
                fontWeight='normal'
                textAlign='center'
                py={{ base: 6, lg: 10 }}
            >
                Etape 1 : Comment s'est passée la réalisation de votre Jupe Rita&nbsp;? ✂️
            </Heading> */}

            <Transition in={step === 1} timeout={duration}>
                {state => (
                    <>
                        <Heading
                            fontSize={{ base: 'xl', lg: 'x-large' }}
                            fontWeight='normal'
                            textAlign='center'
                            py={{ base: 6, lg: 10 }}
                            px={{ base:0, lg:10 }}

                            style={{
                                ...defaultStyleTitle,
                                ...transitionStylesTitle[state]
                            }}
                        >
                            Quel tissu avez vous choisi pour votre Jupe Rita&nbsp;? ✂️
                        </Heading>
                        <Box
                            p={{ base: 6, lg: 12 }}
                            bg='white'
                            boxShadow='sm'
                            borderRadius={2}
                            style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}
                        >
                            <FormControl

                            >

                                <Stack>
                                    <Button onClick={() => setStep(2)}>La cotonnade</Button>
                                    <Button>La popeline</Button>
                                    <Button>Le jersey</Button>
                                    <Button>La cretonne</Button>
                                    <Button>Le piqué de coton</Button>
                                    <Button>Le coton gratté</Button>
                                    <Button>L’éponge ou le coton bouclette</Button>
                                    <Button>Le tissu éponge</Button>
                                    <Button>La flanelle</Button>
                                    <Button>Le velours</Button>
                                    <Button>Le voile de coton</Button>
                                    <Button>Le denim</Button>
                                    <Button>Le chambray</Button>
                                    <Button>Le madras</Button>
                                    <Button>La toile de panama</Button>
                                    <Button>Les broderies anglaises</Button>
                                    <Button>Le lin</Button>
                                    <Button>La laine et le cachemire</Button>
                                    <Textarea placeholder='Un autre ...'></Textarea>
                                </Stack>
                            </FormControl>
                        </Box>
                        <Box
                             style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}
                        >
                            <Button>Retour</Button>
                        </Box>
                    </>
                )}
            </Transition>

            <Transition in={step === 2} timeout={duration}>
                {state => (
                    <>
                        <Heading
                            fontSize={{ base: 'xl', lg: 'x-large' }}
                            fontWeight='normal'
                            textAlign='center'
                            py={{ base: 6, lg: 10 }}
                            px={{ base:0, lg:10 }}

                            style={{
                                ...defaultStyleTitle,
                                ...transitionStylesTitle[state]
                            }}
                        >
                            En quelle taille avez-vous cousu le patron et combien de métrage avez vous utilisé ? ✂️
                        </Heading>
                        <Box
                            p={{ base: 6, lg: 12 }}
                            bg='white'
                            boxShadow='sm'
                            borderRadius={2}
                            style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}
                        >


                            <FormControl

                                as={Stack}
                                spacing={2}
                            >
                                <Text>
                                    J'ai cousu
                            {` la Jupe Rita `}
                            en taille
                            <Button mx={2} size='sm'>42</Button>
                            et j'ai utilisé{' '}
                                    <Box
                                        display='inline-block'
                                        borderBottom='solid 3px'
                                        borderBottomColor='brand.pink.300'
                                        h='35px'
                                    >
                                        <Input
                                            display='inline-block'
                                            border='none'
                                            w='30px'
                                            p={0}

                                            py={2}
                                            name="cm"
                                        />
                                        cm
                                    </Box>
                                    {' '}de tissu.
                                </Text>
                                <Box>
                                    <Button size='sm' variant='outline' onClick={() => setStep(3)}>Je ne sais pas</Button>
                                </Box>
                            </FormControl>
                        </Box>
                        <Box
                            mt={2}
                             style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}
                        >
                            <Button onClick={()=>setStep(step-1)} size='sm' variant='link'><ArrowBackIcon />Retour</Button>
                        </Box>
                    </>
                )}
            </Transition>


            <Transition in={step === 3} timeout={duration}>
                {state => (
                    <>
                        <Heading
                            fontSize={{ base: 'xl', lg: 'x-large' }}
                            fontWeight='normal'
                            textAlign='center'
                            py={{ base: 6, lg: 10 }}
                            px={{ base:0, lg:12 }}

                            style={{
                                ...defaultStyleTitle,
                                ...transitionStylesTitle[state]
                            }}
                        >
                            Les explications accompagnant le patron sont elles claires ? 🔍

                        </Heading>
                        <Box
                            p={{ base: 6, lg: 12 }}
                            bg='white'
                            boxShadow='sm'
                            borderRadius={2}
                            style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}
                        >
                            <FormControl>
                                <Stack>
                                    <Button whiteSpace='pre-wrap' h='auto' p={4} onClick={() => setStep(4)}>Oui, top, il suffit de se laisser porter  !</Button>
                                    <Button whiteSpace='pre-wrap' h='auto' p={4} onClick={() => setStep(2)}>Ca va, après avoir relu certains passages plusieurs fois quand même </Button>
                                    <Button whiteSpace='pre-wrap' h='auto' p={4} onClick={() => setStep(2)}>Bof, j'ai rencontré des difficultés  (si bof : champ ouvert pour détailler)</Button>
                                    <Textarea placeholder='Un autre ...'></Textarea>
                                </Stack>
                            </FormControl>
                        </Box>
                    </>
                )}
            </Transition>

            <Transition in={step === 4} timeout={duration}>
                {state => (
                    <>
                        <Heading
                            fontSize={{ base: 'xl', lg: 'x-large' }}
                            fontWeight='normal'
                            textAlign='center'
                            py={{ base: 6, lg: 10 }}
                            px={{ base:0, lg:12 }}

                            style={{
                                ...defaultStyleTitle,
                                ...transitionStylesTitle[state]
                            }}
                        >
                            Avez-vous apporté des modifications à votre réalisation ? 🪡

                     </Heading>
                     <Box
                            p={{ base: 6, lg: 12 }}
                            bg='white'
                            boxShadow='sm'
                            borderRadius={2}
                            style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}
                        >
                            <FormControl>
                                <Text onClick={() => setStep(3)}>Test</Text>
                                {/* <ButtonGroup>
                                    <Button whiteSpace='pre-wrap' h='auto' p={4} onClick={() => setStep(3)}>Oui</Button>
                                    <Button whiteSpace='pre-wrap' h='auto' p={4} onClick={() => setStep(2)}>Non</Button>
                                </ButtonGroup>
                                <Textarea placeholder='Un autre ...'></Textarea> */}

                            </FormControl>
                        </Box>
                    </>
                )}
            </Transition>
        </>
    )
}

export default Step1