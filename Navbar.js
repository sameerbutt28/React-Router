import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
        <Link to='/home'>Home</Link>
        <Link to='/contact'>Contact Us</Link>
        <Link to='/about'>About Us</Link>

    </div>
  )
}
