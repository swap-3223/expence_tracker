// import React, { useState, useEffect } from "react";
// import { Link, Navigate } from "react-router-dom";
// import { CiUser } from "react-icons/ci";
// import { MdDarkMode, MdLightMode } from "react-icons/md";
// import { RxHamburgerMenu } from "react-icons/rx";
// import toast, { Toaster } from 'react-hot-toast';


// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isLoggedin, setIsLoggedin] = useState(false);

//   useEffect(()=>{
//     const res = JSON.parse(localStorage.getItem('user'))
//     if(res){
//       setIsLoggedin(res.isLoggedin)
//     }
//   },[])

//   const handleLogout=()=>{
//     localStorage.clear();
//     toast.success("👋 You have been logged out successfully!");
//     setTimeout(() => {
//     window.location.href="/";
//     },1000 );
//   }

//   return (
//     <nav className="fixed top-0 left-0 w-full z-60 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm transition-colors duration-300">
//       <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-8">
        
//         {/*  Brand */}
//         <Link
//           to="/"
//           className="text-2xl font-bold text-blue-600 dark:text-blue-400"
//         >
//           ExpenseTracker
          
//         </Link>

//         {/* 🔹 Desktop Menu */}
//         <div className="hidden md:flex items-center space-x-8 font-medium text-gray-700 dark:text-gray-200">
//           <Link
//             to="/dashbord"
//             className="hover:text-blue-600 dark:hover:text-blue-400 transition"
//           >
//             Dashboard
//           </Link>
//           <Link
//             to="/about"
//             className="hover:text-blue-600 dark:hover:text-blue-400 transition"
//           >
//             About
//           </Link>
//           <Link
//             to="/contact"
//             className="hover:text-blue-600 dark:hover:text-blue-400 transition"
//           >
//             Contact
//           </Link>

//           {/* 🔹 Theme Toggle */}
//           {/* <button
//             className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
//             title="Toggle Theme"
//           >
//           Theme Toggle button
//             </button> */}

//           {/* 🔹 Profile */}
//           {/* <Link
//             to="/profile"
//             className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition"
//           >
//             <CiUser size={24} />
//             Profile
//           </Link> */}
//           {isLoggedin ? <Link
//             to="/profile"
//             onClick={() => setMenuOpen(false)}
//             className="block hover:text-blue-600 dark:hover:text-blue-400"
//           >
//             Profile
//           </Link> : " "}

//           {/* 🔹 Login Button */}
//           {!isLoggedin ? <Link
//             to="/login"
//             className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
//           >
//             Login
//           </Link> : <button
//             onClick={handleLogout}
//             className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
//           >
//             Logout
//           </button>}
//         </div>

//         {/* 🔹 Hamburger Button (Mobile) */}
//         <button
//           onClick={() => setMenuOpen(!menuOpen)}
//           className="md:hidden text-gray-700 dark:text-gray-200"
//         >
//           <RxHamburgerMenu size={28} />
//         </button>
//       </div>

//       {/* 🔹 Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-6 py-4 space-y-4 font-medium text-gray-700 dark:text-gray-200">
//           <Link
//             to="/dashbord"
//             onClick={() => setMenuOpen(false)}
//             className="block hover:text-blue-600 dark:hover:text-blue-400"
//           >
//             Dashboard
//           </Link>
//           <Link
//             to="/about"
//             onClick={() => setMenuOpen(false)}
//             className="block hover:text-blue-600 dark:hover:text-blue-400"
//           >
//             About
//           </Link>
//           <Link
//             to="/contact"
//             onClick={() => setMenuOpen(false)}
//             className="block hover:text-blue-600 dark:hover:text-blue-400"
//           >
//             Contact
//           </Link>
//           {isLoggedin ? <Link
//             to="/profile"
//             onClick={() => setMenuOpen(false)}
//             className="block hover:text-blue-600 dark:hover:text-blue-400"
//           >
//             Profile
//           </Link> : " "}

//           {/* 🔹 Theme Toggle inside mobile menu */}
//           {/* <button
//             onClick={() => {
//               toggleTheme();
//               setMenuOpen(false);
//             }}
//             className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400"
//           >
//             {theme === "light" ? (
//               <>
//                 <MdDarkMode size={22} /> Dark Mode
//               </>
//             ) : (
//               <>
//                 <MdLightMode size={22} /> Light Mode
//               </>
//             )}
//           </button> */}

//            {!isLoggedin ? <Link
//             to="/login"
//             className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
//           >
//             Login
//           </Link> : "Logout"}
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { RxHamburgerMenu } from "react-icons/rx";
// import toast from "react-hot-toast";

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isLoggedin, setIsLoggedin] = useState(false);

