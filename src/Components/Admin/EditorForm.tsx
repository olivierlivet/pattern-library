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
        const result = await axios.get(
            `${config.apiUrl}/editor`
        );
        setEditors(result.data);
        // getUnivers();
        // getVariants();
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
            label: 'Company name'
        },
        {
            name: 'vatNumber',
            type: 'text',
            label: 'Vat number'
        },
        {
            name: 'address',
            type: 'text',
            label: 'Address'
        },
        {
            name: 'postalCode',
            type: 'text',
            label: 'Postal code'
        },
        {
            name: 'city',
            type: 'text',
            label: 'City'
        },
        {
            name: 'email',
            type: 'email',
            label: 'Email address'
        },
        {
            name: 'phone',
            type: 'phone',
            label: 'Phone number'
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
                        vatNumber: yup.string().nullable(),
                        address: yup.string().required('Required').nullable(),
                        postalCode: yup.string().required('Required').nullable(),
                        phone: yup.string().required('Required').nullable(),
                        email: yup.string().email().required('Required').nullable(),
                    })
                }
                onSubmit={(values) => {
                    axios.post(
                        `${config.apiUrl}/editor`,
                        values,
                    ).then(response => ()=>{
                        // navigate(`/admin/editor`)
                    }
                    )
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
                    isValid,
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


                            </SimpleGrid>

                            <Box>
                                <Button isDisabled={!isValid} type='submit'>Create</Button>
                            </Box>
                        </Stack>
                        <pre>
                            { JSON.stringify( errors, null, 1 )}
                        </pre>
                    </Form>
                )}
            </Formik>
        </Box>
    )
}

export default EditorCreateForm