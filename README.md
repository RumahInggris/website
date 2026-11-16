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
- `audio/` : folder rekaman penutur asli (opsional; kalau kosong, memakai suara browser)
- `js/audio-manifest.js` : daftar rekaman, dibuat otomatis dari folder `audio/`

## Catatan keamanan

Jangan menaruh kunci rahasia (API key, kunci Midtrans/Supabase) di kode. Simpan hanya di environment variable pada layanan hosting. Berkas `.env` sudah diabaikan oleh `.gitignore`.

## Menerbitkan lewat GitHub Pages (gratis)

Situs ini hanya berkas statis, jadi bisa langsung diterbitkan lewat GitHub Pages. Di GitHub gratis, Pages hanya tersedia untuk repositori publik.

1. Repositori > Settings > General > paling bawah "Danger Zone" > Change visibility > Make public.
2. Repositori > Settings > Pages > Source: "Deploy from a branch" > Branch: `main`, folder `/ (root)` > Save.
3. Tunggu 1 sampai 2 menit. Alamatnya: `https://rumahinggris.github.io/website/`

Selama masih prototipe, halaman memakai `noindex` supaya tidak muncul di Google. Hapus baris `<meta name="robots" ...>` di `index.html` saat siap diumumkan.
