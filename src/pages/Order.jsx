import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { arr } from "../InitData/Data";
import { OrderData } from "../InitData/Order";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";
export default function Order() {
  const { id } = useParams();
  const { user } = React.useContext(AuthContext);
  const [itemData, setItemData] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const item = arr.find((item) => item.id === parseInt(id));
    setItemData(item);
  }, [id]);

  useEffect(() => {
    if (itemData) {
      setTotalAmount(itemData.price * quantity);
    }
  }, [quantity, itemData]);

  function increase() {
    setQuantity((prev) => prev + 1);
  }

  function decrease() {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  }

  function confo() {
    OrderData.push({ ...itemData, quantity });
    alert(`✅ Successfully booked room: ${itemData.title}`);
  }

  function DeleteRooms() {
    alert("❌ Booking cancelled.");
    navigate("/")

  }

  if (!itemData) {
    return (
      <div className="flex items-center justify-center h-screen text-center">
        <h1 className="text-2xl font-semibold text-red-500">Hotel not found!</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <img
          src={itemData.image.url}
          alt={itemData.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">{itemData.title}</h2>
          <p className="text-gray-600">{itemData.description}</p>
          <p className="text-lg font-semibold text-indigo-600">₹{itemData.price} / night</p>
          <p className="text-sm text-gray-500">📍 Location: {itemData.location || "Unknown"}</p>

          {/* Quantity Controls */}
          <div className="flex items-center gap-4 mt-4">
            <button
              onClick={decrease}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              −
            </button>
            <span className="text-lg font-medium">{quantity}</span>
            <button
              onClick={increase}
              className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
            >
              +
            </button>
          </div>

          {/* Total Amount */}
          <p className="text-md font-medium text-gray-700 mt-2">
            Total: ₹{totalAmount}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-6">
            <Link to={`/Admin/${itemData.id}`}
              onClick={confo}
              className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
            >
              Confirm Booking
            </Link>
            <button
              onClick={DeleteRooms}
              className="bg-gray-300 text-gray-800 px-6 py-2 rounded hover:bg-gray-400 transition"
            >
              Cancel
            </button>
            <Link
              to="/rooms"
              className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600 transition"
            >
              🔙 Back to Rooms
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
