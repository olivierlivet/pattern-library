import { Button, ButtonGroup } from '@chakra-ui/button'
import { Box, Center, Grid } from '@chakra-ui/layout'
import { Textarea, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import ReactSlider from 'react-slider'

const QuestionAssociationWithOtherFabric = ({ id, index, setStep }) => {
    const [showDetails, setShowDetails] = useState(false)
    return (
        <Box>
            <Grid
                templateColumns={
                    `110px 1fr 110px`
                }
            >
                <Text fontSize='sm' p={2} textAlign='center'>
                    Un indispensable du quotidien 
                </Text>
                <Center>
                    <Box w='100%'>
                <ReactSlider
                    renderThumb={(props, state) => 
                        <Center
                            bg='white'
                            borderRadius='full'
                            fontSize='3xl'
                            w='50px'
                            h='50px'
                            transform='translateY(-20px)'
                            boxShadow='xl'
                            border='solid 1px'
                            borderColor='gray.200'
                            cursor='pointer'
                            _active={{
                                border:'none',
                                outline:'none',
                                bg:'gray.100'
                            }}
                            _hover={{
                                border:'none',
                                outline:'none',
                                bg:'gray.100'
                            }}
                            _focus={{
                                border:'none',
                                outline:'none',
                                bg:'gray.100'
                            }}
                            {...props}
                        >
                                {state.valueNow < 50 ? '👩‍💻' : '💃' }
                        </Center>}
                    renderTrack={(props, state) => <Box h='10px' bg='green.200' borderRadius='3px' {...props} />}
                />
                </Box>
                </Center>
                
                <Text fontSize='sm' p={2} textAlign='center'>
                    Un vêtement des journées spéciales
                </Text>

            </Grid>

        </Box >
    )
}

export default QuestionAssociationWithOtherFabric