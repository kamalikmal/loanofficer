// =============================================================================
// LOAN OFFICER: DESK OF FATE - DAYS_DATA.JS (FULL 94 POOL CLIENTS & GENERATOR)
// =============================================================================

// 1. BANK DATA IDENTITAS & KONTAK
const NAMES_M = [
"Budi Santoso", "Aris Munandar", "Farhan Maulana", "Rahmat Subroto", "Hendra Setiawan",
"Agus Pratama", "Gunawan Hartono", "Richard Sitorus", "Irwan Hidayat", "Wahyu Triyono",
"Fajar Ramadhan", "Haryanto Tedjo", "Bambang Pamungkas", "Lukman Hakim", "Surya Kencana",
"Danang Wijanarko", "Kevin Sanjaya", "Tri Handoko", "Chandra Gunawan", "Rahmat Effendi",
"Franky Tan", "Ahmad Dahlan", "Hendro Siswanto", "Iskandar Zulkarnain", "Irwan Setiadi",
"Rizky Pratama", "Aditya Nugraha", "Dimas Anggara", "Eko Prasetyo", "Bagus Wicaksono",
"Bayu Permana", "Yusuf Maulana", "Teguh Supriyanto", "Dedi Kurniawan", "Gilang Ramadhan",
"Ilham Saputra", "Joko Widodo", "Rio Dewanto", "Andi Wijaya", "Bagas Saputra",
"Doni Firmansyah", "Sigit Purnomo", "Anton Sujarwo", "Gideon Sinaga", "Taufik Hidayat",
"Ferry Salim", "Rudi Hartono", "Indra Lesmana", "Panji Gumilang", "Tommy Kurniawan",
"Satria Perkasa", "Heri Gunawan", "Benny Pasaribu", "Alvin Susanto", "Zainal Abidin",
"Guntur Prabowo", "Darmawan Sutanto", "Putra Pratama", "Haris Munandar", "Ade Kurnia"
];

const NAMES_F = [
"Siti Rahma", "Dewi Lestari", "Nina Marlina", "Ratna Juwita", "Siska Melati",
"Sri Rahayu", "Erika Silalahi", "Maryani", "Nurhaliza", "Veronica Anggraini",
"Mega Putri", "Anisa Kencana", "Tari Wulandari", "Yuni Indah", "Dian Sitorus",
"Rina Anggraini", "Putri Maharani", "Aulia Rahmawati", "Fitri Handayani", "Nadia Safitri",
"Maya Safira", "Intan Permatasari", "Wulan Guritno", "Larasati Kusuma", "Ayu Lestari",
"Kartika Sari", "Dinda Kirana", "Novita Dewi", "Citra Kirana", "Melati Sukma",
"Novi Wulandari", "Rani Pratiwi", "Gita Gutawa", "Shinta Utami", "Indah Permata",
"Widya Astuti", "Endah Sulistiyowati", "Suci Ramadhani", "Bella Safira", "Grace Tobing",
"Yulia Safitri", "Mira Lesmana", "Nabila Syakieb", "Tiara Andini", "Zahra Amalia",
"Lestari Widodo", "Pratiwi Kusuma", "Fani Handayani", "Silvia Anggraini", "Cindy Claudia",
"Tasya Kamila", "Devi Permatasari", "Rossa Rosalina", "Tina Toonita", "Poppy Dharsono",
"Desi Ratnasari", "Renata Kusmanto", "Chelsea Olivia", "Kania Dewi", "Agnes Monica"
];

const usedNames = new Set();

function getName(gender) {
	const pool = gender === "Perempuan"? NAMES_F: NAMES_M;

	// 1. Ambil daftar nama yang belum pernah terpakai
	const available = pool.filter(n =>!usedNames.has(n));

	// 2. Jika masih ada nama yang belum terpakai, ambil salah satu secara acak
	if (available.length > 0) {
		const randomIndex = Math.floor(Math.random() * available.length);
		const chosen = available[randomIndex];
		usedNames.add(chosen);
		return chosen;
	}

	// 3. Jika semua 60 nama sudah pernah dipakai, ambil acak bebas dari pool utama
	return pool[Math.floor(Math.random() * pool.length)];
}

function makeNik(dob, gender, isValid) {
  const [d, m, y] = dob.split("-");
  let dayVal = parseInt(d, 10);
  if (gender === "Perempuan") dayVal += 40;
  if (!isValid) dayVal = dayVal > 45? dayVal - 15: dayVal + 15;
  const dayStr = dayVal.toString().padStart(2, "0");
  const randNum = Math.floor(1000 + Math.random() * 9000);
  return `3201${dayStr}${m}${y.slice(-2)}${randNum}`;
}

// 2. HELPER FACTORY TEMPLATE (Memadatkan 24 Atribut per Baris)
function c(id, g, dob, job, isFree, inc, loan, inst, tenM, purp, sec, kol, kDesc, colT, colV, phNo, phResp, isPhOk, rel, isNikOk, dec, fail, nApp, nDec) {
  return { id, g, dob, job, isFree, inc, loan, inst, tenM, purp, sec, kol, kDesc, colT, colV, phNo, phResp, isPhOk, rel, isNikOk, dec, fail, nApp, nDec };
}

