import React, { FunctionComponent } from 'react'
import { Link as GatsbyLink } from 'gatsby'
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
    List,
    ListItem,
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

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from "@chakra-ui/react"

import RichContent from '../RichContent'
import BuyButton from './BuyButton'
import FavoriteButton from '../Favorite/Button'
import Rating from './Rating'
import ProductStats from './Stats'
import MeasuresTable from './MeasuresTable'

const ProductMainInfo: FunctionComponent<props> = ({ data }) => {
    return (
        <Stack
            spacing={{ base: 4, lg: 8 }}
        >
            <Stack spacing={2} pt={{ base: 0, lg: '24' }}>
                {/* <pre>
                    { JSON.stringify( data, null, 1 )}
                </pre> */}
                {data.editor ?
                    <Link as={GatsbyLink} to={data.editor.slug} letterSpacing='wide' color='gray.400'>
                        {data.editor ? data.editor.title : ''}
                    </Link>
                    : null}
                <Heading as='h1' fontWeight='normal' fontSize={{ base:'5xl', lg:'5xl'}}>
                    {data.title}
                </Heading>
                <Rating value={4} backendDocumentId={data.backendDocumentId} />
            </Stack>
            {/* <RichContent data={data.intro} /> */}

            <HStack spacing={.5}>
                <BuyButton
                    product={ data.backendDocumentId ? data.backendDocumentId : data.fields.backendDocumentId }
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
                    </Flex>
                </Flex>

                <Flex wrap='wrap'>
                    <Text w='100%' color='gray.600' textTransform='uppercase' fontSize='12px' letterSpacing='wider'>Format</Text>
                    <Flex>
                        PDF
                        <Popover>
                            <PopoverTrigger>
                                <Center cursor='pointer' ml={1} bg='gray.200' p={0.25} w='5' h='5' borderRadius='full' fontSize='xs'>?</Center>
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
            <Box
                px={{ base: 0, lg: 0 }}
                fontSize='15px'
            >
                <RichContent data={data.description} />
            </Box>

            <ProductStats backendDocumentId={data.backendDocumentId} />

            <Accordion
                allowMultiple={true}
            >
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Heading
                                textAlign='left'
                                flex='1'
                                as='h4'
                                color='gray.400'
                                fontFamily='DM Sans'
                                textTransform='uppercase'
                                // fontWeight='normal'
                                fontSize={{ base: 'xs', lg: 'sm' }}
                                letterSpacing='wide'
                            >Fournitures</Heading>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <RichContent data={data.furnitures} />
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Heading
                                textAlign='left'
                                flex='1'
                                as='h4'
                                color='gray.400'
                                fontFamily='DM Sans'
                                textTransform='uppercase'
                                // fontWeight='normal'
                                fontSize={{ base: 'xs', lg: 'sm' }}
                                letterSpacing='wide'
                            >Matières et tissu conseillés</Heading>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <RichContent data={data.fabrics} />
                    </AccordionPanel>
                </AccordionItem>
                {data.measures ?
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Heading
                                    textAlign='left'
                                    flex='1'
                                    as='h4'
                                    color='gray.400'
                                    fontFamily='DM Sans'
                                    textTransform='uppercase'
                                    // fontWeight='normal'
                                    fontSize={{ base: 'xs', lg: 'sm' }}
                                    letterSpacing='wide'
                                >Mesures détaillées</Heading>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <MeasuresTable data={data.measures.data} />
                        </AccordionPanel>
                    </AccordionItem>
                    : null}

            </Accordion>

        </Stack>
    )
}

export default ProductMainInfo