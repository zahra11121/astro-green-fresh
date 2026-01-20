import React from 'react';
import { Mail, Phone, MapPin, Globe, Leaf, Zap, ChevronRight, ShoppingBag, ShieldCheck, Map } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const waNumber = "6287780937884";
  const waText = "Halo Green Fresh, saya tertarik untuk menjalin kemitraan supply sayuran. Mohon informasi katalog harga terbaru dan sistem pembayarannya. Terima kasih.";
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(waText)}`;

  return (
    <footer className="bg-[#052c17] text-white pt-20 overflow-hidden font-sans">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* SECTION 1: CORE BRANDING & NAV */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          <div className="lg:col-span-5 space-y-10">
            <a href="/" className="flex items-center gap-3 group outline-none focus:ring-2 focus:ring-[#bef264]" aria-label="Green Fresh Home">
              <div className="w-12 h-12 bg-[#16a34a] rounded-2xl flex items-center justify-center transition-all group-hover:bg-[#bef264] group-hover:rotate-12 shadow-2xl">
                <Leaf className="text-white group-hover:text-[#052c17] w-6 h-6" aria-hidden="true" fill="currentColor" />
              </div>
              <span className="text-2xl font-[1000] tracking-tighter uppercase">
                Green<span className="text-[#22c55e] group-hover:text-[#bef264]">Fresh</span>
              </span>
            </a>
            
            <h2 className="text-4xl lg:text-6xl font-black leading-[0.95] tracking-[-0.05em] uppercase">
              Rantai Pasok <br />
              <span className="text-[#22c55e]">Terintegrasi.</span>
            </h2>
            
            <div className="flex flex-wrap gap-4">
              <div className="px-5 py-2.5 bg-white/10 border border-white/10 rounded-xl flex items-center gap-3 backdrop-blur-sm">
                <div className="w-2 h-2 bg-[#bef264] rounded-full animate-pulse" aria-hidden="true" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">PKP Official</span>
              </div>
              <div className="px-5 py-2.5 bg-[#22c55e] rounded-xl flex items-center gap-3 shadow-lg">
                <Zap size={14} className="text-[#052c17]" aria-hidden="true" fill="currentColor" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#052c17]">High Capacity</span>
              </div>
            </div>
          </div>

          {/* Navigation Box */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12 text-left">
            <nav className="space-y-8" aria-label="Sitemap Footer">
              <div className="inline-block border-b-2 border-[#22c55e] pb-2">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#bef264]">Sitemap</p>
              </div>
              <ul className="space-y-4">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'Katalog Produk', path: '/produk' },
                  { name: 'Quality Gallery', path: '/gallery' },
                  { name: 'Tentang Kami', path: '/about' }
                ].map((item) => (
                  <li key={item.name}>
                    <a href={item.path} className="text-sm font-bold text-slate-100 hover:text-[#bef264] transition-all flex items-center gap-2 group outline-none focus:text-[#bef264]">
                      <ChevronRight size={14} className="text-[#22c55e] opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" aria-hidden="true" />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav className="space-y-8" aria-label="Layanan Wilayah">
              <div className="inline-block border-b-2 border-[#22c55e] pb-2">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#bef264]">Wilayah Layanan</p>
              </div>
              <ul className="space-y-4">
                <li>
                  <a href="/kota" className="text-sm font-bold text-slate-100 hover:text-[#bef264] flex items-center gap-2">
                    <Map size={14} className="text-[#22c55e]" aria-hidden="true" />
                    Index Kota Besar
                  </a>
                </li>
                <li>
                  <a href="/area" className="text-sm font-bold text-slate-100 hover:text-[#bef264] flex items-center gap-2">
                    <Globe size={14} className="text-[#22c55e]" aria-hidden="true" />
                    Index Area & Distrik
                  </a>
                </li>
              </ul>
            </nav>

            <div className="space-y-8">
              <div className="inline-block border-b-2 border-[#22c55e] pb-2">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#bef264]">Inquiry</p>
              </div>
              <div className="space-y-6">
                <a href="mailto:sales@greenfresh.co.id" className="group block space-y-1 outline-none focus:ring-1 focus:ring-[#bef264]">
                  <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest block">Email</span>
                  <span className="text-sm font-black text-white group-hover:text-[#bef264] break-all">
                    sales@greenfresh.co.id
                  </span>
                </a>
                <a 
                  href={waLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group block space-y-1 outline-none focus:ring-1 focus:ring-[#bef264]"
                  aria-label="Hubungi kami melalui WhatsApp (Membuka jendela baru)"
                >
                  <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest block">WhatsApp</span>
                  <span className="text-sm font-black text-white group-hover:text-[#bef264]">
                    0877 8093 7884
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: BRAND VALUE CARD */}
        <section className="bg-white/5 rounded-[2.5rem] p-8 lg:p-12 border border-white/10 mb-20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity translate-x-10" aria-hidden="true">
            <ShieldCheck size={200} />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
            {[
              { icon: ShoppingBag, title: "B2B Catalog", desc: "Akses lebih dari 70 jenis komoditas sayuran grade A harian melalui portal produk kami." },
              { icon: MapPin, title: "Network Coverage", desc: "Distribusi menjangkau seluruh area strategis, distrik komersial, dan pusat bisnis Jabodetabek." },
              { icon: ShieldCheck, title: "Standard Quality", desc: "Sistem kontrol kualitas ketat untuk memastikan zero rejection rate pada setiap pengiriman." },
              { icon: Globe, title: "Operational Base", desc: "Pusat logistik utama berlokasi di Sukatani, Cipanas, menjamin kesegaran tangan pertama." }
            ].map((card, i) => (
              <div key={i} className="space-y-4">
                <div className="w-10 h-10 bg-[#22c55e]/20 rounded-xl flex items-center justify-center">
                  <card.icon size={20} className="text-[#22c55e]" aria-hidden="true" />
                </div>
                <h3 className="font-black text-sm uppercase tracking-widest text-[#bef264]">{card.title}</h3>
                <p className="text-xs text-slate-100 leading-relaxed opacity-90">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: BOTTOM BAR */}
        <div className="pb-12 flex flex-col md:flex-row justify-between items-center gap-10 border-t border-white/10 pt-12">
          <div className="text-center md:text-left">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#bef264]">
              CV Green Fresh Cipanas © {currentYear}
            </p>
            <p className="text-[9px] font-medium text-slate-200 uppercase tracking-widest mt-2">Official Partner Procurement 2026</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden sm:block text-right">
                <p className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-300 leading-none mb-1">Standardized</p>
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Logistics B2B</p>
            </div>
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-xl shadow-green-900/20">
                <Leaf className="text-[#052c17] w-6 h-6" aria-hidden="true" fill="currentColor" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-3 w-full" aria-hidden="true">
        <div className="bg-[#22c55e] flex-1" />
        <div className="bg-[#bef264] flex-1" />
        <div className="bg-white flex-1" />
      </div>
    </footer>
  );
};