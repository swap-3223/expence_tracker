import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  useEffect(()=>{
    
  },[])
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phonNum: "",

  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = axios.post('http://localhost:5000/api/v1/users/register',{
      name:form.name,
      email:form.email,
      password:form.password,
      phonNum:form.phonNum,

    })
    if(form.name && form.email && form.password && form.phonNum){
      localStorage.setItem('user',JSON.stringify({email:res.email,isloggedin:true}))
      toast.success("Account Created Successfully")
      setTimeout(() => {
        // <Navigate to="/"/>
      navigate("/login");

      }, 1500);
    }else {
      toast.error("Please fill in all fields!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white relative">
      
      {/* 🏠 Home Button (Top Left Corner) */}
      <Link
        to="/"
        className="absolute top-4 left-4 flex items-center gap-2 text-sm text-white bg-blue-600 px-3 py-2 rounded-md hover:bg-blue-700 transition"
      >
        <FaHome size={16} />
        Home
      </Link>

      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-400">
          Sign Up
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-2">Full Name</label>
            <input
              required="true"
              type="text"
              name="name"
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block mb-2">Email</label>
            <input
              required="true"            
              type="email"
              name="email"
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block mb-2">Mobile</label>
            <input
              required="true"            
              type="text"
              name="phonNum"
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your Mobile Number"
            />
          </div>

          <div>
            <label className="block mb-2">Password</label>
            <input
              required="true"
              type="password"
              name="password"
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Create a password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-md text-white font-semibold transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-gray-400 mt-4 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-400 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
