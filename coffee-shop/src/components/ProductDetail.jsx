import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { products_list } from '../Data/Products';
import { FaCaretUp } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";

export const ProductDetail = ({ cart, setCart }) => {

  const { productId } = useParams();

  const product = products_list.find(item => item.id === parseInt(productId));

  if (!product) {
    return <p>Product not found.</p>
  }


  const [carts, setCarts] = useState([]);

  useEffect(() => {
    setCarts(cart);
  }, [cart]);

  const handleIncrement = (index) => {
    const updatedCarts = carts.map((item, idx) => 
      idx === index ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCarts(updatedCarts);
    setCart(updatedCarts); // Update the cart in App
  };

  const handleDecrement = (index) => {
    const updatedCarts = carts.map((item, idx) => 
      idx === index ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
    );
    setCarts(updatedCarts);
    setCart(updatedCarts); // Update the cart in App
  };

  return (
    <div className="productdetail-page">
      <div className='cart-header'>
        <div className='cart-header-p'>
            <Link to="/">Home <span><IoIosArrowForward /></span></Link>
            <p className='cart-head'>{product.title}</p>
        </div>
      </div>

      <div className='product-detail'>
        <img src={product.image} alt={product.title} />
        <div className='product-parts'>
          <p className='product-title'>{product.title}</p>
          <p className='product-price'>Rs.{product.price}</p>
          <hr />
          <p className='product-description'>{product.description}</p>
          <div>
            <button onClick={() => handleIncrement(cartIndex)}><FaCaretUp size={20} /></button>
            <p>{product.quantity}</p>
            <button onClick={() => handleDecrement(cartIndex)}><FaCaretDown size={20} /></button>
          </div>
        </div>
      </div>
    </div>
  )
}
