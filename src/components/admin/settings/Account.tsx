import image from "@/assets/images/image.png";
import CardContainer from "@/common/button/CardContainer";
import CommonButton from "@/common/button/CommonButton";
import CommonHeader from "@/common/header/CommonHeader";
import { Eye, EyeOff } from "lucide-react";
import { useRef, useState } from "react";
import { MdDelete, MdOutlineCameraAlt } from "react-icons/md";
import { inputClass } from "./Platform";

const Account = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [profileImage, setProfileImage] = useState<string>(image);

  // Ref to trigger file input click
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setProfileImage(image);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-4">
      <CardContainer>
        <CommonHeader size="xl" className="font-jakarta">
          Admin Profile
        </CommonHeader>

        <div className="flex items-center gap-6 mb-6">
          <div className="relative">
            <img
              src={profileImage}
              alt="Profile"
              className="w-20 h-20 object-cover rounded-full"
            />
            <span
              onClick={triggerFileSelect}
              className="w-8 h-8 bg-[#6367FF] border-2 border-[#1A1A1A] text-white absolute bottom-0 right-0 p-1 rounded-full cursor-pointer text-xl flex items-center justify-center"
            >
              <MdOutlineCameraAlt />
            </span>
            {profileImage !== image && (
              <button
                onClick={handleRemoveImage}
                className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs cursor-pointer"
              >
                <MdDelete />
              </button>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </div>
          <div>
            <CommonButton
              className="bg-[#0A0A0A]! border border-[#364153]!"
              onClick={triggerFileSelect}
            >
              Upload New Photo
            </CommonButton>
            <p className="text-xs text-[#6A7282] mt-2">
              JPG, PNG or GIF. Max size 5MB.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={inputClass.label}>First Name</label>
              <input defaultValue="Super" className={inputClass.input} />
            </div>
            <div>
              <label className={inputClass.label}>Last Name</label>
              <input defaultValue="Admin" className={inputClass.input} />
            </div>
          </div>
          <div>
            <label className={inputClass.label}>Email Address</label>
            <input
              defaultValue="admin@vibecheck.com"
              className={inputClass.input}
            />
          </div>
        </div>
      </CardContainer>

      <CardContainer>
        <CommonHeader size="xl" className="font-jakarta">
          Change Password
        </CommonHeader>
        <div className="space-y-4">
          <div>
            <label className={inputClass.label}>Current Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter current password"
                className={` ${inputClass.input} pr-10`}
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
          <div>
            <label className={inputClass.label}>New Password</label>
            <input
              type="password"
              placeholder="Enter new password"
              className={inputClass.input}
            />
          </div>
          <div>
            <label className={inputClass.label}>Confirm New Password</label>
            <input
              type="password"
              placeholder="Confirm new password"
              className={inputClass.input}
            />
          </div>
        </div>
        <div className="flex gap-4 mt-6">
          <CommonButton className="bg-red!">Reset</CommonButton>
          <CommonButton className="bg-purple!">Update Password</CommonButton>
        </div>
      </CardContainer>
    </div>
  );
};

export default Account;
