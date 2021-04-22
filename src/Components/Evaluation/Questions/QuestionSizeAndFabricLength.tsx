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
            <Text>
                J'ai cousu
                {` la Jupe Rita `}
                en taille{' '}
                <Box
                    display='inline-block'
                >
                    <InputGroup size="sm" w='80px'>
                        <Input type='number' pattern="[0-9]*" min='20' placeholder="100" />
                        {/* <InputRightAddon children="cm" /> */}
                    </InputGroup>
                </Box>
                {' '} et j'ai utilisé{' '}
                <Box
                    display='inline-block'
                >
                    <InputGroup size="sm" w='100px'>
                        <Input type='number' pattern="[0-9]*" min='20' placeholder="100" />
                        <InputRightAddon children="cm" />
                    </InputGroup>
                </Box>
                {' '}de tissu.
                </Text>
            <Box mt={4}>
                <Text>Ou alors,  <Button size='sm' variant='link' onClick={() => setStep(3)}>Je ne sais pas</Button></Text>
            </Box>
        </>
    )
}

export default QuestionSizeAndFabricLength