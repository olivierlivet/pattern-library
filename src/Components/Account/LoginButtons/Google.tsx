import { Button } from '@chakra-ui/button';
import React, { FunctionComponent } from 'react';

import { GoogleLogin } from 'react-google-login';

type props = {
    handleLogin : Function
}

const GoogleLoginButton:FunctionComponent< props > = ({ handleLogin }) => {
    const responseGoogle = (response) => {
        // console.log(response);
        handleLogin( response.profileObj )
    }
    return (
        <GoogleLogin
            clientId="55523564131-074cqlp79q4pv4rgkm2rqfu58474l4ls.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}

            render={renderProps => (
                <Button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    isLoading={ renderProps.isProcessing }
                    border='solid 1px'
                    borderColor='#DE5246'
                    bg='#DB4437'
                    color='white'

                    borderRadius='4px'
                    fontFamily='DM Sans'
                    w='full'
                    _hover={{
                        bg:'#f17e74',
                        color:'white'
                    }}
                >
                    Avec Google
                </Button>
            )}
        />
    )
}

export default GoogleLoginButton