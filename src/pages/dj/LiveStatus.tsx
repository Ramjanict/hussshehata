import { Clock, MapPin, Radio, Search, Zap } from "lucide-react";
import { useState } from "react";

const SESSIONS = [
  {
    id: "1",
    name: "Neon Pulse",
    venue: "123 Downtown Ave",
    time: "Tonight, 10:00 PM - 2:00 AM",
    duration: "4 hours",
    peakViewers: 234,
    songRequests: 28,
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop",
  },
  {
    id: "2",
    name: "Neon Pulse",
    venue: "123 Downtown Ave",
    time: "Tonight, 10:00 PM - 2:00 AM",
    duration: "4 hours",
    peakViewers: 234,
    songRequests: 28,
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop",
  },
  {
    id: "3",
    name: "Neon Pulse",
    venue: "123 Downtown Ave",
    time: "Tonight, 10:00 PM - 2:00 AM",
    duration: "4 hours",
    peakViewers: 234,
    songRequests: 28,
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop",
  },
  {
    id: "4",
    name: "Neon Pulse",
    venue: "123 Downtown Ave",
    time: "Tonight, 10:00 PM - 2:00 AM",
    duration: "4 hours",
    peakViewers: 234,
    songRequests: 28,
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop",
  },
];

const LiveStatus = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold">Live Status</h1>
        <p className="text-muted-foreground">
          Broadcast your live performances and connect with your audience
        </p>
      </div>

      {/* Current Session - Not Live */}
      <div className="p-6 md:p-8 rounded-xl border border-border bg-card/50 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
          <div className="flex-shrink-0">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <Radio size={48} className="text-muted-foreground" />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              You&apos;re Not Live
            </h2>
            <p className="text-muted-foreground mb-6">
              Start broadcasting your set to let fans know where you&apos;re
              performing. They&apos;ll see you on the app and can request songs!
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/50 transition">
              <Radio size={20} />
              Go Live Now
            </button>
          </div>
        </div>
      </div>

      {/* Session History */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <h2 className="text-2xl font-bold">Session History</h2>
          <div className="relative w-full md:w-64">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              size={18}
            />
            <input
              type="text"
              placeholder="Search sessions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {SESSIONS.map((session) => (
            <div
              key={session.id}
              className="rounded-lg border border-border bg-card/50 backdrop-blur-sm overflow-hidden hover:border-primary/50 transition group"
            >
              <div className="h-40 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                <img
                  src={session.image}
                  alt={session.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-4 space-y-3">
                <h3 className="font-bold text-lg">{session.name}</h3>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin size={16} />
                    {session.venue}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock size={16} />
                    {session.time}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Zap size={16} />
                    {session.duration}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-3">
                  <div className="p-3 rounded-lg bg-input border border-border/50">
                    <div className="text-xs text-muted-foreground mb-1">
                      Peak Viewers
                    </div>
                    <div className="text-lg font-bold">
                      {session.peakViewers}
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-input border border-border/50">
                    <div className="text-xs text-muted-foreground mb-1">
                      Song Requests
                    </div>
                    <div className="text-lg font-bold">
                      {session.songRequests}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveStatus;
