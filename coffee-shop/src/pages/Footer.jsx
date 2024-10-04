import React from 'react';
import { SiCoffeescript } from "react-icons/si";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";

const Footer = () => {
  return (
    <footer>
      <hr />
      <div className='footer'>
        <div className='footer-section1'>
          <div className='footer-section1-logo'>
            <SiCoffeescript className='footer-logo' />
            <p className='footer-header'>coffee cove</p>
          </div>
          <p className='footer-section-p'>Subscribe our newsletter and get discount 30% off</p>
          <ul className='social-icons'>
            <li><CiFacebook  /></li>
            <li><FaInstagram /></li>
            <li><CiMail /></li>
            <li><CiTwitter /></li>
          </ul>
        </div>
        <div className='footer-section'>
          <p className='footer-head'>customer care</p>
          <ul>
            <li>about us</li>
            <li>privacy policy</li>
            <li>terms & conditions</li>
            <li>products return</li>
            <li>wholesale privacy</li>
          </ul>
        </div>
        <div className='footer-section'>
          <p className='footer-head'>quick shop</p>
          <ul>
            <li>pagination</li>
            <li>terms & conditions</li>
            <li>contact</li>
            <li>accessories</li>
            <li>home page</li>
          </ul>
        </div>
        <div className='footer-section'>
          <p className='footer-head'>company</p>
          <ul>
            <li>menu items</li>
            <li>help center</li>
            <li>address store</li>
            <li>privacy policy</li>
            <li>home page</li>
          </ul>
        </div>

        <div className='footer-sections'>
        <div className='footer-section-resp'>
          <p className='footer-head'>customer care</p>
          <ul>
            <li>about us</li>
            <li>privacy policy</li>
            <li>terms & conditions</li>
            <li>products return</li>
            <li>wholesale privacy</li>
          </ul>
        </div>
        <div className='footer-section-resp'>
          <p className='footer-head'>quick shop</p>
          <ul>
            <li>pagination</li>
            <li>terms & conditions</li>
            <li>contact</li>
            <li>accessories</li>
            <li>home page</li>
          </ul>
        </div>
        <div className='footer-section-resp'>
          <p className='footer-head'>company</p>
          <ul>
            <li>menu items</li>
            <li>help center</li>
            <li>address store</li>
            <li>privacy policy</li>
            <li>home page</li>
          </ul>
        </div>
        </div>
      </div>
      <div className='footer-last'>
        <hr className='footer-h' />
        <p>© Copyright 2024 | Coffee Cove by Jenisha Shrestha.</p>
      </div>
    </footer>
  )
}

export default Footer