import React from 'react';
import { motion } from "framer-motion";
// PERBAIKAN: Gunakan path relatif untuk menjamin file ditemukan oleh Vite di Windows
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { 
  Users, ShieldCheck, MapPin, 
  CheckCircle2, Building2, Truck, ChevronRight 
} from 'lucide-react';

export default function ProfilePage() {
  const stats = [
    { label: "Petani Mitra", value: "200+", icon: <Users size={20} /> },
    { label: "Kapasitas Harian", value: "10 Ton", icon: <Truck size={20} /> },
    { label: "Titik Distribusi", value: "Jabodetabek", icon: <MapPin size={20} /> },
    { label: "SLA Fulfillment", value: "100%", icon: <ShieldCheck size={20} /> },
  ];

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-green-100 selection:text-[#052c17] overflow-x-hidden">
      <Header />

      <main className="pt-24 lg:pt-32">
        {/* 1. HERO PROFILE */}
        <section className="px-6 lg:px-20 py-16 lg:py-24 border-b-2 border-green-100 relative">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-50/50 rounded-full blur-[120px] -z-10 pointer-events-none" aria-hidden="true" />
          
          <div className="max-w-[1800px] mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              <div className="lg:col-span-7 space-y-6">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-3 px-4 py-2 bg-[#f7faf7] border-2 border-green-100 rounded-full text-[#15803d] text-[10px] font-black uppercase tracking-[0.3em]"
                >
                  <Building2 size={14} /> Corporate Profile
                </motion.div>
                
                <h1 className="text-5xl lg:text-9xl font-serif italic font-black text-[#052c17] leading-[0.9] tracking-tighter uppercase">
                  Otoritas <br /> <span className="text-[#15803d] not-italic font-sans">Suplai.</span>
                </h1>
                
                <p className="text-lg lg:text-3xl text-slate-600 font-medium leading-relaxed max-w-2xl border-l-4 border-green-500/30 pl-6 lg:pl-8 italic">
                  "Menghubungkan stabilitas retail modern dengan ekosistem agrikultur dataran tinggi melalui presisi logistik fajar."
                </p>
              </div>
              
              <div className="lg:col-span-5">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, i) => (
                    <div key={i} className="p-8 bg-[#f7faf7] rounded-[2rem] border-2 border-green-100 hover:bg-white hover:shadow-xl transition-all duration-500 group">
                      <div className="text-[#15803d] mb-4 group-hover:scale-110 transition-transform">{stat.icon}</div>
                      <h3 className="text-3xl font-serif italic font-black text-[#052c17]">{stat.value}</h3>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-600 mt-2">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. CORE VALUES */}
        <section className="py-16 lg:py-24 bg-white border-b-2 border-green-100 relative overflow-hidden">
          <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl lg:text-7xl font-serif italic font-black text-[#052c17] leading-[1] tracking-tighter uppercase">
                  Mengapa <br /> <span className="text-[#15803d] not-italic font-sans">Memilih Kami?</span>
                </h2>
                <div className="space-y-4">
                  {[
                    "Kemitraan langsung dengan 200+ petani tanpa makelar.",
                    "Standar sortasi ketat (Grade A) spesifikasi Horeka.",
                    "Skema pembayaran Term of Payment (TOP) fleksibel.",
                    "Legalitas lengkap (CV, NPWP PKP, Izin Agrikultur)."
                  ].map((list, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-8 h-8 rounded-full border-2 border-green-200 flex items-center justify-center bg-green-50 group-hover:bg-[#15803d] transition-colors duration-500">
                        <CheckCircle2 size={14} className="text-[#15803d] group-hover:text-white" />
                      </div>
                      <span className="text-base lg:text-lg font-bold text-slate-700 tracking-tight">{list}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#f7faf7] border-2 border-green-100 p-10 lg:p-16 rounded-[3rem] space-y-6 shadow-sm">
                <h4 className="text-[#14532d] font-black uppercase tracking-[0.4em] text-[10px]">Visi Korporasi</h4>
                <p className="text-2xl lg:text-4xl font-serif italic text-[#052c17] leading-tight">
                  "Menjadi tulang punggung ketahanan pangan retail modern dengan memuliakan martabat petani lokal."
                </p>
                <div className="pt-6 border-t border-green-200">
                  <p className="text-slate-600 text-[10px] uppercase font-black tracking-widest leading-relaxed">
                    CV. Green Fresh Cipanas <br /> High-Altitude Supply Authority
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. LOGISTIC STRENGTH */}
        <section className="py-16 lg:py-24 px-6 md:px-12 lg:px-20 border-b-2 border-green-100 bg-[#fcfdfc]">
          <div className="max-w-[1800px] mx-auto">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24">
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-[3rem] lg:rounded-[4rem] overflow-hidden border-2 border-green-100 shadow-2xl aspect-square lg:aspect-video group">
                  <img 
                    src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=2000" 
                    alt="Infrastruktur Logistik Rantai Dingin Green Fresh" 
                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 via-transparent to-transparent opacity-60" aria-hidden="true" />
                </div>
              </div>
              <div className="w-full lg:w-1/2 space-y-8">
                <h3 className="text-4xl lg:text-7xl font-serif italic font-black text-[#052c17] leading-[0.9] tracking-tighter uppercase">
                  Logistik <br /> <span className="text-[#15803d] not-italic font-sans">Mandiri.</span>
                </h3>
                <p className="text-lg lg:text-xl text-slate-700 font-normal leading-relaxed">
                  Kami mengelola armada distribusi secara mandiri untuk memastikan jadwal pengiriman fajar (sebelum jam 07:00 pagi) terpenuhi secara konsisten di wilayah Jabodetabek.
                </p>
                <div className="p-8 bg-white rounded-3xl border-2 border-green-100 italic font-serif text-[#14532d] text-lg lg:text-xl shadow-sm">
                  "Kontrol penuh atas rantai pasok dingin, meminimalkan penyusutan (waste) di sisi klien."
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. FINAL CTA */}
        <section className="py-20 lg:py-32 px-6">
          <div className="max-w-[1200px] mx-auto bg-[#f7faf7] border-2 border-green-100 rounded-[3rem] lg:rounded-[5rem] p-12 lg:p-24 text-center space-y-8 shadow-sm">
            <h2 className="text-4xl lg:text-8xl font-serif italic font-black text-[#052c17] leading-none tracking-tighter uppercase">
              Siap Menjalin <br /> <span className="text-[#15803d] not-italic font-sans">Kemitraan?</span>
            </h2>
            <p className="text-lg lg:text-xl text-slate-600 max-w-xl mx-auto font-black uppercase tracking-widest">
              Akses Katalog B2B & Company Profile
            </p>
            <button className="px-12 py-6 bg-[#052c17] text-[#bef264] rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] hover:bg-[#15803d] hover:text-white transition-all shadow-2xl flex items-center gap-3 mx-auto group">
              Unduh Profile PDF
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}