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
      {/* Backdrop Overlay */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 h-screen w-[75vw] bg-red-600 z-50 flex flex-col">
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
              Beranda {activeTab === 'beranda' && <span className="text-blue-400 ml-2">✓</span>}
            </button>
            <button
              onClick={() => handleTabClick('struktur-pengurus')}
              className={`text-left text-xl font-bold transition-colors ${
                activeTab === 'struktur-pengurus'
                  ? 'text-white'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              Tentang PSI {activeTab === 'struktur-pengurus' && <span className="text-blue-400 ml-2">✓</span>}
            </button>
            <button
              className="text-left text-xl font-bold text-white/80 hover:text-white transition-colors"
            >
              PSI Hadir
            </button>
            <button
              className="text-left text-xl font-bold text-white/80 hover:text-white transition-colors"
            >
              PSI Kerja
            </button>
            <button
              className="text-left text-xl font-bold text-white/80 hover:text-white transition-colors"
            >
              Kolom
            </button>
            <button
              onClick={() => handleTabClick('agenda-absensi')}
              className={`text-left text-xl font-bold transition-colors ${
                activeTab === 'agenda-absensi'
                  ? 'text-white'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              Dukung {activeTab === 'agenda-absensi' && <span className="text-blue-400 ml-2">✓</span>}
            </button>
          </div>
        </div>
      )}

      <nav className={`fixed -top-2.5 left-0 right-0 z-[60] bg-white border-b border-gray-200 overflow-visible transition-transform duration-200 ease-out`}
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

          {/* Mobile Menu Icons */}
          <div className="flex items-center gap-3">
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
        </div>
      </nav>
    </>
  );
}
