import React from 'react';
import home from "../assets/images/Home.png";
import home1 from "../assets/images/Home1.png";
import home2 from "../assets/images/home2.webp";
import home3 from "../assets/images/home3.webp";
import { Link } from 'react-router-dom';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Products from './Products';
import Blog from './Blog';
import Cart from './Cart';

export const Home = ({ addToCart }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <div className='home'>
    <Slider {...settings}>
      <div>
        <img src={home} alt="home" className="home-img" />
        <button className='shop-btn'>Shop Now</button>
      </div>
      <div>
        <img src={home1} alt="home1" className="home-img" />
        <button className='shop-button'>Shop Now</button>
      </div>
    </Slider>

    <div className='home-section'>
      <div>
      <p className='section-p'>coffee solves everything</p>
      <p className='section-p-p'>Experience coffee as it should be—fresh, bold, and always satisfying</p>
      <button className="section-button">shop now</button>
      </div>
      <div className="container-section">
        <div className="background-bottom"></div>
        <div className="image-wrapper">
          <img src={home2} alt="Coffee setup" className='home-image' />
        </div>
      </div>
    </div>
    <div className='home-section1'>
      <div className="container-section">
        <div className="background-bottom"></div>
        <div className="image-wrapper">
          <img src={home3} alt="Coffee setup" className='home-image' />
        </div>
      </div>
      <div className='home-sectionn'>
      <p className='section-p'>feel good with coffee</p>
      <p className='section-p-p'>Start your day with a perfectly brewed cup of joy at coffee cove</p>
      <button className="section-button">shop now</button>
      </div>
    </div>
    <div className='home-section2'>
      <div>
      <p className='section-p'>feel good with coffee</p>
      <p className='section-p-p'>Start your day with a perfectly brewed cup of joy at coffee cove</p>
      <button className="section-button">shop now</button>
      </div>
      <div className="container-section">
        <div className="background-bottom"></div>
        <div className="image-wrapper">
          <img src={home3} alt="Coffee setup" className='home-image' />
        </div>
      </div>
    </div>
    <Products addToCart={addToCart} />
    <Blog />
    </div>
  )
}
