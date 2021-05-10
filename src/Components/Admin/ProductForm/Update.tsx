import { Box, Button, Flex, FormControl, FormLabel, Image, Heading, HStack, Input, Select, Stack, Text, FormHelperText, SimpleGrid } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { config } from '../../../config'
import { Link } from '@reach/router'
import { Field, Form, Formik } from 'formik';
import { MediaUpload } from './Uploader';

const ProductUpdateForm = ({ productId }) => {

    const [editors, setEditors] = useState();
    const [product, setProduct] = useState();
    useEffect(async () => {
        const result = await axios.get(
            `${config.apiUrl}/editor`
        );
        setEditors(result.data);

        const product = await axios.get(
            `${config.apiUrl}/product/${productId}`
        );
        setProduct(product.data);
    }, []);

    const updatePictures = (setFieldValue, currentValues, newValue) => {
        currentValues.push(newValue)
        setFieldValue(currentValues)
    }

    return (
        <Box w='full' my='20' bg='white' p={10}>
            { product ?
                <Formik
                    initialValues={
                        product
                        // {...editor: product.editor._id}
                    }
                    onSubmit={(values) => {
                        axios.put(
                            `${config.apiUrl}/product/${productId}`,
                            values
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
                        isSubmitting,
                        setFieldError,
                        setFieldValue,
                        setFieldTouched
                    }) => (
                        <Form>
                            <Stack spacing={6}>

                                <SimpleGrid
                                    columns={{
                                        base: 1,
                                        lg: 3
                                    }}
                                    gap={4}
                                >
                                    <Field name='title'>
                                        {({ form, field }) => (
                                            <FormControl>
                                                <FormLabel>Title</FormLabel>
                                                <Input {...field} type='text' />
                                            </FormControl>
                                        )}
                                    </Field>
                                    <Field name='price'>
                                        {({ form, field }) => (
                                            <FormControl>
                                                <FormLabel>Price</FormLabel>
                                                <Input {...field} type='number' />
                                            </FormControl>
                                        )}
                                    </Field>

                                    <Field name='editor'>
                                        {({ form, field }) => (
                                            <FormControl>
                                                <FormLabel>Editor</FormLabel>
                                                <Select {...field}>
                                                    {editors ? editors.map(item =>
                                                        <option value={item._id}>{item.name}</option>
                                                    ) : null}
                                                </Select>
                                            </FormControl>
                                        )}
                                    </Field>
                                </SimpleGrid>
                                <FormControl>
                                    <FormLabel>Main picture :</FormLabel>
                                    <Box w='2xs'>
                                        <Image src={`${config.imageBaseUrl}${values.mainPicture}`} />
                                    </Box>
                                    <MediaUpload
                                        onChange={(field, mediaId) => setFieldValue('mainPicture', mediaId)}
                                        // onChange={(field, mediaId)=> console.log('mainPicture', mediaId)}
                                        path={`${product._id}/`}
                                    />
                                    <FormHelperText>Use for social sharing, etc</FormHelperText>
                                </FormControl>


                                <Field name='pictures'>
                                    {({ form, field }) => (
                                        <FormControl>
                                            <FormLabel>
                                                Product pictures
                                            </FormLabel>
                                            <HStack spacing={1}>
                                                {values.pictures.map(picture =>
                                                    <Box w='2xs'>
                                                        <Image src={`${config.imageBaseUrl}${picture}`} />
                                                    </Box>
                                                )}
                                            </HStack>
                                            <MediaUpload
                                                onChange={(field, mediaId) => updatePictures(setFieldValue, form.values.pictures, mediaId)}
                                                // onChange={(field, mediaId)=> console.log('mainPicture', mediaId)}
                                                path={`${product._id}/`}
                                            />
                                        </FormControl>
                                    )}
                                </Field>
                                <Field name='productFilePath'>
                                    {({ form, field }) => (
                                        <FormControl>
                                            <FormLabel>
                                                Product download file
                                            </FormLabel>
                                            <Input type='text' isDisabled {...field} />
                                            <MediaUpload
                                                onChange={(field, mediaId) => setFieldValue('productFilePath', mediaId)}
                                                // onChange={(field, mediaId)=> console.log('mainPicture', mediaId)}
                                                path={`${product._id}/`}
                                            />
                                        </FormControl>
                                    )}
                                </Field>
                                <Box>
                                    <Button type='submit'>Mettre à jour</Button>

                                </Box>
                            </Stack>
                            {/* <pre>
                                {JSON.stringify(values, null, 1)}
                            </pre> */}
                        </Form>
                    )}
                </Formik>
                : null}
        </Box>
    )
}

export default ProductUpdateForm