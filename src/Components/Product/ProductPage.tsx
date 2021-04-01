import React, { FunctionComponent } from 'react'
import Wrapper from '../Layouts/Wrapper'


import ProductDetails from './ProductDetails'
import ProductInspirations from './ProductInspirations'
import ProductRatingAdnAdvices from './ProductRatingAndAdvices'
import ProductIllustration from './ProductIllustration'
import ProductMainInfo from './ProductMainInfo'
import {
    Box,
    Center,
    Heading,
    SimpleGrid,
    Stack
} from '@chakra-ui/react'

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import RichContent from '../RichContent'


type props = {
    data: Object
}

const ProductPage: FunctionComponent<props> = ({ data }) => {
    return (
        <Wrapper>
            <Stack spacing={10}>

                <SimpleGrid
                    columns={{ base: 1, xl: 2 }}
                    gap={{ base:0, lg:10 }}
                    my={10}
                >
                    <Box>
                        <ProductIllustration data={data} />
                    </Box>
                    <Center>
                        <ProductMainInfo data={data} />
                    </Center>
                </SimpleGrid>

                <Box>
                    <RichContent data={data.description} />

                </Box>

                <Tabs>
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