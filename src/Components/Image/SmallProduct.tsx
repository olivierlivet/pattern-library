import React, { FC } from 'react'

import { Image } from '@chakra-ui/react'
import { config } from '../../config'

type props = {
    title: String,
    path: String
}

const SmallProductImage:FC<props> = ({ title, path }) => (
    <Image
        alt={ title }
        src={`${config.imageCdnBaseUrl}${path}?twic=v1/cover=30x30/format=webp/quality=60`}
    />
)

export default  SmallProductImage