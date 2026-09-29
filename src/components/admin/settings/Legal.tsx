import CardContainer from "@/common/button/CardContainer";
import CommonButton from "@/common/button/CommonButton";
import CommonHeader from "@/common/header/CommonHeader";
import SettingToggle from "@/components/shared/SettingToggle";
import { useState } from "react";

const GDPR_COMPLIANCE_SETTINGS = [
  {
    key: "gdprMode",
    label: "GDPR Mode",
    description: "Enable GDPR compliance features for EU users",
  },
  {
    key: "cookieConsent",
    label: "Cookie Consent",
    description: "Require cookie consent from users",
  },
  {
    key: "dataExport",
    label: "Data Export",
    description: "Allow users to export their personal data",
  },
  {
    key: "rightToBeForgotten",
    label: "Right to be Forgotten",
    description: "Allow users to request account deletion",
  },
];

type ToggleKey = (typeof GDPR_COMPLIANCE_SETTINGS)[number]["key"];

const Legal = () => {
  const [toggles, setToggles] = useState<Record<ToggleKey, boolean>>({
    gdprMode: false,
    cookieConsent: true,
    dataExport: true,
    rightToBeForgotten: true,
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
          GDPR & Compliance
        </CommonHeader>
        <div className="space-y-4">
          {GDPR_COMPLIANCE_SETTINGS.map((feature) => (
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

export default Legal;
