import { Button } from '@chakra-ui/button'
import { Stack } from '@chakra-ui/layout'
import { Textarea } from '@chakra-ui/textarea'
import React from 'react'

const QuestionNoticeComprehensibility = ({ id, index, setStep }) => {
    return (
        <Stack>
            <Button whiteSpace='pre-wrap' h='auto' p={4} onClick={() => setStep(4)}>Oui, top, il suffit de se laisser porter  !</Button>
            <Button whiteSpace='pre-wrap' h='auto' p={4} onClick={() => setStep(2)}>Ca va, après avoir relu certains passages plusieurs fois quand même </Button>
            <Button whiteSpace='pre-wrap' h='auto' p={4} onClick={() => setStep(2)}>Bof, j'ai rencontré des difficultés  (si bof : champ ouvert pour détailler)</Button>
            <Textarea placeholder='Un autre ...'></Textarea>
        </Stack>
    )
}

export default QuestionNoticeComprehensibility