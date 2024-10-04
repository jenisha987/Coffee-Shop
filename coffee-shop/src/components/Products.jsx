import React from 'react';
import product from "../assets/images/home3.jpg";
import { products_list } from '../Data/Products';

const Products = () => {
  return (
    <div className='home-product'>
        <div className='home-product-p'>
            <p className='home-product-tag'>best seller</p>
            <p className='home-product-tagline'>best seller product this week!</p>
        </div>
        <div className='home-product-list'>
            {
              products_list.map(product_list => (
                <div key={product_list.id} className='product-item'>
                  <img src={product_list.image} alt='product' className='home-product-img' />
                  <p>{product_list.title}</p>
                  <p>Rs.{product_list.price}</p>
                </div>
              ))
            }
        </div>
    </div>
  )
}

export default Products