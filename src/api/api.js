import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com/products';

export const fetchProducts = async (page = 1, category = null, limit = 10) => {
    try {
        const response = await axios.get(`${BASE_URL}?_page=${page}&_limit=${limit}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching products');
    }
};
