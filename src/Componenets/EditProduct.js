import React, { useState, useEffect } from 'react';

const EditProduct = ({ product, editProduct, setEditingProduct }) => {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [category, setCategory] = useState(product.category);

  useEffect(() => {
    setName(product.name);
    setPrice(product.price);
    setCategory(product.category);
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = {
      id: product.id,
      name,
      price: parseFloat(price),
      category,
    };
    editProduct(updatedProduct);
    setEditingProduct(null);
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <input 
          type="number" 
          placeholder="Price" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
          required 
        />
        <input 
          type="text" 
          placeholder="Category" 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
          required 
        />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProduct;