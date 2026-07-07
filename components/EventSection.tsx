'use client';

import HeroBanner from '@/components/HeroBanner';
import { Calendar } from 'lucide-react';
import { EVENTS, SHOW_AGENDA_SECTION } from '@/lib/pengurusData';

export default function EventSection() {
  return (
    <div className="w-full">
      <HeroBanner title="Agenda/Absensi" />
      <section id="agenda-absensi" className="pt-0 pb-8 md:pb-10 px-4 md:px-8 bg-transparent w-full">
      <div className="w-full bg-transparent">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12 uppercase">Agenda Kegiatan & Absensi Ranting</h2>

        {!SHOW_AGENDA_SECTION || EVENTS.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 md:py-16">
            <div className="bg-gray-100 border border-dashed border-gray-300 rounded-lg p-8 md:p-12 max-w-md w-full text-center">
              <Calendar className="w-12 h-12 md:w-14 md:h-14 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Seluruh agenda ranting telah terlaksana, Pantau terus halaman ini untuk pembaruan jadwal kegiatan berikutnya.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
            {EVENTS.map((event) => (
              <div
                key={event.id}
                className="bg-white border border-gray-200 rounded-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                {/* Card Header */}
                <div className="p-4 md:p-6 border-b border-gray-200">
                  <div className="inline-block bg-red-600 text-white text-xs font-semibold px-2 md:px-3 py-1 rounded-sm mb-2 md:mb-3">
                    AGENDA RANTING
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-gray-900">{event.title}</h3>
                </div>

                {/* Card Details */}
                <div className="p-4 md:p-6 space-y-2 md:space-y-3">
                  <div className="text-xs md:text-sm text-gray-700">
                    <div className="mb-2">
                      <span className="font-semibold text-gray-900">Tanggal:</span> {event.date}, {event.fullDate}
                    </div>
                    <div className="mb-2">
                      <span className="font-semibold text-gray-900">Waktu:</span> {event.time}
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Lokasi:</span> {event.location}
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-4 md:p-6 border-t border-gray-200">
                  <a
                    href={event.formLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-red-600 text-white font-semibold py-2 md:py-3 px-4 rounded-sm text-center text-sm md:text-base hover:bg-red-700 transition-colors block"
                  >
                    Hadiri & Isi Absensi Kegiatan
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      </section>
    </div>
  );
}
