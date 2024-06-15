import React, { useState } from 'react';

const Sidebar = ({ onSortChange }) => {
  const [sortOption, setSortOption] = useState('');

  const handleSortChange = (event) => {
    const selectedOption = event.target.value;
    setSortOption(selectedOption);
    onSortChange(selectedOption);
  };

  return (
    <div className='' style={styles.sidebar}>
      <h2 className="font-bold text-xl">Sort Options</h2>
      <select value={sortOption} onChange={handleSortChange} className='border-black border rounded-lg outline-none' style={styles.select}>
        <option value="featured">Featured</option>
        <option value="priceLowToHigh">Price: Low to High</option>
        <option value="priceHighToLow">Price: High to Low</option>
      </select>
    </div>
  );
};

const styles = {
  sidebar: {
    width: '200px',
    padding: '20px',
    background: 'white',
    borderRight: '1px solid #ddd',
  },
  select: {
    width: '100%',
    padding: '10px',
    marginTop: '10px',
  },
};

export default Sidebar;
