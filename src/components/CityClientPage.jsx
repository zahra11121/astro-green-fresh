import React from 'react';
import { Star, ShieldCheck, Users } from 'lucide-react';

// IMPORT KOMPONEN INTERNAL
import { PartnershipForm } from '@/components/PartnershipForm.jsx';
import { PriceTable } from '@/components/PriceTable.jsx';
import { CityHero } from '@/components/city/CityHero.jsx';
import { LogisticsTimeline } from '@/components/city/LogisticsTimeline.jsx';
import { CityFAQ } from '@/components/city/CityFAQ.jsx';
import { SectorTarget } from '@/components/city/SectorTarget.jsx';
import { QualityGuarantee } from '@/components/city/QualityGuarantee.jsx';
import { LiveStats } from '@/components/city/LiveStats.jsx';

export default function CityClientPage({ city, vegetableData }) {
  return (
    <div className="bg-white font-sans selection:bg-green-100">
      <CityHero city={city} />

      {/* RATING & TRUST BADGE  */}
      <div className="w-full bg-white border-y border-green-50 py-4">
        <div className="max-w-[1800px] mx-auto px-6 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={16} className="text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <p className="text-[11px] lg:text-xs font-black uppercase tracking-widest text-[#052c17]">
              4.9/5 | <span className="text-[#15803d]">Pilihan Utama di {city.name}</span>
            </p>
          </div>
          <div className="hidden md:flex items-center gap-8 text-[10px] font-bold uppercase text-slate-600">
            <span className="flex items-center gap-2"><Users size={14} className="text-[#15803d]" /> 120+ Mitra</span>
            <span className="flex items-center gap-2"><ShieldCheck size={14} className="text-[#15803d]" /> Grade A Quality</span>
          </div>
        </div>
      </div>

      <section className="py-12 lg:py-24 bg-white border-b-2 border-green-100 text-center px-6">
        <div className="max-w-[1800px] mx-auto">
          <p className="text-xl lg:text-3xl font-serif italic text-[#052c17] mb-12 font-black uppercase text-left md:text-center">
            Fokus Layanan: <span className="text-[#15803d] not-italic font-sans font-bold">{city.clientFocus}</span>
          </p>
          <SectorTarget />
        </div>
      </section>

      {/* KATALOG PRODUK: Menggunakan Data dari Server  */}
      <section id="katalog" className="bg-[#fcfdfc] py-12 lg:py-24 border-b-2 border-green-200">
        <div className="max-w-[1500px] mx-auto px-6">
          <div className="mb-12 text-center">
             <h2 className="text-2xl lg:text-4xl font-serif italic font-black text-[#052c17] uppercase">
               Katalog <span className="text-[#15803d] not-italic font-sans">Terupdate.</span>
             </h2>
             <p className="text-slate-600 text-xs font-bold mt-2 uppercase tracking-widest">
               Tersedia {vegetableData?.length || 0}+ Komoditas Wilayah {city.name}
             </p>
          </div>
          <PriceTable data={vegetableData} showHeader={false} />
        </div>
      </section>

      <LiveStats />
      <QualityGuarantee />

      <section className="py-12 lg:py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          <LogisticsTimeline slug={city.slug} cityName={city.name} />
          <CityFAQ cityName={city.name} />
        </div>
      </section>

      <section id="kemitraan" className="py-16 lg:py-32 bg-[#f7faf7] border-t-2 border-green-200">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16 uppercase">
            <h2 className="text-3xl lg:text-6xl font-serif italic font-black text-[#052c17] leading-none">
              Ajukan <span className="text-[#15803d] not-italic font-sans font-bold">Kerjasama.</span>
            </h2>
            <p className="text-slate-700 font-bold text-xs tracking-widest mt-4">Area Distribusi {city.name}</p>
          </div>
          <PartnershipForm />
        </div>
      </section>
    </div>
  );
}