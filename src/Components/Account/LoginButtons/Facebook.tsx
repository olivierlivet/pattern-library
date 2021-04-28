import React from 'react';

import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
// import FacebookLogin from 'react-facebook-login'
import { Button } from '@chakra-ui/button';


const FacebookLoginButton = () => {
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

        <FacebookLogin
  appId={ process.env.FACEBOOK_APP_ID }
  autoLoad={ true }
//   callback={responseFacebook}
  render={renderProps => (
    <button onClick={renderProps.onClick}>This is my custom FB button</button>
  )}
/>

    )
}




export default FacebookLoginButton