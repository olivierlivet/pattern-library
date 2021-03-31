import React, {FunctionComponent} from 'react'

type productCardPropsTypes = {
    title: string,
    level: number,
    rating: number,

    onOpen: Function
}

import { StaticImage } from 'gatsby-plugin-image'
import {
    Box,
    Heading,
    Grid,
    Text,
    Button
} from '@chakra-ui/react'

const ProductCard:FunctionComponent<productCardPropsTypes> = ({
        title,
        level,
        rating,

        onOpen
    }) =>{
    return(
    <Box
        w='700px'
        bg='white'
        boxShadow='md'
    >
        <Grid
            templateColumns={{
                base:'100%',
                lg:'300px 1fr'
            }}
            gap={10}
        >
            <Box>
                <StaticImage
                    src='https://static-mapetitemercerie.o10c.net/88723-large_default/patron-l-enfant-roi-chemise-xavier-de-2-ans-a-12-ans.jpg'
                    alt={title}
                />
            </Box>
            <Box
                p={5}
            >
                <Heading>{title}</Heading>
                <Text>Level : { level }</Text>
                <Button onClick={()=>onOpen()}>View</Button>

            </Box>
        </Grid>
    </Box>
    )
}

export default ProductCard