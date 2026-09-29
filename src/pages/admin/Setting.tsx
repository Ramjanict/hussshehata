import SectionHeader from "@/common/button/SectionHeader";
import Account from "@/components/admin/settings/Account";
import Legal from "@/components/admin/settings/Legal";
import Notifications from "@/components/admin/settings/Notifications";
import Platform from "@/components/admin/settings/Platform";
import SettingTabs, { type TabOption } from "@/components/shared/SettingTabs";
import { useState } from "react";

const Setting = () => {
  const [activeTab, setActiveTab] = useState<TabOption>("platform");

  return (
    <div className="">
      <SectionHeader
        title="Admin Settings"
        description="Manage platform-wide configuration and preferences"
      />

      <SettingTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="mt-6 w-full 2xl:w-1/2">
        {activeTab === "platform" && <Platform />}
        {activeTab === "notifications" && <Notifications />}
        {activeTab === "account" && <Account />}
        {activeTab === "legal" && <Legal />}
      </div>
    </div>
  );
};

export default Setting;
