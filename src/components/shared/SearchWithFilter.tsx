import CommonButton from "@/common/button/CommonButton";
import CommonSelect from "@/common/custom/CommonSelect";
import { Search } from "lucide-react";
import { useState } from "react";
import { PiSlidersHorizontalThin } from "react-icons/pi";

type TypeFilter = "all" | "professional" | "amateur";
type StatusFilter = "all" | "active" | "inactive";

const SearchWithFilter = ({
  value = "",
  onChange,
  onFilterApply,

  placeholder = "Search users...",
}: any) => {
  const [showFilter, setShowFilter] = useState(false);

  const [filters, setFilters] = useState<{
    type: TypeFilter;
    status: StatusFilter;
  }>({
    type: "all",
    status: "all",
  });

  const handleApply = () => {
    onFilterApply?.(filters);
    setShowFilter(false);
  };

  return (
    <div className="relative flex flex-col sm:flex-row w-full  items-center gap-2.5">
      <div className="relative flex-1 w-full">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#99A1AF]" />
        <input
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder={placeholder}
          className="pl-8 bg-cardBg border border-[#2E3133] text-[#99A1AF] py-4 pr-4 rounded-lg w-full outline-none flex-1 "
        />
      </div>
      <div className="relative w-full sm:w-26">
        <button
          onClick={() => setShowFilter((prev) => !prev)}
          className="bg-cardBg border border-[#2E3133] cursor-pointer p-4 w-full rounded-lg flex items-center justify-center gap-2"
        >
          <PiSlidersHorizontalThin className="h-6 w-6 text-[#F5F7FF]/50" />
          <span className="text-white/50">Filter</span>
        </button>

        {showFilter && (
          <div className="absolute top-14 right-0 w-72 bg-[#020817] border border-[#1E2937] rounded-xl p-4 space-y-4 z-50">
            <h3 className="text-white text-sm font-semibold">Filters</h3>

            <div className="space-y-1">
              <label className="text-xs text-[#94A3B8] mb-1">Type</label>
              <CommonSelect<TypeFilter>
                value={filters.type}
                onValueChange={(val) =>
                  setFilters((prev) => ({ ...prev, type: val }))
                }
                item={[
                  { label: "All", value: "all" },
                  { label: "Professional", value: "professional" },
                  { label: "Amateur", value: "amateur" },
                ]}
                className="w-full"
              />
            </div>

            {/* Status */}
            <div className="space-y-1">
              <label className="text-xs text-[#94A3B8] mb-1">Status</label>
              <CommonSelect<StatusFilter>
                value={filters.status}
                onValueChange={(val) =>
                  setFilters((prev) => ({ ...prev, status: val }))
                }
                item={[
                  { label: "All", value: "all" },
                  { label: "Active", value: "active" },
                  { label: "Inactive", value: "inactive" },
                ]}
                className="w-full"
              />
            </div>

            {/* Actions */}
            <div className="flex gap-2 pt-2">
              <CommonButton
                onClick={() => setFilters({ type: "all", status: "all" })}
                className="bg-red"
              >
                Reset
              </CommonButton>
              <CommonButton className="bg-purple" onClick={handleApply}>
                Apply
              </CommonButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchWithFilter;
