import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Transition } from 'react-transition-group';

import {
    Box,
    Button,
    Flex,
    HStack,
    Link,
    Text,
} from '@chakra-ui/react'

const duration = 300;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out, transform  ${duration}ms ease-in-out`,
    opacity: 0,
    top:0,
    left:0,
    position:`fixed`,
    transform:`translateY(-40px)`,
    pointerEvents: `none`
}

const transitionStyles = {
    entering: {
        opacity: 1,
        transform:`translateX(0)`
    },
    entered: {
        opacity: 1,
        transform:`translateX(0)`,
        pointerEvents: `auto`
    },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
}

const Menu = ({ visible, onClose }) => {
    return (
        <Transition in={visible} timeout={duration}>
            {state => (
                <Box
                    zIndex='modal'
                    style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                }}>
                    <Box
                        // display={visible ? 'block' : 'none'}
                        w='100vw'
                        h='100vh'
                        bg='orange.100'
                    >
                        <Button
                            position='absolute'
                            top={10}
                            right={10}
                            onClick={ ()=>onClose() }
                        >
                            Close
                        </Button>
                        <Flex
                            align='center'
                            justify='center'
                            h='100vh'
                            wrap='wrap'
                        >
                            <Box>
                            <HStack spacing={ 10}>
                                <Link as={ GatsbyLink } to={`/fr/femme/`} textAlign='center' p={ 10} fontSize='38px'>
                                    <Text as='span' fontSize='18px' textTransform='uppercase'>
                                        patrons
                                    </Text>
                                    <br />
                                    Femmes
                                </Link>
                                <Link as={ GatsbyLink } to={`/fr/femme/`} textAlign='center' p={ 10} fontSize='38px'>
                                    <Text as='span' fontSize='18px' textTransform='uppercase'>
                                        patrons
                                    </Text>
                                    <br />
                                    Hommes
                                </Link>
                                <Link as={ GatsbyLink } to={`/fr/femme/`} textAlign='center' p={ 10} fontSize='38px'>
                                    <Text as='span' fontSize='18px' textTransform='uppercase'>
                                        patrons
                                    </Text>
                                    <br />
                                    Enfant
                                </Link>
                            </HStack>
                            <Box
                                w='100%'
                            >
                            {/* <Text textAlign='center'>
                                <Link to={`/fr/about/`}>À propos</Link>
                            </Text> */}
                            </Box>
                            </Box>
                            


                        </Flex>
                        
                    </Box>
                </Box>
            )}
        </Transition>
    )
}

export default Menu