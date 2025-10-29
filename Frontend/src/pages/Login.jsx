import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import axios from 'axios'
const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [isLoggedin, setIsLoggedin] = useState(false);


  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const res = await axios.post('http://localhost:5000/api/v1/users/login',{email: form.email,password: form.password})
      console.log(res.data)
      if(res){
      // alert("Loggedin")
      localStorage.setItem('user',JSON.stringify({isLoggedin:true,email:form.email}))
      navigate('/')
    }
    } catch (error) {
      console.log(error)
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
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-2">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block mb-2">Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
            />
          </div>

          <button

            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-md text-white font-semibold transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-gray-400 mt-4 text-center">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-400 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
