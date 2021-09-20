import React, { FC } from 'react'
import {
    Box,
    Button,
    Center,
    Flex,
    Grid,
    Heading,
    Image,

    Stack,

    Text
} from '@chakra-ui/react'
import { config } from '../../../config'
import { navigate } from '@reach/router'

type props = {
    data: {
        user: any,
        blogUrl: string,
        comment: string,
        createdAt: string,
        instagramAccount: string,
        pictures: [string]
        product: string,
        status: string,
        updatedAt: string
    },
    product: any

}

const InspirationCard: FC<props> = ({ data, product }) => {
    return (
        <Grid
            cursor='pointer'
            templateColumns={{
                base: `100%`,
                lg: `120px 1fr`
            }}
            gap={{
                base: 4,
                lg: 6
            }}
        >
            <Box>
                <Image
                    src={`${config.imageCdnBaseUrl}${data.pictures[0]}`}
                />
            </Box>
            <Flex align='center'>
                <Stack spacing='2'>
                    <Heading
                        fontFamily='DM Sans'
                        letterSpacing='wider'
                        color='gray.500'
                        fontSize='14px'
                        fontWeight='normal'
                        textTransform='uppercase'
                    >
                        { product.title } par
                    {' '}
                        <Text
                            as='span'
                            borderBottom='solid 3px'
                            borderBottomColor='brand.green.500'
                        >{data.user ? data.user.firstName : ''}</Text>
                    </Heading>
                    <Text
                        fontSize='sm'
                    >
                        {data.comment}
                    </Text>
                    <Text
                        fontSize='xs'
                        onClick={()=> navigate( `https://www.instagram.com/${data.instagramAccount}` )}
                    >
                        — { data.instagramAccount }
                    </Text>
                </Stack>

            </Flex>

        </Grid>
    )
}

export default InspirationCard