// 3. POOL 94 TEMPLATE LENGKAP (DAY 1 - DAY 7)
const MASTER_CONFIG = {
  1: {
    minCash: 50000000, maxCash: 100000000, deskQuota: { a: 3, d: 1 },
    sticky: "Target awal bulan! Jangan setujui pinjaman pekerja lepas/freelancer hari ini, pemasukan mereka tidak stabil!",
    approve: [
      c("D1-A1","Laki-laki","12-10-1994","Karyawan Swasta Tetap",false,10000000,30000000,2700000,12,"Modal Toko Sembako","Produktif",1,"Lancar (Kolektibilitas 1)","Sepeda Motor",35000000,"021-5558911","Benar staf aktif sejak 2018.",true,"Tidak ada",true,"APPROVE","","Modal Mengucur Deras, Toko Sembako Buka Puluhan Lowongan Baru","Jeratan Bunga Harian Rentenir Hancurkan Asa Karyawan Swasta"),
      c("D1-A2","Perempuan","15-05-1991","Guru Yayasan Tetap",false,8000000,25000000,1800000,18,"Biaya Kuliah Anak","Konsumtif",1,"Lancar (Kolektibilitas 1)","Sepeda Motor",30000000,"021-8845112","Guru tetap yayasan aktif.",true,"Tidak ada",true,"APPROVE","","Tangis Haru Guru Honorer: Sang Putri Akhirnya Raih Gelar Sarjana","Tunggakan Uang Kuliah Membengkak, Mahasiswi Berprestasi Mengundurkan Diri"),
      c("D1-A3","Laki-laki","20-11-1997","Staf Akuntan PT Surya",false,9000000,25000000,2400000,12,"Rintisan Bengkel Adik","Produktif",1,"Lancar (Kolektibilitas 1)","Sepeda Motor",32000000,"021-3349001","Staf akuntansi aktif kami.",true,"Tidak ada",true,"APPROVE","","Sinergi Saudara Kandung Sukses Dirikan Bengkel Las Terbesar","Modal Ditolak Mentah-Mentah, Pemuda Kampung Terancam Menganggur"),
      c("D1-A4","Perempuan","19-01-1995","Staf HRD Logistik",false,7500000,18000000,1500000,12,"Renovasi Kamar Bayi","Konsumtif",1,"Lancar (Kolektibilitas 1)","Sepeda Motor",22000000,"021-5544111","HRD aktif sejak 2 tahun lalu.",true,"Tidak ada",true,"APPROVE","","Sambut Buah Hati Pertama, Pasutri Rampungkan Kamar Sehat Idaman","Kamar Lembap Tak Terawat, Kondisi Pernapasan Bayi Baru Lahir Memburuk"),
      c("D1-A5","Laki-laki","05-11-1988","Supervisor Swalayan",false,12000000,35000000,3100000,12,"Pemasangan Listrik 3 Phasa","Produktif",1,"Lancar (Kolektibilitas 1)","Mobil Minivan",55000000,"021-7788441","Supervisor shift siang aktif.",true,"Tidak ada",true,"APPROVE","","Daya Listrik Baru Masuk, Stok Daging Beku Swalayan Meningkat","Krisis Pasokan Daya Mengancam, Bahan Pangan Swalayan Membusuk"),
      c("D1-A6","Perempuan","22-08-1993","Bidan RSUD",false,9500000,22000000,2100000,12,"Alat Medis Praktik Mandiri","Produktif",1,"Lancar (Kolektibilitas 1)","Sepeda Motor",28000000,"021-9988114","Bidan terdaftar di bangsal.",true,"Tidak ada",true,"APPROVE","","Klinik Bersalin Mandiri Beroperasi Penuh, Layani Warga Desa","Fasilitas Bersalin Terbatas, Ibu Hamil Terpaksa Tempuh Jalur Ekstrem")
    ],
    decline: [
      c("D1-D1","Perempuan","08-04-2000","Desainer Grafis Lepas",true,15000000,40000000,3500000,12,"Beli Alat Desain Digital","Produktif",1,"Lancar (Kolektibilitas 1)","Emas Batangan",50000000,"0812-9988-771","Sering ambil proyek lepas.",true,"Tidak ada",true,"DECLINE","Melanggar Sticky Note: Pekerja Freelance/Lepas.","Pekerja Lepas Kabur Bawa Kredit Ratusan Juta Tanpa Jejak","Asosiasi Desainer Protes Diskriminasi Kebijakan Bank Nasional"),
      c("D1-D2","Laki-laki","03-07-1996","Fotografer Freelance",true,9000000,15000000,1450000,12,"Upgrade Lensa Kamera","Produktif",1,"Lancar (Kolektibilitas 1)","Kamera & Lensa",20000000,"0813-2211-990","Saya fotografer mandiri.",true,"Tidak ada",true,"DECLINE","Melanggar Sticky Note: Pekerja Lepas.","Tingkat Gagal Bayar Meroket Akibat Kredit Liar Tenaga Lepas","Gagal Beli Peralatan Baru, Fotografer Muda Terancam Kehilangan Kontrak"),
      c("D1-D3","Perempuan","18-12-1991","Staf Administrasi",false,6000000,24000000,2400000,12,"Pelunasan Utang Keluarga","Konsumtif",1,"Lancar (Kolektibilitas 1)","Sepeda Motor",12000000,"021-6655112","Staf administrasi aktif.",true,"Tidak ada",true,"DECLINE","Melanggar SOP 1: DTI 40% (Maksimal 30%).","Gaji Bulanan Terkuras Habis, Debitur Nekat Kabur Tinggalkan Rumah","Penolakan Kredit Selamatkan Keluarga Pegawai dari Gulungan Utang"),
      c("D1-D4","Laki-laki","25-06-1989","Staf Pergudangan",false,6000000,20000000,2100000,12,"Perbaikan Mobil Operasional","Produktif",1,"Lancar (Kolektibilitas 1)","Sepeda Motor",18000000,"021-4458900","Divisi pergudangan aktif.",true,"Tidak ada",true,"DECLINE","Melanggar SOP 1: Rasio DTI 35% (Maksimal 30%).","Penyitaan Mobil Operasional Picu Keributan di Wilayah Gudang","Petugas Bank Cegah Risiko Gagal Bayar Karyawan Logistik")
    ]
  },
  2: {
    minCash: 70000000, maxCash: 120000000, deskQuota: { a: 3, d: 2 },
    sticky: "Prioritaskan pinjaman untuk keperluan medis! Tolak siapa pun yang pengajuannya untuk hiburan/wisata.",
    approve: [
      c("D2-A1","Perempuan","14-02-1990","Dokter Spesialis Anak",false,25000000,40000000,4500000,12,"Inkubator Klinik Mandiri","Produktif",1,"Lancar (Kolektibilitas 1)","Mobil Sedan",80000000,"021-4458900","Izin praktik klinik resmi.",true,"Tidak ada kerabat pejabat",true,"APPROVE","","Detik-Detik Menegangkan: Inkubator Baru Selamatkan Nyawa Bayi Prematur","Ketiadaan Alat Inkubator Berujung Petaka bagi Pasien Rujukan Desa"),
      c("D2-A2","Laki-laki","22-03-1988","Teknisi Mesin Pabrik",false,12000000,40000000,3200000,15,"Bedah Kanker Istri","Konsumtif",1,"Lancar (Kolektibilitas 1)","Sertifikat Rumah",90000000,"021-8899120","Kepala mekanik pabrik aktif.",true,"Tidak ada kerabat pejabat",true,"APPROVE","","Operasi Pengangkatan Kanker Tuntas, Senyum Pasutri Kembali Merekah","Lambatnya Penanganan Bedah Picu Perburukan Kondisi Pasien Kanker"),
      c("D2-A3","Laki-laki","05-07-1993","Apoteker Farmasi",false,11000000,35000000,2700000,15,"Stok Serum Obat Darurat","Produktif",1,"Lancar (Kolektibilitas 1)","Mobil",60000000,"021-9988114","SIP Apoteker sah aktif.",true,"Tidak ada kerabat pejabat",true,"APPROVE","","Stok Serum Anti-Bisa Ular Tersedia, Nyawa Petani Pinggiran Selamat","Kekosongan Obat Penawar Picu Kepanikan di Fasilitas Kesehatan Pinggiran"),
      c("D2-A4","Perempuan","10-09-1987","Guru Sekolah Dasar",false,8500000,25000000,1650000,18,"Operasi Katarak Orang Tua","Konsumtif",1,"Lancar (Kolektibilitas 1)","Sepeda Motor",22000000,"021-8845112","Guru aktif di sekolah.",true,"Tidak ada kerabat pejabat",true,"APPROVE","","Melihat Dunia Kembali Terang: Pasien Katarak Sembuh Total Pascabedah","Lansia Terancam Kehilangan Penglihatan Permanen Akibat Tunda Operasi"),
      c("D2-A5","Laki-laki","15-02-1984","Kepala Regu Gudang",false,11000000,32000000,2100000,18,"Bedah Ortopedi Anak","Konsumtif",1,"Lancar (Kolektibilitas 1)","Mobil",80000000,"021-7788441","Kepala regu aktif.",true,"Tidak ada kerabat pejabat",true,"APPROVE","","Langkah Pertama Pascacedera: Bocah Korban Patah Tulang Mulai Berjalan","Cedera Patah Tulang Kian Parah, Keluarga Mengeluh Kesulitan Biaya"),
      c("D2-A6","Perempuan","20-03-1996","Staf HRD Perusahaan",false,8000000,18000000,1700000,12,"Fisioterapi Pasca Cedera","Konsumtif",1,"Lancar (Kolektibilitas 1)","Sepeda Motor",24000000,"021-3349001","Staf HRD aktif di kantor.",true,"Tidak ada kerabat pejabat",true,"APPROVE","","Terapi Intensif Tuntas, Produktivitas Staf Logistik Pulih Penuh","Cacat Fisik Menghantui Pasien Akibat Sesi Fisioterapi Terputus")
    ],
    decline: [
      c("D2-D1","Laki-laki","09-06-1995","Supervisor Logistik",false,11000000,30000000,2800000,12,"Paket Wisata Liburan Eropa","Konsumtif",1,"Lancar (Kolektibilitas 1)","Mobil",45000000,"021-7788441","Divisi operasional aktif.",true,"Tidak ada kerabat pejabat",true,"DECLINE","Melanggar Sticky Note: Pengajuan untuk paket wisata/liburan.","Skandal Kredit Liburan Mewah Terbongkar, Kantor Cabang Kena Semprot","Tren Berutang Tiket Pesawat Menurun, Kaum Muda Pilih Tabungan Fisik"),
      c("D2-D2","Laki-laki","17-08-1997","Staf Pergudangan",false,6000000,20000000,1300000,18,"Renovasi Dapur Rumah","Konsumtif",4,"Diragukan / Nunggak 120 Hari (Kolektibilitas 4)","Sepeda Motor",24000000,"021-6655112","Operator gudang kontrak.",true,"Tidak ada kerabat pejabat",true,"DECLINE","Melanggar SOP SLIK: Kolektibilitas 4 (Kredit Diragukan).","Gagal Bayar Cicilan Berulang, Buron Kredit Macet Diburu Aparat","Aksi Gotong Royong Warga Bantu Benahi Dapur Rekan Buruh"),
      c("D2-D3","Laki-laki","29-10-1994","Analis Sistem",false,12000000,26000000,2400000,12,"Tiket Festival Musik Dunia","Konsumtif",1,"Lancar (Kolektibilitas 1)","Mobil",50000000,"021-5544111","Analis sistem kantor kami.",true,"Tidak ada kerabat pejabat",true,"DECLINE","Melanggar Sticky Note: Pengajuan untuk tiket hiburan/konser.","Kredit Foya-Foya Konser Disorot OJK, Kebijakan Kantor Cabang Dievaluasi","Pecinta Musik Gigit Jari: Perbankan Perketat Syarat Pembiayaan Hiburan"),
      c("D2-D4","Perempuan","17-05-1992","Staf Pembukuan",false,8000000,20000000,1800000,12,"Persalinan Caesar","Konsumtif",2,"Perhatian Khusus / Nunggak 60 Hari (Kolektibilitas 2)","Sepeda Motor",15000000,"021-3322119","Staf bagian pembukuan.",true,"Tidak ada kerabat pejabat",true,"DECLINE","Melanggar SOP SLIK: Berstatus Kolektibilitas 2 (Wajib Kolektibilitas 1 Lancar).","Kredit Macet Membengkak Akibat Debitur Bermasalah Kembali Lolos","SOP Tanpa Kompromi: Sistem Skoring SLIK Selamatkan Neraca Bank"),
      c("D2-D5","Laki-laki","21-11-1983","PNS Dishub",false,9000000,25000000,2300000,12,"Renovasi Dapur","Konsumtif",5,"Macet Total (Kolektibilitas 5)","Sepeda Motor",18000000,"021-9988443","PNS seksi lalu lintas.",true,"Tidak ada kerabat pejabat",true,"DECLINE","Melanggar SOP SLIK: Kolektibilitas 5 Macet Total.","Audit Temukan Pencairan Gelap Debitur Berstatus Macet Total","Sanksi Pemecatan Menanti Petugas yang Loloskan Nasabah Bermasalah"),
      c("D2-D6","Perempuan","06-03-1995","Staf Loket Ekspedisi",false,7000000,28000000,2600000,12,"Rawat Jalan Keluarga","Konsumtif",1,"Lancar (Kolektibilitas 1)","Sepeda Motor",14000000,"021-4433221","Petugas loket paket.",true,"Tidak ada kerabat pejabat",true,"DECLINE","Melanggar SOP 1: DTI 37.1% melampaui toleransi 30%.","Jerat Utang Melebihi Batas Gaji Paksa Buruh Ekspedisi Jual Harta","Keluarga Sadar Batas Kemampuan Finansial Usai Penolakan Kredit")
    ]
  },
  3: {
    minCash: 120000000, maxCash: 190000000, deskQuota: { a: 3, d: 2 },
    sticky: "Dilarang keras menyetujui pinjaman untuk anggota keluarga/kerabat pejabat daerah! Ada indikasi suap dan konflik kepentingan.",
    approve: [
      c("D3-A1","Laki-laki","10-03-1981","Kontraktor Bangunan",false,30000000,75000000,6800000,12,"Jembatan Beton Desa","Produktif",1,"Lancar (Kolektibilitas 1)","Sertifikat Tanah",110000000,"021-5544111","Pimpinan operasional proyek.",true,"Tidak ada kerabat pejabat",true,"APPROVE","","Akses Desa Terbuka Penuh, Jembatan Beton Rampung Sebelum Tenggat","Krisis Menyeberang Sungai: Puluhan Pelajar Nyaris Hanyut Menuju Sekolah"),
      c("D3-A2","Perempuan","12-11-1985","Pemilik Katering Rumahan",false,20000000,50000000,4500000,12,"Alat Masak Jamuan Tamu","Produktif",1,"Lancar (Kolektibilitas 1)","Emas Batangan",65000000,"021-3322119","Aktif kelola pesanan katering.",true,"Tidak ada kerabat pejabat",true,"APPROVE","","Katering Tradisional Sukses Sajikan Jamuan Akbar Tamu Mancanegara","Peralatan Kurang Memadai, Usaha Katering Rumahan Merugi Ratusan Juta"),
      c("D3-A3","Laki-laki","29-09-1990","Pedagang Bahan Roti",false,16000000,35000000,3400000,12,"Pasokan Terigu Grosir","Produktif",1,"Lancar (Kolektibilitas 1)","BPKB Minivan",50000000,"021-4433221","Pemilik sah gudang stok.",true,"Tidak ada kerabat pejabat",true,"APPROVE","","Pasokan Terigu UMKM Melimpah, Pabrik Roti Kembali Berasap","Lonjakan Harga Bahan Baku Paksa Puluhan Pengrajin Roti Tutup Toko"),
      c("D3-A4","Laki-laki","14-04-1986","Bengkel Bubut Mandiri",false,22000000,50000000,4500000,12,"Mesin Bubut CNC Presisi","Produktif",1,"Lancar (Kolektibilitas 1)","Sertifikat Tanah",75000000,"021-8877112","Montir bengkel presisi.",true,"Tidak ada kerabat pejabat",true,"APPROVE","","Mesin CNC Presisi Baru Dongkrak Daya Saing Industri Suku Cadang","Mesin Kerap Rusak, Order Komponen Otomotif Lari ke Tangan Asing"),
      c("D3-A5","Perempuan","18-08-1992","Toko Busana Muslim",false,18000000,40000000,3600000,12,"Restok Busana Gamis","Produktif",1,"Lancar (Kolektibilitas 1)","Emas Batangan",55000000,"021-7766554","Pemilik butik busana.",true,"Tidak ada kerabat pejabat",true,"APPROVE","","Omset Butik Busana Tembus Rekor Baru Menjelang Musim Hari Raya","Kekurangan Stok Jelang Hari Raya Buat Pelanggan Butik Kecewa"),
      c("D3-A6","Laki-laki","25-01-1987","Peternak Ayam Petelur",false,24000000,60000000,5300000,12,"Pengadaan Mesin Pakan","Produktif",1,"Lancar (Kolektibilitas 1)","Sertifikat Tanah",85000000,"021-4455663","Peternak ayam mandiri.",true,"Tidak ada kerabat pejabat",true,"APPROVE","","Produksi Pakan Mandiri Tekan Drastis Harga Telur di Pasar Induk","Biaya Pakan Melambung Tinggi, Peternak Lokal Terpaksa Pangkas Populasi")
    ],
    decline: [
      c("D3-D1","Laki-laki","25-01-1998","Pemilik Kafe Pemuda",false,25000000,60000000,5500000,12,"Ekspansi Cabang Kafe","Produktif",1,"Lancar (Kolektibilitas 1)","Sertifikat Ruko",150000000,"021-7788992","Beliau putra Wakil Walikota daerah.",true,"Anak Kandung Wakil Walikota",true,"DECLINE","Melanggar Sticky Note: Kerabat dekat/anak pejabat daerah.","Dugaan Aliran Dana Bank Daerah Mengalir ke Bisnis Keluarga Pejabat","Pejabat Daerah Mengeluh: Bisnis Anak Diperlakukan Sama Ketat"),
      c("D3-D2","Laki-laki","18-04-1992","Bengkel Las Logam",false,18000000,50000000,4600000,12,"Beli Mesin Bubut Presisi","Produktif",1,"Lancar (Kolektibilitas 1)","Pick-Up Tua",52000000,"021-9988443","Richard pemilik bengkel.",true,"Tidak ada kerabat pejabat",true,"DECLINE","Melanggar SOP 3: Agunan hanya 104% (Minimal 120% = Rp60.000.000).","Agunan Tak Tutup Utang: Mobil Sitaan Rusak Gagal Terjual di Lelang","Bengkel Bubut Tahan Ekspansi Hindari Risiko Kerugian Agunan"),
      c("D3-D3","Perempuan","30-07-1993","Penyalur Bibit Sayur",false,15000000,45000000,4100000,12,"Stok Benih Hidroponik","Produktif",1,"Lancar (Kolektibilitas 1)","Sertifikat Kebun",70000000,"021-3311998","Adik ipar Kepala Bappeda.",true,"Adik Ipar Kepala Bappeda",true,"DECLINE","Melanggar Sticky Note: Berstatus kerabat pejabat daerah.","Audit Khusus Selidiki Intervensi Politik pada Alur Fasilitas Kredit","Penyalur Sayur Pilih Cari Investor Mandiri Tanpa Embel Pejabat"),
      c("D3-D4","Laki-laki","11-06-1989","Percetakan Reklame",false,16000000,40000000,3800000,12,"Mesin Cetak Banner","Produktif",1,"Lancar (Kolektibilitas 1)","Mobil MPV",42000000,"021-8822339","Pemilik percetakan banner.",true,"Tidak ada kerabat pejabat",true,"DECLINE","Melanggar SOP 3: Nilai agunan 105% (Wajib 120% = Rp48.000.000).","Bank Menanggung Kerugian Aset Akibat Agunan Debitur di Bawah Standar","Pengusaha Reklame Siapkan Jaminan Properti Baru yang Lebih Solid"),
      c("D3-D5","Perempuan","19-10-1994","Katering Kotak Kantor",false,14000000,35000000,3300000,12,"Peralatan Masak Prasmanan","Produktif",1,"Lancar (Kolektibilitas 1)","Mobil Niaga",38000000,"021-4455881","Istri Kepala Bagian Aset Pemda.",true,"Istri Kabag Aset Daerah",true,"DECLINE","Melanggar Sticky Note: Pasangan pejabat pemda daerah.","Aroma Nepotisme Tercium: Kredit Istri Pejabat Dinilai Tabrak Aturan","Integritas Bank Dipuji: Pengajuan Bisnis Istri Pejabat Resmi Gugur"),
      c("D3-D6","Laki-laki","04-02-1991","Distributor Minyak Goreng",false,20000000,60000000,5600000,12,"Pengadaan Drum Minyak","Produktif",1,"Lancar (Kolektibilitas 1)","Mobil Pick-Up",65000000,"021-3322771","Distributor aktif.",true,"Tidak ada kerabat pejabat",true,"DECLINE","Melanggar SOP 3: Agunan 108% (Kurang dari batas 120%).","Pelelangan Agunan Murah Timbulkan Kerugian Neraca Kantor Cabang","Distributor Minyak Gandeng Rekan Bisnis Demi Penuhi Syarat Jaminan")
    ]
  },
  4: {
    minCash: 140000000, maxCash: 210000000, deskQuota: { a: 3, d: 3 },
    sticky: "Kantor cabang sedang audit portofolio jaminan! Tolak pinjaman jika jaminannya berupa BPKB Sepeda Motor, terima hanya Mobil atau Tanah/Properti!",
    approve: [
      c("D4-A1","Laki-laki","15-08-1993","Supervisor Pabrik Sepatu",false,20000000,55000000,4800000,14,"Mesin Jahit Sepatu Ekspor","Produktif",1,"Lancar (Kolektibilitas 1)","Sertifikat Tanah",80000000,"021-8877112","Supervisor divisi ekspor aktif.",true,"Tidak ada kerabat pejabat",true,"APPROVE","","Lini Mesin Jahit Baru Beroperasi, Ekspor Sepatu Tembus Pasar Amerika","Kapasitas Jahit Minim Gagalkan Kontrak Sepatu Olahraga Mancanegara"),
      c("D4-A2","Laki-laki","05-02-1982","Manajer Operasional Logistik",false,25000000,70000000,6200000,14,"Armada Truk Pangan","Produktif",1,"Lancar (Kolektibilitas 1)","Sertifikat Ruko",110000000,"021-4455663","Manajer tetap sejak 2012.",true,"Tidak ada kerabat pejabat",true,"APPROVE","","Armada Truk Pendingin Meluncur, Stabilitas Pasokan Beras Terjamin","Distribusi Pangan Terganggu Armada Tua, Kerugian Petani Membengkak"),
      c("D4-A3","Laki-laki","11-11-1989","Bengkel Motor Listrik",false,22000000,60000000,5400000,14,"Alat Uji Baterai Motor","Produktif",1,"Lancar (Kolektibilitas 1)","Sertifikat Rumah",85000000,"021-3311998","Pemilik bengkel listrik.",true,"Tidak ada kerabat pejabat",true,"APPROVE","","Bengkel Uji Baterai Dibuka, Puluhan Pemuda Ikuti Pelatihan Konversi","Peralatan Kurang Memadai, Rintisan Bengkel Kendaraan Listrik Mundur"),
      c("D4-A4","Perempuan","24-06-1991","Distributor Susu Balita",false,19000000,45000000,3900000,14,"Stok Susu Pasteurisasi","Produktif",1,"Lancar (Kolektibilitas 1)","Mobil Box",60000000,"021-6677889","Distributor susu berizin.",true,"Tidak ada kerabat pejabat",true,"APPROVE","","Pasokan Susu Formula Terjamin, Kebutuhan Gizi Bayi Daerah Aman","Stok Susu Segar Kosong, Orang Tua Keluhkan Kenaikan Harga di Pasaran"),
      c("D4-A5","Laki-laki","17-03-1985","Pengelola Penggilingan Padi",false,26000000,75000000,6500000,14,"Penggantian Saringan Gabah","Produktif",1,"Lancar (Kolektibilitas 1)","Sertifikat Sawah",115000000,"021-9988334","Pengelola pabrik giling padi.",true,"Tidak ada kerabat pejabat",true,"APPROVE","","Kualitas Penggilingan Padi Meningkat Tajam, Hasil Panen Diborong Pedagang","Mesin Giling Kerap Macet, Kualitas Beras Petani Merosot Tajam"),
      c("D4-A6","Perempuan","09-12-1993","Pabrik Tahu Tradisional",false,17000000,45000000,3900000,14,"Ketel Uap Boiler Higienis","Produktif",1,"Lancar (Kolektibilitas 1)","Mobil Sedan",60000000,"021-2233445","Pengelola pabrik tahu bersih.",true,"Tidak ada kerabat pejabat",true,"APPROVE","","Produksi Ramah Lingkungan: Pabrik Tahu Pasang Ketel Boiler Higienis","Pabrik Tahu Masih Andalkan Kayu Bakar Akibat Gagal Pasang Boiler"),
      c("D4-A7","Laki-laki","28-04-1988","Pemasok Sayur Supermarket",false,21000000,55000000,4800000,14,"Mobil Pendingin Sayur","Produktif",1,"Lancar (Kolektibilitas 1)","Sertifikat Gudang",85000000,"021-8899776","Pemasok sayur organik sah.",true,"Tidak ada kerabat pejabat",true,"APPROVE","","Sayuran Segar Tembus Rak Swalayan Besar Berkat Mobil Pendingin","Sayuran Petani Busuk di Perjalanan Akibat Armada Tanpa Pendingin")
    ],
    decline: [
      c("D4-D1","Laki-laki","10-04-1997","Staf Pergudangan Modern",false,16000000,40000000,3500000,12,"Renovasi Rumah Tinggal","Konsumtif",1,"Lancar (Kolektibilitas 1)","Mobil Sedan",55000000,"021-7766554","Staf administrasi gudang.",true,"Tidak ada kerabat pejabat",false,"DECLINE","Melanggar SOP 4: Dokumen KTP palsu (Tanggal NIK tidak cocok).","Sindikat KTP Palsu Kuras Uang Bank, Polisi Bongkar Pabrik Dokumen","Petugas Jeli Cek Nomor Induk, Percobaan Penipuan Berkas Digagalkan"),
      c("D4-D2","Perempuan","14-09-1996","Sekretaris Eksekutif",false,14000000,40000000,3200000,14,"Biaya Pernikahan","Konsumtif",1,"Lancar (Kolektibilitas 1)","Sertifikat Tanah",65000000,"021-9999000","Nomor tidak terdaftar.",false,"Tidak ada kerabat pejabat",true,"DECLINE","Melanggar SOP 4: Telepon kantor fiktif/tidak terdaftar.","Modus Surat Kerja Bodong Bobol Bank,Pelaku Terancam Pidana Penjara","Telepon Kantor Tak Berdering,Verifikasi Analis Berhasil Tangkal Modus Fiktif"),
      c("D4-D3","Laki-laki","19-07-1991","Depo Pasir Material",false,18000000,40000000,3600000,14,"Restok Pasir Cor Beton","Produktif",1,"Lancar (Kolektibilitas 1)","BPKB Sepeda Motor",55000000,"021-8822339","Pemilik depo pasir aktif.",true,"Tidak ada kerabat pejabat",true,"DECLINE","Melanggar Sticky Note: Agunan berupa BPKB Sepeda Motor.","Kredit Sitaan Motor Penuhi Gudang, Otoritas Perintahkan Audit Portofolio","Pengusaha Depo Alihkan Jaminan ke Sertifikat Properti Milik Keluarga"),
      c("D4-D4","Laki-laki","22-10-1993","Toko Kelontong",false,15000000,35000000,3100000,14,"Stok Bahan Dapur","Produktif",1,"Lancar (Kolektibilitas 1)","BPKB Sepeda Motor Sport",45000000,"021-3344118","Toko kelontong terdaftar.",true,"Tidak ada kerabat pejabat",true,"DECLINE","Melanggar Sticky Note: Jaminan dilarang BPKB Motor.","Lelang Motor Sitaan Catat Kerugian Besar pada Neraca Kantor Cabang","Pedagang Kelontong Manfaatkan Tabungan Pribadi Demi Tambah Pasokan"),
      c("D4-D5","Perempuan","03-05-1995","Staf Penjualan Properti",false,13000000,30000000,2800000,12,"DP Apartemen Kecil","Konsumtif",1,"Lancar (Kolektibilitas 1)","Mobil Sedan",40000000,"021-0001111","Nomor salah sambung bengkel.",false,"Tidak ada kerabat pejabat",true,"DECLINE","Melanggar SOP 4: Telepon kantor salah sambung/fiktif.","Perusahaan Bodong Catut Nama Karyawan untuk Ajukan Pinjaman Konsumtif","Penelusuran Nomor Fiktif Gagalkan Pengajuan Kredit Tanpa Legalitas"),
      c("D4-D6","Laki-laki","14-01-1992","Staf Ekspedisi",false,12000000,30000000,2700000,14,"Kamera Hobi Pribadi","Konsumtif",1,"Lancar (Kolektibilitas 1)","BPKB Motor Matik",38000000,"021-9988220","Staf paket aktif.",true,"Tidak ada kerabat pejabat",true,"DECLINE","Melanggar Sticky Note: Jaminan motor tidak diterima.","Koleksi Motor Tarikan Numpuk, Pimpinan Cabang Ditegur Manajemen","Karyawan Tunda Beli Kamera Mewah, Belajar Menahan Pengeluaran Konsumtif"),
      c("D4-D7","Perempuan","27-08-1990","Pembuat Kue Basah",false,14000000,35000000,3200000,14,"Mixer Roti Kapasitas Besar","Produktif",1,"Lancar (Kolektibilitas 1)","BPKB Motor Trail",45000000,"021-4433119","Pembuat kue pasar.",true,"Tidak ada kerabat pejabat",true,"DECLINE","Melanggar Sticky Note: Jaminan kendaraan roda dua.","Debitur Bawa Kabur Motor Jaminan, Bank Catat Lonjakan NPL","Pengusaha Kue Basah Sepakat Ganti Agunan Pakai Dokumen Tanah")
    ]
  },
  5: {
    minCash: 190000000, maxCash: 260000000, deskQuota: { a: 3, d: 3 },
    sticky: "Ekonomi sedang lesu! Utamakan sektor produktif. Jangan setujui kredit konsumtif untuk barang mewah/elektronik!",
    approve: [
      c("D5-A1","Laki-laki","08-03-1988","Produsen Kopi Lokal",false,25000000,75000000,6800000,14,"Mesin Penggiling Kopi UMKM","Produktif",1,"Lancar (Kolektibilitas 1)","Sertifikat Ruko",110000000,"021-4455881","Produsen kopi aktif kami.",true,"Tidak ada kerabat pejabat",true,"APPROVE","","Kopi Robusta Lokal Sukses Dipasarkan di Puluhan Gerai Swalayan","Petani Kopi Terpaksa Melego Biji Mentah dengan Potongan Harga"),
      c("D5-A2","Perempuan","24-10-1983","Distributor Pupuk Pertanian",false,30000000,85000000,8000000,14,"Pupuk Hayati Petani Desa","Produktif",1,"Lancar (Kolektibilitas 1)","Sertifikat Sawah",130000000,"021-6677889","Penyalur pupuk resmi terdaftar.",true,"Tidak ada kerabat pejabat",true,"APPROVE","","Stok Pupuk Hayati Aman, Masa Semai Petani Sayur Berjalan Lancar","Kelangkaan Pupuk Melanda, Ratusan Hektare Sawah Terancam Puso"),
      c("D5-A3","Laki-laki","02-04-1987","Pengusaha Roti Keliling",false,28000000,85000000,7800000,14,"Armada Van Roti Keliling","Produktif",1,"Lancar (Kolektibilitas 1)","Sertifikat Rumah",125000000,"021-2233445","Mitra pengembang rute armada.",true,"Tidak ada kerabat pejabat",true,"APPROVE","","Armada Van Menjangkau Pelanggan Baru, Penjualan Roti Keliling Melesat","Toko Roti Membatalkan Rute Baru Akibat Ketiadaan Kendaraan Operasional"),
      c("D5-A4","Laki-laki","12-07-1984","Pabrik Pengolahan Sabun",false,32000000,90000000,8100000,14,"Mesin Cetak Sabun Batang","Produktif",1,"Lancar (Kolektibilitas 1)","Sertifikat Pabrik",140000000,"021-8877665","Pemilik pabrik sabun higienis.",true,"Tidak ada kerabat pejabat",true,"APPROVE","","Sabun Batang Alami UMKM Penuhi Rak Grosir Skala Besar","Pabrik Sabun Kewalahan Hadapi Lonjakan Pesanan Distributor"),
      c("D5-A5","Perempuan","06-05-1989","Pengrajin Sepatu Kulit",false,22000000,65000000,5800000,14,"Bahan Kulit Sapi Samakan","Produktif",1,"Lancar (Kolektibilitas 1)","Sertifikat Rumah",95000000,"021-4433887","Pengrajin sepatu resmi aktif.",true,"Tidak ada kerabat pejabat",true,"APPROVE","","Sepatu Kulit Buatan Tangan Lokal Tembus Ajang Pameran Dagang Internasional","Pengrajin Sepatu Kehabisan Bahan Kulit, Pesanan Ekspor Dibatalkan"),
      c("D5-A6","Laki-laki","19-11-1986","Bengkel Las Konstruksi",false,27000000,80000000,7200000,14,"Mesin Potong Laser Plasma","Produktif",1,"Lancar (Kolektibilitas 1)","Sertifikat Tanah",120000000,"021-9988001","Pimpinan bengkel las aktif.",true,"Tidak ada kerabat pejabat",true,"APPROVE","","Teknologi Pemotongan Laser Plasma Percepat Konstruksi Rangka Jembatan","Pesanan Konstruksi Baja Beralih ke Luar Kota Akibat Ketiadaan Mesin Presisi"),
      c("D5-A7","Perempuan","15-08-1992","Budidaya Jamur Tiram",false,20000000,55000000,4900000,14,"Kumbung Jamur Suhu Lembab","Produktif",1,"Lancar (Kolektibilitas 1)","Sertifikat Kebun",80000000,"021-7788110","Ketua kelompok jamur tiram.",true,"Tidak ada kerabat pejabat",true,"APPROVE","","Budidaya Jamur Tiram Modern Penuhi Permintaan Pasar Induk Sayur","Kumbung Jamur Tradisional Rusak, Petani Merugi Puluhan Juta")
    ],
    decline: [
      c("D5-D1","Laki-laki","19-05-1992","Staf HRD Perusahaan",false,16000000,30000000,2800000,12,"TV Mewah & Home Theater","Konsumtif",1,"Lancar (Kolektibilitas 1)","Mobil",45000000,"021-3322771","HRD tambang aktif.",true,"Tidak ada kerabat pejabat",true,"DECLINE","Melanggar Sticky Note: Kredit konsumtif barang mewah/elektronik.","Kredit Perangkat Elektronik Mewah Berujung Sitaan Lembaga Finansial","Keluarga Karyawan Pilih Utamakan Tabungan Masa Depan Anak"),
      c("D5-D2","Laki-laki","11-07-1994","Marketing Media",false,18000000,35000000,4200000,10,"Renovasi Atap Bocor","Konsumtif",1,"Lancar (Kolektibilitas 1)","Mobil",50000000,"021-9988334","Staf periklanan aktif.",true,"Tidak ada kerabat pejabat",true,"DECLINE","Melanggar SOP 5: DTI Konsumtif 23.3% melampaui batas 20%.","Beban Cicilan Menggunung Hempaskan Pendapatan Karyawan Swasta","Warga Gotong Royong Perbaiki Atap Rumah Warga Kurang Mampu"),
      c("D5-D3","Perempuan","17-09-1990","Pemilik Laundry Kiloan",false,20000000,50000000,4800000,14,"Ekspansi Cabang Laundry","Produktif",1,"Lancar (Kolektibilitas 1)","Pick-Up Tua",52000000,"021-8899776","Pengelola cucian baju.",true,"Tidak ada kerabat pejabat",true,"DECLINE","Melanggar SOP 3: Agunan hanya 104% (Minimal 120% = Rp60.000.000).","Agunan Murah Picu Kerugian Kantor Cabang Pascakegagalan Usaha Cuci","Pengusaha Laundry Lengkapi Agunan Sertifikat Tanah Keluarga"),
      c("D5-D4","Laki-laki","04-12-1993","Staf Operasional Pabrik",false,15000000,30000000,3600000,10,"Beli Smartphone Flagship","Konsumtif",1,"Lancar (Kolektibilitas 1)","Mobil",45000000,"021-5566778","Operator mesin pabrik.",true,"Tidak ada kerabat pejabat",true,"DECLINE","Melanggar Sticky Note: Kredit konsumtif gadget/elektronik mewah.","Gaya Hidup Berutang Gadget Canggih Jerat Kalangan Buruh Pabrik","Buruh Pabrik Menahan Diri dari Godaan Pembelian Ponsel Pintar Mahal"),
      c("D5-D5","Perempuan","13-03-1991","Staf Pembukuan Koperasi",false,14000000,28000000,3200000,10,"Perhiasan Emas Pesta","Konsumtif",1,"Lancar (Kolektibilitas 1)","Mobil",40000000,"021-8877665","Staf kasir koperasi.",true,"Tidak ada kerabat pejabat",true,"DECLINE","Melanggar SOP 5: DTI Konsumtif 22.8% (Maksimal 20%).","Jerat Kredit Perhiasan Berujung Pemotongan Upah Kerja Karyawan","Pegawai Koperasi Sadari Bahaya Pembelian Barang Konsumtif Secara Kredit"),
      c("D5-D6","Laki-laki","28-09-1989","Teknisi Pendingin Ruang",false,17000000,40000000,4200000,12,"Komputer Gaming Spek Tinggi","Konsumtif",1,"Lancar (Kolektibilitas 1)","Mobil",55000000,"021-3322667","Teknisi AC aktif.",true,"Tidak ada kerabat pejabat",true,"DECLINE","Melanggar Sticky Note: Pembelian elektronik mewah konsumtif.","Komputer Canggih Ditarik Penagih Utang Usai Debitur Menunggak Cicilan","Teknisi AC Pilih Sisihkan Penghasilan Mingguan untuk Beli Komputer"),
      c("D5-D7","Perempuan","07-06-1994","Guru Bimbingan Belajar",false,12000000,25000000,2900000,10,"Kulkas Side-by-Side Impor","Konsumtif",1,"Lancar (Kolektibilitas 1)","Mobil",35000000,"021-5544332","Pengajar bimbel tetap.",true,"Tidak ada kerabat pejabat",true,"DECLINE","Melanggar SOP 5: DTI Konsumtif 24.1% melampaui limit 20%.","Beban Angsuran Melilit Guru Pengajar Akibat Belanja Elektronik Rumah Tangga","Pengajar Bimbel Urungkan Niat Mengganti Perangkat Pendingin Rumah")
    ]
  },
  6: {
    minCash: 210000000, maxCash: 330000000, deskQuota: { a: 4, d: 3 },
    sticky: "Dukung kuota pembiayaan program 'Wanita Mandiri'! Hari ini tolak pemohon laki-laki jika pengajuannya untuk sektor konsumtif!",
    approve: [
      c("D6-A1","Perempuan","10-12-1972","Pengelola Apotek Mandiri",false,30000000,85000000,6500000,48,"Pengembangan Apotek","Produktif",1,"Lancar (Kolektibilitas 1)","Sertifikat Ruko",140000000,"021-9988220","Apoteker penanggung jawab.",true,"Tidak ada kerabat pejabat",true,"APPROVE","","Apotek Desa Buka Layanan Resep Obat Murah untuk Puluhan Keluarga","Warga Mengeluhkan Jarak Tempuh Pengambilan Obat yang Sangat Jauh"),
      c("D6-A2","Laki-laki","15-08-1978","Pabrik Tempe Alami",false,28000000,80000000,6000000,72,"Mesin Perebus Kedelai","Produktif",1,"Lancar (Kolektibilitas 1)","Sertifikat Tanah",125000000,"021-4433119","Pemilik pabrik tempe aktif.",true,"Tidak ada kerabat pejabat",true,"APPROVE","","Pabrik Tempe Higienis Lipatgandakan Produksi Tanpa Pengawet Kimia","Pengrajin Tempe Tradisional Terpuruk Hadapi Lonjakan Permintaan Pasar"),
      c("D6-A3","Laki-laki","04-06-1988","Sablon Kaos Digital",false,25000000,75000000,6500000,36,"Mesin Sablon Kaos Seragam","Produktif",1,"Lancar (Kolektibilitas 1)","Sertifikat Rumah",120000000,"021-6655443","Workshop sablon operasional.",true,"Tidak ada kerabat pejabat",true,"APPROVE","","Sentra Sablon Digital Kebanjiran Pesanan Seragam Pekan Olahraga Daerah","Pesanan Sablon Kaos Skala Besar Lari ke Pabrik Luar Kota"),
      c("D6-A4","Perempuan","08-11-1995","Staf RS Rawat Inap",false,16000000,30000000,2800000,24,"Katarak Mata Ayah","Konsumtif",1,"Lancar (Kolektibilitas 1)","Sertifikat Rumah",50000000,"021-3322880","Pegawai tetap rawat inap.",true,"Tidak ada kerabat pejabat",true,"APPROVE","","Penglihatan Sang Ayah Pulih Pascabedah Berkat Kerja Keras Sang Putri","Operasi Mata Pasien Lansia Tertunda Akibat Ketiadaan Biaya Operasional"),
      c("D6-A5","Perempuan","21-04-1985","Toko Perlengkapan Bayi",false,27000000,75000000,6600000,36,"Stok Kereta Bayi & Popok","Produktif",1,"Lancar (Kolektibilitas 1)","Sertifikat Ruko",115000000,"021-8844330","Pemilik toko bayi aktif.",true,"Tidak ada kerabat pejabat",true,"APPROVE","","Toko Perlengkapan Bayi Buka Gerai Baru dengan Koleksi Terlengkap","Ibu Rumah Tangga Keluhkan Kosongnya Persediaan Kebutuhan Pokok Bayi"),
      c("D6-A6","Laki-laki","18-09-1982","Pabrik Kerupuk Ikan",false,29000000,80000000,7100000,36,"Mesin Pengaduk Adonan Ikan","Produktif",1,"Lancar (Kolektibilitas 1)","Sertifikat Pabrik",130000000,"021-2211445","Pengelola pabrik kerupuk sah.",true,"Tidak ada kerabat pejabat",true,"APPROVE","","Olah Hasil Tangkapan Nelayan, Pabrik Kerupuk Pasok Puluhan Mitra Swalayan","Ratusan Kilogram Daging Ikan Segar Membusuk Tanpa Pengolahan Mesin"),
      c("D6-A7","Perempuan","14-02-1987","Salon & Spa Muslimah",false,22000000,60000000,5300000,24,"Alat Perawatan Wajah Medis","Produktif",1,"Lancar (Kolektibilitas 1)","Sertifikat Rumah",90000000,"021-7755889","Pemilik salon muslimah.",true,"Tidak ada kerabat pejabat",true,"APPROVE","","Klinik Perawatan Muslimah Berkembang Pesat, Buka Lowongan Kerja Baru","Pengembangan Fasilitas Kecantikan Khusus Wanita Terganjal Dana Tunai"),
      c("D6-A8","Laki-laki","03-03-1986","Bengkel Dinamo Listrik",false,24000000,65000000,5800000,36,"Kawat Tembaga & Mesin Gulung","Produktif",1,"Lancar (Kolektibilitas 1)","Sertifikat Gudang",105000000,"021-5558911","Bengkel gulung dinamo resmi.",true,"Tidak ada kerabat pejabat",true,"APPROVE","","Reparasi Mesin Industri Cepat Tuntas, Puluhan Pabrik Kembali Berproduksi","Pabrik Manufaktur Berhenti Beroperasi Menunggu Penggantian Dinamo Rusak")
    ],
    decline: [
      c("D6-D1","Laki-laki","01-01-1970","Peternak Ikan Nila",false,25000000,80000000,5500000,60,"Bibit Kolam Nila","Produktif",1,"Lancar (Kolektibilitas 1)","Sertifikat Lahan",120000000,"021-3344118","Kelompok perikanan binaan.",true,"Tidak ada kerabat pejabat",true,"DECLINE","Melanggar SOP 6: Usia lunas 61 thn (56+5) melampaui batas 60 thn.","Fisik Melemah di Usia Senja, Peternak Ikan Terjerat Cicilan Jangka Panjang","Peternak Senior Resmi Alihkan Legalitas Usaha kepada Generasi Penerus"),
      c("D6-D2","Laki-laki","20-04-1981","Kolektor Mobil Antik",false,20000000,30000000,3200000,24,"Beli Sedan Tua Restorasi","Konsumtif",1,"Lancar (Kolektibilitas 1)","Sertifikat Rumah",60000000,"021-7788552","Komunitas restorasi antik.",true,"Tidak ada kerabat pejabat",true,"DECLINE","Melanggar Sticky Note: Pemohon laki-laki kredit konsumtif.","Kebijakan Program Khusus Dicederai Pengajuan Kredit Mobil Antik","Pria Penggemar Mobil Antik Disiplin Tabung Keuntungan Usaha Sendiri"),
      c("D6-D3","Laki-laki","19-02-1984","Pedagang Komponen Kabel",false,22000000,50000000,5000000,24,"Stok Kabel Tembaga","Produktif",3,"Kurang Lancar / Nunggak 90 Hari (Kolektibilitas 3)","Mobil Niaga",70000000,"021-5566778","Toko komponen alat listrik.",true,"Tidak ada kerabat pejabat",true,"DECLINE","Melanggar SOP SLIK: Kolektibilitas 3 Kurang Lancar.","Pedagang Kabel Bermasalah Masuk Radar Sitaan Pascakredit Macet","Sistem Keuangan Bersih: Bank Tolak Mentah-Mentah Rekam Jejak Kolektibilitas 3"),
      c("D6-D4","Laki-laki","11-09-1983","Staf Operasional Pabrik",false,15000000,35000000,3800000,24,"Perjalanan Wisata Religi","Konsumtif",1,"Lancar (Kolektibilitas 1)","Sertifikat Rumah",65000000,"021-8845112","Staf pabrik shift pagi.",true,"Tidak ada kerabat pejabat",true,"DECLINE","Melanggar Sticky Note: Pria mengajukan kredit konsumtif.","Kredit Wisata Pegawai Lolos Tanpa Izin,Bank Daerah Ditegur Keras Otoritas","Karyawan Swasta Beralih Kumpulkan Dana Mandiri Demi Perjalanan Pribadi"),
	  c("D6-D5","Laki-laki","25-05-1969","Distributor Bahan Bangunan",false,30000000,85000000,6800000,60,"Stok Semen Holcim","Produktif",1,"Lancar (Kolektibilitas 1)","Sertifikat Ruko",145000000,"021-3349001","Distributor semen terdaftar.",true,"Tidak ada kerabat pejabat",true,"DECLINE","Melanggar SOP 6: Usia saat lunas 62 thn (57+5 thn) melewati batas 60 thn.","Kredit Usia Senja Timbulkan Sengketa Waris Pascakematian Debitur","Aturan Batas Usia 60 Tahun Lindungi Hak Finansial Para Penerus Bisnis"),
      c("D6-D6","Laki-laki","16-10-1988","Staf Pengadaan IT",false,18000000,30000000,3200000,24,"Dekorasi Ulang Apartemen","Konsumtif",1,"Lancar (Kolektibilitas 1)","Mobil",50000000,"021-4458900","Divisi pengadaan hardware.",true,"Tidak ada kerabat pejabat",true,"DECLINE","Melanggar Sticky Note: Laki-laki meminjam konsumtif.","Evaluasi Kredit: Portofolio Khusus Pengusaha Perempuan Nyaris Tergerus","Karyawan Mengurungkan Niat Berutang untuk Perombakan Tempat Tinggal"),
      c("D6-D7","Perempuan","29-12-1992","Staf Kasir Swalayan",false,11000000,25000000,2800000,24,"Pelunasan Utang Paman","Konsumtif",1,"Lancar (Kolektibilitas 1)","Sepeda Motor",15000000,"021-7788441","Kasir swalayan aktif.",true,"Tidak ada kerabat pejabat",true,"DECLINE","Melanggar SOP 5: Rasio DTI Konsumtif 25.4% melampaui batas maksimal 20%.","Kasir Swalayan Terjepit Masalah Utang Warisan Kerabat Keluarga","Penolakan Tepat Petugas Cegah Jeratan Bunga Konsumtif Berkelanjutan"),
      c("D6-D8","Laki-laki","07-07-1980","Pengusaha Konveksi",false,20000000,45000000,4200000,24,"Beli Sepeda Balap Karbon","Konsumtif",1,"Lancar (Kolektibilitas 1)","Sertifikat Tanah",70000000,"021-8899120","Pemilik konveksi kaos.",true,"Tidak ada kerabat pejabat",true,"DECLINE","Melanggar Sticky Note: Pemohon pria meminjam konsumtif.","Plafon Program Wanita Mandiri Bocor untuk Biayai Hobi Mewah Pengusaha","Pemilik Usaha Pakaian Pilih Fokuskan Anggaran untuk Gaji Pegawai")
    ]
  },
  7: {
    minCash: 260000000, maxCash: 370000000, deskQuota: { a: 4, d: 3 },
    sticky: "HARI TERAKHIR AUDIT PUSAT! Pastikan target pencairan kantor tercapai tanpa meloloskan satu pun berkas bermasalah!",
    approve: [
      c("D7-A1","Laki-laki","14-06-1984","Pedagang Grosir Sembako",false,35000000,95000000,8500000,36,"Gudang Distribusi Beras","Produktif",1,"Lancar (Kolektibilitas 1)","Sertifikat Gudang",160000000,"021-8877665","Pemilik dan pengelola gudang.",true,"Tidak ada kerabat pejabat",true,"APPROVE","","Pembangunan Gudang Beras Baru Pastikan Kestabilan Pasokan Pangan Kota","Kapasitas Gudang Minim Picu Kelangkaan Beras Jelang Pergantian Tahun"),
      c("D7-A2","Perempuan","21-08-1991","Dokter Gigi Mandiri",false,32000000,90000000,7800000,36,"Alat Rontgen Panoramic Gigi","Produktif",1,"Lancar (Kolektibilitas 1)","Sertifikat Ruko",150000000,"021-4433887","Surat Izin Praktik Dokter sah.",true,"Tidak ada kerabat pejabat",true,"APPROVE","","Peralatan Rontgen Mandiri Hadirkan Pemeriksaan Gigi Tanpa Antre Panjang","Biaya Rontgen Gigi Mahal di Rumah Sakit Jadi Keluhan Pasien Daerah"),
      c("D7-A3","Laki-laki","17-03-1988","Pengolah Karton Daur Ulang",false,28000000,80000000,7000000,36,"Mesin Cacah Limbah Karton","Produktif",1,"Lancar (Kolektibilitas 1)","Sertifikat Tanah",130000000,"021-7788110","Pabrik karton aktif beroperasi.",true,"Tidak ada kerabat pejabat",true,"APPROVE","","Pabrik Daur Ulang Olah Ratusan Ton Limbah Kertas Menjadi Karton Bernilai","Limbah Kertas Cemari Permukiman Akibat Ketiadaan Mesin Cacah Modern"),
      c("D7-A4","Laki-laki","12-12-1990","Pengrajin Anyaman Bambu",false,22000000,60000000,5200000,24,"Bahan Baku Ekspor Anyaman","Produktif",1,"Lancar (Kolektibilitas 1)","Sertifikat Kebun",95000000,"021-5544332","Penggerak ekspor seni anyam.",true,"Hanya kesamaan nama biasa",true,"APPROVE","","Karya Seni Anyaman Bambu Tradisional Tembus Galeri Seni Benua Eropa","Pengrajin Bambu Jual Alat Produksi Sendiri Demi Tutupi Biaya Bahan"),
      c("D7-A5","Perempuan","09-04-1989","Produsen Minyak Kelapa",false,30000000,85000000,7400000,36,"Mesin Sentrifugasi Virgin Coconut","Produktif",1,"Lancar (Kolektibilitas 1)","Sertifikat Pabrik",145000000,"021-3322119","Penyulingan minyak kelapa alami.",true,"Tidak ada kerabat pejabat",true,"APPROVE","","Minyak Kelapa Murni Asal Petani Desa Sukses Kuasai Gerai Swalayan","Petani Kelapa Merugi Akibat Anjloknya Harga Jual Kelapa Butiran Mentah"),
      c("D7-A6","Laki-laki","28-11-1985","Pengrajin Logam Panci",false,26000000,75000000,6600000,36,"Pengecoran Aluminium Presisi","Produktif",1,"Lancar (Kolektibilitas 1)","Sertifikat Gudang",120000000,"021-9988443","Sentra logam panci tradisional.",true,"Tidak ada kerabat pejabat",true,"APPROVE","","Industri Alat Dapur Lokal Dobrak Pasar Nasional dengan Kualitas Unggul","Pesanan Wajan dan Panci Beralih ke Produk Impor Akibat Pabrik Mandek"),
      c("D7-A7","Perempuan","16-07-1987","Pabrik Keramik Lantai",false,34000000,95000000,8400000,36,"Tungku Pembakar Keramik Suhu Tinggi","Produktif",1,"Lancar (Kolektibilitas 1)","Sertifikat Tanah",165000000,"021-4433221","Pimpinan pabrik keramik hias.",true,"Tidak ada kerabat pejabat",true,"APPROVE","","Tungku Suhu Tinggi Baru Genjot Produksi Keramik Artistik Berkualitas","Pabrik Keramik Lokal Hentikan Produksi Akibat Kerusakan Tungku Lama"),
      c("D7-A8","Laki-laki","05-10-1986","Depo Penjual Es Balok",false,24000000,65000000,5700000,24,"Mesin Kompresor Es Ikan Nelayan","Produktif",1,"Lancar (Kolektibilitas 1)","Sertifikat Rumah",110000000,"021-8877112","Pemasok es balok pelabuhan.",true,"Tidak ada kerabat pejabat",true,"APPROVE","","Pasokan Es Balok Terjamin Penuh, Nelayan Amankan Kualitas Hasil Laut","Tangkapan Nelayan Membusuk di Tengah Laut Akibat Pabrik Es Berhenti"),
    ],
    decline: [
      c("D7-D1","Laki-laki","10-05-1969","Juragan Angkutan Kota",false,22000000,60000000,4800000,60,"Peremajaan Mesin Armada","Produktif",1,"Lancar (Kolektibilitas 1)","Sertifikat Tanah",100000000,"021-9988001","Koordinator trayek timur.",true,"Tidak ada kerabat pejabat",true,"DECLINE","Melanggar SOP 6: Usia lunas 62 thn (57+5) melampaui batas 60 thn.","Pengemudi Lansia Terpuruk Bayar Angsuran Saat Stamina Fisik Tergerus","Koperasi Angkutan Ambil Alih Peremajaan Mesin Tanpa Bebani Lansia"),
      c("D7-D2","Laki-laki","09-04-1985","Mantan Staf Distribusi Daging",false,25000000,65000000,5800000,36,"Freezer Cold Storage","Produktif",1,"Lancar (Kolektibilitas 1)","Sertifikat Rumah",95000000,"021-3322667","Pak Anton sudah resmi berhenti sebulan lalu.",false,"Tidak ada kerabat pejabat",true,"DECLINE","Melanggar SOP 4: Verifikasi telepon kantor fiktif / telah berhenti kerja.","Modus Surat Keterangan Kerja Palsu Berhasil Dijerat Tim Pengawas Bank","Verifikasi Akurat Petugas Selamatkan Kas Bank dari Penipuan Mantan Pegawai"),
      c("D7-D3","Laki-laki","07-05-1987","Staf Administrasi Kantor",false,16000000,40000000,4200000,24,"Mobil Sedan Bekas Pribadi","Konsumtif",1,"Lancar (Kolektibilitas 1)","Mobil",50000000,"021-8844330","Staf tata usaha aktif di sini.",true,"Tidak ada kerabat pejabat",true,"DECLINE","Melanggar SOP 5: Rasio DTI Konsumtif 26.2% melampaui batas maksimal 20%.","Kendaraan Pribadi Ditarik Debt Collector Usai Pegawai Gagal Setor Cicilan","Keluarga Memilih Merawat Kendaraan Lama Ketimbang Bebani Gaji Pokok"),
      c("D7-D4","Perempuan","14-03-1994","Staf Pemasaran Properti",false,15000000,35000000,3800000,18,"Perhiasan Berlian Pesta","Konsumtif",1,"Lancar (Kolektibilitas 1)","Mobil",45000000,"021-7766554","Staf marketing perumahan.",true,"Keponakan Sekretaris Daerah",true,"DECLINE","Melanggar SOP 3 & 5: DTI Konsumtif 25.3% dan berstatus keponakan Sekda.","Aparat Selidiki Dugaan Kredit Konsumtif Istimewa bagi Keluarga Pejabat","Pemberian Kredit Bebas Nepotisme: Pengajuan Keponakan Pejabat Dicoret"),
      c("D7-D5","Laki-laki","22-11-1983","Pedagang Grosir Pakaian",false,24000000,60000000,5600000,24,"Restok Busana Impor","Produktif",4,"Diragukan / Nunggak 150 Hari (Kolektibilitas 4)","Mobil Box",80000000,"021-4455663","Pemilik kios busana pasar baru.",true,"Tidak ada kerabat pejabat",true,"DECLINE","Melanggar SOP 2: Riwayat kredit macet SLIK OJK Kolektibilitas 4.","Debitur Bermasalah Berulah Lagi, Pengajuan Pinjaman Baru Ditolak Tegas","Ketegasan Sistem SLIK Sukses Cegah Potensi Kredit Macet Berulang"),
      c("D7-D6","Perempuan","18-09-1991","Pemilik Butik Sepatu",false,18000000,50000000,4800000,24,"Bahan Kulit Sintetis","Produktif",1,"Lancar (Kolektibilitas 1)","Sepeda Motor Matic",25000000,"021-3311998","Pengelola butik mandiri.",true,"Tidak ada kerabat pejabat",true,"DECLINE","Melanggar SOP 3 & 4: Nilai agunan 50% dan jaminan motor dilarang.","Kerugian Lelang Agunan Rendah Mengancam Stabilitas Finansial Kantor","Pengusaha Sepatu Putuskan Gunakan Modal Sendiri Tanpa Ambil Risiko"),
      c("D7-D7","Laki-laki","30-01-1993","Staf Operasional Logistik",false,14000000,35000000,3200000,24,"Renovasi Rumah Kontrakan","Konsumtif",1,"Lancar (Kolektibilitas 1)","Sertifikat Rumah",60000000,"021-9999111","Nomor tidak terpasang di jaringan.",false,"Tidak ada kerabat pejabat",true,"DECLINE","Melanggar SOP 4: Telepon kantor fiktif/tidak terhubung.","Nomor Perusahaan Tak Berfungsi,Upaya Pencairan Dana Fiktif Kandas","Pemeriksaan Kontak Fisik Buktikan Ketelitian Petugas di Meja Kredit"),
      c("D7-D8","Laki-laki","26-08-1970","Pengepul Karet Alam",false,26000000,70000000,5800000,60,"Timbangan Digital Karet","Produktif",1,"Lancar (Kolektibilitas 1)","Sertifikat Lahan",110000000,"021-8822339","Koperasi getah karet primer.",true,"Tidak ada kerabat pejabat",true,"DECLINE","Melanggar SOP 6: Usia saat lunas 61 tahun (melebihi batas maksimal 60 tahun).","Faktor Usia Senja Berisiko Macetkan Pinjaman Produktif Bernilai Tinggi","Pengepul Karet Serahkan Penuh Manajemen Operasional kepada Putranya")
    ]
  }
};
// =============================================================================
// 4. ENGINE GENERATOR & EXPANDER (MEMBENTUK ARRAY GLOBAL DAYS_DATA)
// =============================================================================
function generateDaysData() {
  const result = [];
  usedNames.clear();

  for (let dayNum = 1; dayNum <= 7; dayNum++) {
    const cfg = MASTER_CONFIG[dayNum];
    if (!cfg) continue;

    const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

    const pickedApprove = shuffle(cfg.approve).slice(0, cfg.deskQuota.a);
    const pickedDecline = shuffle(cfg.decline).slice(0, cfg.deskQuota.d);
    const deskClients = shuffle([...pickedApprove,...pickedDecline]);

    const formattedClients = deskClients.map((item, idx) => {
      const birthYear = parseInt(item.dob.split("-")[2], 10);
      const calculatedAge = 2026 - birthYear;
      const tenorYears = parseFloat((item.tenM / 12).toFixed(2));
      const clientName = getName(item.g);
      const clientNik = makeNik(item.dob, item.g, item.isNikOk);

      return {
        id: `${dayNum}.${idx + 1}`,
        name: clientName,
        age: calculatedAge,
        gender: item.g,
        job: item.job,
        isFreelance: item.isFree,
        income: item.inc,
        loan: item.loan,
        installment: item.inst,
        tenorMonths: item.tenM,
        tenorYears: tenorYears,
        purpose: item.purp,
        sector: item.sec,
        slikKol: item.kol,
        slikDesc: item.kDesc,
        collateralType: item.colT,
        collateralValue: item.colV,
        nik: clientNik,
        birthDate: item.dob,
        isNikValid: item.isNikOk,
        phoneContact: `${item.phNo} (${item.job.split(" ")[0]} Kantor)`,
        phoneResponse: item.phResp,
        isPhoneValid: item.isPhOk,
        familyRelation: item.rel,
        correctDecision: item.dec,
        failReason: item.fail,
        newsApprove: item.nApp,
        newsDecline: item.nDec
      };
    });

    result.push({
      day: dayNum,
      minCash: cfg.minCash,
      maxCash: cfg.maxCash,
      stickyText: cfg.sticky,
      clients: formattedClients
    });
  }

  return result;
}
