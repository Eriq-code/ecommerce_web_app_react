import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
function Header() {
  return (
    <div className='header'>
        <img
        className='header_logo'
        src='https://pngimg.com/uploads/amazon/small/amazon_PNG11.png' 
        />
    <div className='header_search'>
         <input 
         className='header_searchInput'
         type='text'
         />
         <SearchIcon 
         className='header_searchIcon'/>
    </div>
    <div className='header_nav'>
        <div className='header_option'>
            <span className='header_optionOne'>
                 Hello, sign in
            </span>
            <span className='header_optionTwo'>
                Account & List
            </span>
        </div>
        <div className='header_option'>
            <span className='header_optionOne'>
                Return
            </span>
            <span className='header_optionTwo'>
                & Orders
            </span>
        </div>
        <div className='header_option'>
            <span className='header_optionOne'>
                Your 
            </span>
            <span className='header_optionTwo'>
                Prime 
            </span>
        </div>
        <div className='header_cart'>
                <AddShoppingCartIcon />
                <span className='header_optionTwo header_cartCount'>
                  0
                </span>
        </div>
    </div>
    </div>
  )
}

export default Header