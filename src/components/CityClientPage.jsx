import { motion } from "framer-motion";
import { Star, ShieldCheck, Truck, Users } from 'lucide-react';

// PENGGUNAAN ALIAS PATH (@/)
import { PartnershipForm } from '@/components/PartnershipForm.jsx';
import { PriceTable } from '@/components/PriceTable.jsx';

// PERBAIKAN: Impor data katalog dari file data.js
import { vegetableData } from '@/data/data.js'; 

// IMPORT KOMPONEN INTERNAL
import { CityHero } from '@/components/city/CityHero.jsx';
import { LogisticsTimeline } from '@/components/city/LogisticsTimeline.jsx';
import { CityFAQ } from '@/components/city/CityFAQ.jsx';
import { SectorTarget } from '@/components/city/SectorTarget.jsx';
import { QualityGuarantee } from '@/components/city/QualityGuarantee.jsx';
import { LiveStats } from '@/components/city/LiveStats.jsx';

export default function CityClientPage({ city }) {
  return (
    <div className="bg-white font-sans selection:bg-green-100 selection:text-green-900">
      {/* HERO SECTION */}
      <CityHero city={city} />

      {/* RATING & TRUST BADGE */}
      <div className="w-full bg-white border-y border-green-50 py-4">
        <div className="max-w-[1800px] mx-auto px-6 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={16} className="text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <p className="text-[11px] lg:text-xs font-black uppercase tracking-widest text-[#052c17]">
              4.9/5 <span className="text-slate-300 font-medium px-2">|</span> 
              <span className="text-[#15803d]">Pilihan Utama di {city.name}</span>
            </p>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-2">
              <Users size={14} className="text-[#15803d]" />
              <span className="text-[10px] font-bold uppercase tracking-tighter text-slate-600">120+ Mitra Aktif</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-[#15803d]" />
              <span className="text-[10px] font-bold uppercase tracking-tighter text-slate-600">Grade A Quality</span>
            </div>
          </div>
        </div>
      </div>

      {/* SEKSI TARGET SEKTOR */}
      <section className="py-12 lg:py-24 bg-white border-b-2 border-green-100 text-center px-6">
        <div className="max-w-[1800px] mx-auto">
          <p className="text-xl lg:text-3xl font-serif italic text-[#052c17] mb-12 font-black tracking-tight uppercase text-left md:text-center">
            Fokus Layanan: <span className="text-[#15803d] not-italic font-sans font-bold">{city.clientFocus}</span>
          </p>
          <SectorTarget />
        </div>
      </section>

      {/* KATALOG PRODUK */}
      <section id="katalog" className="bg-[#fcfdfc] py-12 lg:py-24 border-b-2 border-green-200">
        <div className="max-w-[1500px] mx-auto px-6">
          <div className="mb-12 text-center">
             <h2 className="text-2xl lg:text-4xl font-serif italic font-black text-[#052c17] uppercase tracking-tighter">
               Katalog <span className="text-[#15803d] not-italic font-sans">Terupdate.</span>
             </h2>
             <p className="text-slate-600 text-xs font-bold mt-2 tracking-widest uppercase">
               Tersedia {vegetableData.length}+ Komoditas Grade A Wilayah {city.name}
             </p>
          </div>
          <PriceTable data={vegetableData} showHeader={false} />
        </div>
      </section>

      <LiveStats />
      <QualityGuarantee />

      {/* TIMELINE & FAQ */}
      <section className="py-12 lg:py-24 bg-white border-b border-slate-100">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          <LogisticsTimeline slug={city.slug} cityName={city.name} />
          <CityFAQ cityName={city.name} />
        </div>
      </section>

      {/* FORM KEMITRAAN B2B */}
      <section id="kemitraan" className="py-16 lg:py-32 bg-[#f7faf7] border-t-2 border-green-200">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-6xl font-serif italic font-black text-[#052c17] tracking-tighter uppercase leading-none">
              Ajukan <span className="text-[#15803d] not-italic font-sans font-bold">Kerjasama.</span>
            </h2>
            <p className="text-slate-700 font-bold uppercase text-xs tracking-widest mt-4">Pusat Pengadaan Komoditas Wilayah {city.name}</p>
          </div>
          <PartnershipForm />
        </div>
      </section>
    </div>
  );
}