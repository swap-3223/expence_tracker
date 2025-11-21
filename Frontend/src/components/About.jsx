// import React from "react";
// import { FaLaptopCode, FaLightbulb, FaReact, FaChartPie } from "react-icons/fa";
// import Navbar from "./Navbar";
// import aboutImg from "../assets/about.png";

// function About() {
//   return (
//   <>
//     <Navbar/>
//     <div className="bg-[#0f172a] mt-20 text-gray-200 min-h-screen py-20 px-6 md:px-16">
//       {/* Top Section */}
//       <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
//         <div className="flex-1">
//           <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             About <span className="text-blue-500">ExpenseTracker</span>
//           </h1>
//           <p className="text-gray-400 leading-relaxed mb-4">
//             Hello 👋 I'm <span className="font-semibold text-blue-400">Swapnil Wagh</span>,
//             an {" "}
//             <span className="font-semibold text-white">Master of Computer Applications (MCA)</span>{" "}
//             graduate from Institute of Management Research and Development College, Shirpur with a CGPA of <span className="text-blue-400">9.18 (2023–2025)</span>.
//           </p>
//           <p className="text-gray-400 leading-relaxed mb-4">
//           {/*   */}
//             I built this project to enhance my development skills and create a practical solution for managing personal finances efficiently. It is developed using{" "}
//             <span className="font-semibold text-white">React.js, Tailwind CSS, Node.js, Express.js, MySQL, Redux Toolkit, Axios, JWT-Authentication, nodeMailer</span> and{" "}
//             <span className="font-semibold text-white">modern UI components.</span> This project helped me improve both frontend and backend development while working on real-world functionality.
//           </p>
//         </div>

//         <div className="flex-1 flex justify-center">
//           <img
//             src={aboutImg}
//             alt="About Illustration"
//             className="w-[350px] md:w-[450px] drop-shadow-2xl"
//           />
//         </div>
//       </div>

//       {/* Purpose Section */}
//       <div className="max-w-6xl mx-auto mt-16">
//         <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
//           <FaLightbulb className="text-yellow-400" /> Purpose of This Project
//         </h2>
//         <p className="text-gray-400 leading-relaxed">
//           The main goal of this Expense Tracker is to help users manage their spending and income
//           in a structured and visual way. Instead of manually tracking expenses, this platform
//           provides a digital solution for organizing, categorizing, and understanding financial
//           habits — all in one place.
//         </p>
//       </div>

//       {/* Features Section */}
//       <div className="max-w-6xl mx-auto mt-16">
//         <h2 className="text-3xl font-bold text-white mb-10 text-center">
//           💡 What We Provide
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           <div className="bg-[#1e293b] p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
//             <FaChartPie className="text-4xl text-blue-400 mb-3" />
//             <h3 className="text-xl font-semibold text-white mb-2">Track Expenses</h3>
//             <p className="text-gray-400 text-sm">
//               Add, edit, and delete your daily transactions to stay on top of your budget.
//             </p>
//           </div>

//           <div className="bg-[#1e293b] p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
//             <FaReact className="text-4xl text-cyan-400 mb-3" />
//             <h3 className="text-xl font-semibold text-white mb-2">Smart UI</h3>
//             <p className="text-gray-400 text-sm">
//               A clean and responsive interface built using React and Tailwind for smooth experience.
//             </p>
//           </div>

//           <div className="bg-[#1e293b] p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
//             <FaLaptopCode className="text-4xl text-green-400 mb-3" />
//             <h3 className="text-xl font-semibold text-white mb-2">Data Insights</h3>
//             <p className="text-gray-400 text-sm">
//               View categorized summaries and gain better insights into your financial habits.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Future Section */}
//       <div className="max-w-6xl mx-auto mt-20">
//         <h2 className="text-3xl font-bold text-white mb-6">🚀 Future Plans</h2>
//         <p className="text-gray-400 leading-relaxed">
//           I plan to introduce more advanced features such as role-based access control, AI-powered spending insights, chart-based analytics, cloud storage integration, and automated backup to make ExpenseTracker even more secure, efficient, and user-friendly.
// These enhancements will help users gain deeper financial awareness, build better budgeting habits, and take complete control of their money with smart technology.
//         </p>
//       </div>
//     </div>
//     </>
//   );
// }

