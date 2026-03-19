import React from "react";

const CartCard = ({ product,incrementqty, decrementqty, removeFromCart }) => {
  return (
    <div className="card mb-2 p-3 shadow-sm position-relative">
      <button className="btn position-absolute top-0 end-0"
      onClick={()=>removeFromCart(product.id)}>X</button>
      <div className="row align-items-center">
        <div className="col-md-2 text-center">
          <img
            src={product.image}
            alt=""
            style={{ width: "100%", height: "150px", borderRadius: "10%" }}
          />
        </div>
        <div className="col-md-3">
          <h3>{product.title}</h3>
          <p>{product.brand}</p>
        </div>
        <div className="col-md-2">
          <p>{product.price}</p>
        </div>
        <div className="col-md-2 text-center">
          <button className="btn btn-outline-secondary"
            onClick={()=>decrementqty(product.id)}>-</button>
          <span className="mx-2">{product.qty}</span>
          <button onClick={()=>incrementqty(product.id)}
           className="btn btn-outline-secondary">+</button>
        </div>

        <div className="col-md-3 text-center">
          <p>subtotal: ₹ {product.subtotal}</p>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
