import CommonButton from "@/common/button/CommonButton";
import CommonSelect from "@/common/custom/CommonSelect";
import { Bell, FileText, Globe, Shield } from "lucide-react";
import React from "react";

const tabOptions = [
  { label: "Platform", value: "platform", icon: Globe },
  { label: "Notifications", value: "notifications", icon: Bell },
  { label: "Account", value: "account", icon: Shield },
  { label: "Legal", value: "legal", icon: FileText },
] as const;

export type TabOption = (typeof tabOptions)[number]["value"];

interface SettingTabsProps {
  activeTab: TabOption;
  setActiveTab: (value: TabOption) => void;
}
const SettingTabs: React.FC<SettingTabsProps> = ({
  activeTab,
  setActiveTab,
}) => {
  return (
    <div className="">
      <div className="hidden sm:flex gap-3  p-2 rounded-xl w-fit">
        {tabOptions.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.value;

          return (
            <CommonButton
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all
                ${
                  isActive
                    ? "bg-purple! text-white"
                    : "bg-cardBg! text-white! border border-purple!"
                }
              `}
            >
              <Icon size={16} />
              {tab.label}
            </CommonButton>
          );
        })}
      </div>

      <div className="block sm:hidden mt-2">
        <CommonSelect
          value={activeTab}
          item={tabOptions.map((t) => ({
            label: t.label,
            value: t.value,
          }))}
          onValueChange={(val) => setActiveTab(val)}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default SettingTabs;
