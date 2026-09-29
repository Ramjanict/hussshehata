import playlist from "@/assets/images/playlist.svg";
import CardContainer from "@/common/button/CardContainer";
import CommonHeader from "@/common/header/CommonHeader";
import { TbJewishStar } from "react-icons/tb";
const djs = [
  {
    id: 1,
    name: "DJ. Arman",
    rating: 5.0,
    events: 34,
    image: "https://picsum.photos/seed/dj1/400/400",
  },
  {
    id: 2,
    name: "DJ. Parvez",
    rating: 5.0,
    events: 34,
    image: "https://picsum.photos/seed/dj2/400/400",
  },
  {
    id: 3,
    name: "DJ. Siam",
    rating: 5.0,
    events: 34,
    image: "https://picsum.photos/seed/dj3/400/400",
  },
  {
    id: 4,
    name: "DJ. Pranto",
    rating: 5.0,
    events: 34,
    image: "https://picsum.photos/seed/dj4/400/400",
  },
  {
    id: 5,
    name: "DJ. Ana",
    rating: 4.9,
    events: 34,
    image: "https://picsum.photos/seed/dj5/400/400",
  },
  {
    id: 6,
    name: "DJ. Kaya",
    rating: 4.9,
    events: 34,
    image: "https://picsum.photos/seed/dj6/400/400",
  },
  {
    id: 7,
    name: "DJ. Nibir",
    rating: 4.9,
    events: 34,
    image: "https://picsum.photos/seed/dj7/400/400",
  },
  {
    id: 8,
    name: "DJ. Himu",
    rating: 4.8,
    events: 34,
    image: "https://picsum.photos/seed/dj8/400/400",
  },
];

const TopDJs = () => {
  return (
    <CardContainer className="">
      <CommonHeader size="lg">Top DJ's On the floor</CommonHeader>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
        {djs.map((dj) => (
          <div
            key={dj.id}
            className="bg-[#101112] rounded-xl overflow-hidden hover:bg-[#2a2a2a] transition-colors cursor-pointer group p-2"
          >
            {/* Image */}
            <div className="relative w-full  2xl:w-[139px] h-[142px] overflow-hidden rounded-md">
              <img
                src={dj.image}
                alt={dj.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    `https://ui-avatars.com/api/?name=${encodeURIComponent(dj.name)}&background=2a2a2a&color=f59e0b&size=400&bold=true`;
                }}
              />
            </div>

            <div className="p-3">
              <p className="font-semibold text-sm text-white mb-2">{dj.name}</p>

              <div className="flex items-center gap-1.5 mb-1.5">
                <span className="w-4 h-4 text-[#FFAA00] border-[#FFAA00] border p-[1.5px] rounded-full flex items-center justify-center ">
                  <TbJewishStar />
                </span>
                <span className="text-sm font-semibold text-amber-400">
                  {dj.rating.toFixed(2)}
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-gray">
                <img src={playlist} alt="Playlist" className="w-4 h-4" />

                <span className="text-xs">Total Event:</span>
                <span className="text-xs text-white ml-auto">{dj.events}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </CardContainer>
  );
};

export default TopDJs;
