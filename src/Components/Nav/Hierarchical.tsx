import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from '@chakra-ui/breadcrumb'
import { Button } from '@chakra-ui/button'
import { Box, Flex } from '@chakra-ui/layout'
import React, { FunctionComponent } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import Wrapper from '../Layouts/Wrapper'
type props = {
    data: object
}

const Hierarchical: FunctionComponent<props> = ({ data }) => {
    return (
        <Wrapper>


            <Flex py={{ base:0, lg:4}}>
                {/* <pre>
                { JSON.stringify( data, null, 1 )}
            </pre> */}
                <Button
                    size='sm'
                    mr={2}
                    as={GatsbyLink}
                    to='../'
                >
                    Retour
            </Button>
                <Breadcrumb
                // id='test'
                // alignItems='center'
                // justifyContent='center'
                >
                    {data.univers ?
                        <BreadcrumbItem>
                            <BreadcrumbLink as={GatsbyLink} to={`/fr${data.univers.slug}`}>{data.univers.title}</BreadcrumbLink>
                        </BreadcrumbItem>
                        : null}

                    {data.category ?
                        <BreadcrumbItem>
                            <BreadcrumbLink as={GatsbyLink} to={`/fr${data.category.slug}`}>{data.category.title}</BreadcrumbLink>
                        </BreadcrumbItem>
                        : null}

                    {data.variant ?
                        <BreadcrumbItem>
                            <BreadcrumbLink as={GatsbyLink} to={`/fr${data.variant.slug}`}>{data.variant.title}</BreadcrumbLink>
                        </BreadcrumbItem>
                        : null}

                </Breadcrumb>

            </Flex>
        </Wrapper>
    )
}

export default Hierarchical