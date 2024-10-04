import React from 'react';
import { SiCoffeescript } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <hr className='footer-hr' />
      <div className='footer'>
        <div className='footer-section1'>
          <div className='footer-section1-logo'>
            <SiCoffeescript size={30} className='footer-logo' />
            <p className='footer-header'>coffee cove</p>
          </div>
          <p>Subscribe our newsletter and get discount 30% off</p>
        </div>
        <div>
          <p>customer care</p>
          <ul>
            <li>about us</li>
            <li>privacy policy</li>
            <li>terms & conditions</li>
            <li>products return</li>
            <li>wholesale privacy</li>
          </ul>
        </div>
        <div>
          <p>quick shop</p>
          <ul>
            <li>pagination</li>
            <li>terms & conditions</li>
            <li>contact</li>
            <li>accessories</li>
            <li>home page</li>
          </ul>
        </div>
        <div>
          <p>company</p>
          <ul>
            <li>menu items</li>
            <li>help center</li>
            <li>address store</li>
            <li>privacy policy</li>
            <li>home page</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer