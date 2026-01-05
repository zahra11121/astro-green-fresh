import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, CheckSquare, BadgeCheck, Zap, ShieldCheck } from 'lucide-react';

export const QualityGuarantee = () => {
  // State untuk interaktivitas hover/click di browser
  const [activeItem, setActiveItem] = useState(null);

  const items = [
    { 
      id: 'return',
      icon: <RotateCcw size={22} />, 
      title: "INSTANT RETURN", 
      desc: "Kebijakan tolak & tukar barang langsung di lokasi jika kualitas tidak sesuai standar." 
    },
    { 
      id: 'qc',
      icon: <CheckSquare size={22} />, 
      title: "DAILY QC", 
      desc: "Sortasi manual setiap subuh menjamin grade-A sebelum proses loading." 
    },
    { 
      id: 'price',
      icon: <BadgeCheck size={22} />, 
      title: "PRICE GUARD", 
      desc: "Stabilitas harga kontrak hingga 30 hari untuk efisiensi budget operasional." 
    },
    { 
      id: 'logistics',
      icon: <Zap size={22} />, 
      title: "EXPRESS LOGISTICS", 
      desc: "Armada berpendingin yang menjamin rantai dingin tidak terputus hingga dapur Anda." 
    }
  ];

  // Duplikasi item untuk efek slider tanpa celah (seamless)
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <section className="py-20 bg-[#f8fafc] overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-5 mb-12 text-center lg:text-left">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 text-left">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 justify-start"
            >
              <span className="w-8 h-[2px] bg-[#15803d]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#15803d]">Our Commitment</span>
            </motion.div>
            <h2 className="text-4xl lg:text-6xl font-[1000] text-[#052c17] tracking-tighter leading-none uppercase">
              JAMINAN <span className="text-[#64748b]">KUALITAS.</span>
            </h2>
          </div>
          <p className="text-[#334155] text-sm max-w-sm font-bold leading-relaxed italic text-left border-l-4 border-green-500/20 pl-4">
            "Nol risiko operasional bagi mitra B2B kami melalui standarisasi ketat setiap hari."
          </p>
        </div>
      </div>

      {/* INFINITE SLIDER */}
      <div className="relative flex overflow-hidden py-10">
        <motion.div 
          className="flex gap-6 pr-6"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ 
            ease: "linear", 
            duration: 25, 
            repeat: Infinity 
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {duplicatedItems.map((item, i) => {
            const isNyala = activeItem === i;

            return (
              <div 
                key={i}
                onClick={() => setActiveItem(isNyala ? null : i)}
                onMouseEnter={() => setActiveItem(i)}
                onMouseLeave={() => setActiveItem(null)}
                className={`w-[280px] lg:w-[400px] flex-shrink-0 p-8 rounded-[2rem] transition-all duration-500 cursor-pointer text-left
                  ${isNyala 
                    ? 'bg-white border-[#15803d] shadow-2xl shadow-green-900/10 scale-[1.02]' 
                    : 'bg-white border-slate-200 shadow-xl shadow-slate-200/40 scale-100'
                  } border`}
              >
                <div className="flex items-start gap-5 lg:gap-6">
                  <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-inner
                    ${isNyala 
                      ? 'bg-[#15803d] text-white rotate-6' 
                      : 'bg-green-50 text-[#15803d] rotate-0'
                    }`}
                  >
                    {item.icon}
                  </div>

                  <div className="flex-1 space-y-3">
                    <p className={`font-black text-[13px] lg:text-sm tracking-widest uppercase transition-colors duration-500
                      ${isNyala ? 'text-[#15803d]' : 'text-[#052c17]'}`}>
                      {item.title}
                    </p>
                    
                    <div className={`h-1 transition-all duration-500 rounded-full
                      ${isNyala ? 'w-full bg-[#15803d]' : 'w-8 bg-green-100'}`} 
                    />
                    
                    <p className={`text-[12px] leading-relaxed font-semibold transition-colors duration-500
                      ${isNyala ? 'text-slate-800' : 'text-slate-600'}`}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Gradient Overlay untuk efek memudar di tepi */}
        <div className="absolute inset-y-0 left-0 w-16 lg:w-32 bg-gradient-to-r from-[#f8fafc] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 lg:w-32 bg-gradient-to-l from-[#f8fafc] to-transparent z-10 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-5 mt-6 lg:mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 bg-white px-6 py-3 rounded-full border border-slate-200 shadow-sm"
        >
          <ShieldCheck size={18} className="text-[#15803d]" />
          <p className="text-[10px] font-black text-[#052c17] uppercase tracking-widest">
            Certified B2B Supplier Standard
          </p>
        </motion.div>
        
        <div className="text-[9px] font-black text-[#64748b] uppercase tracking-[0.4em]">
          Automated QC System • v.2.5
        </div>
      </div>
    </section>
  );
};