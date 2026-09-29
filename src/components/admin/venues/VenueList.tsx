import CardContainer from "@/common/button/CardContainer";
import CommonButton from "@/common/button/CommonButton";
import Pagination from "@/common/custom/Pagination";
import CommonHeader from "@/common/header/CommonHeader";
import { useState } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { LuCrown } from "react-icons/lu";
import VenueModal from "./VenueModal";

const venues = [
  {
    id: 1,
    venue: {
      name: "Neon Pulse",
      image:
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
    },
    owner: {
      name: "Cameron Williamson",
      email: "alma.lawson@example.com",
    },
    type: "Professional",
    date: "May 29, 2026",
    location: "4140 Parker Rd Allentown New Mexico 31134",
    status: "active",
    about: "Lorem Ipsum is simply dummy text...",
  },
  {
    id: 2,
    venue: {
      name: "Neon Pulse",
      image:
        "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&q=80",
    },
    owner: {
      name: "Cameron Williamson",
      email: "alma.lawson@example.com",
    },
    type: "Premium",
    date: "May 29, 2026",
    location: "4140 Parker Rd Allentown New Mexico 31134",
    status: "active",
    about: "Lorem Ipsum is simply dummy text...",
  },
  {
    id: 3,
    venue: {
      name: "Lunar Lounge",
      image:
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80",
    },
    owner: {
      name: "Esther Howard",
      email: "esther.howard@example.com",
    },
    type: "Premium",
    date: "June 5, 2026",
    location: "123 Main St Albuquerque New Mexico 87101",
    status: "active",
    about: "Lorem Ipsum is simply dummy text...",
  },
  {
    id: 4,
    venue: {
      name: "Starlight Arena",
      image:
        "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?w=800&q=80",
    },
    owner: {
      name: "Jerome Bell",
      email: "jerome.bell@example.com",
    },
    type: "Premium",
    date: "June 10, 2026",
    location: "567 Sunset Blvd Santa Fe New Mexico 87501",
    status: "inactive",
    about: "Lorem Ipsum is simply dummy text...",
  },
  {
    id: 5,
    venue: {
      name: "Galaxy Club",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
    },
    owner: {
      name: "Cody Fisher",
      email: "cody.fisher@example.com",
    },
    type: "Professional",
    date: "June 12, 2026",
    location: "890 Park Ave Las Cruces New Mexico 88001",
    status: "active",
    about: "Lorem Ipsum is simply dummy text...",
  },
  {
    id: 6,
    venue: {
      name: "Aurora Hall",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
    },
    owner: {
      name: "Darlene Robertson",
      email: "darlene.robertson@example.com",
    },
    type: "Premium",
    date: "June 15, 2026",
    location: "345 Elm St Roswell New Mexico 88201",
    status: "active",
    about: "Lorem Ipsum is simply dummy text...",
  },
  {
    id: 7,
    venue: {
      name: "Nebula Nights",
      image:
        "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=800&q=80",
    },
    owner: {
      name: "Kathryn Murphy",
      email: "kathryn.murphy@example.com",
    },
    type: "Premium",
    date: "June 18, 2026",
    location: "222 Oak Rd Hobbs New Mexico 88240",
    status: "inactive",
    about: "Lorem Ipsum is simply dummy text...",
  },
  {
    id: 8,
    venue: {
      name: "Cosmic Lounge",
      image:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80",
    },
    owner: {
      name: "Guy Hawkins",
      email: "guy.hawkins@example.com",
    },
    type: "Professional",
    date: "June 20, 2026",
    location: "678 Maple St Clovis New Mexico 88101",
    status: "active",
    about: "Lorem Ipsum is simply dummy text...",
  },
  {
    id: 9,
    venue: {
      name: "Orbit Hall",
      image:
        "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80",
    },
    owner: {
      name: "Jenny Wilson",
      email: "jenny.wilson@example.com",
    },
    type: "Premium",
    date: "June 22, 2026",
    location: "901 Pine St Farmington New Mexico 87401",
    status: "active",
    about: "Lorem Ipsum is simply dummy text...",
  },
  {
    id: 10,
    venue: {
      name: "Meteor Club",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
    },
    owner: {
      name: "Leslie Alexander",
      email: "leslie.alexander@example.com",
    },
    type: "Premium",
    date: "June 25, 2026",
    location: "432 Cedar St Gallup New Mexico 87301",
    status: "active",
    about: "Lorem Ipsum is simply dummy text...",
  },
  {
    id: 11,
    venue: {
      name: "Comet Arena",
      image:
        "https://images.unsplash.com/photo-1515168833906-d2a3b82b302a?w=800&q=80",
    },
    owner: {
      name: "Ronald Richards",
      email: "ronald.richards@example.com",
    },
    type: "Premium",
    date: "June 28, 2026",
    location: "789 Birch St Santa Fe New Mexico 87501",
    status: "inactive",
    about: "Lorem Ipsum is simply dummy text...",
  },
  {
    id: 12,
    venue: {
      name: "Eclipse Lounge",
      image:
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
    },
    owner: {
      name: "Cameron Williamson",
      email: "cameron.williamson@example.com",
    },
    type: "Professional",
    date: "June 30, 2026",
    location: "1010 Spruce St Albuquerque New Mexico 87101",
    status: "active",
    about: "Lorem Ipsum is simply dummy text...",
  },
];
export interface Venue {
  id: number;

