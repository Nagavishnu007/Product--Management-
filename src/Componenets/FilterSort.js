import React from 'react';

const FilterSort = ({ setFilter, setSort }) => {
  return (
    <div className="filter-sort">
      <h2>Filter and Sort Products</h2>
      <input 
        type="text" 
        placeholder="Filter by category" 
        onChange={(e) => setFilter(e.target.value)} 
      />
      <select onChange={(e) => setSort(e.target.value)}>
        <option value="">Sort by</option>
        <option value="name">Name</option>
        <option value="price">Price</option>
      </select>
    </div>
  );
};

export default FilterSort;