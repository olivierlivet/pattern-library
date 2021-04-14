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
            {/* <pre>
                { JSON.stringify( data, null, 1 )}
            </pre> */}
            <CloseButton onClose={()=>onClose()} />
            <Stack spacing={{ base:4, lg:8 }} pb={ 20 }>

                <SimpleGrid
                    columns={{ base: 1, xl: 2 }}
                    gap={{ base: 0, lg: 10 }}
                    my={{ base: 0, lg: 10 }}
                >
                    <Box>
                        <Box
                        position={{ base:'initial', lg:'sticky'}}
                        top={20}
                        >
                        <ProductIllustration data={data} />

                        </Box>
                    </Box>
                    <Center
                        p={{ base:5, lg:0 }}
                        pt={{ base:5, lg:10 }}
                        wrap='wrap'
                    >
                        <ProductMainInfo data={data} />
                    </Center>
                </SimpleGrid>

                {/* <Box
                    px={{ base:5, lg:0 }}
                    fontSize='15px'
                    id='details'
                >
                    <RichContent data={data.description} />
                </Box> */}

                <Tabs id="details">
                    <TabList>
                        <Tab>Détails</Tab>
                        <Tab>Inspirations</Tab>
                        <Tab>Conseils</Tab>
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