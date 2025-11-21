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

        <div className="max-w-6xl mx-auto mt-16">
          <h2 className="text-3xl font-bold text-[#D8A35D] mb-6 flex items-center gap-2">
            <FaLightbulb className="text-[#FFBA00]" /> Purpose of This Project
          </h2>
          <p className="text-gray-400 leading-relaxed">
            The main goal of this Expense Tracker is to help users manage their spending and income more visually and efficiently.
          </p>
        </div>

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
