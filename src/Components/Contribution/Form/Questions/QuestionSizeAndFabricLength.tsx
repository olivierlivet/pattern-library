import React from 'react'
import { Box, Button, Text, Input } from '@chakra-ui/react'

const QuestionSizeAndFabricLength = ({ id, index, setStep }) => {
    return (
        <>
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
            <Box mt={4}>
                <Button size='sm' variant='outline' onClick={() => setStep(3)}>Je ne sais pas</Button>
            </Box>
        </>
    )
}

export default QuestionSizeAndFabricLength