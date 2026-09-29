import CardContainer from "@/common/button/CardContainer";
import { HiOutlineMail } from "react-icons/hi";
import { HiMiniCalendarDays } from "react-icons/hi2";
import { LuCircleDollarSign } from "react-icons/lu";
import { WiTime4 } from "react-icons/wi";

interface SubscriptionCardProps {
  id: number;
  name: string;
  image: string;
  price: string;
  email: string;
  time: string;
  date: string;
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
  id,
  name,
  image,
  price,
  email,
  time,
  date,
}) => {
  return (
    <div>
      <CardContainer
        key={id}
        size="xs"
        className="bg-[#2E3133]! border border-[#1A1C1D] overflow-hidden flex flex-col sm:flex-row gap-4 sm:gap-2 "
      >
        <div className="w-15 h-15 self-stretch  relative shrink-0  ">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-full "
          />
        </div>

        <div className="flex-1 items-start  flex  justify-between">
          <div>
            <p className="text-white font-bold text-lg leading-tight mb-2">
              {name}
            </p>

            <div className="space-y-1 mb-3">
              <div className="flex items-center gap-2 text-[#A6ACB2] text-sm">
                <LuCircleDollarSign />
                <span>{price}</span>
              </div>
              <div className="flex items-center gap-2 text-[#A6ACB2] text-sm">
                <HiMiniCalendarDays />
                <span>{date}</span>
              </div>
              <div className="flex items-center gap-2 text-[#A6ACB2] text-sm">
                <HiOutlineMail />
                <span>{email}</span>
              </div>
            </div>
          </div>
          <div className="flex  items-center gap-1 text-[#A6ACB2] text-sm flex-wrap">
            <WiTime4 />
            <span>{time}</span>
          </div>
        </div>
      </CardContainer>
    </div>
  );
};

export default SubscriptionCard;
