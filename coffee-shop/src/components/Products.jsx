import React, { useEffect, useState } from 'react';
import { products_list } from '../Data/Products';
import coffee_cup from "../assets/images/coffee-cup.png";

const Products = () => {

  const [ randomProducts, setRandomProducts ] = useState([]);

  const shuffleArray = (array) => {
    for (let i = array.length -1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  useEffect(() => {
    const shuffledProducts = shuffleArray([...products_list]);
    const selectedProducts = shuffledProducts.slice(0, 8);
    setRandomProducts(selectedProducts);
  }, []);

  // const displayedProducts = products_list.slice(0, 8);

  return (
    <div className='home-product'>
      <div className='home-product-p'>
          <p className='home-product-tag'>best seller</p>
          <p className='home-product-tagline'>best seller product this week!</p>
      </div>
      <div className='home-product-list'>
          {
            randomProducts.map(product_list => (
              <div key={product_list.id} className='product-item'>
                <img src={product_list.image} alt='product' className='home-product-img' />
                <p>{product_list.title}</p>
                <p>Rs.{product_list.price}</p>
              </div>
            ))
          }
      </div>
      
      <div className='home-tag'>
        <div className='home-tag-section'>
          <p className='home-tag-p'>special pure coffee</p>
          <p className='home-tag-p-p'>When you've got your health, you got everything</p>
          <button className='home-tag-button'>shop now</button>
        </div>
        <div>
          <img src={coffee_cup} alt='coffee-cup' className='home-tag-img' />
        </div>
      </div>
    </div>
  )
}

export default Products