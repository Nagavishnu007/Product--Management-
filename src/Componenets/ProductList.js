import React, { useState } from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products, setEditingProduct, deleteProduct }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h2>Product List</h2>
      {currentProducts.map((product) => (
        <ProductItem 
          key={product.id} 
          product={product} 
          setEditingProduct={setEditingProduct} 
          deleteProduct={deleteProduct} 
        />
      ))}
      <div>
        {Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, index) => (
          <button key={index + 1} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductList;