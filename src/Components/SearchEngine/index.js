import React, { Component } from 'react'
import {
    Box,
    Button,
    Divider,
    Flex,
    Center,
    VStack,
    Grid,
    HStack,
    Select,
    Text,
    Badge
} from '@chakra-ui/react'
import config from '../../Utils/config'
import ProductCardSmall from '../Product/CardSmall'
import ProductCardLarge from '../Product/CardLarge'
import RichContent from '../../Components/RichContent'

const contentful = require("contentful");
const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});


class SearchEngine extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: null,
            singleProduct: null
        }
    }

    componentDidMount() {
        let baseQuery = {
            content_type: "product",
            // "fields.level[gt]": 1
            // "fields.specs.level":3
            // locale: process.env.GATSBY_LANG,
            // order: this.getOrder(),
            // limit: this.props.pageLimite ? this.props.pageLimite : 20,
            // skip: reset ? 0 : (currentPage) * (this.props.pageLimite ? this.props.pageLimite : 20),
        }

        client
            .getEntries(baseQuery)
            .then(response =>
                // console.log( response )
                this.setState({ products: response.items })

                // this.setState({
                //     ads: reset ? response.items : ads.concat(response.items),
                //     currentPage: currentPage,
                //     hasMore: response.total > (currentPage * this.props.pageLimite ? this.props.pageLimite : 20) ? true : false,
                //     totalAds: response.total,
                //     isLoading: false
                // })
            )
            .catch(console.error)
    }

    render() {
        const { products, singleProduct } = this.state

        return (
            <>
                <Box
                    bg='white'
                    // position='fixed'
                    p={10}
                    boxShadow='sm'
                >
                    <Flex
                        justify='space-between'
                    >
                        <HStack >
                            <Text whiteSpace='pre'>Il y a <Text as='span' bg='yellow.100'>12</Text> patrons de :</Text>
                            <Select w='200px'>
                                <option>Jupe</option>
                                <option>Haut</option>
                                <option>Pantalon</option>
                                <option>Manteau / veste</option>
                            </Select>
                            <Select>
                                <option>Jupe portefeuille</option>
                                <option>Jupe à pli</option>
                            </Select>

                        </HStack>
                        <Box>
                            <Button>Favorites</Button>

                            <Button justifySelf='flex-end' onClick={() => this.props.onClose()}>Close</Button>
                        </Box>

                    </Flex>



                </Box>
                <Box
                    // pt='105px'
                    maxW='1300px'
                    mx='auto'
                >
                    <Grid
                        templateColumns={{
                            base: `100%`,
                            lg: `300px 1fr`
                        }}
                    >
                        <Box
                            minH='calc(100vh - 105px )'
                        >
                            <Box
                                position='sticky'
                                top={10}
                                p={ 8 }
                                // borderBottom='solid 1px'
                                // borderBottomColor='gray.100'
                                // position='fixed'
                                // zIndex='banner'
                                // top='0'
                                // right='0'
                                // w='100%'
                                justifyContent='space-between'
                            >
                                <Text
                                    textTransform='uppercase'
                                    letterSpacing='wider'
                                >
                                    Affiner par :
                                </Text>

                                {
                                    ["Niveau", "Longueur", "Taille", "Fermeture", "Pocket", "Assymétrique"]
                                        .map(item =>
                                            <>
                                                <Box p={4} key={item}>{item}</Box>
                                                <Divider orientation='vertical' />
                                            </>
                                        )
                                }
                            </Box>
                        </Box>

                        <Box
                            bg='white'
                            mt={ 10 }
                        >
                            <VStack
                                w='100%'
                                py={20}
                                // bg='gray.100'
                                spacing={10}
                                shouldWrapChildren={true}
                            >
                                {products && products.map(product =>
                                    <ProductCardSmall
                                        productId={product.sys.id}
                                        title={product.fields.title}
                                        level={product.fields.level}
                                        rating={product.fields.rating}
                                        intro={<RichContent data={product.fields.intro} />}


                                        //Actions
                                        onOpen={() => this.setState({ singleProduct: product.fields })}
                                    />
                                    // <Box
                                    //     w='500px'
                                    //     mx='auto'
                                    // >
                                    //     <Center
                                    //         bg='white'
                                    //         h='500px'
                                    //     >

                                    //         {product.fields.title}
                                    //     </Center>
                                    // </Box>
                                )}
                            </VStack>
                        </Box>
                        {/* { products ?
                    <pre>
                        {JSON.stringify(products, null, 1)}
                    </pre>
                    : null} */}
                        {singleProduct ?
                            <ProductCardLarge
                                product={singleProduct}
                                onClose={() => this.setState({ singleProduct: null })}
                            />
                            : null}
                    </Grid>
                </Box>
            </>
        )
    }
}
export default SearchEngine