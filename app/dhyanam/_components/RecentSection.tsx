import { RecentCard } from "./RecentCard";
import { recent } from "@/constants/images";



export default function RecentSection() {
    const RECENT_VIDEOS = [
  {
    id: '1',
    title: "Migrating to Linear 101",
    description: "Find churches and programs happening now migrating to Linear 101",
    author: "Jonathan Wills",
    duration: "12 min",
    thumbnail: recent,
    avatar: "https://i.pravatar.cc/100?u=1",
    themeHex: "#b91c1c" // Deep Red
  },
  {
    id: '2',
    title: "Migrating to Linear 101",
    description: "Find churches and programs happening now migrating to Linear 101",
    author: "Jonathan Wills",
    duration: "12 min",
    thumbnail: recent,
    avatar: "https://i.pravatar.cc/100?u=2",
    themeHex: "#2563eb" // Deep Blue
  },
  {
    id: '3',
    title: "Migrating to Linear 101",
    description: "Find churches and programs happening now migrating to Linear 101",
    author: "Jonathan Wills",
    duration: "12 min",
    thumbnail: recent,
    avatar: "https://i.pravatar.cc/100?u=3",
    themeHex: "#d97706" // Deep Yellow/Amber
  },
  {
    id: '4',
    title: "Migrating to Linear 101",
    description: "Find churches and programs happening now migrating to Linear 101",
    author: "Jonathan Wills",
    duration: "12 min",
    thumbnail: recent,
    avatar: "https://i.pravatar.cc/100?u=4",
    themeHex: "#ea580c" // Deep Orange
  }
];
  return (
    <div className="px-12 bg-white ">
      <div className="mb-10 pl-2">
        <h2 className="text-3xl font-semibold text-[#1e293b] tracking-tight">Recent Videos</h2>
        <p className="text-slate-500 text-sm mt-3 font-medium">Find churches and programs happening now</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {RECENT_VIDEOS.map((video) => (
          <RecentCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}