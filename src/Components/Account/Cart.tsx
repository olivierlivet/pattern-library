import React, { useEffect, useState } from 'react'
import { authenticationService } from '../../Service/auth'
import { Link as GatsbyLink } from 'gatsby'
import {
    Box,
    Button,
    Center,
    Link,
    Stack,
    Text
} from '@chakra-ui/react'

import CartSummary from '../Cart/LargeSummary'
import AccountWrapper from './Wrapper'
import AccountTitle from './Title'
import GoToPaymentButton from '../Cart/GoToPaymentButton'
import axios from 'axios'
import { config } from '../../config'
import CartLargeSummary from '../Cart/LargeSummary'

const AccountCart = ({ }) => {

    const [data, setData] = useState();

    useEffect(async () => {
        if (authenticationService.getUser()) {
            const result = await axios.get(
                `${config.apiUrl}/cart/${authenticationService.getUser().userId}/created`
            );
            setData(result.data);
        }

    }, []);

    return (
        <AccountWrapper
            size='2xl'
            hideNav={true}
        >
            <AccountTitle>
                Votre panier
            </AccountTitle>
            <Stack spacing={{ base: 2, lg: 8 }} shouldWrapChildren={true}>
                <Text>
                    Voici le récapitulatif de vos achats, pour accéder au téléchargement, cliquez ci-dessous sur "payer." Vous accéderez à la page de téléchargement juste après avoir réglé la commande via Stripe, notre plateforme de paiement sécurisé.
                </Text>
                {data ?
                    <CartLargeSummary
                        isOpen={true}
                        // key={isOpen}
                        products={data.products}
                        hideButton={true}
                    />
                    :
                    <>
                        <Text
                            color='gray.600'
                        >
                            Vous n'avez pas encore de produit dans votre panier.
                        </Text>
                        <Button size='sm' as={GatsbyLink} to='/fr'>
                            Retour
                        </Button>
                    </>
                }
            </Stack>
        </AccountWrapper>
    )
}

export default AccountCart