import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Outlet, NavLink } from "react-router-dom";

function NavBar() {
    return (
        <>
            <nav className="bg-gray-800 p-3">
                <div className="max-w-8xl mx-auto flex items-center justify-between">
                    <NavLink to="/" className="text-white hover:text-gray-300">
                    <div className="flex items-center">
                        <img className="h-8" src={require("../assets/favicon.png")} alt="Logo" />
                        <span className="text-white font-semibold text-lg">hopyShop</span>
                    </div>
                    </NavLink>
                    <div className="flex space-x-4">
                        <NavLink to="/" className="text-white hover:text-gray-300">
                            <FontAwesomeIcon icon="home" className="mr-1" />
                            Home
                        </NavLink>
                        <NavLink to="/myorder" className="text-white hover:text-gray-300">
                            <FontAwesomeIcon icon="clipboard-list" className="mr-1" />
                            My Order
                        </NavLink>
                        <NavLink to="/cart" className="text-white hover:text-gray-300">
                            <FontAwesomeIcon icon="shopping-cart" className="mr-1" />
                            Cart
                        </NavLink>
                        <NavLink to="/signin" className="text-white hover:text-gray-300">
                            <FontAwesomeIcon icon="user" className="mr-1" />
                            SignIn
                        </NavLink>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default NavBar;
