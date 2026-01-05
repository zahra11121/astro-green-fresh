import React, { useState } from 'react';
import { MapPin, ChevronRight, Navigation, ArrowLeft, ArrowRight } from 'lucide-react';

export default function DistrictGrid({ districts }) {
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(districts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = districts.slice(startIndex, startIndex + itemsPerPage);

  const goToPage = (page) => {
    setCurrentPage(page);
    // Safety check untuk memastikan window tersedia (client-side)
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 400, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-10 md:py-20 bg-[#f8fafc]">
      <div className="max-w-[1800px] mx-auto px-3 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-8">
          {currentItems.map((district, index) => (
            <a
              key={district.slug || index}
              href={`/area/${district.slug}`}
              className="group relative bg-white rounded-xl md:rounded-[2.5rem] p-4 md:p-6 lg:p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col justify-between"
            >
              <Navigation className="absolute -right-2 -bottom-2 text-slate-50 w-16 h-16 md:w-24 lg:w-32 rotate-12 group-hover:text-green-50 transition-colors" />

              <div className="relative z-10 space-y-3 md:space-y-5">
                <div className="flex justify-between items-start">
                  <div className="p-2 md:p-3 bg-green-50 rounded-lg text-[#15803d] group-hover:bg-[#15803d] group-hover:text-white transition-colors">
                    <MapPin size={16} className="md:w-5 md:h-5 lg:w-6 lg:h-6" />
                  </div>
                </div>

                <div>
                  <h3 className="text-base md:text-xl lg:text-2xl font-black text-[#052c17] truncate group-hover:text-[#15803d] transition-colors leading-tight">
                    {district.name}
                  </h3>
                  <p className="text-slate-400 text-[8px] md:text-[10px] font-bold uppercase tracking-wider mt-1 truncate">
                    Cipanas Route Hub
                  </p>
                </div>

                <div className="flex items-center gap-1 pt-2 text-[#15803d] font-black text-[9px] md:text-[10px] lg:text-xs uppercase tracking-wider">
                  <span>Detail</span>
                  <ChevronRight size={10} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* PAGINATION CONTROLS */}
        <div className="mt-12 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-3 rounded-xl bg-white border border-slate-200 disabled:opacity-30 hover:bg-green-50 transition-colors"
            >
              <ArrowLeft size={16} />
            </button>

            <div className="flex items-center gap-1">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToPage(i + 1)}
                  className={`w-10 h-10 rounded-xl font-black text-xs transition-all ${
                    currentPage === i + 1 
                    ? 'bg-[#15803d] text-white shadow-lg' 
                    : 'bg-white text-[#052c17] border border-slate-200 hover:border-[#15803d]'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button 
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-3 rounded-xl bg-white border border-slate-200 disabled:opacity-30 hover:bg-green-50 transition-colors"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}