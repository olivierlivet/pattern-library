import React, { useState } from 'react'
import { Link as GatsbyLink } from 'gatsby'

import {
    Box,
    Button,
    Center,
    Flex,
    Grid,
    Link,
    VStack,
    Text,
    HStack,
    Heading,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Stack
} from '@chakra-ui/react'

import { Router, Link as NavLink, Match, navigate } from "@reach/router"
import AccountWrapper from './Wrapper'
import AccountNav from '../Nav/Account'
import RatingDetails from './RatingDetails'
import { AddIcon, ChatIcon, CopyIcon, InfoOutlineIcon, MinusIcon, StarIcon, SunIcon, ViewIcon } from '@chakra-ui/icons';
import { Formik, Form, Field } from 'formik'
import axios from 'axios'
import { config } from '../../config'
import Title from '../Title'
import * as yup from 'yup';

const NewPassword = ({ init, token }) => {
    // const [racingDetail, setRatingDeatail] = useState(false)
    const [error, setError] = useState(false)

    const questions = [
        {
            name: 'password',
            label: 'Mot de passe',
            type: 'password',
            autocomplete: 'new-password'
        },
        {
            name: 'passwordConfirmation',
            label: 'Confirmation de mot de passe',
            type: 'password',
            autocomplete: 'new-password'
        },

    ]

    return (
        <Box>
            <Center
                minH='calc( 100vh - 105px )'
            >
                <Box
                    w='340px'
                >
                    <Title>Créer votre nouveau mot de passe</Title>

                    { init ? 
                    <Box>
                        Init message
                    </Box>
                    : null }

                    <Formik
                        initialValues={{
                            firstName: undefined,
                            email: undefined
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            axios.post(
                                `${config.apiUrl}/editor/new-password`,
                                {
                                    token: token,
                                    password: values.password
                                }
                            )
                                .then((r) =>{
                                    console.log('Logged in attempt')
                                    // localStorage.setItem(
                                    //     'tpcEditor',
                                    //     JSON.stringify( r.data )
                                    // )
                                    navigate('/fr/editor/login')
                                })
                                .catch((error) => setError(true))
                        }}
                        validationSchema={
                            yup.object().shape({
                                password: yup.string().required('Champ obligatoire').nullable(),
                                passwordConfirmation: yup.string().required('Champ obligatoire').nullable(),
                            })
                        }
                    >
                        {({
                            values,
                            errors
                        }) => (
                            <Form>
                                <Stack
                                    spacing={{ base: 2, lg: 4 }}
                                    p={{ base: 2, lg: 4 }}
                                    boxShadow={{ base: 'md' }}
                                    borderRadius='lg'
                                    bg='white'
                                >
                                    <pre>
                                        { JSON.stringify( errors, null, 1 )}
                                    </pre>
                                    {questions.map(item =>
                                        <Field name={item.name}>
                                            {({ field, form }) => (

                                                <FormControl>
                                                    <FormLabel>{item.label} :</FormLabel>
                                                    <Input
                                                        {...field}
                                                        type={item.type}
                                                        placeholder=''
                                                        autoComplete={item.autocomplete}
                                                    />
                                                    {/* <FormErrorMessage>{errors[item].name}</FormErrorMessage> */}
                                                </FormControl>
                                            )}
                                        </Field>
                                    )}
                                    <Button type='submit'>Enregistrer</Button>
                                    {error ?
                                        <Box>
                                            <Text color='red' fontSize='sm'>
                                                Cette adresse et ce mot de passe ne corresponde à aucun compte. Contactez-moi : <Link target='_blank' to={`mailto:contact@thepatternscorner.com `}>contact@thepatternscorner.com</Link> pour débloquer la situation.
                                            </Text>
                                        </Box>
                                        : null}
                                </Stack>
                            </Form>
                        )}
                    </Formik>
                </Box>
            </Center>


        </Box>
    )
}

export default NewPassword