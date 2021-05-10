import React, { FC } from 'react'
import Wrapper from './Layouts/Wrapper'
import {
    Heading,
    Box,
    SimpleGrid,
    Stack,
    Flex
} from '@chakra-ui/react'
import RichContent from '../Components/RichContent'
import Nav from '../Components/Nav/Base'
import { GatsbyImage } from 'gatsby-plugin-image'
import Hierarchical from '../Components/Nav/Hierarchical'

type props = {
    data: any,
    links: any,
    hierarchy: any,
    Cta: any
}

const PageHeader: FC<props> = ({ data, links, hierarchy, Cta }) => {

    return (
        <Wrapper>

            <SimpleGrid
                columns={{
                    base: 1, md: 2
                }}
                gap={{
                    base: 2, md: 10
                }}

                px={{
                    base: 0, md: 2, lg: 6, xl: 10
                }}
            >
                <Flex
                    order={{
                        base: 2,
                        md: 1
                    }}
                    alignItems='center'
                    h='100%'
                >
                    <Stack
                        p={{ base: 4, lg: 0 }}
                        spacing={{ base: 2, md: 3 }}
                    >
                        <Box>
                            <Hierarchical data={data} />
                        </Box>
                        <Heading
                            as='h1'
                            fontWeight='normal'
                        >{data.titleH1}</Heading>
                        <RichContent data={data.description} />

                        {/* <Cta /> */}
                        {Cta}

                        <Nav data={links} />

                    </Stack>
                </Flex>
                <Box
                    order={{
                        base: 1,
                        md: 2
                    }}
                >
                    <GatsbyImage image={data.illustration.gatsbyImageData} alt={"data.blogPost.author"} />

                </Box>
            </SimpleGrid>

        </Wrapper>
    )
}

export default PageHeader