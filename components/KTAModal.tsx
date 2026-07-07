'use client';

import { X } from 'lucide-react';

interface KTAModalProps {
  member: any;
  onClose: () => void;
}

export default function KTAModal({ member, onClose }: KTAModalProps) {
  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-xs flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-sm shadow-2xl rounded-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Pure KTA Image from Cloudinary */}
        <img
          src={member.ktaImage}
          alt="KTA"
          className="w-full h-auto rounded-xl"
          crossOrigin="anonymous"
        />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 -right-12 bg-white text-gray-900 rounded-full p-2 hover:bg-gray-100 transition-colors shadow-lg"
          aria-label="Close"
        >
          <X size={24} />
        </button>
      </div>
    </div>
  );
}
