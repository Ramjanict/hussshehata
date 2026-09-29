import CardContainer from "@/common/button/CardContainer";
import SectionHeader from "@/common/button/SectionHeader";
import CommonHeader from "@/common/header/CommonHeader";
import RevenueChart from "@/components/admin/home/RevenueChart";
import SubscriptionCard from "@/components/shared/SubscriptionCard";
import { TrendingUp } from "lucide-react";
import { LuCrown, LuDollarSign } from "react-icons/lu";

export const recentSubscriptions = [
  {
    id: 1,
    name: "Netflix Premium",
    image: "https://picsum.photos/seed/sub1/100/100",
    price: "$15.99",
    email: "user1@example.com",
    time: "10:30 AM",
    date: "2026-03-01",
  },
  {
    id: 2,
    name: "Spotify Family",
    image: "https://picsum.photos/seed/sub2/100/100",
    price: "$9.99",
    email: "user2@example.com",
    time: "02:15 PM",
    date: "2026-03-02",
  },
  {
    id: 3,
    name: "Amazon Prime",
    image: "https://picsum.photos/seed/sub3/100/100",
    price: "$12.99",
    email: "user3@example.com",
    time: "09:45 AM",
    date: "2026-03-03",
  },
  {
    id: 4,
    name: "Disney+",
    image: "https://picsum.photos/seed/sub4/100/100",
    price: "$7.99",
    email: "user4@example.com",
    time: "11:20 AM",
    date: "2026-03-04",
  },
  {
    id: 5,
    name: "YouTube Premium",
    image: "https://picsum.photos/seed/sub5/100/100",
    price: "$11.99",
    email: "user5@example.com",
    time: "04:10 PM",
    date: "2026-03-05",
  },
  {
    id: 6,
    name: "HBO Max",
    image: "https://picsum.photos/seed/sub6/100/100",
    price: "$14.99",
    email: "user6@example.com",
    time: "01:05 PM",
    date: "2026-03-06",
  },
  {
    id: 7,
    name: "Apple Music",
    image: "https://picsum.photos/seed/sub7/100/100",
    price: "$10.99",
    email: "user7@example.com",
    time: "06:30 PM",
    date: "2026-03-07",
  },
  {
    id: 8,
    name: "Canva Pro",
    image: "https://picsum.photos/seed/sub8/100/100",
    price: "$12.99",
    email: "user8@example.com",
    time: "08:00 AM",
    date: "2026-03-08",
  },
  {
    id: 9,
    name: "Adobe Creative Cloud",
    image: "https://picsum.photos/seed/sub9/100/100",
    price: "$29.99",
    email: "user9@example.com",
    time: "03:25 PM",
    date: "2026-03-09",
  },
  {
    id: 10,
    name: "Microsoft 365",
    image: "https://picsum.photos/seed/sub10/100/100",
    price: "$6.99",
    email: "user10@example.com",
    time: "07:45 PM",
    date: "2026-03-10",
  },
];

const Subscriptions = () => {
  const kpis = [
    {
      label: "Premium Users",
      value: "6,400",
      change: "+25.5%",
      icon: <LuCrown />,
      bg: "bg-[#FFD700]/20",
      color: "text-[#FFD700]",
    },
    {
      label: "Premium Venues",
      value: "450",
      change: "+4.7%",
      icon: <LuCrown />,
      bg: "bg-[#00F0FF]/20",
      color: "text-[#00F0FF]",
    },
    {
      label: "Total Earnings",
      value: "$89.6K",
      change: "+15.9%",
      icon: <LuDollarSign />,
      bg: "bg-[#10B981]/20",
      color: "text-[#10B981]",
    },
  ];

  return (
    <div className="">
      <SectionHeader
        title="Subscription Management"
        description="Manage platform subscriptions and user plans"
      />
      <div className=" grid grid-cols-1 xl:grid-cols-3 gap-4">
        <div className=" xl:col-span-2 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {kpis.map((kpi, idx) => (
              <CardContainer key={idx} className="">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center  gap-3">
                      <div className={` ${kpi.bg} p-2 rounded-md `}>
                        <span className={`text-3xl ${kpi.color}`}>
                          {kpi.icon}
                        </span>
                      </div>

                      <CommonHeader
                        size="sm"
                        className="text-[#99A1AF]! pb-0! "
                      >
                        {kpi.label}
                      </CommonHeader>
                    </div>

                    <p className="text-3xl font-bold font-jakarta text-white my-4">
                      {kpi.value}
                    </p>
                    <p className="text-xs text-[#10B981] mt-2">
                      <TrendingUp className="inline w-3 h-3 mr-1" />
                      {kpi.change}
                    </p>
                  </div>
                </div>
              </CardContainer>
            ))}
          </div>

          <RevenueChart title="Subscription Growth" height={450} />
        </div>
        <CardContainer className="h-[725px]  overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <CommonHeader size="lg" className="pb-0!">
              Recent Subscriptions
            </CommonHeader>

            <a href="#" className="text-sm text-blue-400 hover:underline">
              View All
            </a>
          </div>

          <div className="space-y-3">
            {recentSubscriptions.map((sub) => (
              <SubscriptionCard key={sub.id} {...sub} />
            ))}
          </div>
        </CardContainer>
      </div>
    </div>
  );
};

export default Subscriptions;
