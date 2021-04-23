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

    return (
        variants && variants.length ?
        <Box>
            <Text p={2}>Type de jupe : </Text>
            <Flex
                key={selectedVariant}
                wrap='wrap'
            >
                {variants.map(variant =>
                    <Tag
                        size={'md'}
                        mr={1}
                        mb={2}
                        borderRadius="full"
                        variant="solid"
                        colorScheme={selectedVariant.includes(variant.sys.id) ? 'blue' : 'gray'}
                        cursor='pointer'
                        _hover={{
                            bg:'pink.500'
                        }}

                        onClick={(e)=> setVariant( variant.sys.id ) }
                    >
                        <TagLabel>
                            {variant.fields.title}
                        </TagLabel>
                        {selectedVariant.includes(variant.sys.id) ?
                            <TagCloseButton />
                        : null }
                    </Tag>

                )}
            </Flex>
        </Box>
        : null
    )
}

export default VariantFiltersButtons