import React from 'react'
import { Link, NavLink } from "react-router-dom";
import { navlinks } from '../Data/Data';
import { SiCoffeescript } from "react-icons/si";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  return (
    <nav>
      <div className="container nav-container">
        <Link to="/" className='logo'>
          <SiCoffeescript />
          <p>Coffee Cove</p>
        </Link>
        <ul className='nav-links'>
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
          <PiShoppingCartThin />
          <MdMenu />
          <RxCross2 />
        </div>
      </div>
    </nav>
  )
}

export default Navbar