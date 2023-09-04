import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-red-500 text-white">
      <FontAwesomeIcon icon={faExclamationTriangle} className="text-5xl mb-4" />
      <h1 className="text-4xl font-bold mb-2">Oops! Something went wrong</h1>
      <p className="text-lg">We apologize for the inconvenience. Please try again later.</p>
      <NavLink to="/" className="mt-4 bg-white text-red-500 hover:bg-red-100 text-lg font-semibold py-2 px-6 rounded-lg">
        Go Back
      </NavLink>
    </div>
  );
};

export default ErrorPage;
