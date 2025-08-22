// src/components/GoogleSignup.jsx
import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

const GoogleSignup = () => {
  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Signed in user:", user);
      // You can now store user info in context or localStorage
    } catch (error) {
      console.error("Google Sign-Up Error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-3xl font-bold mb-6 text-indigo-700">Welcome to Trip+Villa</h1>
      <button
        onClick={handleGoogleSignup}
        className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
      >
        Sign up with Google
      </button>
    </div>
  );
};

export default GoogleSignup;
