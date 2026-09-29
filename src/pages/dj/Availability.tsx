"use client";

import { Calendar, Clock, DollarSign, Plus, X } from "lucide-react";
import { useState } from "react";

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

interface TimeSlot {
  startTime: string;
  endTime: string;
  price: string;
}

interface DaySchedule {
  day: string;
  slots: TimeSlot[];
}

const MOCK_BLACKOUT_DATES = [
  { date: "2026-03-25", reason: "Vacation" },
  { date: "2026-03-30", reason: "Personal" },
];

const MOCK_WEEKLY_AVAILABILITY: DaySchedule[] = [
  { day: "Monday", slots: [] },
  { day: "Tuesday", slots: [] },
  { day: "Wednesday", slots: [] },
  {
    day: "Thursday",
    slots: [
      { startTime: "01:00", endTime: "04:00", price: "$1500" },
      { startTime: "10:00", endTime: "01:00", price: "$1000" },
    ],
  },
  { day: "Friday", slots: [] },
  { day: "Saturday", slots: [] },
  { day: "Sunday", slots: [] },
];

const Availability = () => {
  const [weeklySchedule, setWeeklySchedule] = useState(
    MOCK_WEEKLY_AVAILABILITY,
  );
  console.log("setWeeklySchedule", setWeeklySchedule);
  const [showAddSlot, setShowAddSlot] = useState(false);
  const [showAddDate, setShowAddDate] = useState(false);

  const toggleAvailableTonight = () => {
    // Implement toggle logic
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold">Availability</h1>
        <p className="text-muted-foreground">
          Manage your availability schedule and blackout dates
        </p>
      </div>

      {/* Available Tonight Section */}
      <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-lg mb-1">Available Tonight</h3>
            <p className="text-sm text-muted-foreground">
              Show as available for last-minute bookings
            </p>
          </div>
          <button
            onClick={toggleAvailableTonight}
            className="relative w-12 h-7 rounded-full bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 transition"
          >
            <div className="absolute right-1 top-1 w-5 h-5 rounded-full bg-white"></div>
          </button>
        </div>

        {/* Status message */}
        <div className="mt-4 p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            Your profile will show &quot;Available Tonight&quot; badge and
            appear higher in search results.
          </span>
        </div>
      </div>

      {/* Blackout Dates */}
      <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-lg">Blackout Dates</h3>
          <button
            onClick={() => setShowAddDate(true)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/50 transition text-sm"
          >
            <Plus size={18} />
            Add Date
          </button>
        </div>

        <p className="text-sm text-muted-foreground mb-4">
          Dates you&apos;re unavailable for bookings
        </p>

        <div className="space-y-2">
          {MOCK_BLACKOUT_DATES.map((item, idx) => (
            <div
              key={idx}
              className="p-3 rounded-lg border border-border bg-input/50 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <Calendar size={18} className="text-muted-foreground" />
                <div>
                  <div className="font-semibold text-sm">{item.date}</div>
                  <div className="text-xs text-muted-foreground">
                    {item.reason}
                  </div>
                </div>
              </div>
              <button className="p-1 hover:bg-card rounded transition">
                <X size={18} className="text-muted-foreground" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Weekly Availability */}
      <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-lg">Weekly Availability</h3>
          <button
            onClick={() => setShowAddSlot(true)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/50 transition text-sm"
          >
            <Plus size={18} />
            Add Time Slot
          </button>
        </div>

        <p className="text-sm text-muted-foreground mb-6">
          Set your regular available time slots
        </p>

        <div className="space-y-4">
          {weeklySchedule.map((schedule, idx) => (
            <div
              key={idx}
              className="p-4 rounded-lg border border-border bg-input/50"
            >
              <h4 className="font-semibold mb-3">{schedule.day}</h4>
              {schedule.slots.length > 0 ? (
                <div className="space-y-2">
                  {schedule.slots.map((slot, slotIdx) => (
                    <div
                      key={slotIdx}
                      className="flex items-center justify-between p-3 rounded bg-card/50 border border-border/50"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-sm">
                          <Clock size={16} className="text-muted-foreground" />
                          <span>
                            {slot.startTime} - {slot.endTime}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <DollarSign size={16} className="text-yellow-500" />
                          <span>{slot.price}</span>
                        </div>
                      </div>
                      <button className="p-1 hover:bg-card/50 rounded transition">
                        <X size={18} className="text-muted-foreground" />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">
                  No time slots set
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal placeholders */}
      {showAddDate && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card border border-border rounded-xl p-6 w-full max-w-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-lg">Add Blackout Date</h3>
              <button
                onClick={() => setShowAddDate(false)}
                className="p-1 hover:bg-card/50 rounded"
              >
                <X size={20} />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-2 rounded-lg bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Reason (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g., Vacation, Personal"
                  className="w-full px-4 py-2 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowAddDate(false)}
                  className="flex-1 py-2 rounded-lg border border-border text-center font-semibold hover:bg-card/50 transition"
                >
                  Cancel
                </button>
                <button className="flex-1 py-2 rounded-lg bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/50 transition">
                  Add Date
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showAddSlot && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card border border-border rounded-xl p-6 w-full max-w-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-lg">Add Time Slot</h3>
              <button
                onClick={() => setShowAddSlot(false)}
                className="p-1 hover:bg-card/50 rounded"
              >
                <X size={20} />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Day of Week
                </label>
                <select className="w-full px-4 py-2 rounded-lg bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                  {DAYS.map((day) => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Start Time
                  </label>
                  <input
                    type="time"
                    className="w-full px-4 py-2 rounded-lg bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    End Time
                  </label>
                  <input
                    type="time"
                    className="w-full px-4 py-2 rounded-lg bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Price</label>
                <input
                  type="text"
                  placeholder="$800"
                  className="w-full px-4 py-2 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="p-3 rounded-lg bg-accent/10 border border-accent/20 text-accent-foreground text-sm">
                Set your performance rate for this time slot. Venues will see
                this when booking you.
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowAddSlot(false)}
                  className="flex-1 py-2 rounded-lg border border-border text-center font-semibold hover:bg-card/50 transition"
                >
                  Cancel
                </button>
                <button className="flex-1 py-2 rounded-lg bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/50 transition">
                  Add Slot
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Availability;
