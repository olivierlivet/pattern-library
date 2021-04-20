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

const AccountContribution = ({ }) => {
    return(
        <AccountWrapper>
            <AccountTitle>
                Vos contributions
            </AccountTitle>
            <Text>Liste des avis, inspirations publiés</Text>
        </AccountWrapper>
    )
}

export default AccountContribution