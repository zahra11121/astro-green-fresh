import React from 'react';
import { motion } from "framer-motion";
import { Users, Factory, ShieldCheck, ArrowRight } from 'lucide-react';

// IMPORT DATA DARI PRODUCTS.JSON
import productsData from '@/data/products.json'; 

export const WhoWeAre = ({ id = "who-we-are" }) => {
  /**
   * PERBAIKAN: Mencari produk "Wortel" sebagai visual utama.
   * Menggunakan fallback ke produk pertama jika nama tidak ditemukan.
   */
  const ABOUT_IMAGE_SOURCE = productsData.find(p => p.name === "Wortel")?.image || productsData[0]?.image;

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section id={id} className="py-12 lg:py-24 bg-white overflow-hidden font-sans border-b-2 border-green-100 text-left">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* SISI KIRI: IMAGE BLOCK */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[3rem] lg:rounded-[4rem] overflow-hidden border-2 border-green-100 shadow-2xl aspect-[4/5] bg-slate-100 group"
            >
              <img 
                src={ABOUT_IMAGE_SOURCE} 
                alt="Produk Unggulan Green Fresh Cipanas" 
                className="w-full h-full object-cover grayscale-[0.1] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 via-transparent to-transparent opacity-60" aria-hidden="true" />
              
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md border-2 border-green-100 p-6 rounded-[2rem] shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center text-[#15803d]">
                    <Factory size={22} />
                  </div>
                  <div>
                    <p className="text-[#15803d] text-[9px] font-black uppercase tracking-[0.3em] leading-none mb-1">Main Hub</p>
                    <p className="text-[#052c17] text-lg font-serif italic font-black uppercase leading-none">Cipanas Agribusiness</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* SISI KANAN: CONTENT BLOCK */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-6">
              <motion.div 
                {...fadeInUp}
                className="inline-flex items-center gap-3 px-4 py-2 bg-[#f7faf7] rounded-full border-2 border-green-100"
              >
                <span className="w-2 h-2 rounded-full bg-[#16a34a] animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#15803d]">Verified Supplier Profile</span>
              </motion.div>
              
              <motion.h2 
                {...fadeInUp}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-serif italic font-black text-[#052c17] leading-[1] tracking-tighter uppercase"
              >
                Distributor <span className="text-[#15803d] not-italic font-sans">Sayuran Profesional</span>
              </motion.h2>
              
              <motion.p 
                {...fadeInUp}
                transition={{ delay: 0.2 }}
                className="text-lg lg:text-2xl text-slate-600 font-medium leading-relaxed max-w-2xl border-l-4 border-green-500/30 pl-6 lg:pl-10"
              >
                <span className="text-[#052c17] font-bold italic">Green Fresh Cipanas</span> adalah supplier tangan pertama yang hadir sebagai mitra strategis pengadaan sayur hotel, restoran, dan supermarket melalui integrasi petani lokal berkualitas super.
              </motion.p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 border-t-2 border-green-50 pt-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-[#15803d]">
                  <Users size={18} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Highland Sourcing</span>
                </div>
                <p className="text-slate-700 text-sm leading-relaxed font-semibold">
                  Bermitra dengan 200+ petani dataran tinggi untuk menjamin kontinuitas panen setiap hari tanpa jeda.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-[#15803d]">
                  <ShieldCheck size={18} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Quality Assurance</span>
                </div>
                <p className="text-slate-700 text-sm leading-relaxed font-semibold">
                  Proses seleksi ketat (Sorting & Grading) untuk memastikan standar Grade-A sesuai kebutuhan industri Horeka.
                </p>
              </div>
            </div>

            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-8 pt-4"
            >
              <a href="/about" className="w-full sm:w-auto">
                <button className="group w-full flex items-center justify-center gap-4 bg-[#052c17] text-[#bef264] px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-[#15803d] hover:text-white transition-all shadow-2xl active:scale-95 cursor-pointer">
                  Corporate Profile
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
              
              <div className="flex flex-col border-l-4 border-green-100 pl-6 py-1">
                <span className="text-[9px] font-black text-[#052c17] uppercase tracking-[0.3em] mb-1">B2B Standard</span>
                <span className="text-slate-600 text-[11px] font-black">Resmi Beroperasi Sejak 2019</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};