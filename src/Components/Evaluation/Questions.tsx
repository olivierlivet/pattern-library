import React, { useState } from 'react'
import { Transition } from 'react-transition-group';

import { Box, Button, ButtonGroup, Divider, FormControl, FormLabel, Heading, Input, Stack, Text, Textarea } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons';

import {
    QuestionIntroduction,
    QuestionSizeAndFabricLength,
    QuestionFabricFamily,
    QuestionNoticeComprehensibility,
    QuestionProductCustomisation,
    QuestionCuttingSatisfaction,
    QuestionWearability,
    QuestionGlobalRating,
    QuestionIdentification
} from './Questions/index'


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
        transform: 'translateY(-6px)'
    },
    entered: {
        opacity: 1,
        transform: 'translateY(-0px)'

    },
    exiting: {
        opacity: 0,
        transform: 'translateY(-6px)'

    },
    exited: {
        opacity: 0,
        display: 'none'

    }
}

const allQuestions = {
    Intro: QuestionIntroduction,
    SizeAndFabricLength: QuestionSizeAndFabricLength,
    FabricFamily: QuestionFabricFamily,
    NoticeComprehensibility: QuestionNoticeComprehensibility,
    ProductCustomisation: QuestionProductCustomisation,
    CuttingSatisfacition: QuestionCuttingSatisfaction,
    Wearability: QuestionWearability,
    GlobalRating: QuestionGlobalRating,
    Identification: QuestionIdentification
}



const Questions = ({
    data,
    errors,
    values,
    setFieldValue,
    setFieldError,
    setFieldTouched,
    handleSubmit,
    isSubmitting
}) => {

    const questions = [
        {
            name: "Intro",
            title: `Partager votre expérience sur le patron «${data.title}» de ${data.editor.name} avec la communauté des couturières ✂️`,
        },
        {
            name:"NoticeComprehensibility",
            title:"Les explications accompagnant le patron sont elles claires ? 🔍" 
        },
        {
            name:"ProductCustomisation",
            title: "Avez-vous apporté des modifications à votre réalisation ? 🪡"
        },
        {
            name: "SizeAndFabricLength",
            title: "En quelle taille avez-vous cousu le patron et combien de métrage avez vous utilisé ? ✂️",
        },
        {
            name: "FabricFamily",
            title: `Quel tissu avez vous choisi pour votre ${data.title} ? ✂️`,
        },
        {
            name:"CuttingSatisfacition",
            title: "Etes-vous satisfaite de la coupe ? 👗"
        },
        {
            name:"Wearability",
            title: "Est-ce que votre réalisation est régulièrement portée ? 👗"
        },
        {
            name:"GlobalRating",
            title: `Quelle note globale donnez vous au patron «${data.title}» de ${data.editor.name} ? 🌟`
        }
    ]

    const [step, setStep] = useState( 0 )

    let QuestionsList = []

    for (let index = 0; index < questions.length; index++) {
        const question = questions[index];
        let QuestionComponent = allQuestions[question.name]
        QuestionsList.push(
            <Transition in={step === index} timeout={duration}>
                {state => (
                    <>
                        <Heading
                            fontSize={{ base: 'xl', lg: 'x-large' }}
                            fontWeight='normal'
                            textAlign='center'
                            py={{ base: 6, lg: 10 }}
                            px={{ base: 0, lg: 10 }}

                            style={{
                                ...defaultStyleTitle,
                                ...transitionStylesTitle[state]
                            }}
                        >
                            { question.title }
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
                            <QuestionComponent
                                data={ data }
                                id={question.name}
                                index={index}
                                setStep={()=>setStep( index + 1 )}

                                values={values}
                                errors={errors}
                                setFieldValue={setFieldValue}
                                setFieldError={setFieldError}
                                setFieldTouched={setFieldTouched}

                                handleSubmit={handleSubmit}
                                isSubmitting={isSubmitting}
                            />
                        </Box>
                        <Box
                            style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}
                        >
                            <Button display={ step > 0 ? 'block' : 'none' } py={2} variant='link' size='sm' onClick={()=> setStep( step - 1 )}><ArrowBackIcon mr={2} /> Retour</Button>
                        </Box>
                    </>
                )}
            </Transition>
        )
    }
    return (
        <>
            { QuestionsList}
        </>
    )
}

export default Questions