//   useEffect(() => {
//     const res = JSON.parse(localStorage.getItem("user"));
//     if (res) {
//       setIsLoggedin(res.isLoggedin);
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.clear();
//     toast.success("👋 Logged out successfully");
//     setTimeout(() => {
//       window.location.href = "/";
//     }, 900);
//   };

//   return (
//     <>
//       <nav className="fixed top-0 left-0 w-full z-60 
//         bg-[#0A0A0B]/95 backdrop-blur-lg 
//         border-b border-[#2A2A2D] shadow-[0_4px_20px_rgba(0,0,0,0.4)]
//         transition-all duration-300 ">

//         <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">

//           {/* 🔹 Brand */}
//           <Link
//             to="/"
//             className="text-3xl font-extrabold tracking-wide 
//             text-transparent bg-clip-text 
//             bg-linear-to-r from-[#D4AF37] via-[#E6C878] to-[#F8E7B8]
//             drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]
//             hover:opacity-90 transition"
//           >
//             ExpenseTracker
//           </Link>

//           {/* 🔹 Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-10 text-[#EDEDED] font-medium">

//             <Link to="/dashbord" className="hover:text-[#D4AF37] transition-all hover:drop-shadow-[0_0_5px_gold]">
//               Dashboard
//             </Link>

//             <Link to="/about" className="hover:text-[#D4AF37] transition-all hover:drop-shadow-[0_0_5px_gold]">
//               About
//             </Link>

//             <Link to="/contact" className="hover:text-[#D4AF37] transition-all hover:drop-shadow-[0_0_5px_gold]">
//               Contact
//             </Link>

//             {isLoggedin && (
//               <Link
//                 to="/profile"
//                 className="hover:text-[#D4AF37] transition-all hover:drop-shadow-[0_0_5px_gold]"
//               >
//                 Profile
//               </Link>
//             )}

//             {!isLoggedin ? (
//               <Link
//                 to="/login"
//                 className="px-5 py-2 rounded-md text-black font-semibold 
//                 bg-linear-to-r from-[#D4AF37] to-[#F8E7B8] 
//                 shadow-[0_0_12px_rgba(255,215,0,0.4)]
//                 hover:shadow-[0_0_18px_rgba(255,215,0,0.6)]
//                 transition"
//               >
//                 Login
//               </Link>
//             ) : (
//               <button
//                 onClick={handleLogout}
//                 className="px-5 py-2 rounded-md text-black font-semibold 
//                 bg-linear-to-r from-[#D4AF37] to-[#F8E7B8] 
//                 shadow-[0_0_12px_rgba(255,215,0,0.4)]
//                 hover:shadow-[0_0_18px_rgba(255,215,0,0.6)]
//                 transition"
//               >
//                 Logout
//               </button>
//             )}

//           </div>

//           {/* 🔹 Mobile Menu Icon */}
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="md:hidden text-[#EDEDED]"
//           >
//             <RxHamburgerMenu size={28} />
//           </button>
//         </div>

//         {/* 🔹 Mobile Dropdown Menu */}
//         {menuOpen && (
//           <div className="md:hidden bg-[#0d0d0e] border-t border-[#2A2A2D] px-6 py-5 space-y-4 text-[#EDEDED] font-medium">

//             <Link onClick={() => setMenuOpen(false)} to="/dashbord"
//               className="block hover:text-[#D4AF37] transition">Dashboard</Link>

//             <Link onClick={() => setMenuOpen(false)} to="/about"
//               className="block hover:text-[#D4AF37] transition">About</Link>

//             <Link onClick={() => setMenuOpen(false)} to="/contact"
//               className="block hover:text-[#D4AF37] transition">Contact</Link>

//             {isLoggedin && (
//               <Link
//                 onClick={() => setMenuOpen(false)}
//                 to="/profile"
//                 className="block hover:text-[#D4AF37] transition"
//               >
//                 Profile
//               </Link>
//             )}

//             {!isLoggedin ? (
//               <Link
//                 to="/login"
//                 className="block text-center px-4 py-2 rounded-md text-black font-semibold 
//                 bg-linear-to-r from-[#D4AF37] to-[#F8E7B8] 
//                 shadow-[0_0_12px_rgba(255,215,0,0.4)]
//                 transition"
//               >
//                 Login
//               </Link>
//             ) : (
//               <button
//                 onClick={handleLogout}
//                 className="block w-full text-center px-4 py-2 rounded-md text-black font-semibold 
//                 bg-linear-to-r from-[#D4AF37] to-[#F8E7B8] 
//                 shadow-[0_0_12px_rgba(255,215,0,0.4)]
//                 transition"
//               >
//                 Logout
//               </button>
//             )}
//           </div>
//         )}
//       </nav>
//     </>
//   );
// }

// export default Navbar;
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { RxHamburgerMenu } from "react-icons/rx";
// import toast from "react-hot-toast";

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isLoggedin, setIsLoggedin] = useState(false);

