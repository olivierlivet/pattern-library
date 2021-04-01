import React, { useState, createRef } from 'react'

import {
    Box,
    Button,
    Flex,
    Text,
    Stack,
    Select,
    HStack
} from '@chakra-ui/react'

import {
    StaticImage
} from 'gatsby-plugin-image'


const SearchBox = ({ handleLoadSearchEngine }) => {
    const categoryField = createRef()

    const [ category, setCategory ] = useState( null )
    const [ variant, setVariant ] = useState( null )
    const handleChange = (e) => {

        setCategory( e.target.value)
        setFocusOnVariantField()


    }
    const setFocusOnVariantField = ( ) => {
        const field = categoryField.current
        field.focus()
        // categoryField.current.focus()
        console.log( field )
        // alert('set focus on link')
    }
    return (
        <Box
            bg='white'
            p={4}
            borderRadius='3xl'
            boxShadow='md'
        >
            <HStack
                as={'form'}
                onSubmit={ () => handleLoadSearchEngine()}
            >
                <Text whiteSpace='pre'>
                    Je veux coudre :
               </Text>
                <Select placeholder='Choose' name="category" onChange={(e) => handleChange(e)}>
                    <option>Une jupe</option>
                    <option>Un haut</option>
                    <option>Un pantalon</option>
                </Select>
                <Box
                    opacity={ !category ? '0' : '1' }
                    w={ !category ? '0' : 'initial' }
                    h={ !category ? '0' : 'initial' }
                >
                <Select w='200px' placeholder='Choose'  ref={ categoryField } onChange={() => handleLoadSearchEngine()}>
                    <option>Jupe à pli</option>
                    <option>Jupe portefeuille</option>
                    <option>Mini-Jupe</option>
                    <option>Jupe longue</option>
                </Select>
                </Box>

                <Button px={8}>Validate</Button>
            </HStack>
        </Box>
    )
}

export default SearchBox