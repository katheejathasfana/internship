import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({id,image,title,price}) => {
    console.log(image)
  return (
    <div className='col-md-4 col-lg-3 mb-3 '>
        <div className='card h-100 border-0 shadow-lg product-card'>
            <img src={image} alt="" className='card-img-top' style={{height:'200px', objectFit:'cover'}}/>
            <div className='card-body text-center'>
                <h4 className='card-title'>{title}</h4>
                <p className='text-success fw-bold'>{price}</p>
                <Link to={`/productDetails/${id}`}><button className='border-0 bg-dark text-light p-2 rounded fs-6'>View Details</button>
                </Link>
                </div>



        </div>

    </div>
  )
}

export default ProductCard