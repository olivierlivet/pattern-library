import { Box, Link, Text } from '@chakra-ui/layout'
import React, { FunctionComponent } from 'react'

type props = {
    title: string,
    url: string
}

const SharingButtons:FunctionComponent<props> = ({ title, url }) => {
    return(
        <Text fontSize='sm'>
            Partager&nbsp;:{' '}
            <Link
                color='facebook.700'
                borderBottom='solid 2px'
                borderBottomColor='facebook.700'
                href={ 
                    `http://www.facebook.com/sharer.php?u=${ url }&p=${ title }`
                 }
            >
                Facebook
            </Link>
            {' '}
            <Link
                color='red.600'
                borderBottom='solid 2px'
                borderBottomColor='red.600'
                href={ 
                    `http://pinterest.com/pin/create/button/?url=${ url }&description=${ title }`
                 }
            >
                Pinterest
            </Link>
        </Text>
    )
}

export default SharingButtons

// http://www.facebook.com/sharer.php?u=/node/[nid]&p=[title]
// http://pinterest.com/pin/create/button/?url=/node/[nid]&description=[title]
