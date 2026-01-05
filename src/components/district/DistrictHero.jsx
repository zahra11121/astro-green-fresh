import React from 'react';
import { MapPin, ArrowRight, ShieldCheck } from 'lucide-react';

export const DistrictHero = ({ district }) => {
  // Logika pemisahan string dengan pengamanan data (null check)
  const clientTypes = district?.clientFocus?.split(', ') || [];
  const titleParts = district?.title?.split(' - ') || ['', ''];
  const deliveryRouteCount = district?.deliveryRoute?.split('-')?.length || 0;
  const deliveryTime = district?.logistics?.time?.split(',')[0]?.split('-')[0] || '--';

  return (
    <section className="relative bg-white pt-20 pb-12 lg:pt-28 lg:pb-16 overflow-hidden font-sans border-b-2 border-green-100">
      
      {/* Soft Decorative Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green-50/30 rounded-full blur-[100px] pointer-events-none opacity-40" aria-hidden="true" />

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* SISI KIRI: Headline Utama */}
          <div className="lg:col-span-8 space-y-6 text-left">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-2.5 py-1 bg-green-50 border border-green-200 rounded-lg">
                  <MapPin size={12} className="text-[#15803d]" />
                  <span className="text-[11px] font-bold text-[#14532d] tracking-tight">{district.name} District</span>
                </div>
                <div className="h-px w-8 bg-green-200 hidden md:block" aria-hidden="true" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">Official B2B Supply</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif italic text-[#052c17] leading-[1.1] tracking-tighter uppercase">
                {titleParts[0]}
                <span className="text-[#15803d] not-italic font-sans font-bold block">{titleParts[1]}</span>
              </h1>
            </div>

            {/* ANGLE DESCRIPTION */}
            <p className="text-lg lg:text-2xl text-slate-700 font-normal leading-relaxed max-w-2xl border-l-4 border-green-500/30 pl-6">
              {district.angle}
            </p>

            {/* SEO CONTENT */}
            {district.seoContent && (
              <div className="max-w-2xl bg-slate-50/50 p-5 rounded-2xl border border-slate-100">
                <p className="text-sm md:text-base text-slate-700 leading-relaxed italic font-medium">
                  "{district.seoContent}"
                </p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="#katalog" className="group inline-flex items-center justify-center gap-3 bg-[#052c17] text-[#bef264] px-10 py-5 rounded-2xl text-sm font-black uppercase tracking-widest shadow-xl shadow-green-900/10 hover:bg-[#15803d] transition-all duration-300">
                Katalog Harga
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#kemitraan" className="inline-flex items-center justify-center bg-white text-[#052c17] border-2 border-green-200 px-10 py-5 rounded-2xl text-sm font-black uppercase tracking-widest hover:border-[#15803d] hover:text-[#15803d] transition-all duration-300">
                Ajukan Penawaran
              </a>
            </div>
          </div>

          {/* SISI KANAN: Simple Stats Card */}
          <div className="lg:col-span-4">
            <div className="p-8 bg-white border-2 border-green-100 rounded-[2.5rem] space-y-6 shadow-sm text-left">
              <div className="flex items-center gap-3 pb-5 border-b border-green-100">
                <div className="p-2.5 bg-green-50 rounded-xl">
                  <ShieldCheck size={20} className="text-[#15803d]" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest leading-none mb-1">Origin</p>
                  <p className="text-sm font-bold text-[#052c17]">{district.origin}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-green-50/50 rounded-xl">
                  <span className="text-sm font-medium text-slate-700">Client Segments</span>
                  <span className="text-lg font-black text-[#15803d]">{clientTypes.length}</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-blue-50/50 rounded-xl">
                  <span className="text-sm font-medium text-slate-700">Route Points</span>
                  <span className="text-lg font-black text-blue-600">{deliveryRouteCount}</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-purple-50/50 rounded-xl">
                  <span className="text-sm font-medium text-slate-700">Delivery Time</span>
                  <span className="text-lg font-black text-purple-600">
                    {deliveryTime}
                  </span>
                </div>
              </div>
              
              <div className="pt-4 border-t border-green-100">
                <p className="text-xs text-slate-600 font-medium">
                  Serving <span className="font-bold text-[#15803d]">{clientTypes[0]}</span> and {clientTypes.length > 1 ? clientTypes.length - 1 : 0} other segments in {district.name}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};