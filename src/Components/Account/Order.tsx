import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

import {
    Box,
    Button,
    Center,
    Link,
    Text
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
            <Text>Liste des commandes de patron, accès au téléchargement de patron dématérialisé</Text>

            
        </AccountWrapper>
    )
}

export default AccountOrder