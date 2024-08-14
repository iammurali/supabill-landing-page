import React from "react";

const Header = () => {
  return (
    <header className="flex justify-center md:justify-between md:items-center p-6 bg-black shadow-md border-b border-gray-600">
      <img src="/Supabill.svg" className="h-8 md:h-12" />
      <button className="hidden md:block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Buy Now
      </button>
    </header>
  );
};

export default Header;
