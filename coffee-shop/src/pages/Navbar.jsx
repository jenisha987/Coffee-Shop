import React from 'react'
import { Link, NavLink } from "react-router-dom";
import { navlinks } from '../Data/Data';

const Navbar = () => {
  return (
    <div>
      <Link to="/">#Coffee</Link>
      <nav>
        <ul>
          {
            navlinks.map(({name, path}, index) => {
              return (
                <Link to={path}>
                  <li key={index}>{name}</li>
                </Link>
              )
            })
          }
        </ul>
      </nav>
    </div>
  )
}

export default Navbar