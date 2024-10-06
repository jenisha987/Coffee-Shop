import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import Error from './pages/Error';
import Cart from './components/Cart';

const App = () => {

  const [ cart, setCart ] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  }

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home addToCart={addToCart} />} />
      <Route path='*' element={<Error />} />
      <Route path='/cart' element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App