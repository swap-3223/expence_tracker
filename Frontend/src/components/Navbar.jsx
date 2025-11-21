import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import toast from "react-hot-toast";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(false);

  useEffect(() => {
    const res = JSON.parse(localStorage.getItem("user"));
    if (res) setIsLoggedin(res.isLoggedin);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    toast.success("👋 Logged out successfully");
    setTimeout(() => (window.location.href = "/"), 900);
  };

  return (
    <>
      <nav
        className="
          fixed top-0 left-0 w-full z-60
          bg-[#1B1B1D]/95 backdrop-blur-lg
          border-b border-[#A0937D]/40
          shadow-[0_4px_25px_rgba(0,0,0,0.55)]
          transition-all duration-300
        "
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">

          <Link
            to="/"
            className="
              text-3xl font-extrabold tracking-wide 
              text-[#D8A35D]
              drop-shadow-[0_0_10px_rgba(216,163,93,0.55)]
              hover:text-[#F9F6EF] transition
            "
          >
            ExpenseTracker
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10 text-[#F9F6EF] font-medium">

            <Link className="hover:text-[#D8A35D] transition" to="/dashbord">
              Dashboard
            </Link>

            <Link className="hover:text-[#D8A35D] transition" to="/about">
              About
            </Link>

            <Link className="hover:text-[#D8A35D] transition" to="/contact">
              Contact
            </Link>

            {isLoggedin && (
              <Link className="hover:text-[#D8A35D] transition" to="/profile">
                Profile
              </Link>
            )}

            {!isLoggedin ? (
              <Link
                to="/login"
                className="
                  px-6 py-2 rounded-md 
                  font-semibold text-[#1B1B1D]
                  bg-[#D8A35D]
                  shadow-[0_0_12px_rgba(216,163,93,0.65)]
                  hover:bg-[#F9F6EF]
                  transition
                "
              >
                Login
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className="
                  px-6 py-2 rounded-md 
                  font-semibold text-[#1B1B1D]
                  bg-[#D8A35D]
                  shadow-[0_0_12px_rgba(216,163,93,0.65)]
                  hover:bg-[#F9F6EF]
                  transition
                "
              >
                Logout
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-[#F9F6EF]">
            <RxHamburgerMenu size={28} />
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div
            className="
              md:hidden bg-[#1B1B1D] border-t border-[#A0937D]/40 
              px-6 py-5 space-y-4 text-[#F9F6EF] font-medium
            "
          >
            <Link onClick={() => setMenuOpen(false)} className="block hover:text-[#D8A35D]" to="/dashbord">
              Dashboard
            </Link>

            <Link onClick={() => setMenuOpen(false)} className="block hover:text-[#D8A35D]" to="/about">
              About
            </Link>

            <Link onClick={() => setMenuOpen(false)} className="block hover:text-[#D8A35D]" to="/contact">
              Contact
            </Link>

            {isLoggedin && (
              <Link
                onClick={() => setMenuOpen(false)}
                className="block hover:text-[#D8A35D]"
                to="/profile"
              >
                Profile
              </Link>
            )}

            {!isLoggedin ? (
              <Link
                to="/login"
                className="
                  block text-center px-4 py-2 rounded-md
                  font-semibold text-[#1B1B1D] 
                  bg-[#D8A35D]
                  shadow-[0_0_12px_rgba(216,163,93,0.65)]
                  transition
                "
              >
                Login
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className="
                  block w-full text-center px-4 py-2 rounded-md
                  font-semibold text-[#1B1B1D] 
                  bg-[#D8A35D]
                  shadow-[0_0_12px_rgba(216,163,93,0.65)]
                  transition
                "
              >
                Logout
              </button>
            )}
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
