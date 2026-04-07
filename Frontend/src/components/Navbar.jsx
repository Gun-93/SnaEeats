import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar({ darkMode, toggleDarkMode, cartItems, user, handleLogout }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = location.pathname === "/";
  const navbarBg = isHomePage
    ? scrolled
      ? "bg-cream text-black"
      : "bg-transparent text-white"
    : "bg-cream text-black";

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className={`fixed top-0 w-full flex items-center justify-between px-6 py-4 transition-all duration-300 shadow-md z-50 ${navbarBg}`}>
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-3">
        <span className="material-icons text-red-600 text-3xl">fastfood</span>
        <h1 className="text-2xl font-bold text-red-600">SnapEats</h1>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 ml-auto">
        <ul className="flex space-x-6 text-lg font-medium">
          <li><Link to="/menu" className="hover:text-yellow-500">Food Items</Link></li>
          <li>
            <Link to="/offers" className="px-3 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-red-500 text-white font-semibold hover:scale-105 transition-transform">
              Offers
            </Link>
          </li>
          <li><Link to="/hotels" className="hover:text-yellow-500">Restaurant</Link></li>
        </ul>

        <div className="flex items-center gap-3">
          {/* 🔐 ADMIN BUTTON (DESKTOP) */}
          {user?.isAdmin && (
            <Link
              to="/admin"
              className="px-3 py-2 bg-black text-white rounded-md font-semibold hover:bg-gray-800 transition-colors"
            >
              Admin
            </Link>
          )}

          {/* Profile or Login/Signup */}
          {user ? (
            <div className="relative group">
              <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-bold cursor-pointer">
                {user.name[0].toUpperCase()}
              </div>

              <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity z-50">
                <Link to="/profile" className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Profile
                </Link>
                <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <>
              <Link to="/login" className="flex items-center gap-1 px-3 py-2 bg-red-600 text-white rounded-md font-semibold hover:bg-red-700 transition-colors">
                <span className="material-icons">login</span> Login
              </Link>
              <Link to="/signup" className="flex items-center gap-1 px-3 py-2 bg-red-600 text-white rounded-md font-semibold hover:bg-red-700 transition-colors">
                <span className="material-icons">person_add</span> Sign Up
              </Link>
            </>
          )}

          {/* Cart */}
          <Link to="/checkout" className="relative flex items-center gap-1 px-3 py-2 bg-red-600 text-white rounded-md font-semibold hover:bg-red-700 transition-colors">
            <span className="material-icons">shopping_cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
            Cart
          </Link>

          {/* Dark Mode Toggle */}
          <button onClick={toggleDarkMode} className="flex items-center justify-center px-3 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
            <span className="material-icons">{darkMode ? "light_mode" : "dark_mode"}</span>
          </button>
        </div>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden ml-auto flex items-center gap-2">
        <button onClick={toggleDarkMode} className="flex items-center justify-center px-3 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
          <span className="material-icons">{darkMode ? "light_mode" : "dark_mode"}</span>
        </button>

        <button onClick={() => setMenuOpen(!menuOpen)} className="flex items-center justify-center p-2 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-full right-0 w-60 bg-cream dark:bg-gray-800 shadow-lg rounded-md mt-2 p-4 flex flex-col gap-3 md:hidden text-black dark:text-white z-50">
          <Link to="/menu" onClick={() => setMenuOpen(false)}>Food Items</Link>
          <Link to="/offers" onClick={() => setMenuOpen(false)}>Offers</Link>
          <Link to="/hotels" onClick={() => setMenuOpen(false)}>Hotels</Link>

          {/* 🔐 ADMIN LINK (MOBILE) */}
          {user?.isAdmin && (
            <Link
              to="/admin"
              className="font-semibold hover:text-red-600"
              onClick={() => setMenuOpen(false)}
            >
              Admin Panel
            </Link>
          )}

          {user ? (
            <>
              <Link to="/profile" onClick={() => setMenuOpen(false)}>Profile</Link>
              <button onClick={handleLogout} className="text-left">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
              <Link to="/signup" onClick={() => setMenuOpen(false)}>Sign Up</Link>
            </>
          )}

          <Link to="/checkout" onClick={() => setMenuOpen(false)}>
            Cart {cartCount > 0 && <span className="ml-1 bg-yellow-400 text-black text-xs px-2 rounded-full">{cartCount}</span>}
          </Link>
        </div>
      )}
    </nav>
  );
}





