import { Button, ButtonGroup } from '@chakra-ui/button'
import { Stack } from '@chakra-ui/layout'
import { Textarea } from '@chakra-ui/textarea'
import React, { useState } from 'react'

const QuestionCuttingSatisfaction = ({ id, index, setStep }) => {
    const [showDetails, setShowDetails] = useState(false)
    return (
        <Stack>
            { !showDetails ?
                <ButtonGroup>
                    <Button w='50%' onClick={() => setShowDetails(true)}>Oui</Button>
                    <Button w='50%' onClick={() => setStep()}>Non</Button>
                </ButtonGroup>
                :
                <>
                    <Textarea placeholder='Expliquez nous lesquelles ?'></Textarea>
                    <Button onClick={()=> setStep()}>Valider</Button>
                </>
            }
        </Stack >
    )
}

export default QuestionCuttingSatisfaction