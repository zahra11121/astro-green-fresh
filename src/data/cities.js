// data/cities.js

export const jabodetabekCities = [
  // --- KAWASAN ELIT & MANDIRI ---
  { 
    slug: 'pik-2-pantai-indah-kapuk', 
    name: 'PIK 2 & Pantai Indah Kapuk',
    title: 'Supplier Sayuran PIK 2 | Distributor Sayuran Premium Jakarta Utara',
    angle: 'Pemasok sayuran eksklusif untuk fine dining dan gourmet market di Pantai Indah Kapuk. Kami mengelola rantai pasok dari lahan Sukatani untuk menjamin Grade-A quality.',
    seoContent: 'Kawasan PIK 2 kini menjadi pusat kuliner high-end di Jakarta Utara. Kami menyediakan layanan khusus bagi restoran seafood dan fine dining yang membutuhkan sayuran eksotis dan microgreens dengan standar kebersihan internasional. Pengiriman kami melewati rute bebas macet untuk memastikan produk tetap renyah saat tiba di loading dock.',
    clientFocus: 'Supermarket Premium, Seafood Fine Dining, & Luxury Clusters',
    deliveryRoute: 'Distribusi prioritas via Tol JORR menjamin sayuran tiba dalam kondisi fajar (panen dini hari).',
    usp: 'PKP Resmi dengan standar sortasi supermarket modern (Horeka Grade).',
    logistics: [
      { time: '20:00', title: 'Grade-A Sorting', desc: 'Sortasi ketat di Hub Cipanas sesuai standar retail.' },
      { time: '00:30', title: 'Express JORR Route', desc: 'Keberangkatan fajar guna menjaga suhu rantai dingin.' },
      { time: '04:30', title: 'Retail-Ready Drop', desc: 'Tiba di loading dock PIK 2 sebelum operasional dimulai.' }
    ]
  },
  { 
    slug: 'bsd-city-serpong', 
    name: 'BSD City',
    title: 'Supplier Sayur BSD City | Grosir Sayuran Tangerang Selatan',
    angle: 'Distributor sayur mayur untuk ekosistem katering dan cloud kitchen di BSD City. Memberikan stabilitas harga kontrak untuk efisiensi biaya bahan baku.',
    seoContent: 'BSD City sebagai pusat bisnis baru membutuhkan suplai sayuran yang konsisten untuk ribuan karyawan di kawasan perkantoran. Kami mendukung operasional central kitchen dan cloud kitchen di area Tangerang Selatan dengan sistem kontrak harga tetap, sehingga manajemen food cost Anda menjadi lebih stabil dan terprediksi.',
    clientFocus: 'Cloud Kitchen, Institusi Pendidikan, & Central Kitchen',
    deliveryRoute: 'Integrasi logistik via Tol Serpong untuk distribusi tepat waktu ke seluruh zona komersial.',
    usp: 'Fasilitas pembayaran termin (TOP) hingga 30 hari untuk mitra korporasi.',
    logistics: [
      { time: '21:00', title: 'Batch Processing', desc: 'Konsolidasi pesanan katering industri & katering sekolah.' },
      { time: '01:30', title: 'West Hub Transit', desc: 'Manajemen rute cepat via jalur arteri Serpong.' },
      { time: '05:30', title: 'Institutional Delivery', desc: 'Drop-off subuh di area perkantoran & institusi.' }
    ]
  },
  { 
    slug: 'alam-sutera-tangerang', 
    name: 'Alam Sutera',
    title: 'Supplier Sayur Alam Sutera | Agen Sayuran Segar Tangerang',
    angle: 'Agen pengadaan sayur segar harian untuk artisan bakery dan resto gourmet. Menjamin kualitas tanpa perantara dari petani Cipanas.',
    seoContent: 'Restoran gourmet dan artisan bakery di Alam Sutera membutuhkan bahan baku dengan grade premium. Kami memastikan setiap pengiriman sayuran ke area ini telah melalui proses pre-cooling di warehouse Cipanas untuk menjaga kualitas selada dan sayuran hijau tetap segar meski di tengah suhu udara perkantoran yang dinamis.',
    clientFocus: 'Gourmet Market, Artisan Bakery, & Restoran Tematik',
    deliveryRoute: 'Pengiriman harian via Tol Kunciran untuk menjaga kelembapan sayuran hijau.',
    usp: 'Kapasitas suplai besar didukung sirkulasi stok dari 200+ petani mitra.',
    logistics: [
      { time: '20:30', title: 'Cold Chain Prep', desc: 'Pre-cooling komoditas di warehouse utama Cipanas.' },
      { time: '01:45', title: 'Kunciran Fast Track', desc: 'Distribusi melalui jalur tol untuk efisiensi waktu.' },
      { time: '06:00', title: 'Artisan Batch Drop', desc: 'Tiba tepat waktu untuk pengolahan bahan fajar.' }
    ]
  },
  { 
    slug: 'gading-serpong-summarecon', 
    name: 'Gading Serpong',
    title: 'Supplier Sayur Gading Serpong | Supplier B2B Serpong',
    angle: 'Partner strategis Chef dalam pengadaan bahan pangan berkualitas tinggi. Fokus pada konsistensi spek dan ukuran sayuran.',
    seoContent: 'Sebagai pusat kuliner yang sangat kompetitif, restoran di Gading Serpong menuntut konsistensi visual pada bahan pangan. Layanan kami fokus pada ketepatan grading ukuran kentang, tomat, dan sayuran dasar lainnya agar standar porsi (yield) di dapur Anda tidak berubah setiap harinya.',
    clientFocus: 'Cafe Modern, Restoran Fusion, & Boutique Supermarket',
    deliveryRoute: 'Layanan antar subuh menjamin produk tiba sebelum persiapan dapur (Mise en Place).',
    usp: 'Kontrol penuh 200 hektar area tanam dengan jaminan SLA pengiriman 100%.',
    logistics: [
      { time: '21:30', title: 'Quality Inspection', desc: 'Pengecekan akhir visual sayur sesuai standar resto.' },
      { time: '02:00', title: 'Direct Cluster Route', desc: 'Distribusi langsung ke titik komersial Summarecon.' },
      { time: '06:15', title: 'Chef Review Ready', desc: 'Penyerahan barang langsung ke tim purchasing/kitchen.' }
    ]
  },
  { 
    slug: 'lippo-karawaci-tangerang', 
    name: 'Lippo Karawaci',
    title: 'Suplai Sayur Karawaci | Distributor Sayuran Rumah Sakit',
    angle: 'Menyediakan pengadaan sayur higienis untuk instalasi gizi RS internasional dan residensial premium di Karawaci.',
    seoContent: 'Kami melayani kebutuhan institusi besar di Karawaci, termasuk instalasi gizi rumah sakit internasional yang memiliki standar sanitasi ketat. Seluruh proses pengepakan kami dilakukan di area bersih untuk menjamin residu pestisida minimal dan keamanan pangan bagi pasien maupun penghuni klaster mewah.',
    clientFocus: 'Rumah Sakit Internasional, Klaster Ekspatriat, & Clubhouse',
    deliveryRoute: 'Logistik via Tol Jakarta-Merak dengan proteksi suhu untuk menjaga nutrisi sayuran.',
    usp: 'Entitas PKP Resmi dengan transparansi administrasi untuk audit korporasi.',
    logistics: [
      { time: '19:30', title: 'Sanitized Packing', desc: 'Sortasi higienis di area bersih Operational Hub.' },
      { time: '01:15', title: 'Med-Express Route', desc: 'Pengiriman prioritas via rute Tol Tangerang.' },
      { time: '04:45', title: 'Clinical Kitchen Drop', desc: 'Serah terima barang di area loading dok RS.' }
    ]
  },
  { 
    slug: 'bintaro-jaya-sektor', 
    name: 'Bintaro Jaya',
    title: 'Supplier Sayur Bintaro | Agen Sayuran Organik & Fresh',
    angle: 'Menyuplai kebutuhan sayur sehat harian untuk katering diet dan resto keluarga di seluruh sektor Bintaro.',
    seoContent: 'Komunitas Bintaro sangat peduli pada aspek kesehatan dan asal-usul bahan makanan. Kami menyuplai toko organik dan resto katering diet di Sektor 1 hingga 9 dengan sayuran hasil bumi asli Cipanas yang ditanam dengan praktek pertanian berkelanjutan dan didistribusikan langsung tanpa melalui pasar induk.',
    clientFocus: 'Healthy Food Resto, Toko Organik, & Restoran Keluarga',
    deliveryRoute: 'Jalur distribusi mikro sektor 1-9 untuk memastikan kecepatan kirim.',
    usp: 'Hasil bumi asli Cipanas dengan sistem distribusi farm-to-door.',
    logistics: [
      { time: '21:00', title: 'Freshness Guard', desc: 'Sortasi hasil panen harian dari mitra petani.' },
      { time: '02:15', title: 'Sektor-to-Sektor', desc: 'Rute distribusi keliling sektor Bintaro.' },
      { time: '05:45', title: 'Fresh Store Landing', desc: 'Tiba di outlet sebelum jam buka toko.' }
    ]
  },

  // --- JAKARTA CORE ---
  { 
    slug: 'jakarta-pusat-cbd', 
    name: 'Jakarta Pusat CBD',
    title: 'Supplier Sayur Jakarta Pusat | Partner Hotel Bintang 5',
    angle: 'Pemasok sayuran premium untuk hotel di kawasan Sudirman-Thamrin. Menghadirkan kualitas internasional dari kebun lokal.',
    seoContent: 'Dapur hotel bintang 5 di area Sudirman-Thamrin memerlukan mitra yang sanggup memenuhi spek internasional secara konsisten. Kami menyediakan dokumen administratif lengkap (PKP) dan armada yang paham rute akses loading bay hotel di tengah pembatasan ganjil-genap Jakarta Pusat.',
    clientFocus: 'Hotel Bintang 5, Kantin Eksekutif, & Kedutaan Besar',
    deliveryRoute: 'Strategi logistik bebas ganjil-genap dengan armada pengiriman subuh.',
    usp: 'Harga kontrak tetap (Fixed Price) dengan termin pembayaran korporasi.',
    logistics: [
      { time: '19:00', title: 'CBD Standard Prep', desc: 'Packing khusus untuk standar dapur hotel mewah.' },
      { time: '23:30', title: 'Gage-Exempt Route', desc: 'Optimasi rute fajar menembus jantung kota Jakarta.' },
      { time: '04:00', title: 'Hotel Loading Bay', desc: 'Diterima oleh tim steward/receiving hotel.' }
    ]
  },
  { 
    slug: 'jakarta-selatan-senopati', 
    name: 'Jakarta Selatan Senopati',
    title: 'Supplier Sayur Jakarta Selatan | Fine Dining Senopati',
    angle: 'Menyediakan pengadaan sayur Grade-A untuk restoran fine dining. Presisi pada ukuran, warna, dan kesegaran sayuran.',
    seoContent: 'Di Senopati, presentasi makanan adalah segalanya. Kami menyuplai sayuran dengan kualitas visual terbaik (Grade AAA) untuk kebutuhan fine dining. Setiap helai sayuran kami sortir manual untuk memastikan warna dan tekstur yang sempurna sebelum masuk ke tangan Chef.',
    clientFocus: 'Fine Dining, Bistro Premium, & Luxury Cafe',
    deliveryRoute: 'Sistem rute subuh Jakarta Selatan mencakup SCBD, Senopati, dan Kemang.',
    usp: 'Rantai pasok terintegrasi dari Sukatani, Cipanas langsung ke Jakarta.',
    logistics: [
      { time: '21:30', title: 'Manual Sortation', desc: 'Sortasi manual (tangan) untuk standar visual terbaik.' },
      { time: '02:00', title: 'South Jakarta Hub', desc: 'Distribusi merata ke area Senopati & SCBD.' },
      { time: '05:30', title: 'Kitchen Prep Drop', desc: 'Tiba untuk persiapan prapengolahan koki pagi.' }
    ]
  },
  { 
    slug: 'jakarta-barat-puri', 
    name: 'Jakarta Barat Puri',
    title: 'Distributor Sayuran Puri Indah Jakarta Barat | Agen Sayur Puri Indah',
    angle: 'Supplier sayuran untuk katering dan resto masakan China di Jakarta Barat. Menjamin stabilitas stok komoditas utama.',
    seoContent: 'Kawasan Puri Indah dikenal dengan ekosistem restoran oriental yang kuat. Kami menjamin ketersediaan stok sayuran khas masakan China seperti caisim, kailan, dan pakcoy dalam volume besar dengan kualitas yang tetap stabil meski di musim hujan sekalipun.',
    clientFocus: 'Restoran Oriental, Modern Market, & Food Court',
    deliveryRoute: 'Distribusi rutin via Tol Dalam Kota untuk ketepatan waktu drop-off.',
    usp: 'Legalitas PKP resmi untuk kemudahan administrasi pajak perusahaan.',
    logistics: [
      { time: '20:00', title: 'Daily Load Prep', desc: 'Sortasi harian sesuai spesifikasi pesanan klien.' },
      { time: '01:00', title: 'West Corridor Route', desc: 'Logistik rute cepat via jalur tol Jakarta Barat.' },
      { time: '05:15', title: 'Puri Fresh Landing', desc: 'Diterima di gudang/restoran area Puri Indah.' }
    ]
  },
  { 
    slug: 'jakarta-utara-kelapa-gading', 
    name: 'Jakarta Utara Kelapa Gading',
    title: 'Supplier Sayuran Kelapa Gading & Sunter | Jakarta Utara',
    angle: 'Distribusi sayur mayur untuk industri seafood dan grill house. Efisiensi logistik untuk menjaga nutrisi sayuran.',
    seoContent: 'Industri grill house dan tenant mall di Kelapa Gading membutuhkan kecepatan perputaran stok. Kami menyediakan pengiriman subuh terjadwal sehingga bahan baku tiba tepat sebelum tim purchasing Anda melakukan pengecekan stok harian di Sunter maupun Gading.',
    clientFocus: 'Seafood Fine Dining, Grill House, & Tenant Mall',
    deliveryRoute: 'Akses Bypass dan Tol Pulomas untuk menghindari titik macet Jakarta Utara.',
    usp: 'Jaminan kesegaran dengan pemotongan rantai distribusi yang panjang.',
    logistics: [
      { time: '21:00', title: 'North Area Sort', desc: 'Sortasi sayur garnish & pendamping menu utama.' },
      { time: '01:30', title: 'Bypass North Route', desc: 'Distribusi fajar menjangkau Sunter & Gading.' },
      { time: '05:45', title: 'Gading Hub Landing', desc: 'Penyerahan barang di ruko/mall area Utara.' }
    ]
  },
  { 
    slug: 'jakarta-timur-cakung', 
    name: 'cakung jakarta timur',
    title: 'Supplier Sayuran Cakung Jakarta Timur | Suplai Industri Cakung',
    angle: 'Layanan grosir sayuran kapasitas besar untuk katering pabrik dan RS. Harga bersaing dengan volume pengiriman masif.',
    seoContent: 'Untuk area industri Cakung dan sekitarnya, kami fokus pada pengadaan skala besar (tonase). Kami adalah mitra ideal bagi katering pabrik yang membutuhkan efisiensi harga tanpa mengorbankan nutrisi harian bagi ribuan pekerja di kawasan industri Jakarta Timur.',
    clientFocus: 'Catering Industri, Hospital Canteen, & Retailers',
    deliveryRoute: 'Jalur Tol Becakayu & JORR menjangkau area industri Jakarta Timur.',
    usp: 'Kapasitas suplai harian hingga 10 ton dengan kepastian harga tetap.',
    logistics: [
      { time: '18:00', title: 'Bulk Load Prep', desc: 'Pemuatan volume besar (tonase) di gudang utama.' },
      { time: '23:00', title: 'East Gate Logistics', desc: 'Pengiriman lintas wilayah via rute tol JORR.' },
      { time: '04:15', title: 'Bulk Canteen Drop', desc: 'Tiba sebelum tim katering memulai jadwal masak.' }
    ]
  },

  // --- KOTA METROPOLITAN ---
  { 
    slug: 'jakarta-selatan', 
    name: 'Jakarta Selatan',
    title: 'Supplier Sayuran Jakarta Selatan | Pemasok B2B Horeka',
    angle: 'Distributor sayur untuk hotel dan cafe di seluruh Jakarta Selatan. Pengiriman harian menjamin stok selalu segar.',
    seoContent: 'Menjangkau area luas mulai dari Tebet hingga Jagakarsa, layanan kami di Jakarta Selatan fleksibel untuk berbagai skala bisnis, mulai dari cafe butik hingga katering korporat. Kami memastikan rantai distribusi tetap pendek demi menjaga kesegaran selada premium.',
    clientFocus: 'Hotel, Restoran, Cafe, & Catering Korporat',
    deliveryRoute: 'Armada logistik kami menyisir seluruh kecamatan mulai subuh.',
    usp: 'Harga tangan pertama langsung dari petani (Cipanas Origin).',
    logistics: [
      { time: '21:00', title: 'Horeka Sorting', desc: 'Sortasi harian standar hotel & resto.' },
      { time: '01:30', title: 'South Metro Fleet', desc: 'Distribusi fajar wilayah Jakarta Selatan.' },
      { time: '06:00', title: 'Final Kitchen Drop', desc: 'Drop barang di pintu dapur sebelum operasional.' }
    ]
  },
  { 
    slug: 'jakarta-pusat', 
    name: 'Jakarta Pusat',
    title: 'Supplier Sayur Jakarta Pusat | Jual Sayur Grosir & Ecer',
    angle: 'Penyedia kebutuhan sayur mayur terlengkap untuk kantin gedung dan bisnis retail di pusat kota Jakarta.',
    seoContent: 'Di jantung ibu kota yang padat, ketepatan waktu adalah tantangan utama. Armada kami menggunakan rute fajar untuk menjamin suplai sayur mayur ke kantin gedung perkantoran tiba sebelum jam persiapan sarapan dimulai.',
    clientFocus: 'Rumah Makan, Kantin Gedung, & Bisnis Retail',
    deliveryRoute: 'Pengiriman fajar terjadwal menjangkau area perkantoran strategis.',
    usp: 'Stabilitas harga dan jaminan ketepatan waktu pengiriman.',
    logistics: [
      { time: '20:30', title: 'Mainstock Packing', desc: 'Persiapan stok komoditas sayur mayur utama.' },
      { time: '01:00', title: 'Central Core Route', desc: 'Pengiriman area Gambir, Menteng, dan Tanah Abang.' },
      { time: '05:30', title: 'Urban Kitchen Drop', desc: 'Diterima oleh pengelola kantin/toko retail.' }
    ]
  },
  { 
    slug: 'jakarta-barat', 
    name: 'Jakarta Barat',
    title: 'Pemasok Sayuran Jakarta Barat | Distributor Sayur Fresh',
    angle: 'Melayani pengiriman rutin sayuran untuk restoran dan pasar modern di Jakarta Barat. Menjamin rantai dingin tetap terjaga.',
    seoContent: 'Melayani area perkantoran Slipi hingga residensial Cengkareng, kami mengedepankan transparansi harga harian. Mitra kami di Jakarta Barat mendapatkan kemudahan laporan administrasi yang rapi untuk menunjang audit keuangan bisnis kuliner mereka.',
    clientFocus: 'Restoran, Pasar Modern, & Katering Industri',
    deliveryRoute: 'Logistik harian via jalur tol untuk mempercepat waktu sampai.',
    usp: 'Termin pembayaran (TOP) hingga 30 hari untuk mitra tetap.',
    logistics: [
      { time: '21:15', title: 'Daily Sortation', desc: 'Sortasi pesanan khusus katering & retail.' },
      { time: '01:45', title: 'West Jakarta Fleet', desc: 'Menjangkau rute Cengkareng hingga Grogol.' },
      { time: '06:15', title: 'Business Unit Drop', desc: 'Tiba di lokasi gudang/dapur tepat waktu.' }
    ]
  },
  { 
    slug: 'jakarta-utara', 
    name: 'Jakarta Utara',
    title: 'Supplier Sayur Jakarta Utara | Agen Sayur Higienis Sunter',
    angle: 'Partner suplai sayur yang memahami standar keamanan pangan. Pilihan tepat untuk resto seafood dan kafe pesisir.',
    seoContent: 'Kondisi udara pesisir Jakarta Utara menuntut perlakuan khusus pada sayuran segar agar tidak cepat layu. Kami menggunakan kemasan yang menjaga kelembapan alami sayuran selama perjalanan dari Cipanas ke area Pluit dan sekitarnya.',
    clientFocus: 'Restoran Seafood, Food Court, & Retailer',
    deliveryRoute: 'Jalur distribusi handal mencakup area pelabuhan hingga residensial.',
    usp: 'Standar Grade-A dengan jangkauan logistik yang presisi.',
    logistics: [
      { time: '20:45', title: 'Quality Inspection', desc: 'Sortasi dan inspeksi kebersihan sayur.' },
      { time: '01:30', title: 'Coastline Route', desc: 'Distribusi jalur Pluit, Priok, hingga Kelapa Gading.' },
      { time: '06:00', title: 'Retail Hub Drop', desc: 'Diterima oleh unit operasional bisnis kuliner.' }
    ]
  },
  { 
    slug: 'bekasi', 
    name: 'Bekasi',
    title: 'Distributor Sayur Bekasi | Grosir Sayuran Industri',
    angle: 'Solusi grosir sayur untuk katering industri dan RS di Bekasi. Harga kompetitif dengan sistem kontrak.',
    seoContent: 'Kebutuhan sayur untuk katering industri di Bekasi Barat dan Timur sangat besar. Kami hadir sebagai solusi grosir tangan pertama yang mampu memberikan stabilitas harga kontrak tahunan untuk melindungi margin profit pengusaha katering.',
    clientFocus: 'Catering Industri, Rumah Sakit, & Warung Kuliner',
    deliveryRoute: 'Akses Tol Jakarta-Cikampek untuk pengiriman volume industri besar.',
    usp: 'Kepastian stok sepanjang tahun langsung dari kebun sendiri.',
    logistics: [
      { time: '18:30', title: 'Wholesale Prep', desc: 'Pengepakan skala industri di gudang utama.' },
      { time: '00:30', title: 'East Way Logistics', desc: 'Pengiriman lintas wilayah via rute Tol Bekasi.' },
      { time: '04:45', title: 'Bekasi Hub Landing', desc: 'Distribusi area Bekasi Barat, Timur, dan Selatan.' }
    ]
  },
  { 
    slug: 'bekasi-kota-summarecon', 
    name: 'Bekasi Kota',
    title: 'Supplier Sayuran Bekasi Kota | Pemasok Bahan Baku Food Hub',
    angle: 'Menyuplai kebutuhan sayur untuk mall dan resto keluarga di Bekasi Kota. Administrasi lengkap dan PKP.',
    seoContent: 'Sebagai Food Hub yang berkembang pesat, Bekasi Kota membutuhkan supplier yang paham dinamika mall. Kami melayani tenant di Summarecon Bekasi dengan sistem drop-off yang efisien dan dukungan legalitas perusahaan yang lengkap.',
    clientFocus: 'Tenant Mall, Restoran Keluarga, & Food Hubs',
    deliveryRoute: 'Distribusi fajar untuk menjangkau area Summarecon dan sekitarnya.',
    usp: 'Kepatuhan pajak (PKP) dan transparansi transaksi perusahaan.',
    logistics: [
      { time: '21:00', title: 'Commercial Prep', desc: 'Sortasi sayur sesuai kebutuhan resto di mall.' },
      { time: '02:00', title: 'Summarecon Route', desc: 'Fokus distribusi area komersial pusat kota.' },
      { time: '05:45', title: 'Tenant Loading Bay', desc: 'Drop barang sebelum operasional mall dimulai.' }
    ]
  },
  { 
    slug: 'depok', 
    name: 'Depok',
    title: 'Distributor Sayuran Depok | Agen Sayur Segar Cipanas',
    angle: 'Partner terpercaya katering rumahan dan cafe di Depok. Memberikan harga grosir dengan kualitas retail.',
    seoContent: 'Cafe dan cloud kitchen di Depok membutuhkan mitra yang gesit. Kami menyediakan sayuran dengan harga petani yang sangat kompetitif bagi pengusaha kuliner UMKM yang ingin meningkatkan kualitas sajian mereka tanpa membengkakkan biaya produksi.',
    clientFocus: 'Cafe, Cloud Kitchen, & UMKM Kuliner',
    deliveryRoute: 'Pengiriman subuh via jalur Jalan Raya Bogor untuk efisiensi.',
    usp: 'Harga petani dengan fleksibilitas order untuk UMKM kuliner.',
    logistics: [
      { time: '21:30', title: 'UMKM Selection', desc: 'Sortasi harian untuk pesanan cafe & resto.' },
      { time: '02:15', title: 'Depok-Bogor Way', desc: 'Pengiriman rutin via jalur Jalan Raya Bogor.' },
      { time: '06:00', title: 'Cafe Unit Landing', desc: 'Diterima oleh pengelola cafe area Depok.' }
    ]
  },
  { 
    slug: 'depok-margonda', 
    name: 'Depok Margonda',
    title: 'Supplier Sayur Margonda | Distributor Sayuran Kafe',
    angle: 'Fokus melayani area Margonda dan sekitarnya. Pengiriman cepat untuk rotasi stok yang dinamis.',
    seoContent: 'Margonda sebagai pusat edukasi dan kuliner memiliki karakteristik konsumen yang dinamis. Kami menyuplai sayuran segar untuk restoran mahasiswa dan cafe kekinian dengan sistem pengiriman subuh yang konsisten setiap harinya.',
    clientFocus: 'Modern Cafe, Restoran Mahasiswa, & Boutique Resto',
    deliveryRoute: 'Akses distribusi Beji-Margonda menjamin barang sampai subuh.',
    usp: 'Produk Grade-A dengan visual menarik untuk sajian menu cafe.',
    logistics: [
      { time: '22:00', title: 'Cafe Aesthetics Sort', desc: 'Pemilihan sayur dengan bentuk/warna terbaik.' },
      { time: '02:30', title: 'Beji-Margonda Route', desc: 'Rute distribusi jalur kuliner Margonda Raya.' },
      { time: '05:45', title: 'Margonda Hub Drop', desc: 'Diterima di ruko/tenant area Margonda.' }
    ]
  },
  { 
    slug: 'tangerang', 
    name: 'Tangerang',
    title: 'Supplier Sayur Tangerang | Pemasok Sayuran Bandara',
    angle: 'Layanan logistik sayuran untuk katering penerbangan dan resto di Tangerang. Memenuhi standar audit ketat.',
    seoContent: 'Kami melayani standar tinggi katering penerbangan di area Bandara Soekarno-Hatta. Keamanan pangan dan kebersihan sayuran menjadi prioritas utama kami untuk memenuhi kriteria audit in-flight catering yang ketat di Tangerang.',
    clientFocus: 'Flight Catering, Apartemen, & Food Court',
    deliveryRoute: 'Armada berpendingin via Tol Merak menjaga kesegaran produk.',
    usp: 'Kapasitas 10 ton/hari sanggup memenuhi kebutuhan industri besar.',
    logistics: [
      { time: '19:00', title: 'Industrial Grade Sort', desc: 'Sortasi kualitas katering (In-flight standards).' },
      { time: '00:30', title: 'Merak Fast Track', desc: 'Pengiriman lintas wilayah via rute tol Tangerang.' },
      { time: '04:30', title: 'Airport Area Drop', desc: 'Tiba di loading dock katering bandara.' }
    ]
  },
  { 
    slug: 'tangerang-selatan', 
    name: 'Tangerang Selatan',
    title: 'Distributor Sayuran Tangerang selatan | Agen Sayur Segar Harian',
    angle: 'Menyediakan sayuran segar Cipanas untuk komunitas modern Tangerang selatan. Dari lahan langsung ke dapur.',
    seoContent: 'Distribusi kami di Tangerang Selatan menjangkau area residensial modern yang mengutamakan kualitas hidup. Kami membawa kesegaran sayuran Cipanas langsung ke depan pintu dapur resto sehat dan supermarket khusus di Pamulang dan Ciputat.',
    clientFocus: 'Healthy Food Resto, Organic Market, & Residensial',
    deliveryRoute: 'Distribusi harian mencakup wilayah Ciputat, Pamulang, dan BSD.',
    usp: 'Akses langsung ke lahan tani tanpa perantara (Direct Sourcing).',
    logistics: [
      { time: '21:45', title: 'Product Selection', desc: 'Pengepakan sayuran harian dan bumbu dapur.' },
      { time: '02:00', title: 'Tangsel Inner Loop', desc: 'Penyisiran rute wilayah Tangerang Selatan.' },
      { time: '05:30', title: 'Market/Resto Drop', desc: 'Penyerahan barang di lokasi mitra bisnis.' }
    ]
  },

  // --- INDUSTRIAL & SPECIAL AREA ---
  { 
    slug: 'cikarang', 
    name: 'Cikarang',
    title: 'Supplier Sayur Cikarang | Pemasok Sayuran Pabrik',
    angle: 'Supplier profesional untuk katering pabrik di kawasan industri Cikarang. Administrasi PKP dan termin pembayaran.',
    seoContent: 'Di kawasan industri terbesar se-Asia Tenggara, kami menjadi tulang punggung suplai pangan bagi katering pabrik di EJIP dan Delta Silicon. Kami menjamin kapasitas suplai hingga satuan ton per pengiriman dengan sistem logistik yang terorganisir.',
    clientFocus: 'Catering Pabrik, Mess Karyawan, & Procurement',
    deliveryRoute: 'Akses harian menjangkau kawasan EJIP, Delta Silicon, dan sekitarnya.',
    usp: 'Tonase besar dan stabilitas harga dengan sistem kontrak.',
    logistics: [
      { time: '18:15', title: 'Bulk Industrial Sort', desc: 'Sortasi skala besar untuk kebutuhan kantin pabrik.' },
      { time: '23:00', title: 'Cikarang Express Fleet', desc: 'Pengiriman tonase besar via rute Tol Cikampek.' },
      { time: '04:00', title: 'Mess/Factory Drop', desc: 'Diterima oleh pengelola katering industri.' }
    ]
  },
  { 
    slug: 'cikarang-jababeka-industrial', 
    name: 'Cikarang Jababeka',
    title: 'Supplier Sayur Jababeka | Grosir Sayuran Skala Besar',
    angle: 'Solusi efisiensi pengadaan sayur untuk katering industri Jababeka. Menjamin ketersediaan barang 365 hari.',
    seoContent: 'Manajemen katering di Jababeka membutuhkan kepastian stok 365 hari setahun. Kami mengelola ratusan hektar lahan tani di Cipanas untuk menjamin bahwa operasional dapur industri Anda tidak akan berhenti karena kelangkaan bahan baku.',
    clientFocus: 'Katering Industri, Kantin Pabrik, & Food Industrial',
    deliveryRoute: 'Armada kapasitas besar melayani rute Jababeka I & II.',
    usp: 'Pembayaran termin (TOP) untuk mendukung arus kas perusahaan.',
    logistics: [
      { time: '17:30', title: 'Heavy Loading', desc: 'Pemuatan ke armada truk logistik kapasitas besar.' },
      { time: '22:30', title: 'Jababeka Direct Route', desc: 'Distribusi khusus area kawasan Jababeka.' },
      { time: '03:30', title: 'Pre-Shift Arrival', desc: 'Barang tiba sebelum persiapan makan karyawan.' }
    ]
  },
  { 
    slug: 'cibubur-kota-wisata-legenda', 
    name: 'Cibubur & Kota Wisata',
    title: 'Supplier Sayur Cibubur | Agen Sayuran Kota Wisata',
    angle: 'Menyuplai resto dan katering di klaster Cibubur. Menjaga kesegaran sayuran dari kebun pegunungan.',
    seoContent: 'Menembus jalur Transyogi di pagi buta, armada kami memastikan resto di Kota Wisata dan Legenda Wisata mendapatkan panen terbaru. Sayuran kami memiliki daya simpan lebih lama karena dipanen hanya beberapa jam sebelum dikirim.',
    clientFocus: 'Cluster Catering, Restoran Keluarga, & Fresh Market',
    deliveryRoute: 'Pengiriman subuh via Tol Jagorawi menghindari macet Transyogi.',
    usp: 'Waktu tempuh logistik terukur menjamin sayuran tetap renyah.',
    logistics: [
      { time: '21:00', title: 'Residential Sort', desc: 'Sortasi sayur untuk katering cluster & resto.' },
      { time: '01:30', title: 'Transyogi Route', desc: 'Distribusi fajar di sepanjang jalur Transyogi.' },
      { time: '05:00', title: 'Kota Wisata Landing', desc: 'Drop barang di hub kuliner Kota Wisata.' }
    ]
  },
  { 
    slug: 'bogor', 
    name: 'Bogor',
    title: 'Supplier Sayur Bogor | Agen Sayuran Tangan Pertama',
    angle: 'Memanfaatkan lokasi gudang di Cipanas untuk pengiriman kilat ke Bogor. Kesegaran maksimal di setiap drop-off.',
    seoContent: 'Dekat dengan sumber produksi di Cipanas, pengiriman ke Bogor mendapatkan prioritas kecepatan. Restoran heritage di pusat kota Bogor dapat menikmati sayuran dengan tingkat kesegaran maksimal karena jarak tempuh yang sangat singkat.',
    clientFocus: 'Restoran Heritage, Cafe Modern, & Destinasi Kuliner',
    deliveryRoute: 'Jalur distribusi Puncak-Ciawi yang fleksibel dan harian.',
    usp: 'Kualitas Grade-A dengan harga bersaing tanpa biaya distribusi panjang.',
    logistics: [
      { time: '22:30', title: 'Late Night Harvest', desc: 'Sortasi hasil bumi panen sore hari.' },
      { time: '02:00', title: 'Bogor Direct Route', desc: 'Rute distribusi fajar Ciawi-Bogor Kota.' },
      { time: '05:30', title: 'Heritage Resto Drop', desc: 'Diterima oleh dapur resto area Bogor Tengah.' }
    ]
  },
  { 
    slug: 'bogor-kota-kuliner', 
    name: 'Bogor Kota Kuliner',
    title: 'Supplier Sayur Bogor Kota | Pemasok Sayuran Fresh Subuh',
    angle: 'Jembatan terpercaya pangan segar dari Cipanas untuk dapur Anda. Higienis dan terpantau kualitasnya.',
    seoContent: 'Sebagai destinasi kuliner akhir pekan, restoran di Bogor memerlukan lonjakan stok yang stabil. Kami mengantisipasi kebutuhan tersebut dengan manajemen tanam yang terencana, memastikan suplai sayur Anda aman di hari sibuk.',
    clientFocus: 'Restoran Keluarga, Hotel Resort, & Cafe Heritage',
    deliveryRoute: 'Distribusi setiap subuh melalui rute fajar Puncak-Bogor.',
    usp: 'Standar kualitas B2B dengan komitmen pelayanan personal.',
    logistics: [
      { time: '22:45', title: 'Ultra-Fresh Selection', desc: 'Pemilihan produk unggulan paska panen.' },
      { time: '02:30', title: 'Downhill Logistics', desc: 'Pengiriman kilat melalui jalur Puncak.' },
      { time: '05:00', title: 'Breakfast Service Drop', desc: 'Penyerahan barang untuk kebutuhan sarapan pagi.' }
    ]
  },
  { 
    slug: 'sentul-city-resort-bogor', 
    name: 'Sentul City',
    title: 'Supplier Sayur Sentul | Agen Sayuran Resort & Wellness',
    angle: 'Menyuplai resort dan wellness center di Sentul. Sayuran sehat langsung dari kaki gunung Gede-Pangrango.',
    seoContent: 'Resort dan hotel di Sentul City membutuhkan bahan baku premium untuk tamu eksklusif mereka. Kami menyuplai sayuran higienis dan herbal segar yang ditanam di ketinggian pegunungan, cocok untuk menu wellness dan spa resort.',
    clientFocus: 'Resort & Spa, Villa Eksklusif, & Wellness Center',
    deliveryRoute: 'Pengiriman langsung via jalur alternatif untuk menjaga kecepatan.',
    usp: 'Transparansi sumber hasil bumi dengan jaminan kualitas industri.',
    logistics: [
      { time: '22:00', title: 'Wellness Hub Sort', desc: 'Sortasi khusus sayuran sehat & herbal.' },
      { time: '02:45', title: 'Sentul Bypass Route', desc: 'Distribusi area Sentul City & sekitarnya.' },
      { time: '05:30', title: 'Resort Handover', desc: 'Diterima oleh unit logistik hotel/resort.' }
    ]
  }
];

// Helper Function: Mengambil data default jika logistik per kota tidak didefinisikan
export const getDefaultLogistics = (cityName) => [
  { time: '21:00', title: 'B2B Quality Check', desc: 'Sortasi harian standar operasional CV. Green Fresh Cipanas.' },
  { time: '01:00', title: 'Cold Chain Transit', desc: `Armada bergerak dari Sukatani menuju area ${cityName}.` },
  { time: '05:30', title: 'On-Time Arrival', desc: 'Estimasi tiba di lokasi operasional mitra (Target 100%).' },
];

// Helper Function: Mengambil 5 kota secara acak untuk Internal Linking (SEO Booster)
export const getRelatedCities = (currentSlug, count = 5) => {
  return jabodetabekCities
    .filter(city => city.slug !== currentSlug)
    .sort(() => 0.5 - Math.random())
    .slice(0, count);
};