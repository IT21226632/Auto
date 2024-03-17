import React from 'react'
import Navbar from '../../components/navbar/navbar'
import './ShopPage.css'
import Image from '../../assets/car-image.jpg'

import { MdDelete } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";

function ShopPage() {
  return (
    <div className='Shop-main-con'>
        <div className='shop-con'>
            <div className='nav-con'>
                <Navbar/>
            </div>
            <div className='shop-content'>
                <div className='shop-status-con'>
                    <div className='status-topic'>
                        <div className='status-topic'>
                            <span id='topic-one'>Shop Status</span>
                        </div>
                    </div>
                    <div className='shop-status-details'>
                        <div className='status-detail-box'>
                            <div className='detail-count'>
                                <span id='count'>45+</span>
                            </div>
                            <div className='detail-topic'>
                                <span id='topic'>Items</span>
                            </div>
                        </div>
                        <div className='status-detail-box'>
                        <div className='detail-count'>
                                <span id='count'>75+</span>
                            </div>
                            <div className='detail-topic'>
                                <span id='topic'>Sells</span>
                            </div>
                        </div>
                        <div className='status-detail-box'>
                        <div className='detail-count'>
                                <span id='count'>50+</span>
                            </div>
                            <div className='detail-topic'>
                                <span id='topic'>Customers</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='shop-items-con'>
                    <div className='shop-items-topic'>
                        <span className='My-Shop'>My Shop</span>
                    </div>
                    <div className='shop-options'>
                        <div className='my-shop-search'>
                            <div className='search-box'>
                            <input
                                type='text'
                                className='search-box-input'
                                placeholder='Search Product'
                                />
                            </div>
                        </div>
                        <div className='my-shop-add-items'>
                            <div className='add-shop-btn'>
                                <span className='btn-topic'>
                                    Add Item
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='my-item-list-container'>
                    <div className='item-list'>
                        <div className='item-1'>
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
                            <div className='item-options'>
                                <div className='option-con'>
                                    <div className='update-item'>
                                        <MdDelete size={25}/>
                                    </div>
                                    <div className='dlt-item'>
                                    <MdEditSquare size={25}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='item-1'>
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
                            <div className='item-options'>
                                <div className='option-con'>
                                    <div className='update-item'>
                                        <MdDelete size={25}/>
                                    </div>
                                    <div className='dlt-item'>
                                    <MdEditSquare size={25}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='item-1'>
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
                            <div className='item-options'>
                                <div className='option-con'>
                                    <div className='update-item'>
                                        <MdDelete size={25}/>
                                    </div>
                                    <div className='dlt-item'>
                                    <MdEditSquare size={25}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='item-1'>
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
                            <div className='item-options'>
                                <div className='option-con'>
                                    <div className='update-item'>
                                        <MdDelete size={25}/>
                                    </div>
                                    <div className='dlt-item'>
                                    <MdEditSquare size={25}/>
                                    </div>
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

export default ShopPage