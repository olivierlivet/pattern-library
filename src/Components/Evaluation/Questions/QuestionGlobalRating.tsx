import { Button, ButtonGroup } from '@chakra-ui/button'
import { StarIcon } from '@chakra-ui/icons'
import { HStack, Stack, Text } from '@chakra-ui/layout'
import { Textarea } from '@chakra-ui/textarea'
import React, { useState } from 'react'

const QuestionGlobalRating = ({ id, index, setStep, setFieldValue, handleSubmit }) => {
    const [showDetails, setShowDetails] = useState(false)
    return (
        <Stack>
            <Button
                onClick={()=>{
                    setFieldValue('GlobalRating', 5);
                    handleSubmit();
                }}
            >
                <Text textAlign='left' w='80px'>Génial</Text>
                <HStack ml={2} color='yellow.300'>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                </HStack>

            </Button>
            <Button
                onClick={()=>{
                    setFieldValue('GlobalRating', 5);
                    handleSubmit();
                }}
            >
                <Text textAlign='left' w='80px'>Bien</Text>
                <HStack ml={2} color='yellow.300'>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon color='gray.500' />
                </HStack>

            </Button>
            <Button
                onClick={()=>{
                    setFieldValue('GlobalRating', 5);
                    handleSubmit();
                }}
            >
                <Text textAlign='left' w='80px'>Pas top</Text>
                <HStack ml={2} color='yellow.300'>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon color='gray.500' />
                    <StarIcon color='gray.500' />
                </HStack>

            </Button>
            <Button
                onClick={()=>{
                    setFieldValue('GlobalRating', 5);
                    handleSubmit();
                }}
            >
                <Text textAlign='left' w='80px'>Mauvais</Text>
                <HStack ml={2} color='yellow.300'>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon color='gray.500' />
                    <StarIcon color='gray.500' />
                    <StarIcon color='gray.500' />
                </HStack>
            </Button>
            <Button
                onClick={()=>{
                    setFieldValue('GlobalRating', 5);
                    handleSubmit();
                }}
            >
                <Text textAlign='left' w='80px'>Nul</Text>
                <HStack ml={2} color='yellow.300'>
                    <StarIcon />
                    <StarIcon color='gray.500' />
                    <StarIcon color='gray.500' />
                    <StarIcon color='gray.500' />
                    <StarIcon color='gray.500' />
                </HStack>
            </Button>
            <Button
                onClick={()=>{
                    setFieldValue('GlobalRating', 5);
                    handleSubmit();
                }}
            >
                <Text textAlign='left' w='80px'>Horrible</Text>
                <HStack ml={2} color='yellow.300'>
                    <StarIcon />
                    <StarIcon color='gray.500' />
                    <StarIcon color='gray.500' />
                    <StarIcon color='gray.500' />
                    <StarIcon color='gray.500' />
                </HStack>
            </Button>
        </Stack >
    )
}

export default QuestionGlobalRating