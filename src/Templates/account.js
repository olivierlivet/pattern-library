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
import EvaluationForm from '../Components/Account/EvaluationForm'
import InspirationForm from '../Components/Account/InspirationForm'


const AccountTemplate = (props) => {

    const location = useLocation()



    

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
                    <LoginForm path="/login" />
                    <AccountCart path="/cart" />
                    <AccountOrder path="/order" />
                    <AccountContribution path="/contribution" />
                    <AccountSubscription path="/subscription" />                    
                    <EvaluationForm path="/contribution/evaluation/:productId" />
                    <InspirationForm path="/contribution/inspiration/:productId" />
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