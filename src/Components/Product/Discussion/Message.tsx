import React from 'react'
import {
    Box, Grid, Image, Text
} from '@chakra-ui/react'

const DiscussionMessage = ({ data, isFirstMessage  }) => {
    return (
        <Box
            bg={ isFirstMessage ? 'gray.50' : 'transparent' }
            borderBottom={ isFirstMessage ? 'solid 1px' : 'none' }
            borderBottomColor={ isFirstMessage ? 'gray.100' : 'transparent' }
            mb={ isFirstMessage ? 2 : 'null' }
            p={4}
        >
            <Grid
                templateColumns={{
                    base: `100%`,
                    lg: `40px 1fr`,
                }}
                gap={{
                    base: 3,
                    lg: 4,
                }}
            >
                <Box
                    display={{
                        base:'none',
                        lg:'block'
                    }}
                >
                    {data.user && data.user.profilePictureUrl ?
                        <Image
                            w='40px'
                            h='40px'
                            objectFit='cover'
                            borderRadius='full'
                            src={data.user.profilePictureUrl}
                            alt={data.firstName}
                        />
                    :
                        <Box w='40px'
                            h='40px'
                            bg='gray.500'
                            borderRadius='full'
                        />
                }
                    {/* ↳ */}
                </Box>
                <Box>
                    <Text fontSize='xs' color='gray.700'>{data.user.firstName} :</Text>
                    <Text fontSize='sm'>
                        {data.content}
                    </Text>
                </Box>
            </Grid>

        </Box>
    )
}

export default DiscussionMessage