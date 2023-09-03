import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
// CSS 
import styles from "./CSS/itemCard.module.css"
// Import Redux 
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeFromCart } from '../ReduxToolKit/cartReducer';
// Notify 
import { notify } from "../Components/notify";


const ItemCard = ({ id, title, price, description, category, image }) => {
    const dispatch = useDispatch();

    const handleAddToCart = (e) => {
        const newItem = {
            id, title, price, description, category, image
        };
        dispatch(addItem(newItem));
        console.log(newItem);
    };


    return (
        <div className={`w-full max-w-sm bg-white border border-gray-300 rounded-lg shadow m-1 flex flex-col justify-between ${styles.cardContainer}`} >
            {/* Card image */}
            <img className={`p-8 rounded-t-lg ${styles.cardContainerImage}`} src={image} alt={category} />
            {/* description of the product name,price, add button */}
            <div className={`px-5 pb-5`}>
                <h5 className={`text-xl font-semibold tracking-tight text-gray-900 ${styles.cardContainerTitle}`}>
                    {title}
                </h5>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 ">
                        ₹{price}
                    </span>
                    {/* <button
                        className={`text-white ${isItemInCart ? 'bg-red-700 hover:bg-red-800' : 'bg-blue-700 hover:bg-blue-800'} focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center ${isItemInCart ? 'dark:bg-red-600 dark:hover:bg-red-700' : 'dark:bg-blue-600 dark:hover:bg-blue-700'
                            }`}
                        onClick={handleAddToCart}
                    >
                        <FontAwesomeIcon icon={faCartPlus} className="mr-2" />
                        {isItemInCart ? 'Remove from cart' : 'Add to cart'}
                    </button> */}
                    <button
                        className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700`}
                        onClick={(e) => handleAddToCart(e)}
                    >
                         <FontAwesomeIcon icon={faCartPlus} className="mr-2" />
                        Add to Cart
                    </button>
                </div>
            </div>

        </div>

    );
};

export default ItemCard;
