// src/LoadingPage.js
import React from 'react';
import { PropagateLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 w-full">
      <div className="text-center">
        <PropagateLoader color="#6366F1" size={15} />
        <h1 className="mt-4 text-lg text-gray-900 font-semibold">Products are Loading...</h1>
        <p className="mt-4 text-gray-700">
            It takes approx. 8 Seconds
        </p>
        <p className="mt-4 text-gray-700">
            As Devloper is very Slow!!
        </p>
      </div>
    </div>
  );
};

export default Loader;
