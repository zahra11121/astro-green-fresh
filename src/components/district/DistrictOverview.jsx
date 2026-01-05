import React from 'react';
import { 
  MapPin, Package, Clock, Users, 
  Target, BarChart3, TrendingUp, Shield,
  Truck, CheckCircle2
} from 'lucide-react';

export const DistrictOverview = ({ district }) => {
  // Pengamanan data dengan Optional Chaining
  const logisticsTime = district?.logistics?.time?.split(',')[0] || '--:--';
  const clientFocusPrimary = district?.clientFocus?.split(', ')[0] || 'General B2B';

  const overviewItems = [
    {
      icon: <MapPin className="w-4 h-4" />,
      title: "ZONA DISTRIBUSI",
      value: district?.name || "Wilayah Kerja",
      desc: "Area cakupan pengiriman prioritas harian",
      metric: "Priority Zone",
      color: "from-blue-500 to-cyan-400",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      borderColor: "border-blue-100"
    },
    {
      icon: <Package className="w-4 h-4" />,
      title: "SUMBER UTAMA",
      value: district?.origin || "Cipanas, Jabar",
      desc: "Pasokan langsung dari sentra produksi",
      metric: "Direct Supply",
      color: "from-emerald-500 to-green-400",
      bgColor: "bg-gradient-to-br from-emerald-50 to-green-50",
      borderColor: "border-emerald-100"
    },
    {
      icon: <Clock className="w-4 h-4" />,
      title: "JADWAL LOGISTIK",
      value: logisticsTime,
      desc: "Keberangkatan batch reguler terjadwal",
      metric: "On-Time Run",
      color: "from-violet-500 to-purple-400",
      bgColor: "bg-gradient-to-br from-violet-50 to-purple-50",
      borderColor: "border-violet-100"
    },
    {
      icon: <Users className="w-4 h-4" />,
      title: "FOKUS KLIEN",
      value: clientFocusPrimary,
      desc: "Standar pemenuhan komoditas bisnis",
      metric: "B2B Standard",
      color: "from-amber-500 to-orange-400",
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
      borderColor: "border-amber-100"
    }
  ];

  const performanceMetrics = [
    {
      icon: <Target className="w-3 h-3" />,
      label: "SLA Compliance",
      value: "99.2%",
      trend: "+1.5%"
    },
    {
      icon: <Truck className="w-3 h-3" />,
      label: "Fleet Status",
      value: "Dedicated",
      trend: "Optimal"
    },
    {
      icon: <TrendingUp className="w-3 h-3" />,
      label: "Avg. Lead Time",
      value: district?.leadTime || "<18h",
      trend: "Fast"
    },
    {
      icon: <Shield className="w-3 h-3" />,
      label: "Handling Score",
      value: "Tier A",
      trend: "Verified"
    }
  ];

  return (
    <div className="space-y-8 text-left font-sans">
      {/* Header Section */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-[#052c17]/5 to-[#15803d]/5 rounded-full border border-[#15803d]/10">
          <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#15803d] to-[#16a34a] rounded-full animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#15803d]">
            DISTRICT OVERVIEW
          </span>
        </div>
        
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 text-left">
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-[#052c17] leading-tight">
              Operational <br />
              <span className="text-[#15803d] font-[1000] tracking-tighter">Strategic Hub.</span>
            </h2>
            <p className="text-sm text-slate-600 font-medium mt-3 max-w-lg leading-relaxed text-left">
              Manajemen rantai pasok terintegrasi untuk wilayah {district?.name || 'terkait'} dengan jaminan keamanan muatan dan ketepatan waktu pengiriman harian.
            </p>
          </div>
          
          <div className="flex-shrink-0">
            <div className="px-5 py-3 bg-[#052c17] rounded-2xl text-white shadow-lg shadow-[#052c17]/20 border border-[#15803d]/30">
              <div className="text-[9px] font-bold uppercase tracking-[0.2em] opacity-70 mb-1">Operational Grade</div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-400" />
                <span className="text-xl font-black italic tracking-tighter">ENTERPRISE</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Metrics Bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {performanceMetrics.map((metric, index) => (
          <div 
            key={index} 
            className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1.5 bg-slate-50 rounded-lg group-hover:bg-green-50 transition-colors">
                <div className="text-[#15803d]">{metric.icon}</div>
              </div>
              <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500">
                {metric.label}
              </span>
            </div>
            <div className="flex items-baseline justify-between">
              <div className="text-xl font-black text-[#052c17]">
                {metric.value}
              </div>
              <div className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
                metric.trend.includes('+') || metric.trend === 'Optimal' 
                  ? 'bg-green-50 text-green-700' 
                  : 'bg-blue-50 text-blue-700'
              }`}>
                {metric.trend}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Overview Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {overviewItems.map((item, index) => (
          <div 
            key={index} 
            className={`p-6 rounded-3xl border ${item.borderColor} ${item.bgColor} relative overflow-hidden group hover:shadow-xl transition-all duration-500`}
          >
            <div className={`absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${item.color} blur-2xl`} />
            
            <div className="relative z-10 text-left">
              <div className="flex items-start justify-between mb-8">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl bg-white shadow-sm border ${item.borderColor} text-[#15803d]`}>
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                      {item.title}
                    </span>
                  </div>
                  <h4 className="text-2xl font-[1000] text-[#052c17] tracking-tight leading-none text-left">
                    {item.value}
                  </h4>
                </div>
                
                <div className={`text-[9px] font-black px-3 py-1.5 rounded-full bg-white/80 border ${item.borderColor} text-[#15803d] uppercase tracking-widest`}>
                  {item.metric}
                </div>
              </div>
              
              <p className="text-xs lg:text-sm text-slate-600 font-bold leading-relaxed pr-8 text-left">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Strategic Info Panel */}
      <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3 flex-1 text-left">
              <div className="flex items-center gap-2">
                <Shield size={14} className="text-[#15803d]" />
                <h4 className="text-[10px] font-black text-[#052c17] uppercase tracking-[0.3em]">
                  Supply Chain Commitment
                </h4>
              </div>
              <p className="text-base font-bold text-[#052c17] leading-snug text-left">
                Komitmen pengiriman tepat waktu dengan protokol sortasi ketat untuk memastikan standar kualitas terbaik sampai di lokasi Anda.
              </p>
            </div>
            
            <div className="flex-shrink-0">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-xl border border-green-100">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs font-black text-[#052c17] uppercase tracking-tighter leading-none">Operational Status: Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};