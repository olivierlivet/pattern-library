import { Button, ButtonGroup } from '@chakra-ui/button'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Center, Flex, Grid } from '@chakra-ui/layout'
import { Textarea, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import ReactSlider from 'react-slider'

const QuestionAssociationWithOtherFabric = ({ id, index, setStep, setFieldValue }) => {
    const [showValidate, setShowValidate] = useState(false)
    return (
        <Box>
            <Flex
                justifyContent='space-between'
            >
                <Text fontSize='small' textAlign='left' w='30%'>
                    Oui, c'est un essentiel du quotidien.
                </Text>
                <Text fontSize='small' textAlign='right' w='30%'>
                    Plutôt un vêtement des grands jours.
                </Text>

            </Flex>
                <Center
                    py={8}
                >
                    <Box w='100%'>
                        <ReactSlider
                            defaultValue={ 50 }
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
                                        border: 'none',
                                        outline: 'none',
                                        bg: 'gray.100'
                                    }}
                                    _hover={{
                                        border: 'none',
                                        outline: 'none',
                                        bg: 'gray.100'
                                    }}
                                    _focus={{
                                        border: 'none',
                                        outline: 'none',
                                        bg: 'gray.100'
                                    }}
                                    {...props}
                                >
                                    {/* {state.valueNow < 50 ? '👩‍💻' : '💃'} */}
                                    {state.valueNow < 50 ? '☕' : '🍸'}
                                </Center>}
                            renderTrack={(props, state) =>
                                <Box
                                    h='10px'
                                    bgGradient="linear(to-r, green.200, green.300)"
                                    borderRadius='3px'
                                    {...props}
                                />
                            }
                            onAfterChange={(props,state)=>{
                                setFieldValue( 'AssociationWithOtherFabricScore', props )
                                setShowValidate( true );
                                
                            } }
                        />
                    </Box>
                </Center>

 
            <Center pt={4} display={ showValidate ? 'flex' : 'none' } >
                <Button variant='link' onClick={() => setStep()}>Valider <ArrowForwardIcon /></Button>
            </Center>
        </Box >
    )
}

export default QuestionAssociationWithOtherFabric