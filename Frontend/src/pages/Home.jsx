import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/imgg.png";
import { ReactTyped } from "react-typed";

const Home = () => {
  const [isLoggedin,setIsLoggedin] = useState(false)
  const [user,setUser] = useState('')

  
    useEffect(()=>{
      const res = JSON.parse(localStorage.getItem('user'))
    if(res){
    setIsLoggedin(res.isLoggedin)
    setUser(res)
    }
    },[])

    const typed = <ReactTyped
        strings={[
           "daily",
    "monthly",
    "personal",
    "business",
    "travel",
    "food",
    "utility",
        ]}
        typeSpeed={80}       // typing speed
        backSpeed={50}       // backspacing speed
        loop                 // keep repeating
      />

const res = user?.name?.split(" ") || [];
const fName = res[0] || ""
const name = fName.charAt(0).toUpperCase() + fName.slice(1);
  
  return (
    <section className="min-h-screen bg-gradient-to-b mt-15 from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col">
     
     {/* Greeting */}
          
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row justify-between items-center flex-grow px-10 md:px-20 py-15">
      
        <div className="md:w-1/2 space-y-6 flex flex-col">
       <div>{isLoggedin && (
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">
              Hello,{" "}
              <span className="text-amber-300  font-bold">{name}</span> 👋
            </h2>
          )}</div>
 <h2 className="text-4xl md:text-5xl font-extrabold leading-snug -mt-6">
            <span className="block">
              Manage your{" "}
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 
                inline-block min-w-[140px] font-bold animate-[glow_1.5s_ease-in-out_infinite]"
              >
                {typed}
              </span>{" "}
              expenses easily
            </span>
            <span className="block text-gray-300">and stay in control.</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Track your income and spending effortlessly. Gain insights into your financial habits and make better decisions with our smart expense tracker.
          </p>
          <div className="space-x-4">
            {isLoggedin ? <Link
              to='/dashbord'
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md text-white font-semibold"
            >
              Start Tracking
            </Link> : <Link
              to='/login'
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md text-white font-semibold"
            >
              Start Tracking
            </Link>}
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

{/* Glow animation */}
      <style>
        {`
          @keyframes glow {
            0%, 100% { text-shadow: 0 0 8px #3b82f6; }
            50% { text-shadow: 0 0 20px #60a5fa; }
          }
        `}
      </style>      
    </section>
  );
};
export default Home;
