import React from 'react'
import {
    Box, Grid, Image, Text
} from '@chakra-ui/react'

const DiscussionMessage = ({ data }) => {
    return(
        <Box>
            <Grid
                templateColumns={{
                    base:``,
                    lg:`40px 1fr`,
                }}
                gap={{
                    base:3,
                    lg:4,
                }}
            >
                <Box>
                    <Image
                        w='40px'
                        h='40px'
                        objectFit='cover'
                        borderRadius='full'
                        src={ data.user.profilePictureUrl }
                        alt={ data.firstName }
                    />
                {/* ↳ */}
                </Box>
                <Box>
                    <Text fontSize='xs' color='gray.700'>{ data.user.firstName } :</Text>
                    <Text fontSize='sm'>
                        { data.content }
                    </Text>
                </Box>    
            </Grid>

        </Box>
    )
}

export default DiscussionMessage