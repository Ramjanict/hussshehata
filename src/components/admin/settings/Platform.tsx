import CardContainer from "@/common/button/CardContainer";
import CommonButton from "@/common/button/CommonButton";
import CommonHeader from "@/common/header/CommonHeader";
import SettingToggle from "@/components/shared/SettingToggle";
import { useState } from "react";

const FEATURE_FLAGS = [
  {
    key: "newUserRegistration",
    label: "New User Registration",
    description: "Allow new users to sign up for the platform",
  },
  {
    key: "djBookings",
    label: "DJ Bookings",
    description: "Enable booking functionality for DJs and venues",
  },
  {
    key: "premiumSubscriptions",
    label: "Premium Subscriptions",
    description: "Allow users to purchase premium subscriptions",
  },
  {
    key: "songRequests",
    label: "Song Requests",
    description: "Enable song request feature for venues",
  },
  {
    key: "checkIns",
    label: "Check-ins",
    description: "Allow users to check in to venues",
  },
];

type ToggleKey = (typeof FEATURE_FLAGS)[number]["key"];
export const inputClass = {
  form: "space-y-4 w-full  ",
  label: "block text-sm text-[#99A1AF] mb-2 ",
  input:
    "w-full border border-[#364153] bg-[#0A0A0A] rounded-xl p-4 outline-none text-white text-base",
  error: "text-red-500 text-sm mt-1",
};
const Platform = () => {
  const [toggles, setToggles] = useState<Record<ToggleKey, boolean>>({
    newUserRegistration: true,
    djBookings: true,
    premiumSubscriptions: true,
    songRequests: true,
    checkIns: true,
    gdprMode: true,
    cookieConsent: true,
    dataExport: true,
    rightForgotten: true,
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
          Platform Information
        </CommonHeader>
        <div className="space-y-4">
          <div>
            <label className={inputClass.label}>Platform Name</label>
            <input
              type="text"
              defaultValue="VibeCheck"
              className={inputClass.input}
              placeholder="Enter Name"
            />
          </div>
          <div>
            <label className={inputClass.label}>Support Email</label>
            <input
              type="text"
              defaultValue="support@vibecheck.com"
              className={inputClass.input}
              placeholder="Enter Support Email"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={inputClass.label}>Platform Status</label>
              <input
                type="text"
                placeholder="Active"
                className={inputClass.input}
              />
            </div>
            <div>
              <label className={inputClass.label}>Default Language</label>
              <input
                type="text"
                placeholder="English"
                className={inputClass.input}
              />
            </div>
          </div>
        </div>
      </CardContainer>

      <CardContainer className="">
        <CommonHeader size="xl" className=" font-jakarta">
          Feature Flags
        </CommonHeader>
        <div className="space-y-4">
          {FEATURE_FLAGS.map((feature) => (
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

export default Platform;
