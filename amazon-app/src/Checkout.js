import React from 'react'
import "./Checkout.css";
import Subtotal from './Subtotal';

function Checkout() {
  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/CorpGC/Banner_PC_without_Citi.jpg'
            className='checkout_ad'
            />
        <h2>Your Shopping Basket</h2>
        <hr/>
    
        </div>
        <div className='checkout__right'>
          < Subtotal />
        </div>
    </div>
  )
}

export default Checkout