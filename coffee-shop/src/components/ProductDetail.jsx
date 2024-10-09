import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { products_list } from '../Data/Products';

export const ProductDetail = () => {

  const { productId } = useParams();

  const product = products_list.find(item => item.id === parseInt(productId));

  if (!product) {
    return <p>Product not found.</p>
  }

  return (
    <div className="cart-page">
      <div className='cart-header'>
        <div className='cart-header-p'>
            <Link to="/">Home <span><IoIosArrowForward /></span></Link>
            <p className='cart-head'>{product.title}</p>
        </div>
      </div>

      <div className='product-detail'>
        <p>{product.title}</p>
      </div>
    </div>
  )
}
