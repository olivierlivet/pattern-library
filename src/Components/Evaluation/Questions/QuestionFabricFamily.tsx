import { Button } from '@chakra-ui/button'
import { Stack } from '@chakra-ui/layout'
import { Textarea } from '@chakra-ui/textarea'
import React, { useState } from 'react'

const QuestionFabricFamily = ({ id, index, setStep, setFieldValue }) => {
    const [seeMore, setSeeMore] = useState(false)
    const primaryList = [
        "La popeline",
        "Le jersey",
        "La cretonne",
        "Le piqué de coton",
        "Le coton gratté"
    ]

    const secondaryList = [
        "L’éponge ou le coton bouclette",
        "Le tissu éponge",
        "La flanelle",
        "Le velours",
        "Le voile de coton",
        "Le denim",
        "Le chambray",
        "Le madras",
        "La toile de panama",
        "Les broderies anglaises",
        "Le lin",
        "La laine et le cachemire",
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