import React, { FunctionComponent, useEffect, useState } from 'react'
import Wrapper from '../Layouts/Wrapper'

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

import UserNav from '../Nav/User'
import InspirationsList from './Inspiration/List'
// import ProductDiscussionList from './Discussion/List'
import Loadable from "react-loadable"

const ProductDiscussionList = Loadable({
    loader: () => import('./Discussion/List'),
    loading: () => <span>Loading...</span>,
});

type props = {
    data: Object,
    onClose: Function,
    displayCloseButton: boolean,
    context: string,
}

const ProductPage: FunctionComponent<props> = (
    {
        data,
        onClose,
        displayCloseButton,
        context
    }) => {

        const [ isLoaded , setIsLoaded ] = useState<boolean>(false)

        useEffect(() => {
            setIsLoaded( true );
          }, []);

    return (
        <>
            {context === 'modal' ?

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


                    <HStack
                        boxShadow='sm'
                        bg='whiteAlpha.900'
                        borderRadius='full'
                        p={2}
                    >
                        <UserNav />
                    </HStack>
                </Flex>
                : null}

            <Wrapper>
                <Box
                    mx='auto'
                    px={{ base: 0, lg: 10 }}
                >
                    <Stack
                        spacing={{ base: 12, lg: 24 }}
                        pb={20}
                    >
                        <SimpleGrid
                            // templateColumns={{
                            //     base: '100%',
                            //     xl: '50% 50%'
                            // }}
                            columns={{ base: 1, lg: 2 }}
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
                                pr={{ base: 5, lg: 10 }}
                                pt={{ base: 5, lg: 10 }}
                                wrap='wrap'
                            >
                                <ProductMainInfo data={data} />
                            </Center>

                        </SimpleGrid>

                        <SimpleGrid
                            columns={{ base: 1, lg: 2 }}
                            gap={{ base: 0, lg: 20 }}
                            my={{ base: 0, lg: 0 }}
                            px={{ base: 5, lg: 0 }}
                        >
                            <Box id='inspirations'>
                                <InspirationsList
                                    productId={data.backendDocumentId}
                                    product={data}
                                />
                            </Box>
                            <Box
                                mt={{ base: 4, lg: '-6' }}
                                id='discussions'
                            >
                                { isLoaded ? 
                                    <ProductDiscussionList
                                        productId={data.backendDocumentId}
                                        product={data}
                                    />
                                : null }
                            </Box>
                        </SimpleGrid>
                    </Stack>
                </Box>
            </Wrapper>
        </>
    )
}

export default ProductPage