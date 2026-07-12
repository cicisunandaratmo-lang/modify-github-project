'use client';

import { useState } from 'react';
import UtilityBar from '@/components/UtilityBar';
import Navbar from '@/components/Navbar';
import HeroBanner from '@/components/HeroBanner';
import OrganizerGrid from '@/components/OrganizerGrid';
import EventSection from '@/components/EventSection';
import Footer from '@/components/Footer';
import KTAModal from '@/components/KTAModal';
import WhatsAppWidget from '@/components/WhatsAppWidget';

type TabType = 'beranda' | 'struktur-pengurus' | 'agenda-absensi';

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>('beranda');
  const [selectedMember, setSelectedMember] = useState<any>(null);

  return (
    <div className="min-h-screen bg-white flex flex-col overflow-x-hidden md:h-screen md:overflow-hidden">
      {/* Header - Desktop floating, Mobile normal flow */}
      <div className="hidden md:absolute md:top-0 md:left-0 md:right-0 md:z-40 md:pointer-events-none">
        <div className="md:pointer-events-auto">
          <UtilityBar />
          <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
      </div>

      {/* Mobile Header - Stacked vertically */}
      <div className="md:hidden flex flex-col">
        <UtilityBar />
        <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      </div>

      {/* Content Area - Full viewport scrollable by tab */}
      <main className="flex-1 overflow-y-auto md:h-full md:pt-40">
        {/* Beranda Tab */}
        {activeTab === 'beranda' && (
          <HeroBanner title="Tentang PSI" showDescription={true} />
        )}

        {/* Struktur Pengurus Tab */}
        {activeTab === 'struktur-pengurus' && (
          <OrganizerGrid onMemberClick={setSelectedMember} />
        )}

        {/* Agenda Absensi Tab */}
        {activeTab === 'agenda-absensi' && (
          <EventSection />
        )}

        {/* Footer */}
        <Footer />
      </main>

      {/* KTA Modal */}
      {selectedMember && (
        <KTAModal member={selectedMember} onClose={() => setSelectedMember(null)} />
      )}

      {/* WhatsApp Widget */}
      <WhatsAppWidget />
    </div>
  );
}
