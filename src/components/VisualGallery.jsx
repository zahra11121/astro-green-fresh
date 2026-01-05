"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Truck, PackageCheck, ShieldCheck, ChevronRight } from 'lucide-react';
import { galleryData } from '@/data/galleryData';

/**
 * FUNGSI OPTIMASI CLOUDINARY
 * @param {string} url 
 * @param {number} width 
 * @param {number} [height] 
 */
const getCloudinaryUrl = (url = '', width, height) => {
  if (!url || typeof url !== 'string') return '';
  const params = `f_auto,q_auto:eco,c_fill,g_auto,w_${width}${height ? `,h_${height}` : ''}`;
  return url.replace('/upload/', `/upload/${params}/`);
};

// Akses data gallery dengan aman menggunakan bracket notation untuk menghindari linter error
const images = galleryData?.images || [];
const IMG_LAHAN = typeof images[2] === 'object' ? images[2]['url'] : images[2]; 
const IMG_PACKING = typeof images[5] === 'object' ? images[5]['url'] : images[5]; 

export const VisualGallery = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section id="lahan" className="py-12 lg:py-20 bg-white font-sans overflow-hidden border-b-2 border-green-100 text-left">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* HEADER: Editorial Style */}
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-16">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-3">
              <ShieldCheck size={16} className="text-[#15803d]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#15803d]">Farm to Distribution</span>
            </div>
            <h2 className="text-4xl lg:text-7xl font-serif italic font-black text-[#052c17] leading-[0.9] tracking-tighter uppercase">
              Kualitas <span className="text-[#15803d] not-italic font-sans">Tanpa Kompromi.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 border-l-4 border-green-500/20 pl-8">
            <p className="text-slate-600 font-bold text-sm lg:text-lg leading-relaxed italic">
              "Kami mengelola integritas suplai dari hulu hingga hilir untuk menjaga standar bisnis Anda."
            </p>
          </div>
        </div>

        {/* GALLERY GRID */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* BIG ASSET: FARMING */}
          <motion.div {...fadeInUp} className="lg:col-span-7 space-y-6">
            <div className="relative aspect-[16/10] rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden border-2 border-green-100 shadow-2xl group bg-slate-50">
              <img 
                src={getCloudinaryUrl(IMG_LAHAN, 1200, 750)} 
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
                alt="Proses budidaya sayur premium di kebun Cipanas"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 via-transparent to-transparent opacity-60" aria-hidden="true" />
            </div>
            <div className="px-6">
              <p className="text-[#15803d] text-[10px] font-black uppercase tracking-[0.4em] mb-2">Hulu Produksi</p>
              <h4 className="text-2xl font-serif italic font-black text-[#052c17] mb-2">Highland cultivation.</h4>
              <p className="text-slate-700 text-sm lg:text-base font-semibold max-w-xl">
                Lahan subur Cipanas yang dikelola dengan standar GAP (Good Agricultural Practices) untuk hasil panen premium.
              </p>
            </div>
          </motion.div>

          {/* SIDE ASSETS: PACKING & LOGISTICS */}
          <div className="lg:col-span-5 space-y-12 lg:space-y-16">
            
            {/* PACKING CARD */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2 aspect-square rounded-[2rem] overflow-hidden border-2 border-green-100 shadow-xl relative group bg-slate-50">
                <img 
                  src={getCloudinaryUrl(IMG_PACKING, 600, 600)} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt="Proses pengemasan higienis sayuran Grade-A"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-xl text-[#15803d] shadow-lg">
                  <PackageCheck size={20} />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-3">
                <h5 className="text-xl font-serif italic font-black text-[#052c17]">Standardized Packaging.</h5>
                <p className="text-xs lg:text-sm text-slate-600 leading-relaxed font-bold">
                  Proses pembersihan dan pengemasan higienis yang disesuaikan untuk kebutuhan Modern Retail & Fine Dining.
                </p>
              </div>
            </motion.div>

            {/* LOGISTICS CARD */}
            <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="bg-[#f7faf7] border-2 border-green-100 rounded-[2.5rem] p-8 lg:p-10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-100/50 rounded-full blur-3xl -mr-10 -mt-10" aria-hidden="true" />
              
              <div className="relative z-10 flex flex-col justify-between h-full space-y-6 text-left">
                <div className="w-12 h-12 bg-[#15803d] rounded-xl flex items-center justify-center text-white shadow-lg group-hover:translate-x-2 transition-transform">
                  <Truck size={24} />
                </div>
                <div>
                  <h4 className="text-2xl font-serif italic font-black text-[#052c17] mb-4">Armada Logistik Mandiri.</h4>
                  <ul className="grid grid-cols-2 gap-y-3 gap-x-6 text-[10px] font-black uppercase tracking-widest text-[#14532d]">
                    <li className="flex items-center gap-2"><ChevronRight size={12} className="text-[#15803d]" /> Jakarta</li>
                    <li className="flex items-center gap-2"><ChevronRight size={12} className="text-[#15803d]" /> Tangerang</li>
                    <li className="flex items-center gap-2"><ChevronRight size={12} className="text-[#15803d]" /> Bekasi</li>
                    <li className="flex items-center gap-2"><ChevronRight size={12} className="text-[#15803d]" /> Bogor/Depok</li>
                  </ul>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};