import React, { useRef, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from "../ReduxToolKit/userReducer";

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userUID = useSelector((state) => state.userReducer.userUID);

  // Refs to store email and password input elements
  const emailRef = useRef("");
  const passwordRef = useRef();

  useEffect(() => {
    // Populate the email and password fields with the values from localStorage, if available
    emailRef.current.value = localStorage.getItem("email") || "";
    passwordRef.current.value = localStorage.getItem("password") || "";
  }, []);



  // Function to handle form submission
  const onSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // Dispatch the signIn action with user credentials
    dispatch(signIn({ email, password }));

    // Save the email and password in localStorage for persistence
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    // Naigate to sign up page if user not found
    if(!userUID) {
      navigate("/");
  } 
    // Navigate to the home page after successful sign-in
    else navigate("/signin");
  };

  return (
    <div className="flex justify-center items-center  bg-gray-100" style={{ height: "72vh" }}>
      <div className="border border-gray-300 p-6 rounded shadow-md w-full sm:w-96">
        <form onSubmit={(e) => onSubmit(e)}>
          <h2 className="text-lg font-semibold mb-4">Email</h2>
          <input
            ref={emailRef}
            type="email"
            placeholder="Please Enter Email here"
            className="w-full p-2 border rounded-md mb-4 focus:ring focus:ring-blue-300"
          />
          <h2 className="text-lg font-semibold mb-4">Password</h2>
          <input
            ref={passwordRef}
            type="password"
            placeholder="Please Enter Password here"
            className="w-full p-2 border rounded-md mb-4 focus:ring focus:ring-blue-300"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Sign-In
          </button>
        </form>
        <NavLink to="/signup" className="text-blue-500 mt-2 block">
          New User? Sign Up here
        </NavLink>
      </div>
    </div>
  );
};
