import {
    Box,
    Button,
    Center,
    Text
} from '@chakra-ui/react'

import React, { useState, useEffect } from 'react'
import CartSummary from './SmallSummary'
import CartIcon from '../../Images/Icons/ShoppingBag'
import { authenticationService } from '../../Service/auth'
import { config } from '../../config'
import axios from 'axios'
import { Transition } from 'react-transition-group';

const duration = 300;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out, transform  ${duration}ms ease-in-out`,
    opacity: 0,
    transform: `translateY(-20px)`,
    pointerEvents: 'none'
}

const transitionStyles = {
    entering: {
        opacity: 1,
        transform: `translateY(0)`
    },
    entered: {
        opacity: 1,
        transform: `translateY(0)`,
        pointerEvents: `auto`
    },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
}


const MainButton = ({ }) => {

    useEffect(() => {
        let interval = setInterval(() => getData(), (1000 * 5))
        //destroy interval on unmount
        return () => clearInterval(interval)
    })

    const [isOpen, setIsOpen] = useState()
    const [data, setData] = useState();

    const getData = async () => {
        if (authenticationService.getUser()) {
            const result = await axios.get(
                `${config.apiUrl}/cart/${authenticationService.getUser().userId}/created`
            );

            setData(result.data);
        }



    }


    return (
        <>
            { isOpen ?
                <Box
                    onClick={() => setIsOpen(!isOpen)}

                    zIndex='base'
                    position='fixed'
                    top='0'
                    bottom='0'
                    left='0'
                    right='0'

                    bg='whiteAlpha.400'
                />
                : null}
            <Box
                position='relative'
                zIndex='docked'
            >
                {/* { data ?
                <CartSummary
                    isOpen={isOpen}
                    key={isOpen}
                    products={data.products}
                /> 
            : null } */}

                <Transition in={isOpen} timeout={duration}>
                    {state => (

                        <Box
                            // border='solid 2px'
                            // borderColor='#88A7AA'
                            bg='white'


                            position='absolute'
                            top='50px'
                            right='0px'
                            borderRadius='xl'
                            boxShadow='xl'
                            // pt={20}
                            overflow='hidden'
                            zIndex='banner'
                            w='xs'
                            p={6}
                            style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}
                        >
                            { data ?
                                <CartSummary
                                    isOpen={isOpen}
                                    key={isOpen}
                                    products={data.products}
                                />
                                : <Text>Votre panier est vide pour le moment, remplissez-le vite ! 🧵</Text>
                            }

                        </Box>
                    )}
                </Transition>

                <Button
                    onClick={() => setIsOpen(!isOpen)}

                    p={{ base: 1, lg: 2 }}
                    h='auto'
                    w='auto'
                    minW='auto'
                    bg='transparent'
                    _hover={{
                        bg: '#E7B8A9',
                        color: 'white'
                    }}
                >
                    {data && data.products ?
                        <Center
                            backgroundColor='red.500'
                            color='white'
                            borderRadius='full'
                            p={1.5}
                            w='10px'
                            h='10px'
                            position='absolute'
                            fontSize='x-small'
                            top={0.5}
                            left={0.5}
                        >
                            {/* { userFavorites.length } */}
                            {data.products.length}
                        </Center> : null}
                    <CartIcon />
                    <Text
                        display={{ base: 'none', lg: 'block' }}
                        ml={2}
                        fontFamily='DM Sans'
                        fontWeight='300'
                    >
                        Panier
                </Text>
                </Button>
            </Box>
        </>
    )
}

export default MainButton