import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FaCaretUp } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";

const Cart = ({ cart, setCart }) => {
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
    <div className="cart-page">
      <div className='cart-header'>
        <div className='cart-header-p'>
            <Link to="/">Home <span><IoIosArrowForward /></span></Link>
            <p className='cart-head'>Your Shopping Cart</p>
        </div>
      </div>
      <div className='cart-item-section'>
        <table className='cart-table'>
            <thead>
                <tr>
                    <th className='table-head-name'>product name</th>
                    <th>price</th>
                    <th>quantity</th>
                    <th>total</th>
                    <th>action</th>
                </tr>
            </thead>
            <tbody>
                {
                carts.length > 0 ? 
                carts.map((cartItem, cartIndex) => (
                    <tr key={cartIndex} className='table-tr'>
                      <td className='table-product'>
                          <img src={cartItem.image} alt='cartItem' width={200} />
                          <p>{cartItem.title}</p>
                      </td>
                      <td><p>Rs.{cartItem.price}</p></td>
                      <td className='table-quantity'>
                          <button onClick={() => handleIncrement(cartIndex)}><FaCaretUp size={20} /></button>
                          <p>{cartItem.quantity}</p>
                          <button onClick={() => handleDecrement(cartIndex)}><FaCaretDown size={20} /></button>
                      </td>
                      <td>Rs.{cartItem.price * cartItem.quantity}</td>
                      <td><RxCross2 size={25} /></td>
                    </tr>
                    )) : <h3>Your cart is empty</h3>
                }
            </tbody>
        </table>

      <div className='cart-mobile'>
          {
            carts.length > 0 ? carts.map((cartItem, cartIndex) => (
              <table key={cartIndex}>
                <tr>
                  <td>{cartItem.title}</td>
                  <td><img src={cartItem.image} alt='cartItem' width={100} height={100} /></td>
                </tr>
                <tr>
                  <td>product price</td>
                  <td>Rs.{cartItem.price}</td>
                </tr>
                <tr>
                  <td>quantity</td>
                  <td>
                    <button onClick={() => handleIncrement(cartIndex)}><FaCaretUp size={20} /></button>
                    <p>{cartItem.quantity}</p>
                    <button onClick={() => handleDecrement(cartIndex)}><FaCaretDown size={20} /></button>
                  </td>
                </tr>
                <tr>
                  <td>sub total</td>
                  <td>Rs.{cartItem.price * cartItem.quantity}</td>
                </tr>
              </table>
            )) : <h3>Your cart is empty</h3>
          }
      </div>

      <p>Items: <span>{carts.reduce((total, item) => total + item.quantity, 0)}</span></p>
      <p>Total Amount: <span>{carts.reduce((total, item) => total + (item.price * item.quantity), 0)}</span></p>
    </div>
    </div>
  );
};

export default Cart;

