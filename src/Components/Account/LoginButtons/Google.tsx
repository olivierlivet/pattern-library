import { Button } from '@chakra-ui/button';
import React, { FunctionComponent } from 'react';

import { GoogleLogin } from 'react-google-login';

type props = {
    handleLogin : Function
}

const GoogleLoginButton:FunctionComponent< props > = ({ handleLogin }) => {
    const responseGoogle = (response) => {
        // console.log(response);
        handleLogin(
            {
                email: response.profileObj.email

// email: "oli.livet@gmail.com"
// familyName: "Livet"
// givenName: "Olivier"
// googleId: "114413314934976709876"
// imageUrl: "https://lh3.googleusercontent.com/a-/AOh14GjrEe7R9UiJgM6fUhyyhv4kUr9rmYbMvA4reYPrYw=s96-c"
// name: "Olivier Livet"
            }
        )
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