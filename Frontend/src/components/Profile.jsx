import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaUserCircle, FaEnvelope, FaPhone, FaEdit, FaUser } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import toast from "react-hot-toast";

function Profile() {
  const [user, setUser] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState(user);
  const API = 'https://expence-tracker-9uzt.onrender.com';

  const localUser = JSON.parse(localStorage.getItem("user"));
  const id = localUser.id;

  useEffect(() => {
    axios
      .get(`${API}/api/v1/users/getUser/${id}`)
      .then((res) => {
        setUser(res.data.userData);
        setUpdatedUser(res.data.userData);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser({ ...updatedUser, [name]: value });
  };

  const handleSave = () => {
    axios.put(`${API}/api/v1/users/updateUser/${id}`, {
      name: updatedUser.name,
      email: updatedUser.email,
      phonNum: updatedUser.phonNum,
    });

    toast.success("Profile updated successfully!");
    setUser(updatedUser);
    setIsEditing(false);
  };
console.log(user)
  return (
    <div className="w-full bg-black min-h-screen p-6">
      <div className="max-w-3xl mx-auto bg-[#111111] shadow-lg rounded-2xl p-8 mt-28 text-[#EDEDED] border border-neutral-800">

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b border-[#6D9773]/40 pb-6">
          <FaUserCircle className="text-[#FFBA00]" size={100} />

          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-2xl font-bold text-[#FFBA00]">{user.name}</h1>
            <p className="text-gray-300">{user.email}</p>
            <p className="text-sm text-gray-400 mt-1">
              Member since{" "}
              {new Date(user.created_at).toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>

          <button
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center gap-2 bg-[#D8A35D] text-black px-4 py-2 rounded-md hover:bg-[#e6a800] transition"
          >
            <FaEdit /> {isEditing ? "Cancel" : "Edit"}
          </button>
        </div>

        <div className="mt-8 space-y-4">

          <div className="flex items-center gap-4">
            {isEditing ? (
              <>
                <FaUser className="text-[#FFBA00]" />
                <input
                  type="text"
                  name="name"
                  required
                  value={updatedUser.name}
                  onChange={handleChange}
                  className="border border-[#6D9773] bg-black text-[#EDEDED] rounded-md px-3 py-2 w-full"
                />
              </>
            ) : (
              ""
            )}
          </div>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-[#FFBA00]" />
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={updatedUser.email}
                onChange={handleChange}
                className="border border-[#6D9773] bg-black text-[#EDEDED] rounded-md px-3 py-2 w-full"
              />
            ) : (
              <p>{user.email}</p>
            )}
          </div>

          <div className="flex items-center gap-4">
            <FaPhone className="text-[#FFBA00]" />
            {isEditing ? (
              <input
                type="text"
                name="phonNum"
                value={updatedUser.phonNum}
                onChange={handleChange}
                className="border border-[#6D9773] bg-black text-[#EDEDED] rounded-md px-3 py-2 w-full"
              />
            ) : (
              <p>+91 {user.phonNum}</p>
            )}
          </div>

          <div className="flex items-center gap-4">
            <MdLocationOn className="text-[#FFBA00]" />
            {isEditing ? (
              <input
                type="text"
                name="location"
                value={updatedUser.location || "India"}
                onChange={handleChange}
                className="border border-[#6D9773] bg-black text-[#EDEDED] rounded-md px-3 py-2 w-full"
              />
            ) : (
              <p>{user.location || "India"}</p>
            )}
          </div>
        </div>

        {isEditing && (
          <div className="flex justify-end mt-6">
            <button
              onClick={handleSave}
              className="bg-[#6D9773] hover:bg-[#5b8262] text-black px-6 py-2 rounded-md shadow"
            >
              Save Changes
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
