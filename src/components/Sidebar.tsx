import { Building2, Home, Users } from "lucide-react";
import { HiOutlineLogout } from "react-icons/hi";
import { LuHeadphones, LuWallet } from "react-icons/lu";
import { RiSettingsLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

interface SidebarProps {
  onItemClick?: () => void;
}
const Sidebar = ({ onItemClick }: SidebarProps) => {
  const menuItems = [
    { id: "home", label: "Home", icon: Home, path: "/dashboard" },
    {
      id: "venues",
      label: "Venues",
      icon: Building2,
      path: "/dashboard/venues",
    },
    { id: "users", label: "Users", icon: Users, path: "/dashboard/user" },
    { id: "djs", label: "DJs", icon: LuHeadphones, path: "/dashboard/dj" },
    {
      id: "subscriptions",
      label: "Subscriptions",
      icon: LuWallet,
      path: "/dashboard/subscription",
    },
    {
      id: "settings",
      label: "Settings",
      icon: RiSettingsLine,
      path: "/dashboard/settings",
    },
  ];

  return (
    <div className="w-64 bg-mainBg flex flex-col">
      <div className="flex items-center gap-2 p-6">
        <div className="flex flex-col justify-center items-center gap-[10px] w-[66px] h-[66px] p-[18px] aspect-square rounded-[16px] bg-[#100D18] shadow-[0_2px_2px_rgba(1,240,255,0.42)]">
          <span className="text-center font-inter font-extrabold text-[40px] leading-[px] bg-gradient-to-r from-[#24AFF6] via-[#735AE3] via-[#9A3BCD] to-[#B726AF] bg-clip-text text-transparent">
            V
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-center font-inter font-bold text-[22px] leading-[26px] bg-gradient-to-r from-[#24AFF6] via-[#735AE3] via-[#9A3BCD] to-[#B726AF] bg-clip-text text-transparent">
            VibeCheck
          </span>
        </div>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.id}
              to={item.path}
              end={item.path === "/dashboard"}
              onClick={onItemClick}
              className={({ isActive }) =>
                `w-full flex items-center gap-3 px-4 py-3 transition-all rounded-[30px] text-gray ${
                  isActive
                    ? " bg-purple shadow-[4px_4px_12px_0_rgba(99,103,255,0.39)]"
                    : " hover:bg-purple "
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon
                    className={`w-5 h-5 ${
                      isActive ? "text-white" : "text-gray"
                    }`}
                  />
                  <span className="font-medium">{item.label}</span>
                </>
              )}
            </NavLink>
          );
        })}

        <button className="w-full cursor-pointer flex items-center gap-2 px-4 py-3 rounded-[30px] bg-red text-gray hover:bg-red-600 transition">
          <HiOutlineLogout className="text-2xl rotate-180" />
          <span className="font-medium">Log Out</span>
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
