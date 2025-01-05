import React from 'react';

const Filters = ({ onFilterChange, onSortChange }) => {
    return (
        <div className="filters">
            <select onChange={(e) => onFilterChange('category', e.target.value)}>
                <option value="">All Categories</option>
                <option value="electronics">Electronics</option>
                <option value="jewelery">Jewelry</option>
                <option value="men's clothing">Men's Clothing</option>
                <option value="women's clothing">Women's Clothing</option>
            </select>
            <select onChange={(e) => onSortChange(e.target.value)}>
                <option value="">Sort by</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
            </select>
        </div>
    );
};

export default Filters;
