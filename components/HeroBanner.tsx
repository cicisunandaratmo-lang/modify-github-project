'use client';

interface HeroBannerProps {
  title: string;
  showDescription?: boolean;
}

export default function HeroBanner({ title, showDescription = false }: HeroBannerProps) {
  return (
    <>
      {/* Red Banner with Title */}
      <div className="bg-red-600 text-white min-h-[296px] pb-1 px-0 md:px-2 w-full flex flex-col justify-end items-start relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold uppercase leading-tight">
          {title}
        </h1>
      </div>

      {/* Description Section - Only show for beranda */}
      {showDescription && (
        <div className="bg-white px-4 md:px-8 py-12 md:py-10">
          <div className="max-w-full">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
              Partai Solidaritas Indonesia adalah kekuatan politik baru yang ingin mengembalikan politik ke tempat yang terhormat. 
              PSI lahir dari kesadaran bahwa politik adalah sebuah tugas mulia untuk mewujudkan kebahagiaan bagi semua orang.
            </p>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8 md:mb-10">
              Atas dasar itulah kami bertekad mengakhiri sengkarut politik hari ini dengan mengembalikan politik kepada nilainya yang luhur. 
              Kami ingin mendedikasikan kembali politik dengan nilai-nilai kebajikan agar lahir NEGARAWAN yang seluruh pikiran dan tindakannya 
              didaksarkan atas kepentingan yang lebih besar untuk bangsa dan negara Indonesia, bukan sekadang kepentingan pribadi politik jangka pendek.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-10 md:mt-12 mb-4">Visi, Misi, &amp; DNA PSI</h2>
            
            <div className="mb-4 md:mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">Visi PSI</h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Indonesia yang berkarakter kerakyatan, berkemanusiaan, berkeragaman, berkeadilan, berkemajuan dan bermartabat.
              </p>
            </div>

            <div className="mb-4 md:mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">Misi PSI</h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                1. Menggalang kekuatan nasional melalui sebuah kepemimpinan politik yang ideologis, terorganisir, dan terstruktur.
                <br />
                2. Menggalang perjuangan politik dengan nilai solidaritas nasional melanjutkan agenda reformasi dan demokratisasi.
                <br />
                3. Membangun kembali semangat republikanisme, merajut kembali rasa kebangsaan yang terserak, menanam kembali benih-benih idealisme, mendirikan kembali benteng-benteng kebhinnekaan dan membangun kembali pondasi gotong royong.
                <br />
                4. Mendorong martabat Indonesia dalam pergaulan internasional, sesuai prinsip politik bebas aktif dengan melibatkan kondisi geopolitik internasional yang sedang berkembang.
              </p>
            </div>

            <div className="mb-4 md:mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">DNA PSI</h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                • Kebajikan (anti korupsi)
                <br />
                • Keragaman (anti intoleransi)
              </p>
            </div>

            <div className="mb-4 md:mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">Trilogi identitas PSI</h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                1. Menebar kebajikan
                <br />
                2. Merawat keragaman
                <br />
                3. Meneguhkan solidaritas
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">Kenapa PSI?</h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Hasil yang baru tidak mungkin dicapai melalui cara lama. PSI hadir bersama semua yang baru: ide baru, gagasan baru, cara baru, orang baru dan mesin yang baru. Tentu tidak mudah menjalankan hal yang baru. Karenanya KAMI membutuhkan ANDA, terutama anak muda dan perempuan Indonesia yang selama ini merasa jauh dari politik. PSI kami persembahkan untuk ANDA… karena KAMI bukan siapa-siapa TANPA ANDA! PSI sebagai partai baru tidak lagi tersandera dengan kepentingan politik lama, klientalisme, rekam jejak yang buruk, beban sejarah dan citra yang buruk terhadap partai politik sebelumnya. PSI memberikan porsi yang besar pada perempuan, sehingga gerakan politik PSI tidak hanya sekedar memenuhi syarat 30% persen perempuan, tapi juga seluruh keputusan politiknya diambil melalui keterlibatan aktif perempuan di dalamnya. PSI secara konsisten memisahkan antara dua hal yang selama ini kadang menjadi kabur, antara mengurus partai dan mengurus politik. Sejak awal PSI telah memisahkan struktur politik dengan struktur administratifnya. Tidak akan terjadi politisi mengurus administrasi partai lalu menggunakannya untuk kepentingan kekuasaan, karena partai akan diurus oleh orang-orang muda profesional yang paham betul bagaimana mengurus organisasi yang modern, profesional, bersih dan transparan.
              </p>
            </div>

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
