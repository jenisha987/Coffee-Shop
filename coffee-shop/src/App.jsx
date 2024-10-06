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

  const addToCart = (data) => {
    console.log(data)
    setCart([ ...cart, {...data, quantity: 1}])
  }

  return (
    <BrowserRouter>
    <Navbar count={cart.length} />
    <Routes>
      <Route path='/' element={<Home addToCart={addToCart} cart={cart} />} />
      <Route path='*' element={<Error />} />
      <Route path='/cart' element={<Cart cart={cart} />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App