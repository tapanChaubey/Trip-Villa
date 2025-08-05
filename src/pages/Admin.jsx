import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { arr } from "../InitData/Data";
import { BookedData } from "../InitData/Booked";

// Optional: Random fallback date
function getRandomDateTime() {
  const start = new Date(2023, 0, 1);
  const end = new Date();
  const randomTimestamp = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  return randomTimestamp.toLocaleString();
}

export default function Admin() {
  const { id } = useParams();
  const item = arr.find((item) => item.id === parseInt(id));

  useEffect(() => {
    const alreadyBooked = BookedData.some((data) => data.id === item?.id);
    if (item && !alreadyBooked) {
      BookedData.push({
        ...item,
        bookedAt: new Date().toLocaleString(),
      });
    }
  }, [item]);

  return (
    <div className="p-4 max-w-7xl mx-auto">
      {BookedData.map((itemData, idx) => (
        <div
          key={idx}
          className={`mb-6 rounded-lg transition-shadow duration-300 ${
            idx % 2 === 0 ? "bg-gradient-to-r from-blue-50 to-white" : "bg-gradient-to-r from-purple-50 to-white"
          } hover:shadow-lg`}
        >
          {/* Booking Time */}
          <div className="px-4 pt-3">
            <p className="text-sm font-semibold text-indigo-600">
              Booking Time: {itemData.bookedAt || getRandomDateTime()}
            </p>
          </div>

          {/* Product Row */}
          <div className="flex flex-col md:flex-row items-start gap-4 p-4">
            {/* Image Column */}
            <div className="w-full md:w-1/4">
              <img
                src={itemData.image.url}
                alt="full"
                className="w-full h-40 object-cover rounded-md border border-gray-300"
              />
            </div>

            {/* Details Column */}
            <div className="w-full md:w-3/4 space-y-2 text-sm">
              <p className="text-lg font-bold text-gray-800">
                {itemData.title}
              </p>
              <p className="text-gray-700">{itemData.description}</p>
              <p className="text-green-700 font-semibold">₹{itemData.price}</p>
              <p className="text-gray-600">📍 {itemData.location}</p>
              <p className="text-red-600 font-bold uppercase tracking-wide">
                Status: Booked
              </p>
            </div>
          </div>

          {/* Divider */}
          <hr className="mx-4 border-t border-gray-300" />
        </div>
      ))}
    </div>
  );
}
