import {
    Box,
    HStack,
    Image,
    Stack,
    Text
} from '@chakra-ui/react'
import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';

const EntrySummary = () => {

    const listOfData = [1, 2, 3, 4, 5, 6, 7]

    const Card = ({ index }) => (
        <Box
            w='240px' h='400px' bg='gray.300'
            // ml={ index === 0 ? 4 : 0 }
        >
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
                <Text>#{index ? index : null} Les 10 plus belles jupes pour l'été →</Text>
            </Stack>
        </Box>
    )

    return (
        <Box maxW='100vw' position='relative' mx={4}>
            <Box>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1.4}
                    freeMode={true}

                    breakpoints= {{
                        320: {
                            slidesPerView: 1.4,
                            spaceBetween: 20,
                          },
                        640: {
                          slidesPerView: 4,
                          spaceBetween: 10,
                        },
                        768: {
                          slidesPerView: 4,
                          spaceBetween: 10,
                        },
                        1024: {
                          slidesPerView: 5,
                          spaceBetween: 10,
                        },
                    }}

                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >

                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, i) =>
                        <SwiperSlide><Card index={i} /></SwiperSlide>)}

                </Swiper>
            </Box>



        </Box>
    )
}

export default EntrySummary