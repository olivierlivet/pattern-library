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

const AccountHome = ({ }) => {
    return(
        <AccountWrapper>
            Home
        </AccountWrapper>
    )
}

export default AccountHome