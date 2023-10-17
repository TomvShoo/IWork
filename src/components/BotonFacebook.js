import React, { useEffect } from 'react';
import { FacebookLoginButton } from 'react-social-login-buttons';
import { LoginSocialFacebook } from 'reactjs-social-login';

const MyFacebookLogin = () => {

  return (
    <div>
        <LoginSocialFacebook
            appId='142875125558555'
            onResolve={(response) => {
                console.log(response);
            }}
            onReject={(error) => {
                console.log(error);
            }}>
            <FacebookLoginButton/>
        </LoginSocialFacebook>
    </div>
  );
};

export default MyFacebookLogin;

