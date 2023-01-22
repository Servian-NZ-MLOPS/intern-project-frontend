import React from "react";
import { Button } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({
      returnTo: window.location.origin,
    });
  };


  return (
    <Button
      variation="primary"
      size="large"
      loadingText=""
      ariaLabel=""
      onClick={handleLogout}
    >
      Log Out
    </Button>
  );
};

export default LogoutButton;