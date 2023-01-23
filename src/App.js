import React from "react";

import ErrorPage from "./routes/ErrorPage";
import Root from "./routes/Root";
import Studio from "./routes/Studio";
import Home from "./routes/Root";
import { Flex, Link } from '@aws-amplify/ui-react';

import { 
  BrowserRouter,
  Routes,
  Route 
} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;