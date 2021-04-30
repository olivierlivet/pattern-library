import { Center } from '@chakra-ui/layout'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import FavoriteIcon from '../../Images/Icons/Favorite'
import { config } from '../../config'
import { authenticationService } from '../../Service/auth'

const GlobalButton = ({ }) => {

    const [ userFavorites, setUserFavorites ] = useState( false )

    useEffect(() =>{
        let interval = setInterval(() => getUserFavorite(), (1000 * 15))
        //destroy interval on unmount
        return () => clearInterval(interval)
    })

    const getUserFavorite = ()=>{
        axios.get(
            `${config.apiUrl}/favorite/user/${ authenticationService.getUser().userId }`
        ).then( (response)=> setUserFavorites( response.data ) )
        console.log('get User Favorite')
    }
    return (
        <Center
            position='relative'
            w={8}
            h={8}
        >
            <FavoriteIcon w={{ base: 5, lg: 6 }} h={{ base: 5, lg: 6 }} />
            { userFavorites && userFavorites.length ?
            <Center
                backgroundColor='red.500'
                color='white'
                borderRadius='full'
                p={1.5}
                w='10px'
                h='10px'
                position='absolute'
                fontSize='x-small'
                top='0'
                right='0'
            >
                { userFavorites.length }
            </Center>
            : null }
        </Center>
    )
}

export default GlobalButton