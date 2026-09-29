import DashboardCards from "@/components/admin/home/DashboardCards";
import RevenueChart from "@/components/admin/home/RevenueChart";
import TopDJs from "@/components/admin/home/TopDJs";
import UserDistributionChart from "@/components/admin/home/UserDistributionChart";
import VenueRequests from "@/components/admin/home/VenueRequests";

const Home = () => {
  return (
    <div className=" space-y-4">
      <DashboardCards />

      <div className="grid grid-cols-1 2xl:grid-cols-3 gap-4">
        <div className="2xl:col-span-2 space-y-4">
          <RevenueChart />

          <div className="grid grid-cols-1 2xl:grid-cols-3 gap-4">
            <div className=" 2xl:col-span-2">
              <TopDJs />
            </div>
            <UserDistributionChart />
          </div>
        </div>
        <div className=" ">
          <VenueRequests />
        </div>
      </div>
    </div>
  );
};

export default Home;
