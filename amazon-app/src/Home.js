import React from 'react';
import './Home.css';
import Product from './Product';
function Home() {
  return (
    <div className='home'>
        <div className='home_container'>
            <img 
            className='home_image'
            src='https://viatea.es/wp-content/uploads/2020/06/amazon-prime-video-spain-contenido.jpg' 
            alt='amazon_banner'/>

            <div className='home_row'>
                <Product 
                id="1123234"
                title= 'Rich Dad Poor Dad: 20th Anniversary Edition: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!'
                image= 'https://media.s-bol.com/zv7DpM5xqkAr/809x1200.jpg'
                price={20.99}
                rating={5}
                />
                <Product 
                    id='25464788'
                    title = 'Caixun EC40V2FA, 40 inch 1080p FHD Smart Android TV with Chromecast Built-in, HDMI, USB (HDMI Cable Included - 2022 Model)'
                    image='https://m.media-amazon.com/images/I/51S0ZtiC95L._AC_SY1000_.jpg'
                    price={17.98}
                    rating={4}
                />
                <Product 
                id={12334454}
                title = 'Amazon Brand – Stone & Beam Lauren Down-Filled Oversized Sofa Couch, 89"W, Pearl'
                image='https://m.media-amazon.com/images/I/71ZOPagIVEL.jpg'
                price = {1000.69}
                rating = {3}

                 />
            </div>
            <div className='home_row'>
                <Product 
                id="1123234"
                title= 'Rich Dad Poor Dad: 20th Anniversary Edition: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!'
                image= 'https://media.s-bol.com/zv7DpM5xqkAr/809x1200.jpg'
                price={20.99}
                rating={5}
                />
                <Product 
                    id='25464788'
                    title = 'Caixun EC40V2FA, 40 inch 1080p FHD Smart Android TV with Chromecast Built-in, HDMI, USB (HDMI Cable Included - 2022 Model)'
                    image='https://m.media-amazon.com/images/I/51S0ZtiC95L._AC_SY1000_.jpg'
                    price={17.98}
                    rating={4}
                />
                <Product 
                id={12334454}
                title = 'Amazon Brand – Stone & Beam Lauren Down-Filled Oversized Sofa Couch, 89"W, Pearl'
                image='https://m.media-amazon.com/images/I/71ZOPagIVEL.jpg'
                price = {1000.69}
                rating = {3}

                 />
            </div>
        </div>
         </div>
  )
}

export default Home