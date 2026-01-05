import React from 'react';
import { motion } from 'framer-motion';
import { 
  Wallet, 
  CreditCard, 
  Landmark, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  BadgeCheck
} from 'lucide-react';

const FINANCE_IMAGE_URL = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=60&w=1200";

export const CashFlow = ({ id }) => {
  return (
    <section id={id || "payment"} className="py-0 md:py-20 bg-white font-sans overflow-hidden border-b-2 border-green-100">
      
      <div className="max-w-[1800px] mx-auto px-0 md:px-12 lg:px-20 relative z-10">
        
        {/* HEADER */}
        <div className="max-w-4xl mb-8 md:mb-16 space-y-4 px-5 md:px-0 mt-10 md:mt-0">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div className="w-8 h-px bg-[#15803d]" />
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-[#15803d]">Financial Flexibility</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-6xl lg:text-7xl font-serif italic text-[#052c17] leading-[1.1] tracking-tighter">
            Sirkuasi Kas <span className="text-[#15803d] not-italic font-sans font-black">Lebih Ringan.</span>
          </h2>

          <p className="text-base md:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl border-l-4 border-green-500/20 pl-4 md:pl-6">
            Sistem pembayaran yang dapat disesuaikan dengan kebutuhan arus kas perusahaan Anda.
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid lg:grid-cols-12 gap-0 md:gap-16 items-stretch">
          
          {/* SISI KIRI: Image & Badges */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="relative aspect-video md:rounded-[2rem] overflow-hidden md:border-2 md:border-green-100 shadow-none md:shadow-xl group">
              <img 
                src={FINANCE_IMAGE_URL} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" 
                alt="B2B Financial Support"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-white/95 backdrop-blur-md p-3 md:p-5 rounded-xl border-2 border-green-100 flex items-center gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-green-50 rounded-lg flex items-center justify-center text-[#15803d]">
                  <BadgeCheck size={18} />
                </div>
                <div>
                  <p className="text-[8px] md:text-[9px] font-black text-[#14532d] uppercase tracking-widest leading-none mb-1">Audit Ready</p>
                  <p className="text-xs md:text-sm font-bold text-[#052c17]">Standard Korporasi</p>
                </div>
              </div>
            </div>

            {/* Checklist */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-5 md:px-0 py-8 md:py-0 md:mt-8">
              {[
                { title: 'Faktur Pajak', sub: 'PKP Ready' },
                { title: 'Invoicing', sub: 'Sistematis' },
                { title: 'Rekonsiliasi', sub: 'Transparan' }
              ].map((item, i) => (
                <div key={i} className="flex gap-2 items-center">
                  <div className="flex-shrink-0 w-7 h-7 bg-green-50 rounded-lg flex items-center justify-center text-[#15803d]">
                    <CheckCircle2 size={12}/>
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-[#052c17] font-bold text-[10px] md:text-[11px] uppercase truncate">{item.title}</h4>
                    <p className="text-slate-600 font-bold text-[9px] md:text-[10px]">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SISI KANAN: Opsi Termin */}
          <div className="lg:col-span-5">
            <div className="h-full bg-[#f7faf7] border-y-2 border-green-100 md:border-2 md:rounded-[2.5rem] p-5 md:p-10 space-y-8 md:space-y-10 shadow-none">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <p className="text-[#15803d] text-[10px] font-black uppercase tracking-[0.3em]">Billing Terms</p>
                  <h3 className="text-2xl md:text-3xl font-serif italic font-black text-[#052c17]">Opsi Termin.</h3>
                </div>
                <ShieldCheck className="text-green-300" size={32} />
              </div>

              <div className="space-y-3">
                {[
                  { label: "Tunai / COD", desc: "Harian", icon: <Wallet size={18} /> },
                  { label: "Tempo 14 Hari", desc: "Reguler", icon: <CreditCard size={18} /> },
                  { label: "Tempo 30 Hari", desc: "Korporat", icon: <Landmark size={18} /> }
                ].map((item, idx) => (
                  <div 
                    key={idx}
                    className="group flex items-center justify-between p-4 bg-white border-2 border-green-100 rounded-xl transition-all shadow-sm hover:border-[#15803d]"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 p-2.5 bg-green-50 rounded-lg text-[#15803d]">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-[#052c17] font-bold text-sm tracking-tight">{item.label}</p>
                        <p className="text-slate-600 font-black text-[9px] uppercase tracking-widest">{item.desc}</p>
                      </div>
                    </div>
                    <ArrowRight size={14} className="text-slate-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                ))}
              </div>

              <div className="pt-6 pb-6 md:pb-0">
                <p className="text-[9px] md:text-[10px] text-slate-600 font-black uppercase tracking-[0.2em] text-center italic">
                  *Khusus entitas bisnis resmi (B2B)
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};