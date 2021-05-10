import React, { useState, useEffect } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { authenticationService } from '../../Service/auth'
import { config } from '../../config'

import {
    Box,
    Button,
    Center,
    Flex,
    Heading,
    HStack,
    Link,
    Spinner,
    Text,
    VStack
} from '@chakra-ui/react'

import { Router, Link as NavLink, Match } from "@reach/router";
import AccountWrapper from './Wrapper';
import AccountTitle from './Title';
import DownloadModal from './DownloadModal'
import axios from 'axios'

const AccountOrder = ({ }) => {
    const [isDownloadModalDisplay, setIsDownloadModalDisplay] = useState(false)
    const [data, setData] = useState();

    useEffect(() => { getData() }, []);

    const getData = async () => {
        const result = await axios.get(
            `${config.apiUrl}/sale/user/${authenticationService.getUser().userId}`
        );
        setData(result.data);
    }

    return (
        <>
            <AccountWrapper>
                <AccountTitle>
                    Vos commandes
                </AccountTitle>
                {/* <Text>Liste des commandes de patron, accès au téléchargement de patron dématérialisé</Text> */}
                <Box>
                    {data ?
                        data.length ?
                            <VStack spacing={8}>
                                {data.map(item =>
                                    <Box bg='white' w='full' boxShadow='md' py={3} px={5} borderRadius='lg'>
                                        <Flex justify='space-between' align='center'>
                                            <Heading fontSize='md' fontFamily='Noe display' fontWeight='normal' color='#66878a' textTransform='none' letterSpacing='wider' p='0' m='0'>
                                                {item.product.title}
                                               
                                            </Heading>
                                            <HStack
                                                spacing={2}
                                                color='gray.400'
                                                fontWeight='bold'
                                                fontSize='sm'
                                            >
                                                <Text>
                                                Achat #{item._id.slice( item._id.length-7, item._id.length )}
                                                </Text>
                                                <Text>—</Text>
                                                <Text>Téléchargement{item.download > 1 ? 's' : null} : {item.download}/3</Text>
                                                { item.download < 3 ? 
                                                    <Button isDisabled={ item.download === 3} onClick={() => setIsDownloadModalDisplay(item)} size='sm'>Télécharger maintenant</Button>
                                                : null }
                                            </HStack>
                                        </Flex>
                                    </Box>)}
                            </VStack>
                            : <Text>Vous n'avez pas encore acheté de patrons ici !</Text>
                        : <Center><Spinner size='sm' mx='auto' /></Center>}
                </Box>
            </AccountWrapper>
            { isDownloadModalDisplay ? 
            <DownloadModal
                isVisible={isDownloadModalDisplay}
                data={ isDownloadModalDisplay ? isDownloadModalDisplay : null }
                onClose={() =>{
                    setIsDownloadModalDisplay(false);
                    setTimeout( () => getData(), 1500);
                    

                }}
            />
            : null }
        </>
    )
}

export default AccountOrder