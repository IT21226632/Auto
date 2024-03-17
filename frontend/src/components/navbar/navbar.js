import React, { useState} from 'react'
import './navbar.css'

import {Link} from 'react-router-dom'

import { FaUserAlt } from "react-icons/fa";

function navbar() {

  return (
    <div className='navbar-main'>
        <div className='navbar-main-con'>
            <div className='nav-content'>
                <div className='logo'>
                    Logo
                </div>
                <div id='Header-links-con'>

                <Link to="/" className='nav-bar-link-style'>
                    <span id='link'>Products</span>
                </Link>
                <Link to="/" className='nav-bar-link-style'>
                    <span id='link'>Shops</span>
                </Link>
                <Link to="/" className='nav-bar-link-style'>
                    <span id='link'>Account</span>
                </Link>
                <Link to="/" className='nav-bar-link-style'>
                    <span id='link'>About</span>
                </Link>
                </div>
                <div className='log-out'>
                <FaUserAlt size={25} color='#fff'/>
                </div>

            </div>
        </div>
    </div>
  )
}

export default navbar