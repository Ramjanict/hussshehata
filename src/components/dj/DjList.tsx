import CardContainer from "@/common/button/CardContainer";
import Pagination from "@/common/custom/Pagination";
import CommonHeader from "@/common/header/CommonHeader";
import { FaStar } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const djs = [
  {
    id: 1,
    profile: {
      name: "DJ Nova",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    },
    email: "djnova@example.com",
    joined: "15/12/2025",
    ratings: 4.8,
    eventPerformed: 22,
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
    joined: "15/12/2025",
    ratings: 4.8,
    eventPerformed: 22,
    status: "inactive",
  },
  {
    id: 3,
    profile: {
      name: "Alex Rivera",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&q=80",
    },
    email: "alex@example.com",
    joined: "15/12/2025",
    ratings: 4.8,
    eventPerformed: 22,
    status: "active",
  },
  {
    id: 4,
    profile: {
      name: "Alex Rivera",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=200&q=80",
    },
    email: "alex@example.com",
    joined: "15/12/2025",
    ratings: 4.8,
    eventPerformed: 22,
    status: "active",
  },
  {
    id: 5,
    profile: {
      name: "Alex Rivera",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
    },
    email: "alex@example.com",
    joined: "15/12/2025",
    ratings: 4.8,
    eventPerformed: 22,
    status: "active",
  },
  {
    id: 6,
    profile: {
      name: "Alex Rivera",
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&q=80",
    },
    email: "alex@example.com",
    joined: "15/12/2025",
    ratings: 4.8,
    eventPerformed: 22,
    status: "active",
  },
  {
    id: 7,
    profile: {
      name: "Alex Rivera",
      image:
        "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=200&q=80",
    },
    email: "alex@example.com",
    joined: "15/12/2025",
    ratings: 4.8,
    eventPerformed: 22,
    status: "active",
  },
  {
    id: 8,
    profile: {
      name: "Alex Rivera",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    },
    email: "alex@example.com",
    joined: "15/12/2025",
    ratings: 4.8,
    eventPerformed: 22,
    status: "active",
  },
];

export interface DJ {
  id: number;
  profile: {
    name: string;
    image: string;
  };
  email: string;
  joined: string;
  ratings: number;
  eventPerformed: number;
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
  { label: "Email", align: "text-left hidden md:table-cell" },
  { label: "Joined", align: "text-left hidden xl:table-cell" },
  { label: "Ratings", align: "text-left hidden sm:table-cell" },
  { label: "Event Performed", align: "text-center hidden xl:table-cell" },
  { label: "Status", align: "text-left hidden md:table-cell" },
  { label: "Action", align: "text-center" },
];

const DjList = () => {
  return (
    <CardContainer className="">
      <CommonHeader size="lg" className="">
        DJ List
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
              {djs.map((dj) => (
                <tr key={dj.id} className={tableDesign.tr}>
                  <td className={tableDesign.td}>
                    <img
                      src={dj.profile.image}
                      alt={dj.profile.name}
                      className="w-11 h-11 rounded-full object-cover"
                    />
                  </td>
                  <td className={tableDesign.td}>{dj.profile.name}</td>
                  <td
                    className={`${tableDesign.td} text-darkGray hidden md:table-cell`}
                  >
                    {dj.email}
                  </td>
                  <td className={tableDesign.td + " hidden xl:table-cell"}>
                    {dj.joined}
                  </td>
                  <td className={tableDesign.td + " hidden sm:table-cell"}>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow w-4 h-4" />
                      <span>{dj.ratings}</span>
                    </div>
                  </td>
                  <td
                    className={`{
                    ${tableDesign.td}  text-center hidden xl:table-cell
                `}
                  >
                    {dj.eventPerformed}
                  </td>
                  <td className={tableDesign.td + " hidden md:table-cell"}>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        dj.status === "active"
                          ? "bg-[#10B981]/20 text-[#10B981]"
                          : "bg-[#260405] text-red"
                      }`}
                    >
                      {dj.status}
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

export default DjList;
