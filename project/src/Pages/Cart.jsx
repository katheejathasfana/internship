import React from "react";
import CartCard from "../Components/CartCard";
import { Link } from "react-router-dom";

const Cart = ({
  cart,
  incrementqty,
  decrementqty,
  removeFromCart,
  checkout,
}) => {
  const total_price = cart.reduce((total, item) => {
    return total + item.price * item.qty;
  }, 0);

  const total_qty = cart.reduce((total, item) => {
    return total + item.qty;
  }, 0);

  return (
    <div className="container mt-3" style={{ minHeight: "75vh" }}>
      <h3 className="text-center">Your Cart</h3>

      {cart.length === 0 ? (
        <div
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ minHeight: "75vh" }}
        >
          <h5 className="text-muted mb-3">Cart is Empty</h5>

          <Link to="/">
          <button className="py-2 px-3 bg-dark text-light">
            Go to Shopping
          </button>
          </Link>
        </div>
      ) : (
        <div className="row px-3 ">
          <div className="col-md-8">
            {cart.map((product, index) => (
              <div key={index}>
                <CartCard
                  product={product}
                  incrementqty={incrementqty}
                  decrementqty={decrementqty}
                  removeFromCart={removeFromCart}
                />
              </div>
            ))}
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm p-3">
              <h5 className="text-center mb-3">Order Summary</h5>
              <div className="d-flex justify-content-between mb-2">
                <span>Total Items</span>
                <strong>{total_qty}</strong>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <span>Total Price</span>
                <strong>₹{total_price}</strong>
              </div>

              <hr />

              <button className="btn btn-dark w-100 mt-2" onClick={checkout}>
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
