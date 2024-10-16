import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, json, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import Error from './pages/Error';
import Cart from './components/Cart';
import { ProductDetail } from './components/ProductDetail';
import ProductPage from './components/ProductPage';
import Login from './components/Login';
import Register from './components/Register';
import ProtectedRoute from './services/ProtectedRoute';

const App = () => {

  const [loggedInUser, setLoggedInUser ] = useState(() => JSON.parse(localStorage.getItem("loggedInUser"))) ;
  const LOCAL_STORAGE_KEY = `cart_${loggedInUser?.email}`;

  const [ cart, setCart ] = useState(() => {
    const storedCart = loggedInUser ? localStorage.getItem(LOCAL_STORAGE_KEY) : null;
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    if (loggedInUser) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cart));
    }
  }, [cart, loggedInUser, LOCAL_STORAGE_KEY]);


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
    <Navbar count={totalItemsInCart} loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
    <Routes>
      <Route path='/' element={<Home addToCart={addToCart} />} />
      <Route path='/' element={<ProtectedRoute />} >
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} removeFromCart={removeFromCart} />} />
      </Route>
      <Route path='*' element={<Error />} />
      <Route path='/login' element={<Login setLoggedInUser={setLoggedInUser} />} />
      <Route path='/register' element={<Register />} />
      <Route path='/productdetail/:productId' element={<ProductDetail cart={cart} setCart={setCart} />} />
      <Route path='/products' element={<ProductPage addToCart={addToCart} />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App