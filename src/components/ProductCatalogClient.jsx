import React, { useState, useMemo } from 'react';
import { motion } from "framer-motion";
import { Search as SearchIcon, CheckCircle2 as CheckIcon, Leaf } from 'lucide-react';

/**
 * @param {{ initialData: Array<{name: string, image: string}> }} props
 */
export default function ProductCatalogClient({ initialData = [] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");

  const categories = ["Semua", "Daun", "Umbi", "Bumbu", "Jamur", "Lainnya"];

  const filteredProducts = useMemo(() => {
    const data = Array.isArray(initialData) ? initialData : [];
    return data.filter((item) => {
      const name = (item?.name || "").toLowerCase();
      const matchesSearch = name.includes(searchTerm.toLowerCase());
      
      let category = "Lainnya";
      if (name.match(/sawi|bayam|selada|kangkung|daun|kale|pakcoy/)) category = "Daun";
      if (name.match(/kentang|wortel|ubi|singkong|lobak|bit|bengkuang|talas/)) category = "Umbi";
      if (name.match(/bawang|cabai|jahe|kunyit|lengkuas|serai|kecombrang/)) category = "Bumbu";
      if (name.includes('jamur')) category = "Jamur";

      return matchesSearch && (activeCategory === "Semua" || category === activeCategory);
    });
  }, [searchTerm, activeCategory, initialData]);

  return (
    <>
      <section className="pt-32 pb-16 bg-white border-b border-green-50 relative">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-[#15803d] text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">
              B2B Fresh Supply Partner
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif italic text-[#052c17] leading-tight md:leading-[0.9] tracking-tighter mb-8">
              Katalog <span className="not-italic font-sans font-bold text-[#15803d]">Komoditas.</span>
            </h1>
            
            <div className="flex flex-col md:flex-row gap-4 mt-8 md:mt-12 bg-white p-2 rounded-3xl md:rounded-[2rem] shadow-xl shadow-green-900/5 border border-green-50">
              <div className="relative flex-1">
                <SearchIcon className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input 
                  type="text"
                  placeholder="Cari sayuran segar..."
                  className="w-full pl-14 pr-6 py-3 md:py-4 rounded-full bg-transparent focus:outline-none text-base md:text-lg text-[#052c17]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 md:px-6 py-2 rounded-full text-[10px] md:text-xs font-bold transition-all duration-300 ${
                    activeCategory === cat 
                    ? "bg-[#052c17] text-white shadow-lg shadow-green-900/20" 
                    : "bg-green-50 text-[#15803d] hover:bg-green-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 lg:py-24">
        <div className="max-w-[1450px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-12 gap-x-4 md:gap-x-10 text-balance">
            {filteredProducts.map((product, index) => {
              return (
                <div key={`${product?.name || index}-${index}`} className="group flex flex-col h-full">
                  <div className="relative aspect-[3/4] rounded-2xl md:rounded-[2.5rem] overflow-hidden bg-slate-100 mb-6 shadow-sm group-hover:shadow-2xl group-hover:shadow-green-900/10 transition-all duration-500">
                    <img
                      src={product?.image || ''}
                      alt={product?.name || 'Produk'}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                      loading={index < 4 ? "eager" : "lazy"}
                    />
                    <div className="absolute top-3 left-3 md:top-5 md:left-5">
                      <div className="bg-white/90 backdrop-blur-md px-2 md:px-3 py-1 rounded-full flex items-center gap-1 md:gap-1.5 shadow-sm border border-green-50">
                        <CheckIcon size={8} className="md:w-2.5 md:h-2.5 text-green-600" />
                        <span className="text-[7px] md:text-[9px] font-black uppercase text-[#052c17]">Standard Grade-A</span>
                      </div>
                    </div>
                  </div>

                  <div className="px-1 md:px-2 flex flex-col flex-grow border-t border-green-100/50 pt-4">
                    <h3 className="text-base md:text-xl font-bold text-[#052c17] mb-2 group-hover:text-[#15803d] transition-colors leading-tight min-h-[2.5rem] md:min-h-[3rem] flex items-center">
                      {product?.name || 'Nama Produk'}
                    </h3>
                    <div className="flex items-center gap-1.5 opacity-40 group-hover:opacity-100 transition-opacity">
                      <div className="h-1 w-1 rounded-full bg-green-600" />
                      <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] text-[#052c17]">High Quality Stock</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-24 md:py-32">
              <div className="inline-block p-4 md:p-6 rounded-full bg-green-50 mb-6">
                <Leaf className="text-green-200" size={40} />
              </div>
              <h3 className="text-xl md:text-2xl font-serif italic text-[#052c17]">Sayuran tidak ditemukan</h3>
              <p className="text-sm text-slate-400 mt-2">Coba kata kunci lain.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}