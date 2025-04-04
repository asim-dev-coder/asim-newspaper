import React from "react";
import { GoSearch } from "react-icons/go";


function TextSection() {
  return (
    <div className="w-10/12">
      <div className="relative justify-items-center">
        <input
          className="px-6 w-[900px] h-[70px] rounded-lg outline-[#ee4023] shadow-md bg-white text-gray-700"
          type="text"
          placeholder="খুঁজুন..."
        />
        <p className="absolute right-45 top-5">
          <GoSearch size={30} />
        </p>
      </div>
    </div>
  );
}

export default TextSection;