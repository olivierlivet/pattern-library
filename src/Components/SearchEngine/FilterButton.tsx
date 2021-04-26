import React, { FunctionComponent, } from 'react'

import { Box, Center } from '@chakra-ui/react'

import SettingsIcon from '../../Images/Icons/Settings'



type props = {
    onClick: Function
}

const FilterButton: FunctionComponent<props> = (
    {
        onClick
    }) => {
    return (
        <>
            <Box
                bg='#88a7aa'
                color='white'
                letterSpacing='wide'
                textTransform='uppercase'
                fontSize='xs'
                borderRadius={4}

                cursor='s-resize'

                _hover={{
                    bg: '#81a3a7'
                }}

                onClick={() => onClick()}

            >
                <Center h='100%' p={1}>
                    <SettingsIcon w={6} h={6} />
                </Center>
            </Box>

        </>
    )
}

export default FilterButton