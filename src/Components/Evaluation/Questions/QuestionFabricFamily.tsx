import { Button } from '@chakra-ui/button'
import { Stack } from '@chakra-ui/layout'
import { Textarea } from '@chakra-ui/textarea'
import React, { useState } from 'react'

const QuestionFabricFamily = ({ id, index, setStep, setFieldValue }) => {
    const [seeMore, setSeeMore] = useState(false)
    const primaryList = [
        "Coton",
        "Lainage",
        "Lin",
        "Soie",
        "Viscoce & tencel",
        "Polyester",
        "Simili cuir & suédine"
    ]

    const secondaryList = [
        "Broderie anglaise",
        "Dentelle",
        "Chambray",
        "Crêpe",
        "Denim",
        "Double gaze",
        "Gabardine",
        "Jacquard",
        "Jersey",
        "Molleton & sweat",
        "Popeline",
        "Satin",
        "Twill & sergé",
        "Velours",
        "Autre : champ libre"
    ]


    return (
        <Stack>
            { primaryList.map(item =>
                <Button onClick={ ()=>{
                    setFieldValue('FabricFamily', item );
                    setStep();
                } }>{item}</Button>)}
            { !seeMore ?
                <Button variant='outline' onClick={() => setSeeMore(!seeMore)}>Voir plus de choix ...</Button>
                :
                <>
                    {secondaryList.map(item => <Button  onClick={ ()=> setStep() }>{item}</Button>)}
                    <Button variant='link' onClick={() => setStep() }>Je ne sais pas</Button>
                </>
            }
            {/* <Textarea placeholder='Un autre ...'></Textarea> */}
        </Stack>
    )
}

export default QuestionFabricFamily