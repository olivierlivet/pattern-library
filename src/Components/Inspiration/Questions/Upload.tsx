import React, { Component, useState } from 'react'

import { Box, Button, ButtonGroup, Center, Flex, HStack, Image, Stack, Text, Textarea } from '@chakra-ui/react'

import { Field } from 'formik'
import { Input } from '@chakra-ui/input'
import { FormControl, FormHelperText, FormLabel } from '@chakra-ui/form-control'
import ReactSlider from 'react-slider'
import { ArrowForwardIcon, RepeatIcon, SmallCloseIcon } from '@chakra-ui/icons'



// const QuestionGlobalRating = ({ id, index, setStep, setFieldValue, handleSubmit }) => {
export default class UploadPictures extends Component {

    constructor(props) {
        super(props)
        this.state = {
            pictures: [
                'https://www.cousette.com/5665-stars_products_listing/patron-robe-harmonie.jpg',
                'https://www.cousette.com/5665-stars_products_listing/patron-robe-harmonie.jpg',
                'https://www.cousette.com/5665-stars_products_listing/patron-robe-harmonie.jpg',
                'https://www.cousette.com/5665-stars_products_listing/patron-robe-harmonie.jpg',
                'https://www.cousette.com/5665-stars_products_listing/patron-robe-harmonie.jpg'
            ],
            isSubmiting: false
        }
    }

    render() {
        // const [showValidate, setShowValidate] = useState(false)
        const { setFieldValue, setStep } = this.props
        const { showValidate, isSubmiting, pictures } = this.state
        return (
            <Stack spacing={ 6 }>
                <Text>
                    Envoyez nous vos photos de votre réalisation du patron ##PatronName##. Autant de photos que vous voulez, les plus belles seront ajoutées la fiche du patron.
                </Text>
                { pictures && pictures.length ?
                    <Box overflowX='scroll'>
                        <HStack w='max-content'>
                            {pictures.map(item =>
                                <Box
                                    position='relative'
                                >
                                    <Image
                                        borderRadius={2}
                                        src={item}
                                        alt='tetete'
                                        size='xs'
                                        boxSize={{ base:'100px', lg:'150px' }}
                                        objectFit='cover'
                                    />

                                    <ButtonGroup
                                        size='sm'
                                        position='absolute'
                                        bottom={0}
                                        left={0}
                                        p={2}
                                    >
                                        <Button><SmallCloseIcon /></Button>
                                        <Button><RepeatIcon /></Button>
                                    </ButtonGroup>

                                </Box>
                            )}
                        </HStack>
                    </Box>
                : null
                    
                }
                <Flex
                    wrap='wrap'
                    alignItems='center'
                >
                    <Button 
                        w={{ base:'100%', lg:'auto' }}
                    >
                        {pictures.length < 1 ? `Choisir les photos` : `Ajouter d'autres photos`}

                    </Button>
                    {pictures && pictures.length ?
                        <>
                            <Text
                                w={{ base:'100%', lg:'auto' }}
                                textAlign='center'
                                px={2}
                            >ou</Text>
                            <Button
                                w={{ base:'100%', lg:'auto' }}
                                variant='outline'
                                onClick={()=>setStep()}
                            >
                                {pictures.length === 1
                                    ? `Valider cette image`
                                    : `Valider ces ${pictures.length}  images`
                                }
                            </Button>
                        </>
                        : null}
                </Flex>

            </Stack>
        )
    }
}

// export default QuestionGlobalRating