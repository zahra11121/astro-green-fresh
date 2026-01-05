import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Image as ImageIcon, Camera, CheckCircle2 } from 'lucide-react';
// PERBAIKAN: Menggunakan path relatif agar aman di lingkungan Vite/Astro
import { galleryData } from '../data/galleryData';

/**
 * OPTIMASI CLOUDINARY
 */
const optimizeCloudinaryVideo = (url = '') => {
  if (!url || typeof url !== 'string') return '';
  return url.replace('/video/upload/', '/video/upload/f_mp4,q_auto,so_0/');
};

const optimizeCloudinary = (url = '', width = 800) => {
  if (!url || typeof url !== 'string') return '';
  return url.replace('/upload/', `/upload/f_auto,q_auto,w_${width}/`);
};

export const Gallery = () => {
  /**
   * PERBAIKAN: Memberitahu linter bahwa ini adalah array elemen video.
   * @type {React.MutableRefObject<(HTMLVideoElement | null)[]>}
   */
  const videoRefs = useRef([]);

  const handleWhatsApp = () => {
    const phoneNumber = "6287780937884";
    const message = "Halo Green Fresh, saya ingin melihat katalog lengkap komoditas sayur super dan informasi penawaran kerja sama.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    if (typeof window !== 'undefined') {
      window.open(url, '_blank');
    }
  };

  useEffect(() => {
    // Memastikan video autoplay berjalan setelah hidrasi komponen
    videoRefs.current.forEach((video) => {
      // Pengecekan eksplisit untuk membungkam error 'never'
      if (video) {
        video.muted = true; 
        video.play().catch((err) => {
          console.log("Autoplay blocked or failed:", err);
        });
      }
    });
  }, []);

  return (
    <section className="py-12 lg:py-24 bg-white overflow-hidden font-sans text-left">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 lg:mb-16 gap-6">
          <div className="max-w-2xl text-center md:text-left">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center md:justify-start gap-2 mb-4"
            >
              <div className="w-8 h-[1px] bg-[#15803d]" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#15803d]">
                Visual Quality Control
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-serif italic text-[#052c17] leading-[1.1] tracking-tighter uppercase">
              Potret Nyata <span className="text-[#15803d] not-italic font-sans">Kesegaran Harian.</span>
            </h2>
          </div>
          <p className="text-slate-600 text-sm font-semibold max-w-xs italic md:text-right leading-relaxed border-r-0 md:border-r-2 border-green-200 pr-0 md:pr-6">
            "Dokumentasi autentik pengiriman sayur super dari kebun Cipanas langsung ke mitra Horeka kami."
          </p>
        </div>

        {/* 1. VIDEO REELS SECTION */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-8 mb-12 lg:mb-20">
          {(galleryData.videos || []).map((video, idx) => (
            <motion.div 
              key={`vid-${idx}`}
              whileHover={{ y: -8 }}
              className="relative aspect-[9/16] rounded-[1.5rem] lg:rounded-[2.5rem] overflow-hidden bg-slate-100 shadow-xl group cursor-pointer"
            >
              <video 
                ref={(el) => { 
                  if (el) {
                    // Paksa linter menerima assignment ini
                    (videoRefs.current)[idx] = el;
                  }
                }}
                src={optimizeCloudinaryVideo(video)}
                autoPlay 
                muted 
                loop 
                playsInline
                preload="auto"
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#052c17]/95 via-transparent to-transparent opacity-90 group-hover:opacity-60 transition-opacity" />
              
              <div className="absolute bottom-4 left-4 lg:bottom-8 lg:left-8 text-white z-10">
                <div className="flex items-center gap-2 mb-1 lg:mb-2">
                  <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center border border-white/40">
                    <Play size={12} fill="currentColor" className="ml-0.5" />
                  </div>
                  <span className="text-[8px] lg:text-[10px] font-black uppercase tracking-widest text-white">Live Report</span>
                </div>
                <p className="text-[10px] lg:text-sm font-serif italic font-bold text-white">Fresh Arrival Check</p>
              </div>

              <div className="absolute top-4 right-4 lg:top-6 lg:right-6">
                 <CheckCircle2 size={16} className="text-[#bef264] drop-shadow-md" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* 2. PHOTO MASONRY SECTION */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 lg:gap-6 space-y-3 lg:space-y-6">
          {(galleryData.images || []).map((img, idx) => (
            <motion.div 
              key={`img-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative break-inside-avoid rounded-2xl lg:rounded-[2rem] overflow-hidden group cursor-zoom-in shadow-md hover:shadow-2xl transition-all bg-slate-50 border border-slate-100"
            >
              <img 
                src={optimizeCloudinary(img, 600)}
                alt={`Dokumentasi kualitas sayur Green Fresh ke-${idx + 1}`}
                className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                loading="lazy"
                decoding="async"
              />
              
              <div className="absolute inset-0 bg-[#052c17]/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-xl border border-white/40 flex items-center justify-center mb-3">
                  <Camera className="text-white" size={24} />
                </div>
                <span className="text-[10px] font-black text-white uppercase tracking-widest">View Grade-A Details</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA BUTTON */}
        <div className="mt-12 lg:mt-20 text-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <button 
              onClick={handleWhatsApp}
              className="bg-[#052c17] hover:bg-[#15803d] text-white px-10 py-5 rounded-full shadow-2xl transition-all text-[11px] font-black uppercase tracking-[0.2em] inline-flex items-center gap-4 group cursor-pointer"
            >
              <ImageIcon size={18} className="text-[#bef264] group-hover:text-white transition-colors" /> 
              Katalog Lengkap Via WhatsApp
            </button>
          </motion.div>
          <p className="mt-6 text-[10px] uppercase font-black text-slate-600 tracking-widest">
            Update Harian: 25+ Komoditas Sayur Super
          </p>
        </div>
      </div>
    </section>
  );
};