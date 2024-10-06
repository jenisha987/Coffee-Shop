import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from "react-router-dom";
import { navlinks } from '../Data/Data';
import { SiCoffeescript } from "react-icons/si";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const Navbar = ({ count }) => {

  const [ isNavlinksShowing, setIsNavlinksShowing ] = useState(false)
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/cart');
  }

  return (
    <nav>
      <div className="container nav-container">
        <Link to="/" className='logo'>
          <SiCoffeescript />
          <p>Coffee Cove</p>
        </Link>
        <ul className={`nav-links ${isNavlinksShowing ? 'navlinksShow' : 'navlinksHide'}`}>
          {
            navlinks.map(({name, path}, index) => {
              return (
                <li key={index}>
                  <NavLink to={path}>{name}</NavLink>
                </li>
              )
            })
          }
        </ul>

        <div className="nav-right">
          <CiSearch />
          <PiShoppingCartThin onClick={handleCartClick} />
          <div className="cart-count">{count}</div> 
          <button className='menu-button' onClick={() => {setIsNavlinksShowing(!isNavlinksShowing)}}>
            {
              !isNavlinksShowing ? <MdMenu /> : <RxCross2 />
            }
          </button>
          <button className='button-login'>Login</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar