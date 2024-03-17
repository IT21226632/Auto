import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Image from '../../assets/car-image.jpg'

import './userHomePage.css'
import {Link} from 'react-router-dom'

function UserHomePage() {
  return (
    <div className='Homepage-main'>
      <div className='nav-bar-container'>
        <Navbar></Navbar>
        </div>
      <div className='homepage-container'>
        <div className='user-option'>
          <div className='search'>
            <div className='search-bar'>
          <input
              type='text'
              className='search-bar-input'
              placeholder='Search Product'
            />
            </div>
          </div>
          <div className='client-shop'>
          <Link to="/user-shop" style={{ textDecoration: 'none' }}>
            <div className='shop-button'>
             <span>SHOP</span>
            </div>
            </Link>
          </div>
        </div>
        <div className='cat-pool'>
          <div className='pool'>

          </div>
        </div>
        <div className='product-list'>
          <div className='title'>
            <span id='tilte-id'>Product Title</span>
          </div>
          <div className='product-list'>
            <div className='list-items'>
              <div className='item'>
              <div className='item-image'>
                 <img src={Image} width={150} height={150}></img>
              </div>
              <div className='item-name'>
                  <span id='item-name'>Item Name</span>
                </div>
                <div className='item-price'>
                    <span id='item-price'>Price</span>
                </div>
                <div className='item-condition'>
                    <span id='item-price'>Condition</span>
                </div>
                <div className='line'></div>
                <div className='view-button'>
                  <div className='view-title'>
                    <span id='view-id'>
                      View
                    </span>
                  </div>
                </div>
              </div>
              <div className='item'>
              <div className='item-image'>
                 <img src={Image} width={150} height={150}></img>
              </div>
              <div className='item-name'>
                  <span id='item-name'>Item Name</span>
                </div>
                <div className='item-price'>
                    <span id='item-price'>Price</span>
                </div>
                <div className='item-condition'>
                    <span id='item-price'>Condition</span>
                </div>
                <div className='line'></div>
                <div className='view-button'>
                  <div className='view-title'>
                    <span id='view-id'>
                      View
                    </span>
                  </div>
                </div>
              </div>
              <div className='item'>
              <div className='item-image'>
                 <img src={Image} width={150} height={150}></img>
              </div>
              <div className='item-name'>
                  <span id='item-name'>Item Name</span>
                </div>
                <div className='item-price'>
                    <span id='item-price'>Price</span>
                </div>
                <div className='item-condition'>
                    <span id='item-price'>Condition</span>
                </div>
                <div className='line'></div>
                <div className='view-button'>
                  <div className='view-title'>
                    <span id='view-id'>
                      View
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      </div>
  )
}

export default UserHomePage