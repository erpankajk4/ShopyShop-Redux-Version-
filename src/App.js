import React from 'react'
// react router
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// all the pages and component to render
import NavBar from "./Components/NavBar"
import Home from "./Pages/Home";
import MyOrder from "./Pages/MyOrder";
import Cart from "./Pages/Cart";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import ErrorPage from "./Pages/ErrorPage";

function App() {
  // all the link routes
  const router = createBrowserRouter([
    {
      path: "/", element: <NavBar />,
      errorElement: <><NavBar /><ErrorPage /></>,
      children: [
        { index: true, element: <Home /> },
        { path: "/myorder", element: <MyOrder /> },
        { path: "/cart", element: <Cart /> },
        { path: "/signin", element: <SignIn /> },
        { path: "/signup", element: <SignUp /> },
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        closeOnClick={false}
        pauseOnHover={true}
        draggable={true}
      />
    </>
  )
}

export default App
