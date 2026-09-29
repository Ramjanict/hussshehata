import CardContainer from "@/common/button/CardContainer";
import CommonButton from "@/common/button/CommonButton";
import CommonHeader from "@/common/header/CommonHeader";
import SettingToggle from "@/components/shared/SettingToggle";
import { useState } from "react";

const ADMIN_NOTIFICATIONS = [
  {
    key: "newUserSignups",
    label: "New User Signups",
    description: "Get notified when new users register",
  },
  {
    key: "venueApplications",
    label: "Venue Applications",
    description: "Receive alerts for new venue applications",
  },
  {
    key: "djApplications",
    label: "DJ Applications",
    description: "Receive alerts for new DJ applications",
  },
  {
    key: "paymentIssues",
    label: "Payment Issues",
    description: "Get notified about payment and subscription issues",
  },
  {
    key: "systemAlerts",
    label: "System Alerts",
    description: "Receive critical system and security alerts",
  },
  {
    key: "userReports",
    label: "User Reports",
    description: "Get notified when users report content or issues",
  },
];

type ToggleKey = (typeof ADMIN_NOTIFICATIONS)[number]["key"];

const Notifications = () => {
  const [toggles, setToggles] = useState<Record<ToggleKey, boolean>>({
    newUserSignups: false,
    venueApplications: true,
    djApplicatios: true,
    songRequests: true,
    checkIns: true,
    djApplications: true,
    paymentIssues: false,
    systemAlerts: true,
    userReports: true,
  });

  const toggleFeature = (key: ToggleKey) => {
    setToggles((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="space-y-4">
      <CardContainer className="">
        <CommonHeader size="xl" className=" font-jakarta">
          Admin Notifications{" "}
        </CommonHeader>
        <div className="space-y-4">
          {ADMIN_NOTIFICATIONS.map((feature) => (
            <SettingToggle
              key={feature.key}
              title={feature.label}
              description={feature.description}
              enabled={toggles[feature.key]}
              onChange={() => toggleFeature(feature.key)}
            />
          ))}
        </div>
        <div className="flex justify-end mt-4">
          <CommonButton className="bg-purple!">Save Changes</CommonButton>
        </div>
      </CardContainer>
    </div>
  );
};

export default Notifications;
