import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { notify } from "../Components/notify";
import { logOut } from "../ReduxToolKit/userReducer";

import { Outlet, NavLink, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';

function NavBar() {
    const navigate = useNavigate();
    const dispatch = useDispatch(); // Get the dispatch function
    const userUID = useSelector((state) => state.userReducer.userUID); // Get the userUID from Redux store
    const cartItems = useSelector((state) => state.myCartReducer.cartItems);
    const [totalQuantityInCart, setTotalQuantityInCart] = useState(0); // State to store total quantity in cart

    // Function to handle sign-out
    const handleSignOut = (e) => {
        e.preventDefault();
        dispatch(logOut()) // Dispatch the logOut action
            .then(() => {
                notify('success', 'Signed out successfully');
                navigate("/signin");
                // Reset the cart badge when signing out
                setTotalQuantityInCart(0);
            })
            .catch((error) => {
                console.error('Sign-out error:', error);
                notify('error', 'Error signing out');
            });
    };

    // Function to handle the Cart link click
    const handleCartClick = (e) => {
        e.preventDefault();
        if (!userUID) {
            // If the user is not signed in, navigate to the sign-in page
            notify('info', 'Please sign in to view your cart.');
            navigate("/signin");
        }
        else navigate("/cart");
    };

    useEffect(() => {
        // Calculate the total quantity of items in the cart
        const newTotalQuantity = cartItems.reduce((total, item) => total + item.qty, 0);
        setTotalQuantityInCart(newTotalQuantity);
    }, [cartItems]);

    return (
        <>
            <nav className="bg-gray-800 p-3 sticky top-0">
                <div className="max-w-8xl mx-auto flex items-center justify-between">
                    <NavLink to="/" className="text-white hover:text-gray-300">
                        <div className="flex items-center">
                            <img className="h-8" src={require("../assets/favicon.png")} alt="Logo" />
                            <span className="text-white font-semibold text-lg">hopyShop</span>
                        </div>
                    </NavLink>
                    <div className="flex space-x-4">
                        {/* Home Tab  */}
                        <NavLink to="/" className="text-white hover:text-gray-300 p-1">
                            <FontAwesomeIcon icon="home" className="mr-1" />
                            Home
                        </NavLink>
                        {/* My Order Tab  */}
                        <NavLink to="/myorder" className="text-white hover:text-gray-300 p-1">
                            <FontAwesomeIcon icon="clipboard-list" className="mr-1" />
                            My Order
                        </NavLink>
                        {/* Cart Tab  */}
                        <NavLink to="/cart" className="text-white hover:text-gray-300 relative p-1" onClick={e => handleCartClick(e)}>
                            <FontAwesomeIcon icon="shopping-cart" className="mr-1" />
                            Cart
                            {/* Baget Element to display product quantity  */}
                            {totalQuantityInCart > 0 && (
                                <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 py-1 text-xs -mt-1 -mr-3" style={{ zIndex: -999 }}>
                                    {totalQuantityInCart}
                                </span>
                            )}
                        </NavLink>
                        {/* Signin - SignOut  Tab  */}
                        {!userUID ? (
                            <NavLink
                                to="/signin"
                                className="text-white hover:text-gray-300 bg-red-600 rounded p-1 px-2"
                            >
                                <FontAwesomeIcon icon="user" className="mr-1" />
                                SignIn
                            </NavLink>
                        ) : (
                            <button
                                className="text-white hover:text-gray-300 rounded p-1 px-2"
                                onClick={(e) => handleSignOut(e)}
                            >
                                <FontAwesomeIcon icon="user" className="mr-1" />
                                SignOut
                            </button>
                        )}
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default NavBar;
