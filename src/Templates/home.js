import React, { useState } from 'react'
import { graphql, navigate } from 'gatsby'
import Layout from '../Components/Layouts/base'
import { Link as GatsbyLink } from 'gatsby'
import {
    StaticImage,
    // GatsbyImage
} from "gatsby-plugin-image"
import SearchEngineLoader from '../Components/SearchEngine/Loader.tsx'
import Nav from '../Components/Nav/Base'
import ProductsSummary from '../Components/ProductsSummary/index.js'
import HeroSearch from '../Components/Hero/Hero'
import RichContent from '../Components/RichContent'
import {
    Heading,
    Box,
    Button,
    Text,
    Link,
    Grid,
    HStack,
    VStack,
    Stack,
    Center
} from '@chakra-ui/react'
import Wrapper from '../Components/Layouts/Wrapper'
import Helmet from 'react-helmet'
import EntrySummary from '../Components/EntrySummary'
import Title from '../Components/Title'
import NewsletterCta from '../Components/NewsletterCta'
import LinksList from '../Components/LinksList'
import CtaSearch from '../Components/CtaSearch'
import AccordionBlock from '../Components/AccordionBlock'
import { ArrowForwardIcon } from '@chakra-ui/icons'

const HomeTemplate = (props) => {
    const pageContent = props.data.page
    const univers = props.data.univers.edges
    const products = props.data.products.edges

    const [showEngine, setShowEngine] = useState(false)
    const [category, setCategory] = useState(false)
    const [variant, setVariant] = useState(false)
    return (
        <Layout
            enableBackButton={false}
        >
            <Helmet>
                <title>{pageContent.title}</title>
                <meta name='description' content='Qu’est-ce-qu’un patron de couture ?  Le patron de couture est le plan qui vous permet de réaliser un ouvrage : il s’agit du tracé sur papier de tous les éléments composant un vêtement.' />
            </Helmet>

            <Center
                textAlign='center'
                minH='60vh'
                px={{ base: '6', lg: '56' }}
            >
                <VStack spacing={{ base: 6, lg: 8 }}>
                    <Box>
                        <Text
                            fontFamily='DM Sans'
                            textTransform='uppercase'
                            color='gray.500'
                            fontSize='sm'
                            letterSpacing='wide'
                            m='0'
                        >the (BETA)</Text>
                        <Text
                            fontSize={{ base: 'xx-large', lg: 'xxx-large' }}
                            fontFamily='Noe Display'
                            lineHeight='shorter'
                            color='green.900'
                        >Patterns Corner</Text>
                        <Text
                            fontFamily='DM Sans'
                            fontSize='16px'
                            fontWeight='normal'
                        >
                            Le plus grand choix de
                    {' '}<Heading
                                as='h1'
                                display='inline'
                                fontWeight='normal'
                                fontSize='inherit'
                                borderBottom='solid 3px'
                                borderBottomColor='#EFCBBF'
                                fontFamily='DM Sans'
                                display='inline-block'
                                lineHeight='11px'
                            >patrons de couture</Heading>
                        </Text>
                    </Box>
                    <Text
                        fontFamily='Noe Display'
                        fontWeight='normal'
                        color='gray.700'
                    >
                        Votre futur projet n’attend pas,
                        trouvez maintenant le patron de  vos rêves
                        parmi les
                    {' '}<Text as="span" display='inline-block' lineHeight='8px' borderBottom="solid 3px" borderBottomColor="#E7B8A9">2 135</Text>
                        {' '}patrons.
                    </Text>
                    <CtaSearch
                        handleSubmit={(value) => navigate(`/fr/search?category=${value.id}&label=${value.label}`)}
                    />
                </VStack>
            </Center>

            {/* <HeroSearch
                handleLoadSearchEngine={() => setShowEngine(true)}
                setCategory={(value) => setCategory(value)}
                setVariant={(value) => setVariant(value)}
            /> */}



            <Grid
                bg='#D9E6E6'
                templateColumns={{
                    base: '100%',
                    lg: '450px 1fr'
                }}
                p={{ base: 6, lg: 24 }}
            >
                <Stack
                    px={{ base: 4, lg: 26 }}
                    spacing={4}
                >
                    <Title>Vos patrons préférés</Title>
                    <Text
                        color='gray.600'
                    >
                        Voici les patrons préférés de la communeauté, ceux qui ont reçu les meilleures évaluations.
                    </Text>
                    <Text>
                        En savoir plus sur le système d'<Link as={GatsbyLink} to='/fr/a-propos'>évaluation des patrons <ArrowForwardIcon /></Link>
                    </Text>
                </Stack>
                <Stack
                    spacing={{ base:4, lg:6 }}
                    maxW='800px'
                >
                    <EntrySummary />
                    <Box
                        px={{ base: 4, lg: 26 }}
                    >
                        <Button
                            bg='#EFCBBF'
                            color='gray.600'
                            textTransform='uppercase'
                            letterSpacing='wide'
                            fontFamily='DM Sans'
                            fontWeight='normal'
                            borderRadius={2}
                        >Voir plus</Button>
                    </Box>
                </Stack>

            </Grid>


            <AccordionBlock
                title="The Patterns Corner c’est&nbsp;:"
                more={<Button>Voir plus</Button>}
            />

            {/* <VStack
                bg='#D9E6E6'
                align='flex-start'
                py={8}
                spacing={4}
                p={{ base: 0, lg: 24 }}
            >
                <Title>Vos patrons préférés</Title>
                <EntrySummary />
                <Box
                    px={4}
                >
                    <Button
                        bg='#EFCBBF'
                        color='gray.600'
                        textTransform='uppercase'
                        letterSpacing='wide'
                        fontFamily='DM Sans'
                        fontWeight='normal'
                        borderRadius={2}
                    >Voir plus</Button>
                </Box>
            </VStack> */}


            <VStack
                bg='#D9E6E6'
                align='flex-start'
                py={8}
                spacing={4}
                p={{ base: 6, lg: 24 }}

                display='none'

            >
                <Title>Le journal The Patterns Corner</Title>
                <EntrySummary />
                <Box
                    px={4}
                >
                    <Button
                        bg='#EFCBBF'
                        color='gray.600'
                        textTransform='uppercase'
                        letterSpacing='wide'
                        fontFamily='DM Sans'
                        fontWeight='normal'
                        borderRadius={2}
                    >Voir plus</Button>
                </Box>
            </VStack>




            <Grid
                templateColumns={{
                    base: '100%',
                    lg: '500px 1fr'
                }}
                p={{ base: 6, lg: 24 }}
            >
                <Heading
                    fontWeight='normal'
                    fontSize={{ base: '2xl', lg: '4xl' }}
                    mb={{ base: 8 }}
                >
                    Les différentes familles de patrons
                </Heading>
                <Box>
                    <Text mb={4}>
                        Notre catalogue est très complet avec énormément de modèles de jupes pour rassasier vos envies. Voici les différentes famille selon le style de ces jupes :
                    </Text>
                    <LinksList
                        data={univers}
                        columnsCount={{ base: 2, lg: 2 }}
                    />
                </Box>
            </Grid>
            <NewsletterCta />

            <Wrapper>
                <Box
                    fontSize={{
                        base: 'lg',
                        lg: 'md'
                    }}
                    p={{ base: 6, lg: 24 }}

                >
                    <RichContent data={pageContent.description} />
                </Box>
                {/* <ProductsSummary data={products} /> */}
            </Wrapper>

        </Layout>
    )
}

export default HomeTemplate

export const pageQuery = graphql`
query homeQuery( $contentfulID: String! ){
    page:contentfulPage(contentful_id: {eq: $contentfulID})
    {
        slug
        title
        description {
            raw
            references {
                contentful_id
                node_locale
                slug
                ... on ContentfulUnivers { contentful_id slug }
            }
        }
    }
    univers:allContentfulUnivers
    {
        edges {
            node {
                slug
                title
            }
        }
    }
    products:allContentfulProduct
    {
        edges {
            node {
                slug
                title
            }
        }
    }
}
`