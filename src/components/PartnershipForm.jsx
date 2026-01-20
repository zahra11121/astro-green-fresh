import { useState } from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Send, 
  Lock, 
  Briefcase, 
  ChevronDown 
} from 'lucide-react';

export const PartnershipForm = ({ id = "kemitraan" }) => {
  const [formData, setFormData] = useState({
    company: '',
    volume: '',
    termin: '',
    email: ''
  });

  const handleInquiry = (e) => {
    e.preventDefault();
    const { company, volume, termin, email } = formData;
    
    if(!company || !volume) {
      alert("Mohon lengkapi Nama Perusahaan dan Estimasi Volume.");
      return;
    }

    const phoneNumber = "6287780937884";
    const message = `Halo Sales Green Fresh, saya ingin mengajukan Inquiry Penawaran B2B:
    
• Perusahaan: ${company}
• Estimasi: ${volume}
• Skema TOP: ${termin || 'Belum dipilih'}
• Kontak: ${email}

Mohon dapat dikirimkan harga katalog terbaru. Terima kasih.`;

    if (typeof window !== 'undefined') {
      window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
    }
  };

  // URL Gambar Sayuran Segar Premium (Farm Fresh)
  const contactVisualUrl = "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200";

  return (
    <section id={id} className="py-10 md:py-24 bg-white font-sans overflow-hidden text-left">
      <div className="max-w-[1800px] mx-auto bg-white md:border-2 md:border-green-100 md:rounded-[4rem] overflow-hidden shadow-2xl shadow-green-900/5">
        
        <div className="grid lg:grid-cols-12 items-stretch">
          
          {/* SISI KIRI: Visual & Keunggulan */}
          <div className="lg:col-span-5 relative min-h-[450px] lg:min-h-full bg-[#052c17] flex flex-col justify-end p-8 md:p-16">
            {/* Background Image dengan Scrim Gelap agar Teks Terbaca Tajam */}
            <div className="absolute inset-0 z-0">
              <img 
                src={contactVisualUrl} 
                className="w-full h-full object-cover opacity-60" 
                alt="Produk CV Green Fresh Cipanas"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#052c17] via-[#052c17]/30 to-transparent" />
            </div>

            <div className="relative z-10 space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/10 backdrop-blur-md rounded-lg text-[#bef264] border border-white/20">
                    <Lock size={16} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-green-400">B2B Partnership Portal</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif italic font-black text-white leading-[0.95] tracking-tighter uppercase">
                  Sistem Suplai <br /> 
                  <span className="text-[#bef264] not-italic font-sans">Terintegrasi.</span>
                </h2>
                
                <p className="text-lg text-slate-200 font-medium leading-relaxed max-w-md border-l-4 border-[#bef264]/50 pl-6">
                  Fasilitasi pengadaan sayur Grade A untuk korporasi dengan dukungan legalitas lengkap dan fleksibilitas finansial.
                </p>
              </div>

              <div className="grid gap-4 max-w-sm">
                {[
                  { title: "Dukungan Arus Kas (TOP)", icon: <Briefcase size={18} /> },
                  { title: "Kepastian Harga Kontrak", icon: <ShieldCheck size={18} /> }
                ].map((item, i) => (
                  <div key={`feature-${i}`} className="flex items-center gap-4 p-5 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
                    <div className="text-[#bef264]">{item.icon}</div>
                    <h3 className="text-[11px] font-black uppercase tracking-widest text-white">{item.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SISI KANAN: Form Inquiry */}
          <div className="lg:col-span-7 bg-[#fcfdfc] p-8 md:p-16 lg:p-24 relative">
            <div className="absolute top-0 right-0 w-80 h-80 bg-green-100 rounded-full blur-[120px] opacity-40 -mr-20 -mt-20 pointer-events-none" />
            
            <div className="relative z-10 text-left">
              <div className="mb-12">
                <h3 className="text-2xl md:text-3xl font-serif italic font-black text-[#052c17] uppercase tracking-tighter leading-none">Inquiry Form</h3>
                <p className="text-xs text-slate-500 font-bold mt-2 tracking-wide uppercase">Dapatkan Quotation resmi dalam 1x24 Jam</p>
              </div>

              <form className="grid gap-6 md:gap-8" onSubmit={handleInquiry}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3 text-left">
                    <label htmlFor="company" className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Nama Perusahaan</label>
                    <input 
                      id="company"
                      type="text" required
                      className="w-full bg-white border-2 border-slate-100 rounded-2xl px-5 py-5 text-sm font-bold text-[#052c17] focus:border-[#15803d] outline-none transition-all shadow-sm" 
                      placeholder="Contoh: Hotel Grand / Resto ABC"
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                  <div className="space-y-3 text-left">
                    <label htmlFor="volume" className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Volume per Hari</label>
                    <input 
                      id="volume"
                      type="text" required
                      className="w-full bg-white border-2 border-slate-100 rounded-2xl px-5 py-5 text-sm font-bold text-[#052c17] focus:border-[#15803d] outline-none transition-all shadow-sm" 
                      placeholder="Contoh: 50 - 100 kg"
                      onChange={(e) => setFormData({...formData, volume: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-3 text-left">
                  <label htmlFor="termin" className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Termin Pembayaran (TOP)</label>
                  <div className="relative">
                    <select 
                      id="termin"
                      required
                      className="w-full bg-white border-2 border-slate-100 rounded-2xl px-5 py-5 text-sm font-bold text-[#052c17] focus:border-[#15803d] outline-none transition-all appearance-none cursor-pointer shadow-sm"
                      onChange={(e) => setFormData({...formData, termin: e.target.value})}
                    >
                      <option value="">Pilih Skema Termin</option>
                      <option value="Cash on Delivery">Cash on Delivery (COD)</option>
                      <option value="TOP 14 Hari">Termin 14 Hari (TOP)</option>
                      <option value="TOP 30 Hari">Termin 30 Hari (TOP)</option>
                    </select>
                    <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-[#15803d] pointer-events-none" size={20} />
                  </div>
                </div>

                <div className="space-y-3 text-left">
                  <label htmlFor="email" className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Procurement / Purchasing</label>
                  <input 
                    id="email"
                    type="email" required
                    className="w-full bg-white border-2 border-slate-100 rounded-2xl px-5 py-5 text-sm font-bold text-[#052c17] focus:border-[#15803d] outline-none transition-all shadow-sm" 
                    placeholder="purchasing@perusahaan.com"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#052c17] text-[#bef264] py-6 rounded-2xl font-black uppercase text-[11px] tracking-[0.3em] hover:bg-[#15803d] hover:text-white transition-all shadow-2xl flex items-center justify-center gap-4 group mt-4 cursor-pointer"
                >
                  KIRIM INQUIRY PENAWARAN
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>

                <div className="flex items-center justify-center gap-3 opacity-60 mt-8">
                  <CheckCircle2 size={14} className="text-[#15803d]" />
                  <p className="text-[9px] font-[1000] uppercase tracking-widest text-slate-500">Data Terenkripsi & Privasi Terjamin</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};