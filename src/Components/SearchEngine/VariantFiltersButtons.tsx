import React, { useState } from 'react'

import {
    Box,
    ButtonGroup,
    Button,
    Flex,
    Stack,
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


    const handleChange = (value) => {
        console.log(value)
        // if( selectedVariant.includes( value )){
        //     // remove item
        // }else{
        //     const currentValues = selectedVariant;
        //     currentValues.push( value )
        //     console.log( currentValues)
        //     setSelectedVariant( currentValues )
        //     // setSelectedVariant( selectedVariant.push( value ) )
        // }
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