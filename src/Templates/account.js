import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Layout from '../Components/Layouts/base'

import {
    StaticImage,
    // GatsbyImage
} from "gatsby-plugin-image"
import SearchEngineLoader from '../Components/SearchEngine/Loader.tsx'
import Nav from '../Components/Nav/Base'
import ProductsSummary from '../Components/ProductsSummary/index.js'
import HeroSearch from '../Components/Hero/Hero'
import RichContent from '../Components/RichContent'
import {
    Heading,
    Button,
    Link,
    Box,
    Center,
    HStack,
    ButtonGroup,
    Text,
    Stack
} from '@chakra-ui/react'
import Wrapper from '../Components/Layouts/Wrapper'
import Helmet from 'react-helmet'
import FacebookLogin from 'react-facebook-login';
import LoginForm from '../Components/Account/Login'
import GoogleLoginButton from '../Components/Account/LoginButtons/Google'
import FacebookLoginButton from '../Components/Account/LoginButtons/Facebook'

import { Router, Link as NavLink, Match, useLocation, Location } from "@reach/router";
import AccountHome from '../Components/Account/Home'
import AccountCart from '../Components/Account/Cart'
import AccountProfile from '../Components/Account/Profile'
import AccountOrder from '../Components/Account/Order'
import AccountContribution from '../Components/Account/Contribution'
import AccountSubscription from '../Components/Account/Subscription'
import ContributionForm from '../Components/Account/ContributionForm'


const AccountTemplate = (props) => {

    const location = useLocation()
    const Login = () => {
        return (
            <Box
                minH={'90vh'}
            >
                <Center minH={'90vh'}   >
                    <Stack
                        bg='white'
                        w={{ base: 'md' }}
                        p={{ base: 10 }}
                        spacing={{ base:4, lg:6 }}
                    >
                        <Box
                            fontSize={{
                                base: 'lg',
                                lg: 'larger'
                            }}
                        >
                            Accès à votre compte
                        </Box>
                        <HStack>
                            <ButtonGroup>
                                <GoogleLoginButton />
                                {/* <FacebookLoginButton /> */}
                            </ButtonGroup>
                        </HStack>
                        <Text>Ou</Text>
                        <LoginForm />
                        
                    </Stack>
                </Center>
            </Box>
        )
    }

    

    return (
        <Layout
            enableBackButton={false}
            isFooterHidden={true}
        >
            <Helmet>
                <title>{`Votre compte`}</title>
                <meta name='description' content='Qu’est-ce-qu’un patron de couture ?  Le patron de couture est le plan qui vous permet de réaliser un ouvrage : il s’agit du tracé sur papier de tous les éléments composant un vêtement.' />
            </Helmet>

            <Wrapper>
                <Router
                    basepath='/fr/compte'
                    default='/'
                    // basepath='/fr/compte'
                >
                    <AccountHome path="/" />
                    <Login path="/login" />
                    <AccountCart path="/cart" />
                    <AccountOrder path="/order" />
                    <AccountContribution path="/contribution" />
                    <AccountSubscription path="/subscription" />                    
                    <ContributionForm path="/contribution/create/:productId" />
                    <AccountProfile path="/profil" />
                </Router>
                {/* <Nav data={univers} /> */}


            </Wrapper>
        </Layout>
    )
}

export default AccountTemplate

// Google Id 
// 55523564131-074cqlp79q4pv4rgkm2rqfu58474l4ls.apps.googleusercontent.com