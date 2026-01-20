import { MapPin, ArrowRight, ShieldCheck, Truck } from 'lucide-react';

export const CityHero = ({ city }) => {
  // Pengamanan data: Jika data city belum ada (saat build), komponen tidak pecah
  const cityName = city?.name || 'Seluruh Wilayah';
  const seoContent = city?.seoContent || null;

  // Gambar representasi gudang/logistik sayur segar
  const heroImageUrl = "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1000";

  return (
    <section className="relative bg-white pt-20 pb-12 lg:pt-28 lg:pb-20 overflow-hidden font-sans border-b-2 border-green-100">
      
      {/* Soft Decorative Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green-50/30 rounded-full blur-[100px] pointer-events-none opacity-40" aria-hidden="true" />

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* SISI KIRI: Headline Utama */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-200 rounded-xl">
                  <MapPin size={14} className="text-[#15803d]" />
                  <span className="text-[11px] font-black text-[#14532d] uppercase tracking-wider">{cityName} Hub</span>
                </div>
                <div className="h-px w-12 bg-green-200 hidden md:block" aria-hidden="true" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Official B2B Supply</span>
              </div>

              <h2 className="text-5xl md:text-6xl lg:text-8xl font-serif italic text-[#052c17] leading-[0.95] tracking-tighter uppercase">
                Supplier Sayur <br />
                <span className="text-[#15803d] not-italic font-sans font-black">{cityName}.</span>
              </h2>
            </div>

            {/* DESKRIPSI UTAMA */}
            <div className="relative">
              <p className="text-xl lg:text-2xl text-slate-600 font-medium leading-relaxed max-w-2xl border-l-4 border-green-500/30 pl-8">
                Distribusi hasil panen Cipanas untuk standar operasional dapur komersial di wilayah <span className="text-[#052c17] font-bold">{cityName}</span>.
              </p>
            </div>

            {/* SEO CONTENT: Render hanya jika data tersedia */}
            {seoContent && (
              <div className="max-w-2xl bg-slate-50/80 p-6 rounded-3xl border border-slate-100 backdrop-blur-sm">
                <p className="text-sm md:text-base text-slate-700 leading-relaxed italic font-medium">
                  &quot;{seoContent}&quot;
                </p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <a href="#katalog" className="group inline-flex items-center justify-center gap-3 bg-[#052c17] text-[#bef264] px-12 py-6 rounded-2xl text-xs font-black uppercase tracking-widest shadow-2xl shadow-green-900/20 hover:bg-[#15803d] hover:text-white transition-all duration-300">
                Katalog Harga
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#kemitraan" className="inline-flex items-center justify-center bg-white text-[#052c17] border-2 border-slate-100 px-12 py-6 rounded-2xl text-xs font-black uppercase tracking-widest hover:border-[#15803d] hover:text-[#15803d] transition-all duration-300 shadow-sm">
                Ajukan Penawaran
              </a>
            </div>
          </div>

          {/* SISI KANAN: Visual & Specs */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-green-50 aspect-square lg:aspect-auto lg:h-[500px]">
              <img 
                src={heroImageUrl} 
                alt={`Green Fresh Supply - ${cityName}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#052c17]/60 via-transparent to-transparent" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-[2rem] border border-white/20 shadow-xl">
                <div className="flex items-center gap-4 mb-4 pb-4 border-b border-green-100">
                  <div className="p-3 bg-green-600 rounded-2xl text-white">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Standard Quality</p>
                    <p className="text-base font-bold text-[#052c17]">Sortir Grade A (Horeka)</p>
                  </div>
                </div>
                
                <ul className="grid grid-cols-1 gap-3">
                  {['Stok Stabil 10 Ton/Hari', 'Pengiriman Sebelum 07:00'].map((feat, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Truck size={14} className="text-[#15803d]" />
                      <span className="text-[11px] font-black text-[#052c17] uppercase tracking-wider">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};