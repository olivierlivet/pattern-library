import React from 'react';

import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
// import FacebookLogin from 'react-facebook-login'
import { Button } from '@chakra-ui/button';

type props = {
    handleLogin: Function
}

const FacebookLoginButton = ({ handleLogin }) => {

    const responseFacebook = (reponse) => {
        console.log(reponse)
    }
    return (

        // <FacebookLogin
        //     appId="450168492748532"
        //     autoLoad={ false }
        //     fields="name,email,picture"
        //     onClick={() => { console.log('click') }}
        //     callback={(response) => {
        //         console.log(response);
        //     }}
        // />

        // <FacebookLogin
        //     appId="450168492748532"
        //     autoLoad={ true }
        //     fields="name,email,picture"
        //     // onClick={() => { console.log('click') }}
        //     callback={(response) => {
        //         console.log(response);
        //     }}
        //     render={props => (
        //         <Button
        //             // onClick={()=> props.onClick}
        //             border='solid 1px'
        //             borderColor='facebook.700'
        //             borderRadius='2px'
        //             isLoading={ props.isSdkLoaded || props.isProcessing}
        //         >
        //             Via Facebook
        //         </Button>
        //       )}
        // />

        // <FacebookLogin
        //     appId={process.env.FACEBOOK_APP_ID}
        //     autoLoad={true}
        //     callback={responseFacebook}
        //     render={renderProps => (
        //         <button onClick={renderProps.onClick}>This is my custom FB button</button>
        //     )}
        // />

        <FacebookLogin
            appId={process.env.FACEBOOK_APP_ID}
            fields="name,email,picture"
            autoLoad={false}
            callback={(response) => handleLogin(response)}
            render={renderProps => (
                <Button
                    onClick={renderProps.onClick}
                    borderRadius='4px'
                    color='white'
                    border='solid 1px'
                    borderColor='facebook.700'
                    bg='facebook.700'
                    isLoading={renderProps.isProcessing}
                    _hover={{
                        color: 'white',
                        bg: 'facebook.300'
                    }}
                >
                    Via Facebook
                </Button>)}
        />


    )
}




export default FacebookLoginButton