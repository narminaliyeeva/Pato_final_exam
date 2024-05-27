import React from 'react'
import { LiaBinocularsSolid } from "react-icons/lia";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { PiListBold } from "react-icons/pi";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div >

      <div>
        <div className="nav">
          <div className="navbar">
            <img src="./public/logo.png" alt="" />
            <ul>
              <li>Home</li>
              <li>Menu</li>
              <li>Reservation</li>
              <li>Gallery</li>
              <li>About</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>

            <p>
              <LiaBinocularsSolid />
              <FaFacebookF />
              <FaTwitter />
              <PiListBold />
            </p>
            <Link to='/admin'><button className='admin'>Admin</button></Link>
          </div>

          <div className='hello'>
            <h1>Welcome to</h1>
            <h1>Pato Place</h1>
            <button className="admin">Look Menu</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar