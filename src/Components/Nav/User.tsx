import React from 'react'
import { Button, Text } from '@chakra-ui/react'
import FavoriteIcon from '../../Images/Icons/Favorite'
import CartIcon from '../../Images/Icons/ShoppingBag'
import UserIcon from '../../Images/Icons/User'
const UserNav = () => {
    return (
        <>
            <Button
                p={{ base:1, lg:2 }}
                h='auto'
                w='auto'
                minW='auto'
                bg='transparent'
                _hover={{
                    bg:'#E7B8A9',
                    color:'white'
                }}
            >
                <FavoriteIcon />
                <Text
                    display={{ base: 'none', lg: 'block' }}
                    ml={2}
                    fontFamily='DM Sans'
                    fontWeight='300'
                >
                    Favoris
                </Text>
            </Button>
            <Button
                p={{ base:1, lg:2 }}
                h='auto'
                w='auto'
                minW='auto'
                bg='transparent'
                _hover={{
                    bg:'#E7B8A9',
                    color:'white'
                }}
            >
                <UserIcon />
                <Text
                    display={{ base: 'none', lg: 'block' }}
                    ml={2}
                    fontFamily='DM Sans'
                    fontWeight='300'
                >
                    Compte
                </Text>
            </Button>
            <Button
                p={{ base:1, lg:2 }}
                h='auto'
                w='auto'
                minW='auto'
                bg='transparent'
                _hover={{
                    bg:'#E7B8A9',
                    color:'white'
                }}
            >
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
        </>
    )
}

export default UserNav