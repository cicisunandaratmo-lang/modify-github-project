'use client';

import Image from 'next/image';
import { Search } from 'lucide-react';
import { useScrollHide } from '@/hooks/useScrollHide';

interface NavbarProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export default function Navbar({ activeTab = 'beranda', onTabChange }: NavbarProps) {
  const translateY = useScrollHide();

  const handleTabClick = (tab: string) => {
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[60] bg-white border-b border-gray-200 overflow-visible`}
      style={{
        transform: `translateY(${translateY}%)`,
        pointerEvents: translateY < -95 ? 'none' : 'auto'
      }}
    >
      <div className="pl-8 pr-2 py-17 flex items-center justify-end gap-5 max-w-full mx-auto w-full relative">
        {/* Logo Section */}
        <div className="fixed left-0 top-17 z-[61]">
          <Image
            src="https://res.cloudinary.com/dyromez82/image/upload/v1783281334/Artboard_25_300x_cgubub.png"
            alt="PSI Logo"
            width={350}
            height={350}
            className="object-contain"
          />
        </div>

        {/* Menu Items */}
        <div className="flex items-end gap-3 md:gap-6 flex-wrap">
          <button
            onClick={() => handleTabClick('beranda')}
            className={`font-semibold text-xs md:text-sm whitespace-nowrap translate-y-4 ${
              activeTab === 'beranda'
                ? 'text-red-600 hover:text-red-700'
                : 'text-gray-900 hover:text-red-600'
            }`}
          >
            Beranda
          </button>
          <button
            onClick={() => handleTabClick('struktur-pengurus')}
            className={`font-semibold text-xs md:text-sm whitespace-nowrap translate-y-4 ${
              activeTab === 'struktur-pengurus'
                ? 'text-red-600 hover:text-red-700'
                : 'text-gray-900 hover:text-red-600'
            }`}
          >
            Struktur Pengurus
          </button>
          <button
            onClick={() => handleTabClick('agenda-absensi')}
            className={`font-semibold text-xs md:text-sm whitespace-nowrap translate-y-4 ${
              activeTab === 'agenda-absensi'
                ? 'text-red-600 hover:text-red-700'
                : 'text-gray-900 hover:text-red-600'
            }`}
          >
            Agenda & Absensi
          </button>
        </div>

        {/* Search Icon */}
        <button className="text-gray-900 hover:text-red-600 flex-shrink-0 translate-y-4">
          <Search size={22} />
        </button>
      </div>
    </nav>
  );
}
