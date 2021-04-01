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
import Paper from '../../Images/Paper.jpg'

const HeroSearch = ({ handleLoadSearchEngine }) => {
    return (
        <Box
            h='90vh'
            w='100vw'
            overflow='hidden'
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

            {/* <Box
                zIndex='base'
                h='90vh'
                w='100vw'
                position='absolute'
                top='0'
                left='0'
                overflow='hidden'

            >
                <StaticImage
                    w='100vw'
                    h='100%'
                    src={ './Paper.jpg' }
                    alt="Qu'allez-vous coudre aujourd'hui"

                />
            </Box> */}

        </Box>
    )
}

export default HeroSearch