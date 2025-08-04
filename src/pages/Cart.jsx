import React from "react";
import { useParams } from "react-router-dom";
import { arr } from "../InitData/Data";
import { cartData } from "../InitData/Card";
import { Link } from "react-router-dom";
function Cart() {
  const { id } = useParams();

  // Find and add item only once if not already added
  const selectedItem = arr.find((item) => item.id === parseInt(id));
  if (selectedItem && !cartData.some((el) => el.id === selectedItem.id)) {
    cartData.push(selectedItem);
  }
  console.log(cartData)

  // Check if cartData is empty
  if (cartData.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-700">🛒 Cart is Empty!</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-10">
      <div className="max-w-[1000px] mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">🛒 Your Cart</h1>

        <div className="space-y-4">
          {cartData.map((itemData, idx) => (
            <div key={idx}>
              <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition hover:scale-[1.01]">
                {/* Image */}
                <div className="md:w-1/2 w-full">
                  <img
                    src={itemData?.image?.url || "https://via.placeholder.com/300"}
                    alt={itemData?.title || "Product image"}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="md:w-1/2 w-full p-6 flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 font-serif mb-2">
                      {itemData.title}
                    </h2>
                    <p className="text-gray-600 mb-1">
                      {itemData.description || "No description provided."}
                    </p>
                    <p className="text-indigo-700 font-semibold text-lg mb-1">
                      ₹{itemData.price} / night
                    </p>
                    <p className="text-gray-500 mb-3">
                      Location: {itemData.location || "Unknown"}
                    </p>

                    {/* Amenities */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
                      {[
                        { text: "📶 Free Wi-Fi", bg: "blue" },
                        { text: "🍽️ Complimentary Breakfast", bg: "yellow" },
                        { text: "🏊 Swimming Pool Access", bg: "cyan" },
                        { text: "❄️ Air Conditioning", bg: "pink" },
                        { text: "🛎️ Room Service", bg: "green" },
                        { text: "🌿 Good Environment", bg: "purple" },
                      ].map((amenity, i) => (
                        <p
                          key={i}
                          className={`flex items-center gap-2 bg-${amenity.bg}-100 text-${amenity.bg}-800 font-medium px-4 py-2 rounded-lg shadow-sm`}
                        >
                          {amenity.text}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex space-x-6 mt-5">
                    <Link to={`/Order/${itemData.id}`} className="px-8 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded transition">
                      Book Room
                    </Link>
                    <button className="px-8 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 font-semibold transition">
                      Delete Room
                    </button>
                  </div>
                </div>
              </div>

              <hr className="my-8 border-gray-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cart;
