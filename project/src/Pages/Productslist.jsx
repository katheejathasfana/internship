import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Productslist = ({products, addproduct,delete_product}) => {
    const navigate=useNavigate()
  return (
     <div className="container mt-6" style={{minHeight:'550px'}}>
        <div className='d-flex justify-content-end me-4'>
        <button  
        onClick={()=>navigate('/addproduct')}
        className='btn btn-dark m-3'
        >Add product</button>
        </div>
      <table className="table table-bordered table-striped text-center ">

        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.title}</td>
              <td>{product.brand}</td>
              <td>{product.category}</td>
              <td>₹ {product.price}</td>
              <td>{product.stock}</td>

              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => delete_product(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  )
}

export default Productslist