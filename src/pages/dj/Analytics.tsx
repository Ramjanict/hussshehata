import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const bookingsData = [
  { month: "Jan", bookings: 40, revenue: 2400 },
  { month: "Feb", bookings: 35, revenue: 2100 },
  { month: "Mar", bookings: 50, revenue: 3100 },
  { month: "Apr", bookings: 45, revenue: 2800 },
  { month: "May", bookings: 65, revenue: 4200 },
  { month: "Jun", bookings: 75, revenue: 5100 },
];

const ratingData = [
  { date: "Day 1", rating: 4.2 },
  { date: "Day 5", rating: 4.3 },
  { date: "Day 10", rating: 4.4 },
  { date: "Day 15", rating: 4.5 },
  { date: "Day 20", rating: 4.6 },
  { date: "Day 25", rating: 4.7 },
  { date: "Day 30", rating: 4.8 },
];

const genreData = [
  { name: "House", value: 35, color: "#6366f1" },
  { name: "Techno", value: 28, color: "#00d4ff" },
  { name: "Progressive", value: 23, color: "#22c55e" },
  { name: "Trance", value: 14, color: "#f59e0b" },
];

const Analytics = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold">Analytics</h1>
        <p className="text-muted-foreground">
          Track your performance and growth
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm">
          <p className="text-sm text-muted-foreground mb-2">Total Gigs</p>
          <div className="text-3xl font-bold">142</div>
          <p className="text-xs text-green-400 mt-2">+12% this month</p>
        </div>

        <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm">
          <p className="text-sm text-muted-foreground mb-2">Total Revenue</p>
          <div className="text-3xl font-bold">$54.8K</div>
          <p className="text-xs text-green-400 mt-2">+23% this month</p>
        </div>

        <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm">
          <p className="text-sm text-muted-foreground mb-2">Profile Views</p>
          <div className="text-3xl font-bold">3.4k</div>
          <p className="text-xs text-green-400 mt-2">+18% this month</p>
        </div>

        <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm">
          <p className="text-sm text-muted-foreground mb-2">Avg Rating</p>
          <div className="text-3xl font-bold">4.8</div>
          <p className="text-xs text-green-400 mt-2">+0.2 this month</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Bookings & Revenue Chart */}
        <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm">
          <h3 className="font-bold text-lg mb-6">Bookings & Revenue</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={bookingsData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="rgba(255,255,255,0.1)"
              />
              <XAxis dataKey="month" stroke="rgba(255,255,255,0.5)" />
              <YAxis stroke="rgba(255,255,255,0.5)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(0,0,0,0.8)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              />
              <Legend />
              <Bar dataKey="bookings" fill="#6366f1" radius={[8, 8, 0, 0]} />
              <Bar dataKey="revenue" fill="#00d4ff" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Rating Trend Chart */}
        <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm">
          <h3 className="font-bold text-lg mb-6">Rating Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={ratingData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="rgba(255,255,255,0.1)"
              />
              <XAxis dataKey="date" stroke="rgba(255,255,255,0.5)" />
              <YAxis stroke="rgba(255,255,255,0.5)" domain={[4, 5]} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(0,0,0,0.8)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              />
              <Line
                type="monotone"
                dataKey="rating"
                stroke="#f59e0b"
                strokeWidth={3}
                dot={{ fill: "#f59e0b", r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Genre Distribution */}
        <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm">
          <h3 className="font-bold text-lg mb-6">Top Genres</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={genreData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name} ${value}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {genreData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Stats Table */}
        <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm">
          <h3 className="font-bold text-lg mb-6">Performance Stats</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 rounded-lg bg-input/50 border border-border/50">
              <span className="text-sm">Avg Set Duration</span>
              <span className="font-semibold">4.2 hours</span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-input/50 border border-border/50">
              <span className="text-sm">Peak Viewers (Avg)</span>
              <span className="font-semibold">284</span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-input/50 border border-border/50">
              <span className="text-sm">Song Requests (Avg)</span>
              <span className="font-semibold">32</span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-input/50 border border-border/50">
              <span className="text-sm">Followers Growth</span>
              <span className="font-semibold text-green-400">+1.2k</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
