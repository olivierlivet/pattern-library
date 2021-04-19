import { Input } from '@chakra-ui/input';
import { Box } from '@chakra-ui/layout'
import React, { FunctionComponent } from 'react'
import FacebookLogin from 'react-facebook-login';

type props = {

}

const LoginForm: FunctionComponent<props> = ({ }) => {
    return (
        <Box>
            <Input name='email' placeholder='email' />
        </Box>
    )
}

export default LoginForm