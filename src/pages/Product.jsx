import React from "react";
import { Link } from "react-router-dom";
import { arr } from "../InitData/Data.js";

const Product = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-4 mt-0">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-[1440px] mx-auto">
        {arr.map((item) => (
          <Link
            to={`/show/${item.id}`}
            key={item.id}
            className="bg-white rounded-3xl shadow-lg overflow-hidden transform hover:scale-[1.03] hover:shadow-xl transition duration-300 ease-in-out"
          >
            <img
              src={item.image.url}
              alt={item.name}
              className="w-full h-70 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-1 font-serif">
                {item.title}
              </h2>
              <p className="text-indigo-700 font-medium text-base">
                ₹{item.price} / night
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Product;
