'use client';

import Image from 'next/image';
import { Search } from 'lucide-react';

interface NavbarProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export default function Navbar({ activeTab = 'beranda', onTabChange }: NavbarProps) {
  const handleTabClick = (tab: string) => {
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  return (
    <nav className={`fixed -top-2.5 left-0 right-0 z-[60] bg-white border-b border-gray-200 overflow-visible`}>
      <div className="pl-8 pr-2 py-18 flex items-center justify-end gap-5 max-w-full mx-auto w-full relative">
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
            className={`font-semibold text-sm md:text-base whitespace-nowrap translate-y-6 ${
              activeTab === 'beranda'
                ? 'text-red-600 hover:text-red-700'
                : 'text-gray-900 hover:text-red-600'
            }`}
          >
            Beranda
          </button>
          <button
            onClick={() => handleTabClick('struktur-pengurus')}
            className={`font-semibold text-sm md:text-base whitespace-nowrap translate-y-6 ${
              activeTab === 'struktur-pengurus'
                ? 'text-red-600 hover:text-red-700'
                : 'text-gray-900 hover:text-red-600'
            }`}
          >
            Struktur Pengurus
          </button>
          <button
            onClick={() => handleTabClick('agenda-absensi')}
            className={`font-semibold text-sm md:text-base whitespace-nowrap translate-y-6 ${
              activeTab === 'agenda-absensi'
                ? 'text-red-600 hover:text-red-700'
                : 'text-gray-900 hover:text-red-600'
            }`}
          >
            Agenda & Absensi
          </button>
        </div>

        {/* Search Icon */}
        <button className="text-gray-900 hover:text-red-600 flex-shrink-0 translate-y-6">
          <Search size={22} />
        </button>
      </div>
    </nav>
  );
}
