import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Footer from "../pages/Footer";
import Navbar from "./Navbar";
import axios from "axios";
import { toast } from "react-hot-toast";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const API = 'https://expence-tracker-9uzt.onrender.com';

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      return toast.error("All fields required");
    }

    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const token = user?.token;

      if (!token) {
        return toast.error("Please login to send message");
      }

      setLoading(true);

      const res = await axios.post(
        `${API}/api/v1/contactMsg/postMsg`,
        { name, email, message },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setLoading(false);
      toast.success("Message Sent Successfully");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("❌ Error sending message:", error);
      toast.error(error.response?.data?.msg || "Something went wrong");
    }
  };

  return (
    <>
      <Navbar />

      <div className="bg-black mt-10 text-[#EDEDED] min-h-screen py-20 px-6 md:px-16">

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Get in{" "}
              <span className="text-[#FFBA00]">Touch</span>
            </h1>

            <p className="text-gray-400 leading-relaxed">
              Have questions or feedback about ExpenseTracker?  
              I’d love to hear from you. Use the form or contact details below.
            </p>

            <div className="space-y-5 pt-6">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-[#FFBA00] text-2xl" />
                <p>webthrower09@gmail.com</p>
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-[#6D9773] text-2xl" />
                <p>+91 99601 97836</p>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-red-400 text-2xl" />
                <p>Shirpur, Maharashtra, India</p>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-[#0d0d0e] rounded-2xl p-8 border border-[#2A2A2D] shadow-xl">
            <h2 className="text-2xl font-semibold mb-6 text-white">Send a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm text-gray-300 mb-2">Your Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-3 rounded-lg bg-black border border-[#2A2A2D] text-gray-200 
                             focus:border-[#FFBA00] outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">Your Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 rounded-lg bg-black border border-[#2A2A2D] text-gray-200 
                             focus:border-[#FFBA00] outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full p-3 rounded-lg bg-black border border-[#2A2A2D] text-gray-200 
                             focus:border-[#FFBA00] outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-linear-to-r from-[#D4AF37] to-[#F8E7B8] 
                           text-black font-semibold py-3 rounded-lg shadow-lg 
                           hover:shadow-yellow-500/40 transition"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-20 text-center">
          <h3 className="text-2xl font-semibold text-white mb-2">We’re here to help</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Whether you're facing issues or want to suggest a feature, feel free to reach out anytime.
          </p>
        </div>
      </div>
    </>
  );
}

export default Contact;
