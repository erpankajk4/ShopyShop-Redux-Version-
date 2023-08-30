import React, { useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { notify } from "../Components/notify";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../FireBaseDB/firebaseInit';

export default function SignUp() {
    const navigate = useNavigate();

    // Refs to store name, email, and password input elements
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();


    // Function to handle form submission
    const onSubmit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;


        // Sign up new users with email and password using Firebase Auth
        createUserWithEmailAndPassword(auth, email, password)
            .then(async () => {
                // Update the user's display name after successful sign-up
                await updateProfile(auth.currentUser, {
                    displayName: name
                });

                // Save the email and password in localStorage for persistence
                localStorage.setItem("email", email);
                localStorage.setItem("password", password);

                // Navigate to the sign-in page after successful sign-up
                navigate("/signin");
            })
            .catch((error) => {
                const errorMessage = error.message;
                notify("error", errorMessage);
            });
    };


    return (
      <div className="flex justify-center items-center h-screen bg-gray-100" style={{height:"72vh"}}>
      <div className="border border-gray-300 p-6 rounded shadow-md w-full sm:w-96">
        <form onSubmit={(e) => onSubmit(e)}>
          <h2 className="text-lg font-semibold mb-4">Name</h2>
          <input
            ref={nameRef}
            type="text"
            placeholder="Please Enter Your Name here"
            maxLength={15}
            required
            className="w-full p-2 border rounded-md mb-4 focus:ring focus:ring-blue-300"
          />
          <h2 className="text-lg font-semibold mb-4">Username</h2>
          <input
            ref={emailRef}
            type="email"
            placeholder="Please Enter Email here"
            required
            className="w-full p-2 border rounded-md mb-4 focus:ring focus:ring-blue-300"
          />
          <h2 className="text-lg font-semibold mb-4">Password</h2>
          <input
            ref={passwordRef}
            type="password"
            placeholder="Please Enter Password here"
            minLength={6}
            required
            className="w-full p-2 border rounded-md mb-4 focus:ring focus:ring-blue-300"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Sign Up
          </button>
        </form>
        <NavLink to="/signin" className="text-blue-500 mt-2 block">
          Already have an account? Sign In here
        </NavLink>
      </div>
    </div>
  );
};
