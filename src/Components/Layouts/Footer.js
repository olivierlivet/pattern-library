import React, { useState } from 'react'
import { PhoneIcon, AddIcon, WarningIcon, SmallAddIcon } from '@chakra-ui/icons'
import Menu from './Menu'
import { Link as GatsbyLink } from 'gatsby'
import {
    Button,
    Heading,
    Flex,
    Link,
    Text,
    Box,
    HStack,
    SimpleGrid,
    List,
    ListItem
} from '@chakra-ui/react'

const Footer = () => {
    const [menuVisible, setMenuVisible] = useState(false)
    return (
        <Box
            as='footer'
            bg='#235C62'
        >
            <SimpleGrid
                columns={{ base: 1, lg: 3 }}
                gap={{ base: 6, lg: 10 }}
                color='white'
                p={6}
            >
                <Box>
                    <Text
                        fontFamily='Noe Display'
                        fontSize='xx-large'
                    >The Patterns Corner</Text>
                </Box>
                <Box>
                    <Heading as='p' mb={2} fontSize='normal' fontWeight='normal' color='#EFCBBF' fontFamily='Noe Display'>Éditeurs de patrons</Heading>
                    <List>
                        <ListItem>—{' '}
                            <Link as={GatsbyLink} to='/fr/a-propos#why'>Pourquoi Patterns Corner</Link>
                        </ListItem>
                        <ListItem>—{' '}
                            <Link as={GatsbyLink} to='/fr/a-propos#legal'>Mentions légales</Link>
                        </ListItem>
                    </List>
                </Box>
                <Box>
                    <Heading as='p' mb={2} fontSize='normal' fontWeight='normal' color='#EFCBBF' fontFamily='Noe Display'>Éditeurs de patrons</Heading>
                    <List>
                        <ListItem>—{' '}
                            <Link as={GatsbyLink} to='/fr/a-propos#sell'>Vendre sur TPC</Link>
                        </ListItem>
                        <ListItem>—{' '}
                            <Link as={GatsbyLink} to='/fr/editor/login'>Accès plateforme éditeurs</Link>
                        </ListItem>
                    </List>
                </Box>

            </SimpleGrid>
        </Box>
    )
}

export default Footer