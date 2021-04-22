import { FormLabel } from '@chakra-ui/form-control'
import { Box, Grid, Input, Text } from '@chakra-ui/react'
import React from 'react'
import Title from './Title'
import NewsletterForm from './Newsletter/Form'
const NewsletterCta = ({ }) => {
    return (

        <Grid
            bg='#606060'
            color='white'
            p={{ base: 6, lg: 24 }}
            templateColumns={{
                base: '100%',
                lg: '500px 1fr'
            }}
            gap={{ base:2, lg:12 }}
        >
            <Box>
                <Title>
                    Inscription à la newsletter
                </Title>
            </Box>
            <Box>
                <NewsletterForm />
            </Box>
        </Grid>
    )
}

export default NewsletterCta