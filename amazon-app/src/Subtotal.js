import React from 'react'
import './Subtotal.css';
import { NumberFormatBase } from 'react-number-format';

function Subtotal() {
  return (
    
    <div className='subtotal'>
       <NumberFormatBase
       renderText={ (value) => (
        <>
        <p>Subtotal (o items): <strong>0</strong> </p>
        <small className='subtotal__gift'><input type="checkbox" />This order contains gifts</small>
        
        </>
    )}
       value= {0}
       decimalScale = {2}
       displayType = {'text'}
       thousandSeparator = {true}
       prefix = {'$'}
       />   
         <button type='submit' className='submit__order'>Proceed to checkout</button>
    </div>
    
     
  )
}

export default Subtotal