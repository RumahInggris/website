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

  /* ------------------------------------------------------------
     KUIS LIVE: Basic Grammar Quiz (halaman #kuis)
     Tiap soal: q (tulis ___ untuk bagian kosong), options (3 pilihan),
     answer (nomor pilihan yang benar, mulai dari 0), rule (rumus berwarna),
     why (penjelasan singkat). Warna: {{S|subjek}} {{V|kata kerja}} dll.
     ------------------------------------------------------------ */
  quiz: {
    title: "Basic Grammar Quiz",
    topics: [
    {
    id: "sp",
    label: "Simple Present",
    intro: "15 soal. Jawab di kolom komentar: A, B, atau C!",
    sets: ["Set 1: Akhiran s, es, dan ies", "Set 2: Do, does, dan doesn't", "Set 3: Subjek, urutan kata, dan am / is / are"],
    items: [
      {"set": 0, "q": "My mother ___ a small shop.", "options": ["has", "have", "haves"], "answer": 0, "rule": "{{S|He / She / It}} + {{V|has}}", "why": "{{S|My mother}} sama dengan she. Kata {{V|have}} berubah bentuk menjadi {{V|ha|s}}. Tidak ada kata haves."},
      {"set": 0, "q": "The baby ___ every night.", "options": ["cry", "cries", "crys"], "answer": 1, "rule": "{{V|konsonan + y}} + {{e|ies}}", "why": "Cry berakhir konsonan + y, jadi huruf y diganti ==ies==: {{V|cr|ies}}."},
      {"set": 0, "q": "She ___ TV every night.", "options": ["watch", "watches", "watchs"], "answer": 1, "rule": "{{V|-s, -sh, -ch, -x, -o}} + {{e|es}}", "why": "Watch berakhir -ch, jadi tambah ==es==: {{V|watch|es}}."},
      {"set": 0, "q": "My brother ___ English at school.", "options": ["studies", "studys", "study"], "answer": 0, "rule": "{{V|konsonan + y}} + {{e|ies}}", "why": "{{S|My brother}} sama dengan he. Study berakhir konsonan + y, jadi y diganti ==ies==: {{V|stud|ies}}."},
      {"set": 0, "q": "He ___ to school by bus.", "options": ["go", "gos", "goes"], "answer": 2, "rule": "{{V|-s, -sh, -ch, -x, -o}} + {{e|es}}", "why": "Go berakhir -o, jadi tambah ==es==: {{V|go|es}}. Subjek he butuh kata kerja berakhiran s atau es."},

      {"set": 1, "q": "She doesn't ___ coffee.", "options": ["likes", "liked", "like"], "answer": 2, "rule": "{{S|He / She / It}} + {{V|doesn't}} + {{V|kata kerja dasar (V1)}}", "why": "Setelah {{V|doesn't}}, kata kerja ==polos== (tanpa s): {{V|like}}. Tanda s sudah pindah ke doesn't."},
      {"set": 1, "q": "___ your brother play football?", "options": ["Do", "Does", "Is"], "answer": 1, "rule": "{{V|Does}} + {{S|he / she / it}} + {{V|kata kerja dasar (V1)}}?", "why": "{{S|Your brother}} sama dengan he, jadi pertanyaannya memakai {{V|Does}}. Kata kerja play tetap polos."},
      {"set": 1, "q": "I ___ like fish.", "options": ["doesn't", "don't", "not"], "answer": 1, "rule": "{{S|I / You / We / They}} + {{V|don't}} + {{V|kata kerja dasar (V1)}}", "why": "{{S|I}} memakai {{V|don't}}, bukan doesn't. Kata not saja tidak cukup untuk kalimat negatif."},
      {"set": 1, "q": "___ they live in Jakarta?", "options": ["Does", "Are", "Do"], "answer": 2, "rule": "{{V|Do}} + {{S|I / you / we / they}} + {{V|kata kerja dasar (V1)}}?", "why": "{{S|They}} memakai {{V|Do}}. Live adalah kata kerja biasa, jadi tidak memakai are."},
      {"set": 1, "q": "Does she ___ English?", "options": ["speaks", "speaking", "speak"], "answer": 2, "rule": "{{V|Does}} + {{S|he / she / it}} + {{V|kata kerja dasar (V1)}}?", "why": "Setelah {{V|Does}}, kata kerja ==polos==: {{V|speak}}. Tanda s sudah ada di does."},

      {"set": 2, "q": "My parents ___ in a bank.", "options": ["work", "works", "is work"], "answer": 0, "rule": "{{S|They}} + {{V|kata kerja dasar (V1)}}", "why": "{{S|My parents}} sama dengan they (lebih dari satu orang), jadi kata kerjanya ==tanpa s==: {{V|work}}."},
      {"set": 2, "q": "They ___ at home.", "options": ["is", "am", "are"], "answer": 2, "rule": "{{S|You / We / They}} + {{V|are}}", "why": "{{S|They}} memakai {{V|are}}. Am, is, dan are dipakai untuk menyatakan siapa, bagaimana, atau di mana."},
      {"set": 2, "q": "Pilih kalimat dengan urutan kata yang benar.", "options": ["I usually get up at six.", "I get usually up at six.", "Usually I am get up at six."], "answer": 0, "rule": "{{S|Subjek}} + {{A|kata keterangan}} + {{V|kata kerja (V1)}}", "why": "Kata keterangan frekuensi diletakkan ==sebelum kata kerja==: {{A|usually}} {{V|get up}}."},
      {"set": 2, "q": "___ time does he start work?", "options": ["How", "What", "Why"], "answer": 1, "rule": "{{A|Kata tanya}} + {{V|does}} + {{S|he / she / it}} + {{V|kata kerja dasar (V1)}}?", "why": "{{A|What time}} artinya jam berapa. Setelah does, kata kerja tetap ==polos==: {{V|start}}."},
      {"set": 2, "q": "I ___ a student.", "options": ["is", "am", "are"], "answer": 1, "rule": "{{S|I}} + {{V|am}}", "why": "{{S|I}} selalu memakai {{V|am}}. Is untuk he, she, it, dan are untuk you, we, they."}
    ],
    cta: {
      title: "Sudah ketemu jawabannya? Sekarang pahami alasannya.",
      text: "Semua soal tadi dibahas lengkap, dengan contoh, rumus berwarna, dan latihan, di course Grammar Dasar, Topik 1: Simple Present.",
      buttons: [["Mulai belajar Simple Present", "#pelajaran-simplepresent-pelajari"], ["Lihat cara beli", "#beli"]]
    }
    },
    {
    id: "pc",
    label: "Present Continuous",
    intro: "15 soal. Jawab di kolom komentar: A, B, atau C!",
    sets: ["Set 1: Am, is, are + kata kerja-ing", "Set 2: Kalimat negatif dan pertanyaan", "Set 3: Ejaan -ing dan beda dengan Simple Present"],
    items: [
      {"set": 0, "q": "She ___ a book now.", "options": ["is reading", "reads", "read"], "answer": 0, "rule": "{{S|He / She / It}} + {{V|is}} + {{V|kata kerja dasar (V1)}} + {{e|ing}}", "why": "Kata {{A|now}} menunjukkan kejadian yang sedang berlangsung. Pola: {{S|she}} {{V|is}} {{V|read|ing}}."},
      {"set": 0, "q": "I ___ English right now.", "options": ["am study", "am studying", "studying"], "answer": 1, "rule": "{{S|I}} + {{V|am}} + {{V|kata kerja dasar (V1)}} + {{e|ing}}", "why": "{{S|I}} memakai {{V|am}}, dan kata kerjanya ditambah ==ing==: {{V|study|ing}}. Am saja tanpa ing belum lengkap."},
      {"set": 0, "q": "They ___ football at the moment.", "options": ["is playing", "play", "are playing"], "answer": 2, "rule": "{{S|You / We / They}} + {{V|are}} + {{V|kata kerja dasar (V1)}} + {{e|ing}}", "why": "{{S|They}} memakai {{V|are}}. {{A|At the moment}} artinya sekarang: {{V|are}} {{V|play|ing}}."},
      {"set": 0, "q": "He is ___ a letter.", "options": ["write", "writes", "writing"], "answer": 2, "rule": "{{S|He / She / It}} + {{V|is}} + {{V|kata kerja dasar (V1)}} + {{e|ing}}", "why": "Setelah {{V|is}}, kata kerja memakai ==ing==: {{V|writ|ing}}. Write membuang huruf e sebelum ing."},
      {"set": 0, "q": "We ___ for the bus.", "options": ["are waiting", "is waiting", "waiting"], "answer": 0, "rule": "{{S|You / We / They}} + {{V|are}} + {{V|kata kerja dasar (V1)}} + {{e|ing}}", "why": "{{S|We}} memakai {{V|are}}: {{V|are}} {{V|wait|ing}}."},

      {"set": 1, "q": "She isn't ___ TV.", "options": ["watch", "watching", "watches"], "answer": 1, "rule": "{{S|He / She / It}} + {{V|isn't}} + {{V|kata kerja dasar (V1)}} + {{e|ing}}", "why": "Negatif: tambah ==not== setelah is. Kata kerjanya tetap memakai ing: {{V|watch|ing}}."},
      {"set": 1, "q": "___ you eating lunch?", "options": ["Do", "Is", "Are"], "answer": 2, "rule": "{{V|Are}} + {{S|you / we / they}} + {{V|kata kerja dasar (V1)}} + {{e|ing}}?", "why": "Pertanyaan: pindahkan {{V|are}} ke depan. Tidak memakai do atau does."},
      {"set": 1, "q": "I ___ sleeping.", "options": ["am not", "isn't", "don't"], "answer": 0, "rule": "{{S|I}} + {{V|am not}} + {{V|kata kerja dasar (V1)}} + {{e|ing}}", "why": "Untuk {{S|I}}, negatifnya {{V|am not}}. Jangan pakai isn't atau don't untuk kalimat ini."},
      {"set": 1, "q": "___ he working today?", "options": ["Are", "Is", "Does"], "answer": 1, "rule": "{{V|Is}} + {{S|he / she / it}} + {{V|kata kerja dasar (V1)}} + {{e|ing}}?", "why": "{{S|He}} memakai {{V|Is}}. Does tidak dipakai bersama kata kerja-ing."},
      {"set": 1, "q": "What ___ they doing?", "options": ["is", "do", "are"], "answer": 2, "rule": "{{A|Kata tanya}} + {{V|are}} + {{S|you / we / they}} + {{V|kata kerja dasar (V1)}} + {{e|ing}}?", "why": "{{A|What}} {{V|are}} {{S|they}} {{V|do|ing}}? {{S|They}} memakai {{V|are}}, dan kata kerjanya memakai ing."},

      {"set": 2, "q": "She is ___ a cake.", "options": ["making", "makeing", "maked"], "answer": 0, "rule": "{{V|kata kerja berakhir e}} + {{e|ing}}", "why": "Make berakhir huruf e, jadi huruf e dibuang sebelum ing: {{V|mak|ing}}."},
      {"set": 2, "q": "The children are ___ in the park.", "options": ["runing", "running", "runs"], "answer": 1, "rule": "{{V|konsonan + vokal + konsonan}} + {{e|ing}}", "why": "Run berakhir konsonan, vokal, konsonan (pola pendek), jadi huruf terakhir digandakan: {{V|runn|ing}}."},
      {"set": 2, "q": "Look! The baby ___.", "options": ["cries", "cry", "is crying"], "answer": 2, "rule": "{{A|Look! / Listen!}} + {{V|is / are}} + {{V|kata kerja dasar (V1)}} + {{e|ing}}", "why": "Kata {{A|Look!}} menunjukkan kejadian yang sedang berlangsung, jadi memakai {{V|is}} {{V|cry|ing}}."},
      {"set": 2, "q": "My father usually works at night, but today he ___ at home.", "options": ["is working", "works", "work"], "answer": 0, "rule": "{{S|He / She / It}} + {{V|is}} + {{V|kata kerja dasar (V1)}} + {{e|ing}}", "why": "{{A|Usually}} menunjukkan kebiasaan (Simple Present). {{A|Today}} menunjukkan kejadian sementara yang sedang berlangsung: {{V|is}} {{V|work|ing}}."},
      {"set": 2, "q": "Pilih kalimat yang benar.", "options": ["She is play tennis.", "She is playing tennis.", "She playing tennis."], "answer": 1, "rule": "{{S|He / She / It}} + {{V|is}} + {{V|kata kerja dasar (V1)}} + {{e|ing}}", "why": "Pola lengkapnya: {{S|she}} {{V|is}} {{V|play|ing}}. Tidak boleh ada kalimat yang kekurangan is atau ing."}
    ],
    cta: {
      title: "Materi Present Continuous sedang disiapkan.",
      text: "Topik ini belum tersedia di course. Sambil menunggu, mulai dari dasarnya dulu di Simple Present, karena kata kerja dan pola kalimatnya jadi dasar topik berikutnya.",
      buttons: [["Mulai belajar Simple Present", "#pelajaran-simplepresent-pelajari"], ["Lihat semua topik Grammar", "#grammar"]]
    }
    }
    ]
  },
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "simplepresent",
      no: 1,
      title: "Simple Present",
      summary: "Kebiasaan, fakta, dan jadwal tetap: I work, she works, he doesn't work.",
      access: "free",
      minutes: 20,
      downloads: [
        { key: 'penjelasan', title: 'PPT Penjelasan', file: 'downloads/simple-present-penjelasan.pptx', data: 'downloads/simple-present.js', name: 'simple-present-penjelasan.pptx', desc: 'Seluruh materi Pelajari dan Pahami dalam bentuk slide: kapan memakai, rumus, aturan s / es, dan kesalahan umum.' },
        { key: 'latihan', title: 'PPT Latihan', file: 'downloads/simple-present-latihan.pptx', data: 'downloads/simple-present.js', name: 'simple-present-latihan.pptx', desc: 'Soal latihan dan ulasan, satu soal per slide, lengkap dengan kunci jawaban dan alasannya di bagian akhir.' }
      ],
      learn: [
        {"t": "text", "g": true, "html": "<strong>Simple Present</strong> dipakai untuk hal yang <mark class='hl'>terjadi berulang</mark> atau <mark class='hl'>selalu benar</mark>: kebiasaan, fakta, dan jadwal tetap. Di halaman ini kamu mengenal kapan memakainya dan mendengar kalimat contohnya. Tekan tombol speaker untuk mendengar."},
        {"t": "video", "src": "video/simple-present-penjelasan.mp4", "poster": "video/simple-present-penjelasan.jpg", "title": "Video penjelasan Simple Present", "text": "Tonton dulu penjelasannya (sekitar 4 menit), lalu lanjut membaca di bawah. Video bisa dijeda dan diulang kapan saja."},
        {"t": "rolekey", "title": "Kunci warna kalimat", "example": "{{S|She}} {{V|drink|s}} {{J|hot}} {{O|tea}} {{A|every morning}}.", "note": "Garis bawah di ujung kata kerja adalah akhiran s atau es yang muncul untuk he, she, dan it."},
        {"t": "explain", "title": "Simple Present dipakai untuk tiga hal", "lead": "Kalau hal itu <strong>berulang</strong>, <strong>selalu benar</strong>, atau <strong>sudah dijadwalkan</strong>, kamu memakai Simple Present.", "points": [{"icon": "🔁", "tone": "y", "title": "Kebiasaan", "text": "Sesuatu yang kamu lakukan ==berulang==, misalnya setiap hari.", "ex": "{{S|I}} {{V|get up}} {{A|at six every day}}."}, {"icon": "🌍", "tone": "m", "title": "Fakta", "text": "Sesuatu yang ==selalu benar==, di mana pun dan kapan pun.", "ex": "{{S|The sun}} {{V|rise|s}} {{A|in the east}}."}, {"icon": "📅", "tone": "l", "title": "Jadwal tetap", "text": "Sesuatu yang ==sudah dijadwalkan==, seperti kelas atau bus.", "ex": "{{S|The class}} {{V|start|s}} {{A|at eight}}."}], "note": "Tips: Simple Present tidak berarti ‘sedang terjadi sekarang’. Artinya lebih dekat ke ‘biasanya’ atau ‘selalu’."},
        {"t": "key", "label": "Tanda-tandanya", "text": "Ada kata ==always==, ==usually==, ==often==, ==never==, atau ==every day== di kalimat? Itu tanda kuat **Simple Present**."},
        {"t": "phrases", "g": "y", "title": "A. Kebiasaan sehari-hari", "items": [["{{S|I}} {{V|get up}} {{A|at six every day}}.", "Saya bangun jam enam setiap hari."], ["{{S|She}} {{V|drink|s}} {{O|tea}} {{A|every morning}}.", "Dia minum teh setiap pagi."], ["{{S|We}} {{V|study}} {{O|English}} {{A|on Mondays}}.", "Kami belajar bahasa Inggris setiap hari Senin."], ["{{S|He}} {{A|usually}} {{V|walk|s}} {{A|to school}}.", "Dia biasanya berjalan kaki ke sekolah."]]},
        {"t": "phrases", "g": "m", "title": "B. Fakta yang selalu benar", "items": [["{{S|The sun}} {{V|rise|s}} {{A|in the east}}.", "Matahari terbit di timur."], ["{{S|Water}} {{V|boil|s}} {{A|at 100 degrees Celsius}}.", "Air mendidih pada 100 derajat Celsius."], ["{{S|Fish}} {{V|live}} {{A|in water}}.", "Ikan hidup di air."], ["{{S|Cats}} {{V|like}} {{O|fish}}.", "Kucing suka ikan."]]},
        {"t": "phrases", "g": "l", "title": "C. Jadwal tetap", "items": [["{{S|The class}} {{V|start|s}} {{A|at eight}}.", "Kelas dimulai jam delapan."], ["{{S|The bus}} {{V|leave|s}} {{A|at seven thirty}}.", "Bus berangkat jam tujuh tiga puluh."], ["{{S|The shop}} {{V|open|s}} {{A|at nine}}.", "Toko buka jam sembilan."]]},
        {"t": "table", "adv": true, "title": "Kata penanda waktu yang sering muncul", "head": ["Kata", "Artinya"], "say": [0], "rows": [["{{A|always}}", "selalu"], ["{{A|usually}}", "biasanya"], ["{{A|often}}", "sering"], ["{{A|sometimes}}", "kadang-kadang"], ["{{A|never}}", "tidak pernah"], ["{{A|every day}}", "setiap hari"], ["{{A|on Mondays}}", "setiap hari Senin"]]},
        {"t": "dialogs", "title": "Contoh percakapan", "items": [{"title": "1. Menanyakan kebiasaan", "lines": [["A", "{{A|What time}} {{V|do}} {{S|you}} {{V|get up}}?", "Jam berapa kamu bangun?"], ["B", "{{S|I}} {{V|get up}} {{A|at five thirty}}.", "Saya bangun jam lima tiga puluh."], ["A", "Wow, {{S|that}} {{V|is}} {{J|early}}. {{V|Do}} {{S|you}} {{V|eat}} {{O|breakfast}}?", "Wah, itu pagi sekali. Kamu sarapan?"], ["B", "Yes, {{S|I}} {{V|do}}. {{S|I}} {{V|eat}} {{O|rice and eggs}}.", "Ya. Saya makan nasi dan telur."], ["A", "And {{S|your sister}}?", "Kalau kakak atau adik perempuanmu?"], ["B", "{{S|She}} {{V|doesn't}} {{V|eat}} {{O|breakfast}}. {{S|She}} {{V|drink|s}} {{O|milk}}.", "Dia tidak sarapan. Dia minum susu."]]}, {"title": "2. Tanya jawab di kelas", "lines": [["T", "{{V|Do}} {{S|you}} {{V|like}} {{O|English}}?", "Apakah kamu suka bahasa Inggris?"], ["S", "Yes, {{S|I}} {{V|do}}. {{S|I}} {{V|study}} {{O|it}} {{A|every day}}.", "Ya. Saya belajar setiap hari."], ["T", "{{V|Does}} {{S|your friend}} {{V|study}} {{A|too}}?", "Apakah temanmu juga belajar?"], ["S", "Yes, {{S|he}} {{V|does}}. {{S|He}} {{V|stud|ies}} {{A|with me}}.", "Ya. Dia belajar bersama saya."]]}, {"title": "3. Bertanya tentang pekerjaan", "lines": [["A", "{{A|Where}} {{V|does}} {{S|your father}} {{V|work}}?", "Di mana ayahmu bekerja?"], ["B", "{{S|He}} {{V|work|s}} {{A|in a hospital}}.", "Dia bekerja di rumah sakit."], ["A", "{{V|Is}} {{S|he}} {{O|a doctor}}?", "Apakah dia dokter?"], ["B", "No, {{S|he}} {{V|isn't}}. {{S|He}} {{V|is}} {{O|a nurse}}.", "Bukan. Dia perawat."], ["A", "{{A|What time}} {{V|does}} {{S|he}} {{V|start}} {{O|work}}?", "Jam berapa dia mulai bekerja?"], ["B", "{{S|He}} {{V|start|s}} {{A|at seven}}.", "Dia mulai jam tujuh."]]}]}
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
        {"t": "table", "g": true, "title": "Subjek berupa kata benda: hitung dulu jumlahnya", "head": ["Subjek", "Kata kerja", "Contoh"], "say": [2], "rows": [["{{S|Satu orang atau satu benda}}", "{{V|kata kerja (V1)}} + {{e|s}}", "{{S|My brother}} {{V|play|s}} {{O|football}}."], ["{{S|Lebih dari satu orang atau benda}}", "{{V|kata kerja dasar (V1)}}", "{{S|My parents}} {{V|work}} {{A|in a bank}}."], ["{{S|Dua nama dengan and}}", "{{V|kata kerja dasar (V1)}}", "{{S|Tom and Rina}} {{V|study}} {{A|together}}."]]},
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
          {"title": "5. Kata keterangan frekuensi", "id": "always, usually, often, sometimes, never", "rows": [["Rumus", "{{S|Subjek}} + {{A|kata keterangan}} + {{V|kata kerja (V1)}}"], ["Penjelasan", "Kata keterangan frekuensi biasanya diletakkan ==sebelum kata kerja==. Dengan am, is, atau are, letakkan ==sesudahnya==."]], "ex": [["{{S|I}} {{A|usually}} {{V|get up}} {{A|at six}}.", "Saya biasanya bangun jam enam."], ["{{S|She}} {{A|never}} {{V|eat|s}} {{O|meat}}.", "Dia tidak pernah makan daging."], ["{{S|He}} {{V|is}} {{A|always}} {{J|late}}.", "Dia selalu terlambat."], ["{{S|We}} {{A|sometimes}} {{V|walk}} {{A|to school}}.", "Kami kadang-kadang berjalan kaki ke sekolah."]]},
          {"title": "6. Kata tanya", "id": "Kata tanya + do / does + subjek + kata kerja dasar (V1)?", "rows": [["Rumus", "{{A|Kata tanya}} + {{V|do / does}} + {{S|subjek}} + {{V|kata kerja dasar (V1)}}?"], ["Kata tanya", "**what** = apa · **where** = di mana · **when** = kapan · **why** = mengapa · **what time** = jam berapa · **how often** = seberapa sering"], ["Penjelasan", "Letakkan kata tanya ==di depan==. Sisanya sama seperti pertanyaan biasa, jadi kata kerja tetap ==polos== setelah do atau does."]], "ex": [["{{A|What time}} {{V|do}} {{S|you}} {{V|get up}}?", "Jam berapa kamu bangun?"], ["{{A|Where}} {{V|does}} {{S|she}} {{V|work}}?", "Di mana dia bekerja?"], ["{{A|How often}} {{V|do}} {{S|they}} {{V|play}} {{O|football}}?", "Seberapa sering mereka bermain sepak bola?"], ["{{A|What}} {{V|does}} {{S|he}} {{V|eat}} {{A|for breakfast}}?", "Dia sarapan apa?"]]},
          {"title": "7. Am, is, dan are", "id": "Kalimat tanpa kata kerja biasa: I am, he is, they are", "rows": [["Rumus", "{{S|I}} + {{V|am}}"], ["Rumus", "{{S|He / She / It}} + {{V|is}}"], ["Rumus", "{{S|You / We / They}} + {{V|are}}"], ["Negatif", "Tambah **not**: {{S|I}} {{V|am not}} · {{S|she}} {{V|isn't}} · {{S|they}} {{V|aren't}}"], ["Tanya", "Pindahkan ke depan: {{V|Is}} {{S|she}} {{J|tired}}? Tanpa do atau does."], ["Penjelasan", "Am, is, dan are dipakai untuk ==menyatakan siapa, bagaimana, atau di mana==. Kalau ada kata kerja biasa (work, play, eat), pakai pola do, does, atau s di atas, ==bukan am, is, are==."]], "ex": [["{{S|I}} {{V|am}} {{O|a student}}.", "Saya seorang murid."], ["{{S|She}} {{V|is}} {{J|tired}}.", "Dia lelah."], ["{{S|They}} {{V|are}} {{A|at home}}.", "Mereka ada di rumah."], ["{{V|Is}} {{S|he}} {{O|a doctor}}?", "Apakah dia dokter?"]]}
        ]},
        {"t": "fix", "side": true, "title": "Kesalahan yang sering terjadi", "hint": "Hampir semua kesalahan Simple Present datang dari tanda s. Cek dulu subjeknya, lalu cek apakah ada do atau does.", "items": [
          ["She go to school every day.", "{{S|She}} {{V|go|es}} {{A|to school every day}}.", "Subjek she butuh kata kerja berakhiran ==s atau es==. Go menjadi {{V|go|es}}."],
          ["He don't like fish.", "{{S|He}} {{V|doesn't}} {{V|like}} {{O|fish}}.", "Untuk he, she, dan it, bentuk negatifnya {{V|doesn't}}, bukan don't."],
          ["Does she likes music?", "{{V|Does}} {{S|she}} {{V|like}} {{O|music}}?", "Setelah does, kata kerja ==kembali ke bentuk dasar==: like, bukan likes."],
          ["She doesn't eats breakfast.", "{{S|She}} {{V|doesn't}} {{V|eat}} {{O|breakfast}}.", "Setelah doesn't, pakai kata kerja dasar: eat."],
          ["I am go to school.", "{{S|I}} {{V|go}} {{A|to school}}.", "Am, is, atau are tidak dipakai bersama kata kerja biasa di Simple Present."],
          ["They plays football.", "{{S|They}} {{V|play}} {{O|football}}.", "Subjek they memakai kata kerja dasar, tanpa s."],
          ["My parents works in Jakarta.", "{{S|My parents}} {{V|work}} {{A|in Jakarta}}.", "My parents sama dengan they (lebih dari satu orang), jadi kata kerjanya ==tanpa s==."],
          ["Where does she works?", "{{A|Where}} {{V|does}} {{S|she}} {{V|work}}?", "Setelah does, kata kerja ==polos==: work, bukan works."],
          ["What time you get up?", "{{A|What time}} {{V|do}} {{S|you}} {{V|get up}}?", "Pertanyaan Simple Present butuh ==do atau does== setelah kata tanya."]
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
        {"type": "fill", "part": "Dengar", "say": "The class starts at eight.", "q": "Dengarkan kalimatnya, lalu lengkapi (artinya: Kelas dimulai jam delapan).", "before": "The class", "after": "at eight.", "answers": ["starts"], "why": "The class dihitung satu benda (it), jadi kata kerjanya starts."},
        {"type": "mc", "part": "Kata tanya", "q": "Pilih pertanyaan yang benar.", "options": ["Where does she work?", "Where she works?", "Where does she works?", "Where do she work?"], "answer": 0, "why": "Pola: kata tanya + does + she + kata kerja dasar: Where does she work?"},
        {"type": "order", "part": "Susun kalimat", "q": "Susun menjadi pertanyaan (artinya: Jam berapa kamu bangun?).", "tokens": ["What", "time", "do", "you", "get", "up?"], "answer": "What time do you get up?", "why": "Pola: kata tanya + do + you + kata kerja dasar."},
        {"type": "mc", "part": "Subjek jamak", "q": "Lengkapi: My parents ___ in Jakarta.", "options": ["live", "lives", "living", "is live"], "answer": 0, "why": "My parents sama dengan they (lebih dari satu orang), jadi kata kerjanya tanpa s: live."},
        {"type": "fill", "part": "Ejaan", "q": "Lengkapi kalimatnya (artinya: Dia menonton TV setiap malam).", "before": "She", "after": "TV every night.", "answers": ["watches"], "why": "Watch berakhir -ch, jadi tambah es: watches."},
        {"type": "fill", "part": "Ejaan", "q": "Lengkapi kalimatnya (artinya: Bayi itu menangis setiap malam).", "before": "The baby", "after": "every night.", "answers": ["cries"], "why": "Cry berakhir konsonan + y, jadi y diganti ies: cries."},
        {"type": "fill", "part": "Kata khusus", "q": "Lengkapi kalimatnya (artinya: Ayah saya punya mobil).", "before": "My father", "after": "a car.", "answers": ["has"], "why": "Have berubah bentuk menjadi has untuk he, she, it."},
        {"type": "mc", "part": "Am, is, are", "q": "Pilih kalimat yang benar dengan am, is, atau are.", "options": ["She is a nurse.", "She am a nurse.", "She are a nurse.", "She does a nurse."], "answer": 0, "why": "Untuk she dipakai is: She is a nurse."},
        {"type": "mc", "part": "Perbaiki kalimat", "q": "Mana perbaikan yang benar untuk: My brother don't like fish?", "options": ["My brother doesn't like fish.", "My brother don't likes fish.", "My brother doesn't likes fish.", "My brother not like fish."], "answer": 0, "why": "My brother sama dengan he, jadi pakai doesn't + kata kerja dasar."}
      ],
      apply: { "prompt": "Ceritakan kebiasaan sehari-harimu. Baca kalimat Simple Present ini dengan suara.", "lines": [["I get up at six every day.", "Saya bangun jam enam setiap hari."], ["My mother drinks tea every morning.", "Ibu saya minum teh setiap pagi."], ["She doesn't eat breakfast.", "Dia tidak sarapan."], ["Do you study English every day?", "Apakah kamu belajar bahasa Inggris setiap hari?"], ["The class starts at eight.", "Kelas dimulai jam delapan."], ["What time do you get up?", "Jam berapa kamu bangun?"], ["She is a nurse. She works at night.", "Dia seorang perawat. Dia bekerja pada malam hari."]] },
      review: [
        {"type": "mc", "part": "Pilih yang benar", "q": "Pilih kalimat yang benar.", "options": ["He watches TV at night.", "He watch TV at night.", "He watchs TV at night.", "He is watch TV at night."], "answer": 0, "why": "Watch berakhir -ch, jadi tambah es: watches."},
        {"type": "mc", "part": "Kalimat negatif", "q": "Pilih kalimat negatif yang benar.", "options": ["My father doesn't work on Sundays.", "My father don't work on Sundays.", "My father doesn't works on Sundays.", "My father not work on Sundays."], "answer": 0, "why": "Pola: doesn't + kata kerja dasar. Tidak ada s pada work."},
        {"type": "mc", "part": "Dengar", "say": "Does she live in Bandung?", "q": "Dengarkan pertanyaannya. Apa yang ditanyakan?", "options": ["Apakah dia tinggal di Bandung?", "Apakah dia berasal dari Bandung?", "Di mana dia tinggal?", "Kapan dia pindah ke Bandung?"], "answer": 0, "why": "Does she live in Bandung? menanyakan apakah dia tinggal di Bandung."},
        {"type": "mc", "part": "Jawaban singkat", "q": "Pertanyaannya: Does your brother play football? Jawaban singkat untuk Ya?", "options": ["Yes, he does.", "Yes, he do.", "Yes, he plays.", "Yes, he is."], "answer": 0, "why": "Pertanyaan dengan does dijawab dengan does: Yes, he does."},
        {"type": "mc", "part": "Kata keterangan", "q": "Pilih kalimat yang urutan katanya benar.", "options": ["She never eats meat.", "She eats never meat.", "She is never eat meat.", "Never she eats meat."], "answer": 0, "why": "Never diletakkan sebelum kata kerja: never eats."},
        {"type": "mc", "part": "Kata tanya", "q": "Pilih pertanyaan dengan kata tanya yang benar.", "options": ["What time does he start work?", "What time he starts work?", "What time does he starts work?", "What time do he start work?"], "answer": 0, "why": "Pola: kata tanya + does + he + kata kerja dasar."},
        {"type": "mc", "part": "Subjek jamak", "q": "Lengkapi: The students ___ English every day.", "options": ["study", "studies", "studying", "is study"], "answer": 0, "why": "The students sama dengan they, jadi kata kerjanya tanpa s: study."},
        {"type": "mc", "part": "Am, is, are", "q": "Pilih pertanyaan yang benar dengan is.", "options": ["Is he a doctor?", "Does he a doctor?", "Does he is a doctor?", "Do he is a doctor?"], "answer": 0, "why": "Dengan is, pertanyaan cukup memindahkan is ke depan. Tidak pakai does."},
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
