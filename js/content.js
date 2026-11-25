/* ============================================================
   ISI COURSE: Speaking Dasar (level Elementary)
   Sumber: materi "Speaking 1 by Aldo" milik Kang Aldo / Rumah Inggris.

   Cara mengubah isi:
   - Ubah teks di antara tanda kutip " ".
   - Jangan menghapus tanda koma , kurung [ ] dan kurung kurawal { }.
   - Pelajaran ditulis berurutan. Setiap pelajaran punya 5 langkah:
     learn (Pelajari), understand (Pahami), practice (Latihan),
     apply (Praktikkan), review (Ulas).
   ============================================================ */

window.COURSE = {
  title: "Speaking Dasar",
  level: "Elementary",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "salam",
      no: 1,
      title: "Salam dan jawabannya",
      summary: "Hi, Hello, How are you? dan cara menjawabnya.",
      access: "open",
      minutes: 10,
      learn: [
        {"t": "video", "src": "video/salam-penjelasan.mp4", "poster": "video/salam-penjelasan.jpg", "title": "Video penjelasan Salam dan jawabannya", "text": "Tonton dulu penjelasannya (sekitar 3,5 menit), lalu lanjut membaca di bawah. Video bisa dijeda dan diulang kapan saja."},
        {"t": "explain", "title": "Sapaan itu seperti ‘pintu masuk’ percakapan", "lead": "Setiap percakapan sapaan berjalan dalam empat langkah pendek. Kenali urutannya dulu, baru kita pelajari kalimatnya satu per satu.", "points": [{"icon": "👋", "title": "Menyapa", "text": "Mulai dengan Hello atau Hi."}, {"icon": "💬", "title": "Menanyakan kabar", "text": "Lanjutkan dengan How are you?"}, {"icon": "😊", "title": "Menjawab", "text": "Jawab I am fine, thanks."}, {"icon": "🔁", "title": "Bertanya balik", "text": "Tutup dengan And you?"}], "flow": true, "note": "Tips: kamu tidak harus memakai keempat langkah itu setiap kali. Tapi urutan ini adalah cara paling aman untuk memulai."},
        { t: "text", html: "<strong>Sapaan (greeting)</strong> adalah kalimat pembuka percakapan. Percakapan sapaan biasanya berjalan dalam empat langkah: menyapa, menanyakan kabar, menjawab, lalu bertanya balik. Di halaman ini kamu akan mengenal tiap ungkapan beserta artinya, kapan dipakai, cara menjawabnya, dan contoh kalimat lengkap. Tekan tombol speaker untuk mendengar ucapannya." },
        {"t": "chat", "title": "Alur percakapan sapaan", "lead": "Beginilah sapaan berjalan di percakapan sungguhan. Perhatikan label langkah di atas gelembung, lalu tekan ikon suara untuk mendengarnya.", "scenes": [{"title": "Rina bertemu Budi di depan kelas", "msgs": [{"who": "Rina", "side": "l", "en": "Hello.", "id": "Halo.", "tag": "1 · Menyapa"}, {"who": "Budi", "side": "r", "en": "Hello.", "id": "Halo."}, {"who": "Rina", "side": "l", "en": "How are you?", "id": "Apa kabar?", "tag": "2 · Menanyakan kabar"}, {"who": "Budi", "side": "r", "en": "I am fine, thanks.", "id": "Saya baik, terima kasih.", "tag": "3 · Menjawab"}, {"who": "Budi", "side": "r", "en": "And you?", "id": "Dan kamu?", "tag": "4 · Bertanya balik"}, {"who": "Rina", "side": "l", "en": "Great, thank you.", "id": "Bagus sekali, terima kasih."}]}], "note": "Empat langkah itu urutan paling aman: <strong>menyapa → menanyakan kabar → menjawab → bertanya balik</strong>."},
        { t: "entries", title: "Cara menyapa dan menanyakan kabar", items: [
          { en: "Hi.", id: "Hai.",
            when: "Sapaan pendek dan akrab. Dipakai ke teman, keluarga, atau orang sebaya.",
            reply: "Hi. atau Hello.",
            ex: [["Hi, Rina. How are you?", "Hai, Rina. Apa kabar?"], ["Hi, Budi. I am fine, thanks.", "Hai, Budi. Saya baik, terima kasih."]] },
          { en: "Hello.", id: "Halo.",
            when: "Sapaan netral. Bisa dipakai ke siapa saja, baik di situasi formal maupun santai.",
            reply: "Hello. atau Hi.",
            ex: [["Hello, Mr. Aldo. How are you?", "Halo, Pak Aldo. Apa kabar?"], ["Hello, Rina. I am fine, thanks.", "Halo, Rina. Saya baik, terima kasih."]] },
          { en: "How are you?", id: "Apa kabar?",
            when: "Menanyakan keadaan lawan bicara. Cocok untuk siapa saja, formal maupun santai.",
            reply: "Dijawab dengan keadaanmu: I am fine, thanks. / Great. / Not so bad. Setelah menjawab, tanya balik dengan And you?",
            ex: [["Hello, Rina. How are you?", "Halo, Rina. Apa kabar?"], ["I am fine, thanks. And you?", "Saya baik, terima kasih. Dan kamu?"]] },
          { en: "How do you do?", id: "Salam kenal.",
            when: "Formal, hanya untuk pertama kali bertemu. Ini bukan pertanyaan sungguhan tentang kabar, jadi tidak dijawab dengan ceritamu.",
            reply: "Dibalas dengan kalimat yang sama: How do you do?",
            ex: [["Hello, I am Budi. How do you do?", "Halo, saya Budi. Salam kenal."], ["How do you do? I am Rina.", "Salam kenal. Saya Rina."]] },
          { en: "What's up?", id: "Ada apa? / Gimana?",
            when: "Santai. Dipakai ke teman dekat. Artinya bukan \"ada masalah apa\", tapi \"lagi gimana nih?\"",
            reply: "Dijawab santai: Nothing special. (biasa saja)",
            ex: [["Hey Budi, what's up?", "Hei Budi, gimana?"], ["Nothing special. And you?", "Biasa saja. Kamu?"]] },
          { en: "How is it going?", id: "Gimana kabarnya? Lancar?",
            when: "Santai. Menanyakan apakah keadaan atau kegiatan sehari-harimu berjalan lancar.",
            reply: "Great. / Not so bad. / I am fine, thanks.",
            ex: [["Hi, Rina. How is it going?", "Hai, Rina. Gimana kabarnya?"], ["Not so bad, thanks.", "Lumayan, terima kasih."]] },
          { en: "How's life?", id: "Gimana hidupmu belakangan ini?",
            when: "Santai. Cocok untuk teman yang sudah lama kenal atau sudah lama tidak bertemu.",
            reply: "Great. / Not so bad. / Nothing special.",
            ex: [["Hi, Budi. How's life?", "Hai, Budi. Gimana hidupmu belakangan ini?"], ["Not so bad. How about you?", "Lumayan. Kalau kamu?"]] }
        ]},
        { t: "miniquiz", title: "Kapan memakai sapaan yang mana?", items: [
          {"q": "Kamu bertemu dosen untuk pertama kali. Sapaan yang paling sopan?", "options": ["How do you do?", "What's up?", "Hi.", "How's life?"], "why": "How do you do? khusus untuk pertama kali bertemu dan terdengar sopan."},
          {"q": "Dengarkan sapaan ini, lalu pilih artinya.", "options": ["Ada apa? / Gimana?", "Salam kenal.", "Selamat tinggal.", "Terima kasih."], "why": "What's up? adalah sapaan santai yang artinya Ada apa? atau Gimana?", "say": "What's up?"},
          {"q": "Sapaan mana yang paling cocok untuk teman dekat?", "options": ["Hi. What's up?", "How do you do?", "I'm not feeling well.", "Nice to meet you, Professor."], "why": "Hi dan What's up? santai, cocok untuk teman. How do you do? lebih cocok untuk pertemuan pertama yang formal."}
        ]},
        { t: "entries", title: "Cara menjawab", items: [
          { en: "I am fine, thanks.", id: "Saya baik, terima kasih.",
            when: "Jawaban standar yang lengkap dan sopan. Aman dipakai ke siapa saja.",
            reply: "Cocok untuk membalas How are you?",
            ex: [["I am fine, thanks. And you?", "Saya baik, terima kasih. Dan kamu?"], ["I am fine, thanks, Mr. Aldo.", "Saya baik, terima kasih, Pak Aldo."]] },
          { en: "Great.", id: "Bagus sekali.",
            when: "Menunjukkan kamu merasa sangat baik. Terdengar ceria dan cocok di semua situasi.",
            reply: "Cocok untuk membalas How are you? atau How is it going?",
            ex: [["Great, thank you. How about you?", "Bagus sekali, terima kasih. Kalau kamu?"]] },
          { en: "Nothing special.", id: "Biasa saja.",
            when: "Santai. Artinya tidak ada kabar istimewa, semuanya biasa-biasa saja.",
            reply: "Cocok untuk membalas What's up? atau How's life?",
            ex: [["Nothing special. How about you?", "Biasa saja. Kalau kamu?"]] },
          { en: "Not so bad.", id: "Lumayan.",
            when: "Santai. Artinya keadaanmu cukup baik, tidak buruk.",
            reply: "Cocok untuk membalas How is it going? atau How's life?",
            ex: [["Not so bad, thanks. And you?", "Lumayan, terima kasih. Dan kamu?"]] },
          { en: "I'm not feeling well.", id: "Saya kurang enak badan.",
            when: "Dipakai kalau kamu memang sedang tidak sehat. Boleh jujur dan boleh dikatakan ke siapa saja.",
            reply: "Lawan bicara biasanya menanggapi, misalnya: Oh, I hope you feel better. (semoga lekas sehat)",
            ex: [["I'm not feeling well today.", "Hari ini saya kurang enak badan."], ["Oh, I hope you feel better.", "Oh, semoga kamu lekas sehat."]] }
        ]},
        { t: "miniquiz", title: "Memilih jawaban yang pas", items: [
          {"q": "Temanmu bertanya How are you? dan kamu sedang kurang sehat. Jawaban yang jujur dan sopan?", "options": ["I'm not feeling well.", "Great.", "How do you do?", "Nice to meet you."], "why": "I'm not feeling well. artinya Saya kurang enak badan."},
          {"q": "Dengarkan jawaban ini, lalu pilih artinya.", "options": ["Lumayan.", "Sangat buruk.", "Selamat pagi.", "Sampai jumpa."], "why": "Not so bad. artinya Lumayan. Jawaban santai yang positif tetapi tidak berlebihan.", "say": "Not so bad."},
          {"q": "Pilih balasan yang tepat untuk How do you do?", "options": ["How do you do?", "I am fine, thanks.", "Nothing special.", "Not so bad."], "why": "How do you do? dibalas dengan kalimat yang sama, bukan dengan menceritakan kabar."}
        ]},
        { t: "dialogs", title: "Contoh percakapan lengkap", items: [
          { title: "1. Bertemu dosen untuk pertama kali (formal)", lines: [
            ["A", "Hello. How do you do?", "Halo. Salam kenal."],
            ["B", "How do you do?", "Salam kenal."],
            ["A", "How are you?", "Apa kabar?"],
            ["B", "I am fine, thanks. And you?", "Saya baik, terima kasih. Dan Anda?"],
            ["A", "Great, thank you.", "Bagus sekali, terima kasih."]
          ]},
          { title: "2. Bertemu teman sekelas (santai)", lines: [
            ["A", "Hi! What's up?", "Hai! Gimana?"],
            ["B", "Nothing special. And you?", "Biasa saja. Kamu?"],
            ["A", "Not so bad.", "Lumayan."]
          ]},
          { title: "3. Bertemu teman lama (santai)", lines: [
            ["A", "Hi, Rina! How's life?", "Hai, Rina! Gimana hidupmu belakangan ini?"],
            ["B", "Hi, Budi! Not so bad. How about you?", "Hai, Budi! Lumayan. Kalau kamu?"],
            ["A", "Great, thanks.", "Bagus sekali, terima kasih."]
          ]},
          { title: "4. Saat sedang kurang sehat", lines: [
            ["A", "Hello, Rina. How are you?", "Halo, Rina. Apa kabar?"],
            ["B", "I'm not feeling well today.", "Hari ini saya kurang enak badan."],
            ["A", "Oh, I hope you feel better.", "Oh, semoga kamu lekas sehat."],
            ["B", "Thank you.", "Terima kasih."]
          ]}
        ]}
      ],
      understand: [
        { t: "text", html: "Sapaan dalam bahasa Inggris punya dua \"rasa\". <span class='kw'>Formal</span> terdengar <mark class='hl'>sopan</mark> dan dipakai ke orang yang baru dikenal atau dihormati. <span class='kw g'>Santai</span> terdengar <mark class='hl'>akrab</mark> dan dipakai ke teman. Memilih yang tepat membuatmu terdengar natural." },
        { t: "compare", title: "Formal vs santai: bandingkan langsung",
          cols: [
            { label: "Formal", sub: "sopan, untuk situasi resmi", tone: "formal",
              when: ["Bertemu seseorang untuk pertama kali", "Berbicara dengan guru, dosen, atasan, atau orang yang lebih tua", "Acara resmi, wawancara, atau presentasi"],
              groups: [
                { title: "Menyapa", items: [["How do you do?", "Salam kenal. Hanya untuk pertama kali bertemu."]] },
                { title: "Menjawab", items: [["How do you do?", "Dibalas dengan kalimat yang sama."], ["I am fine, thanks.", "Saya baik, terima kasih. (untuk How are you?)"]] }
              ],
              dialog: { title: "Contoh percakapan formal", lines: [["A", "Hello. How do you do?", "Halo. Salam kenal."], ["B", "How do you do?", "Salam kenal."], ["A", "How are you?", "Apa kabar?"], ["B", "I am fine, thanks. And you?", "Saya baik, terima kasih. Dan Anda?"]] } },
            { label: "Santai", sub: "akrab, untuk teman", tone: "casual",
              when: ["Teman sebaya, teman sekelas, teman dekat", "Percakapan sehari-hari yang rileks", "Orang yang sudah akrab denganmu"],
              groups: [
                { title: "Menyapa", items: [["Hi.", "Hai."], ["What's up?", "Ada apa? / Gimana?"], ["How is it going?", "Gimana kabarnya? Lancar?"], ["How's life?", "Gimana hidupmu belakangan ini?"]] },
                { title: "Menjawab", items: [["Nothing special.", "Biasa saja."], ["Not so bad.", "Lumayan."]] }
              ],
              dialog: { title: "Contoh percakapan santai", lines: [["A", "Hi! What's up?", "Hai! Gimana?"], ["B", "Nothing special. And you?", "Biasa saja. Kamu?"], ["A", "Not so bad.", "Lumayan."]] } }
          ] },
        { t: "phrases", title: "Netral: aman dipakai ke siapa saja", items: [
          ["Hello.", "Halo. Cocok untuk formal maupun santai."],
          ["How are you?", "Apa kabar? Cocok untuk siapa saja."],
          ["Great.", "Bagus sekali. Jawaban yang cocok di semua situasi."],
          ["I'm not feeling well.", "Saya kurang enak badan. Boleh dikatakan ke siapa saja."]
        ]},
        { t: "table", title: "Cek cepat: pakai yang mana?", head: ["Situasi", "Pakai", "Hindari"], say: [1], rows: [
          ["Bertemu dosen atau guru pertama kali", "How do you do? / Hello. How are you?", "What's up?"],
          ["Bertemu teman sekelas", "Hi. / What's up? / How is it going?", "How do you do?"],
          ["Teman lama yang lama tidak bertemu", "How's life? / How is it going?", "How do you do?"],
          ["Ragu-ragu, belum tahu orangnya", "Hello. How are you?", "How's life?"]
        ]},
        { t: "text", html: "<strong>Kesalahan yang sering terjadi:</strong> menjawab <span class='kw'>How do you do?</span> dengan cerita keadaanmu. Sebenarnya itu <mark class='hl'>bukan pertanyaan sungguhan</mark>, jadi cukup dibalas <span class='kw'>How do you do?</span>. Setelah menjawab <span class='kw'>How are you?</span>, kamu bisa bertanya balik: <span class='kw g'>And you?</span>" },
        { t: "note", html: "Ragu memilih? Pakai <span class='kw'>Hello. How are you?</span> Terdengar <mark class='hl'>sopan tapi tetap ramah</mark>, aman untuk siapa saja. <mark class='hl'>Yang penting berani dulu</mark>, kalau salah tidak apa-apa." }
      ],
      practice: [
        { type: "mc", q: "Kamu bertemu seseorang untuk pertama kalinya di acara resmi. Sapaan yang paling tepat?",
          options: ["How do you do?", "What's up?", "How's life?", "Nothing special."], answer: 0,
          why: "How do you do? khusus untuk pertama kali bertemu dan terdengar sopan." },
        { type: "mc", q: "Sapaan mana yang terlalu santai untuk menyapa gurumu?",
          options: ["What's up?", "Hello.", "How are you?", "How do you do?"], answer: 0,
          why: "What's up? untuk teman dekat. Ke guru, pakai sapaan yang sopan atau netral." },
        { type: "mc", q: "Dosen berkata \"How do you do?\" kepadamu untuk pertama kali. Jawabanmu?",
          options: ["How do you do?", "Nothing special.", "I'm not feeling well.", "I am from Bandung."], answer: 0,
          why: "How do you do? bukan pertanyaan kabar sungguhan, jadi dibalas dengan kalimat yang sama." },
        { type: "fill", q: "Lengkapi sapaan santai ini (artinya: Gimana hidupmu belakangan ini?)", before: "How's", after: "?", answers: ["life"],
          why: "How's life? adalah sapaan santai untuk teman yang sudah lama kenal." },
        { type: "mc", q: "Temanmu berkata \"I'm not feeling well today.\" Tanggapan yang baik?",
          options: ["Oh, I hope you feel better.", "Great!", "Nothing special.", "How do you do?"], answer: 0,
          why: "Oh, I hope you feel better artinya semoga kamu lekas sehat, tanggapan yang ramah." },
        { type: "mc", q: "Mana yang BUKAN jawaban untuk \"How are you?\"",
          options: ["My name is Rina.", "I am fine, thanks.", "Great.", "Not so bad."], answer: 0,
          why: "My name is Rina menjawab pertanyaan nama, bukan kabar." },
        { type: "order", q: "Susun menjadi sapaan sopan kepada dosen.", tokens: ["Hello,", "Mr.", "Aldo.", "How", "are", "you?"], answer: "Hello, Mr. Aldo. How are you?",
          why: "Hello dan How are you? netral, cocok untuk dosen." }
      ],
      apply: { "prompt": "Bayangkan kamu bertemu temanmu. Baca sapaan dan jawaban ini dengan suara keras, satu kalimat setiap kali.", "lines": [["Hello. How are you?", "Halo. Apa kabar?"], ["I am fine, thanks. And you?", "Saya baik, terima kasih. Kamu?"], ["Hi, Rina! How's life?", "Hai, Rina! Gimana hidupmu belakangan ini?"], ["Not so bad. How about you?", "Lumayan. Kalau kamu?"], ["Great, thanks.", "Bagus sekali, terima kasih."]] },
      review: [
        { type: "mc", part: "Arti ungkapan", q: "Mana yang artinya \"Lumayan\"?", options: ["Not so bad.", "Great.", "I'm not feeling well.", "Nothing special."], answer: 0,
          why: "Not so bad = tidak terlalu buruk, jadi artinya lumayan." },
        { type: "fill", part: "Isian", q: "Lengkapi kalimatnya (artinya: Gimana kabarnya?)", before: "Hi. ", after: "is it going?", answers: ["how"],
          why: "How is it going? adalah sapaan santai." },
        { type: "order", part: "Susun kalimat", q: "Susun menjadi jawaban yang benar.", tokens: ["I", "am", "fine,", "thanks."], answer: "I am fine, thanks.",
          why: "Urutan: I am + fine + thanks." },
        { type: "fillset", part: "Isian beruntun", q: "Lengkapi lima sapaan dan jawaban di bawah ini.",
          items: [
            { q: "Menyapa teman. (Artinya: Hai, apa kabar?)", before: "Hi, how", after: "you?", answers: ["are"], why: "How are you? adalah sapaan umum untuk menanyakan kabar." },
            { q: "Menjawab dengan baik. (Artinya: Saya baik, terima kasih.)", before: "I am", after: ", thanks.", answers: ["fine"], why: "I am fine, thanks. adalah jawaban yang umum." },
            { q: "Sapaan santai. (Artinya: Ada apa? / Gimana?)", before: "What's", after: "?", answers: ["up"], why: "What's up? adalah sapaan santai di antara teman." },
            { q: "Jawaban santai. (Artinya: Biasa saja.)", before: "Nothing", after: ".", answers: ["special"], why: "Nothing special = biasa saja." },
            { q: "Menjawab saat kurang sehat. (Artinya: Saya kurang enak badan.)", before: "I'm not feeling", after: ".", answers: ["well"], why: "I'm not feeling well = saya kurang enak badan." }
          ] }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "perkenalan",
      no: 2,
      title: "Perkenalan diri",
      summary: "Memperkenalkan diri secara formal dan santai.",
      access: "free",
      minutes: 10,
      learn: [
        {"t": "video", "src": "video/perkenalan-penjelasan.mp4", "poster": "video/perkenalan-penjelasan.jpg", "title": "Video penjelasan Perkenalan diri", "text": "Tonton dulu penjelasannya (sekitar 4 menit), lalu lanjut membaca di bawah. Video bisa dijeda dan diulang kapan saja."},
        {"t": "explain", "title": "Perkenalan diri punya tiga bagian", "lead": "Bayangkan perkenalan seperti cerita pendek: ada awal, isi, dan akhir.", "points": [{"icon": "🎤", "title": "1. Pembuka", "text": "Sebut namamu. Ada versi formal dan santai."}, {"icon": "❓", "title": "2. Tanya jawab", "text": "Nama, asal, umur, tempat tinggal, dan hobi."}, {"icon": "🙏", "title": "3. Penutup", "text": "Tutup dengan sopan dan ucapkan terima kasih."}], "flow": true, "note": "Pilih pembuka <strong>formal</strong> saat bicara di depan kelas atau bertemu orang baru, dan <strong>santai</strong> saat bertemu teman sebaya."},
        { t: "text", html: "Memperkenalkan diri punya tiga bagian: <strong>1. Pembuka</strong>, <strong>2. Tanya jawab</strong>, dan <strong>3. Penutup</strong>. Pelajari satu bagian dulu, lalu lanjut. Tekan tombol speaker untuk mendengar." },
        { t: "phrases", title: "1. Pembuka (formal)", items: [
          ["I would like to introduce myself to you, my name is …", "Izinkan saya memperkenalkan diri, nama saya …"],
          ["I am going to introduce myself to you, my name is …", "Saya akan memperkenalkan diri, nama saya …"],
          ["Let me introduce myself, my name is …", "Biar saya perkenalkan diri, nama saya …"]
        ]},
        { t: "phrases", title: "1. Pembuka (santai)", items: [
          ["Hello guys, my name is …", "Halo semuanya, nama saya …"],
          ["Hi, I am …", "Hai, saya …"]
        ]},
        { t: "qa", title: "2. Tanya jawab perkenalan", hint: "Buka satu kelompok, pelajari tiga pertanyaan, lalu coba kuis mininya sebelum lanjut ke kelompok berikutnya.", groups: [
          { title: "Tentang kamu", items: [
            ["What's your name?", "My name is …", "Siapa namamu?"],
            ["Where are you from?", "I am from …", "Kamu berasal dari mana?"],
            ["Where do you stay?", "I stay in …", "Kamu tinggal di mana?"]
          ], quiz: { t: "miniquiz", title: "Tentang kamu", items: [
          {"q": "Jawaban yang tepat untuk \"Where do you stay?\"", "options": ["I stay in Jakarta.", "I am from Jakarta stay.", "My name is Jakarta.", "Yes, I do."], "why": "Where do you stay? artinya tinggal di mana. Jawab dengan I stay in + tempat."},
          {"q": "Dengarkan pertanyaannya. Jawaban yang cocok?", "options": ["I am from Medan.", "My name is Medan.", "I am a Medan.", "Yes, I do."], "why": "Where are you from? menanyakan asal. Jawab dengan I am from + tempat.", "say": "Where are you from?"},
          {"q": "Pertanyaan mana yang artinya \"Siapa namamu?\"", "options": ["What's your name?", "Where are you from?", "What do you do?", "Where do you stay?"], "why": "What's your name? = Siapa namamu?"}
        ]} },
          { title: "Kegiatan dan cita-cita", items: [
            ["What do you do?", "I am a/an …", "Apa pekerjaan atau kegiatanmu?"],
            ["What is your last education?", "My last education is …", "Apa pendidikan terakhirmu?"],
            ["What is your dream?", "My dream is …", "Apa cita-citamu?"]
          ], quiz: { t: "miniquiz", title: "Kegiatan dan cita-cita", items: [
          {"q": "\"What do you do?\" paling tepat dijawab dengan …", "options": ["I am a student.", "I am from Bandung.", "My dream is a student.", "Yes, I do."], "why": "What do you do? menanyakan pekerjaan atau kegiatan. Jawab dengan I am a/an + pekerjaan."},
          {"q": "Lengkapi: \"I am ___ English tutor.\"", "options": ["an", "a", "is", "are"], "why": "English diawali bunyi vokal (e), jadi memakai an."},
          {"q": "Pertanyaan apa yang jawabannya \"My last education is high school.\"?", "options": ["What is your last education?", "What is your dream?", "What is your hobby?", "Why do you study English?"], "why": "My last education is … menjawab pertanyaan tentang pendidikan terakhir."}
        ]} },
          { title: "Minat dan alasan", items: [
            ["Do you like …? Why?", "Yes, I do. / No, I don't. Because …", "Apakah kamu suka …? Kenapa?"],
            ["What is your hobby?", "My hobby is … / My hobbies are …", "Apa hobimu?"],
            ["Why do you study English?", "I study English because …", "Kenapa kamu belajar bahasa Inggris?"],
            ["Why do you study English at Rumah Inggris?", "I study English at Rumah Inggris because …", "Kenapa kamu belajar bahasa Inggris di Rumah Inggris?"]
          ], quiz: { t: "miniquiz", title: "Minat dan alasan", items: [
          {"q": "Dengarkan pertanyaannya. Jawaban yang benar?", "options": ["Because I want to travel.", "Yes, I do.", "My hobby is English.", "I am from English."], "why": "Why? dijawab dengan Because + alasan.", "say": "Why do you study English?"},
          {"q": "Hobimu ada dua. Kalimat yang benar?", "options": ["My hobbies are reading and swimming.", "My hobby are reading and swimming.", "My hobbies is reading and swimming.", "My hobbys are reading and swimming."], "why": "Lebih dari satu hobi: hobbies dan kata kerjanya are."},
          {"q": "\"Do you like football?\" Jawaban singkat untuk tidak suka?", "options": ["No, I don't.", "No, I am not.", "No, I doesn't.", "No, I like not."], "why": "Pertanyaan berawalan Do dijawab dengan do: No, I don't."}
        ]} }
        ]},
        { t: "phrases", title: "3. Penutup", items: [
          ["That's all from me. Thank you.", "Sekian dari saya. Terima kasih."]
        ]}
      ],
      understand: [
        { t: "text", html: "Di halaman ini kamu akan memahami <strong>aturan kalimat</strong> yang sering membuat orang salah, lalu melihat <strong>contoh perkenalan yang lengkap</strong>. Tekan tombol speaker untuk mendengar contoh kalimatnya." },
        { t: "entries", title: "Aturan penting saat memperkenalkan diri", items: [
          { title: "1. Pola jawaban sama dengan pola pertanyaan", id: "Cara termudah menjawab: ikuti susunan pertanyaannya.",
            rows: [["Rumus", "Where are you from? menjadi {{I am from}} + **tempat**."], ["Penjelasan", "Ambil ==kata kunci dari pertanyaan==, lalu pakai lagi di jawabanmu. Kamu tidak perlu menyusun kalimat dari nol."]],
            ex: [["Where are you from? / I am from Bandung.", "Kamu dari mana? / Saya dari Bandung."], ["What's your name? / My name is Rina.", "Siapa namamu? / Nama saya Rina."], ["Where do you stay? / I stay in Jakarta.", "Kamu tinggal di mana? / Saya tinggal di Jakarta."]] },
          { title: "2. A atau an?", id: "Yang dilihat adalah bunyi awalnya, bukan hurufnya.",
            rows: [["Rumus", "{{a}} sebelum bunyi **konsonan**, {{an}} sebelum bunyi **vokal** (a, i, u, e, o)."], ["Penjelasan", "Dengarkan ==bunyi awal== kata. Kata hour diawali huruf h, tetapi bunyinya vokal, jadi {{an}} hour. Kata university diawali huruf u, tetapi bunyinya yu (konsonan), jadi {{a}} university."]],
            ex: [["I am {{a}} student.", "Saya seorang pelajar."], ["I am {{an}} engineer.", "Saya seorang insinyur."], ["I am {{an}} English tutor.", "Saya seorang tutor bahasa Inggris."]] },
          { title: "3. Satu hobi atau lebih dari satu", id: "Hobi tunggal memakai is, hobi jamak memakai are.",
            rows: [["Rumus", "My hobby {{is}} … untuk **satu** hobi. My hobbies {{are}} … untuk **lebih dari satu**."], ["Penjelasan", "Hobby berubah menjadi hobbies saat jumlahnya ==lebih dari satu==, dan kata kerjanya ikut berubah dari {{is}} menjadi {{are}}."]],
            ex: [["My hobby {{is}} reading.", "Hobi saya membaca."], ["My hobbies {{are}} reading and swimming.", "Hobi saya membaca dan berenang."]] },
          { title: "4. Suka atau tidak, lalu beri alasan", id: "Do you like …? dijawab Yes, I do. atau No, I don't.",
            rows: [["Rumus", "Yes, I do. / No, I don't. Kalau ditanya Why?, awali alasanmu dengan {{Because}}."], ["Penjelasan", "==Jawaban singkat dulu==, lalu **alasan**. Alasan yang sama dipakai di kalimat I study English because …"]],
            ex: [["Do you like English? / Yes, I do.", "Kamu suka bahasa Inggris? / Ya, suka."], ["Why? / {{Because}} it is fun.", "Kenapa? / Karena menyenangkan."], ["I study English {{because}} I want to travel.", "Saya belajar bahasa Inggris karena ingin bepergian."]] }
        ]},
        { t: "fix", side: true, title: "Kesalahan yang sering terjadi", hint: "Dalam kalimat Inggris selalu ada kata kerja (am, is, are). Inilah sebabnya kita bilang My name is Rina, bukan My name Rina.", items: [
          ["My name Rina.", "My name is Rina.", "Kalimat Inggris butuh ==kata kerja==. Untuk nama, kata kerjanya {{is}}."],
          ["I student.", "I am {{a}} student.", "Pasangan I adalah {{am}}, dan student diawali bunyi konsonan jadi memakai {{a}}."],
          ["I from Bandung.", "I am from Bandung.", "Sebelum from harus ada {{am}}: I {{am}} from Bandung."],
          ["I am a engineer.", "I am {{an}} engineer.", "Engineer diawali ==bunyi vokal==, jadi memakai {{an}}."],
          ["My hobby are reading.", "My hobby {{is}} reading.", "Satu hobi memakai {{is}}. {{Are}} dipakai untuk hobbies."]
        ]},
        { t: "dialogs", title: "Contoh perkenalan lengkap", items: [
          { title: "1. Perkenalan formal (satu orang berbicara)", lines: [
            ["R", "Let me introduce myself, my name is Rina.", "Biar saya perkenalkan diri, nama saya Rina."],
            ["R", "I am from Bandung, and I stay in Jakarta.", "Saya berasal dari Bandung dan tinggal di Jakarta."],
            ["R", "I am {{a}} student.", "Saya seorang pelajar."],
            ["R", "My hobby {{is}} reading.", "Hobi saya membaca."],
            ["R", "I study English {{because}} I want to travel.", "Saya belajar bahasa Inggris karena ingin bepergian."],
            ["R", "That's all from me. Thank you.", "Sekian dari saya. Terima kasih."]
          ]},
          { title: "2. Berkenalan santai dengan teman baru", lines: [
            ["A", "Hi, I am Budi. What's your name?", "Hai, saya Budi. Siapa namamu?"],
            ["B", "Hi, Budi. My name is Rina.", "Hai, Budi. Nama saya Rina."],
            ["A", "Where are you from?", "Kamu berasal dari mana?"],
            ["B", "I am from Surabaya. And you?", "Saya dari Surabaya. Kalau kamu?"],
            ["A", "I am from Bandung. What is your hobby?", "Saya dari Bandung. Apa hobimu?"],
            ["B", "My hobby {{is}} reading.", "Hobi saya membaca."]
          ]}
        ]},
        { t: "note", html: "<strong>Ingat tiga hal:</strong> (1) ikuti <mark class='hl'>pola pertanyaan</mark> saat menjawab, (2) selalu ada kata kerja <span class='kw'>am</span>, <span class='kw'>is</span>, atau <span class='kw'>are</span>, (3) pilih <span class='kw'>a</span> atau <span class='kw'>an</span> berdasarkan <mark class='hl'>bunyi awal</mark> kata." }
      ],
      practice: [
        { type: "mc", part: "Situasi formal", q: "Hari pertama kuliah. Kamu diminta memperkenalkan diri di depan kelas secara formal. Kalimat pembuka yang paling tepat?", options: ["Let me introduce myself, my name is Rina.", "I introduce Rina now, hello.", "Name me Rina introduce.", "Introduce myself, I am my name Rina."], answer: 0,
          why: "Let me introduce myself, my name is … adalah pembuka formal yang sopan dan benar susunannya." },
        { type: "mc", part: "Situasi santai", q: "Kamu bertemu teman baru di kantin. Pembuka yang paling santai dan natural?", options: ["Hi, I am Budi.", "I would like to introduce myself to you, my name is Budi.", "I am going to introduce myself to all the audience.", "Let me introduce myself formally, sir."], answer: 0,
          why: "Hi, I am … santai dan cocok untuk teman baru. Tiga pilihan lain terlalu formal untuk obrolan di kantin." },
        { type: "mc", part: "Menjawab pertanyaan", q: "Teman baru bertanya, \"Where do you stay?\" Kamu tinggal di Surabaya. Jawaban yang tepat?", options: ["I stay in Surabaya.", "I am from Surabaya stay.", "My name is Surabaya.", "Yes, I stay."], answer: 0,
          why: "Where do you stay? artinya kamu tinggal di mana. Ikuti pola pertanyaannya: I stay in + tempat." },
        { type: "fill", part: "Kata kerja yang hilang", q: "Temanmu menulis perkenalan, tetapi ada satu kata yang hilang. Isi kata yang tepat.", before: "I", after: "from Bandung.", answers: ["am"],
          why: "Sebelum from harus ada kata kerja am: I am from Bandung." },
        { type: "mc", part: "A atau an?", q: "Kamu bekerja sebagai tutor bahasa Inggris. Kalimat mana yang benar?", options: ["I am an English tutor.", "I am a English tutor.", "I am English tutor an.", "I an English tutor."], answer: 0,
          why: "English diawali bunyi vokal (e), jadi memakai an: I am an English tutor." },
        { type: "order", part: "Menyusun alasan", q: "Susun jawaban untuk pertanyaan \"Why do you study English?\"", tokens: ["I", "study", "English", "because", "I", "want", "to", "travel."], answer: "I study English because I want to travel.",
          why: "Pola alasan: I study English + because + alasanmu." },
        { type: "mc", part: "Menutup perkenalan", q: "Kamu sudah selesai memperkenalkan diri dan ingin menutupnya dengan sopan. Kalimat yang tepat?", options: ["That's all from me. Thank you.", "That's all for you.", "Thank you from me all.", "I finish. Bye."], answer: 0,
          why: "That's all from me. Thank you. adalah penutup perkenalan yang sopan dan umum dipakai." }
      ],
      apply: { "prompt": "Bayangkan kamu memperkenalkan diri di depan kelas. Baca perkenalan ini kalimat demi kalimat.", "lines": [["Hello guys, my name is Rina.", "Halo semuanya, nama saya Rina."], ["I am from Bandung and I stay in Jakarta.", "Saya berasal dari Bandung dan tinggal di Jakarta."], ["I am a student.", "Saya seorang pelajar."], ["My hobby is reading.", "Hobi saya membaca."], ["I study English because I want to travel.", "Saya belajar bahasa Inggris karena ingin bepergian."], ["That's all from me. Thank you.", "Sekian dari saya. Terima kasih."]] },
      review: [
        { type: "mc", part: "Pertanyaan dan jawaban", q: "Pertanyaan mana yang jawabannya \"My hobby is cooking.\"?", options: ["What is your hobby?", "What is your dream?", "Where are you from?", "What's your name?"], answer: 0,
          why: "My hobby is … menjawab pertanyaan tentang hobi." },
        { type: "fill", part: "Isian", q: "Lengkapi kalimatnya (artinya: Aku belajar bahasa Inggris karena ingin bepergian).", before: "I study English", after: "I want to travel.", answers: ["because"],
          why: "Because dipakai untuk menjelaskan alasan." },
        { type: "order", part: "Susun kalimat", q: "Susun menjadi kalimat perkenalan.", tokens: ["Let", "me", "introduce", "myself."], answer: "Let me introduce myself.",
          why: "Let me introduce myself adalah cara sopan membuka perkenalan." },
        { type: "fillset", part: "Isian beruntun", q: "Lengkapi lima kalimat perkenalan di bawah ini.",
          items: [
            { q: "Menjawab asal. (Artinya: Saya berasal dari Medan.)", before: "I", after: "from Medan.", answers: ["am"], why: "Where are you from? dijawab I am from …" },
            { q: "Hobimu ada dua. (Artinya: Hobi saya membaca dan berenang.)", before: "My", after: "are reading and swimming.", answers: ["hobbies"], why: "Hobi lebih dari satu memakai hobbies dan are." },
            { q: "Menjawab tidak suka. Do you like football? (Artinya: Tidak.)", before: "No, I", after: ".", answers: ["don't", "dont", "do not"], why: "Pertanyaan berawalan Do dijawab No, I don't." },
            { q: "Menyebut pekerjaan. (Artinya: Saya seorang insinyur.)", before: "I am", after: "engineer.", answers: ["an"], why: "Engineer diawali bunyi vokal, jadi memakai an." },
            { q: "Menanyakan cita-cita. (Artinya: Apa cita-citamu?)", before: "What is your", after: "?", answers: ["dream"], why: "What is your dream? menanyakan cita-cita." }
          ] }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "alphabet",
      no: 3,
      title: "Alphabet dan spelling",
      summary: "Mengeja kata dan menanyakan ejaan.",
      access: "free",
      minutes: 10,
      learn: [
        {"t": "video", "src": "video/alphabet-penjelasan.mp4", "poster": "video/alphabet-penjelasan.jpg", "title": "Video penjelasan Alphabet dan spelling", "text": "Tonton dulu penjelasannya (sekitar 4 menit), lalu lanjut membaca di bawah. Video bisa dijeda dan diulang kapan saja."},
        {"t": "explain", "title": "Mengenal alfabet bahasa Inggris", "lead": "Mengeja berguna saat menyebut nama, alamat, atau kata yang sulit. Kuncinya: hafal bunyi tiap huruf.", "points": [{"icon": "🔤", "title": "26 huruf", "text": "Sama seperti alfabet Indonesia, tapi cara membacanya berbeda."}, {"icon": "🅰️", "title": "5 vokal", "text": "A, E, I, O, U. Sisanya 21 huruf konsonan."}, {"icon": "✌️", "title": "Huruf ganda", "text": "Dua huruf sama dibaca double, misalnya LL menjadi double L."}, {"icon": "🔊", "title": "Huruf Z", "text": "British: /zed/. American: /ziː/."}], "note": "Contoh: nama <strong>Rina</strong> dieja <em>R – I – N – A</em>. Nama <strong>Pillow</strong> dieja <em>P – I – double L – O – W</em>."},
        { t: "text", html: "Mengeja berarti menyebut huruf satu per satu. Berguna saat menyebut nama, alamat, atau kata yang belum dikenal lawan bicara." },
        { t: "phrases", title: "Menanyakan ejaan", items: [
          ["How to spell \"table\"?", "Bagaimana mengeja \"table\"?"],
          ["How do you spell \"table\"?", "Bagaimana kamu mengeja \"table\"?"],
          ["Can you spell \"table\"?", "Bisakah kamu mengeja \"table\"?"],
          ["Please spell \"table\".", "Tolong eja \"table\"."]
        ]},
        { t: "chips", title: "26 huruf dan cara bacanya (tekan untuk mendengar)", items: [
          ["A", "ei", "/eɪ/"], ["B", "bi", "/biː/"], ["C", "si", "/siː/"], ["D", "di", "/diː/"], ["E", "i", "/iː/"], ["F", "ef", "/ef/"], ["G", "ji", "/dʒiː/"],
          ["H", "eich", "/eɪtʃ/"], ["I", "ai", "/aɪ/"], ["J", "jei", "/dʒeɪ/"], ["K", "kei", "/keɪ/"], ["L", "el", "/el/"], ["M", "em", "/em/"], ["N", "en", "/en/"],
          ["O", "ou", {"gb": "/əʊ/", "us": "/oʊ/"}], ["P", "pi", "/piː/"], ["Q", "kyu", "/kjuː/"], ["R", "ar", {"gb": "/ɑː/", "us": "/ɑːr/"}], ["S", "es", "/es/"], ["T", "ti", "/tiː/"], ["U", "yu", "/juː/"],
          ["V", "vi", "/viː/"], ["W", "dabel-yu", "/ˈdʌbljuː/"], ["X", "eks", "/eks/"], ["Y", "wai", "/waɪ/"], ["Z", "zed / zi", {"gb": "/zed/", "us": "/ziː/"}]
        ], note: "Simbol di antara garis miring / / adalah **simbol bunyi (IPA)**, seperti yang ada di kamus Oxford. Tanda titik dua di belakang huruf (seperti pada /biː/) berarti bunyinya ==dipanjangkan==, jadi dibaca bi panjang. Ganti aksen Amerika atau British di panel suara untuk melihat bedanya pada huruf {{O}}, {{R}}, dan {{Z}}." },
        { t: "miniquiz", title: "Dengarkan ejaannya", items: [
          {"q": "Dengarkan ejaan ini. Kata apa yang dieja?", "options": ["car", "cat", "far", "can"], "why": "[[ipa:CAR]] = C – A – R, jadi car.", "spell": "CAR"},
          {"q": "Dengarkan ejaan ini. Kata apa yang dieja?", "options": ["buy", "boy", "bay", "by"], "why": "[[ipa:BUY]] = B – U – Y, jadi buy.", "spell": "BUY"},
          {"q": "Huruf mana yang dibaca \"double-u\"?", "options": ["W", "Y", "U", "V"], "why": "W dibaca double-u [[ipa:W]]. Y dibaca [[ipa:Y]], U dibaca [[ipa:U]], V dibaca [[ipa:V]]."}
        ]},
        { t: "text", html: "Contoh: kata <strong>table</strong> dieja <em>T – A – B – L – E</em>, dibaca <span class='ipa-seq' data-spell='TABLE'></span>." },
        { t: "wordlist", title: "Coba eja 20 kata ini (tekan untuk mendengar ejaannya)",
          items: ["Car", "Put", "Sit", "Fly", "Shy", "Buy", "Take", "From", "Visit", "Step", "Sharp", "Start", "Draw", "Laptop", "Reason", "Distance", "Pillow", "Roof", "House", "Garden"] },
        { t: "reveal", spell: true, title: "Tebak ejaannya dulu", lead: "Lihat kata di bawah ini. <strong>Ucapkan ejaannya huruf demi huruf</strong> dengan suara pelan, lalu tekan <strong>Lihat ejaan</strong> untuk mengecek dan mendengarkan.", ask: "Coba eja dengan suara pelan.",
          items: [["Car", "Tiga huruf, tiap huruf disebut satu per satu."], ["Fly", "Huruf Y dibaca [[ipa:Y]]."], ["Sharp", "Lima huruf, jangan dieja per suku kata."], ["Roof", "Dua O berdampingan disebut double O."], ["Pillow", "Dua L berdampingan disebut double L."], ["House", "Huruf E di akhir tetap disebut [[ipa:E]]."]] },
        { t: "miniquiz", title: "Cara bertanya dan menyebut ejaan", items: [
          {"q": "Pilih pertanyaan ejaan yang benar.", "options": ["How do you spell \"table\"?", "How you spell \"table\"?", "Spell you how \"table\"?", "Do how you spell \"table\"?"], "why": "Pola: How + do + you + spell …?"},
          {"q": "Lengkapi: \"Please ___ \"house\".\"", "options": ["spell", "spelling", "spells", "spelled"], "why": "Kalimat perintah memakai kata kerja dasar: Please spell …"},
          {"q": "Kata pillow punya dua huruf L berdampingan. Disebut apa?", "options": ["double L", "two L", "L plus", "L twice"], "why": "Dua huruf sama yang berdampingan disebut double: double L."}
        ]}
      ],
      understand: [
        { t: "text", html: "Di halaman ini kamu akan memahami <strong>aturan mengeja</strong>, huruf yang sering tertukar, dan <strong>cara menjawab</strong> saat diminta mengeja. Tekan tombol speaker untuk mendengar contohnya." },
        { t: "entries", title: "Aturan penting saat mengeja", items: [
          { title: "1. Eja per huruf, bukan per suku kata", id: "Sebut nama setiap huruf satu per satu.",
            rows: [["Rumus", "Kata dipecah menjadi huruf: **huruf pertama** – **huruf kedua** – **huruf ketiga**."], ["Penjelasan", "Jangan membaca kata seperti biasa. ==Pecah kata menjadi huruf==, lalu sebut nama tiap huruf. Beri ==jeda sedikit== di antara huruf supaya lawan bicara sempat mencatat."]],
            ex: [["Sit: S – I – T.", "Dibaca [[ipa:SIT]]."], ["Car: C – A – R.", "Dibaca [[ipa:CAR]]."], ["Fly: F – L – Y.", "Dibaca [[ipa:FLY]]."]] },
          { title: "2. Huruf kembar disebut double", id: "Dua huruf sama yang berdampingan tidak disebut dua kali.",
            rows: [["Rumus", "{{double}} + huruf, misalnya {{double L}}, {{double F}}, {{double E}}."], ["Penjelasan", "Kalau ada ==dua huruf sama yang berdampingan==, sebut {{double}} lalu hurufnya. Aturan ini hanya untuk huruf yang berurutan. Pada kata pillow, huruf L kembar, jadi P – I – {{double L}} – O – W."]],
            ex: [["Pillow: P – I – {{double L}} – O – W.", "Huruf L kembar."], ["Coffee: C – O – {{double F}} – {{double E}}.", "Huruf F dan E sama-sama kembar."], ["Address: A – {{double D}} – R – E – {{double S}}.", "Huruf D dan S kembar."]] },
          { title: "3. Huruf W dibaca double-u", id: "Bukan [[ipa:Y]], bukan [[ipa:U]].",
            rows: [["Rumus", "W = {{double-u}} [[ipa:W]]. Y = [[ipa:Y]]. U = [[ipa:U]]."], ["Penjelasan", "Nama huruf W adalah {{double-u}}. Karena sering tertukar dengan Y ([[ipa:Y]]) dan U ([[ipa:U]]), ==latih ketiganya bersama-sama==."]],
            ex: [["Water: W – A – T – E – R.", "Huruf awal W."], ["Window: W – I – N – D – O – W.", "W di awal dan di akhir."], ["Yellow: Y – E – double L – O – W.", "Awalnya Y [[ipa:Y]], akhirnya W [[ipa:W]]."]] },
          { title: "4. Pasangan huruf yang sering tertukar", id: "Dengarkan dan latih berpasangan.",
            rows: [["B – P – V", "[[ipa:BPV]]. Hurufnya mirip, jadi ucapkan ==bunyi awalnya dengan jelas==."], ["G dan J", "G dibaca [[ipa:G]], J dibaca [[ipa:J]]."], ["E dan I", "E dibaca [[ipa:E]] (panjang), I dibaca [[ipa:I]]."], ["M dan N", "M dibaca [[ipa:M]], N dibaca [[ipa:N]]."]],
            ex: [["B – P – V.", "[[ipa:BPV]]."], ["G – J.", "[[ipa:GJ]]."], ["E – I.", "[[ipa:EI]]."], ["M – N.", "[[ipa:MN]]."]] },
          { title: "5. Huruf Z: zed atau zee?", id: "Dua pelafalan, dan keduanya benar.",
            rows: [["Rumus", "**British**: {{zed}} /zed/. **American**: {{zee}} /ziː/."], ["Penjelasan", "Orang Inggris (British) menyebut Z sebagai {{zed}}, orang Amerika menyebutnya {{zee}}. Pilih aksen suara di bagian ==Pengaturan suara== (Amerika atau British), lalu dengarkan bedanya."]],
            ex: [["Zoo: Z – double O.", "Dengarkan huruf Z-nya sesuai aksen yang kamu pilih."], ["Zebra: Z – E – B – R – A.", "Contoh kata lain berawalan Z."]] },
          { title: "6. Cara menjawab saat diminta mengeja", id: "Sebut hurufnya, lalu konfirmasi kalau perlu.",
            rows: [["Rumus", "{{It's}} + **huruf demi huruf**."], ["Penjelasan", "Jawab dengan {{It's}} lalu sebut hurufnya ==satu per satu==. Kalau lawan bicara ingin memastikan, dia akan mengulang dengan {{Is that …?}} lalu kamu jawab {{Yes, that's right.}}"]],
            ex: [["It's R – I – N – A.", "Ejaannya R, I, N, A."], ["Is that R – I – N – A?", "Apakah itu R, I, N, A?"], ["Yes, that's right.", "Ya, benar."]] }
        ]},
        { t: "fix", side: true, title: "Kesalahan yang sering terjadi", hint: "Satu kesalahan kecil pada kata kerja atau urutan kata membuat pertanyaan ejaan terdengar aneh. Periksa keduanya.", items: [
          ["How you spell \"table\"?", "How do you spell \"table\"?", "Pertanyaan butuh {{do}}: How + {{do}} + you + spell …?"],
          ["Can you spelling \"table\"?", "Can you spell \"table\"?", "Setelah can dipakai ==kata kerja dasar==: {{spell}}, bukan spelling."],
          ["Please spells your name.", "Please spell your name.", "Kalimat perintah memakai ==kata kerja dasar== tanpa -s."],
          ["P – I – L – L – O – W", "P – I – double L – O – W", "Dua huruf L berdampingan disebut {{double L}}."],
          ["W is wai.", "W is double-u.", "[[ipa:Y]] adalah nama huruf Y. Huruf W dibaca {{double-u}} [[ipa:W]]."]
        ]},
        { t: "dialogs", title: "Contoh percakapan mengeja", items: [
          { title: "1. Di meja resepsionis hotel", lines: [
            ["R", "Good evening. Can I have your name, please?", "Selamat malam. Boleh saya tahu namamu?"],
            ["G", "My name is Rina Wijaya.", "Nama saya Rina Wijaya."],
            ["R", "Can you spell your last name, please?", "Bisakah kamu mengeja nama belakangmu?"],
            ["G", "Yes. It's W – I – J – A – Y – A.", "Ya. Ejaannya W, I, J, A, Y, A."],
            ["R", "Is that W – I – J – A – Y – A?", "Apakah itu W, I, J, A, Y, A?"],
            ["G", "Yes, that's right. Thank you.", "Ya, benar. Terima kasih."]
          ]},
          { title: "2. Menanyakan ejaan kata baru di kelas", lines: [
            ["A", "Excuse me, how do you spell \"laptop\"?", "Permisi, bagaimana mengeja laptop?"],
            ["B", "Sure. L – A – P – T – O – P.", "Tentu. L, A, P, T, O, P."],
            ["A", "Sorry, can you say it again, please?", "Maaf, bisa diulang?"],
            ["B", "Of course. L – A – P – T – O – P.", "Tentu. L, A, P, T, O, P."],
            ["A", "Thank you!", "Terima kasih!"]
          ]},
          { title: "3. Mengeja kata yang punya huruf kembar", lines: [
            ["A", "Please spell \"coffee\".", "Tolong eja coffee."],
            ["B", "C – O – double F – double E.", "C, O, double F, double E."],
            ["A", "Great! And how do you spell \"pillow\"?", "Bagus! Dan bagaimana mengeja pillow?"],
            ["B", "P – I – double L – O – W.", "P, I, double L, O, W."]
          ]}
        ]},
        { t: "table", title: "Cek cepat: pakai yang mana?", head: ["Situasi", "Pakai", "Hindari"], say: [1], rows: [
          ["Meminta orang mengeja", "How do you spell …?", "How you spell …?"],
          ["Ada dua huruf sama berdampingan", "double L", "L, L (huruf disebut dua kali)"],
          ["Menyebut huruf W", "double-u", "/waɪ/ (itu huruf Y)"],
          ["Memastikan ejaan", "Is that R – I – N – A?", "Is that Rina spell?"]
        ]},
        { t: "note", html: "<strong>Latihan terbaik:</strong> eja <mark class='hl'>namamu, nama kotamu, dan nama temanmu</mark> keras-keras. Sebut setiap huruf <mark class='hl'>pelan dan jelas</mark>, dan ulangi sampai lancar." }
      ],
      practice: [
        { type: "mc", part: "Di hotel", q: "Resepsionis hotel berkata, \"Can you spell your last name, please?\" Nama belakangmu Dani. Jawaban yang tepat?", options: ["It's D – A – N – I.", "I am fine, thanks.", "Yes, I do.", "My name is spell."], answer: 0,
          why: "Diminta mengeja, jawab dengan It's lalu sebut hurufnya satu per satu." },
        { type: "mc", part: "Bertanya ejaan", q: "Kamu ingin meminta temanmu mengeja kata \"table\". Kalimat yang tepat?", options: ["How do you spell \"table\"?", "How you spell \"table\"?", "You spell how \"table\"?", "Spell do you \"table\"?"], answer: 0,
          why: "Pertanyaan dengan do: How + do + you + spell …?" },
        { type: "fillset", part: "Tebak kata", listen: true, pass: 0.75, q: "Dengarkan ejaan, lalu ketik katanya. Kamu boleh memutar berkali-kali, atau tekan Pelan.",
          items: [
            { spell: "FLY", answers: ["fly"] }, { spell: "BUY", answers: ["buy"] }, { spell: "PILLOW", answers: ["pillow"] }, { spell: "LAPTOP", answers: ["laptop"] },
            { spell: "HOUSE", answers: ["house"] }, { spell: "ZEBRA", answers: ["zebra"] }, { spell: "GARDEN", answers: ["garden"] }, { spell: "SHARP", answers: ["sharp"] }
          ] },
        { type: "mc", part: "Huruf kembar", q: "Kata \"coffee\" punya dua pasang huruf kembar. Cara mengejanya?", options: ["C – O – double F – double E", "C – O – F – F – E – E", "C – double O – F – E", "C – O – F – double E"], answer: 0,
          why: "Huruf F kembar dan huruf E kembar, jadi disebut double F dan double E." },
        { type: "order", part: "Menyusun pertanyaan", q: "Susun kata-kata ini menjadi kalimat permintaan yang sopan.", tokens: ["Can", "you", "spell", "your", "name,", "please?"], answer: "Can you spell your name, please?",
          why: "Pola: Can + you + spell + kata yang ingin dieja." },
        { type: "mc", part: "Huruf W", q: "Temanmu mengeja dan menyebut \"double-u\". Huruf apa yang dia maksud?", options: ["W", "Y", "U", "V"], answer: 0,
          why: "W dibaca double-u [[ipa:W]]. [[ipa:Y]] adalah Y, [[ipa:U]] adalah U, dan [[ipa:V]] adalah V." },
        { type: "mc", part: "Aksen British", q: "Di Inggris (aksen British), huruf Z biasanya dibaca …", options: ["/zed/", "/ziː/", "/zeɪ/", "/zuː/"], answer: 0,
          why: "British menyebut Z sebagai /zed/. Orang Amerika menyebutnya /ziː/." }
      ],
      apply: { "prompt": "Bayangkan kamu di meja resepsionis hotel. Baca kalimat-kalimat tentang nama dan ejaan ini.", "lines": [["Good evening. Can I have your name, please?", "Selamat malam. Boleh saya tahu namamu?"], ["My name is Rina Wijaya.", "Nama saya Rina Wijaya."], ["Can you spell your last name, please?", "Bisakah kamu mengeja nama belakangmu?"], ["How do you spell that?", "Bagaimana mengejanya?"]] },
      review: [
        { type: "fill", part: "Isian ejaan", q: "Dengarkan ejaan ini. Kata apa yang dieja? (ketik katanya)", spell: "TABLE", answers: ["table"],
          why: "T-A-B-L-E dibaca [[ipa:TABLE]]." },
        { type: "mc", part: "Cara mengeja", q: "Kata \"pillow\" punya huruf kembar. Cara mengejanya?", options: ["P – I – double L – O – W", "P – I – L – O – W", "P – double I – L – O – W", "P – I – L – double O – W"], answer: 0,
          why: "Huruf L pada pillow ada dua, jadi disebut double L." },
        { type: "mc", part: "Percakapan ejaan", q: "Temanmu bilang: \"Please spell your name.\" Jawaban yang tepat?", options: ["R-I-N-A.", "Yes, I do.", "I am fine.", "Not so bad."], answer: 0,
          why: "Spell artinya mengeja, jadi jawab dengan huruf-huruf namamu." },
        { type: "fillset", part: "Tebak kata", listen: true, pass: 0.8, q: "Dengarkan ejaan, lalu ketik katanya. Kamu boleh memutar berkali-kali, atau tekan Pelan.",
          items: [
            { spell: "COFFEE", answers: ["coffee"] }, { spell: "YELLOW", answers: ["yellow"] }, { spell: "JACKET", answers: ["jacket"] }, { spell: "SUMMER", answers: ["summer"] }, { spell: "QUEEN", answers: ["queen"] }
          ] }
      ]
    },

    /* ---------------------------------------------------------- 4 */
    {
      id: "jam",
      no: 4,
      title: "Telling time",
      summary: "Menyebut jam dengan gaya British dan American.",
      access: "premium",
      minutes: 10,
      learn: [
        {"t": "video", "src": "video/jam-penjelasan.mp4", "poster": "video/jam-penjelasan.jpg", "title": "Video penjelasan Telling time", "text": "Tonton dulu penjelasannya (sekitar 3,5 menit), lalu lanjut membaca di bawah. Video bisa dijeda dan diulang kapan saja."},
        {"t": "explain", "title": "Mengenal bagian-bagian jam", "lead": "Sebelum belajar kalimatnya, kenali dulu cara membaca jam. Satu putaran jarum pendek = 12 jam, satu putaran jarum panjang = 60 menit.", "points": [{"icon": "🕐", "title": "Jarum pendek", "text": "Menunjukkan JAM (hour hand)."}, {"icon": "🕑", "title": "Jarum panjang", "text": "Menunjukkan MENIT (minute hand)."}, {"icon": "🔢", "title": "Jam digital", "text": "Dibaca jam:menit, misalnya 2:10."}, {"icon": "☀️", "title": "Dua kali 12 jam", "text": "Sehari 24 jam, dibagi a.m. dan p.m."}], "note": "Jam 2:10 artinya jarum pendek di dekat angka 2 dan jarum panjang di angka 2 (angka 2 = 10 menit)."},
        {"t": "figure", "title": "Satu hari dibagi menjadi a.m. dan p.m.", "svg": "<svg viewBox=\"0 0 600 150\" role=\"img\" aria-label=\"Satu hari 24 jam dibagi a.m. dan p.m.\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Poppins,Segoe UI,sans-serif\"><rect x=\"20\" y=\"40\" width=\"280\" height=\"50\" fill=\"#FFC93C\" stroke=\"#1F2340\" stroke-width=\"3\"/><rect x=\"300\" y=\"40\" width=\"280\" height=\"50\" fill=\"#E8E4FF\" stroke=\"#1F2340\" stroke-width=\"3\"/><text x=\"160\" y=\"72\" text-anchor=\"middle\" font-weight=\"800\" font-size=\"22\" fill=\"#1F2340\">a.m.</text><text x=\"440\" y=\"72\" text-anchor=\"middle\" font-weight=\"800\" font-size=\"22\" fill=\"#1F2340\">p.m.</text><text x=\"160\" y=\"22\" text-anchor=\"middle\" font-size=\"13\" fill=\"#1F2340\">tengah malam sampai tengah hari</text><text x=\"440\" y=\"22\" text-anchor=\"middle\" font-size=\"13\" fill=\"#1F2340\">tengah hari sampai tengah malam</text><g font-size=\"13\" font-weight=\"700\" fill=\"#1F2340\" text-anchor=\"middle\"><text x=\"20\" y=\"115\">12 a.m.</text><text x=\"90\" y=\"115\">3</text><text x=\"160\" y=\"115\">6 a.m.</text><text x=\"230\" y=\"115\">9</text><text x=\"300\" y=\"115\">12 p.m.</text><text x=\"370\" y=\"115\">3</text><text x=\"440\" y=\"115\">6 p.m.</text><text x=\"510\" y=\"115\">9</text><text x=\"580\" y=\"115\">12 a.m.</text></g><text x=\"160\" y=\"138\" text-anchor=\"middle\" font-size=\"12\" fill=\"#4A4F73\">pagi</text><text x=\"300\" y=\"138\" text-anchor=\"middle\" font-size=\"12\" fill=\"#4A4F73\">siang</text><text x=\"440\" y=\"138\" text-anchor=\"middle\" font-size=\"12\" fill=\"#4A4F73\">sore – malam</text></svg>", "caption": "a.m. = dari tengah malam sampai sebelum tengah hari. p.m. = dari tengah hari sampai sebelum tengah malam. Contoh: 7 a.m. = jam tujuh pagi, 7 p.m. = jam tujuh malam."},
        {"t": "explain", "title": "Ada dua cara membaca jam", "lead": "Keduanya benar. British banyak dipakai dalam ujian dan percakapan sopan. American paling mudah karena dibaca seperti yang tertulis.", "points": [{"icon": "🇬🇧", "title": "British: menit dulu", "text": "Sebut menit, lalu past atau to, lalu jam. Contoh: ten past two."}, {"icon": "🇺🇸", "title": "American: jam dulu", "text": "Sebut jam lalu menit seperti angka biasa. Contoh: two ten."}], "note": "Aturan British: menit 1–30 pakai <strong>past</strong> (lewat), menit 31–59 pakai <strong>to</strong> (menuju jam berikutnya)."},
        {"t": "figure", "title": "Past di kanan, to di kiri", "svg": "<svg viewBox=\"0 0 460 340\" style=\"max-width:480px;margin:0 auto\" role=\"img\" aria-label=\"Jam dibagi dua: sisi kanan past, sisi kiri to\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Poppins,Segoe UI,sans-serif\"><path d=\"M230 165 L230 47 A118 118 0 0 1 230 283 Z\" fill=\"#DDF6EF\"/><path d=\"M230 165 L230 47 A118 118 0 0 0 230 283 Z\" fill=\"#FFE1D8\"/><circle cx=\"230\" cy=\"165\" r=\"118\" fill=\"none\" stroke=\"#1F2340\" stroke-width=\"5\"/><line x1=\"230.0\" y1=\"59.0\" x2=\"230.0\" y2=\"47.0\" stroke=\"#1F2340\" stroke-width=\"3\"/><line x1=\"241.7\" y1=\"53.6\" x2=\"242.3\" y2=\"47.6\" stroke=\"#1F2340\" stroke-width=\"1\"/><line x1=\"253.3\" y1=\"55.4\" x2=\"254.5\" y2=\"49.6\" stroke=\"#1F2340\" stroke-width=\"1\"/><line x1=\"264.6\" y1=\"58.5\" x2=\"266.5\" y2=\"52.8\" stroke=\"#1F2340\" stroke-width=\"1\"/><line x1=\"275.6\" y1=\"62.7\" x2=\"278.0\" y2=\"57.2\" stroke=\"#1F2340\" stroke-width=\"1\"/><line x1=\"283.0\" y1=\"73.2\" x2=\"289.0\" y2=\"62.8\" stroke=\"#1F2340\" stroke-width=\"3\"/><line x1=\"295.8\" y1=\"74.4\" x2=\"299.4\" y2=\"69.5\" stroke=\"#1F2340\" stroke-width=\"1\"/><line x1=\"304.9\" y1=\"81.8\" x2=\"309.0\" y2=\"77.3\" stroke=\"#1F2340\" stroke-width=\"1\"/><line x1=\"313.2\" y1=\"90.1\" x2=\"317.7\" y2=\"86.0\" stroke=\"#1F2340\" stroke-width=\"1\"/><line x1=\"320.6\" y1=\"99.2\" x2=\"325.5\" y2=\"95.6\" stroke=\"#1F2340\" stroke-width=\"1\"/><line x1=\"321.8\" y1=\"112.0\" x2=\"332.2\" y2=\"106.0\" stroke=\"#1F2340\" stroke-width=\"3\"/><line x1=\"332.3\" y1=\"119.4\" x2=\"337.8\" y2=\"117.0\" stroke=\"#1F2340\" stroke-width=\"1\"/><line x1=\"336.5\" y1=\"130.4\" x2=\"342.2\" y2=\"128.5\" stroke=\"#1F2340\" stroke-width=\"1\"/><line x1=\"339.6\" y1=\"141.7\" x2=\"345.4\" y2=\"140.5\" stroke=\"#1F2340\" stroke-width=\"1\"/><line x1=\"341.4\" y1=\"153.3\" x2=\"347.4\" y2=\"152.7\" stroke=\"#1F2340\" stroke-width=\"1\"/><line x1=\"336.0\" y1=\"165.0\" x2=\"348.0\" y2=\"165.0\" stroke=\"#1F2340\" stroke-width=\"3\"/><line x1=\"341.4\" y1=\"176.7\" x2=\"347.4\" y2=\"177.3\" stroke=\"#1F2340\" stroke-width=\"1\"/><line x1=\"339.6\" y1=\"188.3\" x2=\"345.4\" y2=\"189.5\" stroke=\"#1F2340\" stroke-width=\"1\"/><line x1=\"336.5\" y1=\"199.6\" x2=\"342.2\" y2=\"201.5\" stroke=\"#1F2340\" stroke-width=\"1\"/><line x1=\"332.3\" y1=\"210.6\" x2=\"337.8\" y2=\"213.0\" stroke=\"#1F2340\" stroke-width=\"1\"/><line x1=\"321.8\" y1=\"218.0\" x2=\"332.2\" y2=\"224.0\" stroke=\"#1F2340\" stroke-width=\"3\"/><line x1=\"320.6\" y1=\"230.8\" x2=\"325.5\" y2=\"234.4\" stroke=\"#1F2340\" stroke-width=\"1\"/><line x1=\"313.2\" y1=\"239.9\" x2=\"317.7\" y2=\"244.0\" stroke=\"#1F2340\" stroke-width=\"1\"/><line x1=\"304.9\" y1=\"248.2\" x2=\"309.0\" y2=\"252.7\" stroke=\"#1F2340\" stroke-width=\"1\"/><line x1=\"295.8\" y1=\"255.6\" x2=\"299.4\" y2=\"260.5\" stroke=\"#1F2340\" stroke-width=\"1\"/><line x1=\"283.0\" y1=\"256.8\" x2=\"289.0\" y2=\"267.2\" stroke=\"#1F2340\" stroke-width=\"3\"/><line x1=\"275.6\" y1=\"267.3\" x2=\"278.0\" y2=\"272.8\" stroke=\"#1F2340\" stroke-width=\"1\"/><line x1=\"264.6\" y1=\"271.5\" x2=\"266.5\" y2=\"277.2\" stroke=\"#1F2340\" stroke-width=\"1\"/><line x1=\"253.3\" y1=\"274.6\" x2=\"254.5\" y2=\"280.4\" stroke=\"#1F2340\" stroke-width=\"1\"/><line x1=\"241.7\" y1=\"276.4\" x2=\"242.3\" y2=\"282.4\" stroke=\"#1F2340\" stroke-width=\"1\"/><line x1=\"230.0\" y1=\"271.0\" x2=\"230.0\" y2=\"283.0\" stroke=\"#1F2340\" stroke-width=\"3\"/><line x1=\"218.3\" y1=\"276.4\" x2=\"217.7\" y2=\"282.4\" stroke=\"#1F2340\" stroke-width=\"1\"/><line x1=\"206.7\" y1=\"274.6\" x2=\"205.5\" y2=\"280.4\" stroke=\"#1F2340\" stroke-width=\"1\"/><line x1=\"195.4\" y1=\"271.5\" x2=\"193.5\" y2=\"277.2\" stroke=\"#1F2340\" stroke-width=\"1\"/><line x1=\"184.4\" y1=\"267.3\" x2=\"182.0\" y2=\"272.8\" stroke=\"#1F2340\" stroke-width=\"1\"/><line x1=\"177.0\" y1=\"256.8\" x2=\"171.0\" y2=\"267.2\" stroke=\"#1F2340\" stroke-width=\"3\"/><line x1=\"164.2\" y1=\"255.6\" x2=\"160.6\" y2=\"260.5\" stroke=\"#1F2340\" stroke-width=\"1\"/><line x1=\"155.1\" y1=\"248.2\" x2=\"151.0\" y2=\"252.7\" stroke=\"#1F2340\" stroke-width=\"1\"/><line x1=\"146.8\" y1=\"239.9\" x2=\"142.3\" y2=\"244.0\" stroke=\"#1F2340\" stroke-width=\"1\"/><line x1=\"139.4\" y1=\"230.8\" x2=\"134.5\" y2=\"234.4\" stroke=\"#1F2340\" stroke-width=\"1\"/><line x1=\"138.2\" y1=\"218.0\" x2=\"127.8\" y2=\"224.0\" stroke=\"#1F2340\" stroke-width=\"3\"/><line x1=\"127.7\" y1=\"210.6\" x2=\"122.2\" y2=\"213.0\" stroke=\"#1F2340\" stroke-width=\"1\"/><line x1=\"123.5\" y1=\"199.6\" x2=\"117.8\" y2=\"201.5\" stroke=\"#1F2340\" stroke-width=\"1\"/><line x1=\"120.4\" y1=\"188.3\" x2=\"114.6\" y2=\"189.5\" stroke=\"#1F2340\" stroke-width=\"1\"/><line x1=\"118.6\" y1=\"176.7\" x2=\"112.6\" y2=\"177.3\" stroke=\"#1F2340\" stroke-width=\"1\"/><line x1=\"124.0\" y1=\"165.0\" x2=\"112.0\" y2=\"165.0\" stroke=\"#1F2340\" stroke-width=\"3\"/><line x1=\"118.6\" y1=\"153.3\" x2=\"112.6\" y2=\"152.7\" stroke=\"#1F2340\" stroke-width=\"1\"/><line x1=\"120.4\" y1=\"141.7\" x2=\"114.6\" y2=\"140.5\" stroke=\"#1F2340\" stroke-width=\"1\"/><line x1=\"123.5\" y1=\"130.4\" x2=\"117.8\" y2=\"128.5\" stroke=\"#1F2340\" stroke-width=\"1\"/><line x1=\"127.7\" y1=\"119.4\" x2=\"122.2\" y2=\"117.0\" stroke=\"#1F2340\" stroke-width=\"1\"/><line x1=\"138.2\" y1=\"112.0\" x2=\"127.8\" y2=\"106.0\" stroke=\"#1F2340\" stroke-width=\"3\"/><line x1=\"139.4\" y1=\"99.2\" x2=\"134.5\" y2=\"95.6\" stroke=\"#1F2340\" stroke-width=\"1\"/><line x1=\"146.8\" y1=\"90.1\" x2=\"142.3\" y2=\"86.0\" stroke=\"#1F2340\" stroke-width=\"1\"/><line x1=\"155.1\" y1=\"81.8\" x2=\"151.0\" y2=\"77.3\" stroke=\"#1F2340\" stroke-width=\"1\"/><line x1=\"164.2\" y1=\"74.4\" x2=\"160.6\" y2=\"69.5\" stroke=\"#1F2340\" stroke-width=\"1\"/><line x1=\"177.0\" y1=\"73.2\" x2=\"171.0\" y2=\"62.8\" stroke=\"#1F2340\" stroke-width=\"3\"/><line x1=\"184.4\" y1=\"62.7\" x2=\"182.0\" y2=\"57.2\" stroke=\"#1F2340\" stroke-width=\"1\"/><line x1=\"195.4\" y1=\"58.5\" x2=\"193.5\" y2=\"52.8\" stroke=\"#1F2340\" stroke-width=\"1\"/><line x1=\"206.7\" y1=\"55.4\" x2=\"205.5\" y2=\"49.6\" stroke=\"#1F2340\" stroke-width=\"1\"/><line x1=\"218.3\" y1=\"53.6\" x2=\"217.7\" y2=\"47.6\" stroke=\"#1F2340\" stroke-width=\"1\"/><text x=\"276.0\" y=\"85.3\" text-anchor=\"middle\" dominant-baseline=\"central\" font-weight=\"700\" font-size=\"16\" fill=\"#1F2340\">1</text><text x=\"309.7\" y=\"119.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-weight=\"700\" font-size=\"16\" fill=\"#1F2340\">2</text><text x=\"322.0\" y=\"165.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-weight=\"700\" font-size=\"16\" fill=\"#1F2340\">3</text><text x=\"309.7\" y=\"211.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-weight=\"700\" font-size=\"16\" fill=\"#1F2340\">4</text><text x=\"276.0\" y=\"244.7\" text-anchor=\"middle\" dominant-baseline=\"central\" font-weight=\"700\" font-size=\"16\" fill=\"#1F2340\">5</text><text x=\"230.0\" y=\"257.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-weight=\"700\" font-size=\"16\" fill=\"#1F2340\">6</text><text x=\"184.0\" y=\"244.7\" text-anchor=\"middle\" dominant-baseline=\"central\" font-weight=\"700\" font-size=\"16\" fill=\"#1F2340\">7</text><text x=\"150.3\" y=\"211.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-weight=\"700\" font-size=\"16\" fill=\"#1F2340\">8</text><text x=\"138.0\" y=\"165.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-weight=\"700\" font-size=\"16\" fill=\"#1F2340\">9</text><text x=\"150.3\" y=\"119.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-weight=\"700\" font-size=\"16\" fill=\"#1F2340\">10</text><text x=\"184.0\" y=\"85.3\" text-anchor=\"middle\" dominant-baseline=\"central\" font-weight=\"700\" font-size=\"16\" fill=\"#1F2340\">11</text><text x=\"230.0\" y=\"73.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-weight=\"700\" font-size=\"16\" fill=\"#1F2340\">12</text><line x1=\"230\" y1=\"165\" x2=\"230\" y2=\"89\" stroke=\"#4B3FE0\" stroke-width=\"5\" stroke-linecap=\"round\"/><circle cx=\"230\" cy=\"165\" r=\"7\" fill=\"#FFC93C\" stroke=\"#1F2340\" stroke-width=\"3\"/><text x=\"268\" y=\"203\" text-anchor=\"middle\" font-weight=\"800\" font-size=\"16\" fill=\"#0B7A63\">PAST</text><text x=\"268\" y=\"219\" text-anchor=\"middle\" font-size=\"10\" fill=\"#1F2340\">menit 1–30</text><text x=\"192\" y=\"203\" text-anchor=\"middle\" font-weight=\"800\" font-size=\"16\" fill=\"#C23A1E\">TO</text><text x=\"192\" y=\"219\" text-anchor=\"middle\" font-size=\"10\" fill=\"#1F2340\">menit 31–59</text><text x=\"230\" y=\"22\" text-anchor=\"middle\" font-weight=\"700\" font-size=\"13\" fill=\"#1F2340\">menit 0 = o'clock</text><text x=\"358\" y=\"162\" font-size=\"12\" font-weight=\"700\" fill=\"#1F2340\">15 menit</text><text x=\"358\" y=\"178\" font-size=\"12\" fill=\"#1F2340\">a quarter past</text><text x=\"102\" y=\"162\" text-anchor=\"end\" font-size=\"12\" font-weight=\"700\" fill=\"#1F2340\">45 menit</text><text x=\"102\" y=\"178\" text-anchor=\"end\" font-size=\"12\" fill=\"#1F2340\">a quarter to</text><text x=\"230\" y=\"309\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1F2340\">30 menit = half past</text><text x=\"230\" y=\"329\" text-anchor=\"middle\" font-size=\"12\" fill=\"#4A4F73\">Jarum menit di kanan = past, di kiri = to</text></svg>", "caption": "Bayangkan jam dibelah dari angka 12 ke angka 6. Jarum menit di sisi kanan dibaca past, di sisi kiri dibaca to."},
        {"t": "clock", "title": "Coba sendiri: jam acak", "lead": "Latihan langsung: lihat jamnya, ucapkan dalam bahasa Inggris, lalu tekan <strong>Lihat jawaban</strong>. Tekan <strong>Jam acak</strong> (atau jamnya) untuk soal berikutnya. Di <em>Pengaturan jam</em> kamu bisa memilih interval menit, atau mematikan mode tebak kalau ingin jawabannya langsung tampil."},
        {"t": "chat", "title": "Menanyakan jam", "lead": "Begini percakapan sehari-hari saat menanyakan jam. Perhatikan kalimat tanya di gelembung kiri dan jawabannya di gelembung kanan. Tekan ikon suara untuk mendengarnya.", "scenes": [{"title": "Bertanya ke teman (santai)", "msgs": [{"who": "Rina", "side": "l", "en": "What time is it?", "id": "Jam berapa sekarang?"}, {"who": "Budi", "side": "r", "en": "It's ten past two.", "id": "Sekarang jam dua lewat sepuluh."}]}, {"title": "Bertanya ke orang yang belum dikenal (sopan)", "msgs": [{"who": "Rina", "side": "l", "en": "Could you tell me the time, please?", "id": "Bisakah kamu memberi tahu jam berapa sekarang?"}, {"who": "Pak Dani", "side": "r", "en": "Sure. It's a quarter to four.", "id": "Tentu. Sekarang jam empat kurang seperempat."}, {"who": "Rina", "side": "l", "en": "Thank you!", "id": "Terima kasih!"}, {"who": "Pak Dani", "side": "r", "en": "You're welcome.", "id": "Sama-sama."}]}, {"title": "Bertanya soal jam tangan", "msgs": [{"who": "Budi", "side": "l", "en": "What does your watch say?", "id": "Jam tanganmu menunjukkan jam berapa?"}, {"who": "Rina", "side": "r", "en": "It says half past five.", "id": "Menunjukkan jam lima lewat tiga puluh menit."}]}], "note": "Rumus jawabannya sederhana: <strong>It's + waktu</strong>. Contoh: <em>It's ten past two.</em> Kalimat tanya yang lebih sopan memakai <em>Could you …, please?</em>"},
        { t: "table", title: "Istilah seputar jam", head: ["Istilah", "Artinya"], say: [0], rows: [
          ["a.m.", "Ante meridiem: 12 malam sampai 12 siang"],
          ["p.m.", "Post meridiem: 12 siang sampai 12 malam"],
          ["a half", "setengah"],
          ["a quarter", "seperempat"],
          ["sharp", "tepat"]
        ]},
        { t: "miniquiz", title: "Istilah seputar jam", items: [
          {"q": "Jam delapan malam ditulis …", "options": ["8 p.m.", "8 a.m.", "8 sharp", "8 half"], "why": "p.m. dipakai untuk tengah hari sampai tengah malam."},
          {"q": "\"Sharp\" pada jam artinya …", "options": ["tepat", "setengah", "seperempat", "malam"], "why": "Eight o'clock sharp = tepat pukul delapan."}
        ]},
        {"t": "reveal", "title": "Gaya British: menit dulu, baru jam", "lead": "Lihat jam di bawah ini, coba ucapkan dalam bahasa Inggris, lalu tekan <strong>Lihat jawaban</strong> untuk mengecek. Ingat aturannya: menit 1–30 pakai <em>past</em>, menit 31–59 pakai <em>to</em>.", "ask": "Bagaimana cara membaca jam ini?", "items": [["01.05", "Five past one", "Menit 5 ada di 1–30, jadi pakai past: five past one."], ["02.10", "Ten past two", "Menit 10 pakai past: ten past two."], ["03.15", "Fifteen past three (a quarter past three)", "Menit 15 = seperempat (a quarter) lewat jam 3."], ["06.30", "Half past six", "Menit 30 = setengah (half) lewat jam 6."], ["01.55", "Five to two", "Menit 55 sudah lewat 30. Tinggal 5 menit menuju jam 2, jadi five to two."], ["02.50", "Ten to three", "Tinggal 10 menit menuju jam 3, jadi ten to three."], ["04.45", "Fifteen to five (a quarter to five)", "Tinggal 15 menit = a quarter to menuju jam 5."]]},
        { t: "miniquiz", title: "Gaya British: menit dulu", items: [
          {"q": "01.05 dibaca …", "options": ["Five past one", "Five to one", "One past five", "One five"], "why": "Menit 05 termasuk 01–30, jadi pakai past: five past one."},
          {"q": "06.30 dibaca …", "options": ["Half past six", "Half to six", "Six past half", "Half six past"], "why": "Menit 30 disebut half past: half past six."},
          {"q": "Dengarkan jamnya. Jam berapa ini?", "options": ["01.55", "02.05", "01.05", "02.55"], "why": "Five to two = lima menit menuju jam dua, yaitu 01.55.", "say": "It's five to two."}
        ]},
        {"t": "reveal", "title": "Gaya American: jam dulu, baru menit", "lead": "Gaya American paling mudah: sebut jam, lalu menit, seperti angka biasa. Tebak dulu, baru buka jawabannya.", "ask": "Bagaimana cara membaca jam ini?", "items": [["06.15", "Six fifteen", "Jam dulu, lalu menit."], ["07.07", "Seven oh seven", "Menit di bawah 10 dibaca dengan oh di depannya."], ["02.30", "Two thirty", "Jam dulu, lalu menit."], ["03.45", "Three forty-five", "Jam dulu, lalu menit."]]},
        { t: "miniquiz", title: "Gaya American: jam dulu", items: [
          {"q": "07.07 dibaca …", "options": ["Seven oh seven", "Seven seven", "Seven past seven", "Oh seven seven"], "why": "Menit di bawah 10 dibaca dengan oh di depannya."},
          {"q": "03.45 dibaca …", "options": ["Three forty-five", "Forty-five three", "Three to forty-five", "Three past forty-five"], "why": "American: jam dulu, lalu menit."},
          {"q": "Dengarkan jamnya. Jam berapa ini?", "options": ["02.30", "03.20", "02.03", "12.30"], "why": "Two thirty = jam dua lewat tiga puluh menit, yaitu 02.30.", "say": "It's two thirty."}
        ]}
      ],
      understand: [
        { t: "text", html: "Di halaman ini kamu akan memahami <strong>aturan menyebut jam</strong> satu per satu: gaya British, gaya American, dan istilah penting seperti o'clock dan a.m./p.m. Tekan tombol speaker untuk mendengar contohnya." },
        { t: "note", html: "<strong>Panduan warna:</strong> <span class=\"kw g\">past</span> = menit sudah lewat, <span class=\"kw c\">to</span> = menit menuju jam berikutnya, <span class=\"kw\">ungu</span> = kata kunci, <mark class=\"hl\">stabilo kuning</mark> = aturan penting. Biarkan matamu menangkap warna ini saat membaca." },
        { t: "entries", title: "Aturan penting saat menyebut jam", items: [
          { title: "1. British: menit dulu, lalu jam", flip: true, id: "Polanya: menit + past/to + jam.",
            rows: [["Rumus", "**menit** + {{g|past}} atau {{c|to}} + **jam**"], ["Penjelasan", "Sebut berapa **menitnya** dulu, lalu {{g|past}} atau {{c|to}}, lalu **jamnya**. ==Menit 01–30== memakai {{g|past}}. ==Menit 31–59== memakai {{c|to}}."]],
            ex: [["It's ten {{g|past}} two.", "Pukul 02.10."], ["It's five {{c|to}} two.", "Pukul 01.55."], ["It's twenty-five {{c|to}} six.", "Pukul 05.35."]] },
          { title: "2. Past: menit sudah lewat dari jam itu", flip: true, id: "Untuk menit 01 sampai 30.",
            rows: [["Rumus", "**menit (01–30)** + {{g|past}} + **jam yang baru lewat**"], ["Penjelasan", "{{g|Past}} artinya ==lewat==. Jam yang disebut adalah jam yang ==baru saja lewat==. Pukul 02.10 berarti sepuluh menit lewat dari jam **dua**."]],
            ex: [["It's five {{g|past}} one.", "Pukul 01.05."], ["It's twenty {{g|past}} seven.", "Pukul 07.20."], ["It's twenty-eight {{g|past}} twelve.", "Pukul 12.28."]] },
          { title: "3. To: menit tinggal sedikit menuju jam berikutnya", flip: true, id: "Untuk menit 31 sampai 59.",
            rows: [["Rumus", "==(60 − menit)== + {{c|to}} + **jam berikutnya**"], ["Penjelasan", "Hitung ==sisa menit==: 60 dikurangi menit. Lalu sebut jam yang ==akan datang==, bukan jam yang sedang berjalan. Pukul 04.45: sisanya 15 menit menuju jam lima, jadi **fifteen {{c|to}} five**."]],
            ex: [["It's ten {{c|to}} three.", "Pukul 02.50 (==60 − 50 = 10==)."], ["It's twenty-five {{c|to}} six.", "Pukul 05.35 (==60 − 35 = 25==)."], ["It's five {{c|to}} two.", "Pukul 01.55 (==60 − 55 = 5==)."]] },
          { title: "4. Setengah dan seperempat", flip: true, id: "Dua kata pendek yang sangat sering dipakai.",
            rows: [["Rumus", "{{half}} {{g|past}} = menit ==30==  |  a {{quarter}} {{g|past}} = menit ==15==  |  a {{quarter}} {{c|to}} = menit ==45=="], ["Penjelasan", "{{Half}} artinya **setengah** dan {{quarter}} artinya **seperempat**. Kata ==a== boleh dipakai di depan quarter."]],
            ex: [["It's {{half}} {{g|past}} six.", "Pukul 06.30."], ["It's a {{quarter}} {{g|past}} three.", "Pukul 03.15."], ["It's a {{quarter}} {{c|to}} five.", "Pukul 04.45."]] },
          { title: "5. American: jam dulu, lalu menit", flip: true, id: "Dibaca seperti angka biasa.",
            rows: [["Rumus", "**jam** + **menit**"], ["Penjelasan", "Sebut **jam**, lalu **menitnya**. Menit di bawah 10 dibaca dengan {{oh}} di depannya, jadi 07.07 menjadi **seven {{oh}} seven**. Dalam gaya American, setengah jam biasanya dibaca ==thirty==."]],
            ex: [["It's six fifteen.", "Pukul 06.15."], ["It's seven {{oh}} seven.", "Pukul 07.07."], ["It's three forty-five.", "Pukul 03.45."]] },
          { title: "6. Jam tepat dan waktu khusus", flip: true, id: "o'clock, noon, midnight, dan sharp.",
            rows: [["Rumus", "**angka jam** + {{o'clock}} untuk jam tepat"], ["Penjelasan", "{{O'clock}} dipakai saat menitnya ==00==. Jam 12 siang disebut {{noon}}, tengah malam disebut {{midnight}}. Kata {{sharp}} berarti ==tepat== dan ditaruh di belakang jam."]],
            ex: [["It's five {{o'clock}}.", "Pukul 05.00."], ["It's {{noon}}.", "Pukul 12 siang.", "12.00"],
          ["It's {{midnight}}.", "Pukul 12 malam (tengah malam).", "00.00"], ["The class starts at eight o'clock {{sharp}}.", "Kelas mulai tepat pukul delapan.", "08.00"]] },
          { title: "7. a.m. dan p.m.", flip: true, id: "Supaya jelas pagi atau malam.",
            rows: [["Rumus", "{{a.m.}} = tengah malam sampai tengah hari  |  {{p.m.}} = tengah hari sampai tengah malam"], ["Penjelasan", "Singkatan ini ditaruh ==setelah angka jam== supaya jelas itu pagi atau malam. Biasanya dipakai dalam gaya **American**."]],
            ex: [["I wake up at 6 {{a.m.}}", "Saya bangun pukul 6 pagi.", "06.00"], ["The movie starts at 7 {{p.m.}}", "Filmnya mulai pukul 7 malam.", "19.00"]] }
        ]},
        { t: "fix", side: true, title: "Kesalahan yang sering terjadi", hint: "Kesalahan terbesar biasanya urutan kata dan pilihan past atau to. Periksa dua hal itu dulu.", items: [
          ["It's two past ten.", "It's ten past two.", "Untuk pukul 02.10: sebut **menit dulu**, lalu **jam**. Hasilnya ==ten past two==.", "02.10"],
          ["It's five to one.", "It's five to two.", "Untuk pukul 01.55: sisa 5 menit menuju jam **dua**, bukan jam satu. Setelah {{c|to}} sebut ==jam berikutnya==.", "01.55"],
          ["It's thirty-five past five.", "It's twenty-five to six.", "Untuk pukul 05.35: menit di atas 30 memakai {{c|to}}. Sisa ==60 − 35 = 25== menit menuju jam enam.", "05.35"],
          ["It's seven seven.", "It's seven oh seven.", "Untuk pukul 07.07: menit di bawah 10 dibaca dengan {{oh}} di depannya.", "07.07"],
          ["It's six and fifteen.", "It's six fifteen.", "Untuk pukul 06.15 dalam gaya American, jam dan menit disebut langsung ==tanpa and==.", "06.15"]
        ]},
        { t: "dialogs", title: "Contoh percakapan tentang jam", items: [
          { title: "1. Bertanya jam kepada orang asing (British)", lines: [
            ["A", "Excuse me, could you tell me the time, please?", "Permisi, bisakah kamu memberi tahu jam berapa sekarang?"],
            ["B", "Sure. It's a quarter past three.", "Tentu. Sekarang pukul 03.15."],
            ["A", "Thank you very much.", "Terima kasih banyak."],
            ["B", "You're welcome.", "Sama-sama."]
          ]},
          { title: "2. Membuat janji menonton (American)", lines: [
            ["A", "What time does the movie start?", "Filmnya mulai jam berapa?"],
            ["B", "It starts at seven thirty.", "Mulai pukul 07.30."],
            ["A", "And what time does it end?", "Dan selesai jam berapa?"],
            ["B", "At nine forty-five.", "Pukul 09.45."],
            ["A", "Great. See you at seven!", "Bagus. Sampai jumpa pukul tujuh!"]
          ]},
          { title: "3. Takut terlambat ke kelas", lines: [
            ["A", "What time is it?", "Jam berapa sekarang?"],
            ["B", "It's ten to eight.", "Pukul 07.50."],
            ["A", "Oh no! The class starts at eight o'clock sharp.", "Aduh! Kelas mulai tepat pukul delapan."],
            ["B", "Don't worry. We still have ten minutes.", "Tenang. Kita masih punya sepuluh menit."]
          ]}
        ]},
        { t: "table", flags: { 1: "gb", 2: "us" }, title: "Cek cepat: dua gaya berdampingan", head: ["Jam", "British", "American"], say: [1, 2], rows: [
          ["02.10", "Ten past two", "Two ten"],
          ["03.15", "A quarter past three", "Three fifteen"],
          ["06.30", "Half past six", "Six thirty"],
          ["04.45", "A quarter to five", "Four forty-five"],
          ["01.55", "Five to two", "One fifty-five"],
          ["07.07", "Seven minutes past seven", "Seven oh seven"]
        ]},
        { t: "duonote", title: "Ingat perbedaannya", cols: [
          { flag: "gb", tone: "br", label: "British", sub: "menit lalu jam", points: [
            "Sebut ==menit dulu==, lalu **jam**: ten past two.",
            "Menit 01–30 pakai {{g|past}}.",
            "Menit 31–59 pakai {{c|to}}.",
            "Untuk {{c|to}}, hitung ==60 dikurangi menit== dan sebut jam berikutnya."] },
          { flag: "us", tone: "am", label: "American", sub: "jam lalu menit", points: [
            "Sebut ==jam dulu==, lalu **menit**, seperti angka digital: two ten.",
            "Menit di bawah 10 pakai {{c|oh}}: seven oh seven.",
            "Tanpa kata and: six fifteen."] }
        ] },
      ],
      practice: [
        { type: "mc", part: "Bertanya jam", q: "Kamu perlu tahu jam berapa sekarang dan bertanya kepada orang asing. Kalimat yang paling sopan?", options: ["Excuse me, could you tell me the time, please?", "You what time is it now?", "Time what you have?", "Tell time me now."], answer: 0,
          why: "Excuse me, could you tell me the time, please? sopan dan susunannya benar." },
        { type: "mc", part: "Gaya British", q: "Jam di dinding menunjukkan 02.10. Temanmu dari Inggris membacanya dengan gaya British. Apa katanya?", options: ["It's ten past two.", "It's ten to two.", "It's two past ten.", "It's ten two."], answer: 0,
          why: "Menit 10 termasuk 01–30, jadi pakai past dan menit disebut dulu: ten past two." },
        { type: "mc", part: "Menit menuju jam", q: "Kereta berangkat pukul 04.45. Dengan gaya British, apa yang kamu katakan?", options: ["It leaves at a quarter to five.", "It leaves at a quarter past four.", "It leaves at forty-five to four.", "It leaves at fifteen past five."], answer: 0,
          why: "04.45 tinggal 15 menit menuju jam lima, jadi a quarter to five." },
        { type: "fill", part: "Gaya American", q: "Seorang Amerika membaca jam 03.15. Lengkapi kalimatnya.", before: "It's three", after: ".", answers: ["fifteen"],
          why: "American: jam dulu lalu menit, jadi three fifteen." },
        { type: "mc", part: "Menit di bawah 10", q: "Dengan gaya American, bagaimana membaca 07.07?", options: ["Seven oh seven", "Seven seven", "Seven past seven", "Oh seven seven"], answer: 0,
          why: "Menit di bawah 10 dibaca dengan oh di depannya: seven oh seven." },
        { type: "mc", part: "Pagi atau malam", q: "Filmnya mulai pukul tujuh malam. Cara menulis yang benar?", options: ["7 p.m.", "7 a.m.", "7 sharp", "7 noon"], answer: 0,
          why: "p.m. dipakai untuk tengah hari sampai tengah malam, jadi 7 p.m. adalah jam tujuh malam." },
        { type: "order", part: "Menyusun kalimat", q: "Sekarang pukul 05.35. Susun kalimatnya dengan gaya British.", tokens: ["It's", "twenty-five", "to", "six."], answer: "It's twenty-five to six.",
          why: "Sisa menit menuju jam enam adalah 60 − 35 = 25, jadi twenty-five to six." }
      ],
      apply: { "prompt": "Bayangkan kamu bertanya jam dan menjawabnya. Baca kalimat-kalimat tentang jam ini.", "lines": [["Excuse me, could you tell me the time, please?", "Permisi, bisakah kamu memberi tahu jam berapa sekarang?"], ["It's a quarter past three.", "Sekarang pukul 03.15."], ["What time is it?", "Jam berapa sekarang?"], ["It's ten to eight.", "Pukul 07.50."], ["The class starts at eight o'clock sharp.", "Kelas mulai tepat pukul delapan."]] },
      review: [
        { type: "mc", part: "Menjawab jam", q: "\"Could you tell me the time, please?\" Jawaban yang tepat untuk pukul 03.15?", options: ["It's a quarter past three.", "It's a quarter to three.", "It's three to fifteen.", "It's fifteen three."], answer: 0,
          why: "03.15 adalah seperempat lewat tiga: a quarter past three." },
        { type: "fill", part: "Isian", q: "Pukul 07.20 gaya British. Lengkapi kalimatnya.", before: "Twenty minutes", after: "seven", answers: ["past"],
          why: "Menit 20 termasuk aturan 1, jadi past." },
        { type: "mc", part: "Gaya British", q: "12.28 dibaca dengan gaya British?", options: ["Twenty-eight past twelve", "Twenty-eight to twelve", "Twelve past twenty-eight", "Two to twelve"], answer: 0,
          why: "Menit 28 termasuk aturan 1, jadi twenty-eight past twelve." },
        { type: "order", part: "Susun kalimat", q: "Susun menjadi kalimat untuk pukul 04.45.", tokens: ["It's", "a", "quarter", "to", "five."], answer: "It's a quarter to five.",
          why: "Seperempat menuju jam lima: a quarter to five." },
        { type: "fillset", q: "Lengkapi lima kalimat jam di bawah ini.", part: "Isian beruntun",
          items: [
            { q: "03.10 gaya British.", before: "It's ten minutes", after: "three.", answers: ["past"], why: "Menit 10 masih di sisi kanan jam, jadi past: ten past three." },
            { q: "05.50 gaya British.", before: "It's ten minutes", after: "six.", answers: ["to"], why: "Menit 50 di atas 30, jadi to, dan jamnya naik: ten to six." },
            { q: "09.15 gaya British.", before: "It's a quarter", after: "nine.", answers: ["past"], why: "Menit 15 disebut a quarter past: a quarter past nine." },
            { q: "06.40 gaya American.", before: "It's six", after: "", answers: ["forty"], why: "Gaya American cukup menyebut jam lalu menit: six forty." },
            { q: "02.00 tepat.", before: "It's two", after: "", answers: ["o'clock", "oclock", "o clock"], why: "Menit 00 memakai o'clock: it's two o'clock." }
          ] }
      ]
    },

    /* ---------------------------------------------------------- 5 */
    {
      id: "arah",
      no: 5,
      title: "Giving direction",
      summary: "Memberi arah dan menyebut tempat umum.",
      access: "premium",
      minutes: 10,
      learn: [
        {"t": "video", "src": "video/arah-penjelasan.mp4", "poster": "video/arah-penjelasan.jpg", "title": "Video praktik Giving direction", "text": "Tonton dulu videonya (sekitar 3,5 menit) dan ikut mengucapkan petunjuknya, lalu lanjut membaca di bawah. Video bisa dijeda dan diulang kapan saja."},
        {"t": "explain", "title": "Tiga langkah menjelaskan arah", "lead": "Arah yang jelas selalu berisi tiga hal: pertanyaan, langkah berjalan, dan posisi tujuan.", "points": [{"icon": "🙋", "title": "Bertanya", "text": "Mulai dengan Could you tell me how to get to …?"}, {"icon": "🧭", "title": "Memberi petunjuk", "text": "Gunakan kata kerja: turn, go straight, cross, pass."}, {"icon": "📍", "title": "Menyebut posisi", "text": "Tutup dengan letak tempat: next to, opposite, behind."}], "flow": true, "note": "Urutan lengkapnya: <em>Go straight, turn left at the corner, and the market is on your right.</em>"},
        {"t": "chat", "title": "Menanyakan arah", "lead": "Begini cara bertanya arah di jalan. Pertanyaan ada di gelembung kiri, petunjuknya di gelembung kanan. Tekan ikon suara untuk mendengarnya.", "scenes": [{"title": "Bertanya dengan sopan", "msgs": [{"who": "Rina", "side": "l", "en": "Could you tell me how to get to the market?", "id": "Bisakah kamu memberi tahu cara ke pasar?"}, {"who": "Pak Dani", "side": "r", "en": "Sure. Go straight, then turn left.", "id": "Tentu. Maju lurus, lalu belok kiri."}, {"who": "Rina", "side": "l", "en": "Thank you very much!", "id": "Terima kasih banyak!"}]}, {"title": "Meminta ditunjukkan jalan", "msgs": [{"who": "Budi", "side": "l", "en": "Please show me how to get to the station.", "id": "Tolong tunjukkan cara ke stasiun."}, {"who": "Pak Dani", "side": "r", "en": "OK. Turn right at the corner. It's on the left side.", "id": "Baik. Belok kanan di pojok. Letaknya di sebelah kiri."}]}], "note": "Pola pertanyaan: <strong>Could you tell me how to get to …?</strong> atau <strong>Please show me how to get to …</strong>"},
        {"t": "chat", "title": "Memberi petunjuk: kata kerja arah", "lead": "Perhatikan kata kerja yang dipakai untuk memberi petunjuk: go straight, turn, cross, pass, stop.", "scenes": [{"title": "Menyeberang dan melewati", "msgs": [{"who": "Budi", "side": "l", "en": "Where is the school, please?", "id": "Di mana sekolahnya?"}, {"who": "Rina", "side": "r", "en": "Cross the road, then pass the cinema.", "id": "Seberangi jalan, lalu lewati bioskop."}, {"who": "Rina", "side": "r", "en": "Stop at the corner. The school is there.", "id": "Berhenti di pojok. Sekolahnya ada di situ."}]}, {"title": "Saat salah jalan", "msgs": [{"who": "Budi", "side": "l", "en": "I think I'm lost.", "id": "Sepertinya saya tersesat."}, {"who": "Rina", "side": "r", "en": "Turn back, and turn right at the next street.", "id": "Balik arah, lalu belok kanan di jalan berikutnya."}]}]},
        { t: "table", cards: true, title: "Kata kerja arah", head: ["English", "Artinya"], say: [0], rows: [
          ["Turn right", "Belok kanan"], ["Turn left", "Belok kiri"], ["Turn back", "Balik arah"],
          ["Go straight", "Maju lurus"], ["Stop", "Berhenti"], ["Pass", "Melewati"], ["Cross", "Menyeberangi"]
        ]},
        { t: "miniquiz", title: "Kata kerja arah", items: [
          {"q": "Dengarkan petunjuk ini. Artinya?", "options": ["Belok kiri", "Belok kanan", "Maju lurus", "Berhenti"], "why": "Turn left = belok kiri.", "say": "Turn left."},
          {"q": "\"Go straight\" artinya …", "options": ["Maju lurus", "Balik arah", "Berhenti", "Menyeberang"], "why": "Go straight = maju lurus."},
          {"q": "Kata kerja untuk \"menyeberangi jalan\"?", "options": ["Cross", "Pass", "Stop", "Turn back"], "why": "Cross = menyeberangi. Pass = melewati."}
        ]},
        {"t": "chat", "title": "Menyebut posisi tempat", "lead": "Kata posisi (opposite, beside, near, …) dipakai untuk menjelaskan letak sebuah tempat.", "scenes": [{"title": "Menanyakan letak", "msgs": [{"who": "Budi", "side": "l", "en": "Where is the gas station?", "id": "Di mana SPBU-nya?"}, {"who": "Rina", "side": "r", "en": "It's opposite the school.", "id": "Letaknya di seberang sekolah."}, {"who": "Budi", "side": "l", "en": "And the mosque?", "id": "Kalau masjid?"}, {"who": "Rina", "side": "r", "en": "It's beside the city park, near the market.", "id": "Di samping taman kota, dekat pasar."}]}, {"title": "Memastikan letak", "msgs": [{"who": "Budi", "side": "l", "en": "Is the store behind the cinema?", "id": "Apakah toko ada di belakang bioskop?"}, {"who": "Rina", "side": "r", "en": "No, it's in front of the cinema, between the school and the market.", "id": "Bukan, tokonya di depan bioskop, di antara sekolah dan pasar."}]}]},
        { t: "table", cards: true, title: "Kata untuk menyebut posisi", head: ["English", "Artinya"], say: [0], rows: [
          ["left side", "di sebelah kiri"], ["right side", "di sebelah kanan"], ["between", "di antara dua"],
          ["behind", "di belakang"], ["in front of", "di depan"], ["beside", "di samping"], ["near", "di dekat"],
          ["in the corner", "di pojok"], ["opposite", "di seberang"], ["until", "sampai"]
        ]},
        { t: "miniquiz", title: "Kata untuk posisi", items: [
          {"q": "\"Opposite\" artinya …", "options": ["di seberang", "di samping", "di belakang", "di depan"], "why": "Opposite = di seberang."},
          {"q": "Lengkapi: \"The cinema is ___ the market.\" (di depan)", "options": ["in front of", "behind", "until", "between"], "why": "In front of = di depan."},
          {"q": "Dengarkan kata ini. Artinya?", "options": ["di samping", "di antara", "di dekat", "di pojok"], "why": "Beside = di samping.", "say": "beside"}
        ]},
        {"t": "chat", "title": "Petunjuk lengkap dengan penghubung urutan", "lead": "Petunjuk yang panjang terasa lebih rapi kalau diberi penghubung: First, Then, After that, Finally.", "scenes": [{"title": "Dari awal sampai tujuan", "msgs": [{"who": "Rina", "side": "l", "en": "How do I get to the train station?", "id": "Bagaimana cara ke stasiun?"}, {"who": "Pak Dani", "side": "r", "en": "First, go straight to the roundabout.", "id": "Pertama, maju lurus sampai bundaran."}, {"who": "Pak Dani", "side": "r", "en": "Then, take the second turn.", "id": "Kemudian, ambil belokan kedua."}, {"who": "Pak Dani", "side": "r", "en": "After that, pass the T-junction.", "id": "Setelah itu, lewati pertigaan."}, {"who": "Pak Dani", "side": "r", "en": "Finally, you will see the train station.", "id": "Akhirnya, kamu akan melihat stasiun."}, {"who": "Rina", "side": "l", "en": "Thank you!", "id": "Terima kasih!"}]}], "note": "Urutan penghubung: <strong>First → Then / Next → After that → Finally</strong>."},
        { t: "table", title: "Jalan dan tempat di jalan", head: ["English", "Artinya"], say: [0], rows: [
          ["sidewalk", "trotoar"], ["crossroad", "perempatan"], ["T-junction", "pertigaan"],
          ["roundabout", "bundaran"], ["the second turn", "belokan kedua"]
        ]},
        { t: "table", title: "Penghubung urutan", head: ["English", "Artinya"], say: [0], rows: [
          ["First", "Pertama"], ["Then", "Kemudian"], ["Next", "Selanjutnya"], ["After that", "Setelah itu"], ["Finally", "Akhirnya"]
        ]},
        { t: "miniquiz", title: "Jalan dan penghubung", items: [
          {"q": "Jalan yang bentuknya seperti huruf T disebut …", "options": ["T-junction", "crossroad", "roundabout", "sidewalk"], "why": "Pertigaan berbentuk T disebut T-junction."},
          {"q": "Penghubung untuk langkah paling akhir?", "options": ["Finally", "First", "Then", "Next"], "why": "Finally = akhirnya, dipakai di langkah terakhir."}
        ]},
        { t: "table", cards: true, title: "Tempat umum", head: ["English", "Artinya"], say: [0], rows: [
          ["cinema", "bioskop"], ["school", "sekolah"], ["market", "pasar"], ["train station", "stasiun"],
          ["gas station", "SPBU"], ["police office", "kantor polisi"], ["city park", "taman kota"],
          ["store", "toko"], ["airport", "bandara"], ["bus station", "terminal"], ["mosque", "masjid"]
        ]},
        { t: "miniquiz", title: "Tempat umum", items: [
          {"q": "Tempat untuk membeli bensin?", "options": ["gas station", "police office", "city park", "cinema"], "why": "Gas station = SPBU."},
          {"q": "Dengarkan kata ini. Artinya?", "options": ["bandara", "terminal", "stasiun", "pasar"], "why": "Airport = bandara.", "say": "airport"},
          {"q": "\"Mosque\" artinya …", "options": ["masjid", "sekolah", "bioskop", "taman kota"], "why": "Mosque = masjid."}
        ]}
      ],
      understand: [
        { t: "text", html: "Di halaman ini kamu akan memahami <strong>cara menyusun petunjuk arah</strong> dengan rapi: bertanya dengan sopan, memberi perintah arah, menyusun langkah, dan menyebut posisi tujuan. Lihat dulu peta contoh di bawah, lalu dengarkan petunjuknya." },
        { t: "figure", title: "Peta contoh: dari titik awal ke stasiun", caption: "Ikuti garis ungu dari titik <strong>Kamu di sini</strong>. Petunjuknya ada di percakapan 1 di bawah.",
          svg: '<svg viewBox="0 0 600 380" role="img" aria-label="Peta sederhana: dari titik awal maju lurus ke pertigaan, belok kanan melewati pasar, belok kiri di perempatan, stasiun ada di sisi kanan."><defs><marker id="ah" viewBox="0 0 10 10" refX="6" refY="5" markerUnits="userSpaceOnUse" markerWidth="18" markerHeight="18" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#4B3FE0"/></marker></defs><rect width="600" height="380" fill="#FFFDF8"/><g stroke="#D9D4C7" stroke-width="38" stroke-linecap="butt" fill="none"><path d="M250 380V150"/><path d="M60 150H540"/><path d="M420 40V260"/></g><g stroke="#fff" stroke-width="3" stroke-dasharray="14 12" fill="none"><path d="M250 380V150"/><path d="M60 150H540"/><path d="M420 40V260"/></g><g font-family="Poppins,Segoe UI,sans-serif" font-size="19" font-weight="600" fill="#1F2340" stroke="#1F2340" stroke-width="2"><rect x="80" y="52" width="110" height="58" rx="10" fill="#E8E4FF"/><rect x="290" y="52" width="100" height="58" rx="10" fill="#FFE9A8"/><rect x="448" y="52" width="110" height="58" rx="10" fill="#DDF6EF"/><rect x="290" y="190" width="100" height="58" rx="10" fill="#FFE1DA"/><rect x="80" y="190" width="120" height="58" rx="10" fill="#E8E4FF"/></g><g font-family="Poppins,Segoe UI,sans-serif" font-size="19" font-weight="600" fill="#1F2340" text-anchor="middle"><text x="135" y="88">Cinema</text><text x="340" y="88">Market</text><text x="503" y="88">Station</text><text x="340" y="226">School</text><text x="140" y="226">City park</text></g><path d="M250 330V150H420V88" fill="none" stroke="#4B3FE0" stroke-width="6" stroke-dasharray="2 12" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#ah)"/><circle cx="250" cy="335" r="14" fill="#FFC93C" stroke="#1F2340" stroke-width="3"/><g font-family="Poppins,Segoe UI,sans-serif" font-size="17" font-weight="600" fill="#1F2340"><text x="272" y="342">Kamu di sini</text><rect x="168" y="162" width="124" height="26" rx="13" fill="#fff" stroke="#1F2340" stroke-width="2"/><text x="230" y="181" text-anchor="middle" font-size="15">T-junction</text><rect x="440" y="162" width="104" height="26" rx="13" fill="#fff" stroke="#1F2340" stroke-width="2"/><text x="492" y="181" text-anchor="middle" font-size="15">Crossroad</text></g></svg>' },
        { t: "entries", title: "Aturan penting saat memberi arah", items: [
          { title: "1. Bertanya arah dengan sopan", id: "Pakai Could you tell me … agar terdengar sopan.",
            rows: [["Rumus", "{{Could you tell me}} how to get to + **tempat**?"], ["Penjelasan", "{{Could you …}} lebih ==sopan== daripada langsung bertanya Where is …? Kepada orang yang baru kamu temui, awali dengan {{Excuse me}}."]],
            ex: [["Excuse me, could you tell me how to get to the station?", "Permisi, bisakah kamu memberi tahu cara ke stasiun?"], ["Please show me how to get to the market.", "Tolong tunjukkan cara ke pasar."], ["Could you tell me how to get to the mosque?", "Bisakah kamu memberi tahu cara ke masjid?"]] },
          { title: "2. Perintah arah tanpa subjek", id: "Cukup mulai dengan kata kerjanya.",
            rows: [["Rumus", "**Kata kerja** + arah atau tempat. ==Tanpa I, you, atau he.=="], ["Penjelasan", "Kalimat perintah langsung diawali ==kata kerja==. Bukan You turn left, melainkan {{Turn left}}. Cara ini lebih singkat dan jelas."]],
            ex: [["Turn left.", "Belok kiri."], ["Go straight.", "Maju lurus."], ["Cross the road.", "Seberangi jalan."], ["Pass the mosque.", "Lewati masjid."]] },
          { title: "3. Urutan langkah", id: "First, Then, Next, After that, Finally.",
            rows: [["Rumus", "**Penghubung** + koma + **perintah**."], ["Penjelasan", "==Satu penghubung untuk satu langkah==, urut dari {{First}} sampai {{Finally}}. Beri koma setelah penghubung dan buat ==satu kalimat pendek untuk satu langkah==."]],
            ex: [["{{First}}, go straight.", "Pertama, maju lurus."], ["{{Then}}, turn left.", "Kemudian, belok kiri."], ["{{After that}}, cross the road.", "Setelah itu, seberangi jalan."], ["{{Finally}}, the cinema is on your right side.", "Akhirnya, bioskop ada di sebelah kananmu."]] },
          { title: "4. Kata depan: at dan until", id: "At menunjuk titik belok, until berarti sampai.",
            rows: [["Rumus", "turn + arah + {{at}} + persimpangan. go straight + {{until}} + tempat."], ["Penjelasan", "{{At}} menunjuk ==titik tempat kamu harus berbelok==. {{Until}} berarti ==sampai==, dipakai untuk terus maju sampai bertemu sesuatu."]],
            ex: [["Turn left {{at}} the T-junction.", "Belok kiri di pertigaan."], ["Turn right {{at}} the crossroad.", "Belok kanan di perempatan."], ["Go straight {{until}} the roundabout.", "Maju lurus sampai bundaran."]] },
          { title: "5. Menyebut posisi tujuan", id: "Tutup petunjukmu dengan posisi tujuan.",
            rows: [["Rumus", "tujuan + is + {{on}} your left/right side, {{between}}, {{opposite}}, atau {{next to}} + tempat."], ["Penjelasan", "Akhiri petunjuk dengan ==posisi tujuan== supaya orang tahu apa yang dicari. Sisi kiri atau kanan memakai {{on}}. Tambahkan bangunan di dekatnya sebagai penanda."]],
            ex: [["The cinema is {{on}} your right side.", "Bioskop ada di sebelah kananmu."], ["The bank is {{between}} the school and the market.", "Bank ada di antara sekolah dan pasar."], ["The mosque is {{opposite}} the city park.", "Masjid ada di seberang taman kota."], ["The gas station is {{next to}} the police office.", "SPBU ada di samping kantor polisi."]] },
          { title: "6. Menghitung belokan", id: "Sebut belokan yang keberapa.",
            rows: [["Rumus", "Take the {{first}}/{{second}}/{{third}} turn + on the left/right."], ["Penjelasan", "Kalau ada banyak belokan, sebut ==belokan yang keberapa==. {{First}} artinya pertama, {{second}} kedua, dan {{third}} ketiga."]],
            ex: [["Take the {{second}} turn on the left.", "Ambil belokan kedua di sebelah kiri."], ["Take the {{first}} turn on the right.", "Ambil belokan pertama di sebelah kanan."]] }
        ]},
        { t: "fix", side: true, title: "Kesalahan yang sering terjadi", hint: "Perhatikan kata depan (at, on, until) dan urutan kata. Kesalahan kecil di sini membuat petunjuk membingungkan.", items: [
          ["Turn right in the crossroad.", "Turn right {{at}} the crossroad.", "Untuk titik tempat berbelok dipakai {{at}}, bukan in."],
          ["The cinema is in your right side.", "The cinema is {{on}} your right side.", "Sisi kiri atau kanan memakai {{on}}."],
          ["Go straight until at the roundabout.", "Go straight {{until}} the roundabout.", "{{Until}} langsung diikuti tempat, ==tanpa at==."],
          ["You turn left.", "Turn left.", "Perintah arah diawali ==kata kerja==, tanpa you."],
          ["Could you tell me where is the market?", "Could you tell me where the market is?", "Setelah Could you tell me, ==susunan kalimat tidak dibalik==: where the market is."]
        ]},
        { t: "dialogs", title: "Contoh percakapan memberi arah", items: [
          { title: "1. Ke stasiun (ikuti peta di atas)", lines: [
            ["A", "Excuse me, could you tell me how to get to the station?", "Permisi, bisakah kamu memberi tahu cara ke stasiun?"],
            ["B", "Sure. First, go straight.", "Tentu. Pertama, maju lurus."],
            ["B", "Then turn right at the T-junction.", "Kemudian belok kanan di pertigaan."],
            ["B", "Next, pass the market.", "Selanjutnya, lewati pasar."],
            ["B", "After that, turn left at the crossroad.", "Setelah itu, belok kiri di perempatan."],
            ["B", "Finally, the station is on your right side.", "Akhirnya, stasiun ada di sebelah kananmu."],
            ["A", "Thank you so much!", "Terima kasih banyak!"]
          ]},
          { title: "2. Ke masjid, dengan penanda bangunan", lines: [
            ["A", "Excuse me, please show me how to get to the mosque.", "Permisi, tolong tunjukkan cara ke masjid."],
            ["B", "No problem. Go straight until the roundabout.", "Tidak masalah. Maju lurus sampai bundaran."],
            ["B", "Take the {{second}} turn on the left.", "Ambil belokan kedua di sebelah kiri."],
            ["B", "The mosque is {{opposite}} the city park.", "Masjid ada di seberang taman kota."],
            ["A", "Great. Thank you!", "Bagus. Terima kasih!"]
          ]}
        ]},
        { t: "table", title: "Cek cepat: mau bilang apa?", head: ["Mau bilang", "Pakai", "Contoh"], say: [1, 2], rows: [
          ["Belok", "Turn left / Turn right", "Turn left {{at}} the T-junction."],
          ["Maju terus", "Go straight", "Go straight {{until}} the roundabout."],
          ["Menyeberang", "Cross", "Cross the road."],
          ["Posisi tujuan", "on your left/right side", "The cinema is {{on}} your right side."]
        ]},
        { t: "note", html: "<strong>Tips:</strong> <mark class='hl'>satu langkah, satu kalimat pendek</mark>. Sebut penanda yang mudah dilihat (pasar, masjid, bundaran), dan tutup dengan <span class='kw'>posisi tujuan</span>." }
      ],
      practice: [
        { type: "mc", part: "Tersesat", q: "Kamu tersesat dan ingin ke stasiun. Cara bertanya arah yang paling sopan?", options: ["Excuse me, could you tell me how to get to the station?", "Where station? Tell me.", "You tell how get station.", "Station where you tell me is?"], answer: 0,
          why: "Could you tell me how to get to + tempat? adalah pola sopan untuk bertanya arah." },
        { type: "mc", part: "Mengerti petunjuk", q: "Seseorang berkata, \"Turn left at the T-junction.\" Artinya?", options: ["Belok kiri di pertigaan.", "Belok kanan di perempatan.", "Maju lurus di bundaran.", "Berhenti di trotoar."], answer: 0,
          why: "Turn left = belok kiri. T-junction = pertigaan." },
        { type: "mc", part: "Posisi tujuan", q: "Kamu ingin bilang bioskopnya ada di sebelah kananmu. Kalimat yang benar?", options: ["The cinema is on your right side.", "The cinema is in your right side.", "The cinema is at your right side.", "The cinema is on right your side."], answer: 0,
          why: "Sisi kiri atau kanan memakai on: on your right side." },
        { type: "fill", part: "Sampai bundaran", q: "Kamu menyuruh temanmu terus maju sampai bundaran. Lengkapi kalimatnya.", before: "Go straight", after: "the roundabout.", answers: ["until"],
          why: "Until berarti sampai: Go straight until the roundabout." },
        { type: "mc", part: "Urutan langkah", q: "Pilih petunjuk dengan urutan penghubung yang benar.", options: ["First, go straight. Then turn left. Finally, the market is on your right side.", "Finally, go straight. Then turn left. First, the market is on your right side.", "Then go straight. Finally turn left. First, the market is on your right side.", "Next go straight. First turn left. Finally the market is on your right side."], answer: 0,
          why: "Urutan yang benar: First (pertama), Then (kemudian), dan Finally (akhirnya) di langkah terakhir." },
        { type: "order", part: "Menghitung belokan", q: "Susun menjadi petunjuk arah.", tokens: ["Take", "the", "second", "turn", "on", "the", "left."], answer: "Take the second turn on the left.",
          why: "Pola: Take the + urutan + turn + on the left/right." },
        { type: "mc", part: "Di seberang", q: "Masjid berada di seberang taman kota. Lengkapi: \"The mosque is ___ the city park.\"", options: ["opposite", "between", "behind", "until"], answer: 0,
          why: "Opposite artinya di seberang. Between untuk di antara dua benda, behind untuk di belakang." }
      ],
      apply: { "prompt": "Bayangkan kamu bertanya dan memberi arah ke stasiun. Baca kalimat-kalimat ini.", "lines": [["Excuse me, could you tell me how to get to the station?", "Permisi, bisakah kamu memberi tahu cara ke stasiun?"], ["First, go straight.", "Pertama, maju lurus."], ["Next, pass the market.", "Selanjutnya, lewati pasar."], ["After that, turn left at the crossroad.", "Setelah itu, belok kiri di perempatan."], ["Finally, the station is on your right side.", "Akhirnya, stasiun ada di sebelah kananmu."]] },
      review: [
        { type: "mc", part: "Arti ungkapan", q: "\"After that\" artinya …", options: ["Setelah itu", "Pertama", "Akhirnya", "Selanjutnya"], answer: 0,
          why: "After that = setelah itu." },
        { type: "mc", part: "Arti ungkapan", q: "\"In front of\" artinya …", options: ["Di depan", "Di belakang", "Di samping", "Di seberang"], answer: 0,
          why: "In front of = di depan." },
        { type: "fill", part: "Isian", q: "Lengkapi kalimatnya (artinya: di samping).", before: "The mosque is", after: "the park.", answers: ["beside", "next to"],
          why: "Beside atau next to berarti di samping." },
        { type: "order", part: "Susun kalimat", q: "Susun menjadi kalimat bertanya arah.", tokens: ["Could", "you", "tell", "me", "how", "to", "get", "to", "the", "airport?"], answer: "Could you tell me how to get to the airport?",
          why: "Polanya: Could you tell me how to get to + tempat?" },
        { type: "fillset", part: "Isian beruntun", q: "Lengkapi lima petunjuk arah di bawah ini.",
          items: [
            { q: "Titik belok. (Artinya: Belok kanan di perempatan.)", before: "Turn right", after: "the crossroad.", answers: ["at"], why: "At menunjuk titik tempat berbelok." },
            { q: "Urutan langkah. (Artinya: Pertama, lurus dua blok.)", before: "", after: ", go straight for two blocks.", answers: ["first"], why: "First membuka urutan langkah." },
            { q: "Menghitung belokan. (Artinya: Ambil belokan ketiga di sebelah kanan.)", before: "Take the", after: "turn on the right.", answers: ["third"], why: "Belokan ketiga = the third turn." },
            { q: "Menyebut posisi. (Artinya: Bank itu di antara sekolah dan rumah sakit.)", before: "The bank is", after: "the school and the hospital.", answers: ["between"], why: "Between berarti di antara dua tempat." },
            { q: "Langkah terakhir. (Artinya: Terakhir, kamu akan melihat sekolah di kananmu.)", before: "", after: ", you will see the school on your right.", answers: ["finally"], why: "Finally menutup urutan langkah." }
          ] }
      ]
    },

    /* ---------------------------------------------------------- 6 */
    {
      id: "deskripsi",
      no: 6,
      title: "Describing things",
      teaser: "Pelajaran kejutan",
      summary: "Mendeskripsikan benda dengan 7 poin yang mudah diingat.",
      access: "premium",
      minutes: 10,
      learn: [
        {"t": "video", "src": "video/deskripsi-penjelasan.mp4", "poster": "video/deskripsi-penjelasan.jpg", "title": "Video praktik Describing things", "text": "Tonton dulu videonya (sekitar 3,5 menit) dan ikut mengucapkan kalimatnya, lalu lanjut membaca di bawah. Video bisa dijeda dan diulang kapan saja."},
        {"t": "explain", "title": "Tujuh poin untuk mendeskripsikan benda", "lead": "Kamu tidak perlu menyebut semuanya. Pilih poin yang paling penting supaya ceritamu rapi dan mudah dipahami.", "points": [{"icon": "🏷️", "title": "Nama", "text": "Benda apa ini?"}, {"icon": "📐", "title": "Penampilan", "text": "Ukuran, bentuk, warna."}, {"icon": "⚖️", "title": "Berat", "text": "Ringan atau berat."}, {"icon": "✅", "title": "Kondisi", "text": "Baru, lama, bagus."}, {"icon": "🌍", "title": "Asal dan merek", "text": "Dibuat di mana, mereknya apa."}, {"icon": "🧱", "title": "Bahan", "text": "Terbuat dari apa."}, {"icon": "🛠️", "title": "Fungsi", "text": "Dipakai untuk apa."}], "note": "Cara cepat mengingat: mulai dari <strong>apa bendanya</strong>, lalu <strong>bagaimana rupanya</strong>, lalu <strong>untuk apa dipakai</strong>."},
        { t: "text", html: "Saat mendeskripsikan benda, sebut poin-poin berikut agar ceritamu lengkap dan teratur." },
        { t: "table", title: "7 poin mendeskripsikan benda", head: ["No", "Poin", "Artinya"], rows: [
          ["1", "Name of thing", "Nama benda"],
          ["2", "Appearance (size, shape, colour)", "Penampilan: ukuran, bentuk, warna"],
          ["3", "Weight", "Berat"],
          ["4", "Condition / quality", "Kondisi atau kualitas"],
          ["5", "Origin / brand", "Asal dan merek"],
          ["6", "Material", "Bahan, terbuat dari apa"],
          ["7", "Function / use", "Fungsi atau kegunaan"]
        ]},
        { t: "miniquiz", title: "7 poin mendeskripsikan benda", items: [
          {"q": "Poin \"Material\" artinya …", "options": ["Bahan", "Berat", "Kegunaan", "Asal"], "why": "Material = bahan, yaitu terbuat dari apa."},
          {"q": "\"It is used for taking photos.\" menjelaskan poin …", "options": ["Function / use", "Material", "Weight", "Origin / brand"], "why": "Used for … menjelaskan fungsi atau kegunaan."},
          {"q": "\"It is made in South Korea.\" menjelaskan poin …", "options": ["Origin / brand", "Material", "Condition", "Weight"], "why": "Made in + negara menjelaskan asal."}
        ]},
        { t: "text", html: "<strong>Contoh deskripsi (poin demi poin):</strong>" },
        { t: "table", title: "Contoh: smartphone", head: ["Poin", "Kalimat"], say: [1], rows: [
          ["Item name", "It is a smartphone. It's a very important item in my daily life."],
          ["Function", "It is used for making calls, sending messages, taking photos, and accessing the internet."],
          ["Appearance", "It is medium-sized, easy to hold, and lightweight. It has a rectangular shape with rounded corners."],
          ["Material", "It is made of metal and glass."],
          ["Origin", "It is made in South Korea."],
          ["Condition", "It is still in very good condition, almost like new."]
        ]},
        { t: "table", cards: true, title: "Kosakata sifat", head: ["English", "Artinya"], say: [0], rows: [
          ["small", "kecil"], ["big", "besar"], ["tall", "tinggi"], ["long", "panjang"],
          ["expensive", "mahal"], ["cheap", "murah"], ["heavy", "berat"], ["light", "ringan"],
          ["soft", "lembut"], ["hard", "keras"], ["comfortable", "nyaman"], ["useful", "bermanfaat"],
          ["useless", "tidak berguna"], ["interesting", "menarik"], ["difficult", "sulit"], ["easy", "mudah"],
          ["slow", "lambat"], ["fast", "cepat"], ["dirty", "kotor"], ["clean", "bersih"],
          ["weak", "lemah"], ["strong", "kuat"], ["sophisticated", "canggih"], ["simple", "sederhana"]
        ]},
        { t: "miniquiz", title: "Kosakata sifat", items: [
          {"q": "Lawan kata \"fast\"?", "options": ["slow", "easy", "clean", "heavy"], "why": "Fast (cepat) lawannya slow (lambat)."},
          {"q": "Dengarkan kata ini. Artinya?", "options": ["nyaman", "canggih", "mahal", "kotor"], "why": "Comfortable = nyaman.", "say": "comfortable"},
          {"q": "Lawan kata \"strong\"?", "options": ["weak", "soft", "light", "cheap"], "why": "Strong (kuat) lawannya weak (lemah)."}
        ]},
        { t: "table", cards: true, title: "Kosakata lain", head: ["English", "Artinya"], say: [0], rows: [
          ["made of", "terbuat dari"], ["made in", "dibuat di"], ["metal", "logam"], ["glass", "kaca"],
          ["size", "ukuran"], ["shape", "bentuk"], ["condition", "kondisi"], ["take care of", "merawat"]
        ]},
        { t: "miniquiz", title: "Kosakata lain", items: [
          {"q": "\"Made of\" artinya …", "options": ["terbuat dari", "dibuat di", "merawat", "ukuran"], "why": "Made of = terbuat dari (bahan)."},
          {"q": "\"Take care of\" artinya …", "options": ["merawat", "kondisi", "bentuk", "logam"], "why": "Take care of = merawat."}
        ]}
      ],
      understand: [
        { t: "text", html: "Di halaman ini kamu akan memahami <strong>pola kalimat untuk setiap poin</strong> deskripsi benda, satu per satu, lalu melihat contoh lengkapnya. Tekan tombol speaker untuk mendengar contoh kalimatnya." },
        { t: "entries", title: "Pola kalimat untuk 7 poin", items: [
          { title: "1. Nama benda (Name of thing)", id: "Mulai dengan menyebut apa bendanya.",
            rows: [["Rumus", "{{It is a/an}} + nama benda. Untuk benda jamak: {{They are}} + benda."], ["Penjelasan", "Pakai {{a}} sebelum bunyi konsonan dan {{an}} sebelum bunyi vokal. Kalau bendanya ==lebih dari satu==, pakai {{They are}}."]],
            ex: [["It is {{a}} smartphone.", "Ini sebuah ponsel pintar."], ["It is {{an}} umbrella.", "Ini sebuah payung."], ["{{They are}} shoes.", "Ini sepasang sepatu."]] },
          { title: "2. Penampilan: ukuran, bentuk, warna", id: "Pakai sifat setelah is atau are.",
            rows: [["Rumus", "{{It is}} + **sifat**. / {{It has a}} + **bentuk**."], ["Penjelasan", "Sebut ==ukuran dulu, lalu warna==. Kalau tidak ada bendanya, sifat berdiri sendiri tanpa a: It is big. ==Sifat tidak diberi -s== walaupun bendanya jamak."]],
            ex: [["It is small and black.", "Kecil dan hitam."], ["It has a rectangular shape.", "Bentuknya persegi panjang."], ["They are big and white.", "Besar dan putih."]] },
          { title: "3. Berat (Weight)", id: "Cukup pakai sifat light atau heavy.",
            rows: [["Rumus", "It is {{light}}. / It is {{heavy}}."], ["Penjelasan", "{{Light}} berarti **ringan** dan {{heavy}} berarti **berat**. Kamu bisa menambahkan {{very}} di depannya untuk menguatkan."]],
            ex: [["It is {{very}} light.", "Sangat ringan."], ["My bag is heavy.", "Tasku berat."]] },
          { title: "4. Kondisi dan kualitas (Condition)", id: "Cerita apakah bendanya masih baik.",
            rows: [["Rumus", "It is {{in good condition}}. / It is {{still}} new."], ["Penjelasan", "Condition artinya kondisi. Pakai {{in good condition}} atau {{in bad condition}}. Tambahkan {{still}} untuk menunjukkan benda itu ==masih bertahan baik==."]],
            ex: [["It is {{in good condition}}.", "Kondisinya baik."], ["It is {{still}} in very good condition.", "Masih dalam kondisi sangat baik."], ["I take care of it every day.", "Saya merawatnya setiap hari."]] },
          { title: "5. Asal dan merek (Origin / brand)", id: "Pakai made in untuk tempat pembuatan.",
            rows: [["Rumus", "It is {{made in}} + **negara**."], ["Penjelasan", "{{Made in}} dipakai untuk ==tempat pembuatan==, yaitu negara. Jangan tertukar dengan {{made of}} yang dipakai untuk bahan."]],
            ex: [["It is {{made in}} South Korea.", "Dibuat di Korea Selatan."], ["It is {{made in}} Indonesia.", "Dibuat di Indonesia."]] },
          { title: "6. Bahan (Material)", id: "Pakai made of untuk bahan.",
            rows: [["Rumus", "It is {{made of}} + **bahan**."], ["Penjelasan", "{{Made of}} dipakai untuk ==bahan benda==. Contoh bahan: metal (logam), glass (kaca), plastic (plastik), leather (kulit), cloth (kain)."]],
            ex: [["It is {{made of}} glass.", "Terbuat dari kaca."], ["It is {{made of}} metal and glass.", "Terbuat dari logam dan kaca."], ["My bag is {{made of}} cloth.", "Tasku terbuat dari kain."]] },
          { title: "7. Fungsi (Function / use)", id: "Pakai used for lalu kata kerja-ing.",
            rows: [["Rumus", "It is {{used for}} + **kata kerja-ing**."], ["Penjelasan", "Setelah for, kata kerja ditambah ==-ing==. {{Used for}} artinya dipakai untuk."]],
            ex: [["It is {{used for}} making calls.", "Dipakai untuk menelepon."], ["It is {{used for}} taking photos.", "Dipakai untuk memotret."], ["It is {{used for}} carrying books.", "Dipakai untuk membawa buku."]] }
        ]},
        { t: "fix", side: true, title: "Kesalahan yang sering terjadi", hint: "Hampir semua kesalahan ada pada kata kerja is, kata depan of dan in, atau bentuk -ing. Periksa tiga hal itu.", items: [
          ["It made of glass.", "It is {{made of}} glass.", "Kalimat Inggris butuh {{is}}: It {{is}} made of glass."],
          ["It is made from Korea.", "It is made in Korea.", "Tempat pembuatan memakai {{in}}. Bahan memakai {{of}}."],
          ["It is used for take photos.", "It is {{used for}} taking photos.", "Setelah for, pakai ==kata kerja + ing==."],
          ["It is a light.", "It is light.", "Sifat yang berdiri sendiri ==tidak memakai a==. A light berarti sebuah lampu."],
          ["They are expensives.", "They are expensive.", "==Sifat tidak diberi -s== walaupun bendanya jamak."]
        ]},
        { t: "qa", title: "Pertanyaan yang bisa membantumu", hint: "Kalau bingung harus bercerita apa, pakai pertanyaan ini sebagai panduan. Jawab satu per satu.", groups: [
          { title: "Enam pertanyaan untuk mendeskripsikan benda", items: [
            ["What is it?", "It is a/an …", "Apa itu?"],
            ["What does it look like?", "It is … and …", "Seperti apa wujudnya?"],
            ["What is it made of?", "It is made of …", "Terbuat dari apa?"],
            ["Where is it made?", "It is made in …", "Dibuat di mana?"],
            ["What is it used for?", "It is used for …ing", "Dipakai untuk apa?"],
            ["How is its condition?", "It is {{in good condition}}.", "Bagaimana kondisinya?"]
          ]}
        ]},
        { t: "dialogs", title: "Contoh deskripsi lengkap", items: [
          { title: "1. Menggambarkan tas yang hilang", lines: [
            ["A", "Excuse me, I lost my bag.", "Permisi, tas saya hilang."],
            ["B", "What does it look like?", "Seperti apa wujudnya?"],
            ["A", "It is medium-sized and black.", "Ukurannya sedang dan hitam."],
            ["B", "What is it made of?", "Terbuat dari apa?"],
            ["A", "It is made of cloth.", "Terbuat dari kain."],
            ["B", "Is it heavy?", "Apakah berat?"],
            ["A", "No, it is light.", "Tidak, ringan."],
            ["B", "OK. We will call you if we find it.", "Baik. Kami akan menghubungi kamu kalau menemukannya."]
          ]},
          { title: "2. Menceritakan ponselmu di depan kelas", lines: [
            ["R", "I want to describe my smartphone.", "Saya ingin mendeskripsikan ponsel saya."],
            ["R", "It is medium-sized and lightweight.", "Ukurannya sedang dan ringan."],
            ["R", "It is {{made of}} metal and glass.", "Terbuat dari logam dan kaca."],
            ["R", "It is {{made in}} South Korea.", "Dibuat di Korea Selatan."],
            ["R", "It is used for making calls and taking photos.", "Dipakai untuk menelepon dan memotret."],
            ["R", "It is {{still}} in very good condition.", "Masih dalam kondisi sangat baik."],
            ["R", "Thank you.", "Terima kasih."]
          ]}
        ]},
        { t: "table", title: "Cek cepat: poin dan pola kalimatnya", head: ["Poin", "Pola kalimat", "Contoh"], say: [1, 2], rows: [
          ["Nama", "It is a/an …", "It is a laptop."],
          ["Penampilan", "It is + sifat", "It is small and gray."],
          ["Berat", "It is light / heavy", "It is {{very}} light."],
          ["Kondisi", "It is in good condition", "It is still in good condition."],
          ["Asal", "It is made in …", "It is {{made in}} Indonesia."],
          ["Bahan", "It is made of …", "It is made of metal."],
          ["Fungsi", "It is used for …ing", "It is used for studying."]
        ]},
        { t: "note", html: "<strong>Ingat:</strong> <span class='kw'>made of</span> untuk <mark class='hl'>bahan</mark>, <span class='kw g'>made in</span> untuk <mark class='hl'>tempat pembuatan</mark>, dan <span class='kw c'>used for</span> diikuti <mark class='hl'>kata kerja-ing</mark>. Kamu tidak harus memakai semua poin. Mulailah dari nama benda, lalu tambahkan satu poin demi satu poin." }
      ],
      practice: [
        { type: "mc", part: "Tas hilang", q: "Kamu kehilangan tas dan petugas bertanya, \"What does it look like?\" Jawaban yang tepat?", options: ["It is medium-sized and black.", "It is made of walking.", "It is used for black.", "It is a Indonesia."], answer: 0,
          why: "What does it look like? menanyakan penampilan, jadi jawab dengan ukuran dan warna: It is medium-sized and black." },
        { type: "mc", part: "Bahan", q: "Ponselmu terbuat dari logam dan kaca. Kalimat yang benar?", options: ["It is made of metal and glass.", "It is made in metal and glass.", "It made of metal and glass.", "It is make of metal and glass."], answer: 0,
          why: "Bahan memakai made of, dan kalimat butuh is: It is made of …" },
        { type: "mc", part: "Asal", q: "Ponselmu dibuat di Korea Selatan. Kalimat yang benar?", options: ["It is made in South Korea.", "It is made of South Korea.", "It is make in South Korea.", "It made in South Korea is."], answer: 0,
          why: "Tempat pembuatan memakai made in." },
        { type: "fill", part: "Fungsi", q: "Kamu menjelaskan fungsi ponsel untuk memotret. Isi kata yang hilang.", before: "It is used for", after: "photos.", answers: ["taking"],
          why: "Setelah for, kata kerja ditambah -ing: for taking photos." },
        { type: "mc", part: "Kondisi", q: "Temanmu menjual ponsel lama yang masih mulus. Kalimat yang cocok untuk kondisinya?", options: ["It is still in good condition.", "It is still in good conditions made.", "It still good in condition is.", "It is use in good condition."], answer: 0,
          why: "Pola kondisi: It is (still) in good condition." },
        { type: "order", part: "Menyusun kalimat", q: "Susun kata-kata ini menjadi kalimat tentang fungsi tas.", tokens: ["It", "is", "used", "for", "carrying", "books."], answer: "It is used for carrying books.",
          why: "Pola: It is used for + kata kerja-ing + benda." },
        { type: "mc", part: "Temukan yang salah", q: "Mana satu kalimat yang SALAH?", options: ["They are expensives.", "They are expensive.", "It is light.", "It is made of glass."], answer: 0,
          why: "Sifat tidak diberi -s walaupun bendanya jamak. Yang benar: They are expensive." }
      ],
      apply: { "prompt": "Bayangkan kamu menceritakan tasmu di depan kelas. Baca deskripsi ini kalimat demi kalimat.", "lines": [["I want to describe my bag.", "Saya ingin menggambarkan tas saya."], ["It is medium-sized and black.", "Ukurannya sedang dan warnanya hitam."], ["It is made of cloth.", "Terbuat dari kain."], ["It is made in Indonesia.", "Dibuat di Indonesia."], ["It is used for carrying books and my laptop.", "Dipakai untuk membawa buku dan laptop saya."], ["It is still in good condition.", "Kondisinya masih bagus."]] },
      review: [
        { type: "mc", part: "Arti istilah", q: "Poin nomor 3 \"Weight\" artinya …", options: ["Berat", "Bahan", "Ukuran", "Asal"], answer: 0,
          why: "Weight = berat." },
        { type: "fill", part: "Isian", q: "Lengkapi kalimatnya (artinya: dibuat di Korea Selatan).", before: "It is made", after: "South Korea.", answers: ["in"],
          why: "Untuk tempat pembuatan dipakai made in." },
        { type: "mc", part: "Arti kata", q: "\"Sophisticated\" artinya …", options: ["Canggih", "Sederhana", "Murah", "Kotor"], answer: 0,
          why: "Sophisticated = canggih." },
        { type: "fillset", part: "Isian beruntun", q: "Lengkapi lima kalimat deskripsi benda di bawah ini.",
          items: [
            { q: "Berat. (Artinya: Tas itu ringan.)", before: "The bag is", after: ".", answers: ["light"], why: "Ringan = light." },
            { q: "Bahan. (Artinya: Meja ini terbuat dari kayu.)", before: "The table is made", after: "wood.", answers: ["of"], why: "Untuk bahan dipakai made of." },
            { q: "Benda jamak. (Artinya: Sepatu itu besar.)", before: "The shoes", after: "big.", answers: ["are"], why: "Benda jamak memakai are." },
            { q: "Fungsi. (Artinya: Pensil dipakai untuk menulis.)", before: "It is used for", after: ".", answers: ["writing"], why: "Setelah for dipakai kata kerja-ing: writing." },
            { q: "Kondisi. (Artinya: Ponsel itu dalam kondisi baik.)", before: "The phone is in good", after: ".", answers: ["condition"], why: "Good condition = kondisi baik." }
          ] }
      ]
    },

    /* ---------------------------------------------------------- 7 */
    {
      id: "andalan",
      no: 7,
      title: "Kalimat andalan",
      summary: "Kalimat penyelamat saat tidak mengerti, lupa kata, atau minta diulang.",
      access: "free",
      minutes: 10,
      learn: [{"t": "text", "html": "<strong>Kamu tidak harus lancar.</strong> Kamu hanya perlu tahu cara minta tolong dalam bahasa Inggris. Pelajari empat kelompok kalimat penyelamat di bawah ini, satu per satu. Tekan tombol speaker untuk mendengar."}, {"t": "phrases", "title": "A. Minta diulang atau diperlambat", "items": [["Sorry, could you say that again?", "Maaf, bisa diulang?"], ["Could you speak more slowly, please?", "Bisa bicara lebih pelan?"], ["Sorry? (santai)", "Maaf, apa?"], ["I didn't catch that.", "Saya tidak menangkap yang tadi."]]}, {"t": "phrases", "title": "B. Tidak mengerti dan mengecek arti", "items": [["Sorry, I don't understand.", "Maaf, saya tidak mengerti."], ["What does \"…\" mean?", "Apa arti \"…\"?"], ["Do you mean …?", "Maksudmu …?"], ["Is that right?", "Apakah itu benar?"]]}, {"t": "phrases", "title": "C. Lupa kata dan butuh waktu", "items": [["How do you say \"…\" in English?", "Bagaimana bilang \"…\" dalam bahasa Inggris?"], ["How do you spell that?", "Bagaimana mengejanya?"], ["It's a kind of …", "Itu sejenis …"], ["Let me think. / Just a moment.", "Biar saya pikir dulu. / Sebentar."]]}, {"t": "phrases", "title": "D. Minta tolong dan jujur soal level", "items": [["Excuse me, can you help me?", "Permisi, bisa tolong saya?"], ["Could you show me?", "Bisa tunjukkan ke saya?"], ["I'm still learning English.", "Saya masih belajar bahasa Inggris."], ["Thank you for being patient.", "Terima kasih sudah sabar."]]}, {"t": "dialogs", "title": "Contoh percakapan", "items": [{"title": "1. Di kelas", "lines": [["T", "Please open your book to page ten.", "Tolong buka bukumu ke halaman sepuluh."], ["S", "Sorry, I didn't catch that. Could you say that again, please?", "Maaf, saya tidak menangkapnya. Bisa diulang?"], ["T", "Open your book to page ten.", "Buka bukumu ke halaman sepuluh."], ["S", "Thank you. Could you speak more slowly, please?", "Terima kasih. Bisa bicara lebih pelan?"], ["T", "Of course. Page. Ten.", "Tentu. Halaman. Sepuluh."]]}, {"title": "2. Lupa kata", "lines": [["A", "I want to go to the, uh… bandara.", "Saya mau ke … uh … bandara."], ["B", "Sorry?", "Maaf?"], ["A", "How do you say \"bandara\" in English?", "Bagaimana bilang \"bandara\" dalam bahasa Inggris?"], ["B", "Airport.", "Airport."], ["A", "Thank you! I want to go to the airport. I'm still learning English.", "Terima kasih! Saya mau ke bandara. Saya masih belajar bahasa Inggris."], ["B", "Your English is good!", "Bahasa Inggrismu bagus!"]]}]}],
      understand: [{"t": "text", "html": "Kamu tidak perlu menghafal 16 kalimat satu per satu. <strong>Tiga pola</strong> di bawah ini cukup, karena bagian yang bertanda … tinggal diganti. Tekan tombol speaker untuk mendengar contohnya."}, {"t": "entries", "title": "Pola kalimat andalan", "items": [{"title": "1. Meminta dengan sopan", "id": "Could you + kata kerja + please?", "rows": [["Rumus", "{{Could you}} + **kata kerja** + please?"], ["Penjelasan", "Pola ini membuat permintaan terdengar ==sopan==. Ganti kata kerjanya sesuai kebutuhan: repeat, speak, show, help."]], "ex": [["Could you {{repeat}} that, please?", "Bisa diulang?"], ["Could you {{speak}} more slowly, please?", "Bisa bicara lebih pelan?"], ["Could you {{show}} me, please?", "Bisa tunjukkan ke saya?"]]}, {"title": "2. Menanyakan arti kata", "id": "What does \"…\" mean?", "rows": [["Rumus", "What {{does}} \"**kata**\" {{mean}}?"], ["Penjelasan", "Letakkan kata yang tidak kamu tahu di tengah. Kata bantu {{does}} wajib ada di pertanyaan ini."]], "ex": [["What {{does}} \"borrow\" {{mean}}?", "Apa arti \"borrow\"?"], ["What {{does}} \"airport\" {{mean}}?", "Apa arti \"airport\"?"]]}, {"title": "3. Menanyakan cara bilang", "id": "How do you say \"…\" in English?", "rows": [["Rumus", "How do you {{say}} \"**kata**\" in English?"], ["Penjelasan", "Pakai pola ini saat kamu ==lupa kata== bahasa Inggris. Kamu bisa menyebut kata Indonesianya langsung."]], "ex": [["How do you {{say}} \"pensil\" in English?", "Bagaimana bilang \"pensil\" dalam bahasa Inggris?"], ["How do you {{spell}} that?", "Bagaimana mengejanya?"]]}, {"title": "4. Could atau Can?", "id": "Could lebih sopan daripada Can.", "rows": [["Rumus", "{{Could you}} … untuk guru, orang yang lebih tua, atau orang asing. {{Can you}} … untuk teman sebaya."], ["Penjelasan", "Keduanya benar. Bedanya hanya tingkat ==kesopanan==."]], "ex": [["{{Could you}} help me, please?", "Bisakah Anda membantu saya?"], ["{{Can you}} help me?", "Bisa bantu aku?"]]}, {"title": "5. Mengaku belum lancar itu normal", "id": "Jujur tentang levelmu membuat orang lain bicara lebih pelan.", "rows": [["Rumus", "I'm still {{learning}} English."], ["Penjelasan", "Kalimat ini memberi lawan bicaramu alasan untuk bicara ==lebih pelan dan sederhana==. Tidak ada yang perlu dimalukan."]], "ex": [["I'm still {{learning}} English.", "Saya masih belajar bahasa Inggris."], ["Thank you for being patient.", "Terima kasih sudah sabar."]]}]}, {"t": "fix", "side": true, "title": "Kesalahan yang sering terjadi", "hint": "Saat meminta sesuatu, awali dengan Could you dan akhiri dengan please. Itu sudah cukup sopan.", "items": [["Repeat!", "Could you say that again, please?", "Repeat! terdengar seperti ==perintah==. Awali dengan {{Could you}} dan akhiri dengan please."], ["I no understand.", "I {{don't}} understand.", "Untuk menyangkal dalam kalimat ini pakai {{don't}}, bukan no."], ["What mean \"borrow\"?", "What {{does}} \"borrow\" mean?", "Pertanyaan butuh kata bantu {{does}}: What {{does}} … mean?"], ["Can you speak slow?", "{{Could}} you speak more {{slowly}}?", "Slowly adalah kata keterangan untuk speak, dan Could lebih sopan."]]}, {"t": "note", "html": "<strong>Ingat tiga hal:</strong> (1) pakai <span class='kw'>Could you</span> untuk meminta dengan sopan, (2) pakai <span class='kw'>What does … mean?</span> untuk arti kata, (3) pakai <span class='kw'>How do you say … in English?</span> saat lupa kata."}],
      practice: [{"type": "mc", "part": "Minta diulang", "q": "Kamu tidak mendengar kalimat gurumu. Apa yang kamu katakan?", "options": ["Sorry, could you say that again?", "Repeat!", "I no hear.", "What is it?"], "answer": 0, "why": "Sorry, could you say that again? adalah cara sopan untuk minta diulang."}, {"type": "mc", "part": "Arti kata", "q": "Kamu tidak tahu arti kata \"borrow\". Apa yang kamu tanyakan?", "options": ["What does \"borrow\" mean?", "What mean \"borrow\"?", "Borrow is what?", "You say borrow?"], "answer": 0, "why": "Pertanyaan arti kata memakai pola What does … mean?"}, {"type": "mc", "part": "Dengar", "say": "Could you speak more slowly, please?", "q": "Dengarkan kalimatnya. Apa maksudnya?", "options": ["Bisa bicara lebih pelan?", "Bisa bicara lebih keras?", "Bisa tunjukkan ke saya?", "Terima kasih sudah sabar."], "answer": 0, "why": "Slowly berarti pelan. Could you … please? adalah permintaan sopan."}, {"type": "fill", "part": "Isian", "q": "Lengkapi kalimatnya (artinya: Maaf, saya tidak mengerti).", "before": "Sorry, I don't", "after": ".", "answers": ["understand"], "why": "Understand artinya mengerti."}, {"type": "fill", "part": "Isian", "q": "Lengkapi pertanyaannya (artinya: Bagaimana bilang \"bandara\" dalam bahasa Inggris?).", "before": "How do you", "after": "\"bandara\" in English?", "answers": ["say"], "why": "Pola menanyakan cara bilang kata: How do you say … in English?"}, {"type": "order", "part": "Susun kalimat", "q": "Susun menjadi permintaan yang sopan.", "tokens": ["Could", "you", "speak", "more", "slowly,", "please?"], "answer": "Could you speak more slowly, please?", "why": "Could di awal untuk permintaan sopan, lalu you, kata kerja, dan please di akhir."}, {"type": "order", "part": "Susun kalimat", "q": "Susun pertanyaan untuk menanyakan arti kata \"airport\".", "tokens": ["What", "does", "\"airport\"", "mean?"], "answer": "What does \"airport\" mean?", "why": "Pola: What does + kata + mean?"}, {"type": "fill", "part": "Dengar lalu ketik", "say": "I'm still learning English.", "q": "Dengarkan kalimatnya, lalu ketik kata yang hilang.", "before": "I'm still", "after": "English.", "answers": ["learning"], "why": "I'm still learning English artinya Saya masih belajar bahasa Inggris."}],
      apply: { "prompt": "Bayangkan kamu bertemu turis dan percakapannya mulai sulit. Baca kalimat penyelamat ini.", "lines": [["Sorry, I didn't catch that.", "Maaf, saya tidak menangkap yang tadi."], ["Could you speak more slowly, please?", "Bisa bicara lebih pelan?"], ["What does \"borrow\" mean?", "Apa arti \"borrow\"?"], ["I'm still learning English.", "Saya masih belajar bahasa Inggris."], ["Thank you for being patient.", "Terima kasih sudah sabar."]] },
      review: [{"type": "mc", "part": "Sopan", "q": "Kalimat mana yang paling sopan untuk minta diulang?", "options": ["Could you say that again, please?", "Repeat!", "Say again.", "What?"], "answer": 0, "why": "Could you dan please membuat permintaan terdengar sopan."}, {"type": "mc", "part": "Lupa kata", "q": "Kamu lupa kata \"penghapus\". Apa yang kamu tanyakan?", "options": ["How do you say \"penghapus\" in English?", "What is penghapus?", "You say penghapus?", "I no know."], "answer": 0, "why": "Pola menanyakan cara bilang kata: How do you say … in English?"}, {"type": "mc", "part": "Kalimat benar", "q": "Pilih kalimat yang benar.", "options": ["I don't understand.", "I no understand.", "I not understand.", "I understand no."], "answer": 0, "why": "Penyangkalan memakai don't: I don't understand."}, {"type": "mc", "part": "Dengar", "say": "What does airport mean?", "q": "Dengarkan pertanyaannya. Apa yang ditanyakan?", "options": ["Arti kata airport", "Cara mengeja airport", "Letak airport", "Siapa yang ke airport"], "answer": 0, "why": "What does … mean? menanyakan arti kata."}, {"type": "mc", "part": "Kata keterangan", "q": "Lengkapi: Could you speak more ___?", "options": ["slowly", "quick", "slow", "slowness"], "answer": 0, "why": "Slowly adalah kata keterangan untuk speak."}, {"type": "fillset", "part": "Isian beruntun", "q": "Lengkapi empat kalimat penyelamat di bawah ini.", "items": [{"q": "Minta tolong. (Artinya: Permisi, bisa tolong saya?)", "before": "Excuse me, can you", "after": "me?", "answers": ["help"], "why": "Can you help me? adalah permintaan tolong yang umum."}, {"q": "Minta diperlambat. (Artinya: Maaf, bisa bicara lebih pelan?)", "before": "Sorry, could you speak more", "after": ", please?", "answers": ["slowly"], "why": "Slowly = pelan."}, {"q": "Menanyakan arti kata. (Artinya: Apa arti \"pharmacy\"?)", "before": "What does \"pharmacy\"", "after": "?", "answers": ["mean"], "why": "What does … mean? menanyakan arti kata."}, {"q": "Mengaku masih belajar. (Artinya: Saya masih belajar bahasa Inggris.)", "before": "I'm still", "after": "English.", "answers": ["learning"], "why": "I'm still learning English."}]}]
    }
  ]
};
