import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Heading, HStack, Input, Select, SimpleGrid, Stack, Text, Textarea } from '@chakra-ui/react'
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


const EditorCreateForm = ({ evaluationId }) => {

    const [editors, setEditors] = useState();
    const [data, setData] = useState();

    useEffect(async () => {
        const result = await axios.get(
            `${config.apiUrl}/evaluation/${evaluationId}`
        );
        setData(result.data);
    }, []);

    const allFields = [

        {
            name: 'cuttingSatisfaction',
            type: 'number',
            label: 'cuttingSatisfaction'
        },
        {
            name: 'cuttingSatisfactionDetail',
            type: 'textarea',
            label: 'cuttingSatisfactionDetail'
        },
        {
            name: 'noticeComprehensibility',
            type: 'number',
            label: 'noticeComprehensibility'
        },
        {
            name: 'noticeComprehensibilityDetail',
            type: 'textarea',
            label: 'noticeComprehensibilityDetail'
        },

        {
            name: 'productCustomisation',
            type: 'number',
            label: 'productCustomisation'
        },
        {
            name: 'productCustomisationDetail',
            type: 'textarea',
            label: 'productCustomisationDetail'
        },



        {
            name: 'associationWithOtherFabricScore',
            type: 'number',
            label: 'associationWithOtherFabricScore'
        },
        {
            name: 'globalEvaluation',
            type: 'number',
            label: 'globalEvaluation'
        },

        {
            name: 'status',
            type: 'select',
            label: 'status'
        },
    ]

    return (
        <Box w='full' my='20' bg='white' p={10}>
            { data ?
                <Formik
                    initialValues={data}
                    validationSchema={
                        yup.object().shape({
                            // name: yup.string().required('Required').nullable(),
                            // firstName: yup.string().required('Required').nullable(),
                            // lastName: yup.string().required('Required').nullable(),
                            // vatNumber: yup.string().required('Required').nullable(),
                            // address: yup.string().required('Required').nullable(),
                            // postalCode: yup.string().required('Required').nullable(),
                            // phone: yup.string().required('Required').nullable(),
                            // email: yup.string().required('Required').nullable(),
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
                                                fieldItem.type === 'text' ?
                                                    <FormControl isInvalid={errors[fieldItem.name] && touched[fieldItem.name]}>
                                                        <FormLabel color='gray.500'>{fieldItem.label} :</FormLabel>
                                                        <Input {...field} variant='flushed' type="text" />
                                                        <FormErrorMessage>Attention, ce champs n'est pas correct</FormErrorMessage>
                                                    </FormControl>
                                                    : fieldItem.type === 'number' ?
                                                        <FormControl isInvalid={errors[fieldItem.name] && touched[fieldItem.name]}>
                                                            <FormLabel color='gray.500'>{fieldItem.label} :</FormLabel>
                                                            <Input {...field} variant='flushed' type="text" />
                                                            <FormErrorMessage>Attention, ce champs n'est pas correct</FormErrorMessage>
                                                        </FormControl>
                                                        : fieldItem.type === 'textarea' ?
                                                            <FormControl isInvalid={errors[fieldItem.name] && touched[fieldItem.name]}>
                                                                <FormLabel color='gray.500'>{fieldItem.label} :</FormLabel>
                                                                <Textarea {...field} variant='flushed' type="text" />
                                                                <FormErrorMessage>Attention, ce champs n'est pas correct</FormErrorMessage>
                                                            </FormControl>
                                                            : fieldItem.type === 'select' ?
                                                                <FormControl isInvalid={errors[fieldItem.name] && touched[fieldItem.name]}>
                                                                    <FormLabel color='gray.500'>{fieldItem.label} :</FormLabel>
                                                                    <Select {...field}>
                                                                        <option value='draft'>draft</option>
                                                                        <option value='publish'>publish</option>
                                                                    </Select>
                                                                    <FormErrorMessage>Attention, ce champs n'est pas correct</FormErrorMessage>
                                                                </FormControl>
                                                                : null

                                            )}

                                        </Field>
                                    )}


                                </SimpleGrid>

                                <Box>
                                    <Button type='submit'>Update</Button>
                                </Box>
                                <pre>
                                    {JSON.stringify(data, null, 1)}
                                </pre>
                            </Stack>

                        </Form>
                    )}
                </Formik>
                : null}
        </Box>
    )
}

export default EditorCreateForm