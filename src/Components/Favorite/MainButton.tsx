import { Box, Button, Center, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import FavoriteIcon from '../../Images/Icons/Favorite'
import { config } from '../../config'
import { authenticationService } from '../../Service/auth'
import { Transition } from 'react-transition-group';
import FavoriteSummary from './Summary'

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

const FavoriteMainButton = ({ }) => {

    const [userFavorites, setUserFavorites] = useState(false)
    const [isOpen, setIsOpen] = useState()

    useEffect(() => {
        if( !userFavorites ){
            getUserFavorite();
        }
        let interval = setInterval(() => getUserFavorite(), (1000 * 5))
        //destroy interval on unmount
        return () => clearInterval(interval)
    })

    const getUserFavorite = () => {
        let userId = authenticationService.getUser().userId;
        if (userId) {
            axios.get(
                `${config.apiUrl}/favorite/user/${authenticationService.getUser().userId}`
            ).then((response) => setUserFavorites(response.data))
        }
    }
    const format = (userFavorites) => {
        console.log('userFavorites', userFavorites)
        let formatedFavorites = []
        for (let index = 0; index < userFavorites.length; index++) {
            formatedFavorites.push(userFavorites[index].product)
        }
        return (formatedFavorites)
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
                            { userFavorites ?
                                <FavoriteSummary
                                    isOpen={isOpen}
                                    key={isOpen}
                                    products={format(userFavorites)}
                                    hideButton={false}
                                />
                                : <Text>Vous n'avez pas encore constitué de liste de favoris ! 🧵</Text>
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
                    {userFavorites && userFavorites.length ?
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
                            {userFavorites.length}
                        </Center> : null}
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
            </Box>
        </>
    )
}

export default FavoriteMainButton