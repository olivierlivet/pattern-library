import { Button } from '@chakra-ui/button'
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Box, Center, Stack } from '@chakra-ui/layout'
import { Field, Form, Formik } from 'formik'
import React from 'react'

const RenewPassword = ({ }) => {
    return (
        <Box>
            <Center
                minH='calc(100vh - 50px)'
            >
                <Box
                    w='lg'
                    bg='white'
                    p={{ base: 10, lg: 4 }}
                    borderRadius='4px'
                >

                    <Formik
                        initialValues={{}}
                        onSubmit={(values, { setSubmitting }) => {
                            console.log('submit')
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
                            setFieldTouched,
                        }) => (
                            <Form>
                                {/* <Field>
                                    test
                                </Field> */}
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

                                        <Button type='submit'>
                                            Envoyer
                                        </Button>
                                    </Stack>

                            </Form>
                        )}
                    </Formik>
                </Box>


            </Center>
        </Box>
    )
}

export default RenewPassword