// Modal.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

const Modal = ({ product, onClose, onAddToCart }) => {
  return (
    <div className="fixed bg-black bg-opacity-75 inset-0 flex items-center justify-center z-50 overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div className="relative w-1/2 mx-auto my-6"style={{minWidth:"700px", height:"80%"}}>
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col md:flex-row w-full bg-white outline-none focus:outline-none">
          {/* Left Side */}
          <div className="md:w-1/2 p-6">
            <img src={product.image} alt={product.title} className="h-1/2 rounded-lg" />
            <p className="text-base text-gray-500 mt-4"><span className='font-semibold text-red-600'>Category: </span>{product.category}</p>
            <p className="text-2xl font-bold text-gray-700">&#x20B9;{product.price}</p>
          </div>
          {/* Right Side */}
          <div className="md:w-1/2 p-6">
            <h3 className="text-3xl font-semibold mb-4">{product.title}</h3>
            <div className="my-4 text-gray-600 text-lg leading-relaxed">
              <p>{product.description}</p>
            </div>
            {/* "Add to Cart" Button */}
            <div className="flex items-center justify-end mt-auto">
              <button
                        className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700`}
                        type="button"
                style={{ transition: 'all .15s ease' }}
                onClick={() => {
                  onAddToCart(product);
                  onClose();
                }}
              >
                <FontAwesomeIcon icon={faCartPlus} className="mr-2" />
                Add to Cart
              </button>
            </div>
          </div>
          {/* Close Button */}
          <button
            className="p-1 md:p-2 absolute top-2 right-2 bg-transparent border-0 text-gray-500 text-3xl md:text-4xl leading-none font-semibold outline-none focus:outline-none"
            onClick={onClose}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
