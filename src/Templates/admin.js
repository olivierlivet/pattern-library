import React, { useEffect } from 'react'
import Layout from '../Components/Layouts/base'

import Wrapper from '../Components/Layouts/Wrapper'
import Helmet from 'react-helmet'
import LoginForm from '../Components/Account/Login'
import QuickLogin from '../Components/Account/QuickLogin'

import { authenticationService } from '../Service/auth'

import { Router, Link as NavLink, Match, useLocation, Location, navigate } from "@reach/router";


import Product from '../Components/Admin/Product'
import ProductCreateForm from '../Components/Admin/ProductForm'
import User from '../Components/Admin/User'
import UserForm from '../Components/Admin/UserForm'
import Inspiration from '../Components/Admin/Inspiration'
import Evaluation from '../Components/Admin/Evaluation'
import EvaluationForm from '../Components/Admin/EvaluationForm'
import Sale from '../Components/Admin/Sale'
import Editor from '../Components/Admin/Editor'
import EditorForm from '../Components/Admin/EditorForm'
import EditorUpdateForm from '../Components/Admin/EditorForm'

import Payment from '../Components/Admin/Payment'
import PaymentForm from '../Components/Admin/PaymentForm'

import { Box, Center, ButtonGroup, Button } from '@chakra-ui/react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuIcon,
    MenuCommand,
    MenuDivider,
  } from "@chakra-ui/react"
import ProductUpdateForm from '../Components/Admin/ProductForm/Update'
// import Menu from '../Components/Layouts/Menu'
import { ChevronRightIcon, ChevronDownIcon } from '@chakra-ui/icons'


const AdminTemplate = (props) => {

    useEffect(() => {
        checkUserAuth()
    }, []);

    const checkUserAuth = () => {
        const user = authenticationService.getUser()
        if (!user) {
            // navigate('/fr/compte/login')
        }
    }

    const Login = () => (
        <Center
            minH='calc(100vh - 100px)'
        >
            <LoginForm
                onLogin={() => navigate('/fr/compte')}
                onCancel={() => navigate('/fr/')}
            />
        </Center>
    )


    return (
        <Layout
            enableBackButton={false}
            isFooterHidden={true}
        >
            <Helmet>
                <title>{`ADMIN OF THEPATTERNSCORNER`}</title>
                <meta name='description' content='Qu’est-ce-qu’un patron de couture ?  Le patron de couture est le plan qui vous permet de réaliser un ouvrage : il s’agit du tracé sur papier de tous les éléments composant un vêtement.' />
            </Helmet>

            <Wrapper>
                <Box p={'4'}>
                    <Box>
                        <Menu>
                            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                                Menu
                            </MenuButton>
                            <MenuList>
                                <MenuItem as={NavLink} to='/admin/user'>Users</MenuItem>
                                <MenuItem as={NavLink} to='/admin/sale'>Sales</MenuItem>
                                <MenuItem as={NavLink} to='/admin/payment'>Payments</MenuItem>
                                <MenuItem as={NavLink} to='/admin/editor'>Editors</MenuItem>
                                <MenuItem as={NavLink} to='/admin/product'>Products</MenuItem>
                                <MenuItem as={NavLink} to='/admin/evaluation'>Evaluations</MenuItem>
                                <MenuItem as={NavLink} to='/admin/inspiration'>Inspirations</MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>

                    {/*
                    <ButtonGroup>
                        <Button as={NavLink} to='/admin/user'>Users</Button>
                        <Button as={NavLink} to='/admin/sale'>Sales</Button>
                        <Button as={NavLink} to='/admin/editor'>Editors</Button>
                        <Button as={NavLink} to='/admin/product'>Products</Button>

                        <Button as={NavLink} to='/admin/evaluation'>Evaluations</Button>
                        <Button as={NavLink} to='/admin/inspiration'>Inspirations</Button>
                    </ButtonGroup>
                    */}

                    <Router
                        basepath='/admin'
                        default='/'
                        // basepath='/fr/compte'
                    >

                        <User path="/user" />
                        <UserForm path="/user/:userId" />

                        {/* Products */}
                        <Product path="/product" />
                        <ProductCreateForm path="/product/create" />
                        <ProductUpdateForm path="/product/:productId" />

                        {/* Editors */}
                        <Editor path="/editor" />
                        <EditorForm path="/editor/create" action='create' />
                        <EditorUpdateForm path="/editor/edit/:editorId" action='edit' />

                        <Payment path="/payment" />
                        <PaymentForm path="/payment/create" />

                        <Sale path="/sale" />
                        <Evaluation path="/evaluation" />
                        <EvaluationForm path="/evaluation/:evaluationId" />
                        <Inspiration path="/inspiration" />

                    </Router>
                </Box>
            </Wrapper>
        </Layout>
    )
}

export default AdminTemplate

// Google Id 
// 55523564131-074cqlp79q4pv4rgkm2rqfu58474l4ls.apps.googleusercontent.com