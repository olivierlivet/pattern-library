import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from '@chakra-ui/breadcrumb'
import { Button } from '@chakra-ui/button'
import { Box, Flex } from '@chakra-ui/layout'
import React, { FC, ReactElement } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import Wrapper from '../Layouts/Wrapper'
import Helmet from 'react-helmet'
import { config } from '../../config'
type props = {
    data: any
}

const Hierarchical: FC<props> = ({ data }):ReactElement => {

    const structuredItem = (label, slug, position) => (
        {
            "@type": "ListItem",
            "position": position,
            "item":
            {
              "@id": `${config.siteUrl}${slug}`,
              "name": `${label}`
            }
          }
    )
    const breadcrumbData = () => {

        
            let breadcrumbsItems = [];
            if( data.univers){
                breadcrumbsItems.push(
                    structuredItem( data.univers.title, data.univers.slug, 1 )
                )
            }

            if( data.category){
                breadcrumbsItems.push(
                    structuredItem( data.category.title, data.category.slug, 2 )
                )
            }

            if( data.variant){
                breadcrumbsItems.push(
                    structuredItem( data.variant.title, data.variant.slug, 3 )
                )
            }

            if( data.product){
                breadcrumbsItems.push(
                    structuredItem( data.product.title, data.product.slug, 4 )
                )
            }
        
            let breadcrumbsList = {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": breadcrumbsItems
            }
        
            return JSON.stringify(breadcrumbsList);

    }

    return (
        <>
            <Helmet>
                <script id="breadcrumbs-data" type="application/ld+json">{ breadcrumbData() }</script>
            </Helmet>
            <Wrapper>
                <Flex
                    py={{ base: 0, lg: 4 }}
                    display={{ base: 'none', lg:'flex' }}
                >
                    <Breadcrumb>
                        {data.univers ?
                            <BreadcrumbItem>
                                <BreadcrumbLink as={GatsbyLink} to={`${data.univers.slug}`}>{data.univers.title}</BreadcrumbLink>
                            </BreadcrumbItem>
                            : null}

                        {data.category ?
                            <BreadcrumbItem>
                                <BreadcrumbLink as={GatsbyLink} to={`${data.category.slug}`}>{data.category.title}</BreadcrumbLink>
                            </BreadcrumbItem>
                            : null}

                        {data.variant ?
                            <BreadcrumbItem>
                                <BreadcrumbLink as={GatsbyLink} to={`${data.variant.slug}`}>{data.variant.title}</BreadcrumbLink>
                            </BreadcrumbItem>
                            : null}
                        {data.product ?
                            <BreadcrumbItem>
                                <BreadcrumbLink as={GatsbyLink} to={`${data.product.slug}`}>{data.product.title}</BreadcrumbLink>
                            </BreadcrumbItem>
                            : null}
                    </Breadcrumb>
                </Flex>
            </Wrapper>
        </>
    )
}

export default Hierarchical