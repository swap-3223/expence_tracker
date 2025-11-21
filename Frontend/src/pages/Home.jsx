// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import heroImg from "../assets/imgg.png";
// import { ReactTyped } from "react-typed";

// const Home = () => {
//   const [isLoggedin, setIsLoggedin] = useState(false);
//   const [user, setUser] = useState("");

//   useEffect(() => {
//     const res = JSON.parse(localStorage.getItem("user"));
//     if (res) {
//       setIsLoggedin(res.isLoggedin);
//       setUser(res);
//     }
//   }, []);

//   const typed = (
//     <ReactTyped
//       strings={[
//         "daily",
//         "monthly",
//         "personal",
//         "business",
//         "travel",
//         "food",
//         "utility",
//       ]}
//       typeSpeed={80}
//       backSpeed={50}
//       loop
//     />
//   );

//   const res = user?.name?.split(" ") || [];
//   const fName = res[0] || "";
//   const name = fName.charAt(0).toUpperCase() + fName.slice(1);

//   return (
//     <section className="min-h-screen bg-linear-to-b mt-10 from-gray-950 via-gray-900 to-gray-900 text-white flex flex-col">

//       {/* Hero Section */}
//       <div className="flex flex-col-reverse md:flex-row justify-between items-center px-6 sm:px-10 md:px-20 py-12 md:py-20 gap-12">

//         {/* Left text */}
//         <div className="md:w-1/2 space-y-6 flex flex-col text-center md:text-left">
          
//           {isLoggedin && (
//             <h2 className="text-2xl sm:text-3xl font-semibold text-gray-300">
//               Hello,{" "}
//               <span className="text-amber-300 font-bold">{name}</span> 👋
//             </h2>
//           )}

//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug">
//             <span className="block">
//               Manage your{" "}
//               <span
//  className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500 
//     inline-block w-[190px] text-left font-bold animate-[glow_1.5s_ease-in-out_infinite]"              >
//                 {typed}
//               </span>{" "}
//               expenses easily
//             </span>
//             <span className="block text-gray-300 mt-1">
//               and stay in control.
//             </span>
//           </h2>

//           <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
//             Track your income and spending effortlessly. Gain insights into your financial habits and make better decisions with our smart expense tracker.
//           </p>

//           <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mt-4">
//             {isLoggedin ? (
//               <Link
//                 to="/dashbord"
//                 className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md text-white font-semibold text-center"
//               >
//                 Start Tracking
//               </Link>
//             ) : (
//               <Link
//                 to="/login"
//                 className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md text-white font-semibold text-center"
//               >
//                 Start Tracking
//               </Link>
//             )}

//             <a
//               href="#features"
//               className="border border-blue-400 px-6 py-3 rounded-md text-blue-400 hover:bg-blue-600 hover:text-white transition text-center"
//             >
//               Learn More
//             </a>
//           </div>
//         </div>

//         {/* Right Image */}
//         <div className="md:w-1/2 flex justify-center">
//           <img
//             src={heroImg}
//             alt="Expense Illustration"
//             className="w-72 sm:w-80 md:w-[450px] animate-fadeInUp"
//           />
//         </div>
//       </div>

//       {/* Features Section */}
//       <section
//         id="features"
//         className="py-16 bg-gray-800 text-center px-6 sm:px-10 md:px-20"
//       >
//         <h3 className="text-3xl font-bold mb-10 text-blue-400">
//           Why Choose ExpenseTracker?
//         </h3>

//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
//           {[
//             {
//               title: "Track Spending",
//               desc: "Monitor your daily expenses and stay aware of where your money goes.",
//             },
//             {
//               title: "Visual Reports",
//               desc: "Get charts and insights that make your financial data easy to understand.",
//             },
//             {
//               title: "Secure & Fast",
//               desc: "Your data is safe and accessible anytime, anywhere.",
//             },
//           ].map((feature, i) => (
//             <div
//               key={i}
//               className="bg-gray-900 rounded-2xl shadow-md p-6 hover:bg-gray-700 transition"
//             >
//               <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
//               <p className="text-gray-400">{feature.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Glow animation */}
//       <style>
//         {`
//           @keyframes glow {
//             0%, 100% { text-shadow: 0 0 8px #3b82f6; }
//             50% { text-shadow: 0 0 20px #60a5fa; }
//           }
//         `}
//       </style>
//     </section>
//   );
// };

// export default Home;

//Golden Theme

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import heroImg from "../assets/imgg.png";
// import { ReactTyped } from "react-typed";

