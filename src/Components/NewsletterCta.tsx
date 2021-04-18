import { FormLabel } from '@chakra-ui/form-control'
import { Box, Input, Text } from '@chakra-ui/react'
import React from 'react'
import Title from './Title'

const NewsletterCta = ({}) => {
    return(
        <Box
            bg='#606060'
            color='white'
            p={ 4 }
        >
            <Title>
                Inscription à la newsletter
            </Title>
            <Text>
                Pour recevoir nos bons plans, les infos sur les derniers patrons et des inspirations, il suffit de laisser votre adresse mail.
            </Text>
            <FormLabel>
                <Input
                    type='email'
                    placeholder='Votre email'
                />
            </FormLabel>

        </Box>
    )
}

export default NewsletterCta