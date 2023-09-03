import React, { useState, useEffect } from 'react';
import ItemCard from './ItemCard';
import Loader from './Loader';
import FilterComponent from './FilterComponent';
// import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsAndStore } from '../ReduxToolKit/productReducer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


function ItemCardList() {
    // const [products, setproducts] = useState([]);
    // useEffect(() => {
    //     axios.get("https://fakestoreapi.com/products")
    //         .then(res => {
    //             console.log(res.data);
    //             setproducts(res.data);
    //             // console.log(products);
    //         })
    // }, []);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProductsAndStore()); // Dispatch the action
    }, [dispatch]);

    // Retrieve products from the Redux store
    const products = useSelector(state => state.products.products);
    const loading = useSelector(state => state.products.loading);

    const [price, setPrice] = useState(2000); // Initialize price state
    const [category, setCategory] = useState(''); // Initialize category state
    const [searchTerm, setSearchTerm] = useState(''); // Initialize Search state

    const filteredProducts = products.filter((product) => {
        // Apply filters based on price and category
        return product.price <= price && (category === '' || product.category === category) &&
            product.title.toLowerCase().includes(searchTerm.toLowerCase()); // Filter by search term
    });

    return (
        <>
            <div className='flex' >
                {/* Filter Side Bar  */}
                <FilterComponent setPrice={setPrice} setCategory={setCategory} price={price} />
                <div className="flex-1">
                    {/* Search Bar  */}
                    <div className="p-4 bg-white shadow-md flex items-center sticky right-0" style={{ top: "56px" }}>
                        <FontAwesomeIcon icon={faSearch} className="text-gray-400 mr-3" />
                        <input
                            type="text"
                            placeholder="Search by product Name..."
                            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    {loading ? (
                        <Loader />
                    ) : (
                        <div className="flex flex-wrap p-0 md:p-6 w-full p-1">
                            {filteredProducts.map((product) => (
                                <ItemCard
                                    key={product.id}
                                    id={product.id}
                                    title={product.title}
                                    price={product.price}
                                    description={product.description}
                                    category={product.category}
                                    image={product.image}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default ItemCardList;