// const Home = () => {
//   const [isLoggedin, setIsLoggedin] = useState(false);
//   const [user, setUser] = useState("");

//   useEffect(() => {
//     const res = JSON.parse(localStorage.getItem("user"));
//     if (res) {
//       setIsLoggedin(res.isLoggedin);
//       setUser(res);
//     }
//   }, []);

//   const typed = (
//     <ReactTyped
//       strings={[
//         "daily",
//         "monthly",
//         "personal",
//         "business",
//         "travel",
//         "food",
//         "utility",
//       ]}
//       typeSpeed={80}
//       backSpeed={50}
//       loop
//     />
//   );

//   const res = user?.name?.split(" ") || [];
//   const fName = res[0] || "";
//   const name = fName.charAt(0).toUpperCase() + fName.slice(1);

//   return (
//     <section className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-black text-white flex flex-col mt-10">

//       {/* Hero Section */}
//       <div className="flex flex-col-reverse md:flex-row justify-between items-center px-6 sm:px-10 md:px-20 py-12 md:py-20 gap-12">

//         {/* Left text */}
//         <div className="md:w-1/2 space-y-6 flex flex-col text-center md:text-left">

//           {isLoggedin && (
//             <h2 className="text-2xl sm:text-3xl font-semibold text-gray-300">
//               Hello,{" "}
//               <span className="text-yellow-400 font-bold">{name}</span> 👋
//             </h2>
//           )}

//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug">
//             <span className="block">
//               Manage your{" "}
//               <span
//                 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 
//                 inline-block w-[190px] text-left font-bold animate-[glow_1.5s_ease-in-out_infinite]"
//               >
//                 {typed}
//               </span>{" "}
//               expenses easily
//             </span>
//             <span className="block text-gray-300 mt-1">and stay in control.</span>
//           </h2>

//           <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
//             Track your income and spending effortlessly. Gain insights into your financial habits and make better decisions with our smart expense tracker.
//           </p>

//           <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mt-4">
//             {isLoggedin ? (
//               <Link
//                 to="/dashbord"
//                 className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-md text-black font-semibold text-center shadow-md hover:shadow-yellow-700/40 transition"
//               >
//                 Start Tracking
//               </Link>
//             ) : (
//               <Link
//                 to="/login"
//                 className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-md text-black font-semibold text-center shadow-md hover:shadow-yellow-700/40 transition"
//               >
//                 Start Tracking
//               </Link>
//             )}

//             <a
//               href="#features"
//               className="border border-yellow-400 px-6 py-3 rounded-md text-yellow-400 hover:bg-yellow-500 hover:text-black transition text-center"
//             >
//               Learn More
//             </a>
//           </div>
//         </div>

//         {/* Right Image */}
//         <div className="md:w-1/2 flex justify-center">
//           <img
//             src={heroImg}
//             alt="Expense Illustration"
//             className="w-72 sm:w-80 md:w-[450px] animate-fadeInUp"
//           />
//         </div>
//       </div>

//       {/* Features Section */}
//       <section
//         id="features"
//         className="py-16 bg-neutral-950 text-center px-6 sm:px-10 md:px-20"
//       >
//         <h3 className="text-3xl font-bold mb-10 text-yellow-400">
//           Why Choose ExpenseTracker?
//         </h3>

//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
//           {[
//             {
//               title: "Track Spending",
//               desc: "Monitor your daily expenses and stay aware of where your money goes.",
//             },
//             {
//               title: "Visual Reports",
//               desc: "Get charts and insights that make your financial data easy to understand.",
//             },
//             {
//               title: "Secure & Fast",
//               desc: "Your data is safe and accessible anytime, anywhere.",
//             },
//           ].map((feature, i) => (
//             <div
//               key={i}
//               className="bg-black border border-neutral-800 rounded-2xl shadow-md p-6 hover:bg-neutral-900 
//               hover:border-yellow-500 transition"
//             >
//               <h4 className="text-xl font-semibold mb-3 text-yellow-400">
//                 {feature.title}
//               </h4>
//               <p className="text-gray-400">{feature.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Glow Animation */}
//       <style>
//         {`
//           @keyframes glow {
//             0%, 100% { text-shadow: 0 0 10px #facc15; }
//             50% { text-shadow: 0 0 20px #fde047; }
//           }
//         `}
//       </style>

//     </section>
//   );
// };

// export default Home;


// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import heroImg from "../assets/imgg.png";
// import { ReactTyped } from "react-typed";

