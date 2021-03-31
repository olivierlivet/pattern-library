import React, { Component } from 'react'
import {
    Box,
    Button,
    Divider,
    Flex,
    Center,
    VStack
} from '@chakra-ui/react'
import config from '../../Utils/config'

const contentful = require("contentful");
const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

class SearchEngine extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: null
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
        const { products } = this.state

        return (
            <Box>
                <Flex
                    borderBottom='solid 1px'
                    borderBottomColor='gray.100'
                    position='fixed'
                    top='0'
                    right='0'
                    w='100%'
                    bg='green.50'
                    justifyContent='space-between'>
                    <Flex

                    >
                        {
                            ["Niveau", "Longueur", "Taille", "Fermeture", "Pocket", "Assymétrique"]
                                .map(item =>
                                    <>
                                        <Box p={10} key={item}>{item}</Box>
                                        <Divider orientation='vertical' />
                                    </>
                                )
                        }
                    </Flex>
                    <Flex
                        px={10}
                        align='center'
                    >
                        <Button onClick={() => this.props.onClose()}>Close</Button>
                    </Flex>
                </Flex>

                <Box mt='105px'>
                    <VStack bg='gray.50' spacing={10}>
                        {products && products.map(product =>
                            <Box
                                w='500px'
                                mx='auto'
                            >
                                <Center
                                    bg='white'
                                    h='500px'
                                >

                                    {product.fields.title}
                                </Center>
                            </Box>
                        )}
                    </VStack>
                </Box>
                {/* { products ?
                    <pre>
                        {JSON.stringify(products, null, 1)}
                    </pre>
                    : null} */}
            </Box>
        )
    }
}
export default SearchEngine