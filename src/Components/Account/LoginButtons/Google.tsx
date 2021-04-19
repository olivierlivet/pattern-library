import { Button } from '@chakra-ui/button';
import React from 'react';

import { GoogleLogin } from 'react-google-login';


const GoogleLoginButton = () => {
    const responseGoogle = (response) => {
        console.log(response);
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
                    borderRadius='2px'
                    fontFamily='DM Sans'
                >
                    Via Google
                </Button>
            )}
        />
    )
}

export default GoogleLoginButton