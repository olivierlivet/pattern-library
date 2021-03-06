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

const AccountLogin = ({ }) => {
    // const [racingDetail, setRatingDeatail] = useState(false)
    const [error, setError] = useState(false)

    const questions = [
        {
            name: 'email',
            label: 'Email',
            type: 'email',
            autocomplete: 'email'
        },
        {
            name: 'password',
            label: 'Mot de passe',
            type: 'password',
            autocomplete: 'current-password'
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
                    <Title>Accès à la plateforme éditeur</Title>
                    <Formik
                        initialValues={{
                            firstName: undefined,
                            email: undefined
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            axios.post(
                                `${config.apiUrl}/editor/login`, values
                            )
                                .then((r) =>{
                                    console.log('Logged in attempt')
                                    localStorage.setItem(
                                        'tpcEditor',
                                        JSON.stringify( r.data )
                                    )
                                    navigate('/fr/editor')
                                })
                                .catch((error) => setError(true))
                        }}
                        validationSchema={
                            yup.object().shape({
                                email: yup.string().email('La syntaxe semble erronée').required('Champ obligatoire').nullable(),
                                password: yup.string().required('Champ obligatoire').nullable(),
                            })
                        }
                    >
                        {({
                            values
                        }) => (
                            <Form>
                                <Stack
                                    spacing={{ base: 2, lg: 4 }}
                                    p={{ base: 2, lg: 4 }}
                                    boxShadow={{ base: 'md' }}
                                    borderRadius='lg'
                                    bg='white'
                                >
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
                                                </FormControl>
                                            )}
                                        </Field>
                                    )}
                                    <Button type='submit'>S'identifier</Button>
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

export default AccountLogin