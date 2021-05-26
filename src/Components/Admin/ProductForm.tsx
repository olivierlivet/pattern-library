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


const ProductCreateForm = ({ }) => {

    const [allUnivers, setAllUnivers] = useState(false);
    const [allCategories, setCategories] = useState(false);
    const [allVariants, setVariants] = useState(false);

    const [editors, setEditors] = useState();

    useEffect(async () => {
        const result = await axios.get(
            `${config.apiUrl}/editor`
        );
        setEditors(result.data);
        getUnivers();
        // getVariants();
    }, []);

    const getUnivers = () => {
        client.getEntries({
            'content_type': 'univers'
        })
            .then(function (entries) {
                setAllUnivers(entries)
            })
    }

    const getVariants = () => {
        client.getEntries({
            'content_type': 'variant'
        })
            .then(function (entries) {
                setVariants(entries)
            })
    }

    const handleBuildSlug = (value, setFieldValue, title) => {
        console.log('handleBuildSlug', value, title)

        client.getEntry(value)
            .then(function (entry) {
                // logs the entry metadata
                console.log(entry.sys)

                setFieldValue('slug', `${entry.fields.slug}${slugify(title.toLowerCase())}`)

                // logs the field with ID title
                console.log(entry.fields.productName)
            })


    }


    const CategoryField = (props) => {
        const {
            values: { univers },
            setFieldValue,
        } = useFormikContext();
        const [field, meta] = useField(props);

        React.useEffect(() => {
            if (univers && !allCategories) {
                client.getEntries({
                    'content_type': 'category',
                    'fields.univers.sys.id': univers
                })
                    .then(function (entries) {
                        setCategories(entries)
                    })
            }

        }, []);

        return (
            <FormControl>
                <Field name='category'>
                    {({ field, form }) => (
                        <>
                            <FormLabel>Category</FormLabel>
                            <Select {...props} {...field} placeholder='Select'>
                                {allCategories && allCategories.items.map(item =>
                                    <option value={item.sys.id}>{item.fields.title}</option>
                                )}
                            </Select>
                        </>
                    )}
                </Field>
            </FormControl>
        );
    };

    const VariantField = (props) => {
        const {
            values: { category, title },
            setFieldValue,
        } = useFormikContext();
        const [field, meta] = useField(props);

        React.useEffect(() => {
            console.log('use effect')
            if (category && !allVariants) {
                client.getEntries({
                    'content_type': 'variant',
                    'fields.category.sys.id': category
                })
                    .then(function (entries) {
                        setVariants(entries)
                    })
            }

        }, []);
        return (
            <FormControl>
                <Field name='variant'>
                    {({ field, form }) => (
                        <>
                            <FormLabel>Variant</FormLabel>
                            <Select
                                {...props}
                                {...field}
                                placeholder='Select'
                                onChange={(e) => {
                                    handleBuildSlug(e.target.value, setFieldValue, title);
                                    setFieldValue('variant', e.target.value)
                                }}
                            >
                                {allVariants && allVariants.items.map(item =>
                                    <option value={item.sys.id}>{item.fields.title}</option>
                                )}
                            </Select>
                        </>
                    )}
                </Field>
            </FormControl>
        );
    };


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
                        title: yup.string().required('Required').nullable(),
                        price: yup.number().required('Required').nullable(),
                        univers: yup.string().required('Required').nullable(),
                        category: yup.string().required('Required').nullable(),
                        variant: yup.string().required('Required').nullable(),
                    })
                }
                onSubmit={(values) => {
                    axios.post(
                        `${config.apiUrl}/product`,
                        values,
                    ).then(response => navigate(`/admin/product/${response.data._id}`))
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
                                columns={{
                                    base: 1, lg: 3
                                }}
                                gap={6}

                            >
                                <Field name='title'>
                                    {({ form, field }) => (
                                        <FormControl isInvalid={form.touched.title && form.errors.title}>
                                            <FormLabel>Title</FormLabel>
                                            <Input {...field} type='text' />
                                            <FormErrorMessage>{form.errors.title}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                                <Field name='price'>
                                    {({ form, field }) => (
                                        <FormControl isInvalid={form.touched.price && form.errors.price}>
                                            <FormLabel>Price</FormLabel>
                                            <Input {...field} type='number' />
                                            <FormErrorMessage>{form.errors.title}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                                <Field name='editor'>
                                    {({ form, field }) => (
                                        <FormControl>
                                            <FormLabel>Editor</FormLabel>
                                            <Select {...field} placeholder='Choose one'>
                                                {editors ? editors.map(item =>
                                                    <option value={item._id}>{item.name}</option>
                                                ) : null}
                                            </Select>
                                        </FormControl>
                                    )}
                                </Field>

                            </SimpleGrid>


                            <SimpleGrid
                                columns={{
                                    base: 1, lg: 3
                                }}
                                gap={6}

                                display={values.title ? 'grid' : 'none'}
                            >
                                <Field name='univers'>
                                    {({ form, field }) => (
                                        <FormControl>
                                            <FormLabel>Univers</FormLabel>
                                            <Select
                                                placeholder='Choose one'
                                                {...field}
                                            // onChange={(e) => handleBuildSlug(e.target.value, setFieldValue, values.title)}
                                            >
                                                {allUnivers ? allUnivers.items.map(item =>
                                                    <option value={item.sys.id}>{item.fields.title}</option>
                                                ) : null}
                                            </Select>
                                        </FormControl>
                                    )}
                                </Field>
                                {values.univers ? <CategoryField name="category" /> : null}
                                {values.category ? <VariantField name="variant" /> : null}
                                {/* <CategoryField /> */}

                            </SimpleGrid>
                            <Box>
                                <Button type='submit'>Create</Button>
                            </Box>
                        </Stack>
                    </Form>
                )}
            </Formik>
        </Box>
    )
}

export default ProductCreateForm