import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Building, Coffee, Utensils, Hotel, Home, Store, Users, Briefcase } from 'lucide-react';

export const DistrictTarget = ({ district }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Icon mapping yang lebih variatif
  const getIcon = (clientType, index) => {
    const icons = [
      <Building className="w-6 h-6 md:w-7 md:h-7" />,
      <Coffee className="w-6 h-6 md:w-7 md:h-7" />,
      <Utensils className="w-6 h-6 md:w-7 md:h-7" />,
      <Hotel className="w-6 h-6 md:w-7 md:h-7" />,
      <Home className="w-6 h-6 md:w-7 md:h-7" />,
      <Store className="w-6 h-6 md:w-7 md:h-7" />,
      <Users className="w-6 h-6 md:w-7 md:h-7" />,
      <Briefcase className="w-6 h-6 md:w-7 md:h-7" />
    ];
    
    const type = clientType.toLowerCase();
    if (type.includes('restoran') || type.includes('dining')) return icons[2];
    if (type.includes('cafe') || type.includes('coffee')) return icons[1];
    if (type.includes('hotel')) return icons[3];
    if (type.includes('warung') || type.includes('rumah makan')) return icons[4];
    if (type.includes('mall') || type.includes('store')) return icons[5];
    if (type.includes('catering') || type.includes('corporate') || type.includes('office')) return icons[7];
    
    return icons[index % icons.length];
  };

  const colorVariants = [
    { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-100', activeBg: 'from-blue-700 to-blue-900' },
    { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-100', activeBg: 'from-green-700 to-green-900' },
    { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-100', activeBg: 'from-purple-700 to-purple-900' },
    { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-100', activeBg: 'from-orange-700 to-orange-900' },
    { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-100', activeBg: 'from-rose-700 to-rose-900' },
    { bg: 'bg-cyan-50', text: 'text-cyan-700', border: 'border-cyan-100', activeBg: 'from-cyan-700 to-cyan-900' }
  ];

  const clients = district?.clientFocus?.split(', ') || [];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white font-sans text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-green-50 border border-green-200 rounded-full">
              <div className="w-2 h-2 rounded-full bg-[#15803d] animate-pulse" />
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#15803d]">Client Segments</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-[1000] text-[#052c17] tracking-tighter leading-tight uppercase">
              Spesialisasi <span className="text-[#15803d]">Layanan.</span>
            </h2>
            
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto font-medium">
              Fokus melayani berbagai segmen bisnis kuliner di {district?.name || 'wilayah jangkauan'}
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {clients.map((client, index) => {
            const isActive = activeIndex === index;
            const colors = colorVariants[index % colorVariants.length];
            const icon = getIcon(client, index);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                onClick={() => setActiveIndex(isActive ? null : index)}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                className={`group relative rounded-xl md:rounded-3xl transition-all duration-500 cursor-pointer h-full flex flex-col overflow-hidden
                  ${isActive 
                    ? `bg-gradient-to-br ${colors.activeBg} shadow-2xl scale-[1.02]` 
                    : `bg-white border ${colors.border} shadow-sm hover:shadow-lg`
                  }`}
              >
                <div className="p-5 md:p-8 flex flex-col flex-1 relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-3 rounded-xl md:rounded-2xl transition-all duration-300
                      ${isActive ? 'bg-white/20 text-white' : `${colors.bg} ${colors.text}`}`}
                    >
                      {icon}
                    </div>
                    <span className={`text-2xl md:text-4xl font-black transition-colors duration-300
                      ${isActive ? 'text-white/20' : 'text-slate-100'}`}
                    >
                      0{index + 1}
                    </span>
                  </div>

                  <div className="space-y-3 flex-1">
                    <h3 className={`text-sm md:text-lg font-black leading-tight transition-colors duration-300 uppercase
                      ${isActive ? 'text-white' : 'text-[#052c17]'}`}
                    >
                      {client}
                    </h3>
                    
                    <div className={`h-1 w-8 transition-all duration-300 rounded-full
                      ${isActive ? 'bg-white/60' : colors.text.replace('text', 'bg')}`} 
                    />
                    
                    <p className={`text-xs md:text-sm leading-relaxed transition-colors duration-300 font-medium
                      ${isActive ? 'text-white/90' : 'text-slate-600'}`}
                    >
                      {`Supply chain khusus untuk pengadaan komoditas ${client.toLowerCase()} skala B2B.`}
                    </p>
                  </div>

                  <div className={`mt-6 pt-4 border-t flex items-center justify-between transition-colors duration-300
                    ${isActive ? 'border-white/20' : 'border-slate-100'}`}
                  >
                    <span className={`text-[9px] md:text-[10px] font-black uppercase tracking-widest
                      ${isActive ? 'text-white/80' : colors.text}`}
                    >
                      Expert Support
                    </span>
                    <ArrowUpRight className={`transition-all duration-300 w-4 h-4 md:w-5 md:h-5
                      ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Summary Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-20 p-6 bg-slate-50 border border-slate-200 rounded-3xl"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="text-center">
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Total Segments</p>
              <p className="text-3xl font-black text-[#15803d]">{clients.length}</p>
            </div>
            <div className="hidden sm:block h-10 w-px bg-slate-200" />
            <div className="text-center">
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Service Tier</p>
              <p className="text-3xl font-black text-[#052c17]">Enterprise</p>
            </div>
            <div className="hidden sm:block h-10 w-px bg-slate-200" />
            <div className="text-center">
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Active Area</p>
              <p className="text-xl font-bold text-slate-700">{district?.name}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};