//   useEffect(() => {
//     const res = JSON.parse(localStorage.getItem("user"));
//     if (res) setIsLoggedin(res.isLoggedin);
//   }, []);

//   const handleLogout = () => {
//     localStorage.clear();
//     toast.success("👋 Logged out successfully");
//     setTimeout(() => (window.location.href = "/"), 900);
//   };

//   return (
//     <>
//       <nav
//         className="
//           fixed top-0 left-0 w-full z-60
//           bg-black/90 backdrop-blur-lg 
//           border-b border-neutral-800
//           shadow-[0_4px_25px_rgba(0,0,0,0.45)]
//           transition-all duration-300
//         "
//       >
//         <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">

//           {/* Brand */}
//           <Link
//             to="/"
//             className="
//               text-3xl font-extrabold tracking-wide 
//               text-transparent bg-clip-text
//               bg-linear-to-r from-yellow-300 via-yellow-400 to-yellow-200
//               drop-shadow-[0_0_10px_rgba(250,204,21,0.4)]
//               hover:opacity-90 transition
//             "
//           >
//             ExpenseTracker
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-10 text-gray-200 font-medium">

//             <Link className="hover:text-yellow-400 transition hover:drop-shadow-[0_0_8px_gold]" to="/dashbord">
//               Dashboard
//             </Link>

//             <Link className="hover:text-yellow-400 transition hover:drop-shadow-[0_0_8px_gold]" to="/about">
//               About
//             </Link>

//             <Link className="hover:text-yellow-400 transition hover:drop-shadow-[0_0_8px_gold]" to="/contact">
//               Contact
//             </Link>

//             {isLoggedin && (
//               <Link
//                 className="hover:text-yellow-400 transition hover:drop-shadow-[0_0_8px_gold]"
//                 to="/profile"
//               >
//                 Profile
//               </Link>
//             )}

//             {!isLoggedin ? (
//               <Link
//                 to="/login"
//                 className="
//                   px-6 py-2 rounded-md text-black font-semibold
//                   bg-linear-to-r from-yellow-400 to-yellow-300 
//                   shadow-[0_0_15px_rgba(250,204,21,0.5)]
//                   hover:shadow-[0_0_20px_rgba(250,204,21,0.7)]
//                   transition
//                 "
//               >
//                 Login
//               </Link>
//             ) : (
//               <button
//                 onClick={handleLogout}
//                 className="
//                   px-6 py-2 rounded-md text-black font-semibold
//                   bg-linear-to-r from-yellow-400 to-yellow-300 
//                   shadow-[0_0_15px_rgba(250,204,21,0.5)]
//                   hover:shadow-[0_0_20px_rgba(250,204,21,0.7)]
//                   transition
//                 "
//               >
//                 Logout
//               </button>
//             )}
//           </div>

//           {/* Mobile Menu Button */}
//           <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-200">
//             <RxHamburgerMenu size={28} />
//           </button>
//         </div>

//         {/* Mobile Dropdown Menu */}
//         {menuOpen && (
//           <div
//             className="
//               md:hidden bg-black border-t border-neutral-800 
//               px-6 py-5 space-y-4 text-gray-200 font-medium
//             "
//           >
//             <Link onClick={() => setMenuOpen(false)} className="block hover:text-yellow-400 transition" to="/dashbord">
//               Dashboard
//             </Link>

//             <Link onClick={() => setMenuOpen(false)} className="block hover:text-yellow-400 transition" to="/about">
//               About
//             </Link>

//             <Link onClick={() => setMenuOpen(false)} className="block hover:text-yellow-400 transition" to="/contact">
//               Contact
//             </Link>

//             {isLoggedin && (
//               <Link
//                 onClick={() => setMenuOpen(false)}
//                 className="block hover:text-yellow-400 transition"
//                 to="/profile"
//               >
//                 Profile
//               </Link>
//             )}

//             {!isLoggedin ? (
//               <Link
//                 to="/login"
//                 className="
//                   block text-center px-4 py-2 rounded-md text-black font-semibold 
//                   bg-linear-to-r from-yellow-400 to-yellow-300
//                   shadow-[0_0_15px_rgba(250,204,21,0.5)]
//                   transition
//                 "
//               >
//                 Login
//               </Link>
//             ) : (
//               <button
//                 onClick={handleLogout}
//                 className="
//                   block w-full text-center px-4 py-2 rounded-md text-black font-semibold 
//                   bg-linear-to-r from-yellow-400 to-yellow-300
//                   shadow-[0_0_15px_rgba(250,204,21,0.5)]
//                   transition
//                 "
//               >
//                 Logout
//               </button>
//             )}
//           </div>
//         )}
//       </nav>
//     </>
//   );
// }

// export default Navbar;
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

          {/* Brand */}
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
