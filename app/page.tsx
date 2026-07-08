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
    <div className="h-screen overflow-hidden bg-white relative">
      {/* Header - Floating (Does not take space) */}
      <div className="absolute top-0 left-0 right-0 z-40 pointer-events-none">
        <div className="pointer-events-auto">
          <UtilityBar />
          <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
      </div>

      {/* Content Area - Full viewport scrollable by tab */}
      <main className="h-full overflow-y-auto pt-10 md:pt-0">
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
