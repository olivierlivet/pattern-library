import React, { FunctionComponent } from 'react'
import ProductIllustrationWithSwipe from './ProductIllustrationWithSwipe'

type props = {
    data: Object,
}

import { 
    Button,
    Box,
    Center,
    Grid,
    HStack,
    SimpleGrid,
    Text,
    VStack
} from '@chakra-ui/react'

const ProductIllustration:FunctionComponent<props> = ({ data }) => {
    return(
        <Box
            position='relative'
            bg='gray.500'
            w='100%'
            h={{ base:'auto', lg:'600px' }}
        >
            <ProductIllustrationWithSwipe
                alt={ data.title }
                imagesUrl={ data.pictures }
                // imagesUrl={[
                //     'https://img.ltwebstatic.com/images3_pi/2020/10/19/160308384184b44973720f8dfb2b5c9625c3e7faac_thumbnail_600x.webp',
                //     'https://static-mapetitemercerie.o10c.net/88723-large_default/patron-l-enfant-roi-chemise-xavier-de-2-ans-a-12-ans.jpg',
                //     'https://www.ladroguerie.com/wp-content/uploads/2020/02/patron-couture-deauville-chemise-homme-mesures.jpg'
                // ]}
            />

        </Box>
        // <Grid
        //     templateColumns={{
        //         base:'100%',
        //         lg:'100px 1fr'
        //     }}
        //     gap={{ base: 0, lg:5 }}
        // >
        //     <Center
        //         bg='green.50'
        //         order={{ base: 1, lg: 2 }}
        //     >
        //         <img
        //             src={`https://cdn3.rascol.com/77963/465x465/patron-de-robe-mademoiselle-josephine-p-m-patterns.jpg`}
        //             alt={data.title}
        //         />
        //     </Center>
        //     <Box
        //         order={{ base: 2, lg: 1 }}
        //         display={{ base: 'none', lg:'initial'}}
        //     >
        //         <VStack>
        //         <Box bg='gray.200' w='100px' h='100px'></Box>
        //         <Box bg='gray.200' w='100px' h='100px'></Box>
        //         <Box bg='gray.200' w='100px' h='100px'></Box>
        //         <Box bg='gray.200' w='100px' h='100px'></Box>
        //         </VStack>
        //     </Box>
        // </Grid>
    )
}

export default ProductIllustration