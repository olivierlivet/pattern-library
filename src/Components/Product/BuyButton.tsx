import {
    Box,
    Button
} from '@chakra-ui/react'
import React, { FunctionComponent, useState } from 'react'
import FastLoginForm from '../FastLoginForm'
import { authenticationService } from '../../Service/auth'
import axios from 'axios'
import { config } from '../../config'
import PurchaseConfirm from './PurchaseConfirm'

type props = {
    product: String
}

const BuyButton: FunctionComponent<props> = ({ product }) => {

    const [showLoginForm, setShowLoginForm] = useState(false)
    const [showPurchseConfirm, setShowPurchseConfirm ] = useState(false)

    const handleClick = (e) => {
        e.stopPropagation();
        let userId = authenticationService.getUser().userId
        if (!userId) {
            setShowLoginForm( true )
        } else {
            addToCart(userId)
        }

    }

    const addToCart = ( userId ) => {
        axios.put(
            `${config.apiUrl}/cart`,
            { 
                user: userId,
                product: product
            }
        ).then((response)=> setShowPurchseConfirm(true))
    }

    return (
        <>
            <Box
                onClick={(e) => handleClick(e)}
                cursor='pointer'
                bg='#88a7aa'
                color='white'
                border='solid 1px'
                borderColor='#88a7aa'
                borderRadius='sm'
                textTransform='uppercase'
                letterSpacing='widest'
                px={4}
                py={'8px'}
                fontSize={{ base: 'x-small', md: 'small', lg: 'normal' }}
                _hover={{
                    bg: '#75b5bb'
                }}
            >
                Acheter ce patron
            </Box>
            { showLoginForm ?
                <FastLoginForm
                    title='Pour acheter un patron, créer un compte ou identifiez-vous'
                    onClose={() => setShowLoginForm(false)}
                    onLogin={(user) =>{
                        addToCart(user.userId);
                        setShowLoginForm( false );
                    }}
                    onCancel={() => setShowLoginForm(false)}
                />
            : null}
            { showPurchseConfirm ?
                <PurchaseConfirm
                    onClose={() => setShowPurchseConfirm(false)}
                />
            : null }
        </>
    )
}

export default BuyButton