import React, { useState } from 'react'
import { Link as GatsbyLink } from 'gatsby'

import {
    Box,
    Button,
    Center,
    Flex,
    Grid,
    Link,
    VStack,
    Text,
    HStack,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Stack
} from '@chakra-ui/react'

import { Router, Link as NavLink, Match } from "@reach/router"
import AccountWrapper from './Wrapper'
import AccountNav from '../Nav/Account'
import RatingDetails from './RatingDetails'
import { AddIcon, ChatIcon, CopyIcon, InfoOutlineIcon, MinusIcon, StarIcon, SunIcon, ViewIcon } from '@chakra-ui/icons';
import { Formik, Form, Field } from 'formik'

const AccountLogin = ({ }) => {
    const [racingDetail, setRatingDeatail] = useState(false)

    const questions = [
        {
            name: 'email',
            label: 'Email',
            type: 'email'
        },
        {
            name: 'password',
            label: 'Mot de passe',
            type: 'password'
        },

    ]

    return (
        <Box>
            <Center
                minH='calc( 100vh - 105px )'
            >
                <Box>
                    <Formik
                        initialValues={null}
                        onSubmit={
                            () =>
                                toast({
                                    title: "Mot de passe modifié !",
                                    description: "Votre mot de passe a bien été modifié.",
                                    status: "success",
                                    duration: 5000,
                                    isClosable: true,
                                })
                        }
                    >
                        {({
                            values
                        }) => (
                            <Form>
                                <Stack
                                    spacing={{ base: 2, lg: 4 }}
                                    p={{ base: 2, lg: 4 }}
                                    boxShadow={{ base: 'md' }}
                                    borderRadius='lg'
                                    bg='white'
                                >
                                    {questions.map(item =>
                                        <Field name={item.name}>
                                            {({ field, form }) => (

                                                <FormControl>
                                                    <FormLabel>{item.label} :</FormLabel>
                                                    <Input {...field} type={item.type} placeholder='' />
                                                </FormControl>
                                            )}
                                        </Field>
                                    )}
                                    <Button type='submit'>S'identifier</Button>
                                </Stack>
                            </Form>
                        )}

                    </Formik>
                </Box>
            </Center>


        </Box>
    )
}

export default AccountLogin