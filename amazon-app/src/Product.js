import React from 'react'
import './Product.css';
function Product({id, title, image, price, rating}) {
  return (
    <div className='product'>
        <div className='product_info'>
            <p className='product_title'>{title}</p>
            <p className='product_price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product_rating'>
                {Array(rating).fill().map((_, i) => (<p><img src='https://upload.wikimedia.org/wikipedia/commons/2/29/Gold_Star.svg' className='star'/></p>)) } 
            </div>
        </div>
        <img 
            src= {image} alt=""
        />
        <button>Add to Cart</button>
    </div>
  )
}

export default Product