  venue: {
    name: string;
    image: string;
  };

  owner: {
    name: string;
    email: string;
  };

  type: "Premium" | "Professional";

  date: string;

  location: string;

  status: "active" | "inactive";

  about: string;
}

export const tableDesign = {
  table: "w-full border-collapse",
  tbody: "text-white",
  tr: "border-b border-[#1E2939] transition-colors",
  th: " px-6 py-4 text-sm font-semibold text-white border-b border-[#1E2939]",
  td: "px-6 py-4 text-sm text-white",
};

const tableHeaders = [
  { label: "Venue", align: "text-left" },
  { label: "Owner", align: "text-left hidden md:table-cell" },
  { label: "Type", align: "text-left hidden md:table-cell" },
  { label: "Date", align: "text-left hidden xl:table-cell" },
  { label: "Location", align: "text-left hidden 2xl:table-cell" },
  { label: "Status", align: "text-left" },
  { label: "Action", align: "text-center" },
];
const VenueList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [venuesData, setVenuesData] = useState<Venue | null>(null);

  return (
    <>
      <CardContainer className="">
        <CommonHeader size="lg" className="">
          Venue Requests
        </CommonHeader>
        <div className="overflow-x-auto">
          <div className="rounded-2xl border border-[#1E2939] overflow-hidden">
            <table className={tableDesign.table}>
              <thead>
                {tableHeaders.map((header, idx) => (
                  <th
                    key={idx}
                    className={`${header.align} ${tableDesign.th} `}
                  >
                    {header.label}
                  </th>
                ))}
              </thead>
              <tbody className={tableDesign.tbody}>
                {venues.map((venue) => (
                  <tr key={venue.id} className={tableDesign.tr}>
                    <td className={tableDesign.td}>
                      <div className="flex gap-2 items-center">
                        <img
                          src={venue.venue.image}
                          alt={venue.venue.name}
                          className="w-12.5 h-11.5 rounded-md object-cover hidden md:block"
                        />

                        <div>{venue.venue.name}</div>
                      </div>
                    </td>
                    <td className={tableDesign.td + " hidden md:table-cell"}>
                      <div className="flex flex-col gap-1">
                        <span>{venue.owner.name}</span>
                        <span className="text-darkGray">
                          {venue.owner.email}
                        </span>
                      </div>
                    </td>
                    <td className={tableDesign.td + " hidden md:table-cell"}>
                      <CommonButton
                        className={`flex gap-1 items-center rounded-full!  ${venue.type === "Professional" ? "bg-yellow/20! text-yellow!" : "bg-[#00034A]! text-purple!"}`}
                      >
                        <span>
                          <LuCrown />
                        </span>
                        <span>{venue.type}</span>
                      </CommonButton>
                    </td>
                    <td className={tableDesign.td + " hidden xl:table-cell"}>
                      {venue.date}
                    </td>
                    <td className={tableDesign.td + " hidden 2xl:table-cell"}>
                      {venue.location.split(", ").map((part, idx, arr) => (
                        <span key={idx}>
                          {part}
                          {idx === arr.length - 2 && <br />}{" "}
                          {idx < arr.length - 1 ? " " : ""}
                        </span>
                      ))}
                    </td>
                    <td className={tableDesign.td}>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          venue.status === "active"
                            ? "bg-[#10B981]/20 text-[#10B981]"
                            : "bg-[#260405] text-red"
                        }`}
                      >
                        {venue.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span
                        onClick={() => {
                          setVenuesData(venue as Venue);
                          setIsOpen(true);
                        }}
                        className=" flex justify-center cursor-pointer"
                      >
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
          <Pagination currentPage={1} totalPages={3} onPageChange={() => {}} />
        </div>
      </CardContainer>

      <div className="p-10">
        <VenueModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          venue={venuesData}
        />
      </div>
    </>
  );
};

export default VenueList;
