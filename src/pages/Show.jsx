// src/pages/Show.jsx
import React from "react";
import { arr } from "../InitData/Data";
import { Link, useParams } from "react-router-dom";
import rooms1 from "../assets/hotelImage1.jpg";
import rooms2 from "../assets/hotelImage2.jpg";
import rooms3 from "../assets/hotelImage3.jpg";
import rooms4 from "../assets/hotelImage4.jpg";
import CheckRooms from "../components/CheckRooms";
import MapBox from "../components/MapBox";
import { useContext } from "react";
import { AuthContext } from "../context";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
const imageArr = [rooms1, rooms2, rooms3, rooms4];

const Show = () => {
  const { id } = useParams();
  const item = arr.find((item) => item.id === parseInt(id));
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleCart = () => {
    if (user) {
       navigate(`/cart/${item.id}`);
    } else {
      navigate("/login");
    }
  };
const handleOrder = () => {
    if (user) {
      navigate(`/order/${item.id}`);
    } else {
      navigate("/login");
    }
  };
  if (!item) {
    return (
      <div className="text-center text-red-500 font-bold text-xl mt-10">
        Hotel not found!
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-[1340px] mx-auto bg-white rounded-xl shadow-md overflow-hidden flex flex-col px-6 sm:px-10">
        <h2 className="text-center text-xl sm:text-4xl font-extrabold text-gray-900 mt-6 mb-8 tracking-tight">
          {item.title}
        </h2>

        <div className="flex flex-col-reverse md:flex-row gap-6 pb-6 md:h-[520px]">
          <div className="w-full md:w-1/2">
            <img
              src={item.image.url}
              alt={item.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="w-full md:w-1/2 grid grid-cols-2 grid-rows-2 gap-4">
            {imageArr.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Room ${idx + 1}`}
                className="w-full h-full object-cover rounded-lg hover:scale-105 transition-all duration-200"
              />
            ))}
          </div>
        </div>

        <div className="mb-6 mt-4">
          <label htmlFor="rating" className="block text-lg font-semibold mb-2">
            Rating:
          </label>
          <fieldset className="flex gap-2">
            {[...Array(5)].map((_, index) => (
              <React.Fragment key={index}>
                <input
                  type="radio"
                  id={`rate${index + 1}`}
                  name="review[rating]"
                  value={index + 1}
                  className="peer hidden"
                />
                <label
                  htmlFor={`rate${index + 1}`}
                  title={`${index + 1} star`}
                  className="text-3xl text-gray-400 peer-hover:text-yellow-400 peer-checked:text-yellow-500 transition duration-300 cursor-pointer"
                >
                  ★
                </label>
              </React.Fragment>
            ))}
          </fieldset>
        </div>

        <div className="pb-10">
          <p className="text-lg text-xl font-extrabold text-gray-600 mb-2 italic">
            {item.location}
          </p>
          <p className="text-gray-700 text-justify mb-4 leading-relaxed text-base text-xl font-semibold">
            {item.description}
          </p>

          <ul className="text-base text-gray-700 space-y-2 list-disc pl-5 mb-6">
            <li>Free Wi-Fi</li>
            <li>Complimentary Breakfast</li>
            <li>Swimming Pool Access</li>
            <li>Air Conditioning</li>
            <li>Room Service</li>
          </ul>

          <div className="bg-green-50 text-black font-bold text-2xl p-4 rounded-xl mb-6 shadow-sm">
            ₹{item.price} / night
          </div>

          <CheckRooms />

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
            <button
              onClick={handleOrder}
              className="px-6 py-3 text-lg font-bold rounded-full text-white 
                         bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 
                         active:scale-95 transition-transform duration-300 shadow-lg"
            >
              Book Now
            </button>

            <button
              onClick={handleCart}
              className="px-6 py-3 text-lg font-bold rounded-full text-white 
                         bg-orange-500 hover:bg-orange-600 
                         focus:outline-none focus:ring-4 focus:ring-orange-300 
                         active:scale-95 transition-transform duration-300 shadow-lg"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>

      {/* Pass coordinates and title to MapBox */}
      <MapBox coordinates={item.coordinates} title={item.title} />
    </div>
  );
};

export default Show;
