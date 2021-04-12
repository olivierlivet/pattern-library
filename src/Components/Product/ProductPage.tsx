import React, { FunctionComponent } from 'react'
import Wrapper from '../Layouts/Wrapper'


import ProductDetails from './ProductDetails'
import ProductInspirations from './ProductInspirations'
import ProductRatingAdnAdvices from './ProductRatingAndAdvices'
import ProductIllustration from './ProductIllustration'
import ProductMainInfo from './ProductMainInfo'
import CloseButton from './CloseButton'
import {
    Box,
    Button,
    Center,
    Flex,
    Heading,
    SimpleGrid,
    Stack
} from '@chakra-ui/react'

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import RichContent from '../RichContent'


type props = {
    data: Object,
    onClose: Function
}

const ProductPage: FunctionComponent<props> = ({ data, onClose }) => {
    return (
        <Wrapper>
            <CloseButton onClose={()=>onClose()} />
            <Stack spacing={{ base:4, lg:8 }}>

                <SimpleGrid
                    columns={{ base: 1, xl: 2 }}
                    gap={{ base: 0, lg: 10 }}
                    my={{ base: 0, lg: 10 }}
                >
                    <Box>
                        <ProductIllustration data={data} />
                    </Box>
                    <Center
                        p={{ base:5, lg:0 }}
                        wrap='wrap'
                    >
                        <ProductMainInfo data={data} />
                    </Center>
                </SimpleGrid>

                <Box
                    px={{ base:5, lg:0 }}
                    fontSize='15px'
                    id='details'
                >
                    <RichContent data={data.description} />
                </Box>

                <Tabs id="details">
                    <TabList>
                        <Tab>Informations détaillées</Tab>
                        <Tab>Inspirations</Tab>
                        <Tab>Avis & conseils</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <ProductDetails data={data} />
                        </TabPanel>
                        <TabPanel>
                            <ProductInspirations data={data} />
                        </TabPanel>
                        <TabPanel>
                            <ProductRatingAdnAdvices data={data} />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Stack>

        </Wrapper>
    )
}

export default ProductPage