import { Search } from "lucide-react";
import { FaBell } from "react-icons/fa";
import image from "../assets/images/profile.jpg";

export function Header() {
  return (
    <div className="h-24 bg-mainBg flex items-center justify-between px-6 w-full gap-6">
      <div className="flex-1 w-auto sm:max-w-130 ">
        <div className="relative w-full hidden sm:block ">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#73777C]" />
          <input
            type="text"
            placeholder="Search"
            className="pl-8  bg-[#1A1C1D]  rounded-2xl text-[#73777C] placeholder:text-[#73777C] py-3.5 w-full outline-none"
          />
        </div>
      </div>
      <div className="flex items-center gap-4 ">
        <button className=" bg-[#1A1C1D]  w-13 h-13 rounded-full flex items-center justify-center ">
          <FaBell className="w-5 h-5 text-white" />
        </button>
        <div className="w-10 h-10 flex items-center justify-center ">
          <img
            src={image}
            alt="profile"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="text-sm">
          <p className="text-white">Hussain</p>
          <p className="text-[13px] text-[#73777C] hidden sm:block">
            hussain@admin.com
          </p>
        </div>
      </div>
    </div>
  );
}
