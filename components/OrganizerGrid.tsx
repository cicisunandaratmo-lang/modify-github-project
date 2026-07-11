'use client';

import Image from 'next/image';
import HeroBanner from '@/components/HeroBanner';
import { DATA_PENGURUS } from '@/lib/pengurusData';

interface OrganizerGridProps {
  onMemberClick: (member: any) => void;
}

export default function OrganizerGrid({ onMemberClick }: OrganizerGridProps) {
  return (
    <div className="w-full">
      <HeroBanner title="Anggota DPRt Mustikasari" />
      <section id="struktur-pengurus" className="pt-0 pb-8 md:pb-10 px-4 md:px-8 bg-transparent w-full">
      <div className="w-full bg-transparent">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12 uppercase mt-8">Struktur Pengurus Ranting</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 w-full">
          {DATA_PENGURUS.map((member) => (
            <div
              key={member.id}
              onClick={() => onMemberClick(member)}
              className="cursor-pointer group"
            >
              {/* Image Container */}
              <div className="aspect-square relative overflow-hidden rounded-sm mb-3 bg-gray-200">
                <Image
                  src={member.fotoUrl}
                  alt={member.nama}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Info Container */}
              <div className="min-h-20">
                <h3 className="text-xs md:text-sm font-bold text-gray-950 mb-1 line-clamp-2">{member.nama}</h3>
                <p className="text-xs font-semibold tracking-wider text-red-600 uppercase mb-1 line-clamp-1">
                  {member.jabatan}
                </p>
                <p className="text-xs text-gray-500 font-normal line-clamp-2">{member.alamat}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>
    </div>
  );
}
