// import React, { useState } from "react";
// import { FaUserCircle, FaEnvelope, FaPhone, FaEdit } from "react-icons/fa";
// import { MdLocationOn } from "react-icons/md";

// function Profile() {
//   // Dummy user data (replace with Redux or API later)
//   const [user, setUser] = useState({
//     name: "Swapnil Wagh",
//     email: "swapnilw691@gmail.com",
//     phone: "+91 9960197836",
//     location: "Pune, Maharashtra",
//     joined: "Jan 2024",
//   });

//   const [isEditing, setIsEditing] = useState(false);
//   const [updatedUser, setUpdatedUser] = useState(user);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUpdatedUser({ ...updatedUser, [name]: value });
//   };

//   const handleSave = () => {
//     setUser(updatedUser);
//     setIsEditing(false);
//   };

//   return (
//     <div className="w-full bg-gray-50 min-h-screen p-6">
//       <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">
//         {/* Profile Header */}
//         <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b pb-6">
//           <FaUserCircle className="text-blue-600" size={100} />
//           <div className="flex-1 text-center sm:text-left">
//             <h1 className="text-2xl font-bold text-slate-800">
//               {user.name}
//             </h1>
//             <p className="text-gray-500">{user.email}</p>
//             <p className="text-sm text-gray-400 mt-1">
//               Member since {user.joined}
//             </p>
//           </div>
//           <button
//             onClick={() => setIsEditing(!isEditing)}
//             className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
//           >
//             <FaEdit /> {isEditing ? "Cancel" : "Edit"}
//           </button>
//         </div>

//         {/* Profile Details */}
//         <div className="mt-8 space-y-4 text-slate-700">
//           <div className="flex items-center gap-4">
//             <FaEnvelope className="text-blue-600" />
//             {isEditing ? (
//               <input
//                 type="email"
//                 name="email"
//                 value={updatedUser.email}
//                 onChange={handleChange}
//                 className="border border-gray-300 rounded-md px-3 py-2 w-full"
//               />
//             ) : (
//               <p>{user.email}</p>
//             )}
//           </div>

//           <div className="flex items-center gap-4">
//             <FaPhone className="text-blue-600" />
//             {isEditing ? (
//               <input
//                 type="text"
//                 name="phone"
//                 value={updatedUser.phone}
//                 onChange={handleChange}
//                 className="border border-gray-300 rounded-md px-3 py-2 w-full"
//               />
//             ) : (
//               <p>{user.phone}</p>
//             )}
//           </div>

//           <div className="flex items-center gap-4">
//             <MdLocationOn className="text-blue-600" />
//             {isEditing ? (
//               <input
//                 type="text"
//                 name="location"
//                 value={updatedUser.location}
//                 onChange={handleChange}
//                 className="border border-gray-300 rounded-md px-3 py-2 w-full"
//               />
//             ) : (
//               <p>{user.location}</p>
//             )}
//           </div>
//         </div>

//         {/* Save Button */}
//         {isEditing && (
//           <div className="flex justify-end mt-6">
//             <button
//               onClick={handleSave}
//               className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md shadow"
//             >
//               Save Changes
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Profile;


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaEnvelope, FaSignOutAlt } from "react-icons/fa";

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    alert("Logged out successfully!");
    navigate("/login");
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white text-lg">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-5">
      <div className="bg-gray-800 rounded-2xl shadow-lg p-8 w-full max-w-md text-center">
        <div className="flex flex-col items-center">
          <FaUserCircle size={100} className="text-blue-400 mb-4" />

          <h2 className="text-3xl font-bold text-blue-400 mb-2">
            Welcome, {user.email.split("@")[0]}
          </h2>
          <p className="text-gray-400 flex items-center justify-center gap-2">
            <FaEnvelope /> {user.email}
          </p>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-6">
          <h3 className="text-lg font-semibold mb-2 text-blue-300">
            Account Info
          </h3>
          <p className="text-gray-400">
            Status:{" "}
            <span className="text-green-400">
              {user.isLoggedin ? "Active" : "Inactive"}
            </span>
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="mt-8 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-md transition"
        >
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;
