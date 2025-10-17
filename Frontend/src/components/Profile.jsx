import React, { useState } from "react";
import { FaUserCircle, FaEnvelope, FaPhone, FaEdit } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

function Profile() {
  // Dummy user data (replace with Redux or API later)
  const [user, setUser] = useState({
    name: "Swapnil Wagh",
    email: "swapnilw691@gmail.com",
    phone: "+91 9960197836",
    location: "Pune, Maharashtra",
    joined: "Jan 2024",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser({ ...updatedUser, [name]: value });
  };

  const handleSave = () => {
    setUser(updatedUser);
    setIsEditing(false);
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b pb-6">
          <FaUserCircle className="text-blue-600" size={100} />
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-2xl font-bold text-slate-800">
              {user.name}
            </h1>
            <p className="text-gray-500">{user.email}</p>
            <p className="text-sm text-gray-400 mt-1">
              Member since {user.joined}
            </p>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            <FaEdit /> {isEditing ? "Cancel" : "Edit"}
          </button>
        </div>

        {/* Profile Details */}
        <div className="mt-8 space-y-4 text-slate-700">
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-blue-600" />
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={updatedUser.email}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
            ) : (
              <p>{user.email}</p>
            )}
          </div>

          <div className="flex items-center gap-4">
            <FaPhone className="text-blue-600" />
            {isEditing ? (
              <input
                type="text"
                name="phone"
                value={updatedUser.phone}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
            ) : (
              <p>{user.phone}</p>
            )}
          </div>

          <div className="flex items-center gap-4">
            <MdLocationOn className="text-blue-600" />
            {isEditing ? (
              <input
                type="text"
                name="location"
                value={updatedUser.location}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
            ) : (
              <p>{user.location}</p>
            )}
          </div>
        </div>

        {/* Save Button */}
        {isEditing && (
          <div className="flex justify-end mt-6">
            <button
              onClick={handleSave}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md shadow"
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
