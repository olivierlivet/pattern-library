import React, { useEffect } from 'react'
import Layout from '../Components/Layouts/base'

import Wrapper from '../Components/Layouts/Wrapper'
import Helmet from 'react-helmet'
import LoginForm from '../Components/Account/Login'
import QuickLogin from '../Components/Account/QuickLogin'

import {authenticationService} from '../Service/auth'

import { Router, Link as NavLink, Match, useLocation, Location, navigate } from "@reach/router";

import { Center } from '@chakra-ui/layout'


import EvaluationLogin from '../Components/Evaluation/EvaluationLoginForm'
import EvaluationForm from '../Components/Evaluation/EvaluationForm'
import InspirationForm from '../Components/Inspiration/InspirationForm'

const contributionTemplate = (props) => {

    // useEffect(() => {
    //       checkUserAuth()
    // }, []);

    //   const checkUserAuth = () => {
    //     const user = authenticationService.getUser()
    //     if( !user ){
    //         // navigate('/fr/compte/login')
    //     }
    //   }


    

    return (
        <Layout
            enableBackButton={false}
            isFooterHidden={true}
        >
            <Helmet>
                <title>{`Donnez votre avis sur vos patrons`}</title>
                <meta name='description' content='Qu’est-ce-qu’un patron de couture ?  Le patron de couture est le plan qui vous permet de réaliser un ouvrage : il s’agit du tracé sur papier de tous les éléments composant un vêtement.' />
                <link rel='canonical' content='https://thspatternscorner.com' />
            </Helmet>

            <Wrapper>
                <Router
                    basepath='/fr/contribution'
                    default='/'
                    // basepath='/fr/compte'
                >
                    {/* <AccountHome path="/" /> */}
                    <EvaluationForm path="/evaluation/:productId" />
                    <EvaluationLogin path="/evaluation/login/:evaluationId" />
                    <InspirationForm path="/inspiration/:productId" />
                </Router>
                {/* <Nav data={univers} /> */}


            </Wrapper>
        </Layout>
    )
}

export default contributionTemplate