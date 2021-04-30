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
import AccountHome from '../Components/AccountEditor/Home'
import AccountProducts from '../Components/AccountEditor/Products'
import AccountSales from '../Components/AccountEditor/SalesBackup'
import AccountSettings from '../Components/AccountEditor/Settings'
import AccountRatings from '../Components/AccountEditor/Ratings'
import AccountLogin from '../Components/AccountEditor/Login'


const AccountEditorTemplate = (props) => {

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
                <title>{`Plateforme éditeur | The Patterns Corner`}</title>
                <meta name='description' content='Qu’est-ce-qu’un patron de couture ?  Le patron de couture est le plan qui vous permet de réaliser un ouvrage : il s’agit du tracé sur papier de tous les éléments composant un vêtement.' />
            </Helmet>

            <Wrapper>
                <Router
                    basepath='/fr/editor'
                    default='/'
                    // basepath='/fr/compte'
                >
                    <AccountHome path='/' />
                    <AccountLogin path='/login' />
                    <AccountProducts path='/products' />
                    <AccountSales path='/sales' />
                    <AccountRatings path='/ratings' />
                    <AccountSettings path='/settings' />
                    
                </Router>
                {/* <Nav data={univers} /> */}


            </Wrapper>
        </Layout>
    )
}

export default AccountEditorTemplate

// Google Id 
// 55523564131-074cqlp79q4pv4rgkm2rqfu58474l4ls.apps.googleusercontent.com