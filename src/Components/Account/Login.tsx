import { Box } from '@chakra-ui/layout'
import React, { FunctionComponent } from 'react'
import FacebookLogin from 'react-facebook-login';

type props = {

}

const LoginForm: FunctionComponent<props> = ({ }) => {
    return (
        <Box>
            Login Form

            <FacebookLogin
                appId="450168492748532"
                autoLoad={true}
                fields="name,email,picture"
                onClick={() => { console.log('click') }}
                callback={(response) => {
                    console.log(response);
            }} />


        </Box>
    )
}

export default LoginForm