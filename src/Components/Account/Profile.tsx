import React, { Component } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { config } from '../../config'
import {
    Box,
    Button,
    Center,
    FormControl,
    FormLabel,
    Grid,
    Heading,
    Input,
    Link,
    Stack,
    Text
} from '@chakra-ui/react'

import { Router, Link as NavLink, Match } from "@reach/router";
import AccountWrapper from './Wrapper';
import AccountTitle from './Title';
import { Field, Form, Formik } from 'formik';

import UserNewsletterForm from '../Account/Form/Newsletter'
import UserProfileForm from '../Account/Form/Profile'
import UserEmailForm from '../Account/Form/Email'
import UserPasswordForm from '../Account/Form/Password'
import UserPictureForm from '../Account/Form/Picture'
import axios from 'axios';

export default class AccountProfile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: null
        }
    }

    componentDidMount() {
        axios.get(
            `${config.apiUrl}/user/608abbfa83e8bec834cb1baf`
        ).then(response => this.setState({ user: response.data }))
    }

    render() {

        const { user } = this.state

        return (
            <AccountWrapper>

                {/* <pre>
                    {JSON.stringify(user, null, 1)}
                </pre> */}

                { user ?

                    <Stack
                        spacing={{ base: 2, lg: 10 }}
                    >
                        <AccountTitle>
                            Votre profil
                        </AccountTitle>
                        <Text>Modification email, mot de passe, image de profil, abonnement newsletter</Text>

                        {/* <UserPictureForm /> */}

                        <Grid
                            templateColumns={{
                                base: `100%`,
                                lg: `300px 1fr`
                            }}
                        >
                            <Heading fontFamily='DM Sans' fontSize={{ base: 'xl', lg: 'base' }}>Newsletter :</Heading>
                            <UserNewsletterForm data={ user } />
                        </Grid>

                        <Grid
                            templateColumns={{
                                base: `100%`,
                                lg: `300px 1fr`
                            }}
                        >
                            <Heading fontFamily='DM Sans' fontSize={{ base: 'xl', lg: 'base' }}>Vos infos :</Heading>
                            <UserProfileForm data={ user } />
                        </Grid>

                        <Grid
                            templateColumns={{
                                base: `100%`,
                                lg: `300px 1fr`
                            }}
                        >
                            <Heading fontFamily='DM Sans' fontSize={{ base: 'xl', lg: 'base' }}>Email :</Heading>
                            <UserEmailForm data={ user } />

                        </Grid>

                        <Grid
                            templateColumns={{
                                base: `100%`,
                                lg: `300px 1fr`
                            }}
                        >
                            <Heading fontFamily='DM Sans' fontSize={{ base: 'xl', lg: 'base' }}>Mot de passe :</Heading>
                            <UserPasswordForm data={ user } />

                        </Grid>

                        {/* <Grid
                            templateColumns={{
                                base: `100%`,
                                lg: `300px 1fr`
                            }}
                        >
                            <Heading fontFamily='DM Sans' fontSize={{ base: 'xl', lg: 'base' }}>Image de profil :</Heading>
                            <UserPictureForm data={ user } />
                        </Grid> */}

                    </Stack>
                : null}



            </AccountWrapper>
        )

    }
}
