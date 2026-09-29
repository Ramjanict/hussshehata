import SectionHeader from "@/common/button/SectionHeader";
import UserList from "@/components/admin/user/UserList";
import SearchWithFilter from "@/components/shared/SearchWithFilter";
import { useState } from "react";

const Users = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="">
      <SectionHeader
        title="User Management"
        description="Manage platform users and subscriptions"
      />
      <div className=" space-y-6">
        <SearchWithFilter value={searchTerm} onChange={setSearchTerm} />
        <UserList />
      </div>
    </div>
  );
};

export default Users;
