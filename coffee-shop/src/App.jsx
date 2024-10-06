import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import Error from './pages/Error';
import Cart from './components/Cart';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<Error />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App