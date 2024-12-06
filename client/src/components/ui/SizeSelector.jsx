import React from 'react';

const SizeSelector = ({ selectedSize, onSizeChange }) => {
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  return (
    <div>
      <label htmlFor="size-select" style={{ marginRight: '10px' }}>Размер:</label>
      <select
        id="size-select"
        value={selectedSize}
        onChange={(e) => onSizeChange(e.target.value)}
      >
        {sizes.map(size => (
          <option key={size} value={size}>{size}</option>
        ))}
      </select>
    </div>
  );
};

export default SizeSelector;