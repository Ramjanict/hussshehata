import { Building2 } from "lucide-react";
import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

type Props = {
  active: number;
  inactive: number;
  total: number;
};

const COLORS = {
  active: "#d6df3e",
  inactive: "#ff3b3b",
  bg: "#0f1418",
  card: "#151a1f",
};

const VenueStatusCard: React.FC<Props> = ({ active, inactive, total }) => {
  const data = [
    { name: "Active", value: active },
    { name: "Inactive", value: inactive },
  ];

  return (
    <div className="h-full">
      <div className="bg-[#1A1C1D] p-4 rounded-3xl relative z-10 -mb-10 flex-1 flex flex-col justify-between">
        <div className=" text-white text-xl ">
          <p className="flex gap-1 items-center">
            <span className="text-3xl">
              <GoDotFill style={{ color: COLORS.active }} />
            </span>
            Active - 278
          </p>
          <p className="flex gap-1 items-center">
            <span className="text-3xl">
              <GoDotFill style={{ color: COLORS.inactive }} />
            </span>
            Inactive - 172
          </p>
        </div>

        <div className="ml-auto w-34.5 h-34.5 bg-[#101112] p-3 rounded-3xl">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                innerRadius={40}
                outerRadius={55}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
                cornerRadius={10}
              >
                <Cell fill={COLORS.active} />
                <Cell fill={COLORS.inactive} />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex gap-2 text-white items-center ">
          <span className="text-sm bg-purple p-2 rounded-md">
            <Building2 />
          </span>
          <span className="text-sm">Total Venues - {total}</span>
        </div>
      </div>

      <div className=" text-[#C3C7CB] bg-[#2E3133] pt-12 rounded-b-3xl relative z-0">
        <div className="px-5 py-3">
          <div className="flex  justify-between">
            <div>Increase rate</div>
            <span className="text-xs flex items-center gap-1">
              <FaArrowTrendUp />
              +25.6%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenueStatusCard;
