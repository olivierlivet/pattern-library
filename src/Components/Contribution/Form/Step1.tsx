import React, { useState } from 'react'
import { Transition } from 'react-transition-group';

import { Box, Button, ButtonGroup, Divider, FormControl, FormLabel, Heading, Input, Stack, Text, Textarea } from '@chakra-ui/react'

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
    exiting: { opacity: 0, maxHeight:0 },
    exited: { opacity: 0, maxHeight:0 }
}

const Step1 = ({ }) => {

    const [step, setStep] = useState(1)
    return (
        <Stack
            spacing={{ base: 0, lg: 0 }}
        >
            <Heading
                fontSize={{ base: '2xl', lg: 'x-large' }}
                fontWeight='normal'
            >
                Etape 1 : Comment s'est passée la réalisation de votre Jupe Rita&nbsp;? ✂️
            </Heading>
            <Box py={10}>
                <Divider />
            </Box>

            <Transition in={step === 1} timeout={duration}>
                {state => (
                    <FormControl
                        style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                        }}
                    >

                        <FormLabel>
                            Quel tissu avez vous choisi pour votre Jupe Rita ?
                        </FormLabel>
                        <Stack>
                            <Button onClick={()=>setStep(2)}>La cotonnade</Button>
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
                )}
            </Transition>

            <Transition in={step === 2} timeout={duration}>
                {state => (
                    <FormControl
                        style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                        }}
                    >
                        <FormLabel>
                        En quelle taille avez-vous cousu le patron ? Et combien de métrage avez vous utilisé ?                         </FormLabel>
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
                                    p={ 0 }

                                    py={2}
                                    name="cm"
                                />
                                cm
                            </Box>
                            {' '}de tissu.
                        </Text>
                        <Button onClick={()=>setStep(3)}>Je ne sais pas</Button>
                    </FormControl>
                )}
            </Transition>


            <Transition in={step === 3} timeout={duration}>
                {state => (
                    <FormControl
                        style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                        }}
                    >

                        <FormLabel>
                        Les explications accompagnant la patron sont elles claires ? 
                        </FormLabel>
                        <Stack>
                            <Button whiteSpace='pre-wrap' h='auto' p={4} onClick={()=>setStep(4)}>Oui, top, il suffit de se laisser porter  !</Button>
                            <Button whiteSpace='pre-wrap' h='auto' p={4} onClick={()=>setStep(2)}>Ca va, après avoir relu certains passages plusieurs fois quand même </Button>
                            <Button whiteSpace='pre-wrap' h='auto' p={4} onClick={()=>setStep(2)}>Bof, j'ai rencontré des difficultés  (si bof : champ ouvert pour détailler)</Button>
                            <Textarea placeholder='Un autre ...'></Textarea>
                        </Stack>
                    </FormControl>
                )}
            </Transition>

            <Transition in={step === 4} timeout={duration}>
                {state => (
                    <FormControl
                        style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                        }}
                    >

                        <FormLabel>
                            Avez-vous apporté des modifications à votre réalisation ?
                        </FormLabel>
                        <ButtonGroup>
                            <Button whiteSpace='pre-wrap' h='auto' p={4} onClick={()=>setStep(3)}>Oui</Button>
                            <Button whiteSpace='pre-wrap' h='auto' p={4} onClick={()=>setStep(2)}>Non</Button>
                        </ButtonGroup>
                        <Textarea placeholder='Un autre ...'></Textarea>

                    </FormControl>
                )}
            </Transition>



        </Stack>
    )
}

export default Step1