import * as React from 'react'
import { 
    Box,
    Stack
} from '@chakra-ui/react'


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

    return (
        <Box
            borderRadius='sm'
            px={0}
            pb={6}
            bg='white'
        >
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