import React from 'react';

const ProductItem = ({ product, onClick, index }) => {
    return (
        <div className="product-card" onClick={() => onClick(product)} key={`${index}_${product.id}`}>
            <img src={product.image} alt={product.title} />
            <h4>{product.title}</h4>
            <p>${product.price}</p>
            <p>{product.category}</p>
        </div>
    );
};

export default ProductItem;
