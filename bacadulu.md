# 📖 BACA DULU — Panduan Developer & Laporan Progress Proyek ToolboxID

Dokumen ini ditulis khusus agar developer manusia maupun **sistem AI coding assistant berikutnya** tahu persis status progress proyek saat ini, struktur file, dan bagaimana melanjutkan pengembangannya tanpa mengulangi/merusak kode yang sudah ada.

> [!IMPORTANT]
> **ATURAN UTAMA AI / DEVELOPER:**
> 1. Proyek ini bernama **ToolboxID** (Bukan *ToolboxMaarbID*). Jangan ubah nama brand ini!
> 2. Logo situs dan favicon terletak di root folder `Kode_Web/` dengan nama `logo.png` dan `favicon.png`.
> 3. Setiap kali selesai melakukan update kode, **WAJIB memperbarui dokumen `bacadulu.md` ini** agar progress berikutnya terpantau rapi.

---

## 📌 Status Progress Proyek (Per 12 Juni 2026)

### ✅ Fitur yang Sudah Selesai Dikerjakan:
1. **Rebranding Global (ToolboxID)**: Seluruh file HTML utama dan tool anak telah diubah namanya menjadi **ToolboxID** di meta tags, `<title>`, header, navbar, dan footer.
2. **PWA & Offline Support**:
   - Dibuat file [manifest.json](file:///d:/ANTIGRAVITY%20VIBE%20CODE/TOOLS_FREE/Kode_Web/manifest.json) untuk standarisasi install PWA di HP/Desktop.
   - Dibuat file [sw.js](file:///d:/ANTIGRAVITY%20VIBE%20CODE/TOOLS_FREE/Kode_Web/sw.js) (Service Worker) dengan strategi cache *Network-First* yang secara otomatis menyimpan seluruh aset internal dan eksternal (CDN) agar bisa digunakan 100% offline.
   - PWA telah diregistrasikan di [index.html](file:///d:/ANTIGRAVITY%20VIBE%20CODE/TOOLS_FREE/Kode_Web/index.html).
3. **Penyelarasan Logo & Favicon**:
   - Ikon logo browser (Favicon) telah ditambahkan di semua 24 halaman HTML anak menggunakan berkas `favicon.png` dengan jalur relatif `../favicon.png` agar tidak kosong.
   - Emoji kotak perkakas `🧰` pada navbar atas semua halaman telah diganti menggunakan elemen `<img src="logo.png">` baru yang diputar 3D.
   - Warna latar `.logo-box` diubah menjadi ungu gelap `#1a1225` untuk integrasi visual yang halus dengan logo.
4. **Navigasi Logo Pintar**:
   - Ketika logo di navbar utama diklik, browser akan melakukan *smooth scroll* langsung ke bagian **Semua Tools** (`#tools-section`).
   - Ketika logo diklik dari halaman tool anak, pengguna diarahkan kembali ke halaman utama dan otomatis bergulir ke bagian **Semua Tools** (`../index.html#tools-section`).
5. **Penambahan 9 Tools Baru**:
   - **Kalkulator PPh21**: Perhitungan pajak progresif Pasal 17 (UU HPP 2024), metode Gross & Gross-Up, input Rupiah dinamis, dan rincian lapis tarif.
   - **QR Code Generator**: Membuat QR dari URL, Teks, WiFi, dan vCard Kontak. Custom warna foreground/background, logo tengah custom, emoji preset, dan ekspor PNG/JPG.
   - **Merge PDF**: Menggabungkan file PDF client-side dengan library `pdf-lib` secara offline, reordering baris, dan info total halaman.
   - **Emoji Picker**: Pencarian emoji cepat dengan kata kunci, penyalinan langsung, dan keranjang emoji (multi-copy bar).
   - **Diff Checker**: Membandingkan dua versi teks secara berdampingan (*side-by-side*) atau digabung (*unified*) dan menyoroti perbedaannya secara visual.
   - **JSON Formatter & Validator**: Merapikan JSON berantakan (*beautify*), memadatkan (*minify*), memvalidasi struktur data, dan menyoroti warna kode.
   - **Lorem Ipsum Generator**: Menghasilkan paragraf, kalimat, atau kata teks dummy secara instan untuk kebutuhan desain mockup.
   - **Base64 Text Converter**: Mengonversi teks biasa ke format kode Base64 atau sebaliknya secara aman (mendukung teks UTF-8).
   - **Social Media Downloader**: Mengunduh video TikTok tanpa watermark secara gratis, serta video dari YouTube, Instagram, dan Twitter/X secara instan (menggunakan API Cobalt v10 dengan 7 server fallback).
 6. **Dashboard & Sidebar Kategori Interaktif**: Tata letak filter diubah menjadi sidebar kategori yang nempel (sticky) di sebelah kiri pada layar lebar (desktop) dan baris scroll horizontal di layar sempit (mobile/tablet). Jumlah item terhitung secara dinamis untuk masing-masing kategori, menyembunyikan kategori kosong, dan dilengkapi tombol "Clear all".
 7. **Perbaikan Tampilan Ikon Search Bar**: Memperbaiki bug di mana logo/ikon pencarian tertutup atau hilang saat tombol navbar diklik/scrolled, dengan mengubah urutan stacking HTML dan menetapkan z-index: 2 pada elemen ikon agar selalu berada di atas input pencarian.
 8. **Kolase Kartu Hero Showcase**: Mengisi ruang kosong di sisi kanan Hero section pada desktop menggunakan kolase kartu preview kaca (glassmorphic cards) interaktif yang mewakili tools terpopuler (Background Remover, Social Downloader, dan Color Palette), lengkap dengan micro-animations mengapung yang mulus dan rotasi 3D. Seluruh warna teks (seperti judul dan field input) dan latar kartu disesuaikan otomatis untuk mode gelap (*dark mode*) agar kontrasnya terjaga dan tetap terbaca.
 9. **Skrip CLI Downloader Mandiri (`downloader.js`)**: Membuat skrip command-line berbasis Node.js untuk memproses pengunduhan media dari berbagai situs sosial media menggunakan v10 Cobalt API secara andal dengan rantai fallback, penanganan CORS otomatis, info progres unduhan, dan panduan mitigasi metadata durasi video stream.
10. **Panduan Tips Durasi Video & Seek**: Menambahkan kotak info tip (`.dl-info-banner`) di halaman `tools/social-downloader.html` dan juga panduan di skrip `downloader.js` yang memberikan edukasi ke pengguna mengapa video hasil unduhan dari server Cobalt publik kadang tidak memiliki durasi atau tidak bisa di-seek (akibat remuxing ffmpeg instan pada server tersebut), serta cara mengatasinya (mengunduh berkas secara utuh atau mencoba download ulang dengan fallback/server kustom).
 11. **Skrip Konversi PDF ke Word dengan Python (`pdf_to_word.py`)**: Membuat skrip Python pembantu menggunakan pustaka `pdf2docx` untuk melakukan rekonstruksi layout PDF ke Word secara presisi (mempertahankan font, letak gambar, tabel, kolom, dan layout asli). Serta mengintegrasikan panduan/banner panduan penggunaan skrip Python tersebut di dalam halaman konverter web offline `tools/pdf-to-word.html` agar pengguna yang membutuhkan akurasi visual 100% dapat menggunakannya dengan mudah. Skrip Python ini telah dilengkapi proteksi unicode (safe_print) agar tidak crash karena `UnicodeEncodeError` saat dijalankan di console/terminal Windows standard (CMD/PowerShell). Tampilan banner peringatan dan panduan juga disesuaikan agar memiliki kontras premium dan terbaca dalam Mode Gelap (*dark mode*).
 12. **Kalkulator Travel Budget Indonesia**: Estimasi biaya keliling berbagai kota di Indonesia dengan skema sharing cost penginapan & kendaraan bersama rombongan. Memiliki database biaya kota bawaan, fine-tuning alokasi harian per kota dengan slider kustom, deteksi gaya perjalanan (Backpacker, Mid-range, Luxury), transit antar kota, dana darurat, cetak PDF, save otomatis ke LocalStorage, dan bagikan rencana via URL terenkripsi.
 13. **Rekomendasi Web Ebook Gratis (WeLib)**: Menambahkan rekomendasi perpustakaan buku digital terlengkap WeLib (`https://id.welib.st/`) ke dalam daftar rekomendasi web gratis di halaman utama.

---

## 📂 Struktur Folder Proyek
```text
TOOLS_FREE/
├── index.html                 # Halaman Utama (Daftar Tools & Rekomendasi Web)
├── logo.png                   # Aset Logo Utama Website
├── favicon.png                # Ikon Tab Browser
├── manifest.json              # File manifest PWA
├── sw.js                      # Service Worker offline cache
├── tools/                     # Kumpulan Halaman Tools (Offline-Friendly)
│   ├── background-remover.html
│   ├── base64-text.html       # Base64 Text Converter
│   ├── color-palette.html
│   ├── csv-to-json.html
│   ├── diff-checker.html      # Diff Checker (Bandingkan Teks)
│   ├── emoji-picker.html      # Pencari Emoji & Keranjang Salin
│   ├── image-compress.html
│   ├── image-convert.html
│   ├── image-to-base64.html
│   ├── jpg-to-pdf.html
│   ├── json-formatter.html    # JSON Formatter & Validator
│   ├── kalkulator-pph21.html  # Kalkulator Pajak PPh21 2024
│   ├── lorem-ipsum.html       # Lorem Ipsum Generator
│   ├── markdown-editor.html
│   ├── password-generator.html
│   ├── pdf-extractor.html
│   ├── pdf-merge.html         # Penggabung PDF
│   ├── pdf-to-word.html
│   ├── qr-generator.html      # QR Code Generator Kustom
│   ├── social-downloader.html # Social Media Downloader (TikTok, YT, IG)
│   ├── text-case.html
│   ├── timestamp-converter.html
│   ├── travel-budget-indonesia.html # Kalkulator Travel Budget Indonesia [NEW]
│   ├── url-shortener.html
│   └── zip-extractor.html
├── README.md                  # Dokumentasi Proyek Umum
└── bacadulu.md                # File Ini (Developer/AI Checklist)
```

---

## 🛠️ Panduan Pengembangan Selanjutnya (Backlog)

Seluruh backlog sebelumnya telah diselesaikan:
1. ✅ **Integrasi PWA Install Prompt**: Tombol install kustom ditambahkan di navbar dan mendengarkan event `beforeinstallprompt`.
2. ✅ **Fitur "Tools Terfavorit" (Starring)**: Bintang ditambahkan di setiap kartu, favorit disimpan di `localStorage` dan baris/grid "Favorit Kamu" dirender secara dinamis di atas grid utama.
3. ✅ **Dark Mode Toggle**: Switcher ditambahkan di navbar index.html dan seluruh 24 halaman anak telah diinjeksi dengan skrip deteksi tema & styling dark mode.
4. ✅ **Penyempurnaan & Perbaikan Bug Social Media Downloader**: Menambahkan rantai fallback otomatis dari API TikWM ke server Cobalt jika TikWM down/terjadi error (sehingga download TikTok 100% andal). Menangani status response `picker` pada API Cobalt v10 agar Instagram carousel/slideshow dengan banyak media bisa diunduh secara individu di UI. Menambahkan error handler pada tag `<video>` agar jika pemutaran video langsung di browser terblokir oleh kebijakan CORS/hotlink asal platform (seperti Instagram/YouTube), UI menampilkan pesan edukasi yang ramah dan mengarahkan pengguna untuk mengunduhnya langsung. Mengubah badge status di halaman utama menjadi 'Baru' (aktif).

Berikut adalah backlog baru untuk pengembangan selanjutnya:
1. **Penyempurnaan Ekstraksi PDF ke Word**: Meningkatkan format ekspor `.doc` agar lebih mempertahankan tata letak visual PDF asli.
2. **Custom Shortcut Keyboard**: Tambahkan dukungan pintasan keyboard global (misal: `/` untuk fokus ke search bar secara instan).
3. **Penyimpanan Riwayat Penggunaan**: Menyimpan riwayat tool yang terakhir dibuka di localStorage dan menampilkannya di halaman utama.
