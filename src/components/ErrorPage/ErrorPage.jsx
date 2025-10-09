import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center min-h-[70vh] px-4 text-center">
      <h1 className="text-5xl md:text-6xl font-bold text-purple-600 mb-4">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-gray-800">
        Page Not Found
      </h2>
      <p className="text-gray-500 mb-6 text-sm md:text-base">
        Oops! The page you are looking for does not exist.
      </p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
      >
        Back to Home
      </button>
    </div>
  );
};

export default ErrorPage;
