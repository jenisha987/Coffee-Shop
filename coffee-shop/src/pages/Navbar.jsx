import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from "react-router-dom";
import { navlinks } from '../Data/Data';
import { SiCoffeescript } from "react-icons/si";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { CiUser } from "react-icons/ci"; 
import { LuLogOut } from "react-icons/lu";

const Navbar = ({ count }) => {

  const userName = JSON.parse(localStorage.getItem("user"));
  const isLoggedIn = JSON.parse(localStorage.getItem("loggedin"));

  const [ isNavlinksShowing, setIsNavlinksShowing ] = useState(false);
  const [ isSearchShowing, setIsSearchShowing ] = useState(false);
  const [ searchTerm, setSearchTerm ] = useState('');
  const navigate = useNavigate();

  const handleCartClick = () => {
    // if (!isLoggedIn) {
    //   alert('Please log in to access the cart.');
    //   navigate("/login");
    //   return;
    // }
    navigate('/cart');
  };

  const handleLinkClick = () => {
    setIsNavlinksShowing(false);
  }

  const handleSearchToogle = () => {
    setIsSearchShowing(!isSearchShowing);
  }

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const handleSearchSubmit = () => {
    e.preventDefault();
    navigate(`/search?query=${searchTerm}`);
  }

  const handleLogout = () => {
    localStorage.removeItem("loggedin");
    // localStorage.removeItem("cart"); // Clear the current cart
    // localStorage.removeItem("currentUser"); // Clear the current user
    navigate("/login");
  };

  return (
    <nav>
      <div className="container nav-container">
        <Link to="/" className='logo'>
          <SiCoffeescript />
          <p>Coffee Cove</p>
        </Link>
        {isLoggedIn && <p>{userName.name}</p> }
        <ul className={`nav-links ${isNavlinksShowing ? 'navlinksShow' : 'navlinksHide'}`}>
          {
            navlinks.map(({name, path}, index) => {
              return (
                <li key={index}>
                  <NavLink to={path} onClick={handleLinkClick}>{name}</NavLink>
                </li>
              )
            })
          }
        </ul>

        <div className="nav-right">
          <div>
            {
              isSearchShowing ? (
                <form onSubmit={handleSearchSubmit}>
                  <input 
                    type="text"
                    className='search-input'
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder='Search...'
                  />
                </form>
              ) : (
                <CiSearch onClick={handleSearchToogle} />
              )
            } 
          </div>
          {isLoggedIn && (
            <>
              <PiShoppingCartThin onClick={handleCartClick} />
              <div className="cart-count">{count}</div> 
            </>
          )}
          <button className='menu-button' onClick={() => {setIsNavlinksShowing(!isNavlinksShowing)}}>
            {
              !isNavlinksShowing ? <MdMenu /> : <RxCross2 />
            }
          </button>

          {isLoggedIn ? (
            <button onClick={handleLogout} className=''><LuLogOut /></button>
          ) : (
          <Link to="/login" className=''><CiUser /></Link>
          )}
          {/* <button onClick={isLoggedIn ? handleLogout : () => navigate('/login')}>
            {isLoggedIn ? <LuLogOut /> : <CiUser />}
          </button> */}
        </div>
      </div>
    </nav>
  )
}

export default Navbar