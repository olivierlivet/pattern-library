import React, { useState } from 'react'
import {
  Button,
  Text
} from '@chakra-ui/react'
import { loadStripe } from '@stripe/stripe-js';
import { config } from '../../config';
import axios from 'axios';
const stripePromise = loadStripe(config.stripePublicKey);

const GoToPaymentButton = ({ cart }) => {
  const [isProcessing, setIsProcessing] = useState(false)
  const handleClick = async (event) => {
    // Set is processing
    setIsProcessing(true)

    const stripe = await stripePromise;

    const response = await axios.post(
      `${config.apiUrl}/cart/init-payment/${cart._id}`,
      { user: cart.user }
    )
    const session = await response.data;
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
      console.log(result.error)
    }
  };
  if( !cart ) { return null }
  return (
    <>
      <Button
        onClick={handleClick}
        isLoading={isProcessing}
        w='100%'

        bg='brand.green.600'
        color='white'
        fontFamily='Noe display'
        fontWeight='normal'
        _hover={{
          bg: 'brand.green.500'
        }}
      >
        {cart.products.length === 1 ?
          `Acheter ce patron`
          :
          `Acheter ces ${cart.products.length} patrons`
        }
      </Button>
      <Text fontSize='sm' textAlign='center' mt={2} color='gray.500'>Et commencer à coudre... 🧵</Text>
    </>
  )
}

export default GoToPaymentButton