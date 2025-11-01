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








// import 
// React, { useState } from "react";
// import { CiUser } from "react-icons/ci";
// import "flowbite";
// import { MdDarkMode,MdLightMode } from "react-icons/md";
// import { Link } from "react-router-dom";


// function Navbar() {
//     const [theme, setTheme] = useState("dark");
//   const handleTheme=()=>{(setTheme(theme === "light" ? "dark" : "light"))}
//   return (
//     <>
//       {/* <nav className="fixed  left-0 w-full bg-white top-0 z-50 shadow-md bg-whit border-gray-200 dark:bg-gray-900 dark:border-gray-700">
//         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//           <a
//             href="#"
//             className="flex items-center space-x-3 rtl:space-x-reverse"
//           >
//             <img
//               src="https://flowbite.com/docs/images/logo.svg"
//               className="h-8"
//               alt="Flowbite Logo"
//             />
//             <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
//           </a>

//           <button
//             data-collapse-toggle="navbar-dropdown"
//             type="button"
//             className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//             aria-controls="navbar-dropdown"
//             aria-expanded="false"
//           >
//             <span className="sr-only">Open main menu</span>
//             <svg
//               className="w-5 h-5"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 17 14"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokejoin="round"
//                 strokeWidth="2"
//                 d="M1 1h15M1 7h15M1 13h15"
//               />
//             </svg>
//           </button>
//           <div
//             className="hidden w-full md:block md:w-auto p-4 "
//             id="navbar-dropdown"
//           >
//             <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 gap-10">
//               <li>
//                 <a
//                   href="#"
//                   className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
//                   aria-current="page"
//                 >
//                   Dashboard
//                 </a>
//               </li>

//               <li></li>
//               <li>
//                 <a
//                   href="#"
//                   className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//                 >
//                   Add Expense
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//                 >
//                   Analytics / Reports
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//                 >
//                   All Expenses / History
//                 </a>
//               </li>
//               <li>
//                 <button onClick={handleTheme}
//                   href="#"
//                   className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//                 >{theme === "dark" ? <MdDarkMode size={24} /> : <MdLightMode size={24} />}</button>
//               </li>
//             </ul>
//           </div>
//           <ul>
//             <li>
//               <div
//                 id="dropdownNavbarLink"
//                 data-dropdown-toggle="dropdownNavbar"
//                 className="flex items-center w-full  text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700  dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
//               >
//                 <CiUser size={30} />
//                 <svg
//                   className="w-2.5 h-2.5 ms-2.5"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 10 6"
//                 >
//                   <path
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokejoin="round"
//                     strokeWidth="2"
//                     d="m1 1 4 4 4-4"
//                   />
//                 </svg>
//               </div>
//               <div
//                 id="dropdownNavbar"
//                 className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600"
//               >
//                 <ul
//                   className="py-2 text-sm text-gray-700 dark:text-gray-400"
//                   aria-labelledby="dropdownLargeButton"
//                 >
//                   <li>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                     >
//                       Profile
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                     >
//                       Earnings
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                     >
//                       Setting
//                     </a>
//                   </li>
//                 </ul>
//                 <div className="py-1">
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                   >
//                     Sign out
//                   </a>
//                 </div>
//               </div>
//             </li>
//           </ul>
//         </div>
//       </nav> */}

//        {/* Navbar */}
//             <nav className="fixed  left-0 w-full bg-white top-0 z-60 shadow-md bg-whit dark:bg-gray-900 dark:border-gray-700   flex justify-between items-center px-10 py-6 border-b border-gray-700">
//               <Link to='/' className="text-2xl font-bold text-blue-400">ExpenseTracker</Link>
      
//               <div className="space-x-6 text-white">
//                 <Link to='/Dashbord' className="hover:text-blue-400 transition">Dashbord</Link>
//                 <Link  className="hover:text-blue-400 transition">About</Link>
//                 <Link href="#contact" className="hover:text-blue-400 transition">Contact</Link>
//                 <Link
//                   to="/Login"
//                   className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-white"
//                 >
//                   Login
//                 </Link>
//               </div>
//             </nav>
//     </>
//   );
// }

// export default Navbar;


