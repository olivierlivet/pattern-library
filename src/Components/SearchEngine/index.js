import React, { Component } from 'react'
import {
    Box
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
    
    componentDidMount(){
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
            .getEntries( baseQuery )
            .then(response =>
                // console.log( response )
                this.setState( { products: response.items } )

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
        const { products } = this.state

        return (
            <Box>
                <h1>Search engine</h1>
                <div>
                    {products && products.map(product =>
                        <Box>{product.fields.title}</Box>
                    )}
                </div>
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