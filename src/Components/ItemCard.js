import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
// importing Product Modal
import Modal from "./ProductDetailsModal"
// CSS 
import styles from "./CSS/itemCard.module.css"
// Import Redux 
import { useDispatch} from "react-redux";
import { addItem} from '../ReduxToolKit/cartReducer';

const ItemCard = ({ id, title, price, description, category, image }) => {
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const dispatch = useDispatch();

    const handleAddToCart = (e) => {
        const newItem = {
            id, title, price, description, category, image
        };
        dispatch(addItem(newItem));
        // console.log(newItem);
        setIsAddedToCart(true);
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (<>
        <div className={`w-full max-w-sm bg-white border border-gray-300 rounded-lg shadow m-1 flex flex-col justify-between ${styles.cardContainer}`} >
            {/* Card image */}
            <img className={`p-8 rounded-t-lg ${styles.cardContainerImage}`} src={image} alt={category} />
            {/* description of the product name,price, add button */}
            <div className={`px-5 pb-5`}>
                <h5 className={`text-xl font-semibold tracking-tight text-gray-900 cursor-pointer ${styles.cardContainerTitle}`}>
                    <span className="hover:underline" onClick={toggleModal}>
                        {title}
                    </span>
                </h5>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 ">
                        ₹{price}
                    </span>
                    {/* Add to cart Button  */}
                    <button
                        className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700`}
                        onClick={(e) => handleAddToCart(e)}
                        disabled={isAddedToCart} // Disable button if item is added
                    >
                        <FontAwesomeIcon icon={faCartPlus} className="mr-2" />
                        {isAddedToCart ? 'Added' : 'Add to Cart'}
                    </button>
                </div>
            </div>
        </div>
        {/* Display the modal when isModalOpen is true */}
        {isModalOpen && (
            <Modal
                product={{
                    title, price, description, category, image
                }}
                onClose={toggleModal}
                onAddToCart={handleAddToCart}
            />
        )}
    </>
    );
};

export default ItemCard;
