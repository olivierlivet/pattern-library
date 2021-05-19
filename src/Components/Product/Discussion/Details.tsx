import axios from 'axios'
import * as React from 'react'
import { Button, Box, Center, Flex, Heading, Text, Stack } from '@chakra-ui/react'


import ReplyForm from './ReplyForm'
import DiscussionMessage from './Message'
import { authenticationService } from '../../../Service/auth'

type props = {
    data: any,
    reloadData: Function
}

const DiscussionDetails: React.FC<props> = ({ data, reloadData }) => {

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
            px={0}
            pb={6}
            bg='white'
        >
            {/* <Text>
                <Text as='span' color='gray.600'>
                    {data.user.firstName}, le {data.createdAt}&nbsp;:
                </Text>
                {' '}{data.content}
            </Text> */}
            <DiscussionMessage
                isFirstMessage={ true }
                data={{
                    user: data.user,
                    content: data.content
                }}
            />

            {data.messages && data.messages.length ?
                <Stack spacing={4}>
                    {data.messages.map(message =>
                        <DiscussionMessage
                            key={ `discussionMessage-${message._id}` }
                            data={ message }
                            isFirstMessage={ false }
                        />
                    )}
                </Stack>
            : null}

            { authenticationService.getUser() ?
                <ReplyForm
                    discussionId={data._id}
                    onMessagePosted={() => reloadData()}
                />
            : null}

        </Box>
    )
}

export default DiscussionDetails