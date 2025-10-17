import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/imgg.png"; // use any illustration or replace with your own

const Home = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b mt-15 from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col">
     

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row justify-between items-center flex-grow px-10 md:px-20 py-10">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-5xl font-bold leading-tight">
            Manage your <span className="text-blue-400">expenses</span> easily and stay in control.
          </h2>
          <p className="text-gray-300 text-lg">
            Track your income and spending effortlessly. Gain insights into your financial habits and make better decisions with our smart expense tracker.
          </p>
          <div className="space-x-4">
            <Link
              to="/dashboard"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md text-white font-semibold"
            >
              Start Tracking
            </Link>
            <a
              href="#features"
              className="border border-blue-400 px-6 py-3 rounded-md text-blue-400 hover:bg-blue-600 hover:text-white transition"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src={heroImg}
            alt="Expense Illustration"
            className="w-96 md:w-[450px] animate-fadeInUp"
          />
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-800 text-center">
        <h3 className="text-3xl font-bold mb-10 text-blue-400">Why Choose ExpenseTracker?</h3>
        <div className="grid md:grid-cols-3 gap-8 px-10 md:px-20">
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
              className="bg-gray-900 rounded-2xl shadow-md p-6 hover:bg-gray-700 transition"
            >
              <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      
    </section>
  );
};

export default Home;
