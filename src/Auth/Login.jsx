import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheck] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const formHandling = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", { name, email, password, checkbox });
    if (name && email && password) {
      login(email, password);
      navigate("/");
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-500 via-white to-green-500 px-4">
      <form
        onSubmit={formHandling}
        className="w-full max-w-md bg-black/40 backdrop-blur-md shadow-2xl rounded-xl p-8 space-y-6 text-black animate-fadeInUp"
      >
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-wide">
            Login to{" "}
            <span className="text-rose-600">Trip</span> 
            <span className="text-indigo-700">+Villa</span>
          </h2>
        </div>

        {/* Username */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Username</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-white/20 text-black placeholder-white/70 border border-white/30 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white/20 text-black placeholder-white/70 border border-white/30 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-white/20 text-black placeholder-white/70 border border-white/30 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
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
            className="accent-blue w-4 h-4"
          />
          <label className="text-sm">
            I agree to the{" "}
            <span className="underline cursor-pointer text-white/80">
              Terms & Conditions
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-white text-orange-600 py-2 rounded-lg font-semibold hover:bg-white/90 active:scale-95 transition-transform duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
}
