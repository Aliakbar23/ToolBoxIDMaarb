# ToolboxID — Koleksi Tools Utility Online Gratis

ToolboxID adalah website yang merangkum berbagai macam tools utilitas untuk membantu pekerjaan harian developer, desainer, dan pengguna umum. Seluruh tools berjalan 100% secara lokal di browser (*client-side*), tidak mengunggah data ke server luar, dan gratis digunakan tanpa login.

## 🚀 Fitur Utama
- **100% Client-Side & Privat**: Data Anda (seperti gambar, file PDF, data CSV) diproses langsung di browser Anda. Sangat aman dan menjaga privasi.
- **PWA (Progressive Web App) Enabled**: Website dapat di-install di HP (Android/iOS) maupun PC (Windows/Mac) layaknya aplikasi bawaan.
- **Dukungan Offline Penuh**: Menggunakan Service Worker untuk menyimpan seluruh halaman dan assets di memori cache, sehingga dapat dibuka tanpa koneksi internet sama sekali.
- **Desain Modern & Responsif**: Tampilan estetik, bersih, dan nyaman digunakan baik di layar HP kecil maupun monitor komputer besar.

## 🧰 Daftar Tools yang Tersedia
Website ini memiliki 24 tools yang dibagi berdasarkan kategori berikut:

### 📄 Kategori File & PDF
1. **Merge PDF**: Menggabungkan beberapa file PDF menjadi satu file secara instan dan mengurutkannya secara dinamis.
2. **PDF ke Word**: Mengekstrak teks dan tabel dari file PDF dan menyimpannya menjadi dokumen `.docx`.
3. **JPG ke PDF**: Menggabungkan gambar JPG/PNG menjadi dokumen PDF satu halaman atau multi-halaman.
4. **PDF Image Extractor**: Mengekstrak gambar/foto yang ada di dalam file PDF menjadi format PNG/JPG terpisah.
5. **ZIP Extractor**: Membaca, melihat isi, dan mengekstrak isi file ZIP langsung di browser.

### 🖼️ Kategori Gambar
6. **Kompress Gambar**: Memperkecil resolusi dan ukuran file gambar (PNG/JPG/WEBP) dengan menjaga kualitas visualnya.
7. **Convert Format**: Mengonversi format gambar secara instan (JPG ↔ PNG ↔ WEBP ↔ SVG).
8. **Background Remover**: Menghapus background foto secara instan di browser.
9. **Image to Base64**: Mengonversi file gambar menjadi baris teks Base64 untuk keperluan developer web.

### 📝 Kategori Teks & Data
10. **Markdown Editor**: Editor penulisan teks Markdown dengan hasil pratinjau (*live preview*) langsung.
11. **Text Case Converter**: Mengubah kapitalisasi teks (UPPERCASE, lowercase, Title Case, camelCase, dll).
12. **CSV ke JSON**: Mengonversi data tabel dari file CSV menjadi format data JSON terstruktur.
13. **Diff Checker**: Membandingkan dua versi teks secara berdampingan (*side-by-side*) atau digabung (*unified*) dan menyoroti perbedaannya secara visual.
14. **JSON Formatter & Validator**: Merapikan JSON berantakan (*beautify*), memperkecil data (*minify*), memvalidasi kesalahan sintaks, dan menyoroti warna kode.
15. **Lorem Ipsum Generator**: Menghasilkan paragraf, kalimat, atau kata teks dummy Lorem Ipsum secara instan untuk kebutuhan tata letak desain.
16. **Base64 Text Converter**: Mengonversi teks biasa ke format kode Base64 yang aman atau sebaliknya secara instan.

### 🛠️ Kategori Utility & Dev
17. **Kalkulator PPh21**: Menghitung pajak penghasilan karyawan Pasal 21 tahun 2024 (metode Gross dan Gross-Up) beserta rincian lapis tarif progresifnya secara lengkap.
18. **QR Code Generator**: Membuat QR Code kustom dari URL, teks, WiFi, atau kontak (vCard) lengkap dengan kustomisasi warna dan logo/emoji di tengah.
19. **Emoji Picker**: Mencari emoji dengan cepat, menyalin satu per satu, atau mengumpulkan beberapa emoji sekaligus di keranjang penyalinan.
20. **Color Palette**: Membuat palet warna harmonis dari satu warna dasar.
21. **Password Generator**: Membuat kata sandi acak yang kuat, aman, dan mudah didefinisikan.
22. **Timestamp Converter**: Mengonversi Unix timestamp menjadi format waktu manusia biasa atau sebaliknya.
23. **URL Shortener**: Mempersingkat link/URL panjang menggunakan API gratis pihak ketiga yang aman dilengkapi dengan QR Code otomatis.
24. **Social Media Downloader**: Mengunduh video TikTok tanpa watermark secara gratis, serta video dari YouTube, Instagram, dan Twitter/X secara instan.

---

## 🛠️ Cara Menjalankan & Deploy
### Jalankan Lokal
Karena ini merupakan website statis murni tanpa framework server, Anda bisa membukanya langsung dengan mengeklik dua kali file `index.html` di dalam folder utama (`TOOLS_FREE`).

Jika ingin menguji fitur PWA dan Service Worker secara lokal, jalankan server HTTP lokal di folder utama:
```bash
# Menggunakan python
python -m http.server 8000
```
Lalu buka browser di alamat `http://localhost:8000` atau gunakan ekstensi VS Code Live Server (port 5500) langsung di folder utama.

### Deploy
Website ini siap di-deploy langsung ke hosting statis gratis mana saja:
- **Vercel**
- **Netlify**
- **GitHub Pages**
Karena penyedia di atas secara otomatis menyediakan HTTPS gratis, fitur PWA akan langsung aktif begitu website online.

---
*Dibuat oleh Ali Akbar · ToolboxID*
