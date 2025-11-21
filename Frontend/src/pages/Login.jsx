import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoding] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/v1/users/login", {
        email: form.email,
        password: form.password,
      });

      if (form.email && form.password) {
        setLoding(true);

        localStorage.setItem(
          "user",
          JSON.stringify({
            isLoggedin: true,
            id: res.data.user.id,
            email: form.email,
            name: res.data.user.name,
            token: res.data.token,
          })
        );

        toast.success("Login Successfully");
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        toast.error("Please fill in all fields!");
      }
    } catch (error) {
      if (error.status === 401) {
        toast.error("Email or Password is Wrong :(");
      }
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center 
      bg-[#0D0D0D] text-white relative px-4"
    >
      <Link
        to="/"
        className="absolute top-4 left-4 flex items-center gap-2 text-sm 
        text-[#FFD700] bg-[#1A1A1A] px-3 py-2 rounded-md 
        border border-[#FFD700]/40 hover:bg-[#2a2a2a] transition"
      >
        <FaHome size={16} />
        Home
      </Link>

      <div
        className="bg-linear-to-br from-[#111] to-[#1A1A1A] 
        p-8 rounded-2xl shadow-[0_0_20px_rgba(255,215,0,0.15)] 
        w-96 border border-[#FFD700]/20"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-[#FFD700]">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-2 text-[#FFD700]/80">Email</label>
            <input
              required
              type="email"
              name="email"
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-[#1A1A1A] 
              border border-[#FFD700]/20 
              focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block mb-2 text-[#FFD700]/80">Password</label>
            <input
              required
              type="password"
              name="password"
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-[#1A1A1A] 
              border border-[#FFD700]/20 
              focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
              placeholder="Enter your password"
            />
          </div>


          <button
            type="submit"
            className="w-full bg-[#FFD700] text-black font-semibold 
            py-2 rounded-md transition hover:bg-[#e6c200] 
            shadow-[0_0_15px_rgba(255,215,0,0.4)]"
          >
            {!loading ? "Login" : "Loading..."}
          </button>
        </form>

        <p className="text-sm text-gray-400 mt-4 text-center">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-[#FFD700] hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
