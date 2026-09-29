import CommonHeader from "@/common/header/CommonHeader";
import { Users } from "lucide-react";
import { BiDollar } from "react-icons/bi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { LuHeadphones } from "react-icons/lu";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import VenueStatusCard from "./VenueStatusCard";

// Sample data
const mrr = [
  { name: "Page A", uv: 4000, pv: 2400 },
  { name: "Page B", uv: 3000, pv: 1398 },
  { name: "Page C", uv: 2000, pv: 9800 },
  { name: "Page D", uv: 2780, pv: 3908 },
  { name: "Page E", uv: 1890, pv: 4800 },
  { name: "Page F", uv: 2390, pv: 3800 },
  { name: "Page G", uv: 3490, pv: 4300 },
];
const dj = [
  { name: "Page A", uv: 4000, pv: 2400 },
  { name: "Page B", uv: 3000, pv: 1398 },
  { name: "Page C", uv: 2000, pv: 9800 },
  { name: "Page D", uv: 2780, pv: 3908 },
  { name: "Page E", uv: 1890, pv: 4800 },
];

// Sample data
const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

const DashboardCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4 items-stretch">
      <div className="h-full  flex flex-col">
        <div className="bg-[#1A1C1D] p-4 rounded-3xl relative z-10 -mb-10 flex-1  flex flex-col justify-between">
          <CommonHeader size="3xl">31,200</CommonHeader>

          <ResponsiveContainer width="100%" height={120}>
            <AreaChart data={data} tabIndex={-1} className="focus:outline-none">
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0F5206" stopOpacity={1} />
                  <stop offset="100%" stopColor="#1A1C1D" stopOpacity={1} />
                </linearGradient>
              </defs>

              <Tooltip />

              <Area
                type="monotone"
                dataKey="uv"
                stroke="#30E81B"
                fill="url(#colorUv)"
              />
            </AreaChart>
          </ResponsiveContainer>
          <div className="flex gap-2 text-white items-center ">
            <span className="text-sm bg-purple p-2 rounded-md">
              <Users />
            </span>
            <span className="text-sm">Total Users</span>
          </div>
        </div>

        <div className="bg-purple pt-12 rounded-b-3xl relative z-0">
          <div className="px-5 py-3">
            <div className="flex text-white justify-between">
              <div>Total users increase rate</div>
              <span className="text-xs flex items-center gap-1">
                <FaArrowTrendUp />
                +18.6%
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full flex flex-col ">
        <div className="bg-[#1A1C1D] p-4 rounded-3xl relative z-10 -mb-10 flex-1 flex flex-col justify-between ">
          <CommonHeader size="3xl">$89.6K</CommonHeader>

          <ResponsiveContainer width="100%" height={120}>
            <BarChart data={mrr}>
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6367FF" />
                  <stop offset="100%" stopColor="#1A1C1D" />
                </linearGradient>
              </defs>

              <Tooltip
                cursor={{ fill: "rgba(0,0,0,0.05)" }}
                contentStyle={{
                  borderRadius: "8px",
                  border: "none",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                }}
              />

              <Bar
                dataKey="pv"
                fill="url(#barGradient)"
                radius={[20, 20, 0, 0]}
                activeBar={{ fill: "#6367FF" }}
              />

              <Bar
                dataKey="uv"
                fill="url(#barGradient)"
                radius={[20, 20, 0, 0]}
                activeBar={{ fill: "#6367FF" }}
              />
            </BarChart>
          </ResponsiveContainer>

          <div className="flex gap-2 text-white items-center ">
            <span className="text-sm bg-purple p-2 rounded-md">
              <BiDollar />
            </span>
            <span className="text-sm">MRR</span>
          </div>
        </div>

        <div className="text-[#C3C7CB] bg-[#2E3133] pt-12 rounded-b-3xl relative z-0">
          <div className="px-5 py-3">
            <div className="flex  justify-between">
              <div>Revenue increase rate</div>
              <span className="text-xs flex items-center gap-1">
                <FaArrowTrendUp />
                +15.6%
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full flex flex-col">
        <div className="bg-[#1A1C1D] p-4 rounded-3xl relative z-10 -mb-10  flex-1 flex flex-col justify-between ">
          <CommonHeader size="3xl">820</CommonHeader>

          <ResponsiveContainer width="100%" height={120}>
            <BarChart data={dj}>
              <defs>
                <linearGradient id="customGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F0A" />
                  <stop offset="100%" stopColor="#1A1C1D" />
                </linearGradient>
              </defs>

              <Tooltip
                cursor={{ fill: "transparent" }}
                contentStyle={{
                  borderRadius: "10px",
                  border: "none",
                  boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
                }}
              />

              <Bar
                dataKey="pv"
                fill="url(#customGradient)"
                radius={[20, 20, 20, 20]}
                barSize={40}
              />
            </BarChart>
          </ResponsiveContainer>
          <div className="flex gap-2 text-white items-center ">
            <span className="text-sm bg-purple p-2 rounded-md">
              <LuHeadphones />
            </span>
            <span className="text-sm">Active DJs</span>
          </div>
        </div>

        <div className="text-[#C3C7CB] bg-[#2E3133] pt-12 rounded-b-3xl relative z-0">
          <div className="px-5 py-3">
            <div className="flex justify-between">
              <div>New Dj’s increase rate</div>
              <span className="text-xs flex items-center gap-1">
                <FaArrowTrendUp />
                +18.6%
              </span>
            </div>
          </div>
        </div>
      </div>
      <VenueStatusCard active={400} inactive={100} total={500} />
    </div>
  );
};

export default DashboardCards;
