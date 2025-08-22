import React, { useState, useEffect, useContext, use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context';
import { useAuth0 } from "@auth0/auth0-react";
const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const navigate = useNavigate();
  const { cartCount } = useContext(AuthContext);
  useEffect(() => {
    //console.log(cartCount)
  }, [cartCount]);

  const { user, loginWithRedirect, logout } = useAuth0();
  
  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Hotel', path: '/rooms' },
    { name: 'Experience', path: '/' },
    { name: 'About', path: '/About' },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = isMenuOpen ? 'hidden' : originalStyle;
    return () => (document.body.style.overflow = originalStyle);
  }, [isMenuOpen]);

  return (
    <nav
      className={`sticky top-0 left-0 w-full z-50 py-4 px-4 md:px-12 lg:px-20 xl:px-32 backdrop-blur-md transition-all duration-500 flex items-center justify-between ${
        isScrolled || !isHome ? "bg-white/60 shadow-md border-b border-gray-300" : "bg-transparent"
      } text-gray-800 font-poppins`}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center gap-1 text-2xl font-bold tracking-wide">
        <span className="text-rose-600">Trip</span>
        <span className="text-indigo-700">+Villa</span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6 lg:gap-10">
        {navLinks.map((link, i) => (
          <Link
            key={i}
            to={link.path}
            className={`relative font-medium group hover:text-indigo-600 transition ${
              location.pathname === link.path ? "text-indigo-700 font-semibold" : ""
            }`}
          >
            {link.name}
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 group-hover:w-full bg-indigo-600 transition-all duration-300"></span>
          </Link>
        ))}

        <button className="px-5 py-2 rounded-full font-medium text-indigo-700 border border-indigo-600 hover:bg-indigo-50 transition">
          Dashboard
        </button>
      </div>

      {/* Search & Auth Buttons */}
      <div className="hidden md:flex items-center gap-4">
        <svg
          className="h-6 w-6 text-gray-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>

        {user ? (
          <>
         <Link to="/cart" className="relative flex items-center gap-2 p-2 rounded-full hover:bg-indigo-100 transition">
  <svg
    className="h-6 w-6 text-blue-700 hover:text-indigo-600 transition"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
    <circle cx="7" cy="21" r="1" />
    <circle cx="17" cy="21" r="1" />
  </svg>

  {cartCount > 0 && (
    <span className="bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
      {cartCount}
    </span>
  )}
</Link>

          <button
           onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-full shadow-md hover:opacity-90 transition"
          >
            Logout
          </button>
          </>
        ) : (
          <>
            <button
              onClick={() => loginWithRedirect()}
              className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-full shadow-md hover:opacity-90 transition"
            >
             Register
            </button>
           
          </>
        )}
      </div>

      {/* Mobile Menu Toggle */}
      <div className="flex items-center md:hidden">
        <svg
          onClick={() => setIsMenuOpen(true)}
          className="h-6 w-6 cursor-pointer text-gray-800"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </div>

      {/* Mobile Sidebar Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm flex justify-end">
          <div className="w-4/5 sm:w-2/3 md:w-1/2 bg-white h-full p-6 flex flex-col justify-between overflow-y-auto shadow-lg transition-transform duration-300 ease-in-out">
            
            {/* Top Section */}
            <div className="flex flex-col gap-6">
              {/* Close Button */}
              <div className="flex justify-end">
                <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
                  <svg
                    className="h-6 w-6 text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Logo */}
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-center text-2xl font-bold tracking-wide text-gray-800"
              >
                <span className="text-rose-600">Trip</span>
                <span className="text-indigo-700">+Villa</span>
              </Link>

              {/* Navigation Links */}
              <div className="flex flex-col gap-3 mt-4">
                {navLinks.map((link, i) => (
                  <Link
                    key={i}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block w-full text-left py-3 px-4 rounded-lg text-base font-medium hover:bg-indigo-100 transition ${
                      location.pathname === link.path ? "text-indigo-700 font-semibold" : "text-gray-800"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col gap-4 mt-6">
              <button className="w-full border px-5 py-3 rounded-full text-indigo-700 border-indigo-500 hover:bg-indigo-50 transition">
                Dashboard
              </button>

              {user ? (
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-full shadow-md hover:opacity-90 transition"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link
                    to="/Login"
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full text-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-full shadow-md hover:opacity-90 transition"
                  >
                    Login
                  </Link>
                  <Link
                    to="/Signup"
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full text-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-full shadow-md hover:opacity-90 transition"
                  >
                    Signup
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
