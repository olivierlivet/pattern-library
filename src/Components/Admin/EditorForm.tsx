import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Heading, HStack, Input, Select, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { config } from '../../config'
import { Link, navigate } from '@reach/router'
import { Field, Form, Formik, useFormikContext, useField } from 'formik';
import { MediaUpload } from './ProductForm/Uploader';
import getVariants from '../../Data/getVariants';
import * as yup from 'yup';

var contentful = require('contentful');
var client = contentful.createClient({
    space: config.contentful.spaceId,
    accessToken: config.contentful.accessToken,
    resolveLinks: true
});
var slugify = require('slugify')


const EditorCreateForm = ({ }) => {

    const [editors, setEditors] = useState();

    useEffect(async () => {

        if (!editors) {
            client.getEntries({
                'content_type': 'editor'
            })
                .then(function (entries) {
                    setEditors(entries)
                })
        }


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
            label: 'Raison sociale /'
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
        <Box w='full' my='20' bg='white' p={10}>
            <Formik
                initialValues={{
                    title: '',
                    univers: null,
                    category: null
                }}
                validationSchema={
                    yup.object().shape({
                        name: yup.string().required('Required').nullable(),
                        firstName: yup.string().required('Required').nullable(),
                        lastName: yup.string().required('Required').nullable(),
                        vatNumber: yup.string().required('Required').nullable(),
                        address: yup.string().required('Required').nullable(),
                        postalCode: yup.string().required('Required').nullable(),
                        phone: yup.string().required('Required').nullable(),
                        email: yup.string().required('Required').nullable(),
                    })
                }
                onSubmit={(values) => {
                    axios.post(
                        `${config.apiUrl}/editor`,
                        values,
                    ).then(response => navigate(`/admin/editor`))
                    console.log(values)
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
                }) => (
                    <Form>
                        <Stack spacing={6}>

                            <SimpleGrid
                                columns={{ base: 1, lg: 2 }}
                                gap={{ base: 2, lg: 8 }}
                            >
                                {allFields.map(fieldItem =>

                                    <Field name={fieldItem.name}>
                                        {({ field, form }) => (
                                            <Box>
                                                <FormControl isInvalid={errors[fieldItem.name] && touched[fieldItem.name]}>
                                                    <FormLabel color='gray.500'>{fieldItem.label} :</FormLabel>
                                                    <Input {...field} variant='flushed' type="text" />
                                                    <FormErrorMessage>Attention, ce champs n'est pas correct</FormErrorMessage>
                                                </FormControl>
                                            </Box>
                                        )}

                                    </Field>
                                )}


                                <Field name='cmsDocumentId'>
                                    {({ form, field }) => (
                                        <FormControl>
                                            <FormLabel>CMS entity</FormLabel>
                                            <Select
                                                placeholder='choose'
                                                {...field}
                                            // onChange={(e) => handleBuildSlug(e.target.value, setFieldValue, values.title)}
                                            >
                                                {editors ? editors.items.map(item =>
                                                    <option value={item.sys.id}>{item.fields.title}</option>
                                                ) : null}
                                            </Select>
                                        </FormControl>
                                    )}
                                </Field>

                            </SimpleGrid>

                            <Box>
                                <Button type='submit'>Create</Button>
                            </Box>
                        </Stack>
                        <pre>
                            {JSON.stringify(errors, null, 1)}
                        </pre>
                    </Form>
                )}
            </Formik>
        </Box>
    )
}

export default EditorCreateForm