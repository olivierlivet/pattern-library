import { Box } from '@chakra-ui/layout'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { config } from '../../config';



import { Button, Center, Heading, Flex, Stack, Text, Textarea } from '@chakra-ui/react'

import { Field } from 'formik'
import { Input } from '@chakra-ui/input'
import { FormControl, FormHelperText, FormLabel } from '@chakra-ui/form-control'
import ReactSlider from 'react-slider'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import Reward from 'react-rewards';
import { navigate } from 'gatsby-link'


const ProductStats = ({ }) => {

    const [data, setData] = useState();
    useEffect(async () => {
        const result = await axios.get(
            `${config.apiUrl}/evaluation/product/609a85066506111c3f601221`
        );
        setData(result.data);
    }, []);

    return (

        <Stack spacing={10} >
            {data ?
                <>
                    <Box>
                        <Flex mb={3} justify='space-between'>
                        <Heading
                            as='h4'
                            fontFamily='DM Sans'
                            textTransform='uppercase'
                            // fontWeight='normal'
                            fontSize='sm'
                            letterSpacing='wide'
                        >Clareté des indications : {data.stats[0].NoticeComprehensibility}%</Heading>
                        <Button h='auto' fontWeight='normal' p={0} variant='link'>Détails</Button>
                        </Flex>

                        <ReactSlider
                            defaultValue={data.stats[0].NoticeComprehensibility}
                            disabled={true}
                            renderThumb={(props, state) =>
                                <Center
                                    bg='white'
                                    borderRadius='full'
                                    fontSize='md'
                                    w='35px'
                                    h='35px'
                                    transform='translateY(-12px)'
                                    boxShadow='xl'
                                    border='solid 1px'
                                    borderColor='gray.200'
                                    cursor='pointer'
                                    _active={{
                                        border: 'none',
                                        outline: 'none',
                                        bg: 'gray.100'
                                    }}
                                    _hover={{
                                        border: 'none',
                                        outline: 'none',
                                        bg: 'gray.100'
                                    }}
                                    _focus={{
                                        border: 'none',
                                        outline: 'none',
                                        bg: 'gray.100'
                                    }}
                                    {...props}
                                >
                                    {/* {state.valueNow < 50 ? '👩‍💻' : '💃'} */}
                                    {
                                        state.valueNow < 50
                                            ? ' 😕'
                                            // : state.valueNow < 50 ? '🙄'
                                            : state.valueNow < 80 ? '🙂'
                                                : state.valueNow < 90 ? '😃'
                                                    : state.valueNow < 90 ? '😃'
                                                        : '😍'


                                    }
                                </Center>}
                            renderTrack={(props, state) =>
                                <Box
                                    h='8px'
                                    bgGradient="linear(to-r, green.200, green.300)"
                                    borderRadius='3px'
                                    {...props}
                                />
                            }
                        />
                    </Box>
                    <Box>


                        <Heading
                            as='h4'
                            fontFamily='DM Sans'
                            textTransform='uppercase'
                            // fontWeight='normal'
                            fontSize='sm'
                            letterSpacing='wide'
                            mb={2}
                        >Satisfaction de la coupe : {data.stats[0].CuttingSatisfaction}%</Heading>
                        <ReactSlider
                            defaultValue={data.stats[0].CuttingSatisfaction}
                            disabled={true}
                            renderThumb={(props, state) =>
                                <Center
                                    bg='white'
                                    borderRadius='full'
                                    fontSize='md'
                                    w='35px'
                                    h='35px'
                                    transform='translateY(-12px)'
                                    boxShadow='xl'
                                    border='solid 1px'
                                    borderColor='gray.200'
                                    cursor='pointer'
                                    _active={{
                                        border: 'none',
                                        outline: 'none',
                                        bg: 'gray.100'
                                    }}
                                    _hover={{
                                        border: 'none',
                                        outline: 'none',
                                        bg: 'gray.100'
                                    }}
                                    _focus={{
                                        border: 'none',
                                        outline: 'none',
                                        bg: 'gray.100'
                                    }}
                                    {...props}
                                >
                                    {/* {state.valueNow < 50 ? '👩‍💻' : '💃'} */}
                                    {
                                        state.valueNow < 50
                                            ? ' 😕'
                                            // : state.valueNow < 50 ? '🙄'
                                            : state.valueNow < 80 ? '🙂'
                                                : state.valueNow < 90 ? '😃'
                                                    : state.valueNow < 90 ? '😃'
                                                        : '😍'


                                    }
                                </Center>}
                            renderTrack={(props, state) =>
                                <Box
                                    h='8px'
                                    bgGradient="linear(to-r, green.200, green.300)"
                                    borderRadius='3px'
                                    {...props}
                                />
                            }
                        />
                    </Box>

                </>

                : null}
        </Stack>
    )
}

export default ProductStats