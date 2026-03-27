import { useEffect, useEffectEvent, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import ProductDetails from "./Pages/ProductDetails";
import OrderConfirm from "./Pages/OrderConfirm";
import AddProduct from "./Pages/AddProduct";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { useNavigate } from "react-router-dom";
import Productslist from "./Pages/Productslist";
import NotFound from "./Pages/NotFound";

function App() {
  
  const defaultProducts = [
  {
    id: 1,
    title: "iPhone 13",
    category: "Mobile",
    brand: "Apple",
    stock: 6,
    price: 60000,
    desc: "128GB storage, A15 Bionic chip",
    image: "/images/iphone.avif"
  },
  {
    id: 2,
    title: "Galaxy S22",
    category: "Mobile",
    brand: "Samsung",
    stock: 10,
    price: 50000,
    desc: "8GB RAM, 128GB storage",
    image: "/images/s22.jpg"
  },
  {
    id: 3,
    title: "Redmi Note 12",
    category: "Mobile",
    brand: "Xiaomi",
    stock: 15,
    price: 18000,
    desc: "6GB RAM, 64MP camera",
    image: "/images/redmi.webp"
  }
];
  // console.log(products)
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const safeParse = (data) => {
    try {
      return data && data !== "undefined" ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  };

const [products, setProducts] = useState(() => {
  const saved = localStorage.getItem("items");
  const parsed = safeParse(saved);

  if (parsed && parsed.length > 0) {
    return parsed;
  } else {
    return defaultProducts;
  }
});

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return safeParse(savedCart);
  });

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const searchproducts = products.filter((product) =>
    product.title?.toLowerCase().includes(search.toLowerCase()),
  );

  const addproduct = (product) => {
    setProducts((prev) => [...prev, product]);
    console.log("product added");
  };

  const delete_product = (id) => {
    const update_products = products.filter((product) => product.id !== id);
    setProducts(update_products);
  };

  const addtoCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                qty: item.qty + 1,
                subtotal: (item.qty + 1) * item.price,
              }
            : item,
        );
      } else {
        return [...prev, { ...product, qty: 1, subtotal: product.price }];
      }
    });
    navigate("/cart");
  };

  const incrementqty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id == id
          ? {
              ...item,
              qty: item.qty + 1,
              subtotal: (item.qty + 1) * item.price,
            }
          : item,
      ),
    );
  };

  const decrementqty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? {
                ...item,
                qty: item.qty - 1,
                subtotal: (item.qty - 1) * item.price,
              }
            : item,
        )
        .filter((item) => item.qty > 0),
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const checkout = () => {
    setCart([]);
    navigate("/orderConfirmation");
  };

  return (
    <>
      <Header setSearch={setSearch} cart={cart} />
      <Routes>
        <Route path="/" element={<Products products={searchproducts} />} />
        <Route
          path="/addproduct"
          element={<AddProduct addProduct={addproduct} />}
        />
        <Route
          path="/productDetails/:id"
          element={<ProductDetails products={products} addtoCart={addtoCart} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              incrementqty={incrementqty}
              decrementqty={decrementqty}
              removeFromCart={removeFromCart}
              checkout={checkout}
            />
          }
        />
        <Route path="/orderConfirmation" element={<OrderConfirm />} />
        <Route
          path="/productslist"
          element={
            <Productslist
              products={products}
              addProduct={addproduct}
              delete_product={delete_product}
            />
          }
        />
        <Route path="*" element={< NotFound />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
