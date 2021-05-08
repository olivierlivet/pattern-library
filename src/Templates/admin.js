import React, { useEffect } from 'react'
import Layout from '../Components/Layouts/base'

import Wrapper from '../Components/Layouts/Wrapper'
import Helmet from 'react-helmet'
import LoginForm from '../Components/Account/Login'
import QuickLogin from '../Components/Account/QuickLogin'

import {authenticationService} from '../Service/auth'

import { Router, Link as NavLink, Match, useLocation, Location, navigate } from "@reach/router";


import Product from '../Components/Admin/Product'
import ProductCreateForm from '../Components/Admin/ProductForm'
import User from '../Components/Admin/User'


import { Center } from '@chakra-ui/layout'


const AdminTemplate = (props) => {

    useEffect(() => {
          checkUserAuth()
    }, []);

      const checkUserAuth = () => {
        const user = authenticationService.getUser()
        if( !user ){
            // navigate('/fr/compte/login')
        }
      }

      const Login = () => (
        <Center
          minH='calc(100vh - 100px)'
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
                <title>{`ADMIN`}</title>
                <meta name='description' content='Qu’est-ce-qu’un patron de couture ?  Le patron de couture est le plan qui vous permet de réaliser un ouvrage : il s’agit du tracé sur papier de tous les éléments composant un vêtement.' />
            </Helmet>

            <Wrapper>
                <Router
                    basepath='/admin'
                    default='/'
                    // basepath='/fr/compte'
                >
                    {/* <AdmintHome path="/" /> */}
                    <Product path="/product" />
                    <ProductCreateForm path="/product/create" />
                    <User path="/user" />

                    {/* <Login path="/login" />
                    <RenewPassword path="/new-password" />
                    <QuickLogin path="/quick-login/:token" />
                    <AccountCart path="/cart" />
                    <AccountFavorite path="/favorite" />
                    <AccountOrder path="/order" />
                    <AccountContribution path="/contribution" />
                    <AccountSubscription path="/subscription" />                    
                    <EvaluationForm path="/contribution/evaluation/:productId" />
                    <EvaluationLogin path="/contribution/evaluation/login/:evaluationId" />
                    <InspirationForm path="/contribution/inspiration/:productId" />
                    <AccountProfile path="/profil" /> */}
                </Router>


            </Wrapper>
        </Layout>
    )
}

export default AdminTemplate

// Google Id 
// 55523564131-074cqlp79q4pv4rgkm2rqfu58474l4ls.apps.googleusercontent.com