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

                fontSize='sm'
                px={2}
                py={1}

                mr={1}
                mb={2}

                onClick={(e)=> setVariant( id ) }
            >
                { children }
            </Box>
        )
    }

    return (
        variants && variants.length ?
        <Box>
            <Text p={2}>Type de jupe : </Text>
            <Flex
                key={selectedVariant}
                wrap='wrap'
            >
                {variants.map(variant =>
                    <TagButton
                        key={variant.sys.id}
                        id={variant.sys.id}

                    >
                         {variant.fields.title}
                    </TagButton>
                    // <Tag
                    //     size={'md'}
                    //     mr={1}
                    //     mb={2}
                    //     borderRadius="full"
                    //     variant="solid"
                    //     colorScheme={selectedVariant.includes(variant.sys.id) ? 'blue' : 'gray'}
                    //     cursor='pointer'
                    //     _hover={{
                    //         bg:'pink.500'
                    //     }}

                    //     onClick={(e)=> setVariant( variant.sys.id ) }
                    // >
                    //     <TagLabel>
                    //         {variant.fields.title}
                    //     </TagLabel>
                    //     {selectedVariant.includes(variant.sys.id) ?
                    //         <TagCloseButton />
                    //     : null }
                    // </Tag>

                )}
            </Flex>
        </Box>
        : null
    )
}

export default VariantFiltersButtons