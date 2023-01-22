import React from "react";
import { Route, Routes } from 'react-router-dom'

import LoginButton from "./auth-components/LoginButton";
import ErrorPage from "./ErrorPage";
import Root from "./routes/Root";
import Studio from "./routes/Studio";
import { useAuth0 } from "@auth0/auth0-react"
import { Loader } from '@aws-amplify/ui-react'

export const App = () => {

  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    )
  }

  return (
    <Routes>
      <Route path="/" element={<Root />} />
      <Route path="/studio" element={<Studio />} />
      <Route path="/login" element={<LoginButton />} />
      {/* <Route path="/callback" element={<CallbackPage />} /> */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};