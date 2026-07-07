'use client';

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white -mt-6.5">
      <div className="px-4 md:px-8 py-4 md:py-5 border-t border-gray-800">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left Side - Privacy Policy */}
          <div>
            <a
              href="https://psi.id/kebijakan-privasi-partai-solidaritas-indonesia/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-base text-whiMte hover:text-red-600 transition-colors"
            >
              Kebijakan Privasi
            </a>
          </div>

          {/* Right Side - Copyright */}
          <div className="text-sm md:text-base text-white">
            ©2022 Partai Solidaritas Indonesia
          </div>
        </div>
      </div>
    </footer>
  );
}
