# Yang Penting Inggris

Website belajar bahasa Inggris untuk semua kalangan. Kursus pertama: **Speaking Dasar** (6 pelajaran).

## Status

Prototipe lokal: HTML, CSS, dan JavaScript biasa (tanpa build). Data akun dan kemajuan belajar disimpan di localStorage browser.
Belum ada pembayaran, akun asli, atau server.

## Cara menjalankan

Buka `index.html` di browser. Tidak perlu instalasi.

## Struktur

- `index.html` : halaman utama
- `css/style.css` : tampilan
- `js/content.js` : isi 6 pelajaran
- `js/app.js` : logika (halaman, latihan, suara, kemajuan)
- `images/` : gambar

## Catatan keamanan

Jangan menaruh kunci rahasia (API key, kunci Midtrans/Supabase) di kode. Simpan hanya di environment variable pada layanan hosting. Berkas `.env` sudah diabaikan oleh `.gitignore`.
