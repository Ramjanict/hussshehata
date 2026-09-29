import SectionHeader from "@/common/button/SectionHeader";
import DjList from "@/components/dj/DjList";
import SearchWithFilter from "@/components/shared/SearchWithFilter";
import { useState } from "react";

const DJs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="">
      <SectionHeader
        title="DJ Management"
        description="Manage platform DJs and their information"
      />
      <div className=" space-y-6">
        <SearchWithFilter
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Search DJs..."
        />

        <DjList />
      </div>
    </div>
  );
};

export default DJs;
