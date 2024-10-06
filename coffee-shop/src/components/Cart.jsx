import React from 'react';

const Cart = ({ cart }) => {
  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {
        cart.map((cartItem, cartIndex) => {
            return (
                <div key={cartIndex}>
                    <img src={cartItem.image} alt='cartItem' width={200} />
                    <p>{cartItem.title}</p>
                    <button>-</button>
                    <p>{cartItem.quantity}</p>
                    <button>+</button>
                    <p>Rs.{cartItem.price}</p>
                </div>
            )
        })
      }

      <p>Total Amount:</p>
      {
        cart.map(item => item.price).reduce((total, value) => total + value, 0)
      }
    </div>
  );
};

export default Cart;
