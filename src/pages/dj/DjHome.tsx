import { Calendar, Clock, MapPin, Radio } from "lucide-react";

const DjHome = () => {
  const upcomingBookings = [
    {
      id: "1",
      name: "Neon Pulse",
      venue: "123 Downtown Ave",
      date: "Tonight",
      time: "10:00 PM - 2:00 AM",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop",
    },
    {
      id: "2",
      name: "Eclipse Lounge",
      venue: "456 Uptown Blvd",
      date: "Tomorrow",
      time: "11:00 PM - 3:00 AM",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      {/* Welcome Section */}
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold">Welcome back, "DJ"</h1>
        <p className="text-muted-foreground">
          Here&apos;s what&apos;s happening with your bookings
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-muted-foreground">
              Total Gigs
            </span>
            <Calendar className="text-primary" size={20} />
          </div>
          <div className="text-2xl md:text-3xl font-bold">{2}</div>
          <p className="text-xs text-muted-foreground mt-2">+12% this month</p>
        </div>

        <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-muted-foreground">
              Revenue
            </span>
            <span className="text-yellow-500 text-2xl">💰</span>
          </div>
          <div className="text-2xl md:text-3xl font-bold">$54.8K</div>
          <p className="text-xs text-muted-foreground mt-2">+23% this month</p>
        </div>

        <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-muted-foreground">
              Profile Views
            </span>
            <span className="text-cyan-400 text-2xl">👁️</span>
          </div>
          <div className="text-2xl md:text-3xl font-bold">3.4k</div>
          <p className="text-xs text-muted-foreground mt-2">+18% this month</p>
        </div>

        <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-muted-foreground">
              Avg Rating
            </span>
            <span className="text-yellow-400 text-2xl">⭐</span>
          </div>
          <div className="text-2xl md:text-3xl font-bold">{5}.0</div>
          <p className="text-xs text-muted-foreground mt-2">+0.2 this month</p>
        </div>
      </div>

      {/* Live Status Section */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-6">
            <Radio size={24} className="text-primary" />
            <h2 className="text-xl font-bold">Live Status</h2>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-input border border-border">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold">Currently Live</span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-500/20 text-green-400">
                  Active
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Broadcasting at Neon Pulse
              </p>
            </div>
          </div>

          <button className="w-full mt-4 py-2 rounded-lg bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/50 transition">
            Go Live Now
          </button>
        </div>

        {/* Followers */}
        <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">👥</span>
            <h2 className="text-xl font-bold">Followers</h2>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-input border border-border">
              <div className="flex items-center justify-between">
                <span className="font-semibold">{8}</span>
                <span className="text-sm text-muted-foreground">
                  Total followers
                </span>
              </div>
            </div>
          </div>

          <button className="w-full mt-4 py-2 rounded-lg border border-border text-center font-semibold hover:bg-card/50 transition">
            View Profile
          </button>
        </div>
      </div>

      {/* Upcoming Bookings */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Upcoming Bookings</h2>
          <a
            href="/dashboard/bookings"
            className="text-primary text-sm font-semibold hover:underline"
          >
            View All
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {upcomingBookings.map((booking) => (
            <div
              key={booking.id}
              className="rounded-xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden hover:border-primary/50 transition group"
            >
              <div className="h-32 md:h-40 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                <img
                  src={booking.image}
                  alt={booking.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-4 space-y-3">
                <h3 className="font-bold text-lg">{booking.name}</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin size={16} />
                    {booking.venue}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock size={16} />
                    {booking.time}
                  </div>
                </div>
                <button className="w-full py-2 rounded-lg bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/50 transition text-sm">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DjHome;
