import React from 'react';
import { motion } from "framer-motion";
import { HeartHandshake, TrendingUp, ShieldCheck, Zap } from 'lucide-react';

// IMPORT DATA DARI PRODUCTS.JSON
import productsData from '@/data/products.json';

export const EconomicImpact = ({ id }) => {
  /**
   * PENGAMBILAN GAMBAR DARI JSON
   * Mencari produk "Pakcoy" sebagai visual dampak ekonomi/pertanian
   */
  const IMPACT_IMAGE_SOURCE = productsData.find(p => p.name === "Pakcoy")?.image || productsData[0]?.image;

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section id={id} className="py-0 lg:py-24 bg-white font-sans overflow-hidden border-b-2 border-green-100">
      
      <div className="max-w-[1800px] mx-auto px-0 md:px-12 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-12 gap-0 lg:gap-24 items-center">
          
          {/* SISI VISUAL (ATAS PADA MOBILE) */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* IMAGE - Tanpa Cloudinary, langsung dari path JSON */}
              <div className="relative rounded-none md:rounded-[3rem] lg:rounded-[4rem] overflow-hidden md:border-2 md:border-green-100 shadow-none md:shadow-2xl aspect-[4/5] lg:aspect-square bg-slate-100 group">
                <img 
                  src={IMPACT_IMAGE_SOURCE} 
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
                  alt="Pertanian Berkelanjutan Cipanas - Pakcoy" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 via-transparent to-transparent opacity-60" aria-hidden="true" />
              </div>

              {/* Floating Badge */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 left-4 right-4 md:left-[-3rem] md:right-auto bg-white p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl border-2 border-green-100 md:max-w-[320px] z-20 text-left"
              >
                <div className="flex items-center gap-3 mb-3 text-[#15803d]">
                  <HeartHandshake size={18} />
                  <span className="text-[9px] font-black uppercase tracking-[0.3em]">Ethical Sourcing</span>
                </div>
                <p className="text-lg md:text-2xl font-serif italic text-[#052c17] leading-tight font-black">
                  "Membangun <span className="text-[#15803d] not-italic font-sans">ekonomi lokal</span> melalui rantai pasok transparan."
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* SISI KONTEN TEKS */}
          <div className="lg:col-span-6 space-y-10 order-2 lg:order-1 px-5 md:px-0 pt-16 md:pt-0 pb-12 md:pb-0">
            <div className="space-y-6 text-left">
              <motion.div 
                {...fadeInUp}
                className="flex items-center gap-3"
              >
                <div className="p-2 bg-green-50 rounded-lg text-[#15803d] border border-green-200 shadow-sm">
                  <Zap size={16} className="fill-[#15803d]/20" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#15803d]">Direct Farming Model</span>
              </motion.div>
              
              <motion.h2 
                {...fadeInUp}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-6xl lg:text-7xl font-serif italic font-black text-[#052c17] leading-[1.1] tracking-tighter uppercase"
              >
                Akses Langsung, <br /> 
                <span className="text-[#15803d] not-italic font-sans">Efisiensi Maksimal.</span>
              </motion.h2>
              
              <motion.p 
                {...fadeInUp}
                transition={{ delay: 0.2 }}
                className="text-base md:text-2xl text-slate-600 font-medium leading-relaxed max-w-2xl border-l-4 border-green-500/30 pl-5 md:pl-10"
              >
                Kami memutus kompleksitas rantai pasok konvensional. Menjamin margin harga kompetitif bagi bisnis Anda tanpa mengabaikan kesejahteraan petani lokal.
              </motion.p>
            </div>

            {/* ADVANTAGE CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {[
                { 
                  icon: <TrendingUp size={20} />, 
                  title: "Optimasi Biaya", 
                  desc: "Eliminasi perantara ganda untuk memberikan harga yang stabil bagi operasional Anda." 
                },
                { 
                  icon: <ShieldCheck size={20} />, 
                  title: "Jaminan Stok", 
                  desc: "Kemitraan terintegrasi dengan klaster petani menjamin kontinuitas pasokan harian." 
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={fadeInUp.initial}
                  whileInView={fadeInUp.whileInView}
                  viewport={fadeInUp.viewport}
                  transition={{ ...fadeInUp.transition, delay: 0.3 + (i * 0.1) }}
                  className="p-6 bg-[#f7faf7] rounded-[1.5rem] md:rounded-[2rem] border-2 border-green-100 group hover:bg-white transition-all duration-500 shadow-sm text-left"
                >
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#15803d] border border-green-200 mb-4 group-hover:bg-[#15803d] group-hover:text-white transition-all shadow-sm">
                    {item.icon}
                  </div>
                  <h4 className="font-black text-[10px] md:text-[11px] text-[#052c17] uppercase tracking-widest mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-700 leading-relaxed font-semibold">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};