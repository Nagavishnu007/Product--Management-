import React from 'react';

const ProductItem = ({ product, setEditingProduct, deleteProduct }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <button onClick={() => setEditingProduct(product)}>Edit</button>
      <button onClick={() => deleteProduct(product.id)}>Delete</button>
    </div>
  );
};

export default ProductItem;