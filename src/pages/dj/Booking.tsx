"use client";

import { ChevronLeft, ChevronRight, Clock, MapPin } from "lucide-react";
import { useState } from "react";

interface Event {
  date: number;
  name: string;
  time: string;
  venue: string;
  color: "green" | "pink" | "yellow";
}

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const EVENTS: Record<number, Event[]> = {
  13: [
    {
      date: 13,
      name: "Eclipse Lounge",
      time: "9:00 PM - 1:00 AM",
      venue: "123 Downtown Ave",
      color: "green",
    },
  ],
  16: [
    {
      date: 16,
      name: "Neon Pulse",
      time: "10:00 PM - 2:00 AM",
      venue: "123 Downtown Ave",
      color: "pink",
    },
  ],
  20: [
    {
      date: 20,
      name: "Eclipse Lounge",
      time: "9:00 PM - 1:00 AM",
      venue: "456 Uptown",
      color: "green",
    },
    {
      date: 20,
      name: "Eclipse Lounge",
      time: "9:00 PM - 1:00 AM",
      venue: "456 Uptown",
      color: "yellow",
    },
  ],
  25: [
    {
      date: 25,
      name: "Eclipse Lounge",
      time: "9:00 PM - 1:00 AM",
      venue: "456 Uptown",
      color: "green",
    },
  ],
};

const COLOR_MAP = {
  green: "border-green-500 bg-green-500/20",
  pink: "border-pink-500 bg-pink-500/20",
  yellow: "border-yellow-500 bg-yellow-500/20",
};

const Booking = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 2)); // March 2026
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const previousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  const calendarDays = [];
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  const upcomingBookings = [
    {
      name: "Neon Pulse",
      venue: "123 Downtown Ave",
      time: "Tonight, 10:00 PM - 2:00 AM",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop",
    },
    {
      name: "Eclipse Lounge",
      venue: "456 Uptown Blvd",
      time: "Tomorrow, 11:00 PM - 3:00 AM",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold">Bookings</h1>
        <p className="text-muted-foreground">
          Manage your upcoming and past gigs
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Calendar */}
        <div className="md:col-span-2 p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">
                {MONTHS[month]} {year}
              </h2>
              <div className="flex gap-2">
                <button
                  onClick={previousMonth}
                  className="p-2 hover:bg-card rounded-lg transition"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={goToToday}
                  className="px-4 py-2 rounded-lg text-sm font-semibold border border-border hover:bg-card/50 transition"
                >
                  Today
                </button>
                <button
                  onClick={nextMonth}
                  className="p-2 hover:bg-card rounded-lg transition"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Day headers */}
            <div className="grid grid-cols-7 gap-2">
              {DAYS.map((day) => (
                <div
                  key={day}
                  className="text-center text-xs font-semibold text-muted-foreground py-2"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-2">
              {calendarDays.map((day, index) => (
                <div
                  key={index}
                  className={`aspect-square rounded-lg border transition ${
                    day === null
                      ? "bg-transparent border-transparent"
                      : EVENTS[day]
                        ? "border-border bg-card/80 hover:border-primary/50"
                        : "border-border bg-card/50 hover:border-border"
                  }`}
                >
                  {day && (
                    <div className="h-full p-2 flex flex-col">
                      <span className="text-sm font-semibold">{day}</span>
                      {EVENTS[day] && (
                        <div className="mt-1 space-y-0.5">
                          {EVENTS[day].map((event, idx) => (
                            <div
                              key={idx}
                              className={`text-xs px-1.5 py-0.5 rounded border ${COLOR_MAP[event.color]}`}
                              title={event.name}
                            >
                              {event.name.split(" ")[0]}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Booking History Button */}
          <button className="w-full mt-6 py-2 rounded-lg bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/50 transition">
            Bookings History
          </button>
        </div>

        {/* Upcoming Bookings */}
        <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm">
          <h3 className="text-lg font-bold mb-4">Upcoming</h3>
          <div className="space-y-4">
            {upcomingBookings.map((booking, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-border bg-input/50 overflow-hidden hover:border-primary/50 transition group"
              >
                <div className="h-24 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                  <img
                    src={booking.image}
                    alt={booking.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-3 space-y-2">
                  <h4 className="font-semibold text-sm">{booking.name}</h4>
                  <div className="flex items-start gap-1.5 text-xs text-muted-foreground">
                    <MapPin size={14} className="flex-shrink-0 mt-0.5" />
                    <span>{booking.venue}</span>
                  </div>
                  <div className="flex items-start gap-1.5 text-xs text-muted-foreground">
                    <Clock size={14} className="flex-shrink-0 mt-0.5" />
                    <span>{booking.time}</span>
                  </div>
                  <button className="w-full mt-2 py-1.5 rounded text-xs bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/50 transition">
                    Go Live Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
