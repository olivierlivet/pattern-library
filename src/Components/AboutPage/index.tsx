import { Box, Grid, Heading, Link, List, ListItem, Stack, Text } from '@chakra-ui/layout'
import React from 'react'

const AboutPageModule = ({ }) => {
    return (
        <Box my={20} maxW='1200px' mx='auto'>
            <Grid
                templateColumns={{
                    base: ``,
                    lg: `400px 1fr`
                }}
                gap={6}
            >
                <Box >
                    <Box as='nav' position='sticky' spacing='3' top={10}>
                        <Text
                            fontFamily='DM Sans'
                            textTransform='uppercase'
                            letterSpacing='wide'
                            color='gray.400'
                            pl={5}
                            mb={2}
                        >Sommaire</Text>
                        <List spacing='3'>
                            <ListItem>
                                <Box>
                                    → <Link href='#why'>Pourquoi ThePatternsCorner</Link>
                                </Box>
                            </ListItem>

                            <ListItem>
                                <Box>
                                    → <Link href='#who'>Qui a créée ThePatternsCorner</Link>
                                </Box>
                            </ListItem>
                            <ListItem>
                                <Box>
                                    → <Link href='#expose'>Exposer sur ThePatternsCorner</Link>
                                </Box>
                            </ListItem>
                            <ListItem>
                                <Box>
                                    → <Link href='#legal'>Mentions légales</Link>
                                </Box>
                            </ListItem>
                        </List>
                    </Box>
                </Box>
                <Box>
                    <Stack spacing={10}>
                        <Box id='why'>
                            <Heading as='h3' fontSize='3xl' mb='3' fontWeight='normal' color='brand.green.600'>
                                Pourquoi ThePatternsCorner
                            </Heading>
                            <Text>
                            Notre mission : vous accompagnez dans votre prochain projet couture. Du choix du patron, aux tissus associés et à la réalisation : ThePatternsCorner veut vous aider pour que progresser en couture et coudre ses vetements aux quotidiens soit plus simple et moins frustrant.
                            </Text>
                        </Box>
                        <Box id='who'>
                            <Heading as='h3' fontSize='3xl' mb='3' fontWeight='normal' color='brand.green.600'>
                                Qui s'occupe de thePatternsCorner
                            </Heading>
                        </Box>
                        <Box id='expose'>Vendre sur ThePatternsCorner</Box>
                        <Box id='legal'>Mentions légales</Box>
                    </Stack>
                </Box>
            </Grid>
        </Box>
    )
}

export default AboutPageModule