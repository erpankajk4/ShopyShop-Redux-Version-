import React from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle, faPlusCircle, faTrash } from "@fortawesome/free-solid-svg-icons";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../ReduxToolKit/cartReducer";

const CartItem = ({ itemRef, id, title, price, description, category, image, qty }) => {
  const dispatch = useDispatch();
  return (
<div className="flex items-center space-x-4 p-4 bg-white shadow-lg rounded-lg">
  <div className="w-16 h-16">
    <img src={image} alt={`${title} Image`} className="h-full object-cover" />
  </div>
  <div className="flex-1">
    <p className="text-lg font-semibold">{title}</p>
    <div className="flex items-center space-x-2">
      <h1 className="text-xl">&#x20B9; {price}</h1>
      <div className="flex items-center space-x-2">
        <button onClick={() => dispatch(decreaseQuantity({ itemRef, qty }))}>
        <FontAwesomeIcon icon={faMinusCircle} size="lg" />
                </button>
        <span>{qty}</span>
        <button onClick={() => dispatch(increaseQuantity({ itemRef, qty }))}>
        <FontAwesomeIcon icon={faPlusCircle} size="lg" />
        </button>
      </div>
    </div>
  </div>
  <div className="ml-auto">
    <button onClick={() => dispatch(removeFromCart(itemRef))}>
    <FontAwesomeIcon icon={faTrash} size="lg" />
    </button>
  </div>
</div>

  );
};

export default CartItem;

