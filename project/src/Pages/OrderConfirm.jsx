import React from 'react'
import { Link } from 'react-router-dom';

const OrderConfirm = () => {
 return (
  <div
    className="container d-flex flex-column justify-content-center align-items-center"
    style={{ minHeight: "75vh" }}
  >
    <div className="p-4 shadow-lg text-center w-75">
      <h3 className="text-success mb-3">🎉 Order Confirmed</h3>
      <p>Your order has been placed successfully!</p>
      <Link to="/">
      <button className="btn btn-dark mt-3">
        Continue Shopping
      </button>
      </Link>
    </div>
  </div>
);
}

export default OrderConfirm