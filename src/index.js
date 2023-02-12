import React from 'react';
import './index.css';

import config from './aws-exports'
import { Amplify } from 'aws-amplify'
import { AmplifyProvider, ThemeProvider } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

import { createRoot } from "react-dom/client"

import App from "./App"


// Amplify Stuff
config.oauth.redirectSignIn = `${window.location.origin}/`;
config.oauth.redirectSignOut = `${window.location.origin}/home`;
Amplify.configure(config)

const container = document.getElementById("root");
const root = createRoot(container);

// Actual stuff
root.render(
  <React.StrictMode>
    <AmplifyProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
    </AmplifyProvider>
  </React.StrictMode>
)
