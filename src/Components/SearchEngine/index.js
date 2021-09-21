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
    Spinner,
    Stack,
} from '@chakra-ui/react'

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from "@chakra-ui/react"

import config from '../../Utils/config'
import ProductCardSmall from '../Product/CardSmall'
import ProductCardLarge from '../Product/CardLarge'
import RichContent from '../../Components/RichContent'

import InfiniteScroll from 'react-infinite-scroller';


import CissorsLoader from '../Loaders/Cissors'

import Filters from './filters'
import RefinerFilters from './RefineFilters'
import Wrapper from '../Layouts/Wrapper'
import ShoppingBagIcon from '../../Images/Icons/ShoppingBag'

import ProductsCountIndicator from './ProductsCountIndicator'
import CartButton from '../Cart/MainButton'

import CategoryChoiceButton from './CategoryChoiceButton'
import FilterButton from './FilterButton'
import MainFiltersButton from './MainFiltersButton'
import VariantFiltersButtons from './VariantFiltersButtons'
import FavoriteButton from '../Favorite/MainButton'

import getVariants from '../../Data/getVariants'
import UserNav from '../Nav/User'

const contentful = require("contentful");
const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

class SearchEngine extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            hasMore: false,
            currentPage: 1,
            variants: null,
            products: null,
            singleProduct: null,
            mainFilters: {
                univers: null,
                category: null,
                variants: []
            },
            refineFilters: {},
            showFilter: false
        }
    }

    componentDidMount() {
        this.updateMainFilters('category', this.props.mainFilters.category)
        // this.getVariants()
        this.loadFromCMS()
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
        if (this.state.mainFilters.variants && this.state.mainFilters.variants.length) {
            return (
                { "fields.variant.sys.id[in]": this.state.mainFilters.variants.join(',') }
            )
        }
        return null
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
            pocket,
            asymetrical,
            length,
            waist,
            level
        } = this.state.refineFilters

        let refineFilters = {}

        if (type) {
            return ({ "fields.format[in]": type.join(',') })
        }

        if (pocket && pocket.length === 1) {
            refineFilters["fields.pocket"] = pocket[0] === 'with' ? true : false;
        }

        if (asymetrical && asymetrical.length === 1) {
            refineFilters["fields.asymetrical"] = asymetrical.join(',');
        }

        if (length && length.length >= 1) {
            refineFilters["fields.length[in]"] = length.join(',');
        }

        if (waist && waist.length >= 1) {
            refineFilters["fields.waist[in]"] = waist.join(',');
        }

        if (level && level.length >= 1) {
            refineFilters["fields.level[in]"] = level.join(',');
        }
        console.log('refineFilters', refineFilters)
        return refineFilters;

    }

    handleUpdateRefineFilters(key, value) {
        let { refineFilters } = this.state
        refineFilters[key] = value
        this.setState({ "refineFilters": refineFilters, currentPage: 1 },
            () => {
                this.loadFromCMS( true);
                //  this.updateVariants();
            }
        )
    }

    getVariants() {
        console.log('update variants with category', this.state.mainFilters.category)
        const variants = getVariants(this.state.mainFilters.category).then((response) => this.setState({ variants: response.items }));
    }

    loadFromCMS( reset ) {
        // alert("Load from CMS");
        const { currentPage, products } = this.state
        // console.log('LoadProducts', this.state.mainFilters)
        this.setState({ isLoading: true, hasMore: false });
        let baseQuery = {
            content_type: "product",
            ...this.categoryFilter(this.state.mainFilters.category),
            ...this.variantFilter(this.state.mainFilters.variant),
            ...this.refineFilters(this.state.refineFilters),

            limit: 10,
            skip: 10 * (currentPage - 1),

        }

        client
            .getEntries(baseQuery)
            .then(response =>
                // console.log( response )
                this.setState({

                    products: reset ? response.items : products.concat(response.items),
                    isLoading: false,
                    hasMore: response.total > (currentPage * 10) ? true : false,
                    totalProducts: response.total,

                })

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
    // refineFiltersCount() {
    //     const { refineFilters } = this.state
    //     var size = 0,
    //         key;
    //     for (key in refineFilters) {
    //         if (refineFilters.hasOwnProperty(key)) size++;
    //     }
    //     return size;
    // }

    handleChange(e) {
        this.setState({ products: [] })

        // setTimeout(()=>{
        let mainFilters = this.state.mainFilters
        console.log(e.target.name, e.target.value)
        mainFilters[e.target.name] = e.target.value
        if (e.target.name === 'category') { delete mainFilters.variant }
        this.setState({ mainFilters: mainFilters }, this.loadFromCMS())
        // }, 1000)


    }

    updateVariants(value) {
        console.log(`Update variant ${value}`)
        let mainFilters = this.state.mainFilters;
        let currentVariants = this.state.mainFilters.variants;

        if (currentVariants && currentVariants.includes(value)) {
            for (let index = 0; index < currentVariants.length; index++) {
                if (currentVariants[index] === value) {
                    currentVariants.splice(index, 1);
                }

            }
        } else {
            if (currentVariants && currentVariants.length) {
                currentVariants.push(value)
            } else {
                currentVariants = [value]
            }

            mainFilters['variants'] = currentVariants


        }

        this.setState({
            mainFilters: mainFilters
        }, this.loadFromCMS())
        // this.setState({ products: [] })

    }

    updateMainFilters(key, value) {
        this.setState({ products: [] })


        let mainFilters = this.state.mainFilters
        console.log(key, value)
        mainFilters[key] = value
        if (key === 'category') { delete mainFilters.variant }
        this.setState({ mainFilters: mainFilters },
            () => {
                this.getVariants()
                this.loadFromCMS();
            }
        )

    }

    nextPage() {
        // alert('load next page')
        const { currentPage, products } = this.state
        this.setState({
            currentPage: currentPage + 1,
            hasMore: false
        },
            () => {
                this.loadFromCMS();
            }
        );
        // if( products.length > 0 ){
        //     this.setState({ currentPage : currentPage+1, hasMore: false },
        //         ()=>{
        //             this.loadFromCMS()
        //         }
        //     )
        // }
    }

    render() {
        const {
            products,
            singleProduct,
            mainFilters,
            refineFilters,
            showFilter,
            variants,
            isLoading,
            hasMore,
            totalProducts,
            currentPage
        } = this.state
        return (
            <>
                <Grid
                    templateColumns={{
                        base: `100%`,
                        lg: `320px 1fr`,
                        xl: `400px 1fr`
                    }}
                    minH='100vh'
                >
                    <Box
                        bg='white'
                        p={{ base: 0, lg: 0 }}

                    >
                        <Box>currentPage : {currentPage} </Box>
                        <Box
                            bg={{ base: 'white', lg: 'none' }}

                            spacing={{ base: 4, lg: 8 }}

                            display={{ base: showFilter ? 'block' : 'none', lg: 'block' }}
                            position={{ base: 'fixed', lg: 'sticky' }}
                            top={{ base: '0px', lg: 10 }}
                            left={0}
                            bottom={0}
                            right={0}
                            // pt={32}
                            zIndex='banner'

                            id='filters'

                            p={{ base: 0, lg: 0 }}
                            pt={{ base: 20, lg: 0 }}

                            maxH={{ base: '100vh', base: 'auto' }}
                            overflowY={{ base: 'scroll', lg: 'auto' }}

                        >
                            <Stack>
                                <Box px={4}>

                                    <MainFiltersButton
                                        setCategory={(value) => this.updateMainFilters('category', value)}
                                        label={'Femme/Jupe'}
                                        display={{ base: 'none', lg: 'block' }}
                                        size='large'
                                    />
                                </Box>
                                <Box px={4}>

                                    <VariantFiltersButtons
                                        key={variants}
                                        variants={variants}
                                        selectedVariant={mainFilters.variants}
                                        setVariant={(value) => this.updateVariants(value)}
                                    />
                                </Box>

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
                            </Stack>
                        </Box>
                    </Box>
                    <Box>
                        <Box
                            zIndex='banner'
                            position='fixed'
                            top='0'
                            left={{
                                base: 0,
                                lg: '320px',
                                xl: '400px'
                            }}
                            right='0'
                            p={{ base: 2, lg: 10 }}
                            pb={{ base: 4, lg: 10 }}
                            pt={{ base: 4, lg: 10 }}

                            bg='linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7693452380952381) 70%, rgba(255,255,255,1) 100%)'

                        >
                            <Flex justify='space-between'>

                                <HStack
                                    display={{ base: 'flex', lg: 'none' }}
                                >
                                    <MainFiltersButton
                                        setCategory={(value) => this.updateMainFilters('category', value)}
                                        label={'Femme/Jupe'}
                                        display={{ base: 'block', lg: 'none' }}
                                        size='small'
                                    />
                                    {/* <CategoryChoiceButton
                                            mainFilters={mainFilters}
                                            categories={Filters.getCategoryOptions()}
                                            variants={Filters.getVariantOptions(this.state.mainFilters.category)}

                                            setUnivers={(value) => this.updateMainFilters('univers', value)}
                                            setCategory={(value) => this.updateMainFilters('category', value)}
                                        /> */}
                                    <FilterButton
                                        onClick={() => this.setState({ showFilter: !this.state.showFilter })}
                                    />
                                </HStack>


                                <ProductsCountIndicator count={totalProducts ? totalProducts : false} />


                                <HStack spacing={2} justify='flex-end' w={{ base: 'auto', lg: '145px' }}>
                                    <UserNav />
                                </HStack>
                            </Flex>
                        </Box>


                        <InfiniteScroll
                            // key={filters}
                            useWindow={true}
                            pageStart={0}
                            loadMore={this.nextPage.bind(this)}
                            hasMore={hasMore}
                            threshold={1000}
                            loader={<div key={0}>loading</div>}
                        >
                            <VStack
                                w='100%'
                                minH='100vh'
                                py={{ base: 0, lg: 20 }}
                                // bg='gray.100'
                                spacing={{ base: 5, lg: 10 }}
                                shouldWrapChildren={true}
                                bg='gray.50'
                                // p={{ base: 4, lg: 4 }}
                                px={{ base: 4, lg: 0 }}
                                py={{ base: 24, lg: 24 }}

                                key={"infinitescroll-0"}
                            >


                                {products && products.length ?
                                    products.map(product =>

                                        <ProductCardSmall
                                            key={product.sys.id}
                                            productId={product.sys.id}
                                            backendDocumentId={product.fields.backendDocumentId}
                                            title={product.fields.title}
                                            price={product.fields.price}
                                            level={product.fields.level}
                                            rating={product.fields.rating}
                                            editor={product.fields.editor}
                                            pictures={product.fields.pictures}
                                            intro={<RichContent data={product.fields.intro} />}

                                            //Actions
                                            // onOpen={() => console.log('open')}
                                            onOpen={() => this.setState({ singleProduct: product })}
                                        />

                                    ) :
                                    isLoading ?

                                        <Box> <CissorsLoader /> On cherche vos patrons...</Box>
                                        :
                                        <Box ><Center minH='80vh'><Text color='gray.500'>Oupsy, on a pas encore de patron qui correpondent à ces critères :/</Text></Center></Box>
                                }

                            </VStack>
                        </InfiniteScroll>



                    </Box>


                </Grid>

                {singleProduct ?
                    <ProductCardLarge
                        product={singleProduct}
                        onClose={() =>
                            this.setState({ singleProduct: null })
                            // console.log('onclose')
                        }
                    />
                    : null}

            </>
        )
    }
}
export default SearchEngine