// export default About;

import React from "react";
import { FaLaptopCode, FaLightbulb, FaReact, FaChartPie } from "react-icons/fa";
import Navbar from "./Navbar";
import aboutImg from "../assets/about.png";

function About() {
  return (
    <>
      <Navbar />
      <div className="bg-black mt-20 text-[#D8A35D] min-h-screen py-20 px-6 md:px-16">
        
        {/* Top Section */}
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-[#D8A35D] mb-4">
              About <span className="text-[#FFBA00]">ExpenseTracker</span>
            </h1>

            <p className="text-gray-400 leading-relaxed mb-4">
              Hello 👋 I'm <span className="font-semibold text-[#D8A35D]">Swapnil Wagh</span>, an{" "}
              <span className="font-semibold text-[#D8A35D]">Master of Computer Applications (MCA)</span>{" "}
              graduate from Institute of Management Research and Development College, Shirpur with a CGPA of{" "}
              <span className="text-[#FFBA00]">9.18 (2023–2025)</span>.
            </p>

            <p className="text-gray-400 leading-relaxed mb-4">
              I built this project to enhance my development skills and create a practical solution for managing personal finances efficiently.
              It is developed using{" "}
              <span className="font-semibold text-[#D8A35D]">
                React.js, Tailwind CSS, Node.js, Express.js, MySQL, Redux Toolkit, Axios, JWT-Authentication, nodeMailer
              </span>{" "}
              and <span className="font-semibold text-[#D8A35D]">modern UI components.</span>
            </p>
          </div>

          <div className="flex-1 flex justify-center">
            <img src={aboutImg} alt="About Illustration" className="w-[350px] md:w-[450px] drop-shadow-2xl" />
          </div>
        </div>

        {/* Purpose Section */}
        <div className="max-w-6xl mx-auto mt-16">
          <h2 className="text-3xl font-bold text-[#D8A35D] mb-6 flex items-center gap-2">
            <FaLightbulb className="text-[#FFBA00]" /> Purpose of This Project
          </h2>
          <p className="text-gray-400 leading-relaxed">
            The main goal of this Expense Tracker is to help users manage their spending and income more visually and efficiently.
          </p>
        </div>

        {/* Features Section */}
        <div className="max-w-6xl mx-auto mt-16">
          <h2 className="text-3xl font-bold text-[#D8A35D] mb-10 text-center">💡 What We Provide</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-[#111111] p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
              <FaChartPie className="text-4xl text-[#FFBA00] mb-3" />
              <h3 className="text-xl font-semibold text-[#D8A35D] mb-2">Track Expenses</h3>
              <p className="text-gray-400 text-sm">
                Add, edit, and delete your daily transactions to stay on top of your budget.
              </p>
            </div>

            <div className="bg-[#111111] p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
              <FaReact className="text-4xl text-[#6D9773] mb-3" />
              <h3 className="text-xl font-semibold text-[#D8A35D] mb-2">Smart UI</h3>
              <p className="text-gray-400 text-sm">
                A clean and responsive interface built with modern technologies.
              </p>
            </div>

            <div className="bg-[#111111] p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
              <FaLaptopCode className="text-4xl text-[#FFBA00] mb-3" />
              <h3 className="text-xl font-semibold text-[#D8A35D] mb-2">Data Insights</h3>
              <p className="text-gray-400 text-sm">
                View categorized summaries and gain better insights into your financial habits.
              </p>
            </div>

          </div>
        </div>

        {/* Future Section */}
        <div className="max-w-6xl mx-auto mt-20">
          <h2 className="text-3xl font-bold text-[#D8A35D] mb-6">🚀 Future Plans</h2>
          <p className="text-gray-400 leading-relaxed">
            Future updates will include role-based access control, AI insights, advanced charts, cloud sync, and more.
          </p>
        </div>

      </div>
    </>
  );
}

export default About;
