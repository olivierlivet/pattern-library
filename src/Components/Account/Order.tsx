import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

import {
    Box,
    Button,
    Center,
    Link
} from '@chakra-ui/react'

import { Router, Link as NavLink, Match } from "@reach/router";
import AccountWrapper from './Wrapper';
import AccountTitle from './Title';

const AccountOrder = ({ }) => {
    return(
        <AccountWrapper>
            <AccountTitle>
                Vos commandes
            </AccountTitle>
            
        </AccountWrapper>
    )
}

export default AccountOrder