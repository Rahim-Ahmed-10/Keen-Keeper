import React from 'react';

const NotFoundPage = () => {
    return (
       
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
      <div className="text-center max-w-md">
        
        <h1 className="text-7xl font-extrabold text-blue-500 mb-4">404</h1>
        
        <h2 className="text-2xl font-semibold mb-3">
          Oops! Page not found
        </h2>
        
        <p className="text-gray-400 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => window.history.back()}
            className="px-5 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition"
          >
            Go Back
          </button>

          <a
            href="/"
            className="px-5 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition"
          >
            Home
          </a>
        </div>

      </div>
    </div>

    );
};

export default NotFoundPage;