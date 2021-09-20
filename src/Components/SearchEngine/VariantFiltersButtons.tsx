import React from 'react'

import {
    Box,
    Flex,
    Text,
    Tag,
    TagLabel,
    TagCloseButton
} from '@chakra-ui/react'

const VariantFiltersButtons = (
    {
        variants,
        selectedVariant,
        setVariant
    }) => {

    const TagButton = ({
        children,
        id
    }) => {
        return(
            <Box
                border={ selectedVariant.includes(id) ? 'solid 1px' : 'dashed 1px' }
                borderColor={ selectedVariant.includes(id) ? '#66878a' : 'gray.200' }
                borderRadius='full'
                
                bg={ selectedVariant.includes(id) ? '#66878a' : 'white' }
                color={ selectedVariant.includes(id) ? 'white' : 'gray.700' }

                _hover={{
                    bg:selectedVariant.includes(id) ? '#66878a' : 'gray.50',
                    borderStyle:'solid',
                    borderColor:selectedVariant.includes(id) ? '#66878a' : 'gray.400'
                }}

                cursor='pointer'

                fontSize='sm'
                px={2}
                py={1}

                mr={1}
                mb={2}

                onClick={(e)=> setVariant( id ) }
                // onClick={(e)=> console.log('click')}
            >
                { children }
            </Box>
        )
    }

    return (
        variants && variants.length ?
        <Box>
            <Text p={2}>Type : </Text>
            <Flex
                key={selectedVariant}
                wrap='wrap'
            >
                {variants.map(variant =>
                    <TagButton
                        key={variant.sys.id}
                        id={variant.sys.id}
                        onClick={()=> console.log('click')}
                    >
                         {variant.fields.title}
                    </TagButton>
                )}
            </Flex>
        </Box>
        : null
    )
}

export default VariantFiltersButtons