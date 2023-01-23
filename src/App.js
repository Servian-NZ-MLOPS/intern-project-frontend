import React from "react";
import { Route, Routes } from 'react-router-dom';

import ErrorPage from "./routes/ErrorPage";
import Root from "./routes/Root";
import Studio from "./routes/Studio";
import Home from "./routes/Home";
import { useAuth0 } from "@auth0/auth0-react";
import { Loader } from '@aws-amplify/ui-react';

const App = () => {

  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    )
  };

  return (
    <Routes>
      <Route path="/" element={<Root />} />
      <Route path="/studio" element={<Studio />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;