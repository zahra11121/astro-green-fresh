import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, MapPin, Building2, CheckCircle2, TrendingUp, Zap
} from 'lucide-react';

export default function ProfileClientContent() {
  // Deklarasi di dalam fungsi komponen untuk bypass strict linter global
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const stats = [
    { label: "Mitra Petani", value: "200+", icon: <Users size={18} /> },
    { label: "Kapasitas Harian", value: "10 Ton", icon: <TrendingUp size={18} /> },
    { label: "Jangkauan", value: "Jabodetabek", icon: <MapPin size={18} /> },
    { label: "Ketepatan Waktu", value: "100%", icon: <Zap size={18} /> },
  ];

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="px-6 lg:px-20 mb-24 text-left">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <motion.div 
              className="lg:col-span-7 space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-2 text-[#15803d]">
                 <div className="h-[1px] w-8 bg-[#15803d]"></div>
                 <span className="text-[10px] font-black uppercase tracking-[0.3em]">Profil Perusahaan</span>
              </motion.div>
              
              <motion.h1 
                variants={fadeInUp}
                className="text-4xl lg:text-5xl font-serif italic text-[#052c17] leading-[1.2] tracking-tight uppercase"
              >
                Dedikasi untuk Kesegaran <br /> 
                <span className="font-medium text-slate-600 block mt-1 italic text-3xl lg:text-4xl">Dari Bumi Cipanas.</span>
              </motion.h1>

              <motion.p 
                variants={fadeInUp}
                className="text-lg text-slate-700 font-normal max-w-xl leading-relaxed"
              >
                CV. Green Fresh Cipanas hadir sebagai mitra strategis pengadaan hasil bumi yang mengedepankan integritas dan transparansi untuk sektor industri modern.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 pt-2">
                 <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 border border-slate-200 rounded-full text-[10px] font-black text-slate-700 uppercase tracking-wider">
                    <Building2 size={12} /> Entitas PKP Resmi
                 </div>
                 <div className="flex items-center gap-2 px-4 py-2 bg-green-100 border border-green-200 rounded-full text-[10px] font-black text-[#15803d] uppercase tracking-wider">
                    <CheckCircle2 size={12} /> Compliance Terjamin
                 </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="lg:col-span-5 grid grid-cols-2 gap-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {stats.map((stat, i) => (
                <motion.div 
                  key={`stat-${i}`} 
                  variants={fadeInUp}
                  className="p-6 bg-white border border-slate-200 rounded-3xl shadow-sm group hover:border-[#15803d]/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-[#15803d] group-hover:text-white transition-all mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-serif italic font-bold text-[#052c17]">{stat.value}</div>
                  <div className="text-[9px] font-black uppercase tracking-widest text-slate-600 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. CORE PHILOSOPHY */}
      <section className="py-24 bg-[#052c17] rounded-[2.5rem] lg:rounded-[4rem] mx-4 lg:mx-8 overflow-hidden mb-24 text-left">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl lg:text-4xl font-serif italic text-white leading-tight uppercase">
                Kualitas yang <br /> <span className="text-[#bef264]">Dapat Diandalkan.</span>
              </h2>
              <div className="space-y-6">
                {[
                  { t: "Lahan Produktif", d: "Akses ke 200 hektar area tanam lokal pilihan di Cipanas." },
                  { t: "Standar Industri", d: "Sistem sortasi Grade-A untuk menjaga standar kualitas klien." },
                  { t: "Logistik Terukur", d: "Distribusi efisien untuk menjaga kesegaran hingga ke pintu gudang." }
                ].map((item, i) => (
                  <div key={`phi-${i}`} className="flex gap-4 border-l border-white/20 pl-6 py-2">
                    <div>
                      <h4 className="text-[#bef264] font-black text-xs uppercase tracking-widest mb-1">{item.t}</h4>
                      <p className="text-white/80 text-sm font-normal leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-10 rounded-[3rem]">
              <div className="text-[#bef264] mb-6 inline-block">
                <CheckCircle2 size={32} strokeWidth={2} />
              </div>
              <p className="text-xl font-serif italic text-white leading-relaxed">
                "Visi kami adalah menjadi jembatan terpercaya antara kekayaan alam Cipanas dengan kebutuhan pangan modern yang higienis."
              </p>
              <div className="mt-8 pt-6 border-t border-white/20 text-[9px] text-white/70 font-black uppercase tracking-[0.3em]">
                Green Fresh Cipanas • Est. 2019
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}