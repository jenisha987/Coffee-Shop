import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, json, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import Error from './pages/Error';
import Cart from './components/Cart';
import { ProductDetail } from './components/ProductDetail';

const App = () => {

  const LOCAL_STORAGE_KEY = "cart";

  const [ cart, setCart ] = useState(() => {
    const storedCart = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const addToCart = (data) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(item => item.id === data.id);
      if (existingItemIndex !== -1) {
        return prevCart.map((item, index) => {
          return index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      } else {
        return [ ...prevCart, {...data, quantity: 1}]
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      return prevCart.filter(item => item.id !== id);
    })
  }

  const totalItemsInCart = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <BrowserRouter>
    <Navbar count={totalItemsInCart} />
    <Routes>
      <Route path='/' element={<Home addToCart={addToCart} cart={cart} />} />
      <Route path='*' element={<Error />} />
      <Route path='/cart' element={<Cart cart={cart} setCart={setCart} removeFromCart={removeFromCart} />} />
      <Route path='/productdetail/:id' element={<ProductDetail />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App