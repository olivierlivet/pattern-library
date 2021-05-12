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
    Center,
    Flex,
    HStack,
    SimpleGrid,
    Stack
} from '@chakra-ui/react'

// import RichContent from '../RichContent'
// import SharingButtons from './SharingButtons'
import UserNav from '../Nav/User'

type props = {
    data: Object,
    onClose: Function,
    displayCloseButton: boolean,
    context: String
}

const ProductPage: FunctionComponent<props> = (
    {
        data,
        onClose,
        displayCloseButton,
        context
    }) => {

    return (
        <>
            <Flex
                justify='space-between'
                p={{ base: 5, lg: 10 }}
                position={{
                    base: 'fixed',
                    lg: 'initial'
                }}
                top={0}
                left={0}
                right={0}

                zIndex='banner'

            >

                {displayCloseButton ? <CloseButton onClose={() => onClose()} /> : null}

                {context === 'modal' ?

                    <HStack
                        boxShadow='sm'
                        bg='whiteAlpha.900'
                        borderRadius='full'
                        p={2}
                    >
                        <UserNav />
                    </HStack>
                    : null}
            </Flex>
            <Wrapper>
                <Box
                    mx='auto'
                    px={{ base:0, lg:10 }}
                >
                    <Stack spacing={{ base: 4, lg: 8 }} pb={20}>
                        <SimpleGrid
                            // templateColumns={{
                            //     base: '100%',
                            //     xl: '50% 50%'
                            // }}
                            columns={{ base:1, lg:2 }}
                            gap={{ base: 0, lg: 20 }}
                            my={{ base: 0, lg: 0 }}
                        >
                            <Box>
                                <Box
                                    position={{ base: 'initial', lg: 'sticky' }}
                                    top={20}
                                >
                                    <ProductIllustration data={data} />
                                </Box>
                                {/* <SharingButtons url={data.slug} title={data.title} /> */}
                            </Box>
                            <Center
                                p={{ base: 5, lg: 0 }}
                                pr={{ base:5, lg:10 }}
                                pt={{ base: 5, lg: 10 }}
                                wrap='wrap'
                            >
                                <ProductMainInfo data={data} />
                            </Center>

                        </SimpleGrid>

                        <SimpleGrid
                            // templateColumns={{
                            //     base: '100%',
                            //     xl: '50% 50%'
                            // }}
                            columns={{ base:1, lg:2 }}
                            gap={{ base: 0, lg: 20 }}
                            my={{ base: 0, lg: 0 }}
                        >
                            <Box bg='gray.200' id='inspirations'><Center h='500px'>Inspirations</Center></Box>
                            <Box bg='gray.300' id='discussions'><Center h='500px'>Discussions</Center></Box>
                        </SimpleGrid>
                        {/* <Tabs id="details">
                            <TabList>
                                <Tab>Détails</Tab>
                                <Tab>Inspirations</Tab>
                                <Tab>Questions / Réponses</Tab>
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
                        </Tabs> */}
                    </Stack>
                </Box>
            </Wrapper>
        </>
    )
}

export default ProductPage