import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Button, Text } from '@chakra-ui/react'
import FavoriteIcon from '../../Images/Icons/Favorite'
import CartIcon from '../../Images/Icons/ShoppingBag'
import UserIcon from '../../Images/Icons/User'
import CartMainButton from '../Cart/MainButton'
import FavoriteMainButton from '../Favorite/MainButton'
const UserNav = () => {
    return (
        <>
            
            <Button
                as={GatsbyLink}
                to='/fr/compte'
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

            <FavoriteMainButton />
            <CartMainButton />
        </>
    )
}

export default UserNav