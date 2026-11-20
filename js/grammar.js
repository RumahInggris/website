/* ============================================================
   ISI COURSE: Grammar Dasar (level Elementary)

   Cara mengubah isi:
   - Ubah teks di antara tanda kutip " ".
   - Jangan menghapus tanda koma , kurung [ ] dan kurung kurawal { }.
   - Id topik ditulis tanpa tanda hubung (-) dan tanpa spasi.
   - Topik yang belum ditulis cukup berisi id, no, title, summary,
     dan soon: true. Topik seperti itu tampil "Segera hadir".
   - Untuk mengaktifkan topik, hapus soon: true lalu isi lima
     langkahnya (learn, understand, practice, apply, review)
     seperti topik Simple Present di bawah.
   ============================================================ */

window.GRAMMAR = {
  title: "Grammar Dasar",
  level: "Elementary",
  unit: "Topik",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "simplepresent",
      no: 1,
      title: "Simple Present",
      summary: "Kebiasaan, fakta, dan jadwal tetap: I work, she works, he doesn't work.",
      access: "free",
      minutes: 15,
      learn: [
        {"t": "text", "g": true, "html": "<strong>Simple Present</strong> dipakai untuk hal yang <mark class='hl'>terjadi berulang</mark> atau <mark class='hl'>selalu benar</mark>: kebiasaan, fakta, dan jadwal tetap. Di halaman ini kamu mengenal kapan memakainya dan mendengar kalimat contohnya. Tekan tombol speaker untuk mendengar."},
        {"t": "rolekey", "title": "Kunci warna kalimat", "example": "{{S|She}} {{V|drink|s}} {{J|hot}} {{O|tea}} {{A|every morning}}.", "note": "Garis bawah di ujung kata kerja adalah akhiran s atau es yang muncul untuk he, she, dan it."},
        {"t": "explain", "title": "Simple Present dipakai untuk tiga hal", "lead": "Kalau hal itu <strong>berulang</strong>, <strong>selalu benar</strong>, atau <strong>sudah dijadwalkan</strong>, kamu memakai Simple Present.", "points": [{"icon": "🔁", "tone": "y", "title": "Kebiasaan", "text": "Sesuatu yang kamu lakukan ==berulang==, misalnya setiap hari.", "ex": "{{S|I}} {{V|get up}} {{A|at six every day}}."}, {"icon": "🌍", "tone": "m", "title": "Fakta", "text": "Sesuatu yang ==selalu benar==, di mana pun dan kapan pun.", "ex": "{{S|The sun}} {{V|rise|s}} {{A|in the east}}."}, {"icon": "📅", "tone": "l", "title": "Jadwal tetap", "text": "Sesuatu yang ==sudah dijadwalkan==, seperti kelas atau bus.", "ex": "{{S|The class}} {{V|start|s}} {{A|at eight}}."}], "note": "Tips: Simple Present tidak berarti ‘sedang terjadi sekarang’. Artinya lebih dekat ke ‘biasanya’ atau ‘selalu’."},
        {"t": "key", "label": "Tanda-tandanya", "text": "Ada kata ==always==, ==usually==, ==often==, ==never==, atau ==every day== di kalimat? Itu tanda kuat **Simple Present**."},
        {"t": "phrases", "g": "y", "title": "A. Kebiasaan sehari-hari", "items": [["{{S|I}} {{V|get up}} {{A|at six every day}}.", "Saya bangun jam enam setiap hari."], ["{{S|She}} {{V|drink|s}} {{O|tea}} {{A|every morning}}.", "Dia minum teh setiap pagi."], ["{{S|We}} {{V|study}} {{O|English}} {{A|on Mondays}}.", "Kami belajar bahasa Inggris setiap hari Senin."], ["{{S|He}} {{A|usually}} {{V|walk|s}} {{A|to school}}.", "Dia biasanya berjalan kaki ke sekolah."]]},
        {"t": "phrases", "g": "m", "title": "B. Fakta yang selalu benar", "items": [["{{S|The sun}} {{V|rise|s}} {{A|in the east}}.", "Matahari terbit di timur."], ["{{S|Water}} {{V|boil|s}} {{A|at 100 degrees Celsius}}.", "Air mendidih pada 100 derajat Celsius."], ["{{S|Fish}} {{V|live}} {{A|in water}}.", "Ikan hidup di air."], ["{{S|Cats}} {{V|like}} {{O|fish}}.", "Kucing suka ikan."]]},
        {"t": "phrases", "g": "l", "title": "C. Jadwal tetap", "items": [["{{S|The class}} {{V|start|s}} {{A|at eight}}.", "Kelas dimulai jam delapan."], ["{{S|The bus}} {{V|leave|s}} {{A|at seven thirty}}.", "Bus berangkat jam tujuh tiga puluh."], ["{{S|The shop}} {{V|open|s}} {{A|at nine}}.", "Toko buka jam sembilan."]]},
        {"t": "table", "adv": true, "title": "Kata penanda waktu yang sering muncul", "head": ["Kata", "Artinya"], "say": [0], "rows": [["{{A|always}}", "selalu"], ["{{A|usually}}", "biasanya"], ["{{A|often}}", "sering"], ["{{A|sometimes}}", "kadang-kadang"], ["{{A|never}}", "tidak pernah"], ["{{A|every day}}", "setiap hari"], ["{{A|on Mondays}}", "setiap hari Senin"]]},
        {"t": "dialogs", "title": "Contoh percakapan", "items": [{"title": "1. Menanyakan kebiasaan", "lines": [["A", "{{A|What time}} {{V|do}} {{S|you}} {{V|get up}}?", "Jam berapa kamu bangun?"], ["B", "{{S|I}} {{V|get up}} {{A|at five thirty}}.", "Saya bangun jam lima tiga puluh."], ["A", "Wow, {{S|that}} {{V|is}} {{J|early}}. {{V|Do}} {{S|you}} {{V|eat}} {{O|breakfast}}?", "Wah, itu pagi sekali. Kamu sarapan?"], ["B", "Yes, {{S|I}} {{V|do}}. {{S|I}} {{V|eat}} {{O|rice and eggs}}.", "Ya. Saya makan nasi dan telur."], ["A", "And {{S|your sister}}?", "Kalau kakak atau adik perempuanmu?"], ["B", "{{S|She}} {{V|doesn't}} {{V|eat}} {{O|breakfast}}. {{S|She}} {{V|drink|s}} {{O|milk}}.", "Dia tidak sarapan. Dia minum susu."]]}, {"title": "2. Tanya jawab di kelas", "lines": [["T", "{{V|Do}} {{S|you}} {{V|like}} {{O|English}}?", "Apakah kamu suka bahasa Inggris?"], ["S", "Yes, {{S|I}} {{V|do}}. {{S|I}} {{V|study}} {{O|it}} {{A|every day}}.", "Ya. Saya belajar setiap hari."], ["T", "{{V|Does}} {{S|your friend}} {{V|study}} {{A|too}}?", "Apakah temanmu juga belajar?"], ["S", "Yes, {{S|he}} {{V|does}}. {{S|He}} {{V|stud|ies}} {{A|with me}}.", "Ya. Dia belajar bersama saya."]]}]}
      ],
      understand: [
        {"t": "key", "label": "Inti materi", "text": "**He, she, it** → kata kerja + {{e|s}}. Subjek lain → kata kerja ==apa adanya==."},
        {"t": "formula", "title": "Rumus inti dalam satu pandangan", "rows": [
          {"label": "Positif", "parts": [["I / You / We / They", "s"], ["kata kerja dasar (V1)", "v"]], "ex": "{{S|They}} {{V|play}} {{O|football}}."},
          {"label": "Positif", "parts": [["He / She / It", "s"], ["kata kerja (V1)", "v"], ["s / es", "x"]], "ex": "{{S|She}} {{V|play|s}} {{O|football}}."},
          {"label": "Negatif", "parts": [["I / You / We / They", "s"], ["don't", "a"], ["kata kerja dasar (V1)", "v"]], "ex": "{{S|They}} {{V|don't}} {{V|play}} {{O|football}}."},
          {"label": "Negatif", "parts": [["He / She / It", "s"], ["doesn't", "a"], ["kata kerja dasar (V1)", "v"]], "ex": "{{S|She}} {{V|doesn't}} {{V|play}} {{O|football}}."},
          {"label": "Tanya", "parts": [["Do", "a"], ["I / you / we / they", "s"], ["kata kerja dasar (V1)", "v"]], "ex": "{{V|Do}} {{S|they}} {{V|play}} {{O|football}}?"},
          {"label": "Tanya", "parts": [["Does", "a"], ["he / she / it", "s"], ["kata kerja dasar (V1)", "v"]], "ex": "{{V|Does}} {{S|she}} {{V|play}} {{O|football}}?"}
        ]},
        {"t": "table", "g": true, "title": "Kata kerja mengikuti subjek", "head": ["Subjek", "Kata kerja", "Contoh"], "say": [2], "rows": [["{{S|I}}", "{{V|kata kerja dasar (V1)}}", "{{S|I}} {{V|work}} {{A|in a bank}}."], ["{{S|You / We / They}}", "{{V|kata kerja dasar (V1)}}", "{{S|They}} {{V|work}} {{A|in a bank}}."], ["{{S|He / She / It}}", "{{V|kata kerja (V1)}} + {{e|s}}", "{{S|She}} {{V|work|s}} {{A|in a bank}}."]]},
        {"t": "entries", "g": true, "title": "Aturan Simple Present", "items": [
          {"title": "1. Kalimat positif", "id": "Subjek + kata kerja (+ s untuk he, she, it)", "rows": [["Rumus", "{{S|I / You / We / They}} + {{V|kata kerja dasar (V1)}}"], ["Rumus", "{{S|He / She / It}} + {{V|kata kerja (V1)}} + {{e|s}}"], ["Penjelasan", "Satu orang atau satu benda (my brother, the bus, the class) dihitung seperti he, she, atau it, jadi kata kerjanya ==berakhiran s==."]], "ex": [["{{S|I}} {{V|like}} {{O|coffee}}.", "Saya suka kopi."], ["{{S|She}} {{V|like|s}} {{O|tea}}.", "Dia suka teh."], ["{{S|My brother}} {{V|play|s}} {{O|games}}.", "Saudara laki-lakiku bermain game."]]},
          {"title": "2. Cara menambah s, es, atau ies", "id": "Ejaan kata kerja untuk he, she, it", "spell": [
            {"tone": "m", "badge": "+ s", "title": "Kebanyakan kata kerja", "hint": "Cukup tambah **s** di belakang. Berlaku juga untuk vokal + y (play, enjoy).", "words": [["work", "work", "s"], ["read", "read", "s"], ["play", "play", "s"], ["eat", "eat", "s"]]},
            {"tone": "y", "badge": "+ es", "title": "Berakhir huruf ini", "tags": ["-s", "-sh", "-ch", "-x", "-o"], "hint": "Tambah **es** supaya mudah diucapkan.", "words": [["watch", "watch", "es"], ["wash", "wash", "es"], ["go", "go", "es"], ["fix", "fix", "es"]]},
            {"tone": "l", "badge": "y → ies", "title": "Konsonan + y", "hint": "Buang **y**, ganti dengan **ies**.", "words": [["study", "stud", "ies", "y"], ["try", "tr", "ies", "y"], ["cry", "cr", "ies", "y"]]},
            {"tone": "c", "badge": "have → has", "title": "Kata khusus", "hint": "Satu kata ini **bentuknya berubah**. Hafalkan saja.", "words": [["have", "ha", "s", "ve"]]}
          ], "ex": [["{{S|She}} {{V|watch|es}} {{O|TV}} {{A|at night}}.", "Dia menonton TV pada malam hari."], ["{{S|He}} {{V|stud|ies}} {{A|every evening}}.", "Dia belajar setiap malam."], ["{{S|My mother}} {{V|ha|s}} {{O|a}} {{J|small}} {{O|shop}}.", "Ibu saya punya toko kecil."]]},
          {"title": "3. Kalimat negatif", "id": "don't atau doesn't + kata kerja dasar (V1)", "rows": [["Rumus", "{{S|I / You / We / They}} + {{V|don't}} + {{V|kata kerja dasar (V1)}}"], ["Rumus", "{{S|He / She / It}} + {{V|doesn't}} + {{V|kata kerja dasar (V1)}}"], ["Penjelasan", "Setelah doesn't, kata kerja ==kembali ke bentuk dasar== (tanpa s). Tanda s sudah pindah ke doesn't."]], "ex": [["{{S|I}} {{V|don't}} {{V|eat}} {{O|meat}}.", "Saya tidak makan daging."], ["{{S|She}} {{V|doesn't}} {{V|eat}} {{O|meat}}.", "Dia tidak makan daging."], ["{{S|They}} {{V|don't}} {{V|live}} {{A|here}}.", "Mereka tidak tinggal di sini."]]},
          {"title": "4. Pertanyaan", "id": "Do atau Does + subjek + kata kerja dasar (V1)?", "rows": [["Rumus", "{{V|Do}} + {{S|I / you / we / they}} + {{V|kata kerja dasar (V1)}}?"], ["Rumus", "{{V|Does}} + {{S|he / she / it}} + {{V|kata kerja dasar (V1)}}?"], ["Jawaban singkat", "Yes, {{S|I}} {{V|do}}. / No, {{S|I}} {{V|don't}}. / Yes, {{S|she}} {{V|does}}. / No, {{S|she}} {{V|doesn't}}."], ["Penjelasan", "Kata kerja tetap ==bentuk dasar==, tanpa s. Kata tanya (what, where) diletakkan di depan Do atau Does."]], "ex": [["{{V|Do}} {{S|you}} {{V|like}} {{O|music}}?", "Apakah kamu suka musik?"], ["{{V|Does}} {{S|she}} {{V|live}} {{A|in Jakarta}}?", "Apakah dia tinggal di Jakarta?"], ["{{A|What time}} {{V|does}} {{S|the class}} {{V|start}}?", "Jam berapa kelas dimulai?"], ["{{A|Where}} {{V|do}} {{S|they}} {{V|work}}?", "Di mana mereka bekerja?"]]},
          {"title": "5. Kata keterangan frekuensi", "id": "always, usually, often, sometimes, never", "rows": [["Rumus", "{{S|Subjek}} + {{A|kata keterangan}} + {{V|kata kerja (V1)}}"], ["Penjelasan", "Kata keterangan frekuensi biasanya diletakkan ==sebelum kata kerja==. Dengan am, is, atau are, letakkan ==sesudahnya==."]], "ex": [["{{S|I}} {{A|usually}} {{V|get up}} {{A|at six}}.", "Saya biasanya bangun jam enam."], ["{{S|She}} {{A|never}} {{V|eat|s}} {{O|meat}}.", "Dia tidak pernah makan daging."], ["{{S|He}} {{V|is}} {{A|always}} {{J|late}}.", "Dia selalu terlambat."], ["{{S|We}} {{A|sometimes}} {{V|walk}} {{A|to school}}.", "Kami kadang-kadang berjalan kaki ke sekolah."]]}
        ]},
        {"t": "fix", "side": true, "title": "Kesalahan yang sering terjadi", "hint": "Hampir semua kesalahan Simple Present datang dari tanda s. Cek dulu subjeknya, lalu cek apakah ada do atau does.", "items": [
          ["She go to school every day.", "{{S|She}} {{V|go|es}} {{A|to school every day}}.", "Subjek she butuh kata kerja berakhiran ==s atau es==. Go menjadi {{V|go|es}}."],
          ["He don't like fish.", "{{S|He}} {{V|doesn't}} {{V|like}} {{O|fish}}.", "Untuk he, she, dan it, bentuk negatifnya {{V|doesn't}}, bukan don't."],
          ["Does she likes music?", "{{V|Does}} {{S|she}} {{V|like}} {{O|music}}?", "Setelah does, kata kerja ==kembali ke bentuk dasar==: like, bukan likes."],
          ["She doesn't eats breakfast.", "{{S|She}} {{V|doesn't}} {{V|eat}} {{O|breakfast}}.", "Setelah doesn't, pakai kata kerja dasar: eat."],
          ["I am go to school.", "{{S|I}} {{V|go}} {{A|to school}}.", "Am, is, atau are tidak dipakai bersama kata kerja biasa di Simple Present."],
          ["They plays football.", "{{S|They}} {{V|play}} {{O|football}}.", "Subjek they memakai kata kerja dasar, tanpa s."]
        ]},
        {"t": "key", "label": "Ingat ini", "text": "Tanda {{e|s}} hanya muncul **sekali**. Kalau sudah ada {{does}} atau {{doesn't}}, kata kerjanya ==polos== (tanpa s)."}
      ],
      practice: [
        {"type": "mc", "part": "Pilih kalimat", "q": "Pilih kalimat yang benar.", "options": ["She works in a bank.", "She work in a bank.", "She working in a bank.", "She is work in a bank."], "answer": 0, "why": "Subjek she memakai kata kerja berakhiran s: works."},
        {"type": "mc", "part": "Dengar", "say": "He doesn't like coffee.", "q": "Dengarkan kalimatnya. Apa artinya?", "options": ["Dia tidak suka kopi.", "Dia suka kopi.", "Dia membuat kopi.", "Dia tidak minum teh."], "answer": 0, "why": "Doesn't berarti tidak. He doesn't like coffee artinya Dia tidak suka kopi."},
        {"type": "fill", "part": "Isian", "q": "Lengkapi kalimatnya (artinya: Adik perempuanku belajar setiap malam).", "before": "My sister", "after": "every evening.", "answers": ["studies"], "why": "Study berakhir konsonan + y, jadi berubah menjadi studies untuk she."},
        {"type": "fill", "part": "Isian", "q": "Lengkapi kalimatnya (artinya: Mereka bermain sepak bola pada hari Minggu).", "before": "They", "after": "football on Sundays.", "answers": ["play"], "why": "Subjek they memakai kata kerja dasar, tanpa s."},
        {"type": "order", "part": "Susun kalimat", "q": "Susun menjadi kalimat negatif.", "tokens": ["She", "doesn't", "drink", "coffee."], "answer": "She doesn't drink coffee.", "why": "Pola: she + doesn't + kata kerja dasar."},
        {"type": "order", "part": "Susun kalimat", "q": "Susun menjadi pertanyaan.", "tokens": ["Does", "he", "live", "in", "Jakarta?"], "answer": "Does he live in Jakarta?", "why": "Pola: Does + he + kata kerja dasar + ...?"},
        {"type": "mc", "part": "Pilih yang benar", "q": "Lengkapi: Does your brother ___ English?", "options": ["speak", "speaks", "speaking", "spoke"], "answer": 0, "why": "Setelah does, kata kerja kembali ke bentuk dasar: speak."},
        {"type": "mc", "part": "Urutan kata", "q": "Pilih kalimat dengan urutan kata yang benar.", "options": ["I usually get up at six.", "I get usually up at six.", "I am usually get up at six.", "Usually I am get up at six."], "answer": 0, "why": "Kata keterangan frekuensi diletakkan sebelum kata kerja: usually get up."},
        {"type": "fill", "part": "Dengar", "say": "The class starts at eight.", "q": "Dengarkan kalimatnya, lalu lengkapi (artinya: Kelas dimulai jam delapan).", "before": "The class", "after": "at eight.", "answers": ["starts"], "why": "The class dihitung satu benda (it), jadi kata kerjanya starts."}
      ],
      apply: { "prompt": "Ceritakan kebiasaan sehari-harimu. Baca kalimat Simple Present ini dengan suara.", "lines": [["I get up at six every day.", "Saya bangun jam enam setiap hari."], ["My mother drinks tea every morning.", "Ibu saya minum teh setiap pagi."], ["She doesn't eat breakfast.", "Dia tidak sarapan."], ["Do you study English every day?", "Apakah kamu belajar bahasa Inggris setiap hari?"], ["The class starts at eight.", "Kelas dimulai jam delapan."]] },
      review: [
        {"type": "mc", "part": "Pilih yang benar", "q": "Pilih kalimat yang benar.", "options": ["He watches TV at night.", "He watch TV at night.", "He watchs TV at night.", "He is watch TV at night."], "answer": 0, "why": "Watch berakhir -ch, jadi tambah es: watches."},
        {"type": "mc", "part": "Kalimat negatif", "q": "Pilih kalimat negatif yang benar.", "options": ["My father doesn't work on Sundays.", "My father don't work on Sundays.", "My father doesn't works on Sundays.", "My father not work on Sundays."], "answer": 0, "why": "Pola: doesn't + kata kerja dasar. Tidak ada s pada work."},
        {"type": "mc", "part": "Dengar", "say": "Does she live in Bandung?", "q": "Dengarkan pertanyaannya. Apa yang ditanyakan?", "options": ["Apakah dia tinggal di Bandung?", "Apakah dia berasal dari Bandung?", "Di mana dia tinggal?", "Kapan dia pindah ke Bandung?"], "answer": 0, "why": "Does she live in Bandung? menanyakan apakah dia tinggal di Bandung."},
        {"type": "mc", "part": "Jawaban singkat", "q": "Pertanyaannya: Does your brother play football? Jawaban singkat untuk Ya?", "options": ["Yes, he does.", "Yes, he do.", "Yes, he plays.", "Yes, he is."], "answer": 0, "why": "Pertanyaan dengan does dijawab dengan does: Yes, he does."},
        {"type": "mc", "part": "Kata keterangan", "q": "Pilih kalimat yang urutan katanya benar.", "options": ["She never eats meat.", "She eats never meat.", "She is never eat meat.", "Never she eats meat."], "answer": 0, "why": "Never diletakkan sebelum kata kerja: never eats."},
        {"type": "fillset", "part": "Isian beruntun", "q": "Lengkapi empat kalimat Simple Present di bawah ini.", "items": [
          {"q": "Kebiasaan. (Artinya: Saya bangun jam enam.)", "before": "I", "after": "up at six.", "answers": ["get"], "why": "I memakai kata kerja dasar: get up."},
          {"q": "Kalimat positif. (Artinya: Dia bekerja di bank.)", "before": "She", "after": "in a bank.", "answers": ["works"], "why": "She memakai kata kerja berakhiran s: works."},
          {"q": "Kalimat negatif. (Artinya: Dia tidak suka ikan.)", "before": "He", "after": "like fish.", "answers": ["doesn't", "does not"], "why": "He memakai doesn't, lalu kata kerja dasar: like."},
          {"q": "Pertanyaan. (Artinya: Di mana mereka bekerja?)", "before": "Where", "after": "they work?", "answers": ["do"], "why": "Subjek they memakai do."}
        ]}
      ]
    },

    /* ------------------------------------------- topik berikutnya */
    { id: "presentcontinuous", no: 2, title: "Present Continuous", summary: "Hal yang sedang terjadi sekarang: I am studying.", soon: true },
    { id: "simplepast", no: 3, title: "Simple Past", summary: "Kejadian yang sudah selesai: I studied yesterday.", soon: true },
    { id: "simplefuture", no: 4, title: "Simple Future", summary: "Rencana dan janji: I will call you tomorrow.", soon: true },
    { id: "thereisare", no: 5, title: "There is dan There are", summary: "Menyatakan ada atau tidak adanya sesuatu.", soon: true },
    { id: "pronouns", no: 6, title: "Kata ganti dan kepunyaan", summary: "I, me, my, mine dan pasangannya.", soon: true }
  ]
};
