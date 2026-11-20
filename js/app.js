/* Yang Penting Inggris - prototipe lokal.
   Semua data tersimpan di localStorage browser pada komputer ini. */
(function () {
  'use strict';

  const COURSE = window.COURSE;
  const LESSONS = COURSE.lessons;
  const GRAMMAR = window.GRAMMAR;
  const GRAM_READY = GRAMMAR.lessons.filter((l) => !l.soon);
  const COURSES = {
    speaking: { key: 'speaking', hash: '#dashboard', course: COURSE, lessons: LESSONS, all: LESSONS, unit: 'Pelajaran' },
    grammar: { key: 'grammar', hash: '#grammar', course: GRAMMAR, lessons: GRAM_READY, all: GRAMMAR.lessons, unit: 'Topik' }
  };
  const courseOf = (l) => (GRAM_READY.indexOf(l) >= 0 ? COURSES.grammar : COURSES.speaking);
  const unitOf = (l) => courseOf(l).unit;
  const STEPS = [
    { key: 'pelajari', label: 'Pelajari', src: 'learn' },
    { key: 'pahami', label: 'Pahami', src: 'understand' },
    { key: 'latihan', label: 'Latihan', src: 'practice' },
    { key: 'praktik', label: 'Praktikkan', src: 'apply' },
    { key: 'ulas', label: 'Ulas', src: 'review' }
  ];
  const PLACEHOLDER_PRICE = '[HARGA]';
  const PLACEHOLDER_DURATION = '[DURASI AKSES]';

  /* ---------- ikon ---------- */
  const svg = (d, size, color) => '<svg aria-hidden="true" width="' + (size || 16) + '" height="' + (size || 16) + '" viewBox="0 0 24 24" fill="none" stroke="' + (color || '#1F2340') + '" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">' + d + '</svg>';
  const ICON = {
    check: (s) => svg('<path d="M5 12.5l4.5 4.5L19 7.5"></path>', s),
    lock: (s) => svg('<rect x="5" y="11" width="14" height="10" rx="2"></rect><path d="M8 11V7a4 4 0 0 1 8 0v4"></path>', s),
    play: (s) => svg('<path d="M8 5l11 7-11 7z"></path>', s),
    back: (s) => svg('<path d="M15 5l-7 7 7 7"></path>', s),
    eye: (s) => svg('<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"></path><circle cx="12" cy="12" r="3"></circle>', s),
    eyeoff: (s) => svg('<path d="M3 3l18 18"></path><path d="M10.6 5.1A9.7 9.7 0 0 1 12 5c6.4 0 10 7 10 7a17 17 0 0 1-3.2 4.1M6.2 6.7C3.7 8.4 2 12 2 12s3.6 7 10 7a9.6 9.6 0 0 0 4-.9"></path><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"></path>', s),
    next: (s) => svg('<path d="M9 5l7 7-7 7"></path>', s),
    sound: (s) => svg('<path d="M4 10v4h4l5 4V6L8 10z"></path><path d="M16.5 9a4 4 0 0 1 0 6"></path>', s),
    x: (s) => svg('<path d="M6 6l12 12M18 6L6 18"></path>', s),
    mute: (s) => svg('<path d="M4 10v4h4l5 4V6L8 10z"></path><path d="M17 9.5l4 5M21 9.5l-4 5"></path>', s)
  };

  /* ---------- penyimpanan lokal ---------- */
  const KEY = 'ypi.lokal.v1';
  let DB = { accounts: {}, session: null, testMode: false };
  let storageOK = true;
  const played = () => (DB.played && typeof DB.played === 'object' ? DB.played : (DB.played = {}));
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) { const parsed = JSON.parse(raw); if (parsed && typeof parsed === 'object') DB = Object.assign(DB, parsed); }
    localStorage.setItem(KEY + '.cek', '1'); localStorage.removeItem(KEY + '.cek');
  } catch (e) { storageOK = false; }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(DB)); } catch (e) { storageOK = false; } }

  const GUEST = { progress: {} };
  const user = () => (DB.session && DB.accounts[DB.session]) || null;
  const store = () => user() || GUEST;
  function prog(id) {
    const s = store();
    if (!s.progress[id]) s.progress[id] = { done: false, stepsDone: {}, scores: {}, apply: { text: '', checks: [], reads: {} } };
    return s.progress[id];
  }

  /* ---------- aturan akses ---------- */
  function gate(lesson) {
    if (lesson.access === 'open') return null;
    if (!user()) return 'login';
    if (lesson.access === 'premium' && !DB.testMode) return 'premium';
    return null;
  }
  function lessonById(id) { return LESSONS.find((l) => l.id === id) || GRAM_READY.find((l) => l.id === id); }
  function stepFirstUndone(lesson) {
    const p = prog(lesson.id);
    const s = STEPS.find((x) => !p.stepsDone[x.key]);
    return s ? s.key : STEPS[0].key;
  }
  function nextLesson(c) {
    return (c || COURSES.speaking).lessons.find((l) => gate(l) === null && !prog(l.id).done) || null;
  }
  function doneCount(c) { return (c || COURSES.speaking).lessons.filter((l) => prog(l.id).done).length; }

  /* ---------- util ---------- */
  const $ = (s, r) => (r || document).querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  function norm(s) {
    return String(s).toLowerCase().replace(/[’‘]/g, "'").replace(/[^a-z0-9' ]/g, ' ').replace(/\s+/g, ' ').trim();
  }
  function hashStr(s) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
  function rng(seed) { let a = seed; return function () { a |= 0; a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
  function shuffledIdx(n, seed, avoidIdentity) {
    const a = Array.from({ length: n }, (_, i) => i);
    const r = rng(hashStr(seed));
    for (let i = n - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); const t = a[i]; a[i] = a[j]; a[j] = t; }
    if (avoidIdentity && n > 1 && a.every((v, i) => v === i)) a.push(a.shift());
    return a;
  }
  let toastTimer = null;
  function toast(msg) {
    let t = $('#toast');
    if (!t) { t = document.createElement('div'); t.id = 'toast'; t.className = 'toast'; t.setAttribute('role', 'status'); document.body.appendChild(t); }
    t.textContent = msg; t.style.display = 'block';
    clearTimeout(toastTimer); toastTimer = setTimeout(() => { t.style.display = 'none'; }, 3200);
  }

  /* ---------- suara (bawaan browser) ---------- */
  const LETTER_SOUND = { A: 'ay', B: 'bee', C: 'see', D: 'dee', E: 'ee', F: 'eff', G: 'jee', H: 'aitch', I: 'eye', J: 'jay', K: 'kay', L: 'ell', M: 'em', N: 'en', O: 'oh', P: 'pee', Q: 'cue', R: 'are', S: 'ess', T: 'tee', U: 'you', V: 'vee', W: 'double you', X: 'ex', Y: 'why', Z: 'zee' };
  /* teks berwarna: **tebal**, ==stabilo kuning==, {{istilah}}, {{g|hijau}}, {{c|merah}} */
  function rich(t) {
    return esc(t == null ? '' : t)
      .replace(/\[\[ipa:([A-Za-z]+)\]\]/g, (m, w) => ipaSpan(w))
      .replace(/\{\{V\|([^|{}]+)\|([^|{}]+)\}\}/g, (m, a, b) => '<span class="r-v">' + a + '<span class="r-end">' + b + '</span></span>')
      .replace(/\{\{([SVAJO])\|(.+?)\}\}/g, (m, c, x) => '<span class="r-' + c.toLowerCase() + '">' + x + '</span>')
      .replace(/\{\{(?:([gce])\|)?(.+?)\}\}/g, (m, c, x) => (c === 'e' ? '<span class="sfx">' + x + '</span>' : '<span class="kw' + (c ? ' ' + c : '') + '">' + x + '</span>'))
      .replace(/\*\*(.+?)\*\*/g, '<strong class="k">$1</strong>')
      .replace(/==(.+?)==/g, '<mark class="hl">$1</mark>');
  }
  function plain(t) {
    return String(t == null ? '' : t).replace(/\[\[ipa:[A-Za-z]+\]\]/g, '').replace(/\{\{V\|([^|{}]+)\|([^|{}]+)\}\}/g, '$1$2').replace(/\{\{(?:[gceSVAJO]\|)?(.+?)\}\}/g, '$1').replace(/\*\*(.+?)\*\*/g, '$1').replace(/==(.+?)==/g, '$1');
  }

  /* tanda "sudah diputar": kunci tiap tombol suara disimpan di DB.played */
  function audioKey(el) {
    const act = el.getAttribute('data-act');
    if (act === 'say') return 'say:' + el.getAttribute('data-text');
    if (act === 'letter') return 'letter:' + el.getAttribute('data-l');
    if (act === 'spell') return 'spell:' + el.getAttribute('data-w');
    return null;
  }
  const AUDIO_SEL = '[data-act="say"],[data-act="letter"],[data-act="spell"],[data-act="spellx"],[data-act="sayx"]';
  function showHeard(el) {
    el.classList.add('heard');
    const box = el.closest('li, .dlg-line, .bub, .word, .qa-q, .qa-a, .fix-good');
    if (box) box.classList.add('heard');
  }
  function updateHeardBar() {
    const bar = $('#heard-bar');
    if (!bar) return;
    const all = document.querySelectorAll('#main ' + AUDIO_SEL);
    if (!all.length) { bar.hidden = true; return; }
    const n = document.querySelectorAll('#main ' + AUDIO_SEL.split(',').map((x) => x + '.heard').join(',#main ')).length;
    const pct = Math.round((n / all.length) * 100);
    bar.hidden = false;
    bar.className = 'heard-bar' + (n === all.length ? ' all' : '');
    bar.innerHTML = '<span class="hb-ico" aria-hidden="true">' + (n === all.length ? ICON.check(16) : ICON.sound(16)) + '</span>' +
      '<strong>' + (n === all.length ? 'Semua suara sudah didengar. Mantap!' : 'Suara didengar: ' + n + ' dari ' + all.length) + '</strong>' +
      '<span class="mini" aria-hidden="true"><span style="width:' + pct + '%"></span></span>' +
      '<span class="legend">Titik kuning = belum diputar, centang hijau = sudah diputar.</span>';
  }
  function applyHeard() {
    document.querySelectorAll('#main ' + AUDIO_SEL).forEach((el) => { const k = audioKey(el); if (k && played()[k]) showHeard(el); });
    updateHeardBar();
    refreshAudioUI();
    applyIpa();
  }
  /* ---------- pengaturan suara: aksen (Amerika / British), kecepatan, pilihan suara ---------- */
  const ACCENTS = { us: { label: 'Amerika', lang: 'en-US' }, gb: { label: 'British', lang: 'en-GB' } };
  const SPEEDS = { normal: { label: 'Normal', rate: 0.95 }, slow: { label: 'Pelan', rate: 0.8 }, vslow: { label: 'Sangat pelan', rate: 0.62 } };
  const accentKey = () => (DB.accent === 'gb' ? 'gb' : 'us');
  /* simbol bunyi (IPA, gaya kamus Oxford): string biasa, atau {gb:'..', us:'..'} bila aksen berbeda */
  const ipaOf = (v) => (typeof v === 'string' ? v : (v[accentKey()] || v.us || v.gb));
  /* simbol bunyi nama huruf; O, R, Z berbeda antar aksen */
  const LETTER_IPA = { A: 'eɪ', B: 'biː', C: 'siː', D: 'diː', E: 'iː', F: 'ef', G: 'dʒiː', H: 'eɪtʃ', I: 'aɪ', J: 'dʒeɪ', K: 'keɪ', L: 'el', M: 'em', N: 'en', O: { gb: 'əʊ', us: 'oʊ' }, P: 'piː', Q: 'kjuː', R: { gb: 'ɑː', us: 'ɑːr' }, S: 'es', T: 'tiː', U: 'juː', V: 'viː', W: 'ˈdʌbljuː', X: 'eks', Y: 'waɪ', Z: { gb: 'zed', us: 'ziː' } };
  function ipaSeq(word) {
    const L = String(word).toUpperCase().split('').filter((c) => LETTER_IPA[c]);
    const out = [];
    for (let i = 0; i < L.length; i++) {
      const sym = ipaOf(LETTER_IPA[L[i]]);
      if (L[i + 1] === L[i]) { out.push('/ˈdʌbl ' + sym + '/'); i++; } else out.push('/' + sym + '/');
    }
    return out.join(' ');
  }
  const ipaSpan = (word, cls) => '<span class="ipa-seq' + (cls ? ' ' + cls : '') + '" data-spell="' + esc(word) + '">' + esc(ipaSeq(word)) + '</span>';
  function applyIpa() {
    document.querySelectorAll('.ipa[data-ipa]').forEach((el) => { try { el.textContent = ipaOf(JSON.parse(el.getAttribute('data-ipa'))); } catch (e) { /* abaikan */ } });
    document.querySelectorAll('.ipa-seq[data-spell]').forEach((el) => { el.textContent = ipaSeq(el.getAttribute('data-spell')); });
  }
  const speedKey = () => (SPEEDS[DB.speed] ? DB.speed : 'slow');
  const hasTTS = () => 'speechSynthesis' in window && typeof window.SpeechSynthesisUtterance === 'function';
  const langOf = (v) => String((v && v.lang) || '').replace(/_/g, '-').toLowerCase();
  function allVoices() { try { return (hasTTS() && window.speechSynthesis.getVoices()) || []; } catch (e) { return []; } }
  /* nilai lebih tinggi = biasanya terdengar lebih natural */
  function voiceScore(v) {
    const n = String(v.name || '');
    let sc = 0;
    if (/natural|neural/i.test(n)) sc += 60;
    if (/online/i.test(n)) sc += 20;
    if (/google/i.test(n)) sc += 25;
    if (/premium|enhanced/i.test(n)) sc += 15;
    if (/samantha|ava|allison|susan|serena|daniel|kate|oliver|jenny|aria|guy|sonia|ryan|libby|zira|davis|hazel|emma|brian|arthur|martha|stephanie/i.test(n)) sc += 12;
    if (/compact|espeak|novelty|bad news|bahh|bells|boing|bubbles|cellos|deranged|good news|hysterical|pipe organ|trinoids|whisper|zarvox|albert|fred|junior|kathy|ralph|organ/i.test(n)) sc -= 40;
    if (v.localService === false) sc += 5;
    return sc;
  }
  function voicesFor(acc) {
    const want = ACCENTS[acc].lang.toLowerCase();
    return allVoices().filter((v) => langOf(v) === want).sort((x, y) => voiceScore(y) - voiceScore(x));
  }
  function chosenVoice(acc) {
    const list = voicesFor(acc);
    const saved = DB['voice_' + acc];
    if (saved) { const f = list.find((v) => v.name === saved); if (f) return f; }
    if (list.length) return list[0];
    /* tidak ada suara untuk aksen ini: pakai suara Inggris apa pun yang ada */
    const any = allVoices().filter((v) => langOf(v).indexOf('en') === 0).sort((x, y) => voiceScore(y) - voiceScore(x));
    return any[0] || null;
  }
  const letterSound = (l) => (l === 'Z' && accentKey() === 'gb' ? 'zed' : LETTER_SOUND[l]);
  /* huruf yang dieja di dalam kalimat, misalnya "R – I – N – A" atau "P – I – double L – O – W", dibaca sebagai nama huruf */
  const SPELL_RUN = /(?<![A-Za-z])(?:double\s+)?[A-Z](?:\s*[-–]\s*(?:double\s+)?[A-Z])+(?![A-Za-z])/g;
  function spellRun(m) {
    return m.split(/\s*[-–]\s*/).map((part) => { const d = /^double\s+([A-Z])$/.exec(part); return d ? 'double ' + letterSound(d[1]) : letterSound(part); }).join(', ');
  }
  function prepText(t) {
    return String(t).replace(/…/g, ' ').replace(SPELL_RUN, spellRun).replace(/\ba\/an\b/gi, 'a or an').replace(/\s*\/\s*/g, ', ').replace(/\s+/g, ' ').trim();
  }
  /* ---------- rekaman penutur asli (file audio); suara browser jadi cadangan ---------- */
  const AUD = window.YPI_AUDIO || { speakers: [], files: {} };
  function clipSlug(t) {
    let q = String(t).toLowerCase().replace(/[’‘]/g, "'").replace(/'/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    if (q.length > 70) q = q.slice(0, 70).replace(/-+$/, '') + '-' + (hashStr(q) % 46656).toString(36).padStart(3, '0');
    return q || 'x';
  }
  window.YPI_CLIP_KEY = clipSlug;
  const speakersFor = (acc) => (AUD.speakers || []).filter((x) => x.accent === acc);
  const hasClip = (id, key) => !!(AUD.files && AUD.files[id] && AUD.files[id][key]);
  let lastClipSpeaker = null; let curAudio = null;
  function pickClip(key) {
    const acc = accentKey(); const choice = DB['speaker_' + acc] || 'auto';
    if (choice === 'browser') return null;
    const all = speakersFor(acc).filter((x) => hasClip(x.id, key));
    if (!all.length) return null;
    let sp = choice !== 'auto' ? all.find((x) => x.id === choice) : null;
    if (!sp) { const pool = all.length > 1 ? all.filter((x) => x.id !== lastClipSpeaker) : all; sp = pool[Math.floor(Math.random() * pool.length)]; }
    lastClipSpeaker = sp.id;
    return 'audio/' + sp.id + '/' + key + '.' + AUD.files[sp.id][key];
  }
  function stopAudio() { if (curAudio) { try { curAudio.pause(); } catch (e) { /* abaikan */ } curAudio = null; } }
  function markPlayed(el) { const k = audioKey(el); if (k) { played()[k] = 1; save(); showHeard(el); updateHeardBar(); } }
  function speakClip(key, ttsText, el, rate) {
    const url = pickClip(key);
    if (!url) { speakRaw(ttsText, el, rate); return; }
    try {
      stopAudio();
      document.querySelectorAll('.say.playing, .letter.playing, .listen-btn.playing').forEach((x) => x.classList.remove('playing'));
      if (hasTTS()) window.speechSynthesis.cancel();
      const a = new Audio(url);
      a.preservesPitch = true;
      a.playbackRate = Math.min(1, Math.max(0.5, (rate || SPEEDS[speedKey()].rate) / 0.95));
      curAudio = a;
      if (el) el.classList.add('playing');
      const done = () => { if (el) el.classList.remove('playing'); };
      const fallback = () => { done(); if (curAudio === a) { curAudio = null; speakRaw(ttsText, el, rate); } };
      a.onended = done; a.onerror = fallback;
      const pr = a.play(); if (pr && pr.catch) pr.catch(fallback);
      if (el) markPlayed(el);
    } catch (e) { speakRaw(ttsText, el, rate); }
  }
  function speakRaw(text, el, rateOverride) {
    if (!hasTTS()) { toast('Suara belum tersedia di browser ini. Coba Chrome atau Edge.'); return; }
    try {
      stopAudio();
      document.querySelectorAll('.say.playing, .letter.playing, .listen-btn.playing').forEach((x) => x.classList.remove('playing'));
      window.speechSynthesis.cancel();
      const acc = accentKey();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = ACCENTS[acc].lang;
      u.rate = rateOverride || SPEEDS[speedKey()].rate;
      u.pitch = 1; u.volume = 1;
      const v = chosenVoice(acc);
      if (v) { u.voice = v; if (v.lang) u.lang = v.lang; }
      if (el) {
        el.classList.add('playing');
        let tm = null;
        const stop = () => { clearTimeout(tm); el.classList.remove('playing'); };
        u.onend = stop; u.onerror = stop;
        tm = setTimeout(stop, Math.max(1800, (text.length * 110 + 800) / u.rate));
      }
      window.speechSynthesis.speak(u);
      if (el) {
        const k = audioKey(el);
        if (k) { played()[k] = 1; save(); showHeard(el); updateHeardBar(); }
      }
    } catch (e) { toast('Suara tidak bisa diputar.'); }
  }
  function speakText(t, el) { speakClip(clipSlug(t), prepText(t), el); }
  function spellWords(w) {
    const L = String(w).toUpperCase().split('').filter((c) => LETTER_SOUND[c]);
    const out = [];
    for (let i = 0; i < L.length; i++) {
      if (L[i + 1] === L[i]) { out.push('double ' + letterSound(L[i])); i++; } else out.push(letterSound(L[i]));
    }
    return out.join(', ');
  }
  function speakSpell(w, el, rate) { speakClip('spell-' + clipSlug(w), spellWords(w), el, rate); }
  const SAMPLE = 'Hello. How are you? I am fine, thank you.';
  let audioOpen = false;
  const FLAG = {
    us: '<svg viewBox="0 0 28 20" width="28" height="20" aria-hidden="true"><rect width="28" height="20" rx="3" fill="#fff"/><g fill="#C8102E"><rect y="0" width="28" height="2.2"/><rect y="4.4" width="28" height="2.2"/><rect y="8.8" width="28" height="2.2"/><rect y="13.2" width="28" height="2.2"/><rect y="17.6" width="28" height="2.4"/></g><rect width="12" height="11" fill="#1F3A93"/><g fill="#fff"><circle cx="3" cy="3" r="1"/><circle cx="6" cy="3" r="1"/><circle cx="9" cy="3" r="1"/><circle cx="4.5" cy="6" r="1"/><circle cx="7.5" cy="6" r="1"/><circle cx="3" cy="9" r="1"/><circle cx="6" cy="9" r="1"/><circle cx="9" cy="9" r="1"/></g><rect width="28" height="20" rx="3" fill="none" stroke="#1F2340" stroke-width="1"/></svg>',
    gb: '<svg viewBox="0 0 28 20" width="28" height="20" aria-hidden="true"><rect width="28" height="20" rx="3" fill="#1F3A93"/><path d="M0 0L28 20M28 0L0 20" stroke="#fff" stroke-width="4"/><path d="M0 0L28 20M28 0L0 20" stroke="#C8102E" stroke-width="1.6"/><path d="M14 0V20M0 10H28" stroke="#fff" stroke-width="6.4"/><path d="M14 0V20M0 10H28" stroke="#C8102E" stroke-width="3.6"/><rect width="28" height="20" rx="3" fill="none" stroke="#1F2340" stroke-width="1"/></svg>'
  };
  const SPEED_ICO = { vslow: '🐢', slow: '🚶', normal: '🐇' };
  const SPEED_ORDER = ['vslow', 'slow', 'normal'];
  function shortVoice(v) {
    if (!v) return 'Otomatis';
    const raw = String(v.name || '');
    const brand = /google/i.test(raw) ? 'Google' : '';
    let n = raw.replace(/^(Microsoft|Google)\s+/i, '').replace(/\s*-\s*English.*$/i, '').replace(/\s*\([^)]*\)/g, '').replace(/\b(Online|English|UK|US|British|American|Female|Male)\b/gi, '').replace(/\s+/g, ' ').trim();
    if (!n) n = brand || 'Standar';
    const g = /female/i.test(raw) ? ' (wanita)' : (/\bmale\b/i.test(raw) ? ' (pria)' : '');
    return n + g + (voiceScore(v) >= 60 ? ' ★' : '');
  }
  function audioPanel() {
    const acc = accentKey(); const spd = speedKey();
    const list = voicesFor(acc);
    const cur = chosenVoice(acc);
    let tip;
    if (!hasTTS()) tip = 'Browser ini belum mendukung suara. Coba Chrome atau Edge.';
    else if (!allVoices().length) tip = 'Daftar suara sedang dimuat. Kalau tetap kosong, tutup lalu buka lagi halaman ini.';
    else if (!list.length) tip = 'Perangkat ini belum punya suara ' + ACCENTS[acc].label + ', jadi dipakai suara Inggris yang ada. Microsoft Edge punya banyak suara Natural.';
    else if (cur && voiceScore(cur) < 30) tip = 'Kalau suara terdengar seperti robot: di Microsoft Edge pilih suara “Natural”, di Chrome pilih suara “Google”, di iPhone/Mac pilih “Enhanced/Premium”. Tekan tombol suara untuk berganti.';
    else tip = 'Suara natural terdeteksi. Tanda ★ berarti suara natural. Tekan tombol suara untuk mencoba suara lain.';
    const accBtns = Object.keys(ACCENTS).map((k) => '<button type="button" class="ic" data-act="setAccent" data-v="' + k + '" aria-pressed="' + (k === acc ? 'true' : 'false') + '" aria-label="Aksen ' + ACCENTS[k].label + '"><span class="ic-pic">' + FLAG[k] + '</span><span class="ic-t">' + (k === 'us' ? 'Amerika' : 'British') + '</span></button>').join('');
    const spdBtns = SPEED_ORDER.map((k) => '<button type="button" class="ic" data-act="setSpeed" data-v="' + k + '" aria-pressed="' + (k === spd ? 'true' : 'false') + '" aria-label="Kecepatan ' + SPEEDS[k].label + '"><span class="ic-pic ic-emoji" aria-hidden="true">' + SPEED_ICO[k] + '</span><span class="ic-t">' + SPEEDS[k].label + '</span></button>').join('');
    const many = list.length > 1;
    const spk = speakersFor(acc); const spkChoice = DB['speaker_' + acc] || 'auto';
    const useBrowser = !spk.length || spkChoice === 'browser';
    const spkItems = [['auto', 'Acak']].concat(spk.map((x) => [x.id, x.name + (x.gender === 'm' ? ' (pria)' : x.gender === 'f' ? ' (wanita)' : '')])).concat([['browser', 'Suara komputer']]);
    const spkRow = spk.length ? '<div class="spk-row" role="group" aria-label="Penutur rekaman"><span class="spk-lbl">Penutur:</span>' + spkItems.map((it) => '<button type="button" class="spk-btn" data-act="setSpeaker" data-v="' + esc(it[0]) + '" aria-pressed="' + (spkChoice === it[0] ? 'true' : 'false') + '">' + esc(it[1]) + '</button>').join('') + '</div>' : '';
    const voiceBtn = '<button type="button" class="ic ic-voice" data-act="nextVoice"' + (many ? '' : ' aria-disabled="true"') + ' aria-label="Ganti suara. Sekarang: ' + esc(shortVoice(cur)) + '"><span class="ic-pic">' + ICON.sound(22) + '</span><span class="ic-t">Suara: <strong>' + esc(shortVoice(cur)) + '</strong>' + (many ? ' <span class="ic-n">(' + (Math.max(0, list.indexOf(cur)) + 1) + '/' + list.length + ')</span>' : '') + '</span><span class="ic-chev" aria-hidden="true">⟳</span></button>';
    return '<div class="audio-settings"><div class="ic-row"><div class="ic-group" role="group" aria-label="Aksen">' + accBtns + '</div><div class="ic-sep" aria-hidden="true"></div><div class="ic-group" role="group" aria-label="Kecepatan">' + spdBtns + '</div></div>' +
      spkRow + '<div class="ic-row ic-voice-row">' + (useBrowser ? voiceBtn : '') +
      '<button type="button" class="ic ic-play" data-act="testVoice" aria-label="Tes suara"><span class="ic-pic"><svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg></span><span class="ic-t">Tes</span></button></div>' +
      (useBrowser ? '<details class="ic-tip"' + (audioOpen ? ' open' : '') + '><summary>Suara kurang natural?</summary><p class="muted aset-tip">' + tip + '</p></details>' : '') + '</div>';
  }
  function refreshAudioUI() {
    const bar = $('#audio-bar');
    if (bar) {
      if (document.querySelector('#main ' + AUDIO_SEL.split(',').join(',#main '))) { bar.hidden = false; bar.innerHTML = audioPanel(); } else { bar.hidden = true; bar.innerHTML = ''; }
    }
    const d = $('#audio-data');
    if (d) d.innerHTML = audioPanel();
  }
  function sayBtn(text, extraClass) {
    const t = String(text).replace(/…/g, '').trim();
    return '<button type="button" class="say ' + (extraClass || '') + '" data-act="say" data-text="' + esc(text) + '" aria-label="Dengarkan: ' + esc(t) + '">' + ICON.sound(18) + '</button>';
  }

  /* ---------- efek suara benar/salah (dibuat dengan Web Audio, tanpa file) ---------- */
  let actx = null;
  function soundOn() { return DB.sound !== false; }
  function tone(freq, start, dur, type, vol, freqEnd) {
    const o = actx.createOscillator(); const g = actx.createGain();
    const t0 = actx.currentTime + start;
    o.type = type; o.frequency.setValueAtTime(freq, t0);
    if (freqEnd) o.frequency.exponentialRampToValueAtTime(freqEnd, t0 + dur);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(vol, t0 + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(g); g.connect(actx.destination);
    o.start(t0); o.stop(t0 + dur + 0.05);
  }
  function sfx(correct) {
    if (!soundOn()) return;
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      if (!actx) actx = new AC();
      if (actx.state === 'suspended') actx.resume();
      if (correct) { tone(784, 0, 0.22, 'sine', 0.22); tone(1047, 0.11, 0.38, 'sine', 0.22); tone(1568, 0.11, 0.38, 'sine', 0.05); }
      else { tone(220, 0, 0.32, 'triangle', 0.22, 150); tone(165, 0.12, 0.34, 'triangle', 0.18, 110); }
    } catch (e) { /* suara tidak tersedia */ }
  }

  /* ---------- bagian tampilan umum ---------- */
  const FOOT = '<footer class="site-footer"><div class="container"><span>Yang Penting Inggris. Dibuat oleh Kang Aldo, English tutor, Rumah Inggris.</span><span>Prototipe lokal: data tersimpan hanya di browser komputer ini.</span></div></footer>';

  function header(parts) {
    const u = user();
    const onLanding = parts.length === 0;
    let nav = '';
    if (u) {
      nav = '<a href="#dashboard">Beranda</a><a href="#laporan">Laporan</a><a href="#data">Data saya</a>' +
        '<span class="avatar" aria-hidden="true">' + esc((u.name || '?').charAt(0).toUpperCase()) + '</span>' +
        '<button type="button" class="linklike" data-act="logout">Keluar</button>';
    } else if (onLanding) {
      nav = '<button type="button" class="linklike" data-scroll="course">Course</button><button type="button" class="linklike" data-scroll="cara">Cara belajar</button><button type="button" class="linklike" data-scroll="harga">Harga</button><button type="button" class="linklike" data-scroll="faq">FAQ</button>' +
        '<a href="#masuk">Masuk</a><a class="btn btn-yellow btn-small" href="#pelajaran-salam">Mulai gratis</a>';
    } else {
      nav = '<a href="#beranda">Beranda</a><a href="#data">Data saya</a><a class="btn btn-yellow btn-small" href="#masuk">Masuk</a>';
    }
    return (storageOK ? '' : '<div class="warn" role="alert">Penyimpanan di browser ini tidak tersedia, jadi kemajuan belajarmu tidak akan tersimpan. Coba buka dengan Chrome atau Edge.</div>') +
      '<header class="site-header"><a class="logo" href="' + (u ? '#dashboard' : '#beranda') + '"><span class="logo-mark" aria-hidden="true">Y</span><span class="logo-text">Yang Penting Inggris</span></a><nav class="nav" aria-label="Menu utama">' + nav + '</nav></header>';
  }

  function accessChip(l) {
    if (l.access === 'open') return '<span class="chip chip-mint">Gratis, tanpa akun</span>';
    if (l.access === 'free') return '<span class="chip chip-mint">Gratis, dengan akun</span>';
    return '<span class="chip chip-yellow">' + ICON.lock(14) + 'Premium</span>';
  }
  function statusChip(l) {
    const g = gate(l);
    const p = prog(l.id);
    if (p.done) return '<span class="chip chip-mint">' + ICON.check(14) + 'Selesai</span>';
    if (g === 'premium') return '<span class="chip chip-yellow">' + ICON.lock(14) + 'Premium</span>';
    if (g === 'login') return '<span class="chip chip-lav">Perlu akun gratis</span>';
    if (Object.keys(p.stepsDone).length) return '<span class="chip chip-lav">' + ICON.play(14) + 'Sedang dikerjakan</span>';
    return '<span class="chip">Belum mulai</span>';
  }
  function isTeaser(l) { return !!l.teaser && l.access === 'premium' && gate(l) !== null; }
  function lessonTitle(l) {
    return isTeaser(l) ? l.teaser + ': lebih seru dari yang kamu kira' : l.title;
  }
  function lessonSummary(l) {
    return isTeaser(l) ? 'Topik spesial yang hanya terbuka untuk pemilik course. Penasaran isinya?' : l.summary;
  }
  function lessonRow(l, mode) {
    if (l.soon) return '<div class="lesson-row dashed soon" aria-disabled="true"><span class="num" style="background:var(--lav)" aria-hidden="true">' + l.no + '</span><span class="grow"><strong>' + esc(l.title) + '</strong><span>' + esc(l.summary) + '</span></span><span class="chip">Segera hadir</span></div>';
    const g = gate(l);
    const p = prog(l.id);
    const cls = ['lesson-row'];
    if (isTeaser(l)) cls.push('dashed');
    else if (g === 'premium') cls.push('locked');
    if (mode === 'app' && !p.done && Object.keys(p.stepsDone).length && !g) cls.push('active');
    const chip = mode === 'landing' ? accessChip(l) : statusChip(l);
    return '<a class="' + cls.join(' ') + '" href="#pelajaran-' + l.id + '"><span class="num" style="background:' + (p.done && mode === 'app' ? 'var(--mint)' : (g === 'premium' ? 'var(--yellow)' : 'var(--lav)')) + '" aria-hidden="true">' + l.no + '</span>' +
      '<span class="grow"><strong>' + esc(lessonTitle(l)) + '</strong><span>' + esc(lessonSummary(l)) + '</span></span>' + chip + '</a>';
  }

  /* ---------- halaman: landing ---------- */
  let demoPick = null;
  const STAR = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C13 7 17 11 24 12 17 13 13 17 12 24 11 17 7 13 0 12 7 11 11 7 12 0Z"></path></svg>';
  const PORTRAIT = '<div class="portrait"><span class="ring" aria-hidden="true"></span><span class="blob" aria-hidden="true"></span>' +
    '<img src="images/profil.webp" width="760" height="760" alt="Foto tutor pengajar Yang Penting Inggris">' +
    '<span class="spark s1">' + STAR + '</span><span class="spark s2">' + STAR + '</span>' +
    '<span class="pbadge b1">Let\'s practice!</span>' +
    '<span class="pbadge b2"><span class="pb-ico" aria-hidden="true">' + ICON.check(18) + '</span><span><b>English Tutor</b><small>Rumah Inggris</small></span></span></div>';
  function landing() {
    const u = user();
    const heroBtn = u
      ? '<a class="btn btn-primary" href="#dashboard">Lanjutkan belajar</a>'
      : '<a class="btn btn-primary" href="#pelajaran-salam">Coba pelajaran 1 gratis</a>';
    const demoOpts = [['I from Bandung.', false], ['I am from Bandung.', true], ['I am comes from Bandung.', false]];
    const demo = demoOpts.map((o, i) => {
      let cls = 'opt'; let tag = '';
      if (demoPick !== null) {
        if (o[1]) { cls += ' right'; tag = '<span class="tag">' + ICON.check(16) + 'Jawaban yang benar</span>'; }
        else if (demoPick === i) { cls += ' wrong'; tag = '<span class="tag">' + ICON.x(16) + 'Belum tepat</span>'; }
      }
      return '<button type="button" class="' + cls + '" data-act="demo" data-i="' + i + '"' + (demoPick !== null ? ' disabled' : '') + '><span>' + esc(o[0]) + '</span>' + tag + '</button>';
    }).join('');
    const demoFb = demoPick === null ? '' : (demoOpts[demoPick][1]
      ? '<div class="feedback right" role="status"><h3>Tepat!</h3><p>Setelah "am" kita pakai "from", bukan kata kerja. Kamu juga bisa bilang "I come from Bandung."</p></div>'
      : '<div class="feedback wrong" role="status"><h3>Belum tepat.</h3><p>Jawaban yang benar: "I am from Bandung." Kalimat Inggris butuh kata kerja (am), lalu "from" untuk asal.</p></div>');

    return header([]) + '<main id="main">' +
      '<section class="container hero" aria-labelledby="main-title">' +
        '<div class="hero-text"><span class="chip chip-mint" style="font-size:15px;padding:6px 16px"><span class="dot"></span>Pelajaran 1 gratis, tanpa daftar</span>' +
        '<h1 id="main-title" tabindex="-1"><span class="hl">Berani</span> ngomong Inggris, mulai dari sini.</h1>' +
        '<p class="lead">Belajar kosakata dan ekspresi sehari-hari lewat pelajaran pendek. Salah itu wajar. Setiap jawaban punya penjelasan singkat, seperti dikoreksi langsung oleh guru.</p>' +
        '<div class="btn-row">' + heroBtn + '<button type="button" class="btn" data-scroll="cara">Lihat cara belajar</button></div>' +
        '<p class="muted" style="font-size:15px">Dibuat oleh Kang Aldo, English tutor di Rumah Inggris.</p></div>' +
        '<div class="hero-art">' + PORTRAIT + '</div></section>' +

      '<section class="band" style="background:#fff"><div class="container section"><div class="sec-head"><span class="eyebrow">Masalah yang umum</span><h2>Kamu nggak sendirian kalau merasa begini</h2></div><div class="grid">' +
        '<div class="card" style="background:var(--cream)"><h3 style="font-size:22px;margin-bottom:8px">Kosakata terasa kurang</h3><p class="muted">Mau bilang sesuatu, tapi katanya nggak ketemu.</p>' + helpBox('Kata dipelajari sebagai frasa utuh dalam situasi nyata, lengkap dengan tombol dengar. Mode Sembunyikan arti melatih kamu mengingat dulu sebelum melihat jawaban, lalu kata diulas lagi di akhir pelajaran.') + '</div>' +
        '<div class="card" style="background:var(--coral-light)"><h3 style="font-size:22px;margin-bottom:8px">Takut salah ngomong</h3><p class="muted">Sebenarnya tahu jawabannya, tapi malu kalau salah.</p>' + helpBox('Kamu belajar dengan kecepatan sendiri, dan setiap jawaban langsung dikoreksi. Kesalahan yang sering terjadi ditampilkan Salah dan Benar berdampingan, jadi kamu tahu itu hal yang wajar. Di langkah Praktikkan kamu bisa membaca dengan suara sendirian, tanpa ada yang menilai, lalu melihat kata mana yang perlu diulang.') + '</div>' +
        '<div class="card" style="background:var(--lav)"><h3 style="font-size:22px;margin-bottom:8px">Bingung menyusun kalimat</h3><p class="muted">Kata-katanya ada, tapi susunannya belum pas.</p>' + helpBox('Ada dialog dan contoh kalimat, soal menyusun kata, dan pola kalimat yang tinggal diganti isinya, jadi kamu tidak menyusun dari nol.') + '</div>' +
      '</div></div></section>' +

      '<section id="cara" class="container section"><div class="sec-head"><span class="eyebrow">Cara belajar</span><h2>Satu pelajaran, lima langkah singkat</h2><p class="muted" style="margin-top:10px;max-width:640px">Sekitar 10 menit per pelajaran, pas diselipkan di sela sekolah atau kuliah.</p></div><div class="grid steps5">' +
        [['Pelajari', 'Dengar ekspresi kunci dalam situasi nyata.', '#FFC93C'], ['Pahami', 'Penjelasan singkat dalam bahasa Indonesia.', '#19B394'], ['Latihan', 'Jawab soal dan dapat koreksi langsung.', '#FF6B4A'], ['Praktikkan', 'Baca kalimat dengan suara dan dapat koreksi.', 'var(--accent)'], ['Ulas', 'Kuis singkat untuk mengecek.', '#1F2340']].map((s, i) =>
          '<div class="card"><span class="num" style="background:' + s[2] + ';color:' + (i >= 3 ? '#fff' : '#1F2340') + ';margin-bottom:12px" aria-hidden="true">' + (i + 1) + '</span><h3 style="font-size:20px;margin-bottom:6px">' + s[0] + '</h3><p class="muted" style="font-size:16px">' + s[1] + '</p></div>').join('') +
      '</div></section>' +

      '<section id="course" class="band" style="background:var(--lav-light)"><div class="container section"><div class="sec-head"><span class="eyebrow">Mulai dari sini</span><h2>Course pertama: ' + esc(COURSE.title) + '</h2><p class="muted" style="margin-top:10px;max-width:640px">Disusun dari materi kelas Rumah Inggris untuk level ' + esc(COURSE.level) + '. Klik pelajaran untuk mencobanya.</p></div><div class="list">' +
        LESSONS.map((l) => lessonRow(l, 'landing')).join('') + '</div></div></section>' +

      '<section class="container section" style="flex-direction:row;flex-wrap:wrap;align-items:center;gap:40px 56px"><div style="flex:1 1 360px;min-width:0;display:flex;flex-direction:column;gap:14px"><span class="eyebrow">Koreksi langsung</span><h2>Salah? Langsung dijelaskan.</h2><p class="muted">Tiap jawaban salah punya penjelasan singkat yang meniru cara Kang Aldo mengoreksi di kelas. Kamu bisa salah sebanyak yang kamu mau, tanpa ada yang melihat. Coba contoh di sebelah.</p></div>' +
        '<div class="card card-shadow demo stack" style="flex:1 1 380px"><p class="q-label">Perbaiki kalimat ini</p><p class="q-text" style="font-size:24px">I am come from Bandung.</p><div class="opts">' + demo + '</div>' + demoFb + '</div></section>' +

      '<section id="harga" class="band" style="background:var(--cream)"><div class="container section"><div class="sec-head"><span class="eyebrow">Harga</span><h2>Mulai gratis, lanjut kalau cocok</h2></div><div class="price-grid">' +
        '<div class="price-card"><h3 style="font-size:22px">Gratis</h3><p class="price">Rp0</p><ul><li>Pelajaran 1 tanpa akun</li><li>Pelajaran 2, 3, dan 7 dengan akun gratis</li><li>Latihan dengan koreksi instan</li></ul><a class="btn" href="#pelajaran-salam">Mulai gratis</a></div>' +
        '<div class="price-card card-shadow"><h3 style="font-size:22px">Course ' + esc(COURSE.title) + '</h3><p class="price">' + PLACEHOLDER_PRICE + '</p><ul><li>Semua pelajaran di course, sekali bayar</li><li>Latihan dan kuis di setiap pelajaran</li><li>Akses selama ' + PLACEHOLDER_DURATION + '</li></ul><a class="btn btn-primary" href="#beli">Beli course</a></div>' +
      '</div></div></section>' +

      '<section id="faq" class="container section" style="max-width:820px"><div class="sec-head"><span class="eyebrow">FAQ</span><h2>Pertanyaan yang sering muncul</h2></div><div class="list">' +
        [['Harus daftar dulu?', 'Pelajaran 1 bisa dibuka tanpa akun. Untuk pelajaran 2, 3, dan 7, kamu cukup membuat akun gratis.'],
         ['Bisa belajar lewat HP?', 'Bisa. Website dirancang untuk HP lebih dulu, lalu menyesuaikan untuk tablet dan komputer.'],
         ['Bayarnya langganan?', 'Saat ini course dibeli sekali bayar. Pilihan langganan baru dipertimbangkan setelah materi bertambah.'],
         ['Level apa yang cocok?', 'Course pertama untuk level Elementary: kamu sudah paham dasar, tapi kosakatanya terbatas dan masih takut berbicara.']].map((f) =>
          '<details class="faq"><summary>' + esc(f[0]) + '</summary><p>' + esc(f[1]) + '</p></details>').join('') +
      '</div></section>' +

      '<section class="cta"><div class="container"><h2>Yang penting berani, benar menyusul.</h2><a class="btn btn-yellow" href="#pelajaran-salam">Coba pelajaran 1 gratis</a></div></section>' +
      '</main>' + FOOT;
  }

  /* ---------- halaman: masuk / daftar ---------- */
  function authView(query) {
    const next = query.lesson ? '#pelajaran-' + query.lesson : '';
    return header(['masuk']) + '<main id="main" class="page narrow"><h1 id="main-title" tabindex="-1">Masuk atau buat akun gratis</h1>' +
      '<div class="notice">Versi lokal: akun hanya tersimpan di browser komputer ini, tanpa kata sandi. Login sungguhan dengan kata sandi dibuat di tahap berikutnya.</div>' +
      '<div class="card card-shadow"><h2 style="font-size:22px;margin-bottom:14px">Buat akun gratis</h2>' +
      '<form class="form" data-form="register" data-next="' + esc(next) + '" novalidate>' +
        '<div class="field"><label for="reg-name">Nama panggilan</label><input id="reg-name" type="text" autocomplete="nickname" maxlength="40" required></div>' +
        '<div class="field"><label for="reg-email">Email</label><input id="reg-email" type="email" autocomplete="email" required></div>' +
        '<p class="err" id="reg-err" role="alert"></p>' +
        '<button class="btn btn-primary" type="submit">Buat akun gratis</button></form></div>' +
      '<div class="card"><h2 style="font-size:22px;margin-bottom:14px">Sudah punya akun di komputer ini?</h2>' +
      '<form class="form" data-form="login" data-next="' + esc(next) + '" novalidate>' +
        '<div class="field"><label for="log-email">Email</label><input id="log-email" type="email" autocomplete="email" required></div>' +
        '<p class="err" id="log-err" role="alert"></p>' +
        '<button class="btn" type="submit">Masuk</button></form></div></main>' + FOOT;
  }

  /* ---------- halaman: dashboard ---------- */
  function dashboard(courseKey) {
    const c = COURSES[courseKey] || COURSES.speaking;
    const u = user();
    const nl = nextLesson(c);
    const nextCard = nl
      ? (function () {
          const p = prog(nl.id);
          const doneN = Object.keys(p.stepsDone).length;
          const key = stepFirstUndone(nl);
          const st = STEPS.find((s) => s.key === key);
          return '<section class="hero-card" aria-labelledby="lanjut"><p id="lanjut" style="font-weight:700;font-size:14px">Lanjutkan belajar</p><h2>' + c.unit + ' ' + nl.no + ': ' + esc(nl.title) + '</h2>' +
            '<div class="bar" role="progressbar" aria-label="Kemajuan pelajaran" aria-valuenow="' + (doneN * 20) + '" aria-valuemin="0" aria-valuemax="100"><span style="width:' + (doneN * 20) + '%"></span></div>' +
            '<p style="font-size:15px">Langkah ' + (STEPS.indexOf(st) + 1) + ' dari 5: ' + st.label + '</p>' +
            '<a class="btn btn-primary" href="#pelajaran-' + nl.id + '-' + key + '">' + (doneN ? 'Lanjutkan' : 'Mulai') + '</a></section>';
        })()
      : '<section class="hero-card"><h2>Semua ' + c.unit.toLowerCase() + ' yang tersedia sudah selesai. Mantap!</h2><p>' + (c.key === 'speaking' ? 'Pelajaran premium akan terbuka setelah kamu memiliki course-nya.' : 'Topik grammar berikutnya akan hadir segera.') + '</p></section>';
    const locked = c.key === 'speaking' && LESSONS.some((l) => gate(l) === 'premium');
    const upsell = locked
      ? '<section class="card card-shadow stack" aria-labelledby="up"><h2 id="up" style="font-size:20px">Buka semua pelajaran</h2><p class="price" style="font-size:30px">' + PLACEHOLDER_PRICE + '</p><ul style="margin:0;padding-left:20px;font-size:15px"><li>Sekali bayar</li><li>Pelajaran premium di course ini</li><li>Akses selama ' + PLACEHOLDER_DURATION + '</li></ul><a class="btn btn-primary" href="#beli">Beli course</a></section>'
      : '';
    return header(['dashboard']) + '<main id="main" class="page"><div class="stack" style="gap:10px"><span class="chip chip-mint" style="align-self:flex-start">' + (DB.testMode ? 'Mode uji: pelajaran premium terbuka' : 'Akun gratis') + '</span>' +
      '<h1 id="main-title" tabindex="-1">Halo, ' + esc(u.name) + '! Siap lanjut belajar?</h1></div>' +
      '<nav class="course-tabs" aria-label="Pilih course"><a href="#dashboard"' + (c.key === 'speaking' ? ' aria-current="page"' : '') + '>' + esc(COURSE.title) + '</a><a href="#grammar"' + (c.key === 'grammar' ? ' aria-current="page"' : '') + '>' + esc(GRAMMAR.title) + '</a></nav>' +
      '<div class="cols"><div class="main">' + nextCard +
      '<section aria-labelledby="cm" class="stack"><div style="display:flex;flex-wrap:wrap;align-items:baseline;justify-content:space-between;gap:8px"><h2 id="cm" style="font-size:22px">' + esc(c.course.title) + '</h2><span class="muted" style="font-size:15px">' + doneCount(c) + ' dari ' + c.lessons.length + ' ' + c.unit.toLowerCase() + ' selesai' + (c.all.length > c.lessons.length ? ' · ' + (c.all.length - c.lessons.length) + ' segera hadir' : '') + '</span></div>' +
      '<div class="list">' + c.all.map((l) => lessonRow(l, 'app')).join('') + '</div></section></div>' +
      '<aside class="side">' + upsell + '<section class="card" style="background:var(--lav-light)"><h2 style="font-size:17px;margin-bottom:6px">Laporan hasil belajar</h2><p class="muted" style="font-size:15px;margin-bottom:12px">Lihat nilai Latihan dan Ulas di setiap pelajaran, lalu cetak atau simpan sebagai PDF.</p><a class="btn btn-small btn-flat" href="#laporan">Buka laporan</a></section><section class="card" style="background:var(--lav-light)"><h2 style="font-size:17px;margin-bottom:6px">Data saya</h2><p class="muted" style="font-size:15px;margin-bottom:12px">Unduh cadangan kemajuan belajarmu, atau buka mode uji.</p><a class="btn btn-small btn-flat" href="#data">Buka Data saya</a></section></aside></div></main>' + FOOT;
  }

  /* ---------- blok isi pelajaran ---------- */
  function sayX(text) {
    const t = String(text).replace(/…/g, '').trim();
    return '<button type="button" class="say nodot" data-act="sayx" data-text="' + esc(text) + '" aria-label="Dengarkan: ' + esc(t) + '">' + ICON.sound(18) + '</button>';
  }
  function spellX(word) {
    return '<button type="button" class="say nodot" data-act="spellx" data-w="' + esc(word) + '" aria-label="Dengarkan ejaan">' + ICON.sound(18) + '</button>';
  }
  const attrFind = (name, val) => Array.prototype.find.call(document.querySelectorAll('[' + name + ']'), (e) => e.getAttribute(name) === val);

  /* ---------- kuis mini (di dalam halaman belajar) ---------- */
  const MQ = {};
  function mqHTML(key, def) {
    MQ[key] = def;
    const st = P.mq[key] || {};
    const n = def.items.length;
    const done = def.items.filter((_, i) => st[i] !== undefined).length;
    const right = def.items.filter((_, i) => st[i] === 0).length;
    const k = esc(key);
    const body = def.items.map((it, qi) => {
      const picked = st[qi];
      const answered = picked !== undefined;
      const order = shuffledIdx(it.options.length, key + ':' + qi, false);
      const longOpt = it.options.some((o) => String(o).length > 18);
      const opts = order.map((oi, pos) => {
        let cls = 'opt'; let tag = '';
        if (answered) {
          if (oi === 0) { cls += ' right'; tag = '<span class="tag">' + ICON.check(16) + 'Benar</span>'; }
          else if (oi === picked) { cls += ' wrong'; tag = '<span class="tag">' + ICON.x(16) + 'Belum tepat</span>'; }
          else cls += ' dim';
        }
        return '<button type="button" class="' + cls + '" data-act="mq" data-k="' + k + '" data-q="' + qi + '" data-i="' + oi + '"' + (answered ? ' disabled' : '') + '><span class="opt-t"><i class="opt-l" aria-hidden="true">' + String.fromCharCode(65 + pos) + '</i><span>' + esc(it.options[oi]) + '</span></span>' + tag + '</button>';
      }).join('');
      const fb = answered ? '<p class="mq-why ' + (picked === 0 ? 'right' : 'wrong') + '" role="status"><strong>' + (picked === 0 ? 'Tepat!' : 'Belum tepat.') + '</strong> ' + rich(it.why) + '</p>' : '';
      return '<div class="mq-q"><p class="mq-qt"><span>' + (qi + 1) + '. ' + esc(it.q) + '</span>' + (it.say ? sayX(it.say) : (it.spell ? spellX(it.spell) : '')) + '</p><div class="opts mq-opts n' + it.options.length + (longOpt ? ' long' : '') + '" role="group" aria-label="Pilihan jawaban">' + opts + '</div>' + fb + '</div>';
    }).join('');
    const perfect = right === n;
    const end = done === n
      ? '<div class="mq-done' + (perfect ? ' all' : '') + '"><span><strong>' + (perfect ? 'Sempurna! ' + n + ' dari ' + n + ' benar.' : 'Skor: ' + right + ' dari ' + n + '.') + '</strong>' + (perfect ? '' : ' Baca lagi bagian di atas, lalu coba lagi.') + '</span>' +
        (perfect ? '' : '<button type="button" class="btn" data-act="mqReset" data-k="' + k + '">Coba lagi</button>') + '</div>'
      : '';
    return '<div class="mq" data-mq="' + k + '"><div class="mq-head"><span class="mq-badge">Kuis mini</span><span class="mq-title">' + esc(def.title || 'Cek pemahamanmu') + '</span><span class="mq-score" aria-label="Terjawab ' + done + ' dari ' + n + '">' + done + '/' + n + '</span></div>' + body + end + '</div>';
  }
  function refreshMq(k) {
    const el = attrFind('data-mq', k);
    if (el && MQ[k]) el.outerHTML = mqHTML(k, MQ[k]);
  }

  /* ---------- tabel + kartu hafalan ---------- */
  const CARDS = {};
  function cardState(key) { return (P.cards[key] = P.cards[key] || { mode: 'list', i: 0, flip: false, rev: false, only: false, order: null }); }
  function knownSet(key) { const pr = prog(P.id); pr.cards = pr.cards || {}; return (pr.cards[key] = pr.cards[key] || []); }
  function deckOf(key, n) {
    const st = cardState(key); const kn = knownSet(key);
    const base = st.order && st.order.length === n ? st.order : Array.from({ length: n }, (_, i) => i);
    return st.only ? base.filter((i) => kn.indexOf(i) < 0) : base;
  }
  /* animasi kecil (tampak dari atas) untuk kata arah di kartu hafalan: mobil atau orang bergerak */
  const MV = { navy: '#1F2340', acc: '#4B3FE0', road: '#CFD3E6', route: '#FF6B4A', sun: '#FFC93C', mint: '#DDF6EF' };
  function mvCar(brake) {
    const bl = brake ? ' class="mv-brake" style="animation-duration:' + brake + 's"' : '';
    return '<rect x="-16" y="-9" width="32" height="18" rx="6" fill="' + MV.acc + '" stroke="' + MV.navy + '" stroke-width="2"/>' +
      '<rect x="-8" y="-6" width="10" height="12" rx="2" fill="#3A30C4"/>' +
      '<rect x="2" y="-6" width="7" height="12" rx="2" fill="' + MV.mint + '" stroke="' + MV.navy + '" stroke-width="1"/>' +
      '<rect x="13" y="-7.5" width="3.5" height="4.5" rx="1" fill="' + MV.sun + '"/><rect x="13" y="3" width="3.5" height="4.5" rx="1" fill="' + MV.sun + '"/>' +
      '<rect x="-17" y="-7.5" width="3.5" height="4.5" rx="1" fill="#FF3B30"' + (brake ? bl : ' opacity=".55"') + '/><rect x="-17" y="3" width="3.5" height="4.5" rx="1" fill="#FF3B30"' + (brake ? bl : ' opacity=".55"') + '/>';
  }
  function mvPerson() {
    return '<ellipse cx="0" cy="0" rx="4.5" ry="9" fill="' + MV.route + '" stroke="' + MV.navy + '" stroke-width="2"/><circle cx="1" cy="0" r="4.6" fill="#FFD9BF" stroke="' + MV.navy + '" stroke-width="2"/>';
  }
  /* gerak mengikuti jalur: keyframes CSS dihitung dari bentuk jalur (posisi + arah hadap), berhenti sebentar di ujung supaya ulangan tidak meloncat */
  const MV_KF = {};
  function mvKeyframes(name, d, move) {
    if (MV_KF[name]) return;
    let holder = document.getElementById('mv-hold');
    if (!holder) { holder = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); holder.id = 'mv-hold'; holder.setAttribute('width', '0'); holder.setAttribute('height', '0'); holder.setAttribute('aria-hidden', 'true'); holder.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden'; document.body.appendChild(holder); }
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path'); path.setAttribute('d', d); holder.appendChild(path);
    const L = path.getTotalLength(), N = 32, pts = [];
    for (let i = 0; i <= N; i++) { const q = path.getPointAtLength(L * i / N); pts.push([q.x, q.y]); }
    holder.removeChild(path);
    let prev = null; const fr = [];
    for (let i = 0; i <= N; i++) {
      const a = pts[Math.max(0, i - 1)], b = pts[Math.min(N, i + 1)];
      let ang = Math.atan2(b[1] - a[1], b[0] - a[0]) * 180 / Math.PI;
      if (prev !== null) { while (ang - prev > 180) ang -= 360; while (ang - prev < -180) ang += 360; }
      prev = ang;
      fr.push(((i / N) * move * 100).toFixed(2) + '%{transform:translate(' + pts[i][0].toFixed(1) + 'px,' + pts[i][1].toFixed(1) + 'px) rotate(' + ang.toFixed(1) + 'deg)}');
    }
    const last = fr[fr.length - 1].replace(/^[\d.]+%/, '100%');
    let st = document.getElementById('mv-kf');
    if (!st) { st = document.createElement('style'); st.id = 'mv-kf'; document.head.appendChild(st); }
    st.appendChild(document.createTextNode('@keyframes mv-' + name + '{' + fr.join('') + last + '}'));
    MV_KF[name] = true;
  }
  function mvMover(inner, path, still, dur, move, name) {
    move = move || 0.78;
    mvKeyframes(name, path, move);
    return '<g class="mv" style="transform:translate(' + still[0] + 'px,' + still[1] + 'px) rotate(' + still[2] + 'deg);animation:mv-' + name + ' ' + dur + 's linear infinite">' + inner + '</g>';
  }
  function mvRoute(d, head) {
    return '<path d="' + d + '" fill="none" stroke="' + MV.route + '" stroke-width="3" stroke-dasharray="6 6" stroke-linecap="round"/><polygon points="' + head + '" fill="' + MV.route + '"/>';
  }
  function mvOct(cx, cy, r) {
    const pts = []; for (let i = 0; i < 8; i++) { const a = (22.5 + 45 * i) * Math.PI / 180; pts.push((cx + r * Math.cos(a)).toFixed(1) + ',' + (cy + r * Math.sin(a)).toFixed(1)); }
    return '<line x1="' + cx + '" y1="' + (cy + r) + '" x2="' + cx + '" y2="' + (cy + r + 16) + '" stroke="' + MV.navy + '" stroke-width="3"/><polygon points="' + pts.join(' ') + '" fill="#E5322D" stroke="' + MV.navy + '" stroke-width="2"/><text x="' + cx + '" y="' + (cy + 3.2) + '" text-anchor="middle" font-size="8.5" font-weight="800" fill="#fff" font-family="Poppins,Arial,sans-serif">STOP</text>';
  }
  const MV_SCENES = {
    'turn right': () => '<path d="M100 30h40v110h-40z M100 30h140v40H100z" fill="' + MV.road + '"/>' + mvRoute('M120 132V82Q120 50 152 50H208', '206,41 224,50 206,59') + mvMover(mvCar(), 'M120 160V82Q120 50 152 50H262', [120, 96, -90], 4.2, 0, 'right'),
    'turn left': () => '<g transform="translate(240 0) scale(-1 1)"><path d="M100 30h40v110h-40z M100 30h140v40H100z" fill="' + MV.road + '"/>' + mvRoute('M120 132V82Q120 50 152 50H208', '206,41 224,50 206,59') + mvMover(mvCar(), 'M120 160V82Q120 50 152 50H262', [120, 96, -90], 4.2, 0, 'right') + '</g>',
    'turn back': () => '<path d="M90 140V44a30 30 0 0 1 60 0V140z" fill="' + MV.road + '"/><path d="M120 76V140" stroke="#fff" stroke-width="2.5" stroke-dasharray="7 7"/>' + mvRoute('M105 132V62a15 15 0 0 1 30 0V110', '126,106 135,124 144,106') + mvMover(mvCar(), 'M105 165V62a15 15 0 0 1 30 0V165', [105, 100, -90], 4.6, 0, 'back'),
    'go straight': () => '<path d="M100 0h40v140h-40z M0 50h240v40H0z" fill="' + MV.road + '"/>' + mvRoute('M120 128V28', '111,30 120,10 129,30') + mvMover(mvCar(), 'M120 165V-25', [120, 108, -90], 3.6, 0, 'straight'),
    'stop': () => '<path d="M100 0h40v140h-40z" fill="' + MV.road + '"/><rect x="100" y="62" width="40" height="5" fill="#fff"/>' + mvOct(168, 44, 14) + mvMover(mvCar(4), 'M120 165V92', [120, 92, -90], 4, 0.5, 'stop'),
    'pass': () => '<path d="M100 0h40v140h-40z" fill="' + MV.road + '"/><rect x="156" y="46" width="52" height="44" rx="6" fill="' + MV.sun + '" stroke="' + MV.navy + '" stroke-width="2"/><rect x="176" y="66" width="12" height="24" fill="#fff" stroke="' + MV.navy + '" stroke-width="2"/><rect x="162" y="54" width="10" height="8" fill="' + MV.mint + '" stroke="' + MV.navy + '" stroke-width="1.5"/><rect x="192" y="54" width="10" height="8" fill="' + MV.mint + '" stroke="' + MV.navy + '" stroke-width="1.5"/>' + mvRoute('M120 128V28', '111,30 120,10 129,30') + mvMover(mvCar(), 'M120 165V-25', [120, 108, -90], 3.8, 0, 'pass'),
    'cross': () => '<path d="M0 40h240v60H0z" fill="' + MV.road + '"/>' + [0, 1, 2, 3, 4, 5, 6].map((i) => '<rect x="98" y="' + (44 + i * 8.6) + '" width="44" height="4.6" fill="#fff"/>').join('') +
      '<g transform="translate(46 80)">' + mvCar() + '</g>' + mvRoute('M120 14V112', '111,108 120,128 129,108') + mvMover(mvPerson(), 'M120 -12V152', [120, 70, 90], 4.4, 0, 'cross')
  };
  /* kata posisi: gedung sasaran (kuning) berdenyut, gedung acuan berwarna ungu muda */
  function mvB(x, y, w, h, kind) {
    const f = kind === 't' ? MV.sun : '#E8E4FF';
    return '<g' + (kind === 'f' ? ' opacity=".45"' : '') + '><rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="5" fill="' + f + '" stroke="' + MV.navy + '" stroke-width="2"/>' +
      '<rect x="' + (x + 8) + '" y="' + (y + 8) + '" width="8" height="6" fill="' + MV.mint + '" stroke="' + MV.navy + '" stroke-width="1"/><rect x="' + (x + w - 16) + '" y="' + (y + 8) + '" width="8" height="6" fill="' + MV.mint + '" stroke="' + MV.navy + '" stroke-width="1"/>' +
      (kind === 't' ? '<rect class="mv-pulse" x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="5" fill="none" stroke="' + MV.route + '" stroke-width="3"/>' : '') + '</g>';
  }
  const mvRoadH = '<rect x="0" y="104" width="240" height="36" fill="' + MV.road + '"/>';
  const mvCarH = () => mvMover(mvCar(), 'M-30 122H270', [40, 122, 0], 5, 0.85, 'roadh');
  Object.assign(MV_SCENES, {
    'left side': () => '<path d="M100 0h40v140h-40z" fill="' + MV.road + '"/>' + mvB(40, 40, 44, 44, 't') + mvB(160, 62, 44, 44, 'r') + mvMover(mvCar(), 'M120 165V-25', [120, 108, -90], 3.6, 0, 'straight'),
    'right side': () => '<g transform="translate(240 0) scale(-1 1)"><path d="M100 0h40v140h-40z" fill="' + MV.road + '"/>' + mvB(40, 40, 44, 44, 't') + mvB(160, 62, 44, 44, 'r') + mvMover(mvCar(), 'M120 165V-25', [120, 108, -90], 3.6, 0, 'straight') + '</g>',
    'between': () => mvRoadH + mvB(20, 48, 52, 44, 'r') + mvB(94, 48, 52, 44, 't') + mvB(168, 48, 52, 44, 'r') + mvCarH(),
    'behind': () => mvRoadH + mvB(88, 52, 64, 40, 'r') + mvB(88, 6, 64, 40, 't') + mvCarH(),
    'in front of': () => mvRoadH + mvB(88, 6, 64, 40, 'r') + mvB(88, 52, 64, 40, 't') + mvCarH(),
    'beside': () => mvRoadH + mvB(48, 50, 56, 42, 'r') + mvB(112, 50, 56, 42, 't') + mvCarH(),
    'near': () => mvRoadH + mvB(24, 44, 52, 48, 'r') + mvB(100, 56, 44, 36, 't') + mvB(176, 14, 46, 38, 'f') + '<path d="M78 74H98" stroke="' + MV.route + '" stroke-width="3" stroke-dasharray="4 4" stroke-linecap="round"/>' + mvCarH(),
    'in the corner': () => '<path d="M0 62h240v38H0z M100 0h40v140h-40z" fill="' + MV.road + '"/>' + mvB(148, 14, 62, 38, 't') + mvB(30, 14, 62, 38, 'f') + mvMover(mvCar(), 'M-30 81H270', [40, 81, 0], 5, 0.85, 'roadc'),
    'opposite': () => '<path d="M0 56h240v36H0z" fill="' + MV.road + '"/>' + mvB(88, 8, 64, 40, 'r') + mvB(88, 100, 64, 36, 't') + '<path d="M120 60V88" stroke="' + MV.route + '" stroke-width="3" stroke-dasharray="5 5" stroke-linecap="round"/><polygon points="113,61 120,50 127,61" fill="' + MV.route + '"/><polygon points="113,87 120,98 127,87" fill="' + MV.route + '"/>' + mvMover(mvCar(), 'M-30 74H270', [40, 74, 0], 5, 0.85, 'roadm'),
    'until': () => '<path d="M100 0h40v140h-40z" fill="' + MV.road + '"/>' + mvB(84, 4, 72, 34, 't') + '<path d="M120 132V70" stroke="' + MV.route + '" stroke-width="3" stroke-dasharray="6 6" stroke-linecap="round"/>' + mvMover(mvCar(4), 'M120 165V64', [120, 64, -90], 4, 0.5, 'stop-far')
  });
  function moveScene(en) {
    const f = MV_SCENES[String(en || '').trim().toLowerCase()];
    return f ? '<span class="fc-anim" aria-hidden="true"><svg viewBox="0 0 240 140" xmlns="http://www.w3.org/2000/svg" focusable="false">' + f() + '</svg></span>' : '';
  }
  function cardsHTML(b, key, st) {
    const n = b.rows.length;
    const kn = knownSet(key);
    const known = kn.filter((i) => i < n).length;
    const d = deckOf(key, n);
    const pct = Math.round((known / n) * 100);
    const k = esc(key);
    const head = '<div class="fc-top"><span>Hafal <b>' + known + '</b> dari ' + n + '</span><span class="mini" aria-hidden="true"><span style="width:' + pct + '%"></span></span></div>' +
      '<div class="fc-opts"><div class="fc-switch" role="group" aria-label="Arah kartu"><button type="button" data-act="fcDir" data-k="' + k + '" data-v="en" aria-pressed="' + (!st.rev) + '" aria-label="Tampilkan bahasa Inggris dulu">EN → ID</button><button type="button" data-act="fcDir" data-k="' + k + '" data-v="id" aria-pressed="' + (!!st.rev) + '" aria-label="Tampilkan bahasa Indonesia dulu">ID → EN</button></div>' +
      '<button type="button" class="chip-btn" data-act="fcShuffle" data-k="' + k + '">Acak urutan</button>' +
      '<button type="button" class="chip-btn" data-act="fcOnly" data-k="' + k + '" aria-pressed="' + (!!st.only) + '">Belum hafal saja</button></div>';
    if (!d.length) {
      return head + '<div class="fc-empty"><strong>Semua kartu sudah hafal. Hebat!</strong><p class="muted">Ulangi dari awal untuk menguji ingatanmu lagi, atau kembali ke daftar.</p><button type="button" class="btn btn-primary" data-act="fcReset" data-k="' + k + '">Ulangi dari awal</button></div>';
    }
    if (st.i >= d.length || st.i < 0) st.i = 0;
    const idx = d[st.i]; const row = b.rows[idx];
    const front = st.rev ? row[1] : row[0]; const back = st.rev ? row[0] : row[1];
    const shown = st.flip ? back : front;
    const showsEn = st.rev ? st.flip : !st.flip;
    const isKnown = kn.indexOf(idx) >= 0;
    const card = '<div class="fc-stage"><button type="button" class="fc-card' + (st.flip ? ' flip' : '') + (isKnown ? ' known' : '') + (MV_SCENES[String(row[0]).trim().toLowerCase()] ? ' has-anim' : '') + '" data-act="fcFlip" data-k="' + k + '" aria-label="Kartu: ' + esc(shown) + '. Tekan untuk membalik.">' +
      moveScene(row[0]) + '<small class="fc-cap">' + (showsEn ? 'English' : 'Artinya') + '</small><span class="fc-word">' + esc(shown) + '</span><small class="fc-hint">' + (st.flip ? (showsEn ? 'Ucapkan kata ini dengan keras' : 'Cocokkan dengan tebakanmu') : 'Tebak dulu, lalu tekan kartu untuk melihat jawabannya') + '</small></button>' +
      '<span class="fc-say">' + sayX(row[0]) + '</span>' + (isKnown ? '<span class="fc-known">' + ICON.check(14) + ' hafal</span>' : '') + '</div>';
    const nav = '<div class="fc-nav"><button type="button" class="btn" data-act="fcPrev" data-k="' + k + '" aria-label="Kartu sebelumnya">' + ICON.back(18) + '</button><span class="fc-pos">Kartu ' + (st.i + 1) + ' dari ' + d.length + '</span><button type="button" class="btn" data-act="fcNext" data-k="' + k + '" aria-label="Kartu berikutnya">' + ICON.next(18) + '</button></div>';
    const judge = st.flip
      ? '<div class="fc-judge"><button type="button" class="btn" data-act="fcKnow" data-k="' + k + '" data-v="0">Belum hafal</button><button type="button" class="btn btn-primary" data-act="fcKnow" data-k="' + k + '" data-v="1">Sudah hafal</button></div>'
      : '<div class="fc-judge"><button type="button" class="btn btn-primary" data-act="fcFlip" data-k="' + k + '">Balik kartu</button></div>';
    return head + card + nav + judge;
  }
  /* tabel dua gaya (British dan American) dengan bendera di kepala kolom, sejajar dengan isi */
  function duoTable(b) {
    const say = b.say || [];
    const head = b.head.map((h, i) => b.flags[i] ? '<span class="thflag"><i>' + FLAG[b.flags[i]] + '</i><b>' + esc(h) + '</b></span>' : '<span>' + esc(h) + '</span>').join('');
    const rows = b.rows.map((r) => '<div class="duo-row">' + r.map((c, i) => say.indexOf(i) >= 0
      ? '<div class="duo-cell">' + sayBtn(plain(c), 'inline') + '<span>' + rich(c) + '</span></div>'
      : '<div class="duo-time">' + rich(c) + '</div>').join('') + '</div>').join('');
    return '<section class="card stack"><h3 style="font-size:20px">' + esc(b.title) + '</h3><div class="duo" role="table"><div class="duo-head" role="row">' + head + '</div>' + rows + '</div></section>';
  }
  function duoNote(b) {
    return '<section class="card stack duo-note-wrap">' + (b.title ? '<h3 style="font-size:20px">' + esc(b.title) + '</h3>' : '') + '<div class="duo-note">' +
      b.cols.map((c) => '<div class="duo-col ' + esc(c.tone || '') + '"><div class="duo-col-head"><i>' + FLAG[c.flag] + '</i><span><b>' + esc(c.label) + '</b><small>' + rich(c.sub) + '</small></span></div><ul>' +
        c.points.map((p) => '<li>' + rich(p) + '</li>').join('') + '</ul></div>').join('') + '</div></section>';
  }
  function tableSection(b, key) {
    const say = b.say || [];
    const stack = b.head.length >= 3;
    const st = b.cards ? cardState(key) : null;
    if (b.cards) CARDS[key] = b;
    const k = esc(key);
    const sw = b.cards ? '<div class="fc-switch" role="group" aria-label="Cara belajar"><button type="button" data-act="fcMode" data-k="' + k + '" data-v="list" aria-pressed="' + (st.mode === 'list') + '">Daftar</button><button type="button" data-act="fcMode" data-k="' + k + '" data-v="card" aria-pressed="' + (st.mode === 'card') + '">Kartu hafalan</button></div>' : '';
    let inner;
    if (b.cards && st.mode === 'card') inner = cardsHTML(b, key, st);
    else {
      inner = '<div class="tbl-wrap' + (stack ? ' stack-wrap' : '') + '"><table class="tbl' + (stack ? ' stack' : '') + '"><thead><tr>' +
        b.head.map((h) => '<th scope="col">' + esc(h) + '</th>').join('') + '</tr></thead><tbody>' +
        b.rows.map((r) => '<tr>' + r.map((c, i) => '<td data-label="' + esc(b.head[i]) + '"' + (say.indexOf(i) < 0 && /^artinya$/i.test(b.head[i]) ? ' class="mean"' : '') + '>' + (say.indexOf(i) >= 0 ? '<span class="cellsay">' + sayBtn(plain(c), 'inline') + '<span>' + rich(c) + '</span></span>' : rich(c)) + '</td>').join('') + '</tr>').join('') +
        '</tbody></table></div>';
    }
    return '<section class="card stack" data-cardsec="' + k + '"><div class="sec-row"><h3 style="font-size:20px">' + esc(b.title) + '</h3>' + sw + '</div>' + inner + '</section>';
  }
  function refreshCardSec(k) {
    const el = attrFind('data-cardsec', k);
    if (el && CARDS[k]) { el.outerHTML = tableSection(CARDS[k], k); }
  }
  function cardAct(act, k, v) {
    const b = CARDS[k]; if (!b) return;
    const st = cardState(k); const n = b.rows.length;
    const d = deckOf(k, n);
    if (act === 'fcMode') { st.mode = v === 'card' ? 'card' : 'list'; st.i = 0; st.flip = false; }
    else if (act === 'fcFlip') { st.flip = !st.flip; }
    else if (act === 'fcPrev') { st.i = d.length ? (st.i - 1 + d.length) % d.length : 0; st.flip = false; }
    else if (act === 'fcNext') { st.i = d.length ? (st.i + 1) % d.length : 0; st.flip = false; }
    else if (act === 'fcDir') { st.rev = v === 'id'; st.flip = false; }
    else if (act === 'fcShuffle') { const o = Array.from({ length: n }, (_, i) => i); for (let i = n - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); const t = o[i]; o[i] = o[j]; o[j] = t; } st.order = o; st.i = 0; st.flip = false; }
    else if (act === 'fcOnly') { st.only = !st.only; st.i = 0; st.flip = false; }
    else if (act === 'fcReset') { prog(P.id).cards[k] = []; save(); st.only = false; st.i = 0; st.flip = false; }
    else if (act === 'fcKnow') {
      const idx = d[st.i]; const kn = knownSet(k);
      const at = kn.indexOf(idx);
      if (v === '1' && at < 0) kn.push(idx);
      if (v !== '1' && at >= 0) kn.splice(at, 1);
      save();
      const d2 = deckOf(k, n);
      st.i = st.only ? (d2.length ? Math.min(st.i, d2.length - 1) : 0) : (d2.length ? (st.i + 1) % d2.length : 0);
      st.flip = false;
      if (v === '1') sfx(true);
    }
    refreshCardSec(k);
  }

  /* ---------- tombol sembunyikan arti ---------- */
  function refreshStudyUI() {
    const bar = $('#study-bar');
    document.body.classList.toggle('hide-id', !!DB.hideId);
    if (!bar) return;
    const has = document.querySelector('#main .phr .id, #main .ent-head .id, #main .dlg-line .id, #main .bub .id, #main .qa small.id, #main td.mean');
    if (!has) { bar.hidden = true; bar.innerHTML = ''; return; }
    const on = !!DB.hideId;
    bar.hidden = false;
    bar.innerHTML = '<button type="button" class="study-btn' + (on ? ' on' : '') + '" data-act="toggleHide" aria-pressed="' + on + '"><span class="study-ico" aria-hidden="true">' + (on ? ICON.eyeoff(22) : ICON.eye(22)) + '</span><span class="study-t"><strong>' + (on ? 'Arti sedang disembunyikan' : 'Sembunyikan arti') + '</strong><small>' + (on ? 'Tebak dulu, lalu tekan sebuah baris untuk mengintip artinya. Tekan di sini untuk menampilkan semuanya.' : 'Tutup terjemahan Indonesia supaya kamu bisa menebak dulu. Bagus untuk menghafal.') + '</small></span></button>';
  }

  /* ---------- tebak dulu, lalu buka jawaban (satu per satu) ---------- */
  const RVS = {};
  function rvState(k) { return (P.rv[k] = P.rv[k] || { open: {} }); }
  function miniClock(h, m) {
    const ah = (h % 12) * 30 + m * 0.5; const am = m * 6; let t = '';
    for (let i = 0; i < 12; i++) { const a = (i * 30 * Math.PI) / 180; t += '<line x1="' + (50 + 37 * Math.sin(a)).toFixed(1) + '" y1="' + (50 - 37 * Math.cos(a)).toFixed(1) + '" x2="' + (50 + 42 * Math.sin(a)).toFixed(1) + '" y2="' + (50 - 42 * Math.cos(a)).toFixed(1) + '" stroke="' + (i % 3 === 0 ? '#1F2340' : '#8E89C4') + '" stroke-width="' + (i % 3 === 0 ? 3 : 2) + '" stroke-linecap="round"/>'; }
    return '<svg viewBox="0 0 100 100" class="rv-clock" aria-hidden="true"><defs><radialGradient id="mclkf" cx="50%" cy="38%" r="72%"><stop offset="0" stop-color="#FFFFFF"/><stop offset="1" stop-color="#F1EFFC"/></radialGradient></defs>' +
      '<circle cx="50" cy="50" r="47" fill="url(#mclkf)" stroke="#1F2340" stroke-width="3"/>' + t +
      '<polygon points="48,54 52,54 51,26 49,26" fill="#1F2340" stroke="#1F2340" stroke-width="2" stroke-linejoin="round" transform="rotate(' + ah + ' 50 50)"/>' +
      '<polygon points="49,56 51,56 50.6,14 49.4,14" fill="#4B3FE0" stroke="#4B3FE0" stroke-width="1.6" stroke-linejoin="round" transform="rotate(' + am + ' 50 50)"/>' +
      '<circle cx="50" cy="50" r="4.2" fill="#FFFFFF" stroke="#1F2340" stroke-width="2"/><circle cx="50" cy="50" r="1.6" fill="#4B3FE0"/></svg>';
  }
  function flipEx(it, x) {
    if (!it.flip) return '';
    const tm = /(\d{1,2})\.(\d{2})/.exec(x[2] || x[1]);
    if (!tm) return '';
    const extra = (/\((.*?)\)/.exec(x[1]) || [])[1] || (x[2] ? x[1] : '');
    return '<li class="flip"><div class="flip-q">' + miniClock(Number(tm[1]), Number(tm[2])) + '<b class="flip-time">' + tm[0] + '</b></div>' +
      '<div class="flip-a">' + sayBtn(plain(x[0]), 'inline') + '<div><span class="en2">' + rich(x[0]) + '</span>' + (extra ? '<span class="fx">' + rich(extra) + '</span>' : '') + '</div></div></li>';
  }
  function revealHTML(b, key) {
    RVS[key] = b; const st = rvState(key); const k = esc(key);
    const n = b.items.length; const openN = b.items.filter((_, i) => st.open[i]).length;
    const rows = b.items.map((it, i) => {
      if (b.spell) {
        const w = Array.isArray(it) ? it[0] : it; const hint = Array.isArray(it) ? it[1] : '';
        const open = !!st.open[i];
        const L = String(w).toUpperCase().split('').filter((c) => LETTER_SOUND[c]);
        return '<li class="rv-item' + (open ? ' open' : '') + '">' +
          '<div class="rv-q"><div class="rv-front"><b>' + esc(w) + '</b><small>' + esc(b.ask || 'Coba eja dengan suara pelan.') + '</small></div></div>' +
          '<div class="rv-a">' + (open ? '<div class="rv-ans"><button type="button" class="say inline" data-act="spell" data-w="' + esc(w) + '" aria-label="Dengarkan ejaan ' + esc(w) + '">' + ICON.sound(18) + '</button><div class="rv-spell"><span class="rv-letters">' + L.join(' - ') + '</span>' + ipaSpan(w, 'rv-en') + '</div></div>' + (hint ? '<p class="rv-hint">' + rich(hint) + '</p>' : '') :
            '<span class="rv-ph" aria-hidden="true">? ? ?</span><span class="rv-ph-t">Tebak dulu, ucapkan huruf demi huruf.</span><span class="sr-only">Jawaban disembunyikan.</span>') + '</div>' +
          '<button type="button" class="rv-btn' + (open ? ' on' : '') + '" data-act="rvToggle" data-k="' + k + '" data-i="' + i + '" aria-expanded="' + open + '">' + (open ? ICON.eyeoff(18) + '<span>Sembunyikan</span>' : ICON.eye(18) + '<span>Lihat ejaan</span>') + '</button></li>';
      }
      const open = !!st.open[i]; const tm = /^(\d{1,2})[.:](\d{2})$/.exec(it[0]);
      const say = it[1].replace(/\s*\(.*?\)\s*/g, ' ').trim();
      return '<li class="rv-item' + (open ? ' open' : '') + '">' +
        '<div class="rv-q">' + (tm ? miniClock(Number(tm[1]), Number(tm[2])) : '') + '<div class="rv-front"><b>' + esc(it[0]) + '</b><small>' + esc(b.ask || 'Bagaimana cara membacanya?') + '</small></div></div>' +
        '<div class="rv-a">' + (open ? '<div class="rv-ans">' + sayBtn(say, 'inline') + '<span class="rv-en">' + esc(it[1]) + '</span></div>' + (it[2] ? '<p class="rv-hint">' + esc(it[2]) + '</p>' : '') :
          '<span class="rv-ph" aria-hidden="true">? ? ?</span><span class="rv-ph-t">Tebak dulu, ucapkan dengan suara pelan.</span>' + '<span class="sr-only">Jawaban disembunyikan.</span>') + '</div>' +
        '<button type="button" class="rv-btn' + (open ? ' on' : '') + '" data-act="rvToggle" data-k="' + k + '" data-i="' + i + '" aria-expanded="' + open + '">' + (open ? ICON.eyeoff(18) + '<span>Sembunyikan</span>' : ICON.eye(18) + '<span>Lihat jawaban</span>') + '</button></li>';
    }).join('');
    return '<section class="card stack rv-sec" data-rv="' + k + '"><div class="sec-row"><h3 style="font-size:20px">' + esc(b.title) + '</h3><span class="rv-count">Dibuka ' + openN + ' dari ' + n + '</span></div>' +
      (b.lead ? '<p class="muted">' + b.lead + '</p>' : '') +
      '<ul class="rv-list">' + rows + '</ul>' +
      '<div class="rv-tools"><button type="button" class="chip-btn" data-act="rvAll" data-k="' + k + '" data-v="open">Buka semua ' + (b.spell ? 'ejaan' : 'jawaban') + '</button><button type="button" class="chip-btn" data-act="rvAll" data-k="' + k + '" data-v="close">Tutup semua</button></div></section>';
  }
  function refreshReveal(k) {
    const el = attrFind('data-rv', k);
    if (el && RVS[k]) { el.outerHTML = revealHTML(RVS[k], k); applyHeard(); }
  }
  function revealAct(act, k, v, i) {
    const b = RVS[k]; if (!b) return;
    const st = rvState(k);
    if (act === 'rvToggle') { st.open[i] = !st.open[i]; }
    else { b.items.forEach((_, j) => { st.open[j] = v === 'open'; }); }
    refreshReveal(k);
  }

  /* ---------- blok "Penjelasan dulu" ---------- */
  function roleKeyHTML(b) {
    const rows = [['s', 'Subject', 'pelaku, atau yang sedang dibicarakan'], ['v', 'Verb / Auxiliary verb', 'kata kerja dan kata bantu (do, does, is)'], ['o', 'Object', 'yang dikenai pekerjaan'], ['a', 'Adverb', 'keterangan: kapan, di mana, atau seberapa sering'], ['j', 'Adjective', 'kata sifat']];
    return '<section class="card stack rk-sec"><h3 style="font-size:20px">' + esc(b.title || 'Kunci warna kalimat') + '</h3><ul class="rk-list">' +
      rows.map((r) => '<li class="rk-' + r[0] + '"><span class="rk-name r-' + r[0] + '">' + r[1] + '</span><span class="rk-mean">' + r[2] + '</span></li>').join('') + '</ul>' +
      (b.example ? '<p class="rk-ex">' + rich(b.example) + '</p>' : '') + (b.note ? '<p class="rk-note">' + rich(b.note) + '</p>' : '') + '</section>';
  }
  function keyHTML(b) {
    return '<div class="key-box"><span class="key-label">' + esc(b.label || 'Inti materi') + '</span><p>' + rich(b.text) + '</p></div>';
  }
  function formulaHTML(b) {
    const legend = '<p class="fm-legend"><span class="fm-chip s">Subject</span><span class="fm-chip v">Verb / Auxiliary</span><span class="fm-chip x">Akhiran s / es</span></p>';
    const rows = (b.rows || []).map((r) => '<div class="fm-row"><span class="fm-label">' + esc(r.label) + '</span><div class="fm-line">' +
      r.parts.map((q, i) => (i ? '<span class="fm-plus" aria-hidden="true">+</span>' : '') + '<span class="fm-chip ' + q[1] + '">' + rich(q[0]) + '</span>').join('') + '</div>' +
      (r.ex ? '<div class="fm-ex">' + sayBtn(plain(r.ex)) + '<span>' + rich(r.ex) + '</span></div>' : '') + '</div>').join('');
    return '<section class="card stack fm-sec"><h3 style="font-size:20px">' + esc(b.title) + '</h3>' + legend + rows + '</section>';
  }
  function fmlChips(t) {
    const parts = String(t).split(' + ');
    const KIND = { S: 's', V: 'v', A: 'adv', J: 'adj', O: 'obj', e: 'x' };
    const out = [];
    let q = '';
    for (let i = 0; i < parts.length; i++) {
      let x = parts[i].trim();
      if (i === parts.length - 1 && /\?$/.test(x)) { q = '?'; x = x.slice(0, -1); }
      const m = /^\{\{([SVOAJe])\|([^{}]+)\}\}$/.exec(x);
      if (!m) return '';
      out.push('<span class="fm-chip ' + KIND[m[1]] + '">' + esc(m[2]) + '</span>');
    }
    return '<div class="ent-fml"><b class="fm-label">Rumus</b><div class="fm-line">' + out.join('<span class="fm-plus" aria-hidden="true">+</span>') + (q ? '<span class="fm-plus" aria-hidden="true">?</span>' : '') + '</div></div>';
  }
  function spellHTML(rules) {
    return '<div class="sp-grid">' + rules.map((r) => '<div class="sp tone-' + r.tone + '"><div class="sp-badge">' + esc(r.badge) + '</div><div class="sp-body"><b class="sp-title">' + esc(r.title) + '</b>' +
      (r.tags ? '<span class="sp-tags">' + r.tags.map((t) => '<span class="sp-tag">' + esc(t) + '</span>').join('') + '</span>' : '') +
      (r.hint ? '<span class="sp-hint">' + rich(r.hint) + '</span>' : '') +
      '<span class="sp-words">' + r.words.map((w) => '<span class="sp-w"><i>' + (w[3] ? esc(w[0].slice(0, -w[3].length)) + '<s>' + esc(w[3]) + '</s>' : esc(w[0])) + '</i><em aria-hidden="true">→</em><span class="sp-res">' + esc(w[1]) + '<u>' + esc(w[2]) + '</u></span></span>').join('') + '</span></div></div>').join('') + '</div>';
  }
  function svCards(b) {
    const cards = b.rows.map((r) => {
      const plus = /\{\{e\|/.test(r[1]);
      return '<div class="sv' + (plus ? ' plus' : '') + '"><div class="sv-top"><span class="fm-chip s">' + rich(r[0]) + '</span><span class="fm-plus" aria-hidden="true">→</span><span class="fm-chip v">' + rich(r[1]) + '</span></div>' +
        '<div class="fm-ex">' + sayBtn(plain(r[2])) + '<span>' + rich(r[2]) + '</span></div></div>';
    }).join('');
    return '<section class="card stack"><h3 style="font-size:20px">' + esc(b.title) + '</h3><div class="sv-grid">' + cards + '</div></section>';
  }
  function wordChips(b) {
    return '<section class="card stack"><h3 style="font-size:20px">' + esc(b.title) + '</h3><div class="tw-grid">' +
      b.rows.map((r) => '<div class="tw">' + sayBtn(plain(r[0]), 'inline') + '<div><span class="fm-chip adv">' + rich(r[0]) + '</span><span class="tw-id">' + esc(r[1]) + '</span></div></div>').join('') + '</div></section>';
  }
  function explainHTML(b) {
    const pts = (b.points || []).map((x) => '<div class="xp' + (x.tone ? ' tone-' + x.tone : '') + '"><span class="xp-ico" aria-hidden="true">' + x.icon + '</span><b>' + esc(x.title) + '</b><p>' + rich(x.text) + '</p>' +
      (x.ex ? '<div class="xp-ex"><span>' + rich(x.ex) + '</span></div>' : '') + '</div>').join('');
    return '<section class="card stack xp-sec"><div class="xp-top"><span class="xp-badge">Penjelasan dulu</span><h3>' + esc(b.title) + '</h3></div>' +
      (b.lead ? '<p class="xp-lead">' + b.lead + '</p>' : '') +
      '<div class="xp-grid' + (b.flow ? ' flow' : '') + ' n' + (b.points || []).length + '">' + pts + '</div>' +
      (b.note ? '<p class="xp-note">' + b.note + '</p>' : '') + '</section>';
  }

  /* ---------- generator jam (analog + digital) ---------- */
  const ONES = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const TENS = { 2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty' };
  const numWord = (n) => (n < 20 ? ONES[n] : TENS[Math.floor(n / 10)] + (n % 10 ? '-' + ONES[n % 10] : ''));
  const cap = (t) => t.charAt(0).toUpperCase() + t.slice(1);
  const ROMAN = ['XII', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'];
  const h12 = (h) => (h % 12) || 12;
  const minWord = (n) => numWord(n) + (n % 5 === 0 ? '' : (n === 1 ? ' minute' : ' minutes'));
  function readBritish(h, m) {
    const H = numWord(h12(h)); const N = numWord(h12(h + 1));
    if (m === 0) return { t: H + " o'clock", why: 'Menit 00 berarti jam tepat, jadi cukup sebut jamnya lalu o\'clock.' };
    if (m === 15) return { t: 'a quarter past ' + H, why: 'Menit 15 = a quarter (seperempat) lewat jam ' + h12(h) + '. Bisa juga fifteen past ' + H + '.' };
    if (m === 30) return { t: 'half past ' + H, why: 'Menit 30 = half (setengah) lewat jam ' + h12(h) + '.' };
    if (m === 45) return { t: 'a quarter to ' + N, why: 'Menit 45 = tinggal 15 menit menuju jam ' + h12(h + 1) + ', yaitu a quarter to. Bisa juga fifteen to ' + N + '.' };
    if (m < 30) return { t: minWord(m) + ' past ' + H, why: 'Menit ' + m + ' ada di 1–30, jadi pakai past: sebut menitnya dulu, lalu past, lalu jam ' + h12(h) + '.' };
    const r = 60 - m;
    return { t: minWord(r) + ' to ' + N, why: 'Menit ' + m + ' lebih dari 30, jadi pakai to. Sisa 60 − ' + m + ' = ' + r + ' menit menuju jam ' + h12(h + 1) + '.' };
  }
  function readAmerican(h, m) {
    const H = numWord(h12(h));
    if (m === 0) return { t: H + " o'clock", why: 'Menit 00: sebut jam lalu o\'clock.' };
    if (m < 10) return { t: H + ' oh ' + numWord(m), why: 'Jam dulu, lalu menit. Menit di bawah 10 dibaca dengan oh di depannya.' };
    return { t: H + ' ' + numWord(m), why: 'Jam dulu, lalu menit, dibaca seperti angka biasa.' };
  }
  function dayPart(h) { return h < 4 ? 'dini hari' : h >= 4 && h < 11 ? 'pagi' : h >= 11 && h < 15 ? 'siang' : h >= 15 && h < 18 ? 'sore' : 'malam'; }
  const pad2 = (n) => (n < 10 ? '0' : '') + n;
  function clockState(key, b) {
    return (P.clock[key] = P.clock[key] || { h: 14, m: 10, fmt: '12', step: 5, face: 'num', tebak: true, reveal: false, full: false, ah: null, am: null });
  }
  const targetAngles = (st) => ({ ah: (st.h % 12) * 30 + st.m * 0.5, am: st.m * 6 });
  function nearest(cur, target) { const d = ((target - (((cur % 360) + 360) % 360) + 540) % 360) - 180; return cur + d; }
  function analogSVG(face, ah, am) {
    let t = '';
    for (let i = 0; i < 60; i++) {
      const a = (i * 6 * Math.PI) / 180; const big = i % 5 === 0;
      const r1 = big ? 122 : 128; const r2 = 134;
      t += '<line x1="' + (150 + r1 * Math.sin(a)).toFixed(1) + '" y1="' + (150 - r1 * Math.cos(a)).toFixed(1) + '" x2="' + (150 + r2 * Math.sin(a)).toFixed(1) + '" y2="' + (150 - r2 * Math.cos(a)).toFixed(1) + '" stroke="' + (big ? '#1F2340' : '#B9B4DC') + '" stroke-width="' + (big ? 3 : 1.2) + '" stroke-linecap="round"/>';
    }
    let nums = '';
    for (let n = 1; n <= 12; n++) {
      const a = (n * 30 * Math.PI) / 180; const main = n % 3 === 0;
      nums += '<text x="' + (150 + 101 * Math.sin(a)).toFixed(1) + '" y="' + (150 - 101 * Math.cos(a)).toFixed(1) + '" text-anchor="middle" dominant-baseline="central" font-family="Poppins,Segoe UI,sans-serif" font-weight="' + (main ? 700 : 500) + '" font-size="' + (face === 'roman' ? 16 : 23) + '" stroke="#F6F5FF" stroke-width="5" stroke-linejoin="round" paint-order="stroke" fill="' + (main ? '#1F2340' : '#4A4E78') + '">' + (face === 'roman' ? ROMAN[n % 12] : n) + '</text>';
    }
    return '<svg viewBox="0 0 300 300" class="clk-svg" aria-hidden="true"><defs><radialGradient id="clkf" cx="50%" cy="38%" r="72%"><stop offset="0" stop-color="#FFFFFF"/><stop offset="1" stop-color="#F1EFFC"/></radialGradient></defs>' +
      '<circle cx="150" cy="150" r="146" fill="#FFFFFF" stroke="#1F2340" stroke-width="3"/><circle cx="150" cy="150" r="139" fill="url(#clkf)" stroke="#E2DFF5" stroke-width="2"/>' + t +
      '<g class="hand hh" style="transform:rotate(' + ah + 'deg)"><polygon points="145,162 155,162 153,88 147,88" fill="#1F2340" stroke="#1F2340" stroke-width="3" stroke-linejoin="round"/></g>' +
      '<g class="hand hm" style="transform:rotate(' + am + 'deg)"><polygon points="147,168 153,168 151.6,42 148.4,42" fill="#4B3FE0" stroke="#4B3FE0" stroke-width="2.5" stroke-linejoin="round"/></g>' + nums +
      '<circle cx="150" cy="150" r="9" fill="#FFFFFF" stroke="#1F2340" stroke-width="3"/><circle cx="150" cy="150" r="3.5" fill="#4B3FE0"/></svg>';
  }
  function clockReading(st, k) {
    const br = readBritish(st.h, st.m); const am = readAmerican(st.h, st.m);
    if (st.tebak && !st.reveal) {
      return '<div class="clk-read"><p class="clk-guess"><b>Mode tebak</b>Lihat jamnya, lalu coba ucapkan dalam bahasa Inggris. Setelah itu tekan tombol di bawah untuk mengecek.</p><button type="button" class="btn btn-primary" data-act="clkReveal" data-k="' + k + '">Lihat jawaban</button></div>';
    }
    const row = (cls, tag, r) => '<div class="clk-row ' + cls + '"><span class="clk-tag">' + tag + '</span><b>' + esc(cap(r.t)) + '</b>' + sayX("It's " + r.t + '.') + '</div><p class="clk-why">' + esc(r.why) + '</p>';
    return '<div class="clk-read" aria-live="polite">' + row('brit', 'British', br) + row('amer', 'American', am) + '<p class="clk-meta">Waktu: <strong>' + dayPart(st.h) + '</strong> (' + (st.h < 12 ? 'a.m.' : 'p.m.') + ')</p></div>';
  }
  function clockHTML(b, key, st, angles) {
    const k = esc(key);
    const digital = st.fmt === '24' ? pad2(st.h) + ':' + pad2(st.m) : h12(st.h) + ':' + pad2(st.m);
    const ampm = st.fmt === '24' ? '' : '<span class="clk-ampm">' + (st.h < 12 ? 'AM' : 'PM') + '</span>';
    const chip = (act, v, label, on) => '<button type="button" class="chip-btn" data-act="' + act + '" data-k="' + k + '" data-v="' + v + '" aria-pressed="' + on + '">' + label + '</button>';
    const steps = [['1', '1 menit'], ['5', '5 menit'], ['15', '15 menit'], ['30', '30 menit'], ['60', 'Jam tepat']];
    return '<section class="card stack clk-sec' + (st.full ? ' clk-full' : '') + '" data-clock="' + k + '">' +
      '<div class="sec-row"><h3 style="font-size:20px">' + esc(b.title) + '</h3><button type="button" class="chip-btn" data-act="clkFull" data-k="' + k + '">' + (st.full ? 'Tutup layar penuh' : 'Layar penuh') + '</button></div>' +
      (b.lead ? '<p class="muted">' + b.lead + '</p>' : '') +
      '<div class="clk-main"><button type="button" class="clk-face" data-act="clkNew" data-k="' + k + '" role="img" aria-label="Jam analog menunjukkan ' + digital + '. Tekan untuk jam acak berikutnya.">' + analogSVG(st.face, angles.ah, angles.am) + '</button>' +
      '<div class="clk-side"><button type="button" class="clk-digital" data-act="clkNew" data-k="' + k + '" aria-label="Jam digital ' + digital + '. Tekan untuk jam acak berikutnya."><span class="clk-time">' + digital.replace(':', '<i class="clk-colon">:</i>') + '</span>' + ampm + '</button>' + clockReading(st, k) + '</div></div>' +
      '<div class="clk-actions"><button type="button" class="btn btn-primary clk-new" data-act="clkNew" data-k="' + k + '">Jam acak</button>' +
      '<div class="clk-nudge" role="group" aria-label="Geser waktu"><button type="button" class="chip-btn" data-act="clkStep" data-k="' + k + '" data-v="-60">− 1 jam</button><button type="button" class="chip-btn" data-act="clkStep" data-k="' + k + '" data-v="-5">− 5 mnt</button><button type="button" class="chip-btn" data-act="clkStep" data-k="' + k + '" data-v="5">+ 5 mnt</button><button type="button" class="chip-btn" data-act="clkStep" data-k="' + k + '" data-v="60">+ 1 jam</button></div></div>' +
      '<details class="clk-set"' + (st.setOpen ? ' open' : '') + '><summary>Pengaturan jam</summary><div class="clk-opts">' +
      '<div class="clk-og"><span class="aset-l">Interval menit acak</span><div class="clk-chips">' + steps.map((x) => chip('clkStepSet', x[0], x[1], String(st.step) === x[0])).join('') + '</div></div>' +
      '<div class="clk-og"><span class="aset-l">Format jam digital</span><div class="clk-chips">' + chip('clkFmt', '12', '12 jam (AM/PM)', st.fmt === '12') + chip('clkFmt', '24', '24 jam', st.fmt === '24') + '</div></div>' +
      '<div class="clk-og"><span class="aset-l">Angka di jam analog</span><div class="clk-chips">' + chip('clkFace', 'num', 'Angka biasa', st.face === 'num') + chip('clkFace', 'roman', 'Angka Romawi', st.face === 'roman') + '</div></div>' +
      '<div class="clk-og"><span class="aset-l">Mode tebak</span><div class="clk-chips">' + chip('clkTebak', '1', st.tebak ? 'Aktif: jawaban disembunyikan' : 'Mati: jawaban langsung tampil', st.tebak) + '</div></div>' +
      '</div></details></section>';
  }
  function clockSection(b, key) {
    CLOCKS[key] = b;
    const st = clockState(key, b);
    const tg = targetAngles(st);
    if (st.ah === null) { st.ah = tg.ah; st.am = tg.am; }
    return clockHTML(b, key, st, { ah: st.ah, am: st.am });
  }
  const CLOCKS = {};
  function refreshClock(k) {
    const b = CLOCKS[k]; const root = attrFind('data-clock', k);
    if (!b || !root) return;
    const st = clockState(k, b);
    const tg = targetAngles(st);
    const from = { ah: st.ah, am: st.am };
    const to = { ah: nearest(st.ah, tg.ah), am: nearest(st.am, tg.am) };
    const wasOpen = root.querySelector('details.clk-set'); st.setOpen = !!(wasOpen && wasOpen.open);
    root.outerHTML = clockHTML(b, k, st, from);
    st.ah = to.ah; st.am = to.am;
    requestAnimationFrame(() => requestAnimationFrame(() => {
      const r = attrFind('data-clock', k); if (!r) return;
      const hh = r.querySelector('.hh'); const hm = r.querySelector('.hm');
      if (hh) hh.style.transform = 'rotate(' + to.ah + 'deg)';
      if (hm) hm.style.transform = 'rotate(' + to.am + 'deg)';
    }));
  }
  function clockAct(act, k, v) {
    const b = CLOCKS[k]; if (!b) return;
    const st = clockState(k, b);
    if (act === 'clkNew') {
      const step = st.step; const per = step >= 60 ? 1 : Math.floor(60 / step);
      let h; let m; let guard = 0;
      do { h = Math.floor(Math.random() * 24); m = (step >= 60 ? 0 : Math.floor(Math.random() * per) * step); guard++; } while (h === st.h && m === st.m && guard < 20);
      st.h = h; st.m = m; st.reveal = false;
    } else if (act === 'clkStep') {
      let total = st.h * 60 + st.m + Number(v);
      total = ((total % 1440) + 1440) % 1440;
      st.h = Math.floor(total / 60); st.m = total % 60; st.reveal = false;
    } else if (act === 'clkStepSet') { st.step = Number(v); }
    else if (act === 'clkFmt') { st.fmt = v === '24' ? '24' : '12'; }
    else if (act === 'clkFace') { st.face = v === 'roman' ? 'roman' : 'num'; }
    else if (act === 'clkTebak') { st.tebak = !st.tebak; st.reveal = false; }
    else if (act === 'clkReveal') { st.reveal = true; }
    else if (act === 'clkFull') { st.full = !st.full; document.body.classList.toggle('clk-lock', st.full); }
    refreshClock(k);
  }

  /* Pembicara pertama di kiri, lawan bicaranya di kanan. Satu pembicara saja (monolog) tetap di kanan. */
  function dlgSide(d, who) {
    const order = [];
    d.lines.forEach((ln) => { if (order.indexOf(ln[0]) < 0) order.push(ln[0]); });
    return order.length > 1 && order[0] === who ? 'l' : 'r';
  }
  function chatScenes(scenes) {
    return scenes.map((sc) => '<div class="chat"><p class="chat-title">' + esc(sc.title) + '</p>' + sc.msgs.map((m, mi) => {
      const right = m.side === 'r';
      return '<div class="bub-row ' + (right ? 'r' : 'l') + '" style="animation-delay:' + Math.min(mi * 0.06, 0.5) + 's"><span class="bub-av ' + (right ? 'r' : 'l') + '" aria-hidden="true">' + esc(m.who.charAt(0)) + '</span><div class="bub ' + (right ? 'r' : 'l') + '">' + (m.tag ? '<span class="bub-tag">' + esc(m.tag) + '</span>' : '') + '<span class="bub-who">' + esc(m.who) + '</span><div class="bub-main"><span class="bub-en">' + rich(m.en) + '</span>' + sayBtn(plain(m.en), 'inline') + '</div>' + (m.id ? '<small class="id">' + rich(m.id) + '</small>' : '') + '</div></div>';
    }).join('') + '</div>').join('');
  }
  function blocks(list, kp) {
    return list.map((b, bi) => {
      const bkey = kp + ':' + bi;
      if (b.t === 'text' && b.g) return '<div class="intro-g"><span class="xp-badge">Yuk mulai</span><p>' + b.html + '</p></div>';
      if (b.t === 'text') return '<p>' + b.html + '</p>';
      if (b.t === 'note') return '<div class="note">' + b.html + '</div>';
      if (b.t === 'phrases') {
        const pg = b.g && /^([A-Z])\.\s*(.+)$/.exec(b.title);
        if (pg) {
          return '<section class="card stack ph-g tone-' + b.g + '"><div class="ph-head"><span class="ph-letter">' + pg[1] + '</span><h3>' + esc(pg[2]) + '</h3></div><ul class="phr">' +
            b.items.map((it) => '<li>' + sayBtn(plain(it[0])) + '<div><span class="en">' + rich(it[0]) + '</span><span class="id">' + esc(it[1]) + '</span></div></li>').join('') + '</ul></section>';
        }
        return '<section class="card stack"><h3 style="font-size:20px">' + esc(b.title) + '</h3><ul class="phr">' +
          b.items.map((it) => '<li>' + sayBtn(plain(it[0])) + '<div><span class="en">' + rich(it[0]) + '</span><span class="id">' + esc(it[1]) + '</span></div></li>').join('') + '</ul></section>';
      }
      if (b.t === 'table' && b.g) return svCards(b);
      if (b.t === 'table' && b.adv) return wordChips(b);
      if (b.t === 'table' && b.flags) return duoTable(b);
      if (b.t === 'duonote') return duoNote(b);
      if (b.t === 'table') return tableSection(b, bkey);
      if (b.t === 'miniquiz') return mqHTML(bkey, b);
      if (b.t === 'explain') return explainHTML(b);
      if (b.t === 'key') return keyHTML(b);
      if (b.t === 'rolekey') return roleKeyHTML(b);
      if (b.t === 'formula') return formulaHTML(b);
      if (b.t === 'reveal') return revealHTML(b, bkey);
      if (b.t === 'clock') return clockSection(b, bkey);
      if (b.t === 'figure') return '<figure class="card stack fig"><h3 style="font-size:20px">' + esc(b.title) + '</h3><div class="fig-box">' + b.svg + '</div>' + (b.caption ? '<figcaption class="muted">' + b.caption + '</figcaption>' : '') + '</figure>';
      if (b.t === 'qa') {
        return '<section class="card stack"><h3 style="font-size:20px">' + esc(b.title) + '</h3>' + (b.hint ? '<p class="muted" style="font-size:15px">' + esc(b.hint) + '</p>' : '') +
          b.groups.map((g, gi) => '<details class="qa-group"' + (gi === 0 ? ' open' : '') + '><summary><span>' + esc(g.title) + '</span><small>' + g.items.length + ' pertanyaan</small></summary>' +
            g.items.map((it) => '<div class="qa"><div class="qa-q">' + sayBtn(it[0]) + '<div><span class="qa-tag">Tanya</span><b>' + esc(it[0]) + '</b><small class="id">' + esc(it[2]) + '</small></div></div>' +
              '<div class="qa-a">' + sayBtn(plain(it[1])) + '<div><span class="qa-tag">Jawab</span><b>' + rich(it[1]) + '</b></div></div></div>').join('') + (g.quiz ? mqHTML(bkey + ':g' + gi, g.quiz) : '') + '</details>').join('') + '</section>';
      }
      if (b.t === 'compare') {
        return '<section class="card stack"><h3 style="font-size:20px">' + esc(b.title) + '</h3><div class="cmp">' +
          b.cols.map((c) => '<div class="cmp-col ' + esc(c.tone) + '"><div class="cmp-head"><span class="cmp-badge">' + esc(c.label) + '</span><span class="muted" style="font-size:14px">' + esc(c.sub) + '</span></div>' +
            '<p class="cmp-sub">Dipakai saat</p><ul class="cmp-when">' + c.when.map((w) => '<li>' + esc(w) + '</li>').join('') + '</ul>' +
            (c.groups || []).map((g) => '<p class="cmp-sub">' + esc(g.title) + '</p><ul class="phr">' +
              g.items.map((it) => '<li>' + sayBtn(it[0]) + '<div><span class="en">' + esc(it[0]) + '</span><span class="id">' + esc(it[1]) + '</span></div></li>').join('') + '</ul>').join('') +
            (c.dialog ? chatScenes([{ title: c.dialog.title, msgs: c.dialog.lines.map((ln) => ({ who: ln[0] === 'A' ? 'Rina' : 'Budi', side: ln[0] === 'A' ? 'l' : 'r', en: ln[1], id: ln[2] })) }]) : '') +
            '</div>').join('') + '</div></section>';
      }
      if (b.t === 'entries') {
        return '<section class="card stack"><h3 style="font-size:20px">' + esc(b.title) + '</h3>' + b.items.map((it) => {
          const gnum = b.g && it.title && /^(\d+)\.\s*(.+)$/.exec(it.title);
          const head = it.title
            ? (gnum ? '<div class="ent-head g"><span class="ent-num">' + gnum[1] + '</span><div><span class="en">' + esc(gnum[2]) + '</span><span class="sub">' + rich(it.id) + '</span></div></div>' : '<div class="ent-head"><div><span class="en">' + esc(it.title) + '</span><span class="sub">' + rich(it.id) + '</span></div></div>')
            : '<div class="ent-head">' + sayBtn(it.en) + '<div><span class="en">' + esc(it.en) + '</span><span class="id">' + esc(it.id) + '</span></div></div>';
          const rows = it.spell ? [] : (it.rows || [['Dipakai saat', it.when], ['Jawaban', it.reply]]);
          return '<div class="ent' + (gnum ? ' g' + gnum[1] : '') + '">' + head + (it.spell ? spellHTML(it.spell) : '') + rows.map((r) => gnum && r[0] === 'Rumus' && fmlChips(r[1]) ? fmlChips(r[1]) : gnum && r[0] === 'Penjelasan' ? '<div class="ent-tip"><span class="ent-tip-ico" aria-hidden="true">💡</span><p>' + rich(r[1]) + '</p></div>' : r[0] === 'Rumus' ? '<p class="ent-row formula"><b>Rumus</b><span class="fml">' + String(r[1]).split('  |  ').map(rich).join('<br>') + '</span></p>' : '<p class="ent-row"><b>' + esc(r[0]) + '</b>' + rich(r[1]) + '</p>').join('') +
            '<p class="ent-row"><b>' + (it.flip ? 'Tebak dulu' : 'Contoh kalimat') + '</b>' + (it.flip ? '<span class="flip-hint">Lihat jamnya, ucapkan dalam bahasa Inggris, lalu ketuk baris atau tombol suara untuk mengecek.</span>' : '') + '</p><ul class="ent-ex">' + it.ex.map((x) => flipEx(it, x) || '<li>' + sayBtn(plain(x[0]), 'inline') + '<div><span class="en2">' + rich(x[0]) + '</span><span class="id">' + rich(x[1]) + '</span></div></li>').join('') + '</ul></div>';
        }).join('') + '</section>';
      }
      if (b.t === 'chat') {
        return '<section class="card stack chat-sec"><h3 style="font-size:20px">' + esc(b.title) + '</h3>' + (b.lead ? '<p class="muted">' + b.lead + '</p>' : '') +
          chatScenes(b.scenes) + (b.note ? '<p class="xp-note">' + b.note + '</p>' : '') + '</section>';
      }
      if (b.t === 'dialogs') {
        const NM = { A: 'Rina', B: 'Budi', T: 'Teacher', S: 'Student' };
        return '<section class="card stack chat-sec"><h3 style="font-size:20px">' + esc(b.title) + '</h3><p class="muted">Baca seperti membaca chat. Tekan ikon suara untuk mendengar tiap kalimat.</p>' +
          chatScenes(b.items.map((d) => ({ title: d.title, msgs: d.lines.map((ln) => ({ who: NM[ln[0]] || ln[0], side: dlgSide(d, ln[0]), en: ln[1], id: ln[2] })) }))) + '</section>';
      }
      if (b.t === 'fix') {
        const side = !!b.side;
        return '<section class="card stack"><h3 style="font-size:20px">' + esc(b.title) + '</h3>' + (b.hint ? '<p class="muted" style="font-size:15px">' + esc(b.hint) + '</p>' : '') +
          b.items.map((it) => {
            if (!side) {
              return '<div class="fix"><div class="fix-bad"><span class="fix-ico" aria-hidden="true">' + ICON.x(16) + '</span><span><span class="sr-only">Salah: </span><s>' + rich(it[0]) + '</s></span></div>' +
                '<div class="fix-good">' + sayBtn(plain(it[1])) + '<span><span class="sr-only">Benar: </span><b>' + rich(it[1]) + '</b></span></div>' +
                '<p class="fix-why">' + rich(it[2]) + '</p></div>';
            }
            const tm = /^(\d{1,2})[.:](\d{2})$/.exec(it[3] || '');
            return '<div class="fix fix-side">' +
              (tm ? '<div class="fix-time" aria-label="Pukul ' + esc(it[3]) + '">' + miniClock(Number(tm[1]), Number(tm[2])) + '<b class="fix-digital">' + esc(it[3]) + '</b></div>' : '') +
              '<div class="fix-pair">' +
              '<div class="fix-bad"><div class="fix-tag"><span class="fix-ico" aria-hidden="true">' + ICON.x(14) + '</span><span>Salah</span></div><s>' + rich(it[0]) + '</s></div>' +
              '<div class="fix-good"><div class="fix-tag"><span>Benar</span>' + sayBtn(plain(it[1])) + '</div><b>' + rich(it[1]) + '</b></div></div>' +
              '<p class="fix-why">' + rich(it[2]) + '</p></div>';
          }).join('') + '</section>';
      }
      if (b.t === 'chips') {
        return '<section class="card stack"><h3 style="font-size:20px">' + esc(b.title) + '</h3><div class="chips">' +
          b.items.map((it) => {
            const ip = it[2] ? ipaOf(it[2]) : '';
            return '<button type="button" class="letter" data-act="letter" data-l="' + esc(it[0]) + '" aria-label="Huruf ' + esc(it[0]) + ', dibaca ' + esc(it[1]) + (ip ? ', simbol bunyi ' + esc(ip) : '') + '">' + esc(it[0]) + '<small>' + esc(it[1]) + '</small>' +
              (it[2] ? '<span class="ipa" data-ipa="' + esc(JSON.stringify(it[2])) + '">' + esc(ip) + '</span>' : '') + '</button>';
          }).join('') + '</div>' + (b.note ? '<p class="ipa-note">' + rich(b.note) + '</p>' : '') + '</section>';
      }
      if (b.t === 'wordlist') {
        return '<section class="card stack"><h3 style="font-size:20px">' + esc(b.title) + '</h3><div class="words">' +
          b.items.map((w) => '<span class="word"><button type="button" class="say" data-act="spell" data-w="' + esc(w) + '" aria-label="Dengarkan ejaan ' + esc(w) + '">' + ICON.sound(16) + '</button>' + esc(w) + '</span>').join('') + '</div></section>';
      }
      return '';
    }).join('');
  }

  /* ---------- halaman pelajaran ---------- */
  let P = null; // keadaan latihan yang sedang dibuka
  function resetP(id, key) {
    P = { enter: true, id: id, key: key, exIdx: 0, status: null, picked: null, value: '', placed: [], results: [], states: {}, mq: {}, cards: {}, clock: {}, rv: {}, fs: {}, summary: false, complete: false };
  }
  function lockedView(lesson, why) {
    const title = lessonTitle(lesson);
    if (why === 'login') {
      return header(['pelajaran']) + '<main id="main" class="page narrow"><div class="card card-shadow stack lock-card"><h1 id="main-title" tabindex="-1" style="font-size:26px">' + unitOf(lesson) + ' ' + lesson.no + ': ' + esc(title) + '</h1>' +
        '<p>Pelajaran ini gratis, tapi butuh akun supaya kemajuanmu tersimpan.</p><div class="btn-row" style="justify-content:center"><a class="btn btn-primary" href="#masuk-' + lesson.id + '">Buat akun gratis</a><a class="btn" href="#beranda">Kembali</a></div></div></main>' + FOOT;
    }
    return header(['pelajaran']) + '<main id="main" class="page narrow"><div class="card card-shadow stack lock-card"><span class="chip chip-yellow">' + ICON.lock(14) + 'Premium</span>' +
      '<h1 id="main-title" tabindex="-1" style="font-size:26px">' + unitOf(lesson) + ' ' + lesson.no + ': ' + esc(title) + '</h1>' +
      '<p>Pelajaran ini bagian dari course premium. Harga: <strong>' + PLACEHOLDER_PRICE + '</strong> sekali bayar.</p>' +
      '<div class="btn-row" style="justify-content:center"><a class="btn btn-primary" href="#beli">Beli course</a><a class="btn" href="' + courseOf(lesson).hash + '">Kembali ke daftar pelajaran</a></div>' +
      '<p class="notice">Hanya untuk pengujian di komputer ini: kamu bisa membuka semua pelajaran premium lewat <a href="#data" style="text-decoration:underline">Data saya</a>.</p></div></main>' + FOOT;
  }

  /* soal isian beruntun: beberapa kalimat dalam satu halaman, dijawab dari atas ke bawah */
  function fsState(i) { return P.fs[i] || (P.fs[i] = { v: [], st: [], first: [] }); }
  function fsSync() {
    const fs = fsState(P.exIdx);
    document.querySelectorAll('.fs-input').forEach((inp) => { fs.v[Number(inp.getAttribute('data-i'))] = inp.value; });
  }
  /* soal listening: tombol putar, putar pelan, dan pilihan aksen */
  const SLOW_RATE = 0.5;
  function listenRow(word) {
    const w = esc(word);
    return '<div class="q-listen"><button type="button" class="listen-btn" data-act="spellx" data-w="' + w + '" aria-label="Putar ejaan">' + ICON.sound(22) + '<span>Putar ejaan</span></button>' +
      '<button type="button" class="listen-btn slow" data-act="spellslow" data-w="' + w + '" aria-label="Putar ejaan lebih pelan"><span aria-hidden="true">🐢</span><span>Pelan</span></button></div>';
  }
  function accentToggle() {
    const acc = accentKey();
    return '<div class="acc-row" role="group" aria-label="Pilih aksen suara"><span class="acc-lbl">Aksen suara:</span>' +
      Object.keys(ACCENTS).map((k) => '<button type="button" class="acc-btn" data-act="qAccent" data-v="' + k + '" aria-pressed="' + (k === acc ? 'true' : 'false') + '"><span class="acc-flag" aria-hidden="true">' + FLAG[k] + '</span>' + (k === 'us' ? 'Amerika' : 'British') + '</button>').join('') + '</div>';
  }
  function listenWhy(word) {
    const L = String(word).toUpperCase().split('').filter((c) => LETTER_SOUND[c]);
    return 'Kata <strong>' + esc(String(word).toLowerCase()) + '</strong>: ' + L.join(' - ') + ', dibaca ' + ipaSpan(word) + '.';
  }
  function qLabel(n, part) {
    return '<p class="q-label"><span class="q-no">Soal ' + (P.exIdx + 1) + ' dari ' + n + '</span>' + (part ? '<span class="q-sep"> · </span><span class="q-part">' + esc(part) + '</span>' : '') + '</p>';
  }
  function exDots(n) {
    let d = '';
    for (let i = 0; i < n; i++) d += '<i class="' + (i < P.exIdx ? 'done' : (i === P.exIdx ? 'now' : '')) + '"></i>';
    return '<div class="ex-dots" aria-hidden="true">' + d + '</div>';
  }
  function fillsetView(lesson, src, ex) {
    const n = lesson[src].length;
    const fs = fsState(P.exIdx);
    const enter = P.enter; P.enter = false;
    const total = ex.items.length;
    const answeredN = ex.items.filter((_, i) => fs.first[i] !== undefined).length;
    const allDone = answeredN === total;
    const items = ex.items.map((it, i) => {
      const st = fs.st[i] || '';
      const ro = st ? ' readonly' : '';
      const whyHtml = it.spell && !it.why ? listenWhy(it.spell) : rich(it.why);
      let tail = '';
      if (!st) tail = '<div><button type="button" class="btn" data-act="fsCheck" data-i="' + i + '">Periksa</button></div>';
      else if (st === 'right') tail = '<div class="feedback right" role="status"><h3>Tepat!</h3><p>' + whyHtml + '</p></div>';
      else tail = '<div class="feedback wrong" role="status"><h3>Belum tepat.</h3><p>Jawaban yang benar: <strong>' + esc((it.before ? it.before + ' ' : '') + it.answers[0] + (it.after ? ' ' + it.after : '')) + '</strong></p><p>' + whyHtml + '</p></div>' +
        '<div class="btn-row"><button type="button" class="btn" data-act="fsRetry" data-i="' + i + '">Ulangi kalimat ini</button></div>';
      return '<li class="fs-item ' + st + '"><p class="fs-q"><span class="fs-n">' + (i + 1) + '</span>' + esc(it.q || 'Kata apa yang dieja?') + '</p>' + (it.spell ? listenRow(it.spell) : '') +
        '<div class="fill"><span>' + esc(it.before || '') + '</span><input class="fs-input" type="text" data-i="' + i + '" aria-label="Jawaban kalimat nomor ' + (i + 1) + '" autocomplete="off" autocapitalize="none" spellcheck="false" value="' + esc(fs.v[i] || '') + '"' + ro + '><span>' + esc(it.after || '') + '</span></div>' + tail + '</li>';
    }).join('');
    const lastQ = P.exIdx === n - 1;
    const nav = '<div class="ex-nav"><button type="button" class="btn" data-act="prevEx"' + (P.exIdx === 0 ? ' disabled' : '') + ' aria-label="Soal sebelumnya">' + ICON.back(18) + ' Kembali</button>' +
      '<button type="button" class="btn' + (allDone ? ' btn-primary' : '') + '" data-act="nextEx" aria-label="' + (lastQ ? 'Lihat hasil' : 'Soal berikutnya') + '">' + (lastQ ? 'Lihat hasil' : 'Lanjut') + ' ' + ICON.next(18) + '</button></div>';
    return '<section class="card card-shadow stack ext' + (P.exIdx % 4) + (enter ? ' q-enter' : '') + '" aria-labelledby="qtext">' + exDots(n) + qLabel(n, ex.part) + '<p id="qtext" class="q-text">' + esc(ex.q) + '</p>' +
      (ex.listen ? accentToggle() : '') + '<p class="fs-prog" aria-live="polite">Terjawab ' + answeredN + ' dari ' + total + (ex.listen ? ' kata' : ' kalimat') + '</p><ol class="fs-list">' + items + '</ol>' + nav + '</section>';
  }

  function exView(lesson, src) {
    const exs = lesson[src];
    const ex = exs[P.exIdx];
    if (ex.type === 'fillset') return fillsetView(lesson, src, ex);
    const n = exs.length;
    const seedBase = lesson.id + ':' + src + ':' + P.exIdx;
    let body = '';
    const answered = P.status !== null;
    const enter = P.enter; P.enter = false;

    if (ex.type === 'mc') {
      const order = shuffledIdx(ex.options.length, seedBase, false);
      const longOpt = ex.options.some((o) => String(o).length > 18);
      body = '<div class="opts mq-opts n' + ex.options.length + (longOpt ? ' long' : '') + '" role="group" aria-label="Pilihan jawaban">' + order.map((oi, pos) => {
        let cls = 'opt'; let tag = '';
        if (answered) {
          if (oi === ex.answer) { cls += ' right'; tag = '<span class="tag">' + ICON.check(16) + 'Jawaban yang benar</span>'; }
          else if (oi === P.picked) { cls += ' wrong'; tag = '<span class="tag">' + ICON.x(16) + 'Belum tepat</span>'; }
          else cls += ' dim';
        }
        return '<button type="button" class="' + cls + '" data-act="choose" data-i="' + oi + '"' + (answered ? ' disabled' : '') + '><span class="opt-t"><i class="opt-l" aria-hidden="true">' + String.fromCharCode(65 + pos) + '</i><span>' + esc(ex.options[oi]) + '</span></span>' + tag + '</button>';
      }).join('') + '</div>';
    } else if (ex.type === 'fill') {
      body = '<div class="fill"><span>' + esc(ex.before || '') + '</span><label class="sr-only" for="fill-input">Jawabanmu</label><input id="fill-input" type="text" autocomplete="off" autocapitalize="none" spellcheck="false" value="' + esc(P.value) + '"' + (answered ? ' readonly' : '') + '><span>' + esc(ex.after || '') + '</span></div>' +
        (answered ? '' : '<div><button type="button" class="btn" data-act="check">Periksa</button></div>');
    } else if (ex.type === 'order') {
      const ord = shuffledIdx(ex.tokens.length, seedBase, true);
      const bank = ord.filter((ti) => P.placed.indexOf(ti) < 0);
      body = '<div><p class="q-label" style="margin-bottom:6px">Jawabanmu (tekan kata untuk mengeluarkannya)</p><div class="answer-zone" aria-live="polite">' +
        (P.placed.length ? P.placed.map((ti, pos) => '<button type="button" class="tok placed" data-act="unpick" data-pos="' + pos + '"' + (answered ? ' disabled' : '') + '>' + esc(ex.tokens[ti]) + '</button>').join('') : '<span class="muted" style="padding:0 8px">Tekan kata di bawah, sesuai urutan.</span>') +
        '</div></div><div><p class="q-label" style="margin-bottom:6px">Pilihan kata</p><div class="chips">' +
        bank.map((ti) => '<button type="button" class="tok" data-act="pick" data-t="' + ti + '"' + (answered ? ' disabled' : '') + '>' + esc(ex.tokens[ti]) + '</button>').join('') + '</div></div>' +
        (answered ? '' : '<div class="btn-row"><button type="button" class="btn" data-act="check">Periksa</button><button type="button" class="btn btn-flat" data-act="clear">Hapus semua</button></div>');
    }

    let fb = '';
    if (answered) {
      const right = P.status === 'right';
      let correctText = '';
      if (!right) {
        if (ex.type === 'mc') correctText = ex.options[ex.answer];
        else if (ex.type === 'fill') correctText = (ex.before ? ex.before + ' ' : '') + ex.answers[0] + (ex.after ? ' ' + ex.after : '');
        else correctText = ex.answer;
      }
      const last = P.exIdx === n - 1;
      fb = '<div id="feedback" tabindex="-1" class="feedback ' + (right ? 'right' : 'wrong') + '" role="status"><h3>' + (right ? 'Tepat!' : 'Belum tepat.') + '</h3>' +
        (right ? '' : '<p>Jawaban yang benar: <strong>' + esc(correctText) + '</strong></p>') + '<p>' + rich(ex.why) + '</p></div>' +
        (right ? '' : '<div class="btn-row"><button type="button" class="btn" data-act="retry">Ulangi soal ini</button></div>');
    }
    const lastQ = P.exIdx === n - 1;
    fb += '<div class="ex-nav"><button type="button" class="btn" data-act="prevEx"' + (P.exIdx === 0 ? ' disabled' : '') + ' aria-label="Soal sebelumnya">' + ICON.back(18) + ' Kembali</button>' +
      '<button type="button" class="btn' + (answered ? ' btn-primary' : '') + '" data-act="nextEx" aria-label="' + (lastQ ? 'Lihat hasil' : 'Soal berikutnya') + '">' + (lastQ ? 'Lihat hasil' : 'Lanjut') + ' ' + ICON.next(18) + '</button></div>';
    return '<section class="card card-shadow stack ext' + (P.exIdx % 4) + (ex.type === 'mc' ? ' exq' : '') + (enter ? ' q-enter' : '') + '" aria-labelledby="qtext">' + exDots(n) + qLabel(n, ex.part) + '<p id="qtext" class="q-text">' + esc(ex.q) + '</p>' + (ex.say ? '<p class="ex-listen">' + sayX(ex.say) + '<span class="muted">Putar kalimatnya</span></p>' : '') +
      (ex.spell ? accentToggle() + listenRow(ex.spell) : '') + body + fb + '</section>';
  }

  function summaryView(lesson, step) {
    const right = P.results.filter(Boolean).length;
    const total = lesson[step.src].length;
    const good = right / total >= 0.8;
    const isLast = step.key === 'ulas';
    return '<section class="card card-shadow stack sum-g" aria-labelledby="hasil"><h2 id="hasil" style="font-size:22px">Hasil ' + step.label.toLowerCase() + '</h2><p class="score">' + right + ' dari ' + total + '</p>' +
      '<p>' + (good ? 'Mantap! Kamu sudah menguasai bagian ini.' : 'Bagus, kamu sudah mencoba. Ulangi sekali lagi supaya makin lancar, atau lanjut kalau sudah merasa cukup.') + '</p>' +
      '<div class="btn-row"><button type="button" class="btn" data-act="redo">Ulangi dari awal</button><button type="button" class="btn btn-primary" data-act="finishEx">' + (isLast ? 'Selesaikan pelajaran' : 'Lanjut: ' + STEPS[STEPS.indexOf(step) + 1].label) + '</button></div></section>';
  }

  function completeView(lesson) {
    const p = prog(lesson.id);
    const cc = courseOf(lesson);
    const idx = cc.lessons.indexOf(lesson);
    const nextL = cc.lessons[idx + 1];
    const sc = p.scores || {};
    const u = user();
    let nextBtn = '';
    if (nextL) {
      const g = gate(nextL);
      if (!g) nextBtn = '<a class="btn btn-primary" href="#pelajaran-' + nextL.id + '">Lanjut ke ' + cc.unit.toLowerCase() + ' ' + nextL.no + '</a>';
      else if (g === 'login') nextBtn = '<a class="btn btn-primary" href="#masuk-' + nextL.id + '">Buat akun gratis untuk lanjut</a>';
      else nextBtn = '<a class="btn btn-primary" href="#beli">Buka pelajaran berikutnya</a>';
    }
    return '<section class="card card-shadow stack lock-card"><h2 id="main-title" tabindex="-1" style="font-size:28px">' + cc.unit + ' ' + lesson.no + ' selesai!</h2>' +
      '<p>Nilai latihan: <strong>' + (sc.latihan ? sc.latihan.right + ' dari ' + sc.latihan.total : '-') + '</strong>. Nilai ulas: <strong>' + (sc.ulas ? sc.ulas.right + ' dari ' + sc.ulas.total : '-') + '</strong>.</p>' +
      (u ? '' : '<p class="notice">Kemajuanmu belum tersimpan karena belum masuk. Buat akun gratis supaya tersimpan di komputer ini.</p>') +
      '<div class="btn-row" style="justify-content:center">' + nextBtn + (u ? '<a class="btn" href="' + cc.hash + '">Kembali ke daftar pelajaran</a>' : '<a class="btn" href="#masuk">Buat akun gratis</a>') + '</div></section>';
  }

  function lessonView(id, keyParam) {
    const lesson = lessonById(id);
    if (!lesson) { location.replace('#dashboard'); return ''; }
    const g = gate(lesson);
    if (g) return lockedView(lesson, g);
    const key = STEPS.some((s) => s.key === keyParam) ? keyParam : stepFirstUndone(lesson);
    if (!P || P.id !== id || P.key !== key) resetP(id, key);
    const step = STEPS.find((s) => s.key === key);
    const si = STEPS.indexOf(step);
    const p = prog(id);
    const reach = (i) => i <= si || i === 0 || !!p.stepsDone[STEPS[i].key] || !!p.stepsDone[STEPS[i - 1].key];
    const seg = '<nav class="seg" aria-label="Langkah pelajaran">' + STEPS.map((s, i) => {
      const cls = i === si ? 'now' : (p.stepsDone[s.key] ? 'done' : '');
      const state = i === si ? ', sedang dibuka' : (p.stepsDone[s.key] ? ', sudah selesai' : (reach(i) ? '' : ', belum terbuka'));
      const lab = 'Langkah ' + (i + 1) + ': ' + s.label + state;
      if (i === si) return '<span class="seg-i ' + cls + ' now-cur" role="img" aria-label="' + lab + '" title="' + s.label + '"><i></i></span>';
      return reach(i)
        ? '<a class="seg-i ' + cls + '" href="#pelajaran-' + lesson.id + '-' + s.key + '" aria-label="' + lab + '" title="' + s.label + '"><i></i></a>'
        : '<span class="seg-i off" role="img" aria-label="' + lab + '" title="Selesaikan langkah sebelumnya dulu"><i></i></span>';
    }).join('') + '</nav>';
    const arrow = (dir, i) => {
      const ok = i >= 0 && i < STEPS.length && reach(i);
      const lab = dir === 'prev' ? 'Langkah sebelumnya' : 'Langkah berikutnya';
      const ico = dir === 'prev' ? ICON.back(20) : ICON.next(20);
      return ok ? '<a class="step-arrow" href="#pelajaran-' + lesson.id + '-' + STEPS[i].key + '" aria-label="' + lab + ': ' + STEPS[i].label + '" title="' + STEPS[i].label + '">' + ico + '</a>'
        : '<span class="step-arrow off" role="img" aria-label="' + lab + ' belum tersedia">' + ico + '</span>';
    };
    const stepRow = '<div class="step-row">' + arrow('prev', si - 1) + '<p class="step-label">Langkah ' + (si + 1) + ' dari 5: <strong>' + step.label + '</strong></p>' + arrow('next', si + 1) + '</div>';
    const head = '<div class="lesson-head"><a class="back" href="' + (user() ? courseOf(lesson).hash : '#beranda') + '" aria-label="Kembali ke daftar pelajaran">' + ICON.back(22) + '</a><div><p class="muted" style="font-size:14px">' + unitOf(lesson) + ' ' + lesson.no + '</p><h1 id="main-title" tabindex="-1" style="font-size:22px">' + esc(lesson.title) + '</h1></div><button type="button" class="sfx-btn" data-act="toggleSound" aria-pressed="' + (soundOn() ? 'true' : 'false') + '" aria-label="Efek suara jawaban: ' + (soundOn() ? 'hidup' : 'mati') + '" title="Efek suara jawaban">' + (soundOn() ? ICON.sound(20) : ICON.mute(20)) + '</button></div>' +
      seg + stepRow + '<div id="heard-bar" class="heard-bar" hidden></div><div id="audio-bar" class="audio-bar" hidden></div><div id="study-bar" class="study-bar" hidden></div>';
    let main = '';
    if (P.complete) {
      main = completeView(lesson);
    } else if (step.src === 'learn' || step.src === 'understand') {
      main = '<div class="stack">' + blocks(lesson[step.src], lesson.id + ':' + step.key) + '</div>' + stepNav(si, STEPS[si + 1]);
    } else if (step.src === 'practice' || step.src === 'review') {
      main = P.summary ? summaryView(lesson, step) : exView(lesson, step.src);
    } else if (step.src === 'apply') {
      const a = lesson.apply;
      main = '<section class="card card-shadow stack" aria-labelledby="tugas"><h2 id="tugas" style="font-size:20px">Baca dengan suara <span class="beta-tag">Percobaan</span></h2><p>' + esc(a.prompt) + '</p><p class="beta-note">Koreksi suara masih tahap percobaan dan hasilnya hanya perkiraan. Kalau suaramu tidak terbaca, coba lagi atau tandai sendiri bahwa kamu sudah membaca. Pelajaran tetap bisa kamu selesaikan.</p><div id="rd-root">' + rdHTML(lesson) + '</div></section>' + stepNav(si, STEPS[si + 1]);
    }
    return header(['pelajaran']) + '<main id="main" class="page narrow">' + head + main + '</main>' + FOOT;
  }
  function stepNav(si, nextStep) {
    return '<div class="btn-row">' + (si > 0 ? '<button type="button" class="btn" data-act="prevStep">Kembali</button>' : '') +
      '<button type="button" class="btn btn-primary" data-act="nextStep">Lanjut: ' + nextStep.label + '</button></div>';
  }

  /* ---------- Praktikkan: baca dengan suara, dikoreksi otomatis (perkiraan) ---------- */
  const SR_CTOR = () => window.SpeechRecognition || window.webkitSpeechRecognition || null;
  const NUMW = { '0': 'zero', '1': 'one', '2': 'two', '3': 'three', '4': 'four', '5': 'five', '6': 'six', '7': 'seven', '8': 'eight', '9': 'nine', '10': 'ten', '11': 'eleven', '12': 'twelve', '13': 'thirteen', '14': 'fourteen', '15': 'fifteen', '16': 'sixteen', '17': 'seventeen', '18': 'eighteen', '19': 'nineteen', '20': 'twenty', '30': 'thirty', '40': 'forty', '50': 'fifty' };
  const CONTR = { "i'm": 'i am', "don't": 'do not', "it's": 'it is', "that's": 'that is', "what's": 'what is', "let's": 'let us', "can't": 'cannot', "didn't": 'did not', "doesn't": 'does not', "isn't": 'is not', "aren't": 'are not', "you're": 'you are', "we're": 'we are', "they're": 'they are', "he's": 'he is', "she's": 'she is', "there's": 'there is', "i'll": 'i will', "won't": 'will not', "couldn't": 'could not', "wouldn't": 'would not', "wasn't": 'was not', "how's": 'how is', "what's": 'what is' };
  /* kalimat menjadi daftar kata baku (huruf kecil, tanpa tanda baca, singkatan dan angka disamakan) */
  function normWords(s) {
    const out = [];
    String(s).toLowerCase().replace(/[‘’]/g, "'").replace(/(\d+):(\d+)/g, '$1 $2').replace(/[^a-z0-9' -]/g, ' ').replace(/-/g, ' ').split(/\s+/).forEach((w) => {
      w = w.replace(/^'+|'+$/g, '');
      if (!w) return;
      if (CONTR[w]) { CONTR[w].split(' ').forEach((x) => out.push(x)); return; }
      out.push(NUMW[w] || w);
    });
    return out;
  }
  function editDist(a, b) {
    const m = a.length; const n = b.length; let prev = []; for (let j = 0; j <= n; j++) prev[j] = j;
    for (let i = 1; i <= m; i++) {
      const cur = [i];
      for (let j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = cur;
    }
    return prev[n];
  }
  function isNear(a, b) {
    if (a === b) return false;
    const L = Math.max(a.length, b.length);
    if (L < 4) return false;
    const d = editDist(a, b);
    return d <= 1 || (L >= 8 && d <= 2) || a + 's' === b || b + 's' === a;
  }
  /* mensejajarkan kata target dengan kata yang terdengar: ok, near (mirip), bad (terdengar kata lain), miss (tidak terdengar) */
  function alignWords(T, H) {
    const n = T.length; const m = H.length; const INS = 0.6; const DEL = 1;
    const D = []; const B = [];
    for (let i = 0; i <= n; i++) { D[i] = new Array(m + 1).fill(0); B[i] = new Array(m + 1).fill(''); }
    for (let i = 1; i <= n; i++) { D[i][0] = i * DEL; B[i][0] = 'd'; }
    for (let j = 1; j <= m; j++) { D[0][j] = j * INS; B[0][j] = 'i'; }
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= m; j++) {
        const c = T[i - 1] === H[j - 1] ? 0 : (isNear(T[i - 1], H[j - 1]) ? 0.4 : 1);
        const dg = D[i - 1][j - 1] + c; const dl = D[i - 1][j] + DEL; const ins = D[i][j - 1] + INS;
        if (dg <= dl && dg <= ins) { D[i][j] = dg; B[i][j] = 'g'; } else if (dl <= ins) { D[i][j] = dl; B[i][j] = 'd'; } else { D[i][j] = ins; B[i][j] = 'i'; }
      }
    }
    const res = new Array(n); let i = n; let j = m;
    while (i > 0 || j > 0) {
      const b = B[i][j];
      if (b === 'g') {
        const t = T[i - 1]; const h = H[j - 1];
        res[i - 1] = t === h ? { st: 'ok' } : (isNear(t, h) ? { st: 'near', heard: h } : { st: 'bad', heard: h });
        i--; j--;
      } else if (b === 'd') { res[i - 1] = { st: 'miss' }; i--; } else { j--; }
    }
    return res;
  }
  function rdTokens(sentence) {
    return String(sentence).split(/\s+/).filter(Boolean).map((t) => ({ t: t, n: normWords(t) }));
  }
  /* nilai token = yang terburuk dari bagian-bagiannya; skor kalimat dihitung per kata baku */
  function rdApply(tokens, heardText, onlyIdx) {
    const idxs = onlyIdx === undefined ? tokens.map((_, k) => k) : [onlyIdx];
    const T = []; const own = [];
    idxs.forEach((k) => tokens[k].n.forEach((w) => { T.push(w); own.push(k); }));
    const al = alignWords(T, normWords(heardText));
    const rank = { ok: 0, near: 1, bad: 2, miss: 3 };
    idxs.forEach((k) => { tokens[k].st = tokens[k].n.length ? 'ok' : 'skip'; tokens[k].heard = ''; });
    al.forEach((r, x) => {
      const tk = tokens[own[x]];
      if (tk.st === 'skip' || rank[r.st] > rank[tk.st] || (r.st === tk.st && !tk.heard && r.heard)) { tk.st = r.st; tk.heard = r.heard || ''; }
    });
  }
  function rdScore(tokens) {
    let tot = 0; let sum = 0;
    tokens.forEach((tk) => { const w = tk.n.length; if (!w) return; tot += w; if (tk.st === 'ok') sum += w; else if (tk.st === 'near') sum += w * 0.5; });
    return tot ? Math.round((sum / tot) * 100) : 0;
  }
  const rdLevel = (pc) => (pc >= 85 ? ['good', 'Bagus! Hampir semua katamu terbaca jelas.'] : pc >= 60 ? ['mid', 'Hampir tepat. Ulangi bagian yang bertanda.'] : ['low', 'Belum terbaca jelas. Dengarkan contoh, lalu coba lagi pelan-pelan.']);
  const MIC = (s) => svg('<rect x="9" y="3" width="6" height="11" rx="3"></rect><path d="M5 11a7 7 0 0 0 14 0M12 18v3"></path>', s);
  const STOP = (s) => svg('<rect x="6" y="6" width="12" height="12" rx="2"></rect>', s);
  const RD = { rec: null, active: null, res: {}, msg: {}, ask: null, timer: null, lesson: null };

  function rdAbort() {
    clearTimeout(RD.timer);
    if (RD.rec) { const r = RD.rec; RD.rec = null; try { r.onend = null; r.onerror = null; r.onresult = null; r.abort ? r.abort() : r.stop(); } catch (e) { /* abaikan */ } }
    RD.active = null;
  }
  function rdSaveScore(lesson, i, pc, newAttempt) {
    const p = prog(lesson.id);
    if (!p.apply.reads) p.apply.reads = {};
    const r = p.apply.reads[i] || { attempts: 0, best: null };
    if (newAttempt) r.attempts = (r.attempts || 0) + 1;
    r.best = Math.max(r.best || 0, pc);
    p.apply.reads[i] = r; save();
  }
  function rdErrText(code) {
    if (code === 'not-allowed' || code === 'service-not-allowed') return 'Mikrofon belum diizinkan. Tekan ikon gembok di kolom alamat, izinkan mikrofon, lalu coba lagi.';
    if (code === 'no-speech') return 'Suaramu tidak terdengar. Dekatkan mikrofon dan coba lagi.';
    if (code === 'audio-capture') return 'Mikrofon tidak ditemukan di perangkat ini.';
    if (code === 'network') return 'Pengenalan suara butuh internet. Periksa koneksimu lalu coba lagi.';
    if (code === 'aborted') return '';
    return 'Pengenalan suara gagal. Coba lagi sebentar lagi.';
  }
  function rdStart(i, k) {
    const lesson = lessonById(P.id); const Ctor = SR_CTOR();
    if (!Ctor) { toast('Browser ini belum mendukung pengenalan suara.'); return; }
    if (!DB.micAck) { RD.ask = { i: i, k: k }; rdRender(); return; }
    rdAbort();
    stopAudio(); try { if (hasTTS()) window.speechSynthesis.cancel(); } catch (e) { /* abaikan */ }
    const sentence = lesson.apply.lines[i][0];
    if (!RD.res[i]) RD.res[i] = { tokens: rdTokens(sentence), score: null, heardText: '' };
    const r = new Ctor();
    r.lang = ACCENTS[accentKey()].lang; r.interimResults = false; r.maxAlternatives = 1; r.continuous = false;
    let got = false; let err = '';
    r.onresult = (e) => {
      got = true;
      let text = '';
      try { text = e.results[0][0].transcript; } catch (x) { text = ''; }
      const res = RD.res[i];
      rdApply(res.tokens, text, k);
      res.heardText = text; res.score = rdScore(res.tokens);
      rdSaveScore(lesson, i, res.score, k === undefined);
      RD.msg[i] = '';
    };
    r.onerror = (e) => { err = e && e.error ? e.error : 'error'; };
    r.onend = () => {
      clearTimeout(RD.timer);
      if (RD.rec === r) { RD.rec = null; RD.active = null; }
      if (!got) {
        const inFrame = (function () { try { return window.self !== window.top; } catch (e) { return true; } })();
        const blocked = !err || err === 'not-allowed' || err === 'service-not-allowed';
        RD.msg[i] = inFrame && blocked ? 'Halaman ini sedang ditampilkan di dalam pratinjau, dan pratinjau memblokir mikrofon. Fitur Rekam baru bisa dipakai kalau website dibuka langsung di Chrome.' : (rdErrText(err) || 'Suaramu belum terbaca. Coba lagi.');
      }
      rdRender();
    };
    RD.rec = r; RD.active = { i: i, k: k }; RD.msg[i] = '';
    try { r.start(); } catch (e) { RD.rec = null; RD.active = null; RD.msg[i] = 'Pengenalan suara belum bisa dimulai. Coba lagi.'; }
    RD.timer = setTimeout(() => { try { r.stop(); } catch (e) { /* abaikan */ } }, 15000);
    rdRender();
  }
  function rdWordCls(tk) { return tk.st ? ' w-' + tk.st : ''; }
  function rdHTML(lesson) {
    const a = lesson.apply; const p = prog(lesson.id); const reads = (p.apply && p.apply.reads) || {};
    const sup = !!SR_CTOR();
    let done = 0; let sum = 0; let cnt = 0;
    a.lines.forEach((ln, i) => { const r = reads[i]; if (r) { done++; if (typeof r.best === 'number') { sum += r.best; cnt++; } } });
    const sumLine = '<p class="rd-sum" aria-live="polite"><strong>' + done + ' dari ' + a.lines.length + '</strong> kalimat sudah dibaca' + (cnt ? ' · rata-rata terbaik <strong>' + Math.round(sum / cnt) + '%</strong>' : '') + '</p>';
    const info = '<div class="note rd-info"><strong>Cara kerjanya:</strong> dengarkan contoh, tekan <b>Rekam</b>, lalu baca satu kalimat. Browser mengubah suaramu menjadi teks, dan kata yang tidak cocok diberi tanda. Hasilnya <strong>perkiraan</strong>, bukan penilaian guru. Suaramu dikirim ke layanan pengenalan suara milik browser (di Chrome: Google). Kami tidak menyimpan rekamanmu, hanya skor di browser ini.</div>';
    const warn = sup ? '' : '<div class="note rd-warn"><strong>Browser ini belum mendukung pengenalan suara.</strong> Buka di Chrome, Edge, atau Safari untuk koreksi otomatis. Untuk sekarang, dengarkan contoh, baca keras-keras, lalu tekan <b>Sudah kubaca</b>.</div>';
    const items = a.lines.map((ln, i) => {
      const res = RD.res[i]; const best = reads[i] && typeof reads[i].best === 'number' ? reads[i].best : null;
      const active = RD.active && RD.active.i === i;
      const words = (res ? res.tokens : rdTokens(ln[0])).map((tk, k) => '<span class="rd-w' + rdWordCls(tk) + '">' + esc(tk.t) + (tk.st && tk.st !== 'ok' && tk.st !== 'skip' ? '<span class="sr-only"> (' + (tk.st === 'near' ? 'hampir' : 'kurang jelas') + ')</span>' : '') + '</span>').join(' ');
      let ctl = '<div class="rd-ctl">' + sayBtn(ln[0]) + '<button type="button" class="rd-slow" data-act="rdSlow" data-text="' + esc(ln[0]) + '" aria-label="Dengarkan pelan"><span aria-hidden="true">🐢</span> Pelan</button>';
      if (sup) ctl += active && RD.active.k === undefined
        ? '<button type="button" class="rd-rec on" data-act="rdStop" aria-pressed="true">' + STOP(18) + ' Berhenti</button>'
        : '<button type="button" class="rd-rec" data-act="rdRec" data-i="' + i + '" aria-pressed="false">' + MIC(18) + ((res && res.score !== null) || best !== null ? ' Rekam lagi' : ' Rekam') + '</button>';
      else ctl += '<button type="button" class="rd-rec manual' + (reads[i] ? ' done' : '') + '" data-act="rdManual" data-i="' + i + '" aria-pressed="' + (reads[i] ? 'true' : 'false') + '">' + (reads[i] ? '✓ Sudah kubaca' : 'Sudah kubaca') + '</button>';
      ctl += '</div>';
      let status = '';
      if (active) status = '<p class="rd-status listening" role="status">' + (RD.active.k === undefined ? 'Mendengarkan… baca kalimat di atas.' : 'Mendengarkan… ucapkan kata yang dicoba.') + '</p>';
      else if (RD.msg[i]) status = '<p class="rd-status err" role="status">' + esc(RD.msg[i]) + '</p>';
      let result = '';
      if (res && res.score !== null && !active) {
        const lv = rdLevel(res.score);
        const probs = res.tokens.map((tk, k) => ({ tk: tk, k: k })).filter((x) => x.tk.st && x.tk.st !== 'ok' && x.tk.st !== 'skip');
        result = '<div class="rd-result ' + lv[0] + '"><p class="rd-score"><b>' + res.score + '%</b> ' + esc(lv[1]) + '</p>' +
          '<p class="rd-heard">Yang terdengar: <i>“' + esc(res.heardText || '…') + '”</i></p>' +
          (probs.length ? '<ul class="rd-fix">' + probs.map((x) => {
            const w = x.tk.t.replace(/[.,!?;:"“”]/g, '');
            const detail = x.tk.st === 'miss' ? 'tidak terdengar' : 'terdengar: “' + esc(x.tk.heard) + '”';
            const wordOn = RD.active && RD.active.i === i && RD.active.k === x.k;
            return '<li><span class="rd-fw"><b>' + esc(w) + '</b> <span class="muted">' + detail + '</span></span><span class="rd-fb">' + sayBtn(w) +
              '<button type="button" class="rd-slow" data-act="rdSlow" data-text="' + esc(w) + '" aria-label="Dengarkan pelan: ' + esc(w) + '"><span aria-hidden="true">🐢</span></button>' +
              (wordOn ? '<button type="button" class="rd-rec on small" data-act="rdStop">' + STOP(16) + ' Berhenti</button>' : '<button type="button" class="rd-rec small" data-act="rdRecWord" data-i="' + i + '" data-k="' + x.k + '">' + MIC(16) + ' Coba kata ini</button>') + '</span></li>';
          }).join('') + '</ul>' : '') + '</div>';
      } else if (!res && best !== null && !active) {
        result = '<p class="rd-best">Skor terbaikmu: <b>' + best + '%</b></p>';
      }
      let ask = '';
      if (RD.ask && RD.ask.i === i) ask = '<div class="rd-ask" role="alertdialog" aria-label="Izin merekam"><p><strong>Sebelum merekam:</strong> suaramu dikirim ke layanan pengenalan suara milik browser (di Chrome: Google) untuk diubah menjadi teks. Kami tidak menyimpan rekamanmu. Kalau kamu belum 18 tahun, minta izin orang tua atau gurumu dulu.</p><div class="btn-row"><button type="button" class="btn btn-primary btn-small" data-act="rdAck">Mengerti, mulai rekam</button><button type="button" class="btn btn-small btn-flat" data-act="rdAckNo">Batal</button></div></div>';
      return '<li class="rd-item' + (active ? ' active' : '') + '"><p class="rd-n">Kalimat ' + (i + 1) + ' dari ' + a.lines.length + '</p><p class="rd-text">' + words + '</p><p class="rd-id muted">' + esc(ln[1]) + '</p>' + ctl + ask + status + result + '</li>';
    }).join('');
    return sumLine + warn + '<ol class="rd-list">' + items + '</ol>' + info;
  }
  function rdRender() {
    const root = document.getElementById('rd-root');
    if (!root || !P) return;
    const y = window.scrollY;
    root.innerHTML = rdHTML(lessonById(P.id));
    window.scrollTo(0, y);
    try { if (typeof refreshAudioUI === 'function') refreshAudioUI(); } catch (e) { /* abaikan */ }
  }

  const helpBox = (t) => '<div class="help-box"><span class="help-label">Cara kami membantu</span><p>' + t + '</p></div>';

  /* ---------- halaman: laporan hasil belajar ---------- */
  const pctOf = (sc) => (sc && sc.total ? Math.round((sc.right / sc.total) * 100) : null);
  const levelOf = (pc) => (pc >= 80 ? ['good', 'Kuat'] : pc >= 60 ? ['mid', 'Cukup'] : ['low', 'Perlu diulang']);
  function scoreBlock(label, sc) {
    if (!sc) return '<div class="rp-score"><div class="rp-score-top"><strong>' + label + '</strong><span class="muted">Belum dikerjakan</span></div><div class="rp-bar" aria-hidden="true"><span style="width:0"></span></div></div>';
    const pc = pctOf(sc); const lv = levelOf(pc);
    const more = sc.attempts > 1 ? ' · ' + sc.attempts + ' percobaan, terbaik ' + Math.min(sc.best || sc.right, sc.total) + ' dari ' + sc.total : '';
    return '<div class="rp-score"><div class="rp-score-top"><strong>' + label + '</strong><span>' + sc.right + ' dari ' + sc.total + ' benar <b class="rp-pct ' + lv[0] + '">' + pc + '%</b></span></div>' +
      '<div class="rp-bar ' + lv[0] + '" role="img" aria-label="' + label + ': ' + pc + ' persen, ' + lv[1] + '"><span style="width:' + pc + '%"></span></div><p class="rp-note">' + lv[1] + more + '</p></div>';
  }
  function lessonReport(l) {
    const p = prog(l.id); const lock = gate(l);
    const started = Object.keys(p.stepsDone).length > 0;
    const sl = p.scores.latihan || null; const su = p.scores.ulas || null;
    const rights = (sl ? sl.right : 0) + (su ? su.right : 0); const totals = (sl ? sl.total : 0) + (su ? su.total : 0);
    const avg = totals ? Math.round((rights / totals) * 100) : null;
    const reads = (p.apply && p.apply.reads) || {};
    const readN = Object.keys(reads).length; const scored = Object.keys(reads).filter((k) => typeof reads[k].best === 'number').map((k) => reads[k].best);
    const readAvg = scored.length ? Math.round(scored.reduce((x, y) => x + y, 0) / scored.length) : null;
    const chip = p.done ? '<span class="chip chip-mint">Selesai</span>' : (started ? '<span class="chip chip-lav">Sedang dikerjakan</span>' : (lock ? '<span class="chip">Terkunci</span>' : '<span class="chip">Belum dimulai</span>'));
    let tip;
    if (avg === null) tip = started ? 'Selesaikan Latihan dan Ulas supaya nilainya muncul di sini.' : (lock ? 'Pelajaran ini terbuka setelah kamu memiliki course premium.' : 'Belum dimulai. Mulai dari langkah Pelajari.');
    else if (avg >= 80) tip = 'Pemahamannya sudah kuat. Siap lanjut ke pelajaran berikutnya.';
    else if (avg >= 60) tip = 'Cukup baik. Baca ulang langkah Pahami, lalu ulangi Ulas untuk menaikkan nilai.';
    else tip = 'Masih perlu diulang. Buka lagi langkah Pelajari dan Pahami, lalu coba Latihan lagi.';
    const steps = STEPS.map((st) => '<li class="' + (p.stepsDone[st.key] ? 'done' : '') + '"><span aria-hidden="true">' + (p.stepsDone[st.key] ? '✓' : '○') + '</span> ' + st.label + '<span class="sr-only">' + (p.stepsDone[st.key] ? ', selesai' : ', belum') + '</span></li>').join('');
    const write = readN ? 'Sudah membaca <strong>' + readN + ' dari ' + l.apply.lines.length + ' kalimat</strong> dengan suara' + (readAvg !== null ? ', rata-rata terbaik <strong>' + readAvg + '%</strong> (perkiraan pengenal suara).' : '.') : 'Belum membaca dengan suara.';
    const links = lock ? '' : '<div class="btn-row no-print"><a class="btn btn-small" href="#pelajaran-' + l.id + '-' + (started ? stepFirstUndone(l) : 'pelajari') + '">' + (p.done ? 'Buka pelajaran' : (started ? 'Lanjutkan' : 'Mulai')) + '</a>' +
      (sl ? '<a class="btn btn-small btn-flat" href="#pelajaran-' + l.id + '-latihan">Ulangi Latihan</a>' : '') + (su ? '<a class="btn btn-small btn-flat" href="#pelajaran-' + l.id + '-ulas">Ulangi Ulas</a>' : '') + '</div>';
    return '<section class="card rp-lesson stack" aria-labelledby="rp-' + l.id + '"><div class="rp-head"><div><p class="rp-no">' + unitOf(l) + ' ' + l.no + '</p><h2 id="rp-' + l.id + '">' + esc(l.title) + '</h2></div>' + chip + '</div>' +
      '<ol class="rp-steps" aria-label="Langkah belajar">' + steps + '</ol>' +
      '<div class="rp-scores">' + scoreBlock('Latihan', sl) + scoreBlock('Ulas', su) + '</div>' +
      '<p class="rp-write"><strong>Praktikkan:</strong> ' + write + '</p><p class="rp-tip">' + tip + '</p>' + links + '</section>';
  }
  function reportCourse(c, multi) {
    const lessons = c.lessons;
    const all = lessons.map((l) => prog(l.id));
    let right = 0; let total = 0;
    all.forEach((p) => ['latihan', 'ulas'].forEach((k) => { if (p.scores[k]) { right += p.scores[k].right; total += p.scores[k].total; } }));
    const avg = total ? Math.round((right / total) * 100) : null;
    let readSent = 0; let readAll = 0;
    lessons.forEach((l, x) => { readAll += l.apply.lines.length; readSent += Object.keys((all[x].apply && all[x].apply.reads) || {}).length; });
    const tile = (n, lab) => '<div class="rp-tile"><strong>' + n + '</strong><span>' + lab + '</span></div>';
    return (multi ? '<h2 class="rp-course-title">' + esc(c.course.title) + '</h2>' : '') +
      '<div class="rp-tiles">' + tile(doneCount(c) + ' dari ' + lessons.length, c.unit.toLowerCase() + ' selesai') + tile(avg === null ? '–' : avg + '%', 'nilai rata-rata Latihan dan Ulas') + tile(total ? right + ' dari ' + total : '–', 'soal dijawab benar') + tile(readSent + ' dari ' + readAll, 'kalimat sudah dibaca dengan suara') + '</div>' +
      lessons.map(lessonReport).join('');
  }
  function reportView() {
    const u = user();
    const today = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
    return header(['laporan']) + '<main id="main" class="page narrow"><div class="stack" style="gap:6px"><h1 id="main-title" tabindex="-1">Laporan hasil belajar</h1>' +
      '<p class="muted">' + esc(u.name) + ' · diperbarui ' + today + '</p></div>' +
      '<div class="btn-row no-print"><button type="button" class="btn btn-primary" data-act="printReport">Cetak atau simpan PDF</button><a class="btn" href="#dashboard">Kembali ke beranda</a></div>' +
      reportCourse(COURSES.speaking, true) + reportCourse(COURSES.grammar, true) +
      '<p class="muted rp-foot">Nilai diambil dari percobaan terakhir. Data tersimpan di browser ini saja.</p></main>' + FOOT;
  }

  /* ---------- halaman: data saya, beli ---------- */
  let confirmReset = false;
  let showBackup = false;
  function dataView() {
    const u = user();
    const accounts = Object.keys(DB.accounts);
    return header(['data']) + '<main id="main" class="page narrow"><h1 id="main-title" tabindex="-1">Data saya</h1>' +
      '<div class="card stack"><h2 style="font-size:20px">Akun</h2><p>' + (u ? 'Masuk sebagai <strong>' + esc(u.name) + '</strong> (' + esc(u.email) + '). Pelajaran selesai: ' + doneCount() + ' dari ' + LESSONS.length + '.' : 'Kamu belum masuk.') + '</p>' +
      '<p class="muted" style="font-size:15px">Akun yang ada di browser ini: ' + accounts.length + '. Semua data tersimpan di browser ini saja, tidak dikirim ke mana pun.</p></div>' +
      '<div class="card stack"><h2 style="font-size:20px">Suara pelafalan</h2><p class="muted" style="font-size:15px">Pilih aksen, kecepatan, dan suara untuk semua tombol dengar di setiap pelajaran.</p><div id="audio-data"></div></div>' +
      '<div class="card stack"><h2 style="font-size:20px">Mode uji</h2><label class="switch"><input type="checkbox" data-bind="test-mode"' + (DB.testMode ? ' checked' : '') + '><span><strong>Buka semua pelajaran premium di komputer ini.</strong><br><span class="muted" style="font-size:15px">Hanya untuk pengujian. Di website sungguhan, pelajaran premium terbuka setelah pembayaran lunas.</span></span></label></div>' +
      '<div class="card stack"><h2 style="font-size:20px">Cadangan data</h2><p class="muted" style="font-size:15px">Data di browser bisa hilang kalau riwayat browser dibersihkan. Unduh cadangan secara berkala.</p>' +
      '<div class="btn-row"><button type="button" class="btn" data-act="export">Unduh cadangan (.json)</button><label class="btn" style="cursor:pointer">Pulihkan dari cadangan<input type="file" accept="application/json,.json" data-bind="import" class="sr-only"></label></div>' +
      (showBackup ? '<p class="muted" style="font-size:15px">Kalau unduhan tidak berjalan di tampilan ini, salin teks di bawah dan simpan di file catatan.</p><label class="sr-only" for="backup-text">Teks cadangan</label><textarea class="write" id="backup-text" readonly>' + esc(JSON.stringify(DB)) + '</textarea><div><button type="button" class="btn btn-small" data-act="copyBackup">Salin teks cadangan</button></div>' : '') +
      '<details class="model"><summary>Pulihkan dari teks cadangan</summary><label class="sr-only" for="restore-text">Teks cadangan</label><textarea class="write" id="restore-text" placeholder="Tempel teks cadangan di sini"></textarea><div style="margin-top:10px"><button type="button" class="btn btn-small" data-act="restoreText">Pulihkan</button></div></details></div>' +
      '<div class="card stack"><h2 style="font-size:20px">Hapus data</h2><p class="muted" style="font-size:15px">Menghapus semua akun dan kemajuan belajar di browser ini. Tidak bisa dibatalkan.</p>' +
      (confirmReset ? '<div class="btn-row"><button type="button" class="btn btn-primary" style="background:#A3200B" data-act="reset">Ya, hapus semuanya</button><button type="button" class="btn" data-act="cancelReset">Batal</button></div>' : '<div><button type="button" class="btn" data-act="askReset">Hapus semua data</button></div>') + '</div></main>' + FOOT;
  }
  function buyView() {
    return header(['beli']) + '<main id="main" class="page narrow"><div class="card card-shadow stack lock-card"><h1 id="main-title" tabindex="-1" style="font-size:26px">Pembayaran belum tersedia di versi lokal</h1>' +
      '<p>Harga course: <strong>' + PLACEHOLDER_PRICE + '</strong> (belum ditentukan). Pembayaran lewat Midtrans dibuat di tahap berikutnya, dan diuji dulu di mode sandbox tanpa uang sungguhan.</p>' +
      '<p>Untuk mencoba semua pelajaran sekarang, aktifkan mode uji di halaman Data saya.</p>' +
      '<div class="btn-row" style="justify-content:center"><a class="btn btn-primary" href="#data">Buka Data saya</a><a class="btn" href="' + (user() ? '#dashboard' : '#beranda') + '">Kembali</a></div></div></main>' + FOOT;
  }

  /* ---------- router dan render ---------- */
  function parseRoute() {
    const raw = location.hash.replace(/^#\/?/, '');
    let parts = raw.split('-').filter(Boolean);
    if (parts[0] === 'beranda') parts = [];
    return { parts: parts, query: { lesson: parts[0] === 'masuk' ? (parts[1] || '') : '' } };
  }
  let pendingScroll = null;
  function render(opts) {
    if (RD.rec || RD.ask) { rdAbort(); RD.ask = null; }
    opts = opts || {};
    const y = window.scrollY;
    const r = parseRoute();
    const p = r.parts;
    let html; let title = 'Yang Penting Inggris';
    if (p.length === 0) { html = landing(); }
    else if (p[0] === 'masuk') { html = authView(r.query); title = 'Masuk | Yang Penting Inggris'; }
    else if (p[0] === 'dashboard') { if (!user()) { location.replace('#masuk'); return; } html = dashboard(); title = 'Beranda | Yang Penting Inggris'; }
    else if (p[0] === 'grammar') { if (!user()) { location.replace('#masuk'); return; } html = dashboard('grammar'); title = 'Grammar | Yang Penting Inggris'; }
    else if (p[0] === 'pelajaran') { html = lessonView(p[1], p[2]); const l = lessonById(p[1]); if (l) title = l.title + ' | Yang Penting Inggris'; }
    else if (p[0] === 'laporan') { if (!user()) { location.replace('#masuk'); return; } html = reportView(); title = 'Laporan hasil belajar | Yang Penting Inggris'; }
    else if (p[0] === 'data') { html = dataView(); title = 'Data saya | Yang Penting Inggris'; }
    else if (p[0] === 'beli') { html = buyView(); title = 'Beli course | Yang Penting Inggris'; }
    else { location.replace('#beranda'); return; }
    if (html === '') return;
    document.getElementById('app').innerHTML = html;
    document.title = title;
    document.body.classList.toggle('is-landing', p.length === 0);
    { const gl = p[0] === 'pelajaran' ? lessonById(p[1]) : null; document.body.classList.toggle('gram', !!(gl && courseOf(gl) === COURSES.grammar)); }
    applyHeard();
    refreshStudyUI();
    if (opts.keepScroll) window.scrollTo(0, y);
    else {
      window.scrollTo(0, 0);
      const h = $('#main-title');
      if (h) { try { h.focus({ preventScroll: true }); } catch (e) { /* abaikan */ } }
    }
    if (pendingScroll) { const t = document.getElementById(pendingScroll); pendingScroll = null; if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    if (opts.focusFeedback) { const f = $('#feedback'); if (f) { try { f.focus({ preventScroll: true }); } catch (e) { /* abaikan */ } setTimeout(() => { try { f.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); } catch (e) { /* abaikan */ } }, 120); } }
  }

  /* ---------- aksi ---------- */
  function applyBackup(text) {
    try {
      const data = JSON.parse(String(text));
      if (!data || typeof data.accounts !== 'object') throw new Error('format');
      DB = Object.assign({ accounts: {}, session: null, testMode: false }, data); save(); P = null;
      toast('Cadangan berhasil dipulihkan.'); render({ keepScroll: true });
    } catch (err) { toast('Teks cadangan tidak dikenali.'); }
  }
  function currentLessonStep() {
    const lesson = lessonById(P.id);
    const step = STEPS.find((s) => s.key === P.key);
    return { lesson: lesson, step: step, exs: lesson[step.src] };
  }
  function evaluate(correct) {
    P.status = correct ? 'right' : 'wrong';
    if (P.results[P.exIdx] === undefined) P.results[P.exIdx] = correct;
    sfx(correct);
    render({ keepScroll: true, focusFeedback: true });
  }
  function saveEx() {
    fsSync();
    if (P.status === null) { const inp = $('#fill-input'); if (inp) P.value = inp.value; }
    P.states[P.exIdx] = { status: P.status, picked: P.picked, value: P.value, placed: P.placed.slice() };
  }
  function gotoEx(i) {
    saveEx();
    P.exIdx = i;
    const st = P.states[i] || { status: null, picked: null, value: '', placed: [] };
    P.status = st.status; P.picked = st.picked; P.value = st.value; P.placed = st.placed.slice();
    P.enter = true; render();
  }
  function goStep(lesson, key) { location.hash = '#pelajaran-' + lesson.id + '-' + key; }
  function markStep(lesson, key) { prog(lesson.id).stepsDone[key] = true; save(); }

  document.addEventListener('click', function (e) {
    const sc = e.target.closest('[data-scroll]');
    if (sc) {
      e.preventDefault();
      const id = sc.getAttribute('data-scroll');
      if (parseRoute().parts.length) { pendingScroll = id; location.hash = '#beranda'; }
      else { const t = document.getElementById(id); if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
      return;
    }
    if (!e.target.closest('button, a, summary, input, select, textarea, label')) {
      const fl = e.target.closest('.ent-ex li.flip');
      if (fl && fl.closest('#main')) { fl.classList.toggle('rev'); return; }
    }
    if (document.body.classList.contains('hide-id') && !e.target.closest('button, a, summary, input, select, textarea, label')) {
      const it = e.target.closest('.phr li, .ent-ex li, .ent-head, .dlg-line, .bub, .qa, tbody tr');
      if (it && it.closest('#main') && !it.closest('.mq, .fc-stage')) { it.classList.toggle('rev'); return; }
    }
    const el = e.target.closest('[data-act]');
    if (!el) return;
    const act = el.getAttribute('data-act');
    if (act === 'say') { const fl = el.closest('.ent-ex li.flip'); if (fl) fl.classList.add('rev'); speakText(el.getAttribute('data-text'), el); return; }
    if (act === 'spellx') { speakSpell(el.getAttribute('data-w'), el); return; }
    if (act === 'spellslow') { speakSpell(el.getAttribute('data-w'), el, SLOW_RATE); return; }
    if (act === 'qAccent') {
      DB.accent = el.getAttribute('data-v') === 'gb' ? 'gb' : 'us'; save();
      if (P) fsSync();
      render({ keepScroll: true });
      return;
    }
    if (act === 'sayx') { speakText(el.getAttribute('data-text'), el); return; }
    if (act === 'toggleHide') {
      DB.hideId = !DB.hideId; save();
      document.querySelectorAll('.rev').forEach((x) => x.classList.remove('rev'));
      refreshStudyUI(); return;
    }
    if (act === 'mq') {
      const k = el.getAttribute('data-k'); const qi = Number(el.getAttribute('data-q')); const oi = Number(el.getAttribute('data-i'));
      if (!MQ[k] || !P) return;
      P.mq[k] = P.mq[k] || {};
      if (P.mq[k][qi] !== undefined) return;
      P.mq[k][qi] = oi; sfx(oi === 0); refreshMq(k); return;
    }
    if (act === 'mqReset') { const k = el.getAttribute('data-k'); if (P) P.mq[k] = {}; refreshMq(k); return; }
    if (/^rv(Toggle|All)$/.test(act)) { if (P) revealAct(act, el.getAttribute('data-k'), el.getAttribute('data-v'), Number(el.getAttribute('data-i'))); return; }
    if (/^clk(New|Step|StepSet|Fmt|Face|Tebak|Reveal|Full)$/.test(act)) { if (P) clockAct(act, el.getAttribute('data-k'), el.getAttribute('data-v')); return; }
    if (/^fc(Mode|Flip|Prev|Next|Dir|Shuffle|Only|Reset|Know)$/.test(act)) { if (P) cardAct(act, el.getAttribute('data-k'), el.getAttribute('data-v')); return; }
    if (act === 'letter') { const L = el.getAttribute('data-l'); speakClip('letter-' + L.toLowerCase(), letterSound(L) || L, el); return; }
    if (act === 'setAccent') { DB.accent = el.getAttribute('data-v') === 'gb' ? 'gb' : 'us'; save(); refreshAudioUI(); applyIpa(); speakText(SAMPLE, null); return; }
    if (act === 'setSpeaker') { DB['speaker_' + accentKey()] = el.getAttribute('data-v'); save(); refreshAudioUI(); speakText(SAMPLE, null); return; }
    if (act === 'setSpeed') { DB.speed = SPEEDS[el.getAttribute('data-v')] ? el.getAttribute('data-v') : 'slow'; save(); refreshAudioUI(); speakText(SAMPLE, null); return; }
    if (act === 'nextVoice') {
      const acc = accentKey(); const list = voicesFor(acc);
      if (list.length > 1) { const i = Math.max(0, list.indexOf(chosenVoice(acc))); DB['voice_' + acc] = list[(i + 1) % list.length].name; save(); refreshAudioUI(); }
      speakText(SAMPLE, null); return;
    }
    if (act === 'testVoice') { speakText(SAMPLE, null); return; }
    if (act === 'spell') { speakSpell(el.getAttribute('data-w'), el); return; }
    if (act === 'demo') { demoPick = Number(el.getAttribute('data-i')); render({ keepScroll: true }); return; }
    if (act === 'toggleSound') { DB.sound = !soundOn(); save(); if (soundOn()) sfx(true); render({ keepScroll: true }); toast(soundOn() ? 'Efek suara jawaban hidup.' : 'Efek suara jawaban mati.'); return; }
    if (act === 'printReport') { try { window.print(); } catch (e) { toast('Cetak tidak tersedia di tampilan ini. Coba buka halaman ini langsung di browser.'); } return; }
    if (act === 'rdRec') { rdStart(Number(el.getAttribute('data-i'))); return; }
    if (act === 'rdRecWord') { rdStart(Number(el.getAttribute('data-i')), Number(el.getAttribute('data-k'))); return; }
    if (act === 'rdStop') { if (RD.rec) { try { RD.rec.stop(); } catch (e) { rdAbort(); rdRender(); } } return; }
    if (act === 'rdAck') { const q = RD.ask; DB.micAck = true; save(); RD.ask = null; if (q) rdStart(q.i, q.k); return; }
    if (act === 'rdAckNo') { RD.ask = null; rdRender(); return; }
    if (act === 'rdManual') { const i = Number(el.getAttribute('data-i')); const p = prog(P.id); if (!p.apply.reads) p.apply.reads = {}; if (p.apply.reads[i]) delete p.apply.reads[i]; else p.apply.reads[i] = { attempts: 0, best: null, manual: true }; save(); rdRender(); return; }
    if (act === 'rdSlow') { const t = el.getAttribute('data-text'); speakClip(clipSlug(t), prepText(t), el, SLOW_RATE); return; }
    if (act === 'logout') { DB.session = null; save(); P = null; location.hash = '#beranda'; render(); return; }
    if (act === 'export') {
      try {
        const blob = new Blob([JSON.stringify(DB, null, 2)], { type: 'application/json' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'cadangan-yang-penting-inggris-' + new Date().toISOString().slice(0, 10) + '.json';
        document.body.appendChild(a); a.click(); a.remove();
        setTimeout(() => URL.revokeObjectURL(a.href), 1000);
      } catch (err) { /* unduhan tidak tersedia */ }
      showBackup = true; render({ keepScroll: true });
      toast('Cadangan disiapkan. Cek unduhan, atau salin teks di bawah.');
      return;
    }
    if (act === 'copyBackup') {
      const ta = $('#backup-text');
      try { navigator.clipboard.writeText(JSON.stringify(DB)).then(() => toast('Teks cadangan disalin.'), () => { if (ta) { ta.select(); } toast('Blok teks lalu tekan Ctrl+C untuk menyalin.'); }); }
      catch (err) { if (ta) { ta.select(); } toast('Blok teks lalu tekan Ctrl+C untuk menyalin.'); }
      return;
    }
    if (act === 'restoreText') { const ta = $('#restore-text'); applyBackup(ta ? ta.value : ''); return; }
    if (act === 'askReset') { confirmReset = true; render({ keepScroll: true }); return; }
    if (act === 'cancelReset') { confirmReset = false; render({ keepScroll: true }); return; }
    if (act === 'reset') {
      DB = { accounts: {}, session: null, testMode: false }; GUEST.progress = {}; P = null; confirmReset = false; save();
      toast('Semua data sudah dihapus.'); location.hash = '#beranda'; render(); return;
    }
    if (!P) return;

    const cx = currentLessonStep();
    const ex = cx.exs[P.exIdx];
    if (act === 'fsCheck') {
      const i = Number(el.getAttribute('data-i'));
      const fs = fsState(P.exIdx);
      fsSync();
      if (!norm(fs.v[i] || '')) { toast('Isi jawabanmu dulu.'); const inp = document.querySelector('.fs-input[data-i="' + i + '"]'); if (inp) inp.focus(); return; }
      const it = ex.items[i];
      const ok = it.answers.some((a) => norm(a) === norm(fs.v[i]));
      fs.st[i] = ok ? 'right' : 'wrong';
      if (fs.first[i] === undefined) fs.first[i] = ok;
      if (ex.items.every((_, k) => fs.first[k] !== undefined) && P.results[P.exIdx] === undefined) P.results[P.exIdx] = ex.items.filter((_, k) => fs.first[k]).length / ex.items.length >= (ex.pass || 1);
      sfx(ok);
      render({ keepScroll: true });
      return;
    }
    if (act === 'fsRetry') {
      const i = Number(el.getAttribute('data-i'));
      const fs = fsState(P.exIdx);
      fsSync(); fs.st[i] = ''; fs.v[i] = '';
      render({ keepScroll: true });
      const inp = document.querySelector('.fs-input[data-i="' + i + '"]'); if (inp) inp.focus();
      return;
    }
    if (act === 'choose') {
      if (P.status) return;
      const i = Number(el.getAttribute('data-i'));
      P.picked = i; evaluate(i === ex.answer); return;
    }
    if (act === 'pick') { if (P.status) return; P.placed.push(Number(el.getAttribute('data-t'))); render({ keepScroll: true }); return; }
    if (act === 'unpick') { if (P.status) return; P.placed.splice(Number(el.getAttribute('data-pos')), 1); render({ keepScroll: true }); return; }
    if (act === 'clear') { P.placed = []; render({ keepScroll: true }); return; }
    if (act === 'check') {
      if (P.status) return;
      if (ex.type === 'fill') {
        const input = $('#fill-input'); P.value = input ? input.value : '';
        if (!norm(P.value)) { toast('Isi jawabanmu dulu.'); if (input) input.focus(); return; }
        evaluate(ex.answers.some((a) => norm(a) === norm(P.value)));
      } else if (ex.type === 'order') {
        if (!P.placed.length) { toast('Susun kata-katanya dulu.'); return; }
        const got = norm(P.placed.map((ti) => ex.tokens[ti]).join(' '));
        evaluate(got === norm(ex.answer) || (ex.also || []).some((a) => norm(a) === got));
      }
      return;
    }
    if (act === 'retry') { P.enter = true; P.status = null; P.picked = null; P.value = ''; P.placed = []; render({ keepScroll: true }); return; }
    if (act === 'prevEx') { if (P.exIdx > 0) gotoEx(P.exIdx - 1); return; }
    if (act === 'nextEx') {
      if (P.exIdx < cx.exs.length - 1) { gotoEx(P.exIdx + 1); return; }
      let miss = -1;
      for (let i = 0; i < cx.exs.length; i++) { if (P.results[i] === undefined) { miss = i; break; } }
      if (miss >= 0) { toast('Soal nomor ' + (miss + 1) + ' belum dijawab. Jawab dulu ya.'); gotoEx(miss); return; }
      saveEx(); P.summary = true; render();
      return;
    }
    if (act === 'redo') { P.enter = true; P.exIdx = 0; P.status = null; P.picked = null; P.value = ''; P.placed = []; P.results = []; P.states = {}; P.fs = {}; P.summary = false; render(); return; }
    if (act === 'finishEx') {
      const right = P.results.filter(Boolean).length;
      const p = prog(cx.lesson.id);
      const prev = p.scores[cx.step.key] || {};
      p.scores[cx.step.key] = { right: right, total: cx.exs.length, attempts: (prev.attempts || 0) + 1, best: Math.max(prev.best || 0, right) };
      markStep(cx.lesson, cx.step.key);
      if (cx.step.key === 'ulas') { p.done = true; save(); P.complete = true; render(); }
      else goStep(cx.lesson, STEPS[STEPS.indexOf(cx.step) + 1].key);
      return;
    }
    if (act === 'nextStep') { markStep(cx.lesson, cx.step.key); goStep(cx.lesson, STEPS[STEPS.indexOf(cx.step) + 1].key); return; }
    if (act === 'prevStep') { goStep(cx.lesson, STEPS[STEPS.indexOf(cx.step) - 1].key); return; }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && document.body.classList.contains('clk-lock') && P) { Object.keys(P.clock).forEach((k) => { if (P.clock[k].full) { P.clock[k].full = false; refreshClock(k); } }); document.body.classList.remove('clk-lock'); }
    if (e.key === 'Enter' && e.target && e.target.classList && e.target.classList.contains('fs-input')) { e.preventDefault(); const b = e.target.closest('.fs-item').querySelector('[data-act="fsCheck"]'); if (b) b.click(); return; }
    if (e.key === 'Enter' && e.target && e.target.id === 'fill-input') { e.preventDefault(); const b = document.querySelector('[data-act="check"]'); if (b) b.click(); }
  });

  document.addEventListener('input', function (e) {
    const t = e.target;
    if (t && t.getAttribute && t.getAttribute('data-bind') === 'apply-text' && P) {
      prog(P.id).apply.text = t.value; save();
    }
  });
  document.addEventListener('change', function (e) {
    const t = e.target;
    if (!t || !t.getAttribute) return;
    const bind = t.getAttribute('data-bind');
    if (bind === 'apply-check' && P) { prog(P.id).apply.checks[Number(t.getAttribute('data-i'))] = t.checked; save(); }
    else if (bind === 'voice') { DB['voice_' + accentKey()] = t.value; save(); refreshAudioUI(); speakText(SAMPLE, null); }
    else if (bind === 'test-mode') { DB.testMode = t.checked; save(); toast(t.checked ? 'Mode uji aktif: pelajaran premium terbuka.' : 'Mode uji dimatikan.'); }
    else if (bind === 'import' && t.files && t.files[0]) {
      const fr = new FileReader();
      fr.onload = function () { applyBackup(fr.result); };
      fr.readAsText(t.files[0]);
    }
  });

  document.addEventListener('submit', function (e) {
    const f = e.target;
    const kind = f.getAttribute && f.getAttribute('data-form');
    if (!kind) return;
    e.preventDefault();
    const next = f.getAttribute('data-next');
    const mailOk = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
    if (kind === 'register') {
      const name = $('#reg-name').value.trim(); const email = $('#reg-email').value.trim().toLowerCase();
      const err = $('#reg-err');
      if (!name) { err.textContent = 'Isi nama panggilanmu dulu.'; return; }
      if (!mailOk(email)) { err.textContent = 'Tulis email dengan benar, contoh: nama@email.com'; return; }
      if (DB.accounts[email]) { err.textContent = 'Email ini sudah terdaftar di komputer ini. Silakan masuk di bawah.'; return; }
      DB.accounts[email] = { name: name, email: email, createdAt: new Date().toISOString(), progress: JSON.parse(JSON.stringify(GUEST.progress)) };
      DB.session = email; save(); P = null;
      location.hash = next || '#dashboard';
    } else {
      const email = $('#log-email').value.trim().toLowerCase();
      const err = $('#log-err');
      if (!DB.accounts[email]) { err.textContent = 'Email ini belum terdaftar di komputer ini. Buat akun gratis di atas.'; return; }
      DB.session = email; save(); P = null;
      location.hash = next || '#dashboard';
    }
  });

  window.addEventListener('hashchange', function () { render(); });
  /* dua tampilan terbuka bersamaan (mis. pratinjau komputer + HP): samakan data saat salah satunya menyimpan */
  window.addEventListener('storage', function (e) {
    if (e.key !== KEY) return;
    try {
      const nd = JSON.parse(e.newValue || '');
      if (!nd || typeof nd !== 'object') return;
      const changed = nd.session !== DB.session || !!nd.testMode !== !!DB.testMode || (nd.sound !== false) !== soundOn();
      const audioChanged = nd.accent !== DB.accent || nd.speed !== DB.speed || nd.voice_us !== DB.voice_us || nd.voice_gb !== DB.voice_gb;
      DB = Object.assign({ accounts: {}, session: null, testMode: false }, nd);
      if (audioChanged) refreshAudioUI();
      refreshStudyUI();
      const first = parseRoute().parts[0] || '';
      if (changed || first === '' || first === 'dashboard' || first === 'data') render({ keepScroll: true });
    } catch (err) { /* abaikan */ }
  });
  document.addEventListener('toggle', function (e) { const d = e.target; if (d && d.matches && d.matches('details.ic-tip')) audioOpen = d.open; }, true);
  if (hasTTS()) {
    allVoices();
    try { window.speechSynthesis.addEventListener('voiceschanged', function () { refreshAudioUI(); }); } catch (e) { window.speechSynthesis.onvoiceschanged = refreshAudioUI; }
  }
  render();
})();
