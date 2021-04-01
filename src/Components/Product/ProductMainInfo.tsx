import React, { FunctionComponent } from 'react'

type props = {
    data: Object
}

import {
    Box,
    Heading,
    VStack,
    Stack,
    Flex,
    Text
} from '@chakra-ui/react'
import RichContent from '../RichContent'

const ProductMainInfo: FunctionComponent<props> = ({ data }) => {
    return (
        <>
            <Stack
                spacing={4}
            >
                <Box>
                    <Heading>
                        {data.title}
                    </Heading>
                </Box>

                <Box>
                    Évaluation : { data.level }/5
                </Box>

                <Box>
                    Taille : 36/44
                </Box>

                <Box>
                    Prix : { data.price }€
                </Box>

                <Flex>
                    <Box
                        bg='#88a7aa'
                        color='white'
                        borderRadius='sm'
                        textTransform='uppercase'
                        letterSpacing='widest'
                        px={6}
                        py={3}
                        _hover={{
                            bg:'#75b5bb'
                        }}
                    >
                        Je le veux
                    </Box>
                </Flex>

                <RichContent data={data.intro} />
                <Text>Détail des mesures, inspirations, accédez à tous les détails de ce patron.</Text>
            </Stack>
        </>
    )
}

export default ProductMainInfo