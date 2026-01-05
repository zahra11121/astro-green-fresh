import React from 'react';
import { HelpCircle, ChevronRight } from 'lucide-react';

export const CityFAQ = ({ cityName }) => {
  const faqs = [
    { 
      q: `Berapa Minimum Order untuk area ${cityName}?`, 
      a: 'Kami sangat fleksibel, melayani kebutuhan cafe harian hingga suplai industri dengan kapasitas tonase besar tanpa kendala stok.' 
    },
    { 
      q: 'Apakah harga sudah termasuk ongkir?', 
      a: `Ya, khusus rute pengiriman rutin wilayah ${cityName}, harga yang tertera di katalog kami sudah termasuk biaya logistik (Free Ongkir).` 
    },
    { 
      q: 'Bagaimana sistem retur barang?', 
      a: 'Kami menjamin kualitas Grade-A. Jika ditemukan produk yang tidak sesuai standar saat serah terima, Anda dapat melakukan retur instan di tempat.' 
    },
  ];

  return (
    <div className="space-y-10 font-sans text-left">
      {/* Header dengan Aksen Hijau Berani */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <HelpCircle className="text-[#15803d]" size={16} />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#15803d]">Common Inquiries</span>
        </div>
        <h3 className="text-3xl lg:text-4xl font-serif italic font-black uppercase text-[#052c17] tracking-tight leading-tight">
          Informasi <br/> <span className="text-[#15803d] not-italic font-sans font-bold">Kemitraan.</span>
        </h3>
      </div>

      {/* FAQ List dengan Border Hijau Teratur */}
      <div className="border-t-2 border-green-100 divide-y-2 divide-green-50">
        {faqs.map((faq, index) => (
          <div key={index} className="py-6 group transition-all">
            <div className="flex gap-4 items-start text-left">
              <div className="mt-1.5 flex-shrink-0">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-[#15803d] transition-colors duration-300">
                  <ChevronRight size={12} className="text-[#15803d] group-hover:text-white" />
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm lg:text-base font-bold text-[#052c17] leading-tight tracking-tight group-hover:text-[#15803d] transition-colors">
                  {faq.q}
                </h4>
                <p className="text-xs lg:text-sm text-slate-700 leading-relaxed font-semibold">
                  {faq.a}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Penutup yang Padat */}
      <div className="p-6 bg-[#f7faf7] rounded-2xl border-2 border-green-100">
        <p className="text-[10px] text-[#14532d] font-black uppercase tracking-widest leading-relaxed">
          Butuh penyesuaian khusus untuk bisnis Anda? <br/>
          <span className="text-[#052c17] font-bold">Tim sales kami siap mendiskusikan skema suplai yang paling efisien.</span>
        </p>
      </div>
    </div>
  );
};