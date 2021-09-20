import { Box, Stack } from '@chakra-ui/layout'
import { navigate } from '@reach/router'
import React, { FC } from 'react'
import ProductCard from '../Product/CardSmall'

type props = {
    data: any
}

const StaticProductsList: FC<props> = ({ data }) => {
    return (
        <Stack
            id='products'
            spacing={8}
            maxW='700px'
            py={10}
            mx='auto'
        >
            { data ? data.map(item =>
            <>
                <ProductCard
                    title={ item.node.title }
                    backendDocumentId={ item.node.backendDocumentId }
                    level={ item.node.level }
                    price={ item.node.price }
                    slug={ item.node.slug }
                    pictures={ item.node.pictures ? item.node.pictures : null }
                    onOpen={()=> navigate( item.node.slug ) }
                />
                {/* <pre>{ JSON.stringify(node, null, 1)}</pre> */}
                </>
            ) : null}
            {/* <pre>
                { JSON.stringify( data, null, 1 )}
            </pre> */}
        </Stack>
    )
}

export default StaticProductsList