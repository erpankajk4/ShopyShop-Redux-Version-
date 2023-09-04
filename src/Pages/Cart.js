import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { fetchCartProducts, purchase, } from "../ReduxToolKit/cartReducer";
import CartItem from "../Components/CartItem";
import Loader from '../Components/Loader';

const Cart = () => {
  // State to store the total price of items in the cart
  const [totalPrice, setTotalPrice] = useState(0);

  const dispatch = useDispatch();
  const userUID = useSelector((state) => state.userReducer.userUID);
  const cartItems = useSelector((state) => state.myCartReducer.cartItems);
  const loading = useSelector((state) => state.myCartReducer.loading);

  useEffect(() => {
    if (userUID) {
      // Dispatch the fetchCartProducts action with the user's UID
      dispatch(fetchCartProducts(userUID));
    }
  }, [dispatch, userUID]);

  useEffect(() => {
    // Calculate and set the total price
    const newTotalPrice = cartItems.reduce((total, item) => {
      return total + item.price * item.qty;
    }, 0);

    setTotalPrice(newTotalPrice.toFixed(2));
  }, [cartItems]);


  const handlePurchase = async (e) => {
    // Handle purchase logic here
    e.preventDefault();
    // Dispatch the purchase action to update the Firestore and Redux store
    await dispatch(purchase());
    // Reset the total price to 0 after purchase
    setTotalPrice(0);
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="flex flex-wrap justify-between">
        {/* Cart items displayed using CartItem component */}
        {loading ? (
          <Loader />
        ) : (
          <div className="w-full md:w-2/3">
            <h1 className="text-2xl font-semibold">Your Cart</h1>
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cartItems.map((item) => (
                  <CartItem
                    key={item.itemRef}
                    itemRef={item.itemRef}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    description={item.description}
                    category={item.category}
                    image={item.image}
                    qty={item.qty}
                  />
                ))}
              </div>
            )}
          </div>)}

        {/* Purchase box displaying total price and purchase button */}
        <div className="w-full md:w-1/3 mt-4 md:mt-0">
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-semibold">Total Price:</h1>
              <h2 className="text-2xl">&#x20B9; {totalPrice}</h2>
            </div>
            {/* Shipping Carge DEMO  */}
            <div className="flex justify-between items-center">
              <h2 className="text-l font-semibold">Shipping Charge:</h2>
              <h2 className="text-l">&#x20B9; 70</h2>
            </div>
            {/* Purchase button  */}
            <button
              onClick={(e) => handlePurchase(e)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mt-4"
            >
              <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;