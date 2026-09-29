import CardContainer from "@/common/button/CardContainer";
import CommonButton from "@/common/button/CommonButton";
import SectionHeader from "@/common/button/SectionHeader";
import CommonHeader from "@/common/header/CommonHeader";
import { requests } from "@/components/admin/home/VenueRequests";
import VenueList from "@/components/admin/venues/VenueList";
import VenueCard from "@/components/shared/VenueCard";
import { useState } from "react";

const Venues = () => {
  const [activeTab, setActiveTab] = useState<"pending" | "approved">("pending");

  return (
    <div className="">
      <SectionHeader
        title="Venue Management"
        description="Review applications and manage venues"
      />

      <div className="flex flex-col sm:flex-row gap-4 pb-5">
        <CommonButton
          className={
            activeTab === "pending"
              ? "bg-purple! text-white"
              : "bg-cardBg! text-darkGray!"
          }
          onClick={() => setActiveTab("pending")}
        >
          Pending Applications ({requests.length ?? 0})
        </CommonButton>
        <CommonButton
          className={
            activeTab === "approved"
              ? "bg-purple! text-white"
              : "bg-cardBg! text-darkGray!"
          }
          onClick={() => setActiveTab("approved")}
        >
          Approved Venues (3)
        </CommonButton>
      </div>

      {activeTab === "approved" && <VenueList />}

      {activeTab === "pending" && (
        <CardContainer>
          <CommonHeader size="lg" className="">
            Venue Requests
          </CommonHeader>

          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
            {requests.map((request) => (
              <VenueCard key={request.id} {...request} />
            ))}
          </div>
        </CardContainer>
      )}
    </div>
  );
};

export default Venues;
