import axios from 'axios'
import * as React from 'react'
import { config } from '../../../config'

import { Link as GatsbyLink } from 'gatsby'
import { Button, Box, Center, Flex, Heading, Text, Stack } from '@chakra-ui/react'
import { ArrowForwardIcon, ChatIcon } from '@chakra-ui/icons'

import CreateDiscussionForm from './CreateForm'
import DiscussionDetail from './CreateForm'
import ReplyForm from './ReplyForm'
import DiscussionMessage from './Message'

type props = {
    data: any
}

const DiscussionDetails: React.FC<props> = ({ data }) => {

    const [discussionLoaded, setDiscussionLoaded] = React.useState<string | undefined>(undefined)
    const [showCreateTopicForm, setShowCreateTopicForm] = React.useState<boolean>(false)
    // React.useEffect(() => {
    //     getData()
    // }, []);

    // const getData = () => {
    //     axios.get(
    //         `${config.apiUrl}/discussion/product/${productId}`
    //     ).then((response) => setData(response.data))
    // }

    return (
        <Box
            borderRadius='sm'
            px={6}
            pb={6}
            bg='white'
        >
            {/* <Text>
                <Text as='span' color='gray.600'>
                    {data.user.firstName}, le {data.createdAt}&nbsp;:
                </Text>
                {' '}{data.content}
            </Text> */}

            {data.messages && data.messages.length ?
                <Stack my={ 6 } spacing={5}>
                    {data.messages.map(message =>
                        <DiscussionMessage data={ message } />
                        // <pre>
                        //     {JSON.stringify(message, null, 1)}
                        // </pre>
                    )}
                </Stack>
            : null}

            <ReplyForm
                discussionId={data._id}
                onMessagePosted={() => console.log('message posted')}
            />

        </Box>
    )
}

export default DiscussionDetails