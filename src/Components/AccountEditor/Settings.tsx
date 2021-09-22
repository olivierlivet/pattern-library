import React, { useEffect, useState } from 'react'
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
    SimpleGrid,
    FormControl,
    FormLabel,
    Input,
    ButtonGroup,
    FormErrorMessage
} from '@chakra-ui/react'

import { Router, Link as NavLink, Match, navigate } from "@reach/router";
import AccountWrapper from './Wrapper';
import AccountNav from '../Nav/Account';
import { AddIcon, ChatIcon, CopyIcon, InfoOutlineIcon, StarIcon, SunIcon, ViewIcon } from '@chakra-ui/icons';
import { Formik, Form, Field } from 'formik'
import { config } from '../../config';
import axios from 'axios';
import * as yup from 'yup';

const EditorUpdateForm = ({ }) => {

    const [ data, setData ] = useState<undefined|any>( undefined )

    const handleLogout = () => {
        console.log( 'Logout' )
        localStorage.removeItem('tpcEditor');
        navigate('/fr/editor/login');
    }

    const getEditorId = () => {
        let editor = JSON.parse( localStorage.getItem('tpcEditor') )
        return editor.editorId;
    }

    useEffect(async () => {
        const result = await axios.get(
            `${config.apiUrl}/editor/${getEditorId()}`
        );
        setData(result.data);
    }, []);

    const allFields = [
        {
            name: 'firstName',
            type: 'text',
            label: 'Prénom'
        },
        {
            name: 'lastName',
            type: 'text',
            label: 'Nom'
        },
        {
            name: 'name',
            type: 'text',
            label: 'Raison sociale'
        },
        {
            name: 'vatNumber',
            type: 'text',
            label: 'Numéro de TVA'
        },
        {
            name: 'iban',
            type: 'iban',
            label: 'IBAN de votre compte banquaire'
        },
        {
            name: 'address',
            type: 'text',
            label: 'Adresse'
        },
        {
            name: 'postalCode',
            type: 'text',
            label: 'Code postal'
        },
        {
            name: 'city',
            type: 'text',
            label: 'Ville'
        },
        {
            name: 'email',
            type: 'email',
            label: 'Adresse email'
        },
        {
            name: 'phone',
            type: 'phone',
            label: 'Numéro de téléphone'
        },
    ]

    return (
        <AccountWrapper>
            <Box>
                <Heading
                    display='flex'
                    justifyContent='space-between'
                    my={7}
                    color='#66878a'
                    fontWeight='normal'
                    fontSize='3xl'
                >
                    Paramètres & profil{' '}
                    <Button onClick={()=> handleLogout()} fontWeight='normal' fontFamily='DM Sans' variant='link'>(Déconnexion)</Button>
                </Heading>
            </Box>
            { data ? 
            <Formik
                initialValues={
                    data
                }
                onSubmit={(values, { setSubmitting }) => {
                    axios.put(
                        `${config.apiUrl}/editor/${getEditorId()}`,
                        values
                    );
                }}
                validationSchema={
                    yup.object().shape({
                        vatNumber: yup
                            .string()
                            .matches(/^FR[0-9]{12}$/s)
                            .nullable(),
                        iban: yup
                            .string()
                            .required('Iban requis')
                            .matches(/^(FR|GB|DE)[0-9]{2}\s?[0-9]{4}\s?[0-9]{4}\s?[0-9]{4}\s?[0-9]{4}\s?[0-9]{4}\s?[0-9]{3}$/s)
                            .nullable(),
                        password: yup.string().required('Champ obligatoire').nullable(),
                    })
                }
            >
                {({
                    values,
                    initialValues,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    setFieldError,
                    setFieldValue,
                    setFieldTouched
                    /* and other goodies */
                }) => (
                    <Form>
                        <Box
                            bg='white'
                            p={10}
                        >
                            <SimpleGrid
                                columns={{ base: 1, lg: 2 }}
                                gap={{ base: 2, lg: 8 }}
                            >
                                {allFields.map(fieldItem =>
                                    fieldItem.type !== 'iban' ?
                                    <Field name={fieldItem.name}>
                                        {({ field, form }) => (
                                            <Box>
                                                <FormControl isInvalid={ errors[fieldItem.name]}>
                                                    <FormLabel color='gray.500'>{fieldItem.label} :</FormLabel>
                                                    <Input {...field} variant='flushed' type="text" />
                                                    <FormErrorMessage>Attention, ce champs n'est pas correct</FormErrorMessage>
                                                </FormControl>
                                            </Box>
                                        )}
                                    </Field>
                                    :
                                    <Field name={fieldItem.name}>
                                        {({ field, form }) => (
                                            <Box>
                                                <FormControl isInvalid={ errors[fieldItem.name]}>
                                                    <FormLabel color='gray.500'>{fieldItem.label} :</FormLabel>
                                                    <Input {...field} variant='flushed' type="text" />
                                                    <FormErrorMessage>Attention, ce champs n'est pas correct</FormErrorMessage>
                                                </FormControl>
                                            </Box>
                                        )}
                                    </Field>
                                )}

                               
                            </SimpleGrid>
                            <Box my={10}>
                                <Button type='submit'>Enregistrer</Button>
                            </Box>
                        </Box>
                        {/* <pre>
                            {JSON.stringify(values, null, 1)}
                        </pre> */}
                    </Form>
                )}
            </Formik>
            : null }

        </AccountWrapper>
    )
}

export default EditorUpdateForm