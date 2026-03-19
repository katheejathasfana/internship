import React from 'react'
import ProductCard from '../Components/ProductCard'


const Products = ({products}) => {
    console.log(products.length)
  return (
    <div>
      
        <div className='container-fluid'>
            <img src="/images/banner.webp" alt="" 
            className='img-fluid w-100'  style={{height:'400px'}}/>
        </div>

        <h3 className='text-center mt-3'>Our Products</h3>
        <div className='container mt-4'>
            <div className='row'>
            {products.length === 0 && <h3>No products available</h3>}
            {products.map((item,index)=>(
                
                <ProductCard key={item.id} 
                id={item.id}
                image={item.image}
                title={item.title} 
                price={item.price} />
            ))}
        
        </div>    
        </div>
        </div>
  )
}

export default Products