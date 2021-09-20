import { CheckIcon, SmallCloseIcon } from '@chakra-ui/icons';
import { Box, Button, ButtonGroup, Flex, HStack, Input, Select, SimpleGrid, Table, Td, Text, Th, Thead, Tr, useToast } from '@chakra-ui/react'
import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import React, { useState, useEffect } from 'react'
import { config } from '../../config'
import * as yup from 'yup';
import { Link as RouterLink, navigate } from '@reach/router'

const UserForm = ({ userId }) => {

    const [data, setData] = useState();
    const toast = useToast();

    useEffect(async () => {
        const result = await axios.get(
            `${config.apiUrl}/user/${userId}`
        );
        setData(result.data);
    }, []);

    const handleDelete = () => {
        axios.delete(
            `${config.apiUrl}/user/${userId}`
        ).then(()=> navigate( '/admin/user'))
    }

    return (
        <Box w='full' my='20' bg='white' p={10}>
            <ButtonGroup w='full' justifyContent='space-between'>
                <Button as={RouterLink} to='..'>Back</Button>
                <Button
                    colorScheme='red'
                    onClick={()=> handleDelete() }
                >
                    Delete
                </Button>
            </ButtonGroup>
            { data ?
                <Formik
                    onSubmit={(values, { setSubmitting }) => {
                        axios.put(
                            `${config.apiUrl}/user/${userId}`, values
                        ).then(
                            () =>
                                toast({
                                    title: "Profil updated",
                                    description: "The profile of this user has been updated.",
                                    status: "success",
                                    duration: 5000,
                                    isClosable: true,
                                })
                        )
                    }}
                    validationSchema={yup.object().shape({
                        email: yup.string().email('Le format semble erronée').required('')
                    })}
                    initialValues={data}
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
                        setFieldTouched,
                        initialStatus
                    }) => (
                        <Form>
                            <SimpleGrid my={10} gap={10} columns={{ base: 1, lg: 2 }}>
                                <Field name='firstName'>
                                    {({ field, form }) => (
                                        <Input {...field} type='text' />
                                    )}
                                </Field>
                                <Field name='email'>
                                    {({ field, form }) => (
                                        <Input {...field} type='email' />
                                    )}
                                </Field>
                                <Field name='newsletterSubscription'>
                                    {({ field, form }) => (

                                        <Select {...field}>
                                            <option value={'true'}>Yes</option>
                                            <option value={'false'}>No</option>
                                        </Select>
                                    )}
                                </Field>
                            </SimpleGrid>
                            <pre>
                                {JSON.stringify(initialStatus, null, 1)}
                            </pre>
                            <Box>
                                <Button type='submit'>Update</Button>
                            </Box>
                        </Form>
                    )}

                </Formik>
                : null}
            <pre>
                {JSON.stringify(data, null, 1)}
            </pre>

        </Box>
    )
}

export default UserForm