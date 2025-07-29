import React from 'react';
import Hero from '../components/Hero';
import Product from './Product';
import { Link } from 'react-router-dom';

const Home = () => {
   
    return (
       <div>
        <Hero />
        <Product />
        </div>
    );
}

export default Home;