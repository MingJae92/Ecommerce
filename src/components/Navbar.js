import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <li>
            <Link to="/">Homepage</Link>
        </li>
        <li>
            <Link to="/aboutus">About-Us</Link>
        </li>
        <li>
            <Link to="/products">Products</Link>
        </li>
        <li>
            <Link to="/contactus">Contact-Us</Link>
        </li>
    </div>
  )
}

export default Navbar