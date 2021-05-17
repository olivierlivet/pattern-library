import axios from 'axios'
import * as React from 'react'
import { config } from '../../../config'
import InspirationCard from './Card'
import { Link as GatsbyLink } from 'gatsby'

import {
    Box,
    Heading,
    Link,
    Stack,
    Text
} from '@chakra-ui/layout'


type props = {
    productId: string,
    product: any
}

const InspirationsList: React.FC<props> = ({ productId, product }) => {

    const [data, setData] = React.useState(false)
    React.useEffect(() => {
        getData()
    }, []);

    const getData = () => {
        axios.get(
            `${config.apiUrl}/inspiration/product/${productId}`
        ).then((response) => setData(response.data))
    }

    return (
        <Stack
            spacing={{ base: 6, lg: 8 }}
            position='sticky'
            top={10}
        >
            { data ?
                <>
                    <Heading
                        fontWeight='normal'
                        as='h4'
                        fontSize={{
                            base:`2xl`,
                            lg:`3xl`
                        }}
                    >Les exemples de réalisation de {product.title} de la communeauté</Heading>
                    <Text>Nous aimons vous proposer des exemples de réalisation pour booster votre envie et votre créativité. Merci aux couturières qui ont généreusement partagé le résultat de leur projet&nbsp;:</Text>
                    { data.map(item =>
                        <InspirationCard
                            data={item}
                            product={product}
                        />
                    )}
                </>
                : null}

            <Text
                color='gray.500'
                pt={ 4 }
                borderTop='solid 1px'
                borderTopColor='gray.300'
            >
                Vous avez cousu {product.title} ?
                {' '}<Link color='gray.700' as={GatsbyLink} to={`/fr/contribution/evaluation/${product.backendDocumentId}`}>
                    Partagez votre réalisation
                </Link>
                {' '}avec la communeauté.
            </Text>
        </Stack>
    )
}

export default InspirationsList