'use client';

import Image from 'next/image';
import { Search, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useScrollHide } from '@/hooks/useScrollHide';

interface NavbarProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export default function Navbar({ activeTab = 'beranda', onTabChange }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const translateY = useScrollHide();

  const handleTabClick = (tab: string) => {
    if (onTabChange) {
      onTabChange(tab);
    }
    setMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    handleTabClick('beranda');
  };

  return (
    <nav 
      className={`fixed -top-2.5 left-0 right-0 z-[60] bg-white border-b border-gray-200 overflow-visible transition-transform duration-200 ease-out`}
      style={{ transform: `translateY(${translateY}%)` }}
    >
      {/* Desktop Navbar */}
      <div className="hidden md:flex pl-8 pr-2 py-18 items-center justify-end gap-5 max-w-full mx-auto w-full relative">
        {/* Logo Section */}
        <button 
          onClick={handleLogoClick}
          className="fixed left-0 top-17 z-[61] cursor-pointer hover:opacity-80 transition-opacity"
        >
          <Image
            src="https://res.cloudinary.com/dyromez82/image/upload/v1783281334/Artboard_25_300x_cgubub.png"
            alt="PSI Logo"
            width={350}
            height={350}
            className="object-contain"
          />
        </button>

        {/* Menu Items */}
        <div className="flex items-end gap-3 md:gap-6 flex-wrap">
          <button
            onClick={() => handleTabClick('beranda')}
            className={`font-semibold text-sm md:text-base whitespace-nowrap translate-y-6 transition-colors ${
              activeTab === 'beranda'
                ? 'text-black hover:text-gray-800'
                : 'text-red-600 hover:text-red-700'
            }`}
          >
            Beranda
          </button>
          <button
            onClick={() => handleTabClick('struktur-pengurus')}
            className={`font-semibold text-sm md:text-base whitespace-nowrap translate-y-6 transition-colors ${
              activeTab === 'struktur-pengurus'
                ? 'text-black hover:text-gray-800'
                : 'text-red-600 hover:text-red-700'
            }`}
          >
            Struktur Pengurus
          </button>
          <button
            onClick={() => handleTabClick('agenda-absensi')}
            className={`font-semibold text-sm md:text-base whitespace-nowrap translate-y-6 transition-colors ${
              activeTab === 'agenda-absensi'
                ? 'text-black hover:text-gray-800'
                : 'text-red-600 hover:text-red-700'
            }`}
          >
            Agenda & Absensi
          </button>
        </div>

        {/* Search Icon */}
        <button className="text-red-600 hover:text-red-700 flex-shrink-0 translate-y-6 transition-colors">
          <Search size={22} />
        </button>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex items-center justify-between px-4 py-4">
        {/* Logo Mobile */}
        <button 
          onClick={handleLogoClick}
          className="w-16 h-16 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <Image
            src="https://res.cloudinary.com/dyromez82/image/upload/v1783281334/Artboard_25_300x_cgubub.png"
            alt="PSI Logo"
            width={80}
            height={80}
            className="object-contain w-full h-full"
          />
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-red-600 hover:text-red-700 transition-colors"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 flex flex-col gap-4">
          <button
            onClick={() => handleTabClick('beranda')}
            className={`text-left font-semibold py-2 transition-colors ${
              activeTab === 'beranda'
                ? 'text-black border-l-4 border-black pl-2'
                : 'text-red-600 border-l-4 border-transparent pl-2'
            }`}
          >
            Beranda
          </button>
          <button
            onClick={() => handleTabClick('struktur-pengurus')}
            className={`text-left font-semibold py-2 transition-colors ${
              activeTab === 'struktur-pengurus'
                ? 'text-black border-l-4 border-black pl-2'
                : 'text-red-600 border-l-4 border-transparent pl-2'
            }`}
          >
            Struktur Pengurus
          </button>
          <button
            onClick={() => handleTabClick('agenda-absensi')}
            className={`text-left font-semibold py-2 transition-colors ${
              activeTab === 'agenda-absensi'
                ? 'text-black border-l-4 border-black pl-2'
                : 'text-red-600 border-l-4 border-transparent pl-2'
            }`}
          >
            Agenda & Absensi
          </button>
        </div>
      )}
    </nav>
  );
}
