import {
    Box,
    Button,
    Flex,
    Image,
    Grid,
    HStack,
    Text,
    ButtonGroup,
    Stack,
    Textarea,
    SimpleGrid,
    Input
} from '@chakra-ui/react'
import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import React, { useState, useEffect, FC } from 'react'
import { config } from '../../config'

type props = {
    data: any
}

const InspirationDetails: FC<props> = ({ data }) => {

    const handlePublish = (values) => {
        axios.post(
            `${config.apiUrl}/inspiration/${data._id}/publish`,
            values
        ).catch(error => console.log('error', error))
    }

    return (
        <Stack w='full' my='20' bg='white' p={10}>
            InspirationDetails
            <HStack>
                {data.pictures.map(picture =>
                    <>
                        <Image
                            w='200px'
                            src={`${config.imageCdnBaseUrl}${picture}`}
                            borderRadius='xl'
                            boxShadow='sm'
                        />
                    </>
                )}
            </HStack>
            <Box>
                <Formik
                    initialValues={{
                        comment: data.comment,
                        instagramAccount: data.instagramAccount,
                        blogUrl: data.blogUrl,
                        product: data.product,
                        user: data.user
                    }}
                    onSubmit={(values) => {
                        axios.put(
                            `${config.apiUrl}/inspiration/${data._id}`,
                            values
                        ).catch(error => console.log('error', error))
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
                            <Stack>
                                <SimpleGrid
                                    columns={{ base: 1, lg: 2 }}
                                    gap={6}
                                >
                                    <Stack>
                                        <Field name="instagramAccount">{({ field, form }) => (
                                            <Input placeholder='Instagram' {...field} />
                                        )}
                                        </Field>
                                        <Field name="blogUrl">{({ field, form }) => (
                                            <Input placeholder='Blog' {...field} />
                                        )}
                                        </Field>
                                    </Stack>
                                    <Field name="comment">{({ field, form }) => (
                                        <Textarea placeholder='Comment' {...field} />
                                    )}
                                    </Field>
                                </SimpleGrid>
                                <ButtonGroup>
                                    <Button type='submit'>Update</Button>
                                    {data.status === 'draft' ?
                                        <Button
                                            colorScheme='green'
                                            onClick={() => handlePublish(values)}
                                        >
                                            Publish
                                        </Button>
                                    : null}
                                    <Button
                                            colorScheme='green'
                                            onClick={() => handlePublish(values)}
                                        >
                                            Publish
                                    </Button>
                                </ButtonGroup>
                            </Stack>
                        </Form>
                    )}

                </Formik>
            </Box>
            <pre>
                {JSON.stringify(data, null, 1)}
            </pre>
        </Stack>
    )
}

export default InspirationDetails
