import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@aws-amplify/ui-react";
import React from "react";

const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleSignUp = async () => {
    await loginWithRedirect({
      screen_hint: "signup",
      appState: {
        returnTo: "/studio",
      },
    });
  };

  return (
    <Button
        variation="primary"
        size="large"
        loadingText=""
        ariaLabel=""
    >
        Sign Up
    </Button>
  );
};

export default SignupButton