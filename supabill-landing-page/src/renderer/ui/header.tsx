import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-black shadow-md border-b">
      <img src="/Supabill.svg" />
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Buy Now
      </button>
    </header>
  );
};

export default Header;
