import React from 'react'

import {
    Box,
    Flex,
    Text
} from '@chakra-ui/react'

import {
    StaticImage
} from 'gatsby-plugin-image'

import Search from './Search'

const HeroSearch = ({ handleLoadSearchEngine }) => {
    return (
        <Box
            h='90vh'
            w='100vw'
        >
            <Flex
                position='relative'
                zIndex='docked'
                align='center'
                justify='center'
                h='100%'
            >
                <Box>
                    <Search handleLoadSearchEngine={()=> handleLoadSearchEngine() } />
                </Box>
            </Flex>

            <Box
                zIndex='base'
                h='90vh'
                w='100vw'
                position='absolute'
                top='0'
                left='0'>
                <StaticImage
                    w='100vw'
                    h='100%'
                    src='https://images.unsplash.com/photo-1601584115508-dac19b7e9a1c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                    alt="Qu'allez-vous coudre aujourd'hui"

                />
            </Box>

        </Box>
    )
}

export default HeroSearch