import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Truck, PackageCheck, ShieldCheck } from 'lucide-react';

// Mengambil data dari products.json
import productsData from '../data/products.json';

/**
 * OPTIMASI GAMBAR
 */
const optimizeHeroImg = (url = '', width = 1000) => {
  if (!url || typeof url !== 'string') return '';
  if (url.includes('cloudinary.com')) {
    return url.replace('/upload/', `/upload/f_auto,q_70,w_${width}/`);
  }
  return url;
};

// --- LOGIKA PILIH PRODUK SPESIFIK ---
const selectedProduct = productsData.find(p => p.name === "Kacang Panjang") || productsData[0];
const HERO_IMAGE_SOURCE = selectedProduct?.image || '';
const HERO_PRODUCT_NAME = selectedProduct?.name || 'Sayur';

export const Hero = () => (
  <section className="relative bg-white pt-24 lg:pt-32 pb-12 lg:pb-20 overflow-hidden z-0 font-sans border-b-2 border-green-100 text-left">
    
    {/* Background Decorative Elements */}
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-50/50 rounded-full blur-[120px] -z-10 opacity-60 translate-x-1/4 -translate-y-1/4" aria-hidden="true" />
    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-slate-50 rounded-full blur-[100px] -z-10 opacity-80" aria-hidden="true" />

    <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
        
        {/* SISI KIRI: CONTENT BLOCK */}
        <div className="w-full lg:w-3/5 relative order-2 lg:order-1">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-6 justify-center lg:justify-start"
          >
            <span className="h-[2px] w-12 bg-[#15803d]" />
            <span className="text-[11px] font-black tracking-[0.3em] uppercase text-[#15803d]">Premium B2B Supply</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif italic font-black leading-[1] tracking-tighter text-[#052c17] mb-8 text-center lg:text-left uppercase"
          >
            SUPPLIER <span className="text-[#15803d] not-italic font-sans">SAYUR</span> <br className="hidden lg:block" /> 
            SUPER CIPANAS.
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.4 }}
            className="space-y-8 text-center lg:text-left"
          >
            <p className="text-lg lg:text-2xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0 border-l-4 border-green-500/30 pl-6 lg:pl-8">
              Green Fresh Cipanas menghadirkan standardisasi kualitas grade-A untuk mitra <strong>Horeka & Retail</strong> dengan sistem suplai harian yang terukur.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a href="#kemitraan" className="block w-full sm:w-auto">
                <button className="w-full bg-[#052c17] text-[#bef264] px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-2xl hover:bg-[#15803d] hover:text-white transition-all flex items-center justify-center gap-3 group cursor-pointer">
                  AJUKAN INQUIRY
                  <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
                </button>
              </a>

              <a href="#katalog" className="block w-full sm:w-auto">
                <button className="w-full bg-white text-[#052c17] border-2 border-green-100 px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:border-[#15803d] hover:text-[#15803d] transition-all cursor-pointer">
                  Cek {productsData.length}+ Komoditas
                </button>
              </a>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-8">
              <div className="flex items-center gap-3">
                <ShieldCheck size={20} className="text-[#15803d]"/>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#052c17]">Quality Sorting</span>
              </div>
              <div className="flex items-center gap-3">
                <PackageCheck size={20} className="text-[#15803d]"/>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#052c17]">Stok Stabil B2B</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* SISI KANAN: VISUAL PRESTIGE */}
        <div className="w-full lg:w-2/5 relative order-1 lg:order-2">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="relative rounded-[3rem] lg:rounded-[4rem] overflow-hidden border-2 border-green-100 shadow-2xl aspect-[4/5] bg-slate-100 group">
              <img 
                src={optimizeHeroImg(HERO_IMAGE_SOURCE, 1000)} 
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
                alt={`Green Fresh Supplier - ${HERO_PRODUCT_NAME}`}
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 via-transparent to-transparent" aria-hidden="true" />
              
              {/* Badge Dinamis sesuai produk yang dipilih */}
              <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">
                <p className="text-white text-[9px] font-black uppercase tracking-widest">Featured: {HERO_PRODUCT_NAME}</p>
              </div>
            </div>

            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-4 md:-left-12 z-30 bg-white p-5 lg:p-7 rounded-[2rem] shadow-2xl border-2 border-green-100 flex items-center gap-4"
            >
              <div className="bg-green-50 p-3 rounded-2xl text-[#15803d]">
                <Truck size={24} />
              </div>
              <div className="font-bold text-[#052c17]">
                <p className="text-sm lg:text-base leading-none mb-1 text-left">Logistik Harian</p>
                <p className="text-[9px] uppercase tracking-[0.2em] font-black text-slate-500">Ready Area Jabodetabek</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </div>
  </section>
);