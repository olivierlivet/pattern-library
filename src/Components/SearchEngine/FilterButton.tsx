import React, { FunctionComponent, useState } from 'react'
import CategoryChoiceOverlay from './CategoryChoiceOverlay'
import CategoriesButtons from './CategoriesButtons'

import { Box, Button, Center, Divider, SimpleGrid, Stack } from '@chakra-ui/react'
import {
    ArrowDownIcon
} from '@chakra-ui/icons'
import SettingsIcon from '../../Images/Icons/Settings'



type props = {
    categories: Object,
    variants: Object,
    mainFilters: Object,
    setCategory: Function
    setVariant: Function
}

const CategoryChoiceButton: FunctionComponent<props> = (
    {
        categories,
        variants,
        mainFilters,
        setCategory,
        setVariant
    }) => {
    const [detailsOpen, setDetailsOpen] = useState(false)
    return (
        <>
            <Box
                position='relative'
                zIndex='dropdown'
            >
                {/* <pre>
                    { JSON.stringify( mainFilters, null, 1 )}
                </pre> */}
                <Box
                    bg='#88a7aa'
                    color='white'
                    letterSpacing='wide'
                    textTransform='uppercase'
                    fontSize='xs'
                    borderRadius='md'

                    cursor='s-resize'

                    _hover={{
                        bg: '#81a3a7'
                    }}


                    onClick={() => setDetailsOpen(!detailsOpen)}

                >
                    <Center h='100%' p={1}>
                        <SettingsIcon w={6} h={6} />
                    </Center>
                </Box>
            </Box>

        </>
    )
}

export default CategoryChoiceButton