import {
  Bell,
  Eye,
  EyeOff,
  Lock,
  LogOut,
  Mail,
  MapPin,
  Phone,
  Shield,
} from "lucide-react";
import { useState } from "react";

const Profile = () => {
  const [activeTab, setActiveTab] = useState<
    "profile" | "account" | "notifications" | "privacy"
  >("profile");
  const [editMode, setEditMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const TAB_ITEMS = [
    { id: "profile", label: "Profile" },
    { id: "account", label: "Account" },
    { id: "notifications", label: "Notifications" },
    { id: "privacy", label: "Privacy Settings" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold">DJ Profile</h1>
        <p className="text-muted-foreground">
          Manage your professional DJ profile
        </p>
      </div>

      {/* Profile Header */}
      <div className="p-6 md:p-8 rounded-xl border border-border bg-card/50 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-4xl font-bold text-card">
              MH
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-2">DJ Name</h2>
            <p className="text-muted-foreground mb-4">Full Name</p>

            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start mb-6">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-yellow-400">⭐</span>
                <span className="font-semibold">{4.5} Rating</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-lg">📊</span>
                <span className="font-semibold">{0} Gigs</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-lg">👥</span>
                <span className="font-semibold">{0} Followers</span>
              </div>
            </div>

            <div className="flex gap-3 justify-center md:justify-start">
              <button
                onClick={() => setEditMode(!editMode)}
                className="px-6 py-2 rounded-lg bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/50 transition"
              >
                {editMode ? "Done" : "Edit Profile"}
              </button>
              <button className="px-6 py-2 rounded-lg border border-border text-center font-semibold hover:bg-card/50 transition">
                Share Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-border">
        <div className="flex gap-6 overflow-x-auto">
          {TAB_ITEMS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`pb-3 px-2 font-semibold text-sm whitespace-nowrap border-b-2 transition ${
                activeTab === tab.id
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="space-y-6">
        {/* Profile Tab */}
        {activeTab === "profile" && (
          <div className="space-y-6">
            <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm">
              <h3 className="font-bold text-lg mb-4">Genres</h3>
              <div className="flex flex-wrap gap-2">
                {["House", "Techno", "Progressive"].map((genre) => (
                  <span
                    key={genre}
                    className="px-4 py-2 rounded-full border border-primary bg-primary/10 text-primary text-sm font-semibold"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm">
              <h3 className="font-bold text-lg mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    Email
                  </label>
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-input border border-border">
                    <Mail size={18} className="text-muted-foreground" />
                    <span>{"email@example.com"}</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    Phone Number
                  </label>
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-input border border-border">
                    <Phone size={18} className="text-muted-foreground" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    Location
                  </label>
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-input border border-border">
                    <MapPin size={18} className="text-muted-foreground" />
                    <span>Los Angeles, CA</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm">
              <h3 className="font-bold text-lg mb-4">Social Links</h3>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Instagram"
                  className="w-full px-4 py-2 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="text"
                  placeholder="Spotify"
                  className="w-full px-4 py-2 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="text"
                  placeholder="SoundCloud"
                  className="w-full px-4 py-2 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          </div>
        )}

        {/* Account Tab */}
        {activeTab === "account" && (
          <div className="space-y-6">
            <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Lock size={20} />
                Change Password
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    Current Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="w-full px-4 py-2 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <button
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    New Password
                  </label>
                  <div className="relative">
                    <input
                      type={showNewPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="w-full px-4 py-2 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <button
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                    >
                      {showNewPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>
                </div>
                <button className="w-full py-2 rounded-lg bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/50 transition">
                  Update Password
                </button>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm">
              <h3 className="font-bold text-lg mb-4">Account Actions</h3>
              <button className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-destructive bg-destructive/10 text-destructive font-semibold hover:bg-destructive/20 transition">
                <LogOut size={20} />
                Logout
              </button>
            </div>
          </div>
        )}

        {/* Notifications Tab */}
        {activeTab === "notifications" && (
          <div className="space-y-6">
            <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Bell size={20} />
                Notification Preferences
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg bg-input/50 border border-border/50">
                  <span className="font-medium">New Bookings</span>
                  <button className="relative w-12 h-7 rounded-full bg-gradient-to-r from-primary to-accent">
                    <div className="absolute right-1 top-1 w-5 h-5 rounded-full bg-white"></div>
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-input/50 border border-border/50">
                  <span className="font-medium">Song Requests</span>
                  <button className="relative w-12 h-7 rounded-full bg-input border border-border">
                    <div className="absolute left-1 top-1 w-5 h-5 rounded-full bg-muted"></div>
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-input/50 border border-border/50">
                  <span className="font-medium">Follower Activity</span>
                  <button className="relative w-12 h-7 rounded-full bg-gradient-to-r from-primary to-accent">
                    <div className="absolute right-1 top-1 w-5 h-5 rounded-full bg-white"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Privacy Settings Tab */}
        {activeTab === "privacy" && (
          <div className="space-y-6">
            <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Shield size={20} />
                Privacy Controls
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg bg-input/50 border border-border/50">
                  <span className="font-medium">Make Profile Public</span>
                  <button className="relative w-12 h-7 rounded-full bg-gradient-to-r from-primary to-accent">
                    <div className="absolute right-1 top-1 w-5 h-5 rounded-full bg-white"></div>
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-input/50 border border-border/50">
                  <span className="font-medium">Show Contact Info</span>
                  <button className="relative w-12 h-7 rounded-full bg-input border border-border">
                    <div className="absolute left-1 top-1 w-5 h-5 rounded-full bg-muted"></div>
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-input/50 border border-border/50">
                  <span className="font-medium">Allow Messages</span>
                  <button className="relative w-12 h-7 rounded-full bg-gradient-to-r from-primary to-accent">
                    <div className="absolute right-1 top-1 w-5 h-5 rounded-full bg-white"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
