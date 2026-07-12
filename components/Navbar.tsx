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
    <>
      {/* Desktop Navbar */}
      <nav className={`hidden md:fixed md:-top-2.5 md:left-0 md:right-0 md:z-[60] md:bg-white md:border-b md:border-gray-200 md:overflow-visible md:transition-transform md:duration-200 md:ease-out`}
        style={{ transform: `translateY(${translateY}%)` }}
      >
        <div className="flex pl-8 pr-2 py-18 items-center justify-end gap-5 max-w-full mx-auto w-full relative">
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
      </nav>

      {/* Mobile Navbar - Static flow */}
      <nav className="md:hidden bg-white border-b border-gray-200 w-full flex items-center justify-between px-4 py-3">
        {/* Logo Mobile */}
        <button 
          onClick={handleLogoClick}
          className="h-10 w-auto cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0"
        >
          <Image
            src="https://res.cloudinary.com/dyromez82/image/upload/v1783281334/Artboard_25_300x_cgubub.png"
            alt="PSI Logo"
            width={80}
            height={40}
            className="h-10 w-auto object-contain"
          />
        </button>

        {/* Mobile Menu Icons - Right side */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <button className="text-red-600 hover:text-red-700 transition-colors">
            <Search size={24} />
          </button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-red-600 hover:text-red-700 transition-colors"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Backdrop Overlay - Paling Luar */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-[9998]"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer - Paling Luar & Paling Tinggi */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 h-screen w-[75vw] bg-red-600 z-[9999] flex flex-col">
          {/* Close Button - Top Right */}
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="self-end p-6 text-white hover:text-gray-200 transition-colors"
          >
            <X size={32} />
          </button>

          {/* Menu Items - Vertical */}
          <div className="flex flex-col gap-6 px-6 py-4">
            <button
              onClick={() => handleTabClick('beranda')}
              className={`text-left text-xl font-bold transition-colors ${
                activeTab === 'beranda'
                  ? 'text-white'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              Beranda
            </button>
            <button
              onClick={() => handleTabClick('struktur-pengurus')}
              className={`text-left text-xl font-bold transition-colors ${
                activeTab === 'struktur-pengurus'
                  ? 'text-white'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              Struktur Pengurus
            </button>
            <button
              onClick={() => handleTabClick('agenda-absensi')}
              className={`text-left text-xl font-bold transition-colors ${
                activeTab === 'agenda-absensi'
                  ? 'text-white'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              Agenda & Absensi
            </button>
          </div>
        </div>
      )}
    </>
  );
}
