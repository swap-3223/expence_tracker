import React from "react";

function Footer() {
  return (
    <>
      <footer
        id="contact"
        className="
          bg-black
          text-center
          py-6
          border-t border-neutral-800
          text-[#EDEDED]
        "
      >
        © {new Date().getFullYear()} ExpenseTracker — Built with 💙 by 
        <span className="text-[#D8A35D]"> Swapnil Wagh</span>
      </footer>
    </>
  );
}

export default Footer;
