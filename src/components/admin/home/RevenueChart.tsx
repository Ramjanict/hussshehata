import CardContainer from "@/common/button/CardContainer";
import CommonHeader from "@/common/header/CommonHeader";
import { Bar, BarChart, LabelList, ResponsiveContainer, XAxis } from "recharts";

const data = [
  { month: "JAN", value: 2000 },
  { month: "FEB", value: 5000 },
  { month: "MAR", value: 1000 },
  { month: "APR", value: 6000 },
  { month: "MAY", value: 15000 },
  { month: "JUN", value: 4000 },
  { month: "JUL", value: 800 },
  { month: "AUG", value: 6000 },
  { month: "SEP", value: 700 },
  { month: "OCT", value: 1500 },
  { month: "NOV", value: 100 },
  { month: "DEC", value: 4000 },
];

// Formatter compatible with LabelList
const formatLabel = (label: string | number | undefined) => {
  if (label === undefined) return "";
  const value = Number(label);
  if (value >= 1000) return `$${Math.round(value / 1000)}K+`;
  return `$${value}+`;
};

interface RevenueChartProps {
  title?: string;
  className?: string;
  height?: number;
}
const RevenueChart: React.FC<RevenueChartProps> = ({ title, height }) => {
  return (
    <CardContainer className="focus:outline-none! ">
      <CommonHeader size="lg">{title || "Monthly Revenue"}</CommonHeader>

      <ResponsiveContainer width="100%" height={height || 300}>
        <BarChart data={data}>
          <defs>
            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#886DFF" />
              <stop offset="98.14%" stopColor="#1A1C1D" />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="month"
            stroke="#73777C"
            axisLine={false}
            tickLine={false}
          />
          <Bar
            dataKey="value"
            fill="url(#barGradient)"
            style={{ outline: "none" }}
            radius={[8, 8, 0, 0]}
          >
            <LabelList
              dataKey="value"
              position="top"
              formatter={formatLabel as any}
              style={{
                fill: "#fff",
                fontSize: 12,
                fontWeight: 600,
              }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </CardContainer>
  );
};

export default RevenueChart;
