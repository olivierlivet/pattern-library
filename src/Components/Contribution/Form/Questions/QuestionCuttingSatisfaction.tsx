import { Button, ButtonGroup } from '@chakra-ui/button'
import { Box, HStack, Stack, VStack } from '@chakra-ui/layout'
import { Textarea } from '@chakra-ui/textarea'
import React, { useState } from 'react'

const QuestionCuttingSatisfaction = ({ id, index, setStep }) => {
    const [showDetails, setShowDetails] = useState(false)
    return (
        <Stack>
            { !showDetails ?
                <VStack>
                    <Button
                        whiteSpace='pre-wrap'
                        h='auto'
                        p={2}
                        w='full'
                        onClick={() => setStep()}
                    >
                        Oui, je me sens très à l'aise lorsque je porte [nom du patron]
                    </Button>
                    <Button
                        whiteSpace='pre-wrap'
                        h='auto'
                        p={2}
                        w='full'
                        onClick={() => setShowDetails(true)}
                    >
                        Quelques modifications me semblent nécessaires pour en faire une pièce phare de mon dressing
                    </Button>
                </VStack>
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