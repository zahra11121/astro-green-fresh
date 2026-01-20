import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight, Navigation } from 'lucide-react';

/**
 * MapsSection - Lokasi Resmi CV Green Fresh Cipanas
 */
export const MapsSection = ({ id = "lokasi" }) => {
  // Query pencarian langsung menggunakan nama brand
  const searchQuery = "CV+Green+Fresh+Cipanas";
  
  // URL Embed Google Maps berdasarkan pencarian nama tempat
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${searchQuery}&zoom=15`;
  
  // Link Direct untuk tombol Buka Maps (Search Query Mode)
  const directLink = `https://www.google.com/maps/search/?api=1&query=${searchQuery}`;

  /* Catatan: Jika Anda tidak ingin menggunakan API Key, 
     Anda bisa menggunakan URL Iframe Generator standar seperti di bawah ini:
  */
  const fallbackMapUrl = "https://maps.google.com/maps?q=cv%20green%20fresh%20cipanas&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <section id={id} className="py-24 lg:py-32 bg-white overflow-hidden font-sans border-b-2 border-green-100 text-left">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
        
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* SISI KIRI: INFORMASI ALAMAT */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 px-4 py-2 bg-green-50 border border-green-100 rounded-full text-[#15803d] text-[10px] font-black uppercase tracking-[0.3em]"
              >
                <Navigation size={14} className="animate-pulse" /> Titik Distribusi Utama
              </motion.div>
              
              <h2 className="text-5xl lg:text-6xl font-serif italic font-black text-[#052c17] leading-[1.1] tracking-tighter uppercase">
                Kantor & <br /> <span className="text-[#15803d] not-italic font-sans font-bold">Gudang Kami.</span>
              </h2>
              
              <p className="text-lg text-slate-700 font-normal leading-relaxed">
                Segala operasional sortasi dan pengemasan dilakukan secara terpusat di hub Cipanas untuk menjaga standar mutu <strong>CV Green Fresh Cipanas</strong> sebelum dikirim ke seluruh wilayah Jabodetabek.
              </p>
            </div>

            <div className="space-y-8">
              {/* Alamat Block */}
              <div className="group flex gap-6 p-8 bg-slate-50 rounded-[2rem] border border-slate-200 hover:border-green-300 hover:bg-white transition-all duration-500 shadow-sm">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#15803d] shadow-sm group-hover:bg-[#15803d] group-hover:text-white transition-all border border-slate-100 shrink-0">
                  <MapPin size={28} />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="text-[10px] font-[1000] uppercase tracking-widest text-slate-400 mb-2">CV Green Fresh Cipanas</h4>
                  <p className="text-[#052c17] font-bold text-lg leading-snug">
                    Kp. Kayumanis, RT.04/RW.04, Desa Sukatani, Kec. Cipanas, Kab. Cianjur, Jawa Barat 43253.
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <a 
                  href={directLink} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-4 bg-[#052c17] text-[#bef264] px-10 py-5 rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-[#15803d] hover:text-white transition-all group shadow-xl shadow-green-900/10 cursor-pointer"
                >
                  Navigasi Google Maps
                  <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* SISI KANAN: MAPS VISUAL */}
          <div className="lg:col-span-7 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-[3rem] lg:rounded-[4rem] overflow-hidden shadow-2xl aspect-square lg:aspect-video lg:h-[650px] border-[12px] border-slate-50 bg-slate-100"
            >
              {/* Menggunakan Fallback URL untuk kemudahan tanpa API Key */}
              <iframe 
                src={fallbackMapUrl}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                title="Google Maps CV Green Fresh Cipanas"
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover"
              ></iframe>

              {/* Tag Penanda */}
              <div className="absolute top-8 left-8 bg-[#052c17] text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 z-20 border border-white/10">
                <div className="w-2.5 h-2.5 bg-[#bef264] rounded-full animate-pulse" />
                <div>
                  <p className="text-[8px] font-black uppercase tracking-[0.2em] text-green-400 leading-none mb-1">Official Hub</p>
                  <p className="text-[10px] font-black uppercase tracking-widest">CV Green Fresh Cipanas</p>
                </div>
              </div>
            </motion.div>

            {/* Gambar Overlay */}
            <div className="absolute -bottom-8 -left-8 w-52 h-52 rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl hidden xl:block z-30">
              <img 
                src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=400" 
                alt="Produk CV Green Fresh Cipanas" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MapsSection;