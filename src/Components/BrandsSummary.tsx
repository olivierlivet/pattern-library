import { Box, Heading, HStack, Image, Link, Stack, Text } from '@chakra-ui/react'
import { Link as GatsbyLink } from 'gatsby'
import React from 'react'
import Wrapper from './Layouts/Wrapper'

const BrandsSummary = ({ }) => {
    const Logo = ({ src }) => (
        <Image
            src={src}
            h='50px'
            filter='grayscale(80%); contract(200%)'

            bg='gray.500'
            borderRadius={1}
            p='2'

        />
    )
    return (
        <Wrapper>
            <Stack
                mx={{ base: 4, lg: 10 }}
                my={{ base: 4, lg: 10 }}
                py={{ base: 4, lg: 10 }}

                borderTop='solid 1px'
                borderTopColor='gray.100'

                borderBottom='solid 1px'
                borderBottomColor='gray.100'

                spacing={{ base: 4, lg: 8 }}

            >
                <Heading
                    as='h2'
                    fontWeight='normal'
                    fontSize={{ base: 'xl', lg: '2xl' }}
                >
                    The Patterns Corner vous propose les patrons de Mini-Jupes des meilleurs créateurs :
                </Heading>
                <Box
                    maxW='100%'
                    overflow='scroll'
                >
                    <HStack spacing='2'>
                        <Logo src='https://mk0iampatternsu9ye9h.kinstacdn.com/wp-content/uploads/2019/02/Logo_I_AM_Patterns.png' />
                        <Logo src='https://apolline-patterns.com/wp-content/uploads/2020/02/Apolline_blanc.png' />
                        <Logo src='https://orageuse.com/wp-content/uploads/2016/07/logo-white-387x152.png' />
                        <Logo src='https://annarosepatterns.com/wp-content/uploads/2017/09/logo.png' />
                        <Logo src='https://www.annekerdilescouture.com/wp-content/uploads/logo-annekerdilescouture-light.png' />
                        <Logo src='https://www.atelier-scammit.fr/img/atelier-scammit-dev-logo-1507147772.jpg' />
                        <Logo src='http://damngoodcaramel.com/wp-content/uploads/2020/01/Cam%C3%A9-seul-mini-fond-blanc.png' />
                        <Logo src='https://shop.deer-and-doe.fr/themes/deer_and_doe_presta/img/logo-white.png' />
                    </HStack>
                </Box>


                <Text>
                    →{' '}<Link as={GatsbyLink} to='/fr/editeurs'>Découvrir toutes les éditeurs de patron</Link>
                </Text>
            </Stack>

        </Wrapper>
    )
}

export default BrandsSummary