import React from "react";
import { Button } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/"
      },
    });
  };
  
  return (
    <Button
      variation="primary"
      size="large"
      loadingText=""
      onClick={handleLogin}
      ariaLabel=""
    >
      Log In
    </Button>
  )
};

export default LoginButton;