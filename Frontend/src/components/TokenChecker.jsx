import { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function TokenChecker() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.token) {
      try {
        const payload = JSON.parse(atob(user.token.split(".")[1]));
        const now = Math.floor(Date.now() / 1000);

        if (payload.exp < now) {
          console.log("JWT expired — clearing localStorage");
          localStorage.removeItem("user");
          toast.error("Token Expired!")
            setTimeout(() => {
            navigate("/");
            }, 500);
        }
      } catch (error) {
        console.error("Invalid token:", error);
        localStorage.removeItem("user");
        navigate("/login");
      }
    }
  }, [navigate]);

  return null; // this component doesn't render anything
}

export default TokenChecker;
