import axios from 'axios'
import * as React from 'react'
import { config } from '../../../config'

import { Link as GatsbyLink } from 'gatsby'
import { Button, Box, Center, Flex, Heading, Text, Stack, Link } from '@chakra-ui/react'
import { ArrowForwardIcon, ChatIcon } from '@chakra-ui/icons'

import CreateDiscussionForm from './CreateForm'
import DiscussionDetail from './Details'
import { authenticationService } from '../../../Service/auth'
import QuickLogin from '../../Account/QuickLogin'
import FastLoginForm from '../../FastLoginForm'

type props = {
    productId: string,
    product: any
}

const ProductDiscussionList: React.FC<props> = ({ productId, product }) => {

    const [data, setData] = React.useState<boolean>(false)
    const [discussionLoaded, setDiscussionLoaded] = React.useState<string | undefined>(undefined)
    const [showCreateTopicForm, setShowCreateTopicForm] = React.useState<boolean>(false)
    const [showQuickLogin, setShowQuickLogin] = React.useState<boolean>(false)
    const [isUserLogged, setIsUserLogged] = React.useState<boolean>(false)

    React.useEffect(() => {
        getData()
        if (authenticationService.getUser()) { setIsUserLogged(true) }
    }, []);

    const getData = () => {
        axios.get(
            `${config.apiUrl}/discussion/product/${productId}`
        ).then((response) => setData(response.data))
    }

    return (
        <Box
            borderRadius='sm'
            p={{ base:4, lg:6 }}
            position='sticky'
            top='10'
            bg='gray.100'
        >
            <Heading
                fontWeight='normal'
                as='h4'
                mb='4'
                fontSize={{
                    base: `2xl`,
                    lg: `3xl`
                }}
            >Toutes vos questions à propos de {product.title}
            </Heading>

            { data && data.length ?
                <Box>
                    {data.map((item, index) =>
                        <Box
                            key={`discussionList-${item._id}`}
                            bg={item._id === discussionLoaded ? 'white' : 'none'}
                            boxShadow={item._id === discussionLoaded ? 'sm' : 'none'}
                            borderRadius={item._id === discussionLoaded ? 'md' : 'none'}
                            borderTop={ (index !== 0 && item._id !== discussionLoaded) ? 'solid 1px' : 'none'}
                            borderTopColor='gray.200'

                            _hover={{
                                bg:'whiteAlpha.600'
                            }}
                        >
                            <Flex
                                justify='space-between'
                                transition='padding 200ms ease-in-out'
                                p={item._id === discussionLoaded ? 6 : 2}
                                onClick={() => setDiscussionLoaded(item._id === discussionLoaded ? undefined : item._id)}
                                cursor='pointer'
                            >
                                <Text
                                    fontSize={{
                                        base:'sm',
                                        lg:'normal'
                                    }}
                                >{item.title}</Text>
                                <Center
                                    transition='transform 200ms ease-in-out'
                                    transform={item._id === discussionLoaded ? 'rotate(90deg)' : 'none'}
                                ><ArrowForwardIcon /></Center>

                            </Flex>
                            {discussionLoaded === item._id ?
                                <Box
                                    my={0}
                                >
                                    <DiscussionDetail
                                        data={item}
                                        reloadData={() => getData()}
                                    />
                                </Box>
                                : null}
                        </Box>
                    )}
                </Box>
                :
                <Box
                    my={4}
                >
                    <Text fontSize='sm'>
                        Vous hésitez à choisir ce patron où vous êtes en train de le réaliser : posez vos questions, elles seront relayées aux couturières qui connaissent bien ce modèle.
                    </Text>

                </Box>
            }


            { !showCreateTopicForm ?
                <Box>
                    {!authenticationService.getUser() ?
                        <Box
                            borderTop='solid 1px'
                            borderTopColor='gray.200'
                            pt={5}
                            fontSize='sm'
                        >
                            <Text
                                color='gray.500'
                                textAlign='center'
                            >
                                Pour participer à la discussion, <Link onClick={() => setShowQuickLogin(true)} color='gray.600'>identifiez-vous</Link>.
                            </Text>
                        </Box>
                        :
                        <Button
                            onClick={() => setShowCreateTopicForm(true)}
                            mt={2}
                            size='sm'
                            color='white'
                            bg='brand.green.500'
                            _hover={{ bg: 'brand.green.600' }}
                        >Poser une question <ChatIcon ml={4} />
                        </Button>

                    }
                </Box>
                :
                <Box bg='whiteAlpha.500' p={6}>
                    <CreateDiscussionForm
                        data={data}
                        productId={productId}
                        onDiscussionPosted={() => { setShowCreateTopicForm(false); getData() }}
                    />
                    {/* <pre>
                        {JSON.stringify(data, null, 1)}
                    </pre> */}
                </Box>
            }

            { showQuickLogin ?
                <FastLoginForm
                    onCancel={() => setShowQuickLogin(false)}
                    onLogin={() => setIsUserLogged(true)}
                    onClose={() => setShowQuickLogin(false)}
                    title={"Participez à la discussion"}
                />
                : null}
        </Box>
    )
}

export default ProductDiscussionList