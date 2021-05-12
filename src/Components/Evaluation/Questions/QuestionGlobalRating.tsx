import React, { Component, useState } from 'react'

import { Box, Button, Center, Flex, Stack, Text, Textarea } from '@chakra-ui/react'

import { Field } from 'formik'
import { Input } from '@chakra-ui/input'
import { FormControl, FormHelperText, FormLabel } from '@chakra-ui/form-control'
import ReactSlider from 'react-slider'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import Reward from 'react-rewards';
import { navigate } from 'gatsby-link'

// const QuestionGlobalRating = ({ id, index, setStep, setFieldValue, handleSubmit }) => {
export default class QuestionGlobalRating extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showValidate: false,
        }
    }

    render() {
        // const [showValidate, setShowValidate] = useState(false)
        const { setFieldValue, setStep, isSubmitting } = this.props
        const { showValidate, isSubmiting } = this.state
        return (
            <Stack>
                <>
                    <Flex
                        justifyContent='space-between'
                    >
                        <Text fontSize='small' textAlign='left' w='30%'>
                            Bof.
                </Text>
                        <Text fontSize='small' textAlign='right' w='30%'>
                            Génial !
                </Text>

                    </Flex>
                    <Center
                        py={8}
                    >
                        <Box w='100%'>
                            <ReactSlider
                                defaultValue={50}
                                renderThumb={(props, state) =>
                                    <Center
                                        defaultValue={50}
                                        bg='white'
                                        borderRadius='full'
                                        fontSize='3xl'
                                        w='50px'
                                        h='50px'
                                        transform='translateY(-20px)'
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
                                        h='10px'
                                        bgGradient="linear(to-r, green.200, green.300)"
                                        borderRadius='3px'
                                        {...props}
                                    />
                                }
                                onAfterChange={(props, state) => {
                                    setFieldValue('GlobalEvaluation', props);
                                    this.setState({ 'showValidate': true })

                                }}
                            />
                        </Box>
                    </Center>
                </>
                { showValidate ?
                    <Center pt={4} display={showValidate ? 'flex' : 'none'} >
                        <Reward
                            type='emoji'
                            ref={(ref) => { this.reward = ref }}

                        >
                            <Button
                                variant='ouline'
                                isLoading={isSubmitting}
                                type='submit'
                                // onClick={() => {
                                //     this.props.handleSubmit()
                                //     // this.setState({ 'isSubmiting': true })
                                //     this.reward.rewardMe()
                                // }}
                            >Valider <ArrowForwardIcon /></Button>
                        </Reward>
                    </Center>
                    : null}
            </Stack>
        )
    }
}

// export default QuestionGlobalRating