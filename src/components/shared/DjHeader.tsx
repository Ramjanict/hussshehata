import React from "react";
import { PiArrowBendUpLeftFill } from "react-icons/pi";
import { RiMenu3Fill } from "react-icons/ri";
import { TbBell } from "react-icons/tb";

const DjHeader: React.FC = () => {
  return (
    <div className="w-full  text-white flex items-center justify-between mt-6 ">
      {/* Left Section */}
      <div className="flex items-center gap-2 cursor-pointer">
        <PiArrowBendUpLeftFill className="w-5 h-5" />
        <span className="text-lg font-medium">Back</span>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#2E3133] hover:bg-gray-700 transition">
          <TbBell className="w-5 h-5" />
        </button>
        <button className="w-10 h-10 flex items-center justify-center transition">
          <RiMenu3Fill className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default DjHeader;
