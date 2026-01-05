import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight, Navigation } from 'lucide-react';

/**
 * @param {{ id?: string }} props
 */
export const MapsSection = ({ id = "lokasi" }) => {
  return (
    <section id={id} className="py-24 lg:py-32 bg-white overflow-hidden font-sans border-b-2 border-green-100 text-left">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
        
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* SISI KIRI: TEXT CONTENT */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-[#15803d] text-[10px] font-black uppercase tracking-[0.3em]"
              >
                <Navigation size={14} className="animate-pulse" /> Global Positioning
              </motion.div>
              
              <h2 className="text-5xl lg:text-6xl font-serif italic font-black text-[#052c17] leading-[1.1] tracking-tighter uppercase">
                Lokasi <br /> <span className="text-[#15803d] not-italic font-sans">Strategis Kami.</span>
              </h2>
              
              <p className="text-lg text-slate-700 font-normal leading-relaxed">
                Beroperasi dari titik presisi Sukatani untuk memastikan mata rantai distribusi sayuran tetap pendek, segar, dan efisien hingga ke tangan Anda.
              </p>
            </div>

            <div className="space-y-8">
              {/* Alamat Block */}
              <div className="group flex gap-6 p-8 bg-slate-50 rounded-[2rem] border border-slate-200 hover:border-green-300 hover:bg-white transition-all duration-500">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#15803d] shadow-sm group-hover:bg-[#15803d] group-hover:text-white transition-all border border-slate-100 shrink-0">
                  <MapPin size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-600 mb-2">Main Warehouse & Hub</h4>
                  <p className="text-[#052c17] font-bold text-lg leading-snug">
                    Kp Jl. Kayumanis, RT.04/RW.04, Sukatani, Kec. Cipanas, Kabupaten Cianjur, Jawa Barat 43253.
                  </p>
                </div>
              </div>

              {/* Koordinat & Action */}
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <a 
                  href="https://maps.app.goo.gl/YourActualGoogleMapsLink" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-4 bg-[#052c17] text-[#bef264] px-8 py-5 rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-[#15803d] hover:text-white transition-all group shadow-xl shadow-green-900/10"
                >
                  Buka Maps
                  <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
                
                <div className="flex items-center gap-4 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
                   <span>Lat: -6.7056</span>
                   <span className="w-1 h-1 bg-slate-300 rounded-full" aria-hidden="true" />
                   <span>Long: 107.0394</span>
                </div>
              </div>
            </div>
          </div>

          {/* SISI KANAN: VISUAL MAP WITH FRAME */}
          <div className="lg:col-span-7 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-[3rem] lg:rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(5,44,23,0.15)] aspect-square lg:aspect-auto lg:h-[700px] border-[12px] border-slate-100 bg-slate-50"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=YourActualEmbedLink" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }} 
                allowFullScreen={true} 
                title="Green Fresh Hub Location"
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover"
              ></iframe>

              {/* Label Posisi Kanan Atas */}
              <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-md px-6 py-3 rounded-2xl shadow-xl border border-slate-200 flex items-center gap-3 z-20">
                <div className="w-2 h-2 bg-[#15803d] rounded-full animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-[#052c17]">Live Distribution Hub</span>
              </div>
            </motion.div>

            {/* Elemen Dekorasi */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-green-50 rounded-full -z-10 opacity-50" aria-hidden="true" />
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-slate-50 rounded-full -z-10" aria-hidden="true" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default MapsSection;