import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Outlet} from 'react-router-dom';
import Footer from './components/Footer';
import { AuthProvider } from './context';


function App() {
  return (
    <AuthProvider>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </AuthProvider>
  );
}

  

export default App
