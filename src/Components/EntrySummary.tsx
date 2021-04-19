import {
    Box,
    HStack,
    Image,
    Stack,
    Text
} from '@chakra-ui/react'
import React from 'react'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 10
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1.3
    }
};

const EntrySummary = () => {

    const Card = ({ index }) => (
        <Box w='240px' h='400px' bg='gray.300'>
            <Image
                src='https://republiqueduchiffon.com/wp-content/uploads/2021/02/Sewing-pattern-BILLY-6-600x600.jpg'
                alt='Image alt'
                w='100%'
                h='240px'
                objectFit='cover'
            />
            <Stack
                bg='white'
                p={4}
                spacing={2}
                h='160px'

            >
                <Text
                    textTransform='uppercase'
                    fontSize={{ base: 'xs', lg: 'md' }}
                >
                    <Text
                        as='span'
                        lineHeight='8px'
                        display='inline-block'
                        borderBottom='solid 3px'
                        borderBottomColor='#EFCBBF'
                        pr={2}
                    >Jupe</Text>
                </Text>
                <Text>#{index} Les 10 plus belles jupes pour l'été →</Text>
            </Stack>
        </Box>
    )
    return (
        <Box maxW='100vw' position='relative' mx={4}>
            <Box px={4}>
            <Carousel
                responsive={responsive}

                swipeable={true}
                draggable={true}
                showDots={true}
                ssr={true} // means to render carousel on server-side.
                infinite={false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={'superLargeDesktop'}
                // dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                { [1,2,3,4,5,6,7,8,9,10].map( (item, i) => <Card index={i} />)}
            </Carousel>
            </Box>


            
        </Box>
    )
}

export default EntrySummary