import React from 'react'
import {
    Box,
    Button,
    Text,
    Input,
    InputGroup,
    InputRightAddon
} from '@chakra-ui/react'

const QuestionSizeAndFabricLength = ({ id, index, setStep }) => {
    return (
        <>
            <Text
                lineHeight='40px'
                fontSize='16px'
            >
                J'ai cousu
                {` la Jupe Rita `}
                en taille{' '}
                <Box
                    display='inline-block'
                >
                    <InputGroup size="sm" w='60px'>
                        <Input textAlign='center' fontSize='16px' type='number' pattern="[0-9]*" min='20' placeholder="40" />
                        {/* <InputRightAddon children="cm" /> */}
                    </InputGroup>
                </Box>
                {' '} et j'ai utilisé{' '}
                <Box
                    display='inline-block'
                >
                    <InputGroup size="sm" w='100px'>
                        <Input type='number' fontSize='16px' pattern="[0-9]*" min='20' placeholder="100" />
                        <InputRightAddon children="cm" />
                    </InputGroup>
                </Box>
                {' '}de tissu.
                </Text>
            <Box mt={4}>
                <Text>Ou alors,  <Button size='sm' variant='link' onClick={() => setStep(3)}>je ne sais pas</Button></Text>
            </Box>
        </>
    )
}

export default QuestionSizeAndFabricLength