import React from 'react';

import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { Button } from '@chakra-ui/button';


const FacebookLoginButton = () => {
    return (
        <FacebookLogin
            appId="450168492748532"
            autoLoad={true}
            fields="name,email,picture"
            onClick={() => { console.log('click') }}
            callback={(response) => {
                console.log(response);
            }}
            render={renderProps => (
                <Button
                    onClick={renderProps.onClick}
                    border='solid 1px'
                    borderColor='facebook.700'
                    borderRadius='2px'
                >
                    Via Facebook
                </Button>
              )}
        />
    )
}

export default FacebookLoginButton