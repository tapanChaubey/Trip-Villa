import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Outlet} from 'react-router-dom';
import Footer from './components/Footer';
import { AuthProvider } from './context';
import { Auth0Provider } from '@auth0/auth0-react';

function App() {
  return (
    <AuthProvider>
      <Auth0Provider
        domain="dev-n8x2zemvymp1wm1s.us.auth0.com"
        clientId="w7OxDmeHNwWLfwrXXnQ8VoTZI6oJ9ekP"
        authorizationParams={{
          redirect_uri: window.location.origin
    }}
  >
    <Navbar />
    <Outlet />
    <Footer />
  </Auth0Provider>
  </AuthProvider>
  );
}

  

export default App
