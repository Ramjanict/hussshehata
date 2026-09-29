import CardContainer from "@/common/button/CardContainer";
import CommonHeader from "@/common/header/CommonHeader";

const data = [
  { name: "Free Users", value: 24800, color: "#7B7FE8" },
  { name: "Premium Users (Monthly)", value: 15000, color: "#FF2D9B" },
  { name: "Free Users (Yearly)", value: 5000, color: "#CCDD2A" },
];

const total = data.reduce((sum, d) => sum + d.value, 0);

const cx = 150;
const cy = 150;
const outerR = 105;
const innerR = 75;
const strokeW = outerR - innerR;
const capR = strokeW / 2;
const GAP_DEG = 21;

function toRad(deg: number) {
  return ((deg - 90) * Math.PI) / 180;
}

function pt(radius: number, angleDeg: number) {
  const a = toRad(angleDeg);
  return { x: cx + radius * Math.cos(a), y: cy + radius * Math.sin(a) };
}

function buildRoundedArc(startDeg: number, endDeg: number) {
  const large = endDeg - startDeg > 180 ? 1 : 0;

  const o1 = pt(outerR, startDeg);
  const o2 = pt(outerR, endDeg);
  const i1 = pt(innerR, endDeg);
  const i2 = pt(innerR, startDeg);

  return [
    `M ${o1.x} ${o1.y}`,
    `A ${outerR} ${outerR} 0 ${large} 1 ${o2.x} ${o2.y}`,
    `A ${capR} ${capR} 0 0 1 ${i1.x} ${i1.y}`,
    `A ${innerR} ${innerR} 0 ${large} 0 ${i2.x} ${i2.y}`,
    `A ${capR} ${capR} 0 0 1 ${o1.x} ${o1.y}`,
    "Z",
  ].join(" ");
}

// ✅ FIXED SEGMENT CALCULATION WITH CONSISTENT GAP
let currentAngle = 0;
const totalGap = data.length * GAP_DEG;
const usableAngle = 360 - totalGap;

const segments = data.map((item) => {
  const sweep = (item.value / total) * usableAngle;

  const startDeg = currentAngle + GAP_DEG / 2;
  const endDeg = currentAngle + sweep + GAP_DEG / 2;

  currentAngle += sweep + GAP_DEG;

  return { ...item, path: buildRoundedArc(startDeg, endDeg) };
});

const UserDistributionChart = () => {
  return (
    <CardContainer className=" flex-col flex justify-between gap-3">
      <CommonHeader size="lg" className="pb-3!">
        User Distribution
      </CommonHeader>

      <div className="bg-[#101112] rounded-2xl p-4  flex items-center justify-center  flex-1 self-stretch">
        <svg width="100%" height="100%" viewBox="0 0 300 300">
          {segments.map((seg) => (
            <path key={seg.name} d={seg.path} fill={seg.color} />
          ))}
        </svg>
      </div>

      <div className="bg-[#101112] rounded-2xl px-4 py-3 space-y-3">
        {data.map((item) => (
          <div key={item.name} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span
                className="w-4 h-4 rounded-full shrink-0"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm text-white">{item.name}</span>
            </div>
            <span className="text-sm text-white font-medium">
              {item.value.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </CardContainer>
  );
};

export default UserDistributionChart;
