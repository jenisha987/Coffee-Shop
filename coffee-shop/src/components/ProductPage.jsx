import React from 'react';
import { Link } from 'react-router-dom';
import { products_list } from '../Data/Products';
import { IoIosArrowForward } from "react-icons/io";

const ProductPage = ({ addToCart }) => {
  return (
    <>
        <div className='productpage-header'>
            <h1>Products</h1>
            <div className='productpage-p'>
                <Link to="/">Home <span><IoIosArrowForward /></span></Link>
                <p>Products</p>
            </div>
        </div>

        <div className='product-list'>
            {
                products_list.map(product => (
                    <div key={product.id} className='product-item'>
                <Link to={`/productdetail/${product.id}`}>
                <img src={product.image} alt='product' className='home-product-img' />
                </Link>
                <p>{product.title}</p>
                <p>Rs.{product.price}
                  <button className='cart-button' onClick={() => addToCart(product)}>Add to Cart</button>
                </p>
              </div>
                ))
            }
        </div>
    </>
  )
}

export default ProductPage