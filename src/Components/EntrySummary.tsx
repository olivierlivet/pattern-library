import {
    Box,
    HStack,
    Image,
    Stack,
    Text
} from '@chakra-ui/react'
import React from 'react'

const EntrySummary = () => {
    const Card = () => (
        <Box w='200px' h='300px' bg='gray.300'>
            <Image
                src='https://republiqueduchiffon.com/wp-content/uploads/2021/02/Sewing-pattern-BILLY-6-600x600.jpg'
                alt='Image alt'
                w='100%'
                h='150px'
                objectFit='cover'
            />
            <Stack
                bg='white'
                p={ 4 }
                spacing={ 2 }
                h='150px'

            >
                <Text
                    textTransform='uppercase'
                    fontSize={{ base:'xs', lg:'md' }}
                >
                    <Text
                        as='span'
                        lineHeight='8px'
                        display='inline-block'
                        borderBottom='solid 3px'
                        borderBottomColor='#EFCBBF'
                        pr={ 2 }
                    >Jupe</Text>
                </Text>
                <Text>Les 10 plus belles jupes pour l'été →</Text>
            </Stack>
        </Box>
    )
    return(
        <Box
            w='100%'
            overflowX='scroll'
            p={4}
        >
            <HStack
                w='1050px'
                spacing='10px'
            >
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </HStack>
        </Box>
    )
}

export default EntrySummary