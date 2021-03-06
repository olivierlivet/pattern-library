import React, { Component, useState } from 'react'

import { Box, Button, ButtonGroup, Center, Flex, HStack, Image, Stack, Text, Textarea } from '@chakra-ui/react'

import { Field } from 'formik'
import { Input } from '@chakra-ui/input'
import { FormControl, FormHelperText, FormLabel } from '@chakra-ui/form-control'
import ReactSlider from 'react-slider'
import { ArrowForwardIcon, RepeatIcon, SmallCloseIcon } from '@chakra-ui/icons'
import { config } from '../../../config'
import axios from 'axios'



// const QuestionGlobalRating = ({ id, index, setStep, setFieldValue, handleSubmit }) => {
export default class UploadPictures extends Component {

    constructor(props) {
        super(props)
        this.state = {
            pictures: [],
            isSubmiting: false,
            selectedFiles: null
        }
    }

    onFileChange = event => {
        // Update the state
        this.setState(
            { selectedFiles: event.target.files },
            ()=> this.onFileUpload()
        );
    }

    // On file upload (click the upload button)
    onFileUpload = () => {

        // Create an object of formData

        for (const key of Object.keys(this.state.selectedFiles)) {

            const formData = new FormData();

            formData.append('picture', this.state.selectedFiles[key])
            formData.append('product', this.props.data._id)

            // formData.append(
            //     "picture",
            //     this.state.selectedFiles[key],
            //     this.state.selectedFiles[key].name
            // );

            axios.post(`${config.apiUrl}/inspiration/upload`, formData)
                .then((response) => {
                    let currentPictures = this.state.pictures
                    currentPictures.push(response.data)
                    this.setState({ pictures: currentPictures })
                })

        }

        // Update the formData object
        // formData.append(
        //     "picture",
        //     this.state.selectedFiles[0],
        //     this.state.selectedFiles[0].name
        // );

        // Details of the uploaded file
        console.log(this.state.selectedFiles);

        // Request made to the backend api
        // Send formData object
        // axios.post(`${config.apiUrl}/inspiration/upload`, formData);
    }

    
    handleDelete(index) {

        let currentPictures = this.state.pictures
        let pathToDelete = currentPictures[index]
        console.log('path to delete', pathToDelete)

        axios.delete(
            `${config.apiUrl}/media/`,
            { data: { path: pathToDelete } }
        )

        currentPictures.splice(index, 1)
        this.setState({ pictures: currentPictures })

    }

    render() {
        // const [showValidate, setShowValidate] = useState(false)
        const { setFieldValue, setStep } = this.props
        const { showValidate, isSubmiting, pictures } = this.state
        return (
            <Stack spacing={6}>
                <Text>
                    Partagez avec la communeaut?? les photos de votre r??alisation du patron <em>{this.props.data.title}</em>. Autant de photos que vous voulez, les plus belles seront ajout??es la fiche du patron et sur Instagram.
                </Text>
                { pictures && pictures.length ?
                    <Box overflowX='scroll'>
                        <HStack w='max-content'>
                            {pictures.map((item, index) =>
                                <Box
                                    position='relative'
                                >
                                    <Image
                                        borderRadius={2}
                                        src={`${config.imageBaseUrl}${item}`}
                                        alt='tetete'
                                        size='xs'
                                        boxSize={{ base: '100px', lg: '150px' }}
                                        objectFit='cover'
                                    />

                                    <ButtonGroup
                                        size='sm'
                                        position='absolute'
                                        bottom={0}
                                        left={0}
                                        p={2}
                                    >
                                        <Button onClick={()=>this.handleDelete(index)}><SmallCloseIcon /></Button>
                                        {/* <Button><RepeatIcon /></Button> */}
                                    </ButtonGroup>

                                </Box>
                            )}
                        </HStack>


                    </Box>
                    : null}

                <Flex
                    wrap='wrap'
                    alignItems='center'
                >
                    <input
                        id='browse'
                        type='file'
                        multiple
                        style={{ display:'none' }}
                        onChange={this.onFileChange}
                    />
                    <Button
                        w={{ base: '100%', lg: 'auto' }}
                        as='label' for='browse'
                    >
                        {pictures.length < 1 ? `Choisir les photos` : `Ajouter d'autres photos`}

                    </Button>
                    {pictures && pictures.length ?
                        <>
                            <Text
                                w={{ base: '100%', lg: 'auto' }}
                                textAlign='center'
                                px={2}
                            >ou</Text>
                            <Button
                                w={{ base: '100%', lg: 'auto' }}
                                variant='outline'
                                onClick={() => {
                                    setFieldValue( 'pictures', this.state.pictures );
                                    setStep();
                                }}
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