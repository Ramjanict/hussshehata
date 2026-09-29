import CommonWrapper from "@/common/space/CommonWrapper";
import DjHeader from "@/components/shared/DjHeader";
import { BarChart3, Calendar, Clock, Home, Radio, User } from "lucide-react";
import { Link, Outlet, useLocation } from "react-router-dom";

const NAV_ITEMS = [
  { href: "/dj", icon: Home, label: "Home" },
  { href: "/dj/live-status", icon: Radio, label: "Live Status" },
  { href: "/dj/booking", icon: Calendar, label: "Bookings" },
  { href: "/dj/availability", icon: Clock, label: "Availability" },
  { href: "/dj/analytics", icon: BarChart3, label: "Analytics" },
  { href: "/dj/profile", icon: User, label: "Profile" },
];

const DjLayout = () => {
  const { pathname } = useLocation();

  return (
    <CommonWrapper className="min-h-screen flex flex-col bg-mainBg ">
      <DjHeader />

      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>

      <nav className=" fixed bottom-4 left-0 right-0 z-50 bg-[#2E3133] max-w-140 mx-auto px-10 py-6 rounded-full">
        <div className="flex justify-around">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive =
              item.href === "/dj"
                ? pathname === item.href
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                to={item.href}
                className={`flex-1 flex flex-col items-center justify-center py-3 transition-all ${
                  isActive
                    ? "bg-gradient-to-b from-[#6367FF] to-[#FF00AA] bg-clip-text text-transparent"
                    : "text-[#A6ACB2]"
                }`}
              >
                <svg width="0" height="0">
                  <defs>
                    <linearGradient
                      id="iconGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#6367FF" />
                      <stop offset="100%" stopColor="#FF00AA" />
                    </linearGradient>
                  </defs>
                </svg>

                <Icon
                  size={24}
                  stroke={isActive ? "url(#iconGradient)" : "#A6ACB2"}
                />

                <span className="text-xs mt-1">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </CommonWrapper>
  );
};

export default DjLayout;
