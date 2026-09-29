import CommonHeader from "@/common/header/CommonHeader";
import React from "react";

type SettingToggleProps = {
  title: string;
  description?: string;
  enabled: boolean;
  onChange: (value: boolean) => void;
};

const SettingToggle: React.FC<SettingToggleProps> = ({
  title,
  description,
  enabled,
  onChange,
}) => {
  return (
    <div className="flex items-center justify-between w-full  border-b border-[#1E2939] pb-3">
      <div>
        <CommonHeader className="text-white! pb-2!">{title}</CommonHeader>
        {description && (
          <CommonHeader size="sm" className=" text-[#99A1AF]! pb-0!">
            {description}
          </CommonHeader>
        )}
      </div>

      <button
        onClick={() => onChange(!enabled)}
        className={`relative w-12 h-6 cursor-pointer flex items-center rounded-full transition-colors duration-300 ${
          enabled ? "bg-green" : "bg-[#0A0A0A]"
        }`}
      >
        <span
          className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
            enabled ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
};

export default SettingToggle;
