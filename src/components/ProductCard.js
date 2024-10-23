import React from 'react'
import Logo from '../assets/images/1002.png'

import  './ProductCard.css'

export const ProductCard = ({product}) => {
  return (
    <div className='productCard'>
        <img src={Logo} alt={product.name}/>
        <p className='name'>{product.name}</p>
        <div className="action">
            <p>${product.price}</p>
            <button>Add To Cart</button>
      </div>
    </div>
  )
}
