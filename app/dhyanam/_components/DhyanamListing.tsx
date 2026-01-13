import React from 'react'
import { VideoCard } from './VideoCard'

import { LiveCard } from './LiveCard';
import RecentSection from './RecentSection';
import VideoSection from './VideoSection';
import { live, recent, video } from '@/constants/images';
import { StaticImageData } from 'next/image';
export interface VideoData {
  id: string;
  title: string;
  subTitle: string; // Used for "Church Name" or "Description"
  author: string;
  timeOrDate: string; // e.g., "10 AM - 11 AM" or "19 Jan 2026"
  thumbnail: string | StaticImageData;
  description ?: string;
  avatar: string;
  colorTheme?: string; // For the "Recent" section cards
}

// Data matching the specific image content
export const LIVE_DATA: VideoData[] = Array(3).fill({
  id: 'l1',
  title: "Video Title",
  subTitle: "Church Name",
  author: "Jonathan Wills",
  timeOrDate: "10 AM - 11 AM",
  thumbnail: video,
  avatar: "https://i.pravatar.cc/100?u=jon",
});

export const RECENT_DATA: VideoData[] = [
  { id: 'r1', title: 'Migrating to Linear 101', subTitle: 'Find churches and programs...', author: 'Jonathan Wills', timeOrDate: '12 min', colorTheme: 'bg-red-500/90', thumbnail: recent, avatar: 'https://i.pravatar.cc/100?u=1' },
  { id: 'r2', title: 'Migrating to Linear 101', subTitle: 'Find churches and programs...', author: 'Jonathan Wills', timeOrDate: '12 min', colorTheme: 'bg-blue-500/90', thumbnail: recent, avatar: 'https://i.pravatar.cc/100?u=2' },
  { id: 'r3', title: 'Migrating to Linear 101', subTitle: 'Find churches and programs...', author: 'Jonathan Wills', timeOrDate: '12 min', colorTheme: 'bg-yellow-500/90', thumbnail: recent, avatar: 'https://i.pravatar.cc/100?u=3' },
  { id: 'r4', title: 'Migrating to Linear 101', subTitle: 'Find churches and programs...', author: 'Jonathan Wills', timeOrDate: '12 min', colorTheme: 'bg-orange-500/90', thumbnail: recent, avatar: 'https://i.pravatar.cc/100?u=4' },
];

export const ARCHIVE_DATA: VideoData[] = Array(6).fill({
  id: 'a1',
  title: "Migrating to Linear 101",
  subTitle: "Find churches and programs happening now migrating to Linear 101",
  author: "Jonathan Wills",
  description : "Find churches and programs happening now migrating to Linear 101",
  timeOrDate: "19 Jan 2026",
  thumbnail: "https://images.unsplash.com/photo-1510590337019-5ef8d3d32116",
  avatar: "https://i.pravatar.cc/100?u=a",
});

export const DhyanamListing = () => {
  return (
 <main className=" relative z-20 space-y-10 mt-4 ">
        {/* 2. LIVE SECTIONS (Light Blue Container) */}
        <section className="bg-[#EBF7FF] pt-8  p-16 shadow-sm">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-5 h-5 mt-0.5 bg-red-300 rounded-full p-1 " ><div className="w-3 h-3 bg-red-600 rounded-full animate-pulse" /></div>
            <h2 className="text-2xl font-bold text-slate-900">Live Sections</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {LIVE_DATA.map((v,i) => <LiveCard key={i} video={v} />)}
          </div>
        </section>

        {/* 3. RECENT VIDEOS (Color Theme Section) */}
       <RecentSection/>

        {/* 4. MAIN VIDEOS (Archive Style) */}
        <VideoSection/>
      </main>
  )
}
