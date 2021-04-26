import React from 'react'
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

import { Router, Link as NavLink, Match } from "@reach/router";
import AccountWrapper from './Wrapper';
import AccountNav from '../Nav/Account';
import { AddIcon, ChatIcon, CopyIcon, InfoOutlineIcon, StarIcon, SunIcon, ViewIcon } from '@chakra-ui/icons';
import { Formik, Form, Field } from 'formik'

const AccountProduct = ({ }) => {

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
            name: 'companyName',
            type: 'text',
            label: 'Raison sociale'
        },
        {
            name: 'vatNumber',
            type: 'text',
            label: 'Numéro de TVA'
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
                <Heading my={7} color='#66878a' fontWeight='normal' fontSize='3xl'>Paramètres & profil</Heading>
            </Box>
            <Formik
                initialValues={
                    {
                        firstName:'Olivier',
                        lastName:'Livet',
                        // NoticeComprehensibility: '',
                        // NoticeComprehensibilityDetail: '',
                        // ProductCustomisation: '',
                    }
                }
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
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
                        <pre>
                            {JSON.stringify(values, null, 1)}
                        </pre>
                    </Form>
                )}
            </Formik>

        </AccountWrapper>
    )
}

export default AccountProduct