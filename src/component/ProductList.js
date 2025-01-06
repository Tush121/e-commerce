import React, { useState, useEffect, useCallback } from 'react';
import ProductItem from '../component/ProductItem';
import ProductModal from '../component/ProductModal';
import Filters from '../component/Filter';
import { fetchProducts } from '../api/api';
import LoadingIndicator from '../component/LoadingIndicator';
import "./productList.css";

const ProductList = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [filters, setFilters] = useState({ category: '', sort: '' });
    const [error, setError] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);

    const loadProducts = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const newProducts = await fetchProducts(page);
            setProducts((previousProd) => [...previousProd, ...newProducts]);
            setAllProducts((previousProd) => [...previousProd, ...newProducts]);
        } catch (error) {
            setError('Failed to load products. Please try again later.');
        } finally {
            setLoading(false);
        }
    }, [page]);

    useEffect(() => {
        loadProducts();
    }, [page, loadProducts]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const viewportHeight = window.innerHeight;
            const fullHeight = document.documentElement.scrollHeight;
            if (scrollTop > 100) {
                setIsScrolled(scrollTop + viewportHeight >= fullHeight);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (isScrolled && !loading) {
            setIsScrolled(false);
            setPage(page + 1);
            loadProducts();
        }
    }, [isScrolled]);

    useEffect(() => {
        let filteredProducts = [...allProducts];

        if (filters.category) {
            filteredProducts = filteredProducts.filter((product) => product.category === filters.category);
        }

        if (filters.sort === 'price-asc') {
            filteredProducts.sort((a, b) => a.price - b.price);
        } else if (filters.sort === 'price-desc') {
            filteredProducts.sort((a, b) => b.price - a.price);
        }

        setProducts(filteredProducts);
    }, [filters, allProducts]);

    const handleFilterChange = (key, value) => {
        setFilters((prev) => ({ ...prev, [key]: value }));
    };

    const handleSortChange = (value) => {
        setFilters((prev) => ({ ...prev, sort: value }));
    };

    const openModal = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    return (
        <div className="product-list">
            {!loading && <Filters onFilterChange={handleFilterChange} onSortChange={handleSortChange} />}

            {error && <div className="error-message">{error}</div>}

            <div className="products-grid">
                {products.map((product, index) => (
                    <ProductItem key={index} index={index} product={product} onClick={openModal} />
                ))}
            </div>

            {loading && !error && <LoadingIndicator />}

            <ProductModal isOpen={isModalOpen} product={selectedProduct} onClose={closeModal} />
        </div>
    );
};

export default ProductList;
