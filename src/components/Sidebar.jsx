import React, { useState } from 'react';

const Sidebar = ({ onSortChange }) => {
  const [sortOption, setSortOption] = useState('');

  const handleSortChange = (event) => {
    const selectedOption = event.target.value;
    setSortOption(selectedOption);
    onSortChange(selectedOption);
  };

  return (
    <div className='w-full h:10 xl:h-full xl:w-48 p-5 bg-white border-r border-gray-300'>
      <h2 className="font-bold text-xl">Sort Options</h2>
      <select value={sortOption} onChange={handleSortChange} className='border-black border rounded-lg outline-none w-48 p-2.5 mt-2.5' >
        <option value="featured">Featured</option>
        <option value="priceLowToHigh">Price: Low to High</option>
        <option value="priceHighToLow">Price: High to Low</option>
      </select>
    </div>
  );
};

export default Sidebar;
