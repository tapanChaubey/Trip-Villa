import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider,createRoutesFromElements,Route } from 'react-router-dom';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import { BrowserRouter } from 'react-router-dom';
import Product from './pages/Product.jsx';
import Show from './pages/Show.jsx';
import Cart from './pages/Cart.jsx';
import Order from './pages/Order.jsx';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path='/' element={<Home/>}/>
      <Route path="rooms" element={<Product />} /> 
      <Route path="show/:id" element={<Show />} />
      <Route path="cart" element={<Cart/>}/>
      <Route path="cart/:id" element={<Cart/>}/>
      <Route path='Order/:id' element={<Order/>}/>

    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router} />
  
);
