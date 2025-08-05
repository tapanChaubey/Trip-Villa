import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Hotel', path: '/rooms' },
    { name: 'Experience', path: '/' },
    { name: 'About', path: '/' },
  ];

  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 left-0 w-full z-50 py-4 px-4 md:px-16 lg:px-24 xl:px-32 backdrop-blur-md transition-all duration-500 flex items-center justify-between ${
        isScrolled || !isHome ? "bg-white/50 shadow-md border-b border-gray-300" : "bg-transparent"
      } text-gray-800 font-poppins`}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center gap-1 text-2xl font-bold tracking-wide">
        <span className="text-rose-600">Trip</span>
        <span className="text-indigo-700">+Villa</span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link, i) => (
          <Link
            key={i}
            to={link.path}
            className="relative font-medium group hover:text-indigo-600 transition"
          >
            {link.name}
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 group-hover:w-full bg-indigo-600 transition-all duration-300"></span>
          </Link>
        ))}

        <button className="px-5 py-2 rounded-full font-medium text-indigo-700 border border-indigo-600 hover:bg-indigo-50 transition">
          Dashboard
        </button>
      </div>
     

      {/* Search & Login */}
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
       <Link to="/cart">
    Cart
</Link >

        <Link to={`/Login`} className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-full shadow-md hover:opacity-90 transition">
          Login
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="flex items-center md:hidden">
        <svg
          onClick={() => setIsMenuOpen(!isMenuOpen)}
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

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white/95 backdrop-blur-md z-40 flex flex-col items-center justify-center gap-6 text-lg font-medium transition-transform duration-500 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
          <svg className="h-6 w-6 text-gray-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {navLinks.map((link, i) => (
          <Link
            key={i}
            to={link.path}
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-indigo-600"
          >
            {link.name}
          </Link>
        ))}

        <button className="border px-5 py-2 rounded-full text-indigo-700 border-indigo-500 hover:bg-indigo-50 transition">
          Dashboard
        </button>

        <button className="bg-indigo-600 text-white px-8 py-2.5 rounded-full shadow-md hover:bg-indigo-700 transition duration-300">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
