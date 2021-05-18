import axios from 'axios'
import * as React from 'react'
import { config } from '../../../config'

import { Link as GatsbyLink } from 'gatsby'
import { Button, Box, Center, Flex, Heading, Text, Stack } from '@chakra-ui/react'
import { ArrowForwardIcon, ChatIcon } from '@chakra-ui/icons'

import CreateDiscussionForm from './CreateForm'
import DiscussionDetail from './Details'

type props = {
    productId: string,
    product: any
}

const ProductDiscussionList: React.FC<props> = ({ productId, product }) => {

    const [data, setData] = React.useState<boolean>(false)
    const [discussionLoaded, setDiscussionLoaded] = React.useState<string|undefined>(undefined)
    const [showCreateTopicForm, setShowCreateTopicForm] = React.useState<boolean>(false)
    React.useEffect(() => {
        getData()
    }, []);

    const getData = () => {
        axios.get(
            `${config.apiUrl}/discussion/product/${productId}`
        ).then((response) => setData(response.data))
    }

    return (
        <Box
            borderRadius='sm'
            p={6}
            position='sticky'
            top='10'
            bg='gray.100'
        >
            <Heading
                fontWeight='normal'
                as='h4'
                mb='8'
                fontSize={{
                    base: `2xl`,
                    lg: `3xl`
                }}
            >Toutes vos questions à propos de {product.title}
            </Heading>

            { data ?
                <Stack spacing={0}>
                    {data.map((item, index) =>
                        <>
                            <Flex
                                borderTop={ index !== 0 ? 'solid 1px' : 'none' }
                                borderTopColor='gray.300'
                                justify='space-between'
                                transition='padding 200ms ease-in-out'
                                p={ item._id === discussionLoaded  ? 6 : 2 }
                                bg={ item._id === discussionLoaded ? 'white' : 'none' }
                                onClick={()=>setDiscussionLoaded( item._id === discussionLoaded ? undefined : item._id )}
                                cursor='pointer'
                            >
                                <Text>{item.title}</Text>
                                <Center
                                    transition='transform 200ms ease-in-out'
                                    transform={item._id === discussionLoaded ? 'rotate(90deg)': 'none'}
                                ><ArrowForwardIcon /></Center>
                                
                            </Flex>
                            { discussionLoaded === item._id ?
                                <DiscussionDetail data={ item } />
                            : null}
                        </>
                    )}
                </Stack>
                : null}


            { !showCreateTopicForm ?
                <Center my={4}>
                    <Button
                        onClick={() => setShowCreateTopicForm(true)}

                        size='sm'
                        color='white'
                        bg='brand.green.500'
                        _hover={{ bg: 'brand.green.600' }}
                    >Poser une question <ChatIcon ml={4} /></Button>
                </Center>
                :
                <Box bg='whiteAlpha.500' p={6}>
                    <CreateDiscussionForm
                        data={data}
                        productId={ productId }
                        onDiscussionPosted={()=> {setShowCreateTopicForm( false ) ; getData()} }
                    />
                    {/* <pre>
                        {JSON.stringify(data, null, 1)}
                    </pre> */}
                </Box>
            }
        </Box>
    )
}

export default ProductDiscussionList