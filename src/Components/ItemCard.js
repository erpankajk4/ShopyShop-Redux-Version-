import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
// CSS 
import styles from "./CSS/itemCard.module.css"
const ItemCard = () => {
    return (
        <div className={`w-full max-w-sm bg-white border border-gray-300 rounded-lg shadow m-1 ${styles.cardContainer}`} >
            {/* Card image */}
            <img className={`p-8 rounded-t-lg`} src="https://flowbite.com/docs/images/products/apple-watch.png" alt="{category}" />
            {/* description of the product name,price, add button */}
            <div className={`px-5 pb-5`}>
                <h5 className='class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"'>
                    Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                </h5>
                <div class="flex items-center justify-between">
                    <span class="text-3xl font-bold text-gray-900 ">
                        $599
                    </span>
                    <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700">
                        <FontAwesomeIcon icon={faCartPlus} className="mr-2" />
                        Add to cart
                    </button>
                </div>
            </div>

        </div>

    );
};

export default ItemCard;
