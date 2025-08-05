import React, { useState } from "react";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheck] = useState(false);

  const formHandling = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", { name, email, password, checkbox });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 px-4">
      <form
        onSubmit={formHandling}
        className="w-full max-w-md bg-white shadow-2xl rounded-xl p-8 space-y-6 transition-all duration-300"
      >
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 tracking-wide">
            Login to{" "}
            <span className="text-rose-600">Trip</span>
            <span className="text-indigo-700">+Villa</span>
          </h2>
         
        </div>

        {/* Username */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-700 mb-1">
            Username
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            placeholder="Enter your password"
            required
          />
        </div>

        {/* Checkbox */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={checkbox}
            onChange={(e) => setCheck(e.target.checked)}
            className="accent-indigo-600 w-4 h-4"
          />
          <label className="text-sm text-gray-700">
            I agree to the{" "}
            <span className="text-indigo-600 underline cursor-pointer">
              Terms & Conditions
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 active:scale-95 transition-transform duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
}