// const Home = () => {
//   const [isLoggedin, setIsLoggedin] = useState(false);
//   const [user, setUser] = useState("");

//   useEffect(() => {
//     const res = JSON.parse(localStorage.getItem("user"));
//     if (res) {
//       setIsLoggedin(res.isLoggedin);
//       setUser(res);
//     }
//   }, []);

//   const typed = (
//     <ReactTyped
//       strings={[
//         "daily",
//         "monthly",
//         "personal",
//         "business",
//         "travel",
//         "food",
//         "utility",
//       ]}
//       typeSpeed={80}
//       backSpeed={50}
//       loop
//     />
//   );

//   const res = user?.name?.split(" ") || [];
//   const fName = res[0] || "";
//   const name = fName.charAt(0).toUpperCase() + fName.slice(1);

//   return (
//     <section
//       className="
//       min-h-screen 
//       text-white 
//       flex flex-col mt-10 
//       relative 
//       overflow-hidden 
//       bg-black
//       "
//     >

//       {/* Premium Soft Radial Highlight */}
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] 
//                         bg-yellow-500/5 blur-[200px] rounded-full" />
//       </div>

//       {/* Hero Section */}
//       <div className="flex flex-col-reverse md:flex-row justify-between items-center px-6 sm:px-10 md:px-20 py-12 md:py-20 gap-12">

//         {/* Left text */}
//         <div className="md:w-1/2 space-y-6 flex flex-col text-center md:text-left">

//           {isLoggedin && (
//             <h2 className="text-2xl sm:text-3xl font-semibold text-gray-300">
//               Hello,{" "}
//               <span className="text-yellow-400 font-bold">{name}</span> 👋
//             </h2>
//           )}

//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug">
//             <span className="block">
//               Manage your{" "}
//               <span
//                 className="text-transparent bg-clip-text bg-linear-to-r from-yellow-300 to-yellow-500 
//                 inline-block w-[190px] text-left font-bold animate-[glow_1.5s_ease-in-out_infinite]"
//               >
//                 {typed}
//               </span>{" "}
//               expenses easily
//             </span>
//             <span className="block text-gray-300 mt-1">and stay in control.</span>
//           </h2>

//           <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
//             Track your income and spending effortlessly. Gain insights into your financial habits and make better decisions with our smart expense tracker.
//           </p>

//           <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mt-4">
//             {isLoggedin ? (
//               <Link
//                 to="/dashbord"
//                 className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-md text-black font-semibold text-center shadow-md hover:shadow-yellow-700/40 transition"
//               >
//                 Start Tracking
//               </Link>
//             ) : (
//               <Link
//                 to="/login"
//                 className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-md text-black font-semibold text-center shadow-md hover:shadow-yellow-700/40 transition"
//               >
//                 Start Tracking
//               </Link>
//             )}

//             <a
//               href="#features"
//               className="border border-yellow-400 px-6 py-3 rounded-md text-yellow-400 hover:bg-yellow-500 hover:text-black transition text-center"
//             >
//               Learn More
//             </a>
//           </div>
//         </div>

//         {/* Clean Hero Image (NO GLOW) */}
//         <div className="md:w-1/2 flex justify-center">
//           <img
//             src={heroImg}
//             alt="Expense Illustration"
//             className="w-72 sm:w-80 md:w-[450px] animate-fadeInUp"
//           />
//         </div>
//       </div>

//       {/* Features Section */}
//       <section
//         id="features"
//         className="py-16 bg-neutral-950 text-center px-6 sm:px-10 md:px-20"
//       >
//         <h3 className="text-3xl font-bold mb-10 text-yellow-400">
//           Why Choose ExpenseTracker?
//         </h3>

//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
//           {[
//             {
//               title: "Track Spending",
//               desc: "Monitor your daily expenses and stay aware of where your money goes.",
//             },
//             {
//               title: "Visual Reports",
//               desc: "Get charts and insights that make your financial data easy to understand.",
//             },
//             {
//               title: "Secure & Fast",
//               desc: "Your data is safe and accessible anytime, anywhere.",
//             },
//           ].map((feature, i) => (
//             <div
//               key={i}
//               className="bg-black border border-neutral-800 rounded-2xl shadow-md p-6 hover:bg-neutral-900 
//               hover:border-yellow-500 transition"
//             >
//               <h4 className="text-xl font-semibold mb-3 text-yellow-400">
//                 {feature.title}
//               </h4>
//               <p className="text-gray-400">{feature.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Animations */}
//       <style>
//         {`
//           @keyframes glow {
//             0%, 100% { text-shadow: 0 0 10px #facc15; }
//             50% { text-shadow: 0 0 20px #fde047; }
//           }
//         `}
//       </style>

