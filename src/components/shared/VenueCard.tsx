import CardContainer from "@/common/button/CardContainer";
import CommonButton from "@/common/button/CommonButton";
import { BiUserCircle } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { WiTime4 } from "react-icons/wi";

interface VenueCardProps {
  id: number;
  venue: string;
  image: string;
  owner: string;
  location: string;
  email: string;
  time: string;
  status: string;
  onApprove?: () => void;
  onReject?: () => void;
  onView?: () => void;
}

const VenueCard: React.FC<VenueCardProps> = ({
  id,
  venue,
  image,
  owner,
  location,
  email,
  time,
  status,
  onApprove,
  onReject,
  onView,
}) => {
  return (
    <div>
      <CardContainer
        key={id}
        size="xs"
        className="bg-[#2E3133]! border border-[#1A1C1D] overflow-hidden flex flex-col md:flex-row gap-4 sm:gap-2 "
      >
        <div className="w-full md:w-42 self-stretch  relative shrink-0 ">
          <img
            src={image}
            alt={venue}
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        <div className="flex-1  flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <span className="bg-[#7a5c1e] text-[#f0a030] text-xs font-semibold px-3 py-1 rounded-full">
              {status}
            </span>
            <div className="flex items-center gap-1 text-[#A6ACB2] text-sm">
              <WiTime4 />
              <span>{time}</span>
            </div>
          </div>

          <p className="text-white font-bold text-lg leading-tight mb-2">
            {venue}
          </p>

          <div className="space-y-1 mb-3">
            <div className="flex items-center gap-2 text-[#A6ACB2] text-sm">
              <BiUserCircle />
              <span>{owner}</span>
            </div>
            <div className="flex items-center gap-2 text-[#A6ACB2] text-sm">
              <GrLocation />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-2 text-[#A6ACB2] text-sm">
              <HiOutlineMail />
              <span>{email}</span>
            </div>
          </div>

          <div className="flex gap-2">
            <CommonButton onClick={onView} size="sm">
              View
            </CommonButton>
            <CommonButton onClick={onApprove} size="sm" className="bg-purple!">
              Approve
            </CommonButton>
            <CommonButton onClick={onReject} size="sm" className="bg-red!">
              Reject
            </CommonButton>
          </div>
        </div>
      </CardContainer>
    </div>
  );
};

export default VenueCard;
