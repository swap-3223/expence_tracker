import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Footer from "../pages/Footer";
import Navbar from "./Navbar";
import axios from 'axios'
import {toast} from "react-hot-toast";
import { useState } from "react";

function Contact() {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [message,setMessage] = useState('')

  const handleSubmit = async(e)=>{
    e.preventDefault();
    if (!name || !email || !message) {
      return toast.error("All fields required");
    }
    try {
      const user = JSON.parse(localStorage.getItem('user'))
      const token = user?.token
      if(!token){
            return  toast.error("Please login to send message")
            }
      const res = await axios.post('http://localhost:5000/api/v1/contactMsg/postMsg',
      {name,email,message},
      {
        headers:{
          Authorization: `Bearer ${token}`
        }
      }

    )
     

    console.log(res)
    toast.success("Message Sent Successfully")
    setName("");
    setEmail("");
    setMessage("");
  }catch(error){
    console.error("❌ Error sending message:", error.response?.data || error.message);
    toast.error(error.response?.data?.msg || "Something went wrong");
  }
}
  return (
  <>
  <Navbar/>
    <div className="bg-[#0f172a] mt-10 text-gray-200 min-h-screen py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Section - Info */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Get in <span className="text-blue-500">Touch</span>
          </h1>
          <p className="text-gray-400 leading-relaxed">
            Have questions, suggestions, or feedback about ExpenseTracker?  
            I’d love to hear from you! Fill out the form or use the contact details below.
          </p>

          <div className="space-y-5 pt-6">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-blue-400 text-2xl" />
              <p>webthrower09@gmail.com</p>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-green-400 text-2xl" />
              <p>+91 99601 97836</p>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-red-400 text-2xl" />
              <p>Shirpur, Maharashtra, India</p>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="flex-1 bg-[#1e293b] rounded-2xl p-8 shadow-lg hover:shadow-blue-900/40 transition">
          <h2 className="text-2xl font-semibold mb-6 text-white">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm text-gray-300 mb-2">Your Name</label>
              <input
                value={name}
                onChange={(e)=>setName(e.target.value)}
                type="text"
                required
                placeholder="Enter your name"
                className="w-full p-3 rounded-lg bg-[#0f172a] border border-gray-700 text-gray-200 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-2">Your Email</label>
              <input
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                type="email"
                required
                placeholder="Enter your email"
                className="w-full p-3 rounded-lg bg-[#0f172a] border border-gray-700 text-gray-200 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-2">Message</label>
              <textarea
                value={message}
                onChange={(e)=>setMessage(e.target.value)}
                required
                placeholder="Write your message..."
                rows="4"
                className="w-full p-3 rounded-lg bg-[#0f172a] border border-gray-700 text-gray-200 focus:border-blue-500 focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Illustration Section */}
      <div className="max-w-4xl mx-auto mt-20 flex flex-col items-center text-center">
        <h3 className="text-2xl font-semibold text-white mb-2">We’re here to help</h3>
        <p className="text-gray-400 max-w-2xl">
          Whether you're facing issues with tracking your expenses, or want to share ideas for new features,
          feel free to reach out anytime.
        </p>
      </div>
    </div>
    </>
  );
}

export default Contact;
