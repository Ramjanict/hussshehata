import CommonHeader from "../header/CommonHeader";

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
}
const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
  className,
}) => {
  return (
    <div className={` ${className} `}>
      <CommonHeader size="2xl" className="pb-0!">
        {title}
      </CommonHeader>
      {description && (
        <CommonHeader size="sm" className=" text-darkGray!">
          {description}
        </CommonHeader>
      )}
    </div>
  );
};

export default SectionHeader;
