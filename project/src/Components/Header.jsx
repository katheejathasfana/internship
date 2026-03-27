import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ setSearch, cart }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-4 fixed-top">
        <div className="container-fluid">
          {/* Store Name */}
          <Link className="navbar-brand" to="/">
            MyStore
          </Link>

          {/* Hamburger toggle for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar links and search */}
          <div className="collapse navbar-collapse" id="navbarContent">
            <form
              className="d-flex mx-auto my-2"
              style={{ maxWidth: "500px", width: "100%" }}
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search products..."
                onChange={(e) => setSearch(e.target.value)}
              />
            </form>

            <div className="d-flex flex-column flex-lg-row gap-2">
              <Link className="btn btn-outline-light" to="/productslist">
                Products
              </Link>

              <Link className="btn btn-outline-light" to="/cart">
                Cart {cart.length}
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="" style={{ marginTop: "90px" }}></div>
    </>
  );
};

export default Header;
