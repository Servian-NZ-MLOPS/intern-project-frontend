import React from 'react';
import './index.css';

import config from './aws-exports'
import { Amplify } from 'aws-amplify'
import { AmplifyProvider } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import App from "./App"
import { Auth0ProviderWithNavigate } from './auth0-provider-with-navigate';


// Amplify Stuff
Amplify.configure(config)

const container = document.getElementById("root");
const root = createRoot(container);

// Actual stuff
root.render(
  <React.StrictMode>
    <AmplifyProvider>
      <BrowserRouter>
        <Auth0ProviderWithNavigate>
          <App />
        </Auth0ProviderWithNavigate>
      </BrowserRouter>
    </AmplifyProvider>
  </React.StrictMode>
)
