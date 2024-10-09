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

  const [quantity, setQuantity] = useState(0); // Track quantity independently before adding to cart

  // Sync the cart with the global cart state
  useEffect(() => {
    const cartItem = cart.find(item => item.id === product.id);
    if (cartItem) {
      setQuantity(cartItem.quantity); // Sync quantity if product is already in the cart
    } else {
      setQuantity(0); // Reset quantity if product isn't in the cart
    }
  }, [cart, product.id]);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    setQuantity(Math.max(quantity - 1, 0));
  };

    // Add to cart button logic
    const handleAddToCart = () => {
      const cartItem = cart.find(item => item.id === product.id);
      if (cartItem) {
        // If the product is already in the cart, just update the quantity
        const updatedCarts = cart.map(item =>
          item.id === product.id ? { ...item, quantity } : item
        );
        setCart(updatedCarts);
      } else {
        // If the product is not in the cart, add it with the current quantity or 1 if no quantity is set
        const updatedCarts = [...cart, { ...product, quantity: quantity || 1 }];
        setCart(updatedCarts);
      }
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
          <div className='product-cart'>
            <div className='quantity-box'>
              <p className='number-display'>{quantity}</p>
              <div className='arrows'>
                <button className='arrow-up' onClick={handleIncrement}><FaCaretUp size={20} /></button>
                <button className='arrow-down' onClick={handleDecrement}><FaCaretDown size={20} /></button>
              </div>
            </div>
            <div className='product-button'>
              <button className='product-addcart' onClick={handleAddToCart}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
