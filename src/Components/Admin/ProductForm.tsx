import { Box, Button, Flex, FormControl, FormLabel, HStack, Input, Text} from '@chakra-ui/react'
import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { config } from '../../config'
import { Link } from '@reach/router'
import { Field, Form, Formik } from 'formik';

const ProductCreateForm = ({}) => {

    // const [data, setData] = useState();
    // useEffect(async () => {
    //     const result = await axios.get(
    //         `${config.apiUrl}/product`
    //     );
    //     setData(result.data);
    // }, []);

    return(
        <Box w='full' my='20' bg='white' p={10}>
            <div>Product creation form</div>
            <Formik
                initialValues={{
                    title:'',
                    editor:'6092f72cbc6b2262bb91d167'
                }}
                onSubmit={(values)=>{
                    axios.post(
                        `${config.apiUrl}/product`,
                        values
                    )
                    console.log( values )
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
                })=>(
                    <Form>
                        <Field name='title'>
                            {({form, field})=>(
                                <FormControl>
                                    <FormLabel>Title</FormLabel>
                                    <Input {...field} type='text' />
                                </FormControl>
                            )}
                        </Field>
                        <Field name='price'>
                            {({form, field})=>(
                                <FormControl>
                                    <FormLabel>Price</FormLabel>
                                    <Input {...field} type='number' />
                                </FormControl>
                            )}
                        </Field>

                        <Field name='editor'>
                            {({form, field})=>(
                                <FormControl>
                                    <FormLabel>Editor</FormLabel>
                                    <Input {...field} type='number' />
                                </FormControl>
                            )}
                        </Field>
                        <Button type='submit'>Créer</Button>
                    </Form>
                )}

            </Formik>
        </Box>
    )
}

export default ProductCreateForm