import React, { Component } from 'react'
import {
    Box,
    Stack,
    Center,
    Spinner
} from '@chakra-ui/react';
import { authenticationService } from '../../Service/auth'


type QuickLoginState = {
    isProcessing: Boolean
  }

export default class QuickLogin extends Component<{}, QuickLoginState> {

    constructor(props) {
        super(props)
        this.state = {
            isProcessing: null
        }
    }

    componentDidMount() {
        this.setState({ isProcessing: true })
        console.log('quick login ', this.props)
        authenticationService.loginPasswordLess(this.props.token)
            .then(() => {
                console.log('Auth finish')
            })
    }

    render() {
        const { isProcessing } = this.state
        return (
            <Center h='calc(100vh - 100px)'>
                <Stack
                    p={{ base: 4, lg: 6 }}
                    spacing={{ base: 2, lg: 4 }}
                >
                    <Box>
                        {isProcessing ?
                            <Center>
                                <Spinner size='sm' />
                            </Center>
                        : null}
                    </Box>
                </Stack>
            </Center>
        )
    }
}