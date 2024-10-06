import React, { useEffect, useState } from 'react';

const Cart = ({ cart }) => {

    const [ carts, setCarts ] = useState([]);

    useEffect(() => {
        setCarts(cart);
    }, [cart])

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {
        carts?.map((cartItem, cartIndex) => {
            return (
                <div key={cartIndex}>
                    <img src={cartItem.image} alt='cartItem' width={200} />
                    <p>{cartItem.title}</p>
                    <button onClick={() => {
                        const _carts = carts.map((item, index) => {
                            return cartIndex === index ? { ...item, quantity: item.quantity - 1 } : item
                        })
                        setCarts(_carts)
                    }}>-</button>
                    <p>{cartItem.quantity}</p>
                    <button onClick={() => {
                        const _carts = carts.map((item, index) => {
                            return cartIndex === index ? { ...item, quantity: item.quantity + 1 } : item
                        })
                        setCarts(_carts)
                    }}>+</button>
                    <p>Rs.{cartItem.price * cartItem.quantity}</p>
                </div>
            )
        })
      }

      <p>Total Amount: <span></span>
      {
        cart.map(item => item.price + item.quantity).reduce((total, value) => total + value, 0)
      }
      </p>
    </div>
  );
};

export default Cart;
