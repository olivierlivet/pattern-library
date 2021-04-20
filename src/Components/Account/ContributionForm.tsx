import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

import {
    Box,
    Button,
    Center,
    Link,
    Text
} from '@chakra-ui/react'

import { Router, Link as NavLink, Match } from "@reach/router";
import AccountWrapper from './Wrapper';
import Form from '../Contribution/Form'
const ContributionForm = ({ productId }) => {
    return (
        <AccountWrapper>
            ContributionForm {productId}

            <Text>
                Quelle joie, l'offre de patrons s'enrichie au fil des saisons ! Mais il n'est pas toujours facile de trouver le patron qui correspond parfaitement à son envie, sa morphologie, le coupon que l'on a au fond du placard ou son niveau.
            </Text>
            <Text>
                The Patterns Corner vous propose de partager un avis sincère, enrichissant pour les couturières et pour les éditrices, en 3 minutes !
            </Text>
            <Text>
                Merci 
            </Text>

            <Form />
        </AccountWrapper>
    )
}

export default ContributionForm