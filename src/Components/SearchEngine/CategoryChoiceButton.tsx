import React, { FunctionComponent, useState } from 'react'
import CategoryChoiceOverlay from './CategoryChoiceOverlay'
import CategoriesButtons from './CategoriesButtons'

import { Box, Button, Center, Divider, SimpleGrid, Stack } from '@chakra-ui/react'
import {
    ArrowDownIcon
} from '@chakra-ui/icons'



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
            <CategoryChoiceOverlay isVisible={detailsOpen} onClick={() => setDetailsOpen(!detailsOpen)} />
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
                    <Center h='100%' p={2}>
                        <Box>
                            Catégorie
                        </Box>
                        <ArrowDownIcon ml={2} />
                    </Center>
                </Box>
                <CategoriesButtons
                    isVisible={detailsOpen}
                    onClick={() => setDetailsOpen(!detailsOpen)}
                    mainFilters={ mainFilters }
                    categories={ categories }
                    variants={ variants }
                    setCategory={ (value)=>setCategory(value) }
                    setVariant={ (value)=>setVariant(value) }
                />
            </Box>

        </>
    )
}

export default CategoryChoiceButton