import React from "react";
import { Navigate } from "react-router-dom";

function PvtComponent({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));

  // 1️⃣ Check if user is logged in
  if (!user || !user.isLoggedin || !user.token) {
    return <Navigate to="/login" replace />;
  }

  try {
    // 2️⃣ Decode JWT token
    const payload = JSON.parse(atob(user.token.split(".")[1]));
    const now = Math.floor(Date.now() / 1000);

    // 3️⃣ If token expired
    if (payload.exp < now) {
      console.log("JWT expired — logging out");
      localStorage.removeItem("user");
      return <Navigate to="/login" replace />;
    }
  } catch (error) {
    console.error("Invalid token:", error);
    localStorage.removeItem("user");
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default PvtComponent;
