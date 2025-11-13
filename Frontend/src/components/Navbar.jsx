import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import toast, { Toaster } from 'react-hot-toast';


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [isLoggedin, setIsLoggedin] = useState(false);

  useEffect(()=>{
    const res = JSON.parse(localStorage.getItem('user'))
    if(res){
      setIsLoggedin(res.isLoggedin)
    }
  },[])

  // Apply theme class to <html>
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const handleLogout=()=>{
    localStorage.clear();
    toast.success("👋 You have been logged out successfully!");
    setTimeout(() => {
    window.location.href="/";
    },1000 );
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-[60] bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-8">
        
        {/*  Brand */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600 dark:text-blue-400"
        >
          ExpenseTracker
          
        </Link>

        {/* 🔹 Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 font-medium text-gray-700 dark:text-gray-200">
          <Link
            to="/dashbord"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Dashboard
          </Link>
          <Link
            to="/about"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Contact
          </Link>

          {/* 🔹 Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            title="Toggle Theme"
          >
            {theme === "light" ? (
              <MdDarkMode size={22} className="text-gray-400" />
            ) : (
              <MdLightMode size={22} className="text-yellow-400" />
            )}
          </button>

          {/* 🔹 Profile */}
          {/* <Link
            to="/profile"
            className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <CiUser size={24} />
            Profile
          </Link> */}
          {isLoggedin ? <Link
            to="/profile"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-blue-600 dark:hover:text-blue-400"
          >
            Profile
          </Link> : " "}

          {/* 🔹 Login Button */}
          {!isLoggedin ? <Link
            to="/login"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
          >
            Login
          </Link> : <button
            onClick={handleLogout}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
          >
            Logout
          </button>}
        </div>

        {/* 🔹 Hamburger Button (Mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 dark:text-gray-200"
        >
          <RxHamburgerMenu size={28} />
        </button>
      </div>

      {/* 🔹 Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-6 py-4 space-y-4 font-medium text-gray-700 dark:text-gray-200">
          <Link
            to="/dashbord"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-blue-600 dark:hover:text-blue-400"
          >
            Dashboard
          </Link>
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-blue-600 dark:hover:text-blue-400"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-blue-600 dark:hover:text-blue-400"
          >
            Contact
          </Link>
          {isLoggedin ? <Link
            to="/profile"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-blue-600 dark:hover:text-blue-400"
          >
            Profile
          </Link> : " "}

          {/* 🔹 Theme Toggle inside mobile menu */}
          <button
            onClick={() => {
              toggleTheme();
              setMenuOpen(false);
            }}
            className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400"
          >
            {theme === "light" ? (
              <>
                <MdDarkMode size={22} /> Dark Mode
              </>
            ) : (
              <>
                <MdLightMode size={22} /> Light Mode
              </>
            )}
          </button>

           {!isLoggedin ? <Link
            to="/login"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
          >
            Login
          </Link> : "Logout"}
        </div>
      )}
    </nav>
  );
}

export default Navbar;