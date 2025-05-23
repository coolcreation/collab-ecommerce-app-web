import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

import './index.css'
import App from './App.jsx'

const domain = 'dev-dwpgi30bfnfyjfbv.us.auth0.com'
const clientId = 'MCkfa8HnHZpNgBBEg9Z8nXwPq6TPvUit'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{redirect_uri: window.location.origin + "/user-dashboard"}}
      >
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Auth0Provider>
  </StrictMode>
)  