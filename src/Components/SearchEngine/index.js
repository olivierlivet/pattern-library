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
    Badge,
    Spinner
} from '@chakra-ui/react'
import config from '../../Utils/config'
import ProductCardSmall from '../Product/CardSmall'
import ProductCardLarge from '../Product/CardLarge'
import RichContent from '../../Components/RichContent'

import CissorsLoader from '../Loaders/Cissors'

import Filters from './filters'
import RefinerFilters from './RefineFilters'
import Wrapper from '../Layouts/Wrapper'
import FavoriteIcon from '../../Images/Icons/Favorite'
import ShoppingBagIcon from '../../Images/Icons/ShoppingBag'

import CategoryChoiceButton from './CategoryChoiceButton'
import FilterButton from './FilterButton'
import MainFiltersButton from './MainFiltersButton'

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
            mainFilters: {
            },
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
        this.updateMainFilters('category', this.props.mainFilters.category)

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

    updateMainFilters(key, value) {
        this.setState({ products: [] })

        // setTimeout(()=>{
        let mainFilters = this.state.mainFilters
        console.log(key, value)
        mainFilters[key] = value
        if (key === 'category') { delete mainFilters.variant }
        this.setState({ mainFilters: mainFilters }, this.loadProducts())
        // }, 1000)


    }

    render() {
        const { products, singleProduct, mainFilters, refineFilters, showFilter } = this.state

        return (
            <>
                {/* <pre>
                { JSON.stringify( this.props, null, 1)}
                { JSON.stringify( this.state, null, 1)}
                </pre> */}
                <Grid
                    templateColumns={{
                        base: `100%`,
                        lg: `300px 1fr`,
                        xl: `400px 1fr`
                    }}
                    minH='100vh'
                >
                    <Box
                        bg='white'
                        p={{ base: 0, lg: 8 }}

                    >
                        <Box
                            position='sticky'
                            top={8}
                        >

                            <MainFiltersButton
                                setCategory={(value)=> this.updateMainFilters('category', value)}
                                setVariant={(value)=>this.updateMainFilters('variant', value)}
                                // handleSubmit={(value)=>this.updateMainFilters('variant', value)}
                                // this.updateMainFilters('variant', value)}
                            />

                            <RefinerFilters
                                mainFilters={mainFilters}
                                category={
                                    // mainFilters.category
                                    '3v7MEyPWB0d1FOYFa9odJV'
                                }
                                key={{ category: mainFilters.category, refine: refineFilters }}
                                refineFilters={refineFilters}
                                handleChange={(key, value) => this.handleUpdateRefineFilters(key, value)}
                                isVisible={
                                    // showFilter
                                    true
                                }
                                hideFilter={() => this.setState({ 'showFilter': !showFilter })}
                            />
                        </Box>
                    </Box>
                    <Box>
                        <Box
                            // bg='white'
                            zIndex='banner'
                            position='fixed'
                            top='0'
                            left={{
                                base: 0,
                                lg: '300px',
                                xl: '400px'
                            }}
                            right='0'
                            p={{ base: 4, lg: 10 }}
                            pb={{ base: 10, lg: 10 }}
                            pt={{ base: 4, lg: 10 }}

                            bg='linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7693452380952381) 70%, rgba(255,255,255,1) 100%)'
                        // boxShadow='sm'
                        // display='none'
                        >
                            <Flex justify='space-between'>
                                {/* <pre>
                            { JSON.stringify( mainFilters, null, 1 )}
                        </pre> */}
                                <Box>
                                    {/* <Button
                                display={{ base:'none', lg:'flex'}}
                            >
                                Retour au site
                            </Button> */}
                                    <Box
                                        display={{ base:'none', lg:'block'}}
                                        visibility='hidden'
                                        w='145px'
                                    />
                                    <HStack
                                        display={{  base:'flex', lg: 'none' }}
                                    >
                                        <CategoryChoiceButton
                                            mainFilters={mainFilters}
                                            categories={Filters.getCategoryOptions()}
                                            variants={Filters.getVariantOptions(this.state.mainFilters.category)}

                                            setUnivers={(value) => this.updateMainFilters('univers', value)}
                                            setCategory={(value) => this.updateMainFilters('category', value)}
                                        />
                                        <FilterButton
                                            onClick={() => this.setState({ showFilter: !this.state.showFilter })}
                                        />
                                    </HStack>

                                </Box>


                                {products && products.length ?
                                    <Center p={0}>
                                        <Text fontSize='15px' letterSpacing='wide' display={{ base: 'block', lg: 'none' }}>
                                            <Text as='span' fontWeight='bold' borderBottom="solid 3px" borderBottomColor='green.300'>
                                                {products.length}
                                            </Text>
                                            {products.length === 1 ? ` patron` : ` patrons`}
                                        </Text>
                                        <Text fontSize='15px' letterSpacing='wide' display={{ base: 'none', lg: 'block' }}>
                                            <Text as='span' fontWeight='bold' borderBottom="solid 3px" borderBottomColor='green.300'>
                                                {products.length}
                                            </Text>
                                            {` patrons correspondent à votre recherche`}
                                        </Text>
                                    </Center>
                                    :
                                    <Center p={2}>
                                        <Spinner size='sm' color='#88a7aa' />
                                    </Center>
                                }

                                <HStack spacing={2} justify='flex-end' w={{ base: 'auto', lg: '145px' }}>
                                    <Center
                                        position='relative'
                                        w={8}
                                        h={8}
                                    >
                                        <FavoriteIcon w={{ base: 5, lg: 6 }} h={{ base: 5, lg: 6 }} />
                                        <Center
                                            backgroundColor='red.500'
                                            color='white'
                                            borderRadius='full'
                                            p={1.5}
                                            w='10px'
                                            h='10px'
                                            position='absolute'
                                            fontSize='x-small'
                                            top='0'
                                            right='0'
                                        >
                                            2
                                </Center>
                                    </Center>
                                    <Center w={8} h={8} position='relative'>
                                        <ShoppingBagIcon w={{ base: 5, lg: 6 }} h={{ base: 5, lg: 6 }} />
                                        <Center
                                            backgroundColor='red.500'
                                            color='white'
                                            borderRadius='full'
                                            p={1.5}
                                            w='10px'
                                            h='10px'
                                            position='absolute'
                                            fontSize='x-small'
                                            top='0'
                                            right='0'
                                        >
                                            4
                                </Center>
                                    </Center>
                                </HStack>
                            </Flex>
                        </Box>



                        <VStack
                            w='100%'
                            py={{ base: 0, lg: 20 }}
                            // bg='gray.100'
                            spacing={{ base: 5, lg: 10 }}
                            shouldWrapChildren={true}
                            bg='gray.50'
                            // p={{ base: 4, lg: 4 }}

                            pt={{ base: '16', lg: 32 }}
                            pb={'32'}
                        >

                            {products && products.length ?
                                products.map(product =>
                                    <>

                                        <ProductCardSmall
                                            key={product.sys.id}
                                            productId={product.sys.id}
                                            title={product.fields.title}
                                            price={product.fields.price}
                                            level={product.fields.level}
                                            rating={product.fields.rating}
                                            editor={product.fields.editor}
                                            pictures={product.fields.pictures}
                                            intro={<RichContent data={product.fields.intro} />}


                                            //Actions
                                            // onOpen={() => console.log('open')}
                                            onOpen={() => this.setState({ singleProduct: product.fields })}
                                        />
                                    </>

                                ) :
                                <CissorsLoader />
                            }

                        </VStack>


                    </Box>


                </Grid>



                {singleProduct ?
                    <ProductCardLarge
                        product={singleProduct}
                        onClose={() => this.setState({ singleProduct: null })}
                    />
                    : null}

            </>
        )
    }
}
export default SearchEngine