//     </section>
//   );
// };

// export default Home;
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/imgg.png";
import { ReactTyped } from "react-typed";

const Home = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [user, setUser] = useState("");

  useEffect(() => {
    const res = JSON.parse(localStorage.getItem("user"));
    if (res) {
      setIsLoggedin(res.isLoggedin);
      setUser(res);
    }
  }, []);

  const typed = (
    <ReactTyped
      strings={[
        "daily",
        "monthly",
        "personal",
        "business",
        "travel",
        "food",
        "utility",
      ]}
      typeSpeed={80}
      backSpeed={50}
      loop
    />
  );

  const res = user?.name?.split(" ") || [];
  const fName = res[0] || "";
  const name = fName.charAt(0).toUpperCase() + fName.slice(1);

  return (
    <section
      className="
      min-h-screen 
      text-[#F9F6EF] 
      flex flex-col mt-10 
      relative 
      overflow-hidden 
      bg-black
      "
    >

      {/* Soft Warm Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] 
                        bg-[#D8A35D]/10 blur-[200px] rounded-full" />
      </div>

      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center px-6 sm:px-10 md:px-20 py-12 md:py-20 gap-12">

        {/* Left text */}
        <div className="md:w-1/2 space-y-6 flex flex-col text-center md:text-left">

          {isLoggedin && (
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#A0937D]">
              Hello,{" "}
              <span className="text-[#D8A35D] font-bold">{name}</span> 👋
            </h2>
          )}

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug">
            <span className="block">
              Manage your{" "}
              <span
                className="text-transparent bg-clip-text bg-linear-to-r from-[#D8A35D] to-[#A0937D]
                inline-block w-[190px] text-left font-bold animate-[glow_1.5s_ease-in-out_infinite]"
              >
                {typed}
              </span>{" "}
              expenses easily
            </span>
            <span className="block text-[#A0937D] mt-1">and stay in control.</span>
          </h2>

          <p className="text-[#A0937D] text-base sm:text-lg leading-relaxed">
            Track your income and spending effortlessly. Gain insights into your financial habits and make better decisions with our smart expense tracker.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mt-4">
            {isLoggedin ? (
              <Link
                to="/dashbord"
                className="bg-[#D8A35D] hover:bg-[#c18f4f] px-6 py-3 rounded-md text-black font-semibold text-center shadow-md hover:shadow-[#D8A35D]/40 transition"
              >
                Start Tracking
              </Link>
            ) : (
              <Link
                to="/login"
                className="bg-[#D8A35D] hover:bg-[#c18f4f] px-6 py-3 rounded-md text-black font-semibold text-center shadow-md hover:shadow-[#D8A35D]/40 transition"
              >
                Start Tracking
              </Link>
            )}

            <a
              href="#features"
              className="border border-[#D8A35D] px-6 py-3 rounded-md text-[#D8A35D] hover:bg-[#D8A35D] hover:text-black transition text-center"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={heroImg}
            alt="Expense Illustration"
            className="w-72 sm:w-80 md:w-[450px] animate-fadeInUp"
          />
        </div>
      </div>

      {/* Features Section */}
      <section
        id="features"
        className="py-16 bg-[#141415] text-center px-6 sm:px-10 md:px-20"
      >
        <h3 className="text-3xl font-bold mb-10 text-[#D8A35D]">
          Why Choose ExpenseTracker?
        </h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              title: "Track Spending",
              desc: "Monitor your daily expenses and stay aware of where your money goes.",
            },
            {
              title: "Visual Reports",
              desc: "Get charts and insights that make your financial data easy to understand.",
            },
            {
              title: "Secure & Fast",
              desc: "Your data is safe and accessible anytime, anywhere.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-[#1B1B1D] border border-[#2a2a2e] rounded-2xl shadow-md p-6 
              hover:bg-[#242426] hover:border-[#D8A35D] transition"
            >
              <h4 className="text-xl font-semibold mb-3 text-[#D8A35D]">
                {feature.title}
              </h4>
              <p className="text-[#A0937D]">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Glow Animation */}
      <style>
        {`
          @keyframes glow {
            0%, 100% { text-shadow: 0 0 10px #D8A35D; }
            50% { text-shadow: 0 0 20px #A0937D; }
          }
        `}
      </style>

    </section>
  );
};

export default Home;
