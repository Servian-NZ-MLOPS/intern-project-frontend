import React from "react";

import ErrorPage from "./routes/ErrorPage";
import Root from "./routes/Root";
import Home from "./routes/Home";
import InferencePage from "./routes/InferencePage";

import { 
  BrowserRouter,
  Routes,
  Route 
} from 'react-router-dom';
import GalleryPage from "./routes/GalleryPage";
import CanvasPage from "./routes/CanvasPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/home" element={<Home />} />
        <Route path="/inference" element={<InferencePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/canvas" element={<CanvasPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;