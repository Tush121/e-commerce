import React from 'react';
import Modal from 'react-modal';

const ProductModal = ({ isOpen, product, onClose }) => {
    if (!product) return null;

    return (
        <Modal isOpen={isOpen} onRequestClose={onClose}>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} />
            <p>{product.description}</p>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <button onClick={onClose}>Close</button>
        </Modal>
    );
};

export default ProductModal;
