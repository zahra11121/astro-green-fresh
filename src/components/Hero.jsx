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
  <section className="relative bg-white pt-24 lg:pt-36 pb-16 lg:pb-24 overflow-hidden z-0 font-sans border-b border-green-50 text-left">
    
    {/* Background Decorative Elements - Lebih halus */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-green-100/40 to-transparent rounded-full blur-[140px] -z-10 opacity-50 translate-x-1/3 -translate-y-1/3" aria-hidden="true" />
    <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-slate-100 rounded-full blur-[120px] -z-10 opacity-60" aria-hidden="true" />

    <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* SISI KIRI: CONTENT BLOCK */}
        <div className="w-full lg:w-3/5 relative order-2 lg:order-1">
          <motion.div 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 mb-8 bg-green-50 px-4 py-2 rounded-full border border-green-100"
          >
            <span className="w-2 h-2 rounded-full bg-[#15803d] animate-pulse" />
            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-[#15803d]">Premium B2B Supply</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-serif italic font-black leading-[0.9] tracking-tighter text-[#052c17] mb-10 text-center lg:text-left uppercase"
          >
            SUPPLIER <span className="text-[#15803d] not-italic font-sans">SAYUR</span> <br className="hidden lg:block" /> 
            SUPER CIPANAS.
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.3 }}
            className="space-y-10 text-center lg:text-left"
          >
            <div className="max-w-2xl mx-auto lg:mx-0 relative">
              <p className="text-xl lg:text-2xl text-slate-500 font-medium leading-relaxed pl-0 lg:pl-4">
                Green Fresh Cipanas menghadirkan standardisasi kualitas grade-A untuk mitra <strong className="text-[#052c17]">Horeka & Retail</strong> dengan sistem suplai harian yang terukur.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-4 font-sans">
              <a href="#kemitraan" className="block w-full sm:w-auto">
                <button className="w-full bg-[#052c17] text-[#bef264] px-12 py-6 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] shadow-[0_20px_50px_rgba(5,44,23,0.3)] hover:shadow-green-900/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 group cursor-pointer">
                  AJUKAN INQUIRY
                  <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform" />
                </button>
              </a>

              <a href="#katalog" className="block w-full sm:w-auto">
                <button className="w-full bg-white text-[#052c17] border-2 border-slate-100 px-12 py-6 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] hover:border-[#15803d] hover:text-[#15803d] transition-all cursor-pointer shadow-sm hover:shadow-md">
                  Cek {productsData.length}+ Komoditas
                </button>
              </a>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-10 pt-10 border-t border-slate-100">
              <div className="flex items-center gap-4 group">
                <div className="p-2 bg-green-50 rounded-lg group-hover:bg-green-100 transition-colors">
                   <ShieldCheck size={24} className="text-[#15803d]"/>
                </div>
                <span className="text-[11px] font-black uppercase tracking-widest text-[#052c17]">Quality Sorting</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-2 bg-green-50 rounded-lg group-hover:bg-green-100 transition-colors">
                   <PackageCheck size={24} className="text-[#15803d]"/>
                </div>
                <span className="text-[11px] font-black uppercase tracking-widest text-[#052c17]">Stok Stabil B2B</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* SISI KANAN: VISUAL PRESTIGE */}
        <div className="w-full lg:w-2/5 relative order-1 lg:order-2">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10"
          >
            <div className="relative rounded-[4rem] lg:rounded-[5rem] overflow-hidden border border-green-50 shadow-[0_40px_100px_rgba(0,0,0,0.1)] aspect-[4/5] bg-slate-50 group">
              <img 
                src={optimizeHeroImg(HERO_IMAGE_SOURCE, 1000)} 
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105" 
                alt={`Green Fresh Supplier - ${HERO_PRODUCT_NAME}`}
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" aria-hidden="true" />
              
              <div className="absolute top-8 left-8 bg-white/10 backdrop-blur-xl px-5 py-3 rounded-2xl border border-white/20">
                <p className="text-white text-[10px] font-black uppercase tracking-[0.2em]">Featured: {HERO_PRODUCT_NAME}</p>
              </div>
            </div>

            {/* Floating Card - Diperhalus */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-6 md:-left-12 z-30 bg-white p-6 lg:p-8 rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-green-50 flex items-center gap-5"
            >
              <div className="bg-[#15803d] p-4 rounded-2xl text-white shadow-lg shadow-green-900/20">
                <Truck size={28} />
              </div>
              <div>
                <p className="text-base lg:text-lg font-bold text-[#052c17] leading-tight mb-1">Logistik Harian</p>
                <p className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-400">Ready Jabodetabek</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </div>
  </section>
);