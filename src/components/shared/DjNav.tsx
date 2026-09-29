import {
  ArrowLeft,
  Bell,
  Bookmark,
  Home,
  Menu,
  Search,
  Settings,
  User,
  X,
} from "lucide-react";
import React, { useState } from "react";

const DjNav: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasNotification, setHasNotification] = useState(true);

  return (
    <div className="min-h-screen bg-zinc-950 font-mono">
      {/* Top Nav Bar */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-3"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,10,10,0.98) 0%, rgba(10,10,10,0.85) 100%)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {/* Left: Back */}
        <button
          className="flex items-center gap-2 group transition-all duration-200"
          onClick={() => {}}
        >
          <span
            className="flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200 group-hover:bg-white/10"
            style={{ border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <ArrowLeft
              size={16}
              className="text-zinc-300 group-hover:text-white transition-colors duration-200"
              strokeWidth={2}
            />
          </span>
          <span
            className="text-zinc-300 group-hover:text-white text-sm tracking-widest uppercase transition-colors duration-200"
            style={{ letterSpacing: "0.18em", fontWeight: 500 }}
          >
            Back
          </span>
        </button>

        {/* Right: Notification Bell + Menu */}
        <div className="flex items-center gap-3">
          {/* Bell */}
          <button
            className="relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 hover:bg-white/10 active:scale-95"
            style={{ border: "1px solid rgba(255,255,255,0.10)" }}
            onClick={() => setHasNotification(false)}
            aria-label="Notifications"
          >
            <Bell size={18} className="text-zinc-200" strokeWidth={1.8} />
            {hasNotification && (
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500 ring-2 ring-zinc-950 animate-pulse" />
            )}
          </button>

          {/* Hamburger */}
          <button
            className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 hover:bg-white/10 active:scale-95"
            style={{ border: "1px solid rgba(255,255,255,0.10)" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? (
              <X size={18} className="text-zinc-200" strokeWidth={1.8} />
            ) : (
              <Menu size={18} className="text-zinc-200" strokeWidth={1.8} />
            )}
          </button>
        </div>
      </nav>

      {/* Slide-down Menu */}
      <div
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out overflow-hidden"
        style={{
          maxHeight: menuOpen ? "400px" : "0px",
          background: "rgba(12,12,12,0.97)",
          backdropFilter: "blur(20px)",
          borderBottom: menuOpen ? "1px solid rgba(255,255,255,0.08)" : "none",
        }}
      >
        <div className="pt-20 pb-6 px-6 flex flex-col gap-1">
          {[
            { icon: Home, label: "Home" },
            { icon: Search, label: "Search" },
            { icon: Bookmark, label: "Saved" },
            { icon: User, label: "Profile" },
            { icon: Settings, label: "Settings" },
          ].map(({ icon: Icon, label }) => (
            <button
              key={label}
              className="flex items-center gap-4 px-4 py-3 rounded-xl text-zinc-400 hover:text-white hover:bg-white/6 transition-all duration-150 text-left group"
              onClick={() => setMenuOpen(false)}
            >
              <Icon
                size={18}
                strokeWidth={1.6}
                className="group-hover:text-white transition-colors"
              />
              <span
                className="text-sm tracking-widest uppercase"
                style={{ letterSpacing: "0.15em", fontWeight: 500 }}
              >
                {label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Page Content Preview */}
      <div className="pt-24 px-6 flex flex-col items-center justify-center gap-8">
        <div className="text-center space-y-3">
          <p
            className="text-zinc-600 text-xs tracking-widest uppercase"
            style={{ letterSpacing: "0.25em" }}
          >
            Navigation Component
          </p>
          <h1
            className="text-white text-2xl"
            style={{
              fontWeight: 300,
              letterSpacing: "0.05em",
              fontFamily: "'Georgia', serif",
            }}
          >
            Dark Top Bar
          </h1>
        </div>

        {/* Demo Cards */}
        <div className="w-full max-w-sm space-y-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-2xl p-4 flex gap-4 items-center"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex-shrink-0"
                style={{
                  background: `rgba(255,255,255,${0.04 + i * 0.02})`,
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              />
              <div className="flex-1 space-y-2">
                <div
                  className="h-2.5 rounded-full"
                  style={{
                    width: `${60 + i * 10}%`,
                    background: "rgba(255,255,255,0.10)",
                  }}
                />
                <div
                  className="h-2 rounded-full"
                  style={{
                    width: `${40 + i * 8}%`,
                    background: "rgba(255,255,255,0.06)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <p
          className="text-zinc-700 text-xs tracking-wider text-center"
          style={{ letterSpacing: "0.1em" }}
        >
          Click the bell or menu icon to interact
        </p>
      </div>
    </div>
  );
};

export default DjNav;
