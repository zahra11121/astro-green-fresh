import { MapPin, ArrowRight, ShieldCheck, Truck, Timer } from 'lucide-react';

export const DistrictHero = ({ district }) => {
  // Hanya mengambil nama kota untuk identitas area
  const cityName = district?.name || 'Area';
  
  // Gambar latar belakang tema sayuran segar (High Resolution)
  const bgHeroImg = "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=2000";
  // Gambar visual utama di sisi kanan
  const districtHeroImg = "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200";

  return (
    <section className="relative pt-20 pb-12 lg:pt-28 lg:pb-20 overflow-hidden font-sans border-b border-slate-100 bg-[#052c17]">
      
      {/* BACKGROUND IMAGE OVERLAY */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgHeroImg} 
          alt="Green Fresh Background" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#052c17] via-[#052c17]/95 to-[#052c17]/90" />
      </div>

      <div className="max-w-[1800px] mx-auto px-6 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* SISI KIRI: KONTEN TEKS */}
          <div className="space-y-8 text-left order-2 lg:order-1 text-white">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                <MapPin size={12} className="text-[#bef264]" />
                <span className="text-[9px] font-black text-white uppercase tracking-[0.2em]">
                  {cityName} Distribution Hub
                </span>
              </div>

              {/* H1 dengan ukuran yang lebih proporsional */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif italic font-black leading-[1.1] tracking-tighter uppercase">
                SUPPLIER SAYUR <br />
                <span className="text-[#bef264] not-italic font-sans font-black">{cityName}.</span>
              </h1>

              <p className="text-lg lg:text-xl text-slate-300 font-medium leading-relaxed max-w-xl">
                Distribusi komoditas Grade A harian untuk standar dapur profesional dan operasional bisnis Horeka di wilayah <span className="text-[#bef264] font-bold">{cityName}</span>.
              </p>
            </div>

            {/* QUICK STATS */}
            <div className="flex flex-wrap gap-6 py-6 border-y border-white/10">
              <div className="flex items-center gap-3">
                <Truck size={20} className="text-[#bef264]" />
                <div>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Logistik</p>
                  <p className="text-xs font-bold text-white uppercase">Pengiriman Harian</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Timer size={20} className="text-[#bef264]" />
                <div>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Waktu</p>
                  <p className="text-xs font-bold text-white uppercase">Tiba Pagi Hari</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck size={20} className="text-[#bef264]" />
                <div>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Kualitas</p>
                  <p className="text-xs font-bold text-white uppercase">Grade A Horeca</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#katalog" className="group inline-flex items-center justify-center gap-3 bg-[#bef264] text-[#052c17] px-8 py-4 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-white transition-all shadow-xl shadow-black/20">
                Katalog Harga
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#kemitraan" className="inline-flex items-center justify-center bg-white/5 backdrop-blur-md text-white border-2 border-white/20 px-8 py-4 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-white hover:text-[#052c17] transition-all text-center">
                Ajukan Penawaran
              </a>
            </div>
          </div>

          {/* SISI KANAN: VISUAL UTAMA */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] bg-white/5 border-4 border-white/10 backdrop-blur-sm max-w-lg mx-auto lg:ml-auto">
              <img 
                src={districtHeroImg} 
                alt={`Premium Supply CV Green Fresh Cipanas`}
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#052c17]/60 via-transparent to-transparent" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};