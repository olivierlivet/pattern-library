import React, { useEffect } from 'react'
import Layout from '../Components/Layouts/base'

import Wrapper from '../Components/Layouts/Wrapper'
import Helmet from 'react-helmet'
import LoginForm from '../Components/Account/Login'
import QuickLogin from '../Components/Account/QuickLogin'

import {authenticationService} from '../Service/auth'

import { Router, Link as NavLink, Match, useLocation, Location, navigate } from "@reach/router";
import AccountHome from '../Components/Account/Home'
import AccountCart from '../Components/Account/Cart'
import AccountProfile from '../Components/Account/Profile'
import AccountOrder from '../Components/Account/Order'
import AccountFavorite from '../Components/Account/Favorite'
import AccountContribution from '../Components/Account/Contribution'
import AccountSubscription from '../Components/Account/Subscription'
import RenewPassword from '../Components/Account/RenewPassword'
import RenewPasswordCreate from '../Components/Account/RenewPasswordCreate'
import { Center } from '@chakra-ui/layout'


const AccountTemplate = (props) => {

    useEffect(() => {
          checkUserAuth()
    }, []);

      const checkUserAuth = () => {
        const user = authenticationService.getUser()

        // Allow only new password route
        if( !user && !props.location.pathname.match(/^\/fr\/compte\/new-password\/(.*)$/) ){
            navigate('/fr/compte/login')
        }
      }

      const Login = () => (
        <Center
          minH='calc(100vh - 200px)'
        >
            <LoginForm
                onLogin={()=> navigate('/fr/compte')}
                onCancel={()=> navigate('/fr/')}
            />
        </Center>
    )
    

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
                    <RenewPassword path="/new-password" />
                    <RenewPasswordCreate path="/new-password/:token" />


                    <QuickLogin path="/quick-login/:token" />
                    <AccountCart path="/cart" />
                    <AccountFavorite path="/favorite" />
                    <AccountOrder path="/order" />
                    <AccountContribution path="/contribution" />
                    <AccountSubscription path="/subscription" />                    
                    {/* <EvaluationForm path="/contribution/evaluation/:productId" />
                    <EvaluationLogin path="/contribution/evaluation/login/:evaluationId" />
                    <InspirationForm path="/contribution/inspiration/:productId" /> */}
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