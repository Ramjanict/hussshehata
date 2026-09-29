import CardContainer from "@/common/button/CardContainer";
import CloseButton from "@/common/button/CloseButton";
import CommonButton from "@/common/button/CommonButton";
import CommonHeader from "@/common/header/CommonHeader";
import { Building2, NotebookText } from "lucide-react";
import React from "react";
import { IoMdCall } from "react-icons/io";
import type { Venue } from "./VenueList";

interface VenueModalProps {
  isOpen: boolean;
  onClose: () => void;
  venue: Venue | null;
}

const VenueModal: React.FC<VenueModalProps> = ({ isOpen, onClose, venue }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center  bg-[#100D18]/74">
      <CardContainer className="bg-[#101112]! border border-cardBg w-full max-w-lg text-white overflow-hidden">
        <div className="flex items-center justify-between mb-4">
          <CommonHeader size="2xl" className="pb-0! font-jakarta">
            Venue Details
          </CommonHeader>
          <CloseButton action={onClose} />
        </div>
        <div className=" space-y-4 ">
          <div className="">
            <img
              src={venue?.venue.image}
              alt={venue?.venue.name}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>

          <CardContainer size="xs" className=" flex flex-col gap-3">
            <CommonHeader size="lg" className="pb-0! flex items-center gap-2">
              <span className="">
                <Building2 size={18} className="text-[#F0A]" />
              </span>
              Venue Information :
            </CommonHeader>

            <div className="grid grid-cols-2 text-sm gap-2">
              <div>
                <CommonHeader className="pb-1! text-darkGray!" size="sm">
                  Venue Name:
                </CommonHeader>
                <CommonHeader size="md" className="pb-0! ">
                  {venue?.venue.name}
                </CommonHeader>
              </div>
              <div>
                <CommonHeader className="pb-1! text-darkGray!" size="sm">
                  Selected Plan:
                </CommonHeader>
                <CommonHeader size="md" className="pb-0! ">
                  {venue?.type}
                </CommonHeader>
              </div>
              <div>
                <CommonHeader className="pb-1! text-darkGray!" size="sm">
                  Owner Name:
                </CommonHeader>
                <CommonHeader size="md" className="pb-0! ">
                  {venue?.owner.name}
                </CommonHeader>
              </div>
              <div>
                <CommonHeader className="pb-1! text-darkGray!" size="sm">
                  Business License:
                </CommonHeader>
                <CommonHeader size="md" className="pb-0! ">
                  {venue?.owner.name}
                </CommonHeader>
              </div>
            </div>
          </CardContainer>

          {/* Contact Information */}
          <CardContainer size="xs" className=" flex flex-col gap-3">
            <CommonHeader size="lg" className="pb-0! flex items-center gap-2">
              <span className="">
                <IoMdCall size={18} className="text-[#CCFF00]" />
              </span>
              Contact Information :
            </CommonHeader>

            <div className="grid grid-cols-2 text-sm gap-2">
              <div>
                <CommonHeader className="pb-1! text-darkGray!" size="sm">
                  Email:
                </CommonHeader>
                <CommonHeader size="md" className="pb-0! ">
                  {venue?.owner.email}
                </CommonHeader>
              </div>
              <div>
                <CommonHeader className="pb-1! text-darkGray!" size="sm">
                  Phone:
                </CommonHeader>
                <CommonHeader size="md" className="pb-0! ">
                  {venue?.owner.name}
                </CommonHeader>
              </div>
              <div className="col-span-2">
                <CommonHeader className="pb-1! text-darkGray!" size="sm">
                  Address:
                </CommonHeader>
                <CommonHeader size="md" className="pb-0! ">
                  {venue?.location}
                </CommonHeader>
              </div>
            </div>
          </CardContainer>

          {/* About Section */}
          <CardContainer size="xs" className=" flex flex-col gap-3">
            <CommonHeader size="lg" className="pb-0! flex items-center gap-2">
              <span className="">
                <NotebookText size={18} className="text-[#CCFF00]" />
              </span>
              About:
            </CommonHeader>

            <p className="text-sm text-gray">{venue?.about}</p>
          </CardContainer>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3">
            <CommonButton className="bg-purple!">Approve</CommonButton>
            <CommonButton className="bg-red!">Reject</CommonButton>
          </div>
        </div>
      </CardContainer>
    </div>
  );
};

export default VenueModal;
