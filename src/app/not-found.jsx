import React from 'react';

const NotFound = () => {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen flex-col text-center">
      <h1 className="text-6xl font-bold text-[#fa3d3b]">404</h1>
      <p className="text-xl mt-4">Page Not Found</p>
      <p className="text-gray-500 mt-2">
        Sorry, the page you are looking for does not exist.
      </p>

      <a
        href="/"
        className="mt-6 px-6 py-2 bg-[#fa3d3b] text-white rounded-lg btn hover:btn-error transition"
      >
        Go Home
      </a>
    </div>
    </div>
  );
};

export default NotFound;