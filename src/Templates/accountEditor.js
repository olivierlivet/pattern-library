import React, { useEffect, useState } from 'react'
import { graphql, navigate } from 'gatsby'
import Layout from '../Components/Layouts/base'

import {
    StaticImage,
    // GatsbyImage
} from "gatsby-plugin-image"
// import SearchEngineLoader from '../Components/SearchEngine/Loader.tsx'
// import Nav from '../Components/Nav/Base'
// import ProductsSummary from '../Components/ProductsSummary/index.js'
// import HeroSearch from '../Components/Hero/Hero'
// import RichContent from '../Components/RichContent'
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
import AccountSales from '../Components/AccountEditor/Sales'
import AccountPayments from '../Components/AccountEditor/Payments'
import AccountSettings from '../Components/AccountEditor/Settings'
import AccountRatings from '../Components/AccountEditor/Ratings'
import AccountLogin from '../Components/AccountEditor/Login'
import AccountNewPassword from '../Components/AccountEditor/NewPassword'
import { authenticationService } from '../Service/auth'

const AccountEditorTemplate = (props) => {
    useEffect(() => {
        checkEditorAuth()
  }, []);

    const checkEditorAuth = () => {
      const editor = authenticationService.getEditor()

      // Allow only new password route
      if( !editor && !props.location.pathname.match(/^\/fr\/compte\/new-password\/(.*)$/) ){
          navigate('/fr/editor/login')
      }
    }


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
                            Accès à votre compte --
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
                <meta name='description' content='Accéder à la gestion de votre compte ThePatterneCorner.' />
            </Helmet>

            <Wrapper>
                <Router
                    basepath='/fr/editor'
                    default='/'
                    // basepath='/fr/compte'
                >

                    <AccountNewPassword path='/new-password/:token' />
                    <AccountNewPassword path='/init/new-password/:token' init={true} />

                    <AccountHome path='/' />
                    <AccountLogin path='/login' />
                    <AccountProducts path='/products' />
                    <AccountSales path='/sales' />
                    <AccountPayments path='/payments' />
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