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
    Box,
    Center,
    HStack,
    ButtonGroup
} from '@chakra-ui/react'
import Wrapper from '../Components/Layouts/Wrapper'
import Helmet from 'react-helmet'
import FacebookLogin from 'react-facebook-login';
import LoginForm from '../Components/Account/Login'
import GoogleLoginButton from '../Components/Account/LoginButtons/Google'
import FacebookLoginButton from '../Components/Account/LoginButtons/Facebook'

const AccountTemplate = (props) => {

    return (
        <Layout
            enableBackButton={false}
        >
            <Helmet>
                <title>{`Votre compte`}</title>
                <meta name='description' content='Qu’est-ce-qu’un patron de couture ?  Le patron de couture est le plan qui vous permet de réaliser un ouvrage : il s’agit du tracé sur papier de tous les éléments composant un vêtement.' />
            </Helmet>

            <Wrapper>
                {/* <Nav data={univers} /> */}
                <Box
                    minH={'90vh'}
                >

                
                <Center                     minH={'90vh'}
>
                    <Box
                        bg='white'
                        w={{ base:'md'}}
                        p={{ base:10 }}
                    >
                    <Box
                        fontSize={{
                            base: 'lg',
                            lg: 'larger'
                        }}
                    >
                        Compte
                    </Box>
                    <LoginForm />
                    <HStack>
                        <ButtonGroup>
                            <GoogleLoginButton />
                            <FacebookLoginButton />
                        </ButtonGroup>
                    </HStack>
                    </Box>
                </Center>
                </Box>

            </Wrapper>
        </Layout>
    )
}

export default AccountTemplate

// Google Id 
// 55523564131-074cqlp79q4pv4rgkm2rqfu58474l4ls.apps.googleusercontent.com