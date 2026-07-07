'use client';

interface HeroBannerProps {
  title: string;
  showDescription?: boolean;
}

export default function HeroBanner({ title, showDescription = false }: HeroBannerProps) {
  return (
    <>
      {/* Red Banner with Title */}
      <div className="bg-red-600 text-white min-h-[297px] pb-0 px-0 md:px-2 w-full flex flex-col justify-end items-start relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold uppercase leading-tight">
          {title}
        </h1>
      </div>

      {/* Description Section - Only show for beranda */}
      {showDescription && (
        <div className="bg-white px-4 md:px-8 py-12 md:py-10">
          <div className="max-w-full">
            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
              Partai Solidaritas Indonesia adalah kekuatan politik baru yang ingin mengembalikan politik ke tempat yang terhormat. 
              PSI lahir dari kesadaran bahwa politik adalah sebuah tugas mulia untuk mewujudkan kebahagiaan bagi semua orang.
            </p>

            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-8 md:mb-10">
              Atas dasar itulah kami bertekad mengakhiri sengkarut politik hari ini dengan mengembalikan politik kepada nilainya yang luhur. 
              Kami ingin mendedikasikan kembali politik dengan nilai-nilai kebajikan agar lahir NEGARAWAN yang seluruh pikiran dan tindakannya 
              didaksarkan atas kepentingan yang lebih besar untuk bangsa dan negara Indonesia, bukan sekadang kepentingan pribadi politik jangka pendek.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-10 md:mt-12 mb-4">Visi, Misi, &amp; DNA PSI</h2>
            
            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4 md:mb-6">
              <span className="font-semibold">Visi PSI</span> adalah Indonesia yang berkarakter kerakyatan, berkemanusiaan, berkeragaman, berkeadilan, berdemokrasi dan bermartabat.
            </p>

            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4 md:mb-6">
              <span className="font-semibold">Misi PSI</span> adalah membangun kekuatan rakyat yang mandiri, cerdas, dan bersejahtera melalui gerakan politiknya untuk terciptanya negara Indonesia yang memberdayakan rakyat.
            </p>

            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              <span className="font-semibold">DNA PSI</span> adalah karakter kerakyatan, kemenusiaan, keberagaman, keadilan, intelektualitas, dan kepemimpinan yang berintegritas.
            </p>

            {/* CTA Button - Direct to PSI Pusat */}
            <div className="mt-10 md:mt-12">
              <a 
                href="https://psi.id/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-6 rounded-lg transition-colors text-center"
              >
                Partai Solidaritas Indonesia
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
