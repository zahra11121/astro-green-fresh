import { motion } from 'framer-motion';
import { ArrowUpRight, Leaf } from 'lucide-react';

export const SectorTarget = () => {
  const sectors = [
    { 
      title: 'Hotels & Resorts', 
      desc: 'Suplai harian standar audit pangan internasional.',
      img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800'
    },
    { 
      title: 'Fine Dining', 
      desc: 'Presisi sortasi tinggi untuk plating eksotik.',
      img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800'
    },
    { 
      title: 'Industrial Catering', 
      desc: 'Stabilitas harga kontrak & kapasitas besar.',
      img: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800'
    },
    { 
      title: 'Modern Retail', 
      desc: 'Standardisasi kemasan retail-ready & higienis.',
      img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800'
    },
  ];

  return (
    <section className="bg-white overflow-hidden font-sans py-4 lg:py-8">
      <div className="max-w-[1800px] mx-auto px-3 md:px-10">
        
        {/* Grid Sektor: 2 kolom mobile, Tinggi lebih compact */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-0 lg:border lg:border-slate-100 lg:rounded-[2.5rem] lg:overflow-hidden">
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-5 lg:p-8 overflow-hidden flex flex-col justify-between h-[240px] md:h-[300px] lg:h-[420px] rounded-2xl lg:rounded-none group"
            >
              {/* Background Image: Tajam & Jelas */}
              <div className="absolute inset-0 z-0 bg-[#052c17]">
                <img 
                  src={sector.img} 
                  alt={sector.title}
                  className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay Scrim: Gradasi Gelap agar Teks Putih Tajam */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
              </div>

              {/* Content Area */}
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xl lg:text-3xl font-black text-white/20">
                    0{index + 1}
                  </span>
                  <div className="p-2 rounded-xl bg-[#bef264] text-[#052c17] shadow-lg">
                    <Leaf size={14} fill="currentColor" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h2 className="text-sm lg:text-2xl font-black leading-tight tracking-tighter text-white uppercase drop-shadow-md">
                    {sector.title}
                  </h2>
                  <p className="text-[10px] lg:text-sm font-bold leading-snug text-slate-200 line-clamp-2">
                    {sector.desc}
                  </p>
                </div>
              </div>

              {/* Footer Area */}
              <div className="relative z-10 flex items-center justify-end">
                <ArrowUpRight size={18} className="text-[#bef264] drop-shadow-md" />
              </div>

              {/* Divider Vertikal Desktop (Soft) */}
              {index !== sectors.length - 1 && (
                <div className="hidden lg:block absolute top-10 right-0 w-px h-[calc(100%-5rem)] bg-white/10 z-20" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};