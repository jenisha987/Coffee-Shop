import React from 'react';
import product from "../assets/images/home3.jpg";

const Products = () => {
  return (
    <div className='home-product'>
        <div className='home-product-p'>
            <p className='home-product-tag'>best seller</p>
            <p className='home-product-tagline'>best seller product this week!</p>
        </div>
        <div className='home-product-img'>
            <img src={product} alt='product' />
            <p>Dummya Coffee</p>
            <p>Rs.300.00</p>
        </div>
    </div>
  )
}

export default Products