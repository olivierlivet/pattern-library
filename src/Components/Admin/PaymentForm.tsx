import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Heading, HStack, Input, Select, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { config } from '../../config'
import { Link, navigate } from '@reach/router'
import { Field, Form, Formik, useFormikContext, useField } from 'formik';
import { MediaUpload } from './ProductForm/Uploader';
import getVariants from '../../Data/getVariants';
import { Link as RouterLink } from '@reach/router';
import * as yup from 'yup';

var contentful = require('contentful');
var client = contentful.createClient({
    space: config.contentful.spaceId,
    accessToken: config.contentful.accessToken,
    resolveLinks: true
});
var slugify = require('slugify')


const PaymentCreateForm = ({ }) => {



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
                    amount: undefined,
                    editor: undefined
                }}
                validationSchema={
                    yup.object().shape({
                        amount: yup.string().required('Required'),
                        editor: yup.string().required('Required')
                    })
                }
                onSubmit={(values) => {
                    axios.post(
                        `${config.apiUrl}/payment`,
                        values,
                    ).then(response => navigate(`/admin/payment`))
                    // console.log(values)
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
                            <Box>
                                    <Button as={RouterLink} to='..' size='sm'>Cancel</Button>
                            </Box>
                            <SimpleGrid
                                columns={{ base: 1, lg: 2 }}
                                gap={{ base: 2, lg: 8 }}
                            >


                                <Field name={'amount'}>
                                    {({ field, form }) => (
                                        <Box>
                                            <FormControl isInvalid={errors['amount'] && touched['amount']}>
                                                <FormLabel color='gray.500'>Amount :</FormLabel>
                                                <Input {...field} variant='flushed' type="text" />
                                                <FormErrorMessage>Warning, there is a problem with this field</FormErrorMessage>
                                            </FormControl>
                                        </Box>
                                    )}
                                </Field>
                                {editors ?
                                    <Field name={'editor'}>
                                        {({ field, form }) => (
                                            <Box>
                                                <FormControl isInvalid={errors['editor'] && touched['editor']}>
                                                    <FormLabel color='gray.500'>Editor :</FormLabel>
                                                    <Select {...field} placeholder='Select'>
                                                        {editors.map(item =>
                                                            <option value={ item._id }>{item.name}</option>
                                                        )}
                                                    </Select>
                                                    <FormErrorMessage>Warning, there is a problem with this field</FormErrorMessage>
                                                </FormControl>
                                            </Box>
                                        )}

                                    </Field>
                                    : null}

                            


                            </SimpleGrid>

                            <Box>
                                <Button colorScheme='blue' isDisabled={!isValid} type='submit'>Create</Button>
                            </Box>
                        </Stack>
                        <pre>
                            {JSON.stringify(values, null, 1)}
                        </pre>
                    </Form>
                )}
            </Formik>
        </Box>
    )
}

export default PaymentCreateForm