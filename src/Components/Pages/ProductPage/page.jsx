import React from 'react'
import Products from '../../Products'
import ProductsHeader from '../../ProductsHeader'

const ProductPage = () => {
  return (
    <div className='bg-inherit'>
        <ProductsHeader/>
        <Products/>
    </div>
  )
}

export default ProductPage