import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Addproductform = ({ addProduct }) => {
  
  const [preview, setPreview] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    brand: "",
    stock: 0,
    price: 0,
    desc: "",
    image: null,
  });
  const navigate = useNavigate();

  const handleinput = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name == "price" || name == "stock" ? Number(value) : value,
    });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    console.log("File:", file); // ✅ check file

    const reader = new FileReader();

    reader.onloadend = () => {
      console.log("Base64:", reader.result); // ✅ check base64
      setPreview(reader.result);
    };

    reader.readAsDataURL(file);
  };

  


  const handleSubmit = (e) => {
    e.preventDefault();
    const newproduct = {
      id: Date.now(),
      ...formData,
      image: preview,
    };
    addProduct(newproduct);
    setFormData({
      title: "",
      category: "",
      brand: "",
      stock: "",
      price: "",
      desc: "",
      image: "",
    });
    setPreview(null);
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Product Name</label>
        <input
          type="text"
          name="title"
          className="form-control mb-2"
          onChange={handleinput}
          value={formData.title}
          required
        />

        <label htmlFor="category">Category</label>
        <input
          type="text"
          name="category"
          className="form-control mb-2"
          onChange={handleinput}
          value={formData.category}
          required
        />

        <label htmlFor="category">Brand</label>
        <input
          type="text"
          name="brand"
          className="form-control mb-2"
          onChange={handleinput}
          value={formData.brand}
          required
        />

        <label htmlFor="Stock">Stock</label>
        <input
          type="text"
          name="stock"
          className="form-control mb-2"
          onChange={handleinput}
          value={formData.stock}
          required
        />

        <label htmlFor="Price">Price</label>
        <input
          type="text"
          name="price"
          className="form-control mb-2"
          onChange={handleinput}
          value={formData.price}
          required
        />

        <label htmlFor="Description">Description</label>
        <textarea
          type="text"
          name="desc"
          className="form-control mb-2"
          onChange={handleinput}
          value={formData.desc}
          required
        />

        <label htmlFor="product image">product image</label>
        <input
          type="file"
          name="image"
          className="form-control mb-2"
          onChange={handleImage}
          // value={formData.image}
          required
        />
        {preview && <img src={preview} alt="" width="120" />}

        <button className="w-100 bg-dark p-1 text-light rounded mt-2">
          add product
        </button>
      </form>
    </div>
  );
};

export default Addproductform;
