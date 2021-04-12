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
import RefinerFilters from './RefineFilters'

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
            mainFilters: {},
            refineFilters: { 'test': 'test' },
            showFilter: false
        }
    }

    categoryFilter() {
        let categoryFilter = Filters.getCategoryFilter(this.state.mainFilters)
        if (categoryFilter) {
            return Filters.getCategoryFilter(this.state.mainFilters)
        } else {
            return null
        }

    }

    variantFilter() {
        let variantFilter = Filters.getVariantFilter(this.state.mainFilters)
        if (variantFilter) {
            return Filters.getVariantFilter(this.state.mainFilters)
        } else {
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

    refineFilters() {
        const {
            type,
            pocket
        } = this.state.refineFilters
        console.log('format', type)
        if (type) {
            return ({ "fields.format[in]": type.join(',') })
        }

        if (pocket && pocket.length === 1) {
            return ({ "fields.pocket": pocket[0] === 'with' ? true : 'false' })
        }

    }
    handleUpdateRefineFilters(key, value) {
        let { refineFilters } = this.state
        refineFilters[key] = value
        this.setState({ "refineFilters": refineFilters }, this.loadProducts())
    }

    componentDidMount() {
        this.loadProducts()
    }

    loadProducts() {
        console.log('LoadProducts', this.state.mainFilters)
        let baseQuery = {
            content_type: "product",
            ...this.categoryFilter(this.state.mainFilters.category),
            ...this.variantFilter(this.state.mainFilters.variant),
            ...this.refineFilters(this.state.refineFilters)
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
    refineFiltersCount() {
        const { refineFilters } = this.state
        var size = 0,
            key;
        for (key in refineFilters) {
            if (refineFilters.hasOwnProperty(key)) size++;
        }
        return size;
    }

    handleChange(e) {
        this.setState({ products: [] })

        // setTimeout(()=>{
        let mainFilters = this.state.mainFilters
        console.log(e.target.name, e.target.value)
        mainFilters[e.target.name] = e.target.value
        if (e.target.name === 'category') { delete mainFilters.variant }
        this.setState({ mainFilters: mainFilters }, this.loadProducts())
        // }, 1000)


    }

    render() {
        const { products, singleProduct, mainFilters, refineFilters } = this.state

        return (
            <>
                <Box
                    // bg='white'
                    position='fixed'
                    top='0'
                    left='0'
                    right='0'
                    p={{ base: 4, lg: 10 }}
                    pb={{ base: 10, lg: 10 }}
                    pt={{ base: 4, lg: 10 }}

                    bg='linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7693452380952381) 70%, rgba(255,255,255,1) 100%)'
                    zIndex='tooltip'
                    // boxShadow='sm'
                    // display='none'
                >
                    <Flex
                        justify='space-between'
                    >
                        <HStack w='100%'>
                            {/* <Text whiteSpace='pre' display={{ base: 'none', lg: 'initial' }} >Il y a <Text as='span' bg='yellow.100'>12</Text> patrons de :</Text> */}
                            <Select
                                w='200px'
                                onChange={(e) => this.handleChange(e)}
                                value={this.state.mainFilters.category}
                                name='category'
                                placeholder='Genre'
                                bg='white'
                            >
                                {Filters.getCategoryOptions().map(option =>
                                    <option key={option.variantId} value={option.variantId}>{option.label}</option>
                                )}
                            </Select>
                            {
                                this.state.mainFilters.category
                                    && Filters.getVariantOptions(this.state.mainFilters.category)
                                    && Filters.getVariantOptions(this.state.mainFilters.category).length
                                    ?
                                    <Select
                                        onChange={(e) => this.handleChange(e)}
                                        value={this.state.mainFilters.variant ? this.state.mainFilters.variant : ''}
                                        name='variant'
                                        placeholder='Pièce'
                                        bg='white'

                                    >
                                        {Filters.getVariantOptions(this.state.mainFilters.category).map(option =>
                                            <option value={option.variantId}>{option.label}</option>
                                        )}
                                    </Select>
                                    : null}
                        </HStack>
                        <Center w='100%'>
                            <Button
                                // display={{ base:'initial', lg:'none' }}
                                // position='fixed'
                                // zIndex='tooltip'
                                // bottom={10}
                                // left={10}
                                size='sm'
                                variant='link'
                                onClick={() => this.setState({ showFilter: !this.state.showFilter })}
                            >

                                {this.refineFiltersCount() ? `Filtres (${this.refineFiltersCount()})` : `Filtrer`}
                            </Button>
                        </Center>
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
                            display={{ base: this.state.showFilter ? 'block' : 'none', lg: 'block' }}
                        >
                            <Box
                                position='sticky'
                                top={10}
                                // borderBottom='solid 1px'
                                // borderBottomColor='gray.100'
                                // position='fixed'
                                // zIndex='banner'
                                // top='0'
                                // right='0'
                                // w='100%'
                                justifyContent='space-between'
                            >
                                <RefinerFilters
                                    mainFilters={mainFilters}
                                    category={mainFilters.category}
                                    key={{ category: mainFilters.category, refine: refineFilters }}
                                    refineFilters={refineFilters}
                                    handleChange={(key, value) => this.handleUpdateRefineFilters(key, value)}
                                />
                            </Box>
                        </Box>

                        <Box
                            // bg='white'
                            // mt={10}
                            pt={ 20 }
                            pb={ 20 }
                        >
                            {products && products.length ?
                                <Center p={4 }>
                                    <Text>
                                        {`${products.length} patrons correspondent à votre recherche`}
                                    </Text>
                                </Center>
                                : `Pas de patron correspondent à votre recherche`}
                            <VStack
                                w='100%'
                                py={{ base: 0, lg: 20 }}
                                // bg='gray.100'
                                spacing={{ base: 5, lg: 10 }}
                                shouldWrapChildren={true}
                                bg='gray.50'
                                p={{ base: 2, lg: 4 }}
                            >

                                {products && products.length ?
                                    products.map(product =>
                                        <ProductCardSmall
                                            key={product.sys.id}
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
                                    ) :
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