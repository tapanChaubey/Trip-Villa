import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context";

export default function Signup() {
  const navigate = useNavigate();
  const { signup } = React.useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
    if (formData.name && formData.email && formData.password) {
      signup(formData.email, formData.password);
      // Add signup logic here
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-500 via-white to-green-500 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-black/40 backdrop-blur-md shadow-2xl rounded-xl p-8 space-y-6 text-black"
      >
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-wide">
            Create your{" "}
            <span className="text-rose-600">Trip</span> 
            <span className="text-indigo-700">+Villa</span>
          </h2>
        </div>

        {/* Name */}
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-semibold mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-white/20 text-black placeholder-white/70 border border-white/30 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
            placeholder="Enter your name"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-semibold mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-white/20 text-black placeholder-white/70 border border-white/30 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
            placeholder="Enter your email"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label htmlFor="password" className="text-sm font-semibold mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="bg-white/20 text-black placeholder-white/70 border border-white/30 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
            placeholder="Enter your password"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-white text-orange-600 py-2 rounded-lg font-semibold hover:bg-white/90 active:scale-95 transition-transform duration-200"
        >
          Signup
        </button>

        {/* Link to Login */}
        <p className="text-sm text-center text-white/80 mt-2">
          Already have an account?{" "}
          <Link to="/login" className="underline text-white hover:text-indigo-200">
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
}
