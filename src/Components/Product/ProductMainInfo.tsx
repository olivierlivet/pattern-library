import React, { FunctionComponent } from 'react'

type props = {
    data: any
}

import {
    Button,
    Box,
    Heading,
    VStack,
    Link,
    Stack,
    Flex,
    Text,
    HStack,
    SimpleGrid,
    Center,
    Popover,
    PopoverBody,
    PopoverContent,
    PopoverTrigger,
    PopoverCloseButton,
    PopoverArrow,
    PopoverHeader,
} from '@chakra-ui/react'

import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
} from "@chakra-ui/react"

import RichContent from '../RichContent'
import { StarIcon } from '@chakra-ui/icons'
import BuyButton from './BuyButton'
import FavoriteButton from '../Favorite/Button'
import Rating from './Rating'
import { navigate } from 'gatsby-link'



const ProductMainInfo: FunctionComponent<props> = ({ data }) => {
    return (
        <Stack
            spacing={{ base: 4, lg: 6 }}
        >
            <Stack spacing={ 2 }>
                {/* <pre>
                    { JSON.stringify( data, null, 1 )}
                </pre> */}
                <Text letterSpacing='wide' color='gray.400'>
                    {data.editor ? data.editor.title : ''}
                </Text>
                <Heading as='h1' fontWeight='normal'>
                    {data.title}
                </Heading>
                <Rating value={4} backendDocumentId={data.backendDocumentId} />
            </Stack>
            <RichContent data={data.intro} />

            <HStack spacing={.5}>
                <BuyButton
                    product={data.sys ? data.sys.id : data.contentful_id}
                    price={data.price}
                />
                <FavoriteButton
                    product={data.sys ? data.sys.id : data.contentful_id}
                />
            </HStack>
            <SimpleGrid
                columns={3}
                gap={4}
            >
                <Flex wrap='wrap'>
                    <Text w='100%' color='gray.600' textTransform='uppercase' fontSize='12px' letterSpacing='wider'>Niveau</Text>
                    <Flex align='center'>
                        <Text w='100%' mr={2}>Intermédiaire</Text>
                        {/* <Box>✂️✂️✂️</Box> */}

                    </Flex>
                </Flex>

                <Flex wrap='wrap'>
                    <Text w='100%' color='gray.600' textTransform='uppercase' fontSize='12px' letterSpacing='wider'>Taille</Text>
                    <Flex w='100%'>
                        36→44

                        {/* <Popover>
                            <PopoverTrigger>
                                <Center transform='translateY(-4px)' bg='gray.200' p={0.5} w='5' h='5' borderRadius='full' fontSize='xs'>?</Center>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverArrow />
                                <PopoverCloseButton />
                                <PopoverHeader>Les Taille de {data.title}</PopoverHeader>
                                <PopoverBody
                                    w='600px'
                                >
                                    <Table variant="simple">
                                        <Tbody>
                                            <Tr>
                                                <Th>(En cm)</Th>
                                                <Td>34</Td>
                                                <Td>36</Td>
                                                <Td>38</Td>
                                                <Td>40</Td>
                                                <Td>42</Td>
                                                <Td>44</Td>
                                                <Td>46</Td>
                                            </Tr>
                                            <Tr>
                                                <Th>Poitrine</Th>
                                                <Td>80</Td>
                                                <Td>84</Td>
                                                <Td>88</Td>
                                                <Td>92</Td>
                                                <Td>96</Td>
                                                <Td>100</Td>
                                                <Td>104</Td>
                                            </Tr>
                                            <Tr>
                                                <Th>Taille</Th>
                                                <Td>62</Td>
                                                <Td>66</Td>
                                                <Td>70</Td>
                                                <Td>74</Td>
                                                <Td>78</Td>
                                                <Td>82</Td>
                                                <Td>86</Td>
                                            </Tr>
                                            <Tr>
                                                <Th>Hanche</Th>
                                                <Td>86</Td>
                                                <Td>90</Td>
                                                <Td>94</Td>
                                                <Td>98</Td>
                                                <Td>102</Td>
                                                <Td>106</Td>
                                                <Td>110</Td>
                                            </Tr>
                                            <Tr>
                                                <Th>Tour de bras</Th>
                                                <Td>25,6</Td>
                                                <Td>26,8</Td>
                                                <Td>28</Td>
                                                <Td>29,2</Td>
                                                <Td>30,4</Td>
                                                <Td>31,6</Td>
                                                <Td>32,8</Td>
                                            </Tr>
                                        </Tbody>
                                    </Table>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover> */}
                    </Flex>
                </Flex>

                <Flex wrap='wrap'>
                    <Text w='100%' color='gray.600' textTransform='uppercase' fontSize='12px' letterSpacing='wider'>Format</Text>
                    <Flex>
                        PDF
                        <Popover>
                            <PopoverTrigger>
                                <Center ml={1} bg='gray.200' p={0.25} w='5' h='5' borderRadius='full' fontSize='xs'>?</Center>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverArrow />
                                <PopoverCloseButton />
                                <PopoverHeader>Détails des fichiers du patron {data.title}</PopoverHeader>
                                <PopoverBody
                                >
                                    Le patron x est fourni avec 5 fichiers, etc..

                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                    </Flex>
                </Flex>
            </SimpleGrid>
            {/* <HStack>
                <Button as='a' href='#details' size="sm">Détails</Button>
                <Button as='a' href='#details' size="sm">Inspirations</Button>
                <Button as='a' href='#details' size="sm">Avis / Conseils</Button>
            </HStack> */}

            <Box
                px={{ base: 0, lg: 0 }}
                fontSize='15px'
            >
                <RichContent data={data.description} />
            </Box>
        </Stack>
    )
}

export default ProductMainInfo