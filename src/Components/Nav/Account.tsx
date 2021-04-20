import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

import {
    Box,
    Button,
    Center,
    Link
} from '@chakra-ui/react'

import { Router, Link as NavLink, Match } from "@reach/router";

const AccountNav = ({ }) => {
    return(

        <Box
            py='2rem'
        >
            <Center spacing={ 3 }>
                <Button mx={2} variant='link' as={ NavLink } to='/fr/'>Retour au site</Button>
                <Button mx={2} variant='link' as={ NavLink } to='/fr/compte/cart'>Panier</Button>
                <Button mx={2} variant='link' as={ NavLink } to='/fr/compte/order'>Patrons</Button>
                <Button mx={2} variant='link' as={ NavLink } to='/fr/compte/contribution'>Avis & Publications</Button>
                <Button mx={2} variant='link' as={ NavLink } to='/fr/compte/subscription'>Abonnements</Button>
                <Button mx={2} variant='link' as={ NavLink } to='/fr/compte/profil'>Profil</Button>
            </Center>
        </Box>
    )
}

export default AccountNav