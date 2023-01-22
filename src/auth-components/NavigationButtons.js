import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton"
import SignupButton from "./SignUpButton"

const NavigationButtons = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="nav-bar__buttons">
      {!isAuthenticated && (
        <>
          <SignupButton />
          <LoginButton />
        </>
      )}
      {isAuthenticated && (
        <>
          <LogoutButton />
        </>
      )}
    </div>
  );
};

export default NavigationButtons