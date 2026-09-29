import CardContainer from "@/common/button/CardContainer";
import CommonButton from "@/common/button/CommonButton";
import Pagination from "@/common/custom/Pagination";
import CommonHeader from "@/common/header/CommonHeader";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { LuCrown } from "react-icons/lu";

const users = [
  {
    id: 1,
    profile: {
      name: "Alex Rivera",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    },
    email: "alex@example.com",
    type: "Premium",
    joined: "15/12/2025",
    eventAttend: 22,
    status: "active",
  },
  {
    id: 2,
    profile: {
      name: "Alex Rivera",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    },
    email: "alex@example.com",
    type: "Premium",
    joined: "15/12/2025",
    eventAttend: 22,
    status: "inactive",
  },
  // ...rest of your users data
];

export interface User {
  id: number;
  profile: {
    name: string;
    image: string;
  };
  email: string;
  type: "Premium" | "Professional";
  joined: string;
  eventAttend: number;
  status: "active" | "inactive";
}

export const tableDesign = {
  table: "w-full border-collapse",
  tbody: "text-white",
  tr: "border-b border-[#1E2939] transition-colors",
  th: "px-6 py-4 text-sm font-semibold text-white border-b border-[#1E2939]",
  td: "px-6 py-4 text-sm text-white",
};

const tableHeaders = [
  { label: "Profile", align: "text-left" },
  { label: "User", align: "text-left" },
  { label: "Email", align: "text-left hidden lg:table-cell" },
  { label: "Type", align: "text-left hidden md:table-cell" },
  { label: "Joined", align: "text-left hidden xl:table-cell" },
  { label: "Event Attend", align: "text-center hidden xl:table-cell" },
  { label: "Status", align: "text-left hidden md:table-cell" },
  { label: "Action", align: "text-center" },
];

const UserList = () => {
  return (
    <CardContainer className="">
      <CommonHeader size="lg" className="">
        User List
      </CommonHeader>
      <div className="overflow-x-auto">
        <div className="rounded-2xl border border-[#1E2939] overflow-hidden">
          <table className={tableDesign.table}>
            <thead>
              {tableHeaders.map((header, idx) => (
                <th key={idx} className={`${header.align} ${tableDesign.th}`}>
                  {header.label}
                </th>
              ))}
            </thead>
            <tbody className={tableDesign.tbody}>
              {users.map((user) => (
                <tr key={user.id} className={tableDesign.tr}>
                  <td className={tableDesign.td}>
                    <img
                      src={user.profile.image}
                      alt={user.profile.name}
                      className="w-11 h-11 rounded-full object-cover"
                    />
                  </td>
                  <td className={tableDesign.td}>{user.profile.name}</td>
                  <td
                    className={`${tableDesign.td} text-darkGray hidden lg:table-cell`}
                  >
                    {user.email}
                  </td>
                  <td className={` hidden md:table-cell ${tableDesign.td}`}>
                    <CommonButton
                      className={`flex gap-1 items-center rounded-full! ${
                        user.type === "Professional"
                          ? "bg-yellow/20! text-yellow!"
                          : "bg-[#00034A]! text-purple!"
                      }`}
                    >
                      <span>
                        <LuCrown />
                      </span>
                      <span>{user.type}</span>
                    </CommonButton>
                  </td>
                  <td className={`${tableDesign.td} hidden xl:table-cell`}>
                    {user.joined}
                  </td>
                  <td
                    className={`${tableDesign.td} text-center hidden xl:table-cell`}
                  >
                    {user.eventAttend}
                  </td>
                  <td className={`${tableDesign.td} hidden md:table-cell`}>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium  ${
                        user.status === "active"
                          ? "bg-[#10B981]/20 text-[#10B981]"
                          : "bg-[#260405] text-red"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span className="flex justify-center cursor-pointer">
                      <HiOutlineDotsHorizontal className="w-5 h-5 text-darkGray" />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="pt-10">
        <Pagination currentPage={2} totalPages={3} onPageChange={() => {}} />
      </div>
    </CardContainer>
  );
};

export default UserList;
