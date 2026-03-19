import React from 'react'
import Addproductform from '../Components/Addproductform'

const AddProduct = ({addProduct}) => {

  return (

    <div className='container w-75 my-4' >
      <div className='border p-4' style={{marginTop:'100px'}}>
        <h3 className='mt-3 text-center'>Add Product</h3>

    <Addproductform addProduct={addProduct}/>
    </div>
    </div>
  )
}

export default AddProduct