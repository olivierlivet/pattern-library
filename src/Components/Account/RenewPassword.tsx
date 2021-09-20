import { config } from '../../config';
import { Link as GatsbyLink } from 'gatsby'
import { Button } from '@chakra-ui/button'
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Box, Center, Link, Stack, Text } from '@chakra-ui/react'
import axios from 'axios'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import * as yup from 'yup';

const RenewPassword = ({ }) => {

    const handleSubmit = (values) => {
        console.log(values)
        axios.post(
            `${config.apiUrl}/user/new-password`,
            values
        ).then((response) => {
            console.log(response)
        })
    }

    return (
        <Box
            px={{ base: 10, lg: 0 }}
        >
            <Center
                minH='calc(100vh - 200px)'
            >
                <Box
                    w='lg'
                    bg='white'
                    p={{ base: 10, lg: 4 }}
                    borderRadius='4px'
                >

                    <Formik
                        initialValues={{}}
                        onSubmit={(values, { setSubmitting }) => {
                            handleSubmit(values);
                            // console.log('submit')
                        }}
                        validationSchema={
                            yup.object().shape({
                                email: yup.string().email('La syntaxe semble erronée').required('Champ obligatoire').nullable(),
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
                            submitCount,
                            setFieldError,
                            setFieldValue,
                            setFieldTouched,
                            isValid
                        }) => (
                            <Form>
                                {!isSubmitting ?
                                    <Stack
                                        spacing={{ base: 4, lg: 8 }}
                                    >

                                        <Field name='email'>
                                            {({ field, form }) => (
                                                <FormControl isInvalid={form.errors.email && form.touched.email}>
                                                    <FormLabel color='gray.600'>Pour réinitialiser votre mot de passe, saisissez votre email : </FormLabel>
                                                    <Input
                                                        {...field}
                                                        placeholder='email@mail.com'
                                                        type='email'
                                                        variant='flushed'
                                                    />
                                                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                                                </FormControl>
                                            )}

                                        </Field>

                                        <Button
                                            type='submit'
                                            colorScheme={isValid ? 'blue' : 'gray'}
                                            isDisabled={!isValid}
                                        >
                                            Envoyer
                                        </Button>


                                    </Stack>
                                    :
                                    <Stack space={4}>
                                        <Text color='green.400'> 
                                        Si{' '}
                                        <Text fontWeight='bold' as='span'>{values.email}</Text>{' '}
                                        correspond à un compte connu, vous venez de recevoir un email permettant de créer un nouveau mot de passe.
                                        </Text>
                                        <Box>
                                            <Link as={GatsbyLink} to='/'>Retour </Link>
                                        </Box>
                                    </Stack>
                                }
                            </Form>
                        )}
                    </Formik>
                </Box>


            </Center>
        </Box>
    )
}

export default RenewPassword