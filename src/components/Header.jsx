import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, MapPin, Phone, 
  ChevronRight, Leaf, Pause, Play, 
  Building2, Briefcase, ShoppingBag,
  Globe, ShieldCheck
} from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  /** * PERBAIKAN: Memberikan string kosong "" sebagai alternatif null 
   * agar linter mendeteksi tipe data sebagai (string | null) secara otomatis.
   */
  const [activeMenu, setActiveMenu] = useState(""); 
  const [isPaused, setIsPaused] = useState(false);

  // KONFIGURASI WHATSAPP
  const waNumber = "6287780937884";
  const waText = "Halo Green Fresh, saya ingin melakukan pemesanan sayuran. Mohon informasi stok harian dan prosedur order untuk wilayah saya. Terima kasih.";
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(waText)}`;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tickerItems = [
    "FIXED PRICE KONTRAK 30 HARI",
    "SUPPLY CHAIN STANDAR AUDIT PANGAN",
    "KOMITMEN ZERO REJECTION RATE",
    "STABILITAS STOK SKALA TONASE",
    "PEMBAYARAN TOP (TERM OF PAYMENT)",
    "LEGALITAS SKU LENGKAP & PAJAK"
  ];

  return (
    <header role="banner" className="relative font-sans text-left">
      {/* 1. TOP TICKER */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div 
            initial={{ y: -40 }} animate={{ y: 0 }} exit={{ y: -40 }}
            className="fixed top-0 left-0 right-0 z-[110] bg-[#052c17] text-white h-9 flex items-center border-b border-white/5"
          >
            <div className="max-w-7xl mx-auto w-full px-6 flex items-center overflow-hidden">
              <button 
                onClick={() => setIsPaused(!isPaused)} 
                className="mr-4 opacity-50 hover:opacity-100 transition-opacity flex-shrink-0"
                aria-label={isPaused ? "Play ticker" : "Pause ticker"}
              >
                {isPaused ? <Play size={10} fill="currentColor" /> : <Pause size={10} fill="currentColor" />}
              </button>
              
              <div className="flex whitespace-nowrap overflow-hidden flex-1 relative items-center">
                <motion.div 
                  animate={isPaused ? {} : { x: ["0%", "-50%"] }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 60 }}
                  className="flex items-center gap-12 text-[9px] font-black uppercase tracking-[0.3em]"
                >
                  {[...Array(2)].map((_, i) => (
                    <div key={`ticker-group-${i}`} className="flex items-center gap-12">
                      {tickerItems.map((text, idx) => (
                        <span key={`ticker-${idx}`} className="flex items-center gap-4 text-white/80">
                          <span className="w-1 h-1 bg-[#bef264] rounded-full flex-shrink-0" />
                          {text}
                        </span>
                      ))}
                    </div>
                  ))}
                </motion.div>
              </div>

              <div className="hidden md:flex items-center gap-3 ml-6 pl-6 border-l border-white/10 text-[10px] font-bold flex-shrink-0">
                <Phone size={12} className="text-[#bef264]" />
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="hover:text-[#bef264] transition-colors uppercase tracking-widest">
                  Order Hotline
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. MAIN NAV */}
      <nav className={`fixed left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled 
            ? 'top-0 bg-white/90 backdrop-blur-xl shadow-2xl shadow-green-900/5 py-3' 
            : 'top-9 bg-white py-5 border-b border-slate-50'
        }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          <a href="/" className="flex items-center gap-3 group outline-none focus:ring-2 focus:ring-green-500 rounded-lg">
            <div className="w-10 h-10 bg-[#052c17] rounded-xl flex items-center justify-center transition-all group-hover:rotate-6 group-hover:bg-[#15803d]">
              <Leaf className="text-[#bef264] w-5 h-5" fill="currentColor" />
            </div>
            <span className="text-xl font-[1000] tracking-tighter text-[#052c17] leading-none uppercase">
              Green Fresh
            </span>
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-1">
            {[
              { label: 'Katalog', href: '/produk', icon: <ShoppingBag size={14} /> },
              { label: 'Kota', href: '/city', icon: <MapPin size={14} /> },
              { label: 'Area', href: '/area', icon: <Globe size={14} /> },
              { label: 'Gallery', href: '/gallery', icon: null },
              { label: 'About', href: '/about', icon: null },
            ].map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="px-4 py-2 text-[10px] font-black uppercase tracking-widest text-slate-600 hover:text-[#052c17] hover:bg-slate-50 rounded-full transition-all flex items-center gap-2 group/nav"
              >
                {item.icon && <span className="opacity-40 group-hover/nav:opacity-100 group-hover/nav:text-[#15803d]">{item.icon}</span>}
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-[#052c17] text-white px-7 py-3 rounded-full text-[9px] font-black uppercase tracking-widest hover:bg-[#15803d] transition-all shadow-xl shadow-green-900/10 active:scale-95"
            >
               Pesan Sekarang
            </a>
            
            <button 
              onClick={() => setActiveMenu(activeMenu === 'mobile' ? "" : 'mobile')}
              className="lg:hidden p-2 text-[#052c17] hover:bg-slate-50 rounded-xl transition-colors border border-slate-100"
              aria-label={activeMenu === 'mobile' ? "Tutup menu" : "Buka menu navigasi"}
              aria-expanded={activeMenu === 'mobile'}
            >
              {activeMenu === 'mobile' ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* 3. MOBILE MENU */}
      <AnimatePresence>
        {activeMenu === 'mobile' && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[120] bg-white lg:hidden flex flex-col"
          >
            <div className="p-6 flex items-center justify-between border-b border-slate-50">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-[#15803d]">Menu Utama</span>
              <button 
                onClick={() => setActiveMenu("")} 
                className="p-2 bg-slate-100 rounded-full"
                aria-label="Tutup menu navigasi"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-3">
              {[
                { label: 'Home', href: '/', icon: <Leaf size={18}/> },
                { label: 'Katalog Produk', href: '/produk', icon: <ShoppingBag size={18}/> },
                { label: 'Indeks Kota', href: '/city', icon: <MapPin size={18}/> },
                { label: 'Cakupan Area', href: '/area', icon: <Globe size={18}/> },
                { label: 'Quality Gallery', href: '/gallery', icon: <ShieldCheck size={18}/> },
                { label: 'Tentang Kami', href: '/about', icon: <Building2 size={18}/> },
              ].map((item) => (
                <a 
                  key={`mobile-nav-${item.label}`} 
                  href={item.href} 
                  onClick={() => setActiveMenu("")}
                  className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl text-[11px] font-black text-[#052c17] uppercase tracking-[0.2em] active:bg-green-100 transition-all"
                >
                  <div className="flex items-center gap-4 text-left">
                    <span className="text-[#15803d]">{item.icon}</span>
                    {item.label}
                  </div>
                  <ChevronRight size={16} className="text-slate-300" />
                </a>
              ))}
            </div>
            
            <div className="p-6 border-t border-slate-50 bg-slate-50/50">
              <a 
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-5 bg-[#052c17] text-white rounded-2xl flex items-center justify-center gap-3 font-black text-xs uppercase tracking-widest shadow-2xl"
              >
                <ShoppingBag size={18} className="text-[#bef264]" />
                Kiriman Pesanan (WA)
              </a>
            </div>
          </motion.div>
        )} 
      </AnimatePresence>
    </header>
  );
};