import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

import {
    Box,
    Button,
    ButtonGroup,
    Center,
    Link
} from '@chakra-ui/react'

import { Router, Link as NavLink, Match } from "@reach/router";
import { ArrowBackIcon } from '@chakra-ui/icons';

const AccountEditorNav = ({ }) => {
    return (

        <Box
            py='2rem'
        >
            {/* <Center spacing={ 3 }>
                <Button mx={2} variant='link' as={ NavLink } to='/fr/'>Retour au site</Button>
                <Button mx={2} variant='link' as={ NavLink } to='/fr/compte/cart'>Panier</Button>
                <Button mx={2} variant='link' as={ NavLink } to='/fr/compte/order'>Patrons</Button>
                <Button mx={2} variant='link' as={ NavLink } to='/fr/compte/contribution'>Avis & Publications</Button>
                <Button mx={2} variant='link' as={ NavLink } to='/fr/compte/profil'>Profil</Button>
            </Center> */}
            <Box maxW='100vw' overflowX='scroll'>
                <Center spacing={3} w={{ base: 'max-content', lg: '100%' }}>
                    <ButtonGroup fontFamily='DM Sans' fontWeight="normal">
                        <Button mx={2} as={NavLink} to='/fr/editor'>
                            <ArrowBackIcon mr={1} />
                            Dashboard
                        </Button>
                        <Button fontWeight='normal' variant='link' mx={2} as={NavLink} to='/fr/editor/products'>Patrons</Button>
                        <Button fontWeight='normal' variant='link' mx={2} as={NavLink} to='/fr/editor/sales'>Ventes</Button>
                        <Button fontWeight='normal' variant='link' mx={2} as={NavLink} to='/fr/editor/payments'>Paiements</Button>
                        <Button fontWeight='normal' variant='link' mx={2} as={NavLink} to='/fr/editor/ratings'>Avis</Button>
                        <Button fontWeight='normal' variant='link' mx={2} as={NavLink} to='/fr/editor/settings'>Paramètres</Button>
                    </ButtonGroup>
                </Center>
            </Box>

        </Box>
    )
}

export default AccountEditorNav