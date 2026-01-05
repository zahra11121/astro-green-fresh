import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Truck, CheckCircle2, Navigation, MapPin, Box } from 'lucide-react';

export const DistrictLogistics = ({ district }) => {
  const logistics = district?.logistics || {};
  const timeParts = logistics?.time?.split(',') || [];

  return (
    <div className="relative bg-white rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/40 overflow-hidden text-left font-sans">
      {/* Decorative Gradient Top */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#15803d] via-[#bef264] to-[#15803d]" aria-hidden="true" />

      <div className="p-8 lg:p-12">
        
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-16 text-left">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 rounded-full border border-green-200">
              <div className="w-1.5 h-1.5 rounded-full bg-[#15803d] animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-[#15803d]">Logistics Schedule</span>
            </div>
            <h3 className="text-3xl lg:text-5xl font-[1000] text-[#052c17] tracking-tighter leading-none uppercase">
              JADWAL <span className="text-[#15803d]">OPERASIONAL.</span>
            </h3>
            <div className="flex items-center gap-3 text-slate-600">
              <MapPin size={14} className="text-[#15803d]" />
              <span className="text-xs font-bold uppercase tracking-widest leading-none">Rute: {district?.deliveryRoute || 'Jalur Distribusi Utama'}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-200">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm text-[#15803d]">
              <Truck size={20} />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Service Type</p>
              <p className="text-xs font-black text-[#052c17] uppercase">{logistics?.title || 'Regular Delivery'}</p>
            </div>
          </div>
        </div>

        {/* CONTENT: Timeline */}
        <div className="relative space-y-12 before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-200">
          
          {/* Step 1: Panen */}
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-14 group text-left"
          >
            <div className="absolute left-0 top-0 w-10 h-10 rounded-full flex items-center justify-center border-4 border-white bg-white group-hover:border-green-200 border-slate-100 shadow-lg transition-all duration-500 z-10">
              <div className="w-2.5 h-2.5 rounded-full bg-[#15803d]" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <span className="text-[11px] font-black font-mono text-[#15803d] bg-green-50 px-3 py-1 rounded-lg border border-green-200 shadow-sm">
                  {timeParts[0] || '04:00 - 06:00'}
                </span>
                <h4 className="font-black text-sm lg:text-lg text-[#052c17] tracking-tight transition-colors uppercase">
                  Pemetikan & Sortasi
                </h4>
              </div>
              <p className="text-[11px] lg:text-sm text-slate-600 font-semibold leading-relaxed max-w-2xl">
                Hasil tani dipetik segar dan disortir manual grade-A di Cipanas untuk menjaga kualitas fisik barang.
              </p>
            </div>
          </motion.div>

          {/* Step 2: Pengiriman Batch */}
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="relative pl-14 group text-left"
          >
            <div className="absolute left-0 top-0 w-10 h-10 rounded-full flex items-center justify-center border-4 border-white bg-white group-hover:border-green-200 border-slate-100 shadow-lg transition-all duration-500 z-10">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-300 group-hover:bg-[#15803d] transition-colors" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <span className="text-[11px] font-black font-mono text-[#15803d] bg-green-50 px-3 py-1 rounded-lg border border-green-200 shadow-sm">
                  {timeParts[1]?.trim() || 'Loading'}
                </span>
                <h4 className="font-black text-sm lg:text-lg text-[#052c17] tracking-tight transition-colors uppercase text-left">
                  Loading & Dispatch
                </h4>
              </div>
              <p className="text-[11px] lg:text-sm text-slate-600 font-semibold leading-relaxed max-w-2xl">
                Barang dikemas aman menggunakan transit-box dan armada berangkat menuju {district?.name || 'lokasi'} melalui rute tercepat.
              </p>
            </div>
          </motion.div>

          {/* Step 3: Sampai Tujuan */}
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="relative pl-14 group text-left"
          >
            <div className="absolute left-0 top-0 w-10 h-10 rounded-full flex items-center justify-center border-4 border-white bg-[#15803d] scale-110 shadow-green-200 shadow-lg z-10">
              <CheckCircle2 size={18} className="text-white" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <span className="text-[11px] font-black font-mono text-[#15803d] bg-green-50 px-3 py-1 rounded-lg border border-green-200 shadow-sm">
                  {timeParts[2]?.trim() || 'Tiba di Lokasi'}
                </span>
                <h4 className="font-black text-sm lg:text-lg text-[#052c17] tracking-tight transition-colors uppercase">
                  Serah Terima Barang
                </h4>
              </div>
              <p className="text-[11px] lg:text-sm text-slate-600 font-semibold leading-relaxed max-w-2xl">
                {logistics?.desc || `Barang tiba di area ${district?.name || 'tujuan'} sesuai jadwal untuk menjaga kesegaran maksimal saat diterima.`}
              </p>
            </div>
          </motion.div>
        </div>

        {/* FOOTER */}
        <div className="mt-20 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-50 rounded-lg border border-green-100">
              <Navigation size={14} className="text-[#15803d]" />
            </div>
            <span className="text-[10px] font-black text-[#052c17] uppercase tracking-[0.3em]">Fresh Express Delivery</span>
          </div>
          <div className="flex items-center gap-4">
             <div className="flex items-center gap-2">
                <Box size={12} className="text-slate-400" />
                <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest leading-none">Safe Packaging</span>
             </div>
             <div className="flex items-center gap-2">
                <Clock size={12} className="text-slate-400" />
                <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest leading-none">On-Time Guarantee</span>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};