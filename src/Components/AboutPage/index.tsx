import { Box, Grid, Link, Stack } from '@chakra-ui/layout'
import React from 'react'

const AboutPageModule = ({ }) => {
    return (
        <Box my={20}>
            <Grid
                templateColumns={{
                    base: ``,
                    lg: `400px 1fr`
                }}
                gap={6}
            >
                <Box>
                    <Box position='sticky' top={10}>
                        <Box>
                            <Link href='#why'>Pourquoi ThePatternsCorner</Link>
                        </Box>
                        <Box>
                            <Link href='#sell'>Vendre sur ThePatternsCorner</Link>
                        </Box>
                        <Box>
                            <Link href='#legal'>Mentions légales</Link>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Stack spacing={8}>
                        <Box id="legal" h='600px' id='why'>Pourquoi ThePatternsCorner</Box>
                        <Box id="legal" h='600px' id='sell'>Vendre sur ThePatternsCorner</Box>
                        <Box id="legal" h='600px' id='legal'>Mentions légales</Box>
                    </Stack>
                </Box>
            </Grid>
        </Box>
    )
}

export default AboutPageModule