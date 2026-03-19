import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = ({ products, addtoCart }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  if (!product) {
    return <h2>Product Not found</h2>;
  }
  return (
    <div
      className="d-flex align-items-center  justify-content-center"
      style={{ minHeight: "600px" }}
    >
      <div className="container mt-4  w-75">
        <div className="row shadow rounded p-4">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img
              src={product.image}
              alt=""
              className="w-75 rounded img-fluid"
              style={{ height: "350px" }}
            />
          </div>

          <div className="col-md-6">
            <h2>{product.title}</h2>
             <h4>{product.brand}</h4>
            <h5>{product.price}</h5>
            <h4>{product.category}</h4>
             <h4>{product.stock}</h4>
           
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ex,
              impedit eius doloremque voluptas dolores omnis voluptate
              explicabo, ducimus cupiditate repellat? Ea alias, amet est ducimus
              doloribus error veritatis dolor?
            </p>
            <div className="d-flex justify-content-center">
              <button className="btn mt-5 py-2 px-4 border rounded bg-secondary text-light"
              onClick={()=>addtoCart(product)}>
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
