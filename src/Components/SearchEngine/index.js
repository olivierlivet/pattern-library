import React, { Component } from 'react'
import {
    Box,
    Button,
    Divider,
    Flex,
    Center,
    VStack,
    Grid
} from '@chakra-ui/react'
import config from '../../Utils/config'
import ProductCardSmall from '../Product/CardSmall'
import ProductCardLarge from '../Product/CardLarge'

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
            <Grid
                templateColumns={{
                    base:`100%`,
                    lg:`300px 1fr`
                }}
            >
                <Box
                    h='100vh'
                >
                <Box
                    position='sticky'
                    top={0}
                    // borderBottom='solid 1px'
                    // borderBottomColor='gray.100'
                    // position='fixed'
                    // zIndex='banner'
                    // top='0'
                    // right='0'
                    // w='100%'
                    bg='green.50'
                    justifyContent='space-between'
                >
                        <Box>Type de vêtement : Jupe</Box>
                        <Box>Coupe / Finition : Jupe portefeuille</Box>
                        {
                            ["Niveau", "Longueur", "Taille", "Fermeture", "Pocket", "Assymétrique"]
                                .map(item =>
                                    <>
                                        <Box p={10} key={item}>{item}</Box>
                                        <Divider orientation='vertical' />
                                    </>
                                )
                        }
                    <Flex
                        px={10}
                        align='center'
                        position='fixed'
                        top='2rem'
                        right='2rem'
                    >
                        <Button onClick={() => this.props.onClose()}>Close</Button>
                    </Flex>
                </Box>
                </Box>

                <Box>
                    <VStack
                        w='100%'
                        py={ 20 }
                        bg='gray.50' spacing={10} shouldWrapChildren={true}>
                        {products && products.map(product =>
                            <ProductCardSmall
                                title={ product.fields.title }
                                level={ product.fields.level }
                                rating={ product.fields.rating }

                                //Actions
                                onOpen={()=> this.setState({ singleProduct: product.fields })}
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
                { singleProduct ?
                    <ProductCardLarge
                        product={ singleProduct }
                        onClose={ ()=>this.setState({singleProduct: null}) }
                    />
                : null }
            </Grid>
        )
    }
}
export default SearchEngine