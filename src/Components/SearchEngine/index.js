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

import CissorsLoader from '../Loaders/Cissors'

import Filters from './filters'

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
            singleProduct: null,
            mainFilters:{},
            subFilters:{}
        }
    }

    categoryFilter () {
        let categoryFilter = Filters.getCategoryFilter( this.state.mainFilters )
        if (categoryFilter){
            return Filters.getCategoryFilter( this.state.mainFilters )
        }else{
            return null
        }
        
    }

    variantFilter () {
        let variantFilter = Filters.getVariantFilter( this.state.mainFilters )
        if (variantFilter){
            return Filters.getVariantFilter( this.state.mainFilters )
        }else{
            return null
        }
        
    }

    // variantFilter () {
    //     let variantFilter = Filters.getVariantFilter( this.state.mainFilters.variant )
    //     if (variantFilter){
    //                 return Filters.getVariantFilter( this.state.mainFilters.variant )

    //     }else{
    //         return null
    //     }
    //     // return { "fields.category.sys.id" : "2aMnwR8nnDdeb0PNj2SBe9" } // Hauts
    //     // return { "fields.category.sys.id" : "3v7MEyPWB0d1FOYFa9odJV" } // Jupes
        
    // }

    componentDidMount() {
        this.loadProducts()
    }

    loadProducts(){
        console.log('LoadProducts', this.state.mainFilters)
        let baseQuery = {
            content_type: "product",
            ...this.categoryFilter( this.state.mainFilters.category ),
            ...this.variantFilter( this.state.mainFilters.variant )
            // ...this.variantFilter( this.state.mainFilters.variant )
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

    handleChange(e){
        this.setState({products: []})

        setTimeout(()=>{
            let mainFilters = this.state.mainFilters
            mainFilters[e.target.name]=e.target.value
            if ( e.target.name === 'category' ) { delete mainFilters.variant }
            this.setState({ mainFilters: mainFilters}, this.loadProducts())
        }, 1000)


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
                            <Select
                                w='200px'
                                onChange={(e)=>this.handleChange(e)}
                                value={ this.state.mainFilters.category }
                                name='category'
                                placeholder='Genre'
                            >
                                {Filters.getCategoryOptions().map( option =>
                                    <option value={option.variantId}>{option.label}</option>
                                )}
                            </Select>
                            {
                                this.state.mainFilters.category
                                && Filters.getVariantOptions( this.state.mainFilters.category )
                                && Filters.getVariantOptions( this.state.mainFilters.category ).length
                            ? 
                            <Select
                                onChange={(e)=>this.handleChange(e)}
                                value={ this.state.mainFilters.variant ? this.state.mainFilters.variant : '' }
                                name='variant'
                                placeholder='Pièce'
                            >
                                {Filters.getVariantOptions( this.state.mainFilters.category ).map( option =>
                                    <option value={option.variantId}>{option.label}</option>
                                )}
                            </Select>
                            : <div>test</div>}
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
                                {products && products.length ?
                                    products.map(product =>
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
                                ):
                                <CissorsLoader />
                                }

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