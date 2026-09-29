import CardContainer from "@/common/button/CardContainer";
import CommonHeader from "@/common/header/CommonHeader";
import VenueCard from "@/components/shared/VenueCard";

export const requests = [
  {
    id: 1,
    venue: "Neon Dreams",
    image: "https://picsum.photos/seed/venue1/400/300",
    owner: "Jessica Martinez",
    location: "Los Angeles, CA",
    email: "jessica@neondreams.com",
    time: "2 hours ago",
    status: "Pending Review",
  },
  {
    id: 2,
    venue: "Groove Factory",
    image: "https://picsum.photos/seed/venue2/400/300",
    owner: "Marcus Johnson",
    location: "New York, NY",
    email: "marcus@groovefactory.com",
    time: "3 hours ago",
    status: "Pending Review",
  },
  {
    id: 3,
    venue: "Skyline Lounge",
    image: "https://picsum.photos/seed/venue3/400/300",
    owner: "Priya Kapoor",
    location: "Chicago, IL",
    email: "priya@skylinelounge.com",
    time: "4 hours ago",
    status: "Pending Review",
  },
  {
    id: 4,
    venue: "The Velvet Room",
    image: "https://picsum.photos/seed/venue4/400/300",
    owner: "Daniel Park",
    location: "Miami, FL",
    email: "daniel@velvetroom.com",
    time: "5 hours ago",
    status: "Pending Review",
  },
  {
    id: 5,
    venue: "Bass Underground",
    image: "https://picsum.photos/seed/venue5/400/300",
    owner: "Sofia Reyes",
    location: "Austin, TX",
    email: "sofia@bassunderground.com",
    time: "6 hours ago",
    status: "Pending Review",
  },
  {
    id: 6,
    venue: "Pulse Nightclub",
    image: "https://picsum.photos/seed/venue6/400/300",
    owner: "Ethan Brooks",
    location: "Las Vegas, NV",
    email: "ethan@pulsenightclub.com",
    time: "7 hours ago",
    status: "Pending Review",
  },
  {
    id: 7,
    venue: "Electric Garden",
    image: "https://picsum.photos/seed/venue7/400/300",
    owner: "Aisha Okonkwo",
    location: "Atlanta, GA",
    email: "aisha@electricgarden.com",
    time: "8 hours ago",
    status: "Pending Review",
  },
  {
    id: 8,
    venue: "Midnight Terrace",
    image: "https://picsum.photos/seed/venue8/400/300",
    owner: "Luca Ferraro",
    location: "San Francisco, CA",
    email: "luca@midnightterrace.com",
    time: "10 hours ago",
    status: "Pending Review",
  },
  {
    id: 9,
    venue: "The Cipher Club",
    image: "https://picsum.photos/seed/venue9/400/300",
    owner: "Nadia Volkov",
    location: "Seattle, WA",
    email: "nadia@cipherclub.com",
    time: "12 hours ago",
    status: "Pending Review",
  },
  {
    id: 10,
    venue: "Zenith Rooftop",
    image: "https://picsum.photos/seed/venue10/400/300",
    owner: "Carlos Mendoza",
    location: "Houston, TX",
    email: "carlos@zenithrooftop.com",
    time: "14 hours ago",
    status: "Pending Review",
  },
  {
    id: 11,
    venue: "Foxhole Bar",
    image: "https://picsum.photos/seed/venue11/400/300",
    owner: "Hannah Lee",
    location: "Portland, OR",
    email: "hannah@foxholebar.com",
    time: "18 hours ago",
    status: "Pending Review",
  },
  {
    id: 12,
    venue: "Studio 404",
    image: "https://picsum.photos/seed/venue12/400/300",
    owner: "James Osei",
    location: "Denver, CO",
    email: "james@studio404.com",
    time: "1 day ago",
    status: "Pending Review",
  },
];

const VenueRequests = () => {
  return (
    <CardContainer className="h-[1025px]  overflow-y-auto">
      <div className="flex items-center justify-between mb-6">
        <CommonHeader size="lg" className="pb-0!">
          Venue Requests
        </CommonHeader>

        <a href="#" className="text-sm text-blue-400 hover:underline">
          View All
        </a>
      </div>

      <div className="space-y-3">
        {requests.map((request) => (
          <VenueCard key={request.id} {...request} />
        ))}
      </div>
    </CardContainer>
  );
};

export default VenueRequests;
