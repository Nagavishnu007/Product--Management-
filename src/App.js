import React, { useState } from 'react';
import ProductList from "./Componenets/ProductList";
import AddProduct from "./Componenets/AddProduct";
import EditProduct from "./Componenets/EditProduct"
import FilterSort from "./Componenets/FilterSort"
import './styles.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const editProduct = (updatedProduct) => {
    setProducts(products.map((product) => 
      product.id === updatedProduct.id ? updatedProduct : product
    ));
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const filteredProducts = products.filter(product =>
    product.category.includes(filter)
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === 'name') return a.name.localeCompare(b.name);
    if (sort === 'price') return a.price - b.price;
    return 0;
  });

  return (
    <div className="container">
      <h1>Product Management Dashboard</h1>
      <AddProduct addProduct={addProduct} />
      {editingProduct && (
        <EditProduct 
          product={editingProduct} 
          editProduct={editProduct} 
          setEditingProduct={setEditingProduct} 
        />
      )}
      <FilterSort setFilter={setFilter} setSort={setSort} />
      <ProductList 
        products={sortedProducts} 
        setEditingProduct={setEditingProduct} 
        deleteProduct={deleteProduct} 
      />
    </div>
  );
};

export default App;