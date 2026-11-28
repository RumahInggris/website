/* Gambar bergerak untuk kosakata (sifat benda dan kata deskripsi).
   Setiap kata punya satu ilustrasi SVG (viewBox 0 0 240 140). Gerakannya memakai kelas CSS "va-*" di style.css. */
(function () {
  'use strict';
  const N = '#1F2340', O = '#FF6B4A', Y = '#FFC93C', GR = '#35C29A', PK = '#FF8FB1', BL = '#7FB5FF', SKN = '#FFD9BF', GY = '#B8BDD4', WH = '#FFFFFF', MI = '#DDF6EF';
  const ST = ' stroke="' + N + '" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"';
  const R = (x, y, w, h, r, f) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + r + '" fill="' + f + '"' + ST + '/>';
  const C = (cx, cy, r, f) => '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="' + f + '"' + ST + '/>';
  const E = (cx, cy, rx, ry, f) => '<ellipse cx="' + cx + '" cy="' + cy + '" rx="' + rx + '" ry="' + ry + '" fill="' + f + '"' + ST + '/>';
  const P = (d, f) => '<path d="' + d + '" fill="' + (f || 'none') + '"' + ST + '/>';
  const D = (cx, cy, r, f) => '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="' + f + '"/>';
  const L = (d, c, w) => '<path d="' + d + '" fill="none" stroke="' + (c || N) + '" stroke-width="' + (w || 2.5) + '" stroke-linecap="round" stroke-linejoin="round"/>';
  const BG = (c) => '<rect width="240" height="140" fill="' + c + '"/>';
  const GND = (y, c) => '<rect y="' + y + '" width="240" height="' + (140 - y) + '" fill="' + c + '"/>';
  const T = (x, y, s, txt, f) => '<text x="' + x + '" y="' + y + '" font-size="' + s + '" font-weight="800" text-anchor="middle" fill="' + (f || N) + '" font-family="Poppins, system-ui, sans-serif">' + txt + '</text>';
  /* kelompok yang bergerak: kelas, isi, lama (detik), tunda (detik), gaya tambahan (titik asal putar dll.) */
  const A = (cls, inner, dur, delay, extra) => '<g class="va-a ' + cls + '" style="animation-duration:' + dur + 's;animation-delay:' + (delay || 0) + 's;' + (extra || '') + '">' + inner + '</g>';
  const VB = (cx, cy) => 'transform-box:view-box;transform-origin:' + cx + 'px ' + cy + 'px;';
  const star4 = (r, f) => '<path d="M0 ' + -r + ' L' + r * 0.28 + ' ' + -r * 0.28 + ' L' + r + ' 0 L' + r * 0.28 + ' ' + r * 0.28 + ' L0 ' + r + ' L' + -r * 0.28 + ' ' + r * 0.28 + ' L' + -r + ' 0 L' + -r * 0.28 + ' ' + -r * 0.28 + ' Z" fill="' + (f || Y) + '" stroke="' + N + '" stroke-width="1.6" stroke-linejoin="round"/>';
  const spark = (x, y, r, delay, f) => '<g transform="translate(' + x + ' ' + y + ')">' + A('va-twinkle', star4(r, f), 1.8, delay || 0) + '</g>';
  const heartD = 'M0 8 C-12 -2 -12 -12 -5 -12 C-1 -12 0 -8 0 -6 C0 -8 1 -12 5 -12 C12 -12 12 -2 0 8 Z';
  const heart = (x, y, s, f) => '<path transform="translate(' + x + ' ' + y + ') scale(' + s + ')" d="' + heartD + '" fill="' + (f || '#FF6B9A') + '"/>';
  function gear(cx, cy, ro, ri, n, f, hole) {
    const s = Math.PI * 2 / n, pts = [];
    const pt = (r, a) => (cx + r * Math.cos(a)).toFixed(1) + ' ' + (cy + r * Math.sin(a)).toFixed(1);
    for (let i = 0; i < n; i++) {
      const a = i * s;
      pts.push(pt(ri, a - s * 0.3), pt(ro, a - s * 0.16), pt(ro, a + s * 0.16), pt(ri, a + s * 0.3));
    }
    return P('M' + pts.join(' L') + ' Z', f) + C(cx, cy, ri * 0.4, hole);
  }
  function burst(cx, cy, r1, r2, n, f) {
    const pts = [];
    for (let i = 0; i < n * 2; i++) { const r = i % 2 ? r2 : r1, a = i * Math.PI / n; pts.push((cx + r * Math.cos(a)).toFixed(1) + ',' + (cy + r * Math.sin(a)).toFixed(1)); }
    return '<polygon points="' + pts.join(' ') + '" fill="' + f + '"' + ST + '/>';
  }
  const eyesFace = (x1, x2, y) => D(x1, y, 3, N) + D(x2, y, 3, N);

  const ART = {
    /* ---------- Kosakata sifat ---------- */
    'small': () => BG('#E6F4FF') + GND(118, '#CDEBC8') +
      P('M8 118 L124 118 L124 50 Z', Y) + D(92, 104, 6, '#F2A93B') + D(110, 88, 4.5, '#F2A93B') + D(64, 110, 4, '#F2A93B') +
      A('va-hop', L('M134 108 q-16 6 -18 -6 q-2 -9 6 -10') + E(152, 106, 19, 12, GY) + E(146, 117, 5, 3, PK) + E(162, 117, 5, 3, PK) + E(174, 101, 10, 9, GY) + C(168, 91, 5.5, PK) + D(183, 102, 2.2, N) + D(177, 98, 2, N) + L('M180 105 L194 108 M180 103 L194 100', N, 1.5), 1.8, 0, 'transform-origin:50% 100%;'),
    'big': () => BG('#FFF3DD') + GND(124, '#F3D9A8') +
      A('va-breathe', R(84, 96, 20, 30, 8, '#98A2CE') + R(112, 98, 20, 28, 8, '#98A2CE') +
        L('M184 76 Q198 88 194 108') + D(194, 111, 4, N) +
        E(124, 80, 62, 38, '#B7BFE0') + R(138, 98, 20, 28, 8, '#B7BFE0') + R(164, 96, 20, 30, 8, '#B7BFE0') +
        E(58, 72, 28, 26, '#B7BFE0') +
        A('va-flap', E(80, 66, 14, 22, '#9AA4D0'), 2.4, 0, 'transform-origin:15% 25%;') +
        D(48, 64, 3.4, N) +
        '<path d="M42 90 Q38 104 26 108" fill="none" stroke="' + N + '" stroke-width="8" stroke-linecap="round"/><path d="M42 90 Q38 104 26 108" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"/>' +
        A('va-swing', '<path d="M40 82 Q22 98 30 122" fill="none" stroke="' + N + '" stroke-width="17" stroke-linecap="round"/><path d="M40 82 Q22 98 30 122" fill="none" stroke="#B7BFE0" stroke-width="11" stroke-linecap="round"/>', 2.6, 0, 'transform-origin:85% 5%;'),
        3.2, 0, 'transform-origin:50% 100%;'),
    'tall': () => BG('#E8F6FF') + GND(122, '#CDEBC8') +
      '<ellipse cx="200" cy="28" rx="24" ry="10" fill="#fff"/><ellipse cx="186" cy="34" rx="16" ry="8" fill="#fff"/>' +
      A('va-stretch', L('M36 24 V116') + '<polygon points="36,14 26,28 46,28" fill="' + N + '"/><polygon points="36,126 26,112 46,112" fill="' + N + '"/>', 2.2, 0) +
      A('va-sway', P('M138 90 L128 30 L150 26 L170 84 Z', Y) + E(132, 20, 16, 9.5, Y).replace('/>', ' transform="rotate(-14 132 20)"/>') + E(119, 25, 6, 5, '#F2A93B') + D(135, 16, 2.4, N) +
        L('M130 11 L129 3') + D(129, 3, 2.4, N) + L('M139 12 L143 4') + D(143, 4, 2.4, N) + E(147, 19, 5.5, 3, Y) +
        D(140, 48, 4.5, '#D98B2B') + D(150, 66, 5, '#D98B2B') + D(142, 74, 3.5, '#D98B2B'), 3.4, 0, 'transform-origin:60% 100%;') +
      R(128, 100, 9, 24, 3, Y) + R(142, 100, 9, 24, 3, Y) + R(170, 100, 9, 24, 3, Y) + R(184, 100, 9, 24, 3, Y) +
      L('M198 86 q10 6 8 22') + D(206, 110, 3.5, N) +
      E(160, 92, 38, 20, Y) + D(150, 88, 5, '#D98B2B') + D(168, 98, 6, '#D98B2B') + D(180, 86, 4, '#D98B2B'),
    'long': () => {
      let seg = '';
      for (let i = 0; i < 9; i++) {
        const x = 34 + i * 17;
        seg += A('va-bob', L('M' + x + ' 110 v8') + C(x, 100, 12, i % 2 ? '#7AD9B5' : GR), 1.7, i * 0.16);
      }
      return BG('#F1ECFF') + GND(120, '#D7F0DC') + seg +
        A('va-bob', L('M186 86 L181 72') + D(181, 71, 3, O) + L('M197 86 L203 72') + D(203, 71, 3, O) + C(191, 98, 16, Y) + D(197, 93, 3, N) + D(185, 93, 3, N) + L('M184 104 Q191 111 199 104'), 1.7, 9 * 0.16) +
        A('va-pulse', L('M28 131 H206') + '<polygon points="24,131 36,124 36,138" fill="' + N + '"/><polygon points="210,131 198,124 198,138" fill="' + N + '"/>', 2.4, 0, 'animation-name:va-stretchx;');
    },
    'expensive': () => BG('#FFF6D8') + GND(120, '#F5E3A8') +
      spark(46, 44, 9, 0) + spark(194, 34, 10, 0.6) + spark(44, 98, 7, 1.1) + spark(150, 22, 6, 0.3) +
      A('va-pulse', P('M82 50 L100 30 L140 30 L158 50 L120 106 Z', '#8FE3FF') + L('M82 50 H158 M100 30 L108 50 L120 106 M140 30 L132 50 L120 106 M108 50 L120 30 L132 50') + '<path d="M92 46 L102 34 L110 34 L100 46 Z" fill="#fff" opacity=".7"/>', 2.2, 0, 'transform-origin:50% 60%;') +
      A('va-bob', R(172, 90, 52, 28, 9, Y) + T(198, 111, 16, '$$$'), 2, 0.4),
    'cheap': () => BG('#E6F8EC') + GND(122, '#CDEBC8') +
      A('va-swing', L('M120 -4 V56') + R(84, 52, 72, 66, 13, WH) + C(120, 64, 5, '#E6F8EC') + T(120, 106, 44, '$', GR), 3, 0, 'transform-origin:50% 0%;') +
      A('va-bob', C(46, 106, 15, Y) + T(46, 112, 17, '$'), 1.8, 0) +
      A('va-fallbob', P('M194 30 H206 V62 H218 L200 88 L182 62 H194 Z', GR), 1.6, 0),
    'heavy': () => BG('#EDEAFB') + GND(120, '#CFC9EA') + R(76, 112, 88, 10, 4, GY) +
      A('va-squash2', '<path d="M120 112 L120 106 L102 100 L138 92 L102 84 L138 76 L120 70 L120 64" fill="none" stroke="' + N + '" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>', 2, 0, 'transform-origin:50% 100%;') +
      A('va-press', P('M104 28 V16 Q120 8 136 16 V28') + P('M80 28 H160 L172 66 H68 Z', '#4A4F6B') + T(120, 58, 22, 'KG', WH), 2, 0),
    'light': () => BG('#E4F2FF') +
      '<ellipse cx="46" cy="34" rx="26" ry="10" fill="#fff"/><ellipse cx="62" cy="40" rx="18" ry="8" fill="#fff"/><ellipse cx="196" cy="100" rx="26" ry="10" fill="#fff"/><ellipse cx="180" cy="106" rx="16" ry="7" fill="#fff"/>' +
      '<g transform="translate(120 70) rotate(18)">' + A('va-flut', P('M0 42 C-30 22 -26 -22 4 -44 C28 -20 24 20 0 42 Z', '#FFD0E0') + L('M0 56 C2 20 4 -10 4 -44') + L('M2 18 L-14 10 M3 2 L-16 -8 M4 -14 L-11 -24 M2 18 L16 10 M3 2 L18 -6 M4 -14 L14 -22', N, 1.6), 4.2, 0) + '</g>',
    'soft': () => BG('#FFEEF4') + '<ellipse cx="120" cy="124" rx="74" ry="7" fill="rgba(31,35,64,.1)"/>' +
      A('va-squash', P('M48 40 Q120 26 192 40 Q204 70 192 100 Q120 114 48 100 Q36 70 48 40 Z', '#FFC2D6') +
        '<g transform="translate(120 70) scale(.84) translate(-120 -70)"><path d="M48 40 Q120 26 192 40 Q204 70 192 100 Q120 114 48 100 Q36 70 48 40 Z" fill="none" stroke="' + N + '" stroke-width="1.8" stroke-dasharray="4 5" opacity=".45"/></g>' +
        heart(120, 76, 2.4, '#FF6B9A') + D(50, 42, 4, '#FF6B9A') + D(190, 42, 4, '#FF6B9A') + D(50, 98, 4, '#FF6B9A') + D(190, 98, 4, '#FF6B9A'), 2.4, 0, 'transform-origin:50% 100%;') +
      A('va-float', heart(52, 30, 1.4), 3.2, 0, '--d:-22px;') + A('va-float', heart(190, 26, 1.8), 3.2, 1.2, '--d:-22px;'),
    'hard': () => BG('#EEF0F6') + GND(120, '#D4D8E6') +
      R(86, 82, 112, 42, 6, '#9CA3BE') + L('M110 82 L120 98 L112 112 M170 82 L162 96 L172 110', N, 2) +
      '<g transform="translate(0 0)">' + A('va-hammer', R(140, 18, 8, 50, 3, '#B8794A') + R(122, 58, 44, 22, 5, '#6B7089'), 2.4, 0, VB(144, 18)) + '</g>' +
      A('va-hit', spark(142, 78, 9, 0, Y) + spark(122, 70, 6, 0, WH) + spark(166, 70, 6, 0, WH), 2.4, 0, 'animation-timing-function:linear;'),
    'comfortable': () => BG('#FFEFE0') + GND(120, '#F4D7B6') +
      R(62, 112, 10, 10, 3, '#5A4FCF') + R(170, 112, 10, 10, 3, '#5A4FCF') +
      R(58, 44, 124, 56, 16, '#7C73F0') + R(52, 74, 136, 40, 13, '#9189F5') + L('M120 78 V110', N, 1.8) +
      R(38, 58, 26, 58, 12, '#7C73F0') + R(176, 58, 26, 58, 12, '#7C73F0') +
      '<g transform="rotate(-12 96 66)">' + A('va-squash', R(74, 48, 44, 34, 11, Y) + L('M82 58 H110 M82 66 H110', N, 1.6), 2.4, 0, 'transform-origin:50% 100%;') + '</g>' +
      A('va-float', T(150, 40, 20, 'Z', '#7C73F0'), 3.4, 0, '--d:-22px;') + A('va-float', T(170, 30, 15, 'Z', '#7C73F0'), 3.4, 1.1, '--d:-20px;') + A('va-float', T(186, 22, 11, 'Z', '#7C73F0'), 3.4, 2.2, '--d:-18px;'),
    'useful': () => BG('#E6F8F1') + GND(120, '#C9EBDC') +
      A('va-spin', gear(90, 76, 36, 28, 8, Y, '#E6F8F1'), 9, 0, 'animation-timing-function:linear;') +
      '<g transform="translate(174 82) rotate(34)">' + A('va-sway', R(-6, -30, 12, 78, 6, GY) + C(0, -36, 15, GY) + '<rect x="-6" y="-60" width="12" height="20" fill="#E6F8F1"/>' + L('M-6 -60 V-42 M6 -60 V-42'), 2.6, 0, 'transform-origin:50% 100%;') + '</g>' +
      A('va-pulse', C(196, 30, 17, GR) + L('M187 30 L194 37 L206 22', WH, 5), 1.8, 0),
    'useless': () => BG('#EEEFF4') + GND(122, '#DADCE8') +
      A('va-flicker', C(112, 60, 33, '#D5D7E2') + R(95, 90, 34, 22, 6, '#9EA2B8') + L('M95 98 H129 M95 105 H129', N, 1.8) + L('M102 64 L110 50 L114 60 M122 56 L128 68') + L('M92 44 L100 52 L96 62', N, 1.8), 2.6, 0) +
      A('va-pulse', L('M170 34 L204 68 M204 34 L170 68', '#E5322D', 8), 1.8, 0, 'transform-origin:50% 50%;') +
      A('va-float', D(70, 100, 3, '#B6B9CC'), 3, 0, '--d:-26px;') + A('va-float', D(58, 108, 2.4, '#B6B9CC'), 3, 1.1, '--d:-26px;'),
    'interesting': () => BG('#FFF4D6') + GND(124, '#F6E2A8') +
      P('M120 108 Q82 94 42 102 L42 52 Q82 42 120 58 Z', WH) + P('M120 108 Q158 94 198 102 L198 52 Q158 42 120 58 Z', WH) +
      L('M54 62 Q82 56 108 66 M54 74 Q82 68 108 78 M54 86 Q82 80 108 90', GY, 3) + L('M132 66 Q158 56 186 62 M132 78 Q158 68 186 74', GY, 3) +
      P('M38 104 Q80 96 120 112 Q160 96 202 104 L202 112 Q160 104 120 120 Q80 104 38 112 Z', '#4B3FE0') +
      spark(70, 30, 10, 0) + spark(120, 16, 8, 0.5, '#FF8FB1') + spark(172, 32, 11, 1) + spark(206, 70, 6, 0.3) + spark(30, 76, 6, 0.8) +
      A('va-bob', C(120, 36, 13, Y) + T(120, 43, 19, '!'), 1.6, 0),
    'difficult': () => BG('#FFE9E6') +
      A('va-shake2', '<ellipse cx="120" cy="124" rx="40" ry="5" fill="rgba(31,35,64,.1)"/>' + C(120, 76, 42, SKN) + P('M80 66 Q82 36 120 34 Q158 36 160 66 Q140 52 120 54 Q100 52 80 66 Z', '#5A3A2A') +
        L('M96 66 L112 58 M144 66 L128 58', N, 4) + D(108, 76, 3.6, N) + D(132, 76, 3.6, N) + L('M104 102 Q112 94 120 102 T136 102', N, 3), 0.5, 0, 'animation-timing-function:linear;') +
      A('va-fall', '<path d="M170 52 q-7 11 0 14 q8 -3 0 -14 Z" fill="#7FD3FF" stroke="' + N + '" stroke-width="1.6"/>', 1.8, 0, '--d:26px;') +
      A('va-bob', T(48, 50, 30, '?', '#E5322D'), 1.9, 0) + A('va-bob', T(196, 46, 38, '?', AC2()), 1.9, 0.6) + A('va-bob', T(206, 104, 24, '?', '#E5322D'), 1.9, 1.1) + A('va-bob', T(36, 108, 22, '?', AC2()), 1.9, 0.3),
    'easy': () => BG('#E7F8F1') + GND(122, '#C9EBDC') +
      A('va-bob', R(46, 34, 148, 80, 14, WH) + T(120, 86, 34, '1 + 1 = 2'), 2.4, 0) +
      A('va-pulse', C(192, 34, 19, GR) + L('M182 34 L190 42 L203 25', WH, 5.5), 1.8, 0) +
      spark(36, 30, 8, 0) + spark(212, 90, 8, 0.7) + spark(40, 112, 6, 1.2),
    'slow': () => BG('#EAF6EA') + GND(112, '#BFE3B4') +
      L('M30 112 q4 -10 0 -18 M30 112 q-5 -6 -10 -8', GR, 3) + L('M214 112 q-4 -12 0 -20 M214 112 q6 -6 10 -8', GR, 3) +
      A('va-crawl', '<path d="M52 118 Q150 122 160 112" fill="none" stroke="#D5EBF5" stroke-width="5" stroke-linecap="round" opacity=".8"/>' +
        E(104, 110, 52, 9, '#F5D08C') + C(54, 98, 11, '#F5D08C') +
        A('va-sway', L('M50 90 L46 72') + D(46, 70, 3.4, N), 1.4, 0, 'transform-origin:50% 100%;') + A('va-sway', L('M60 90 L64 72') + D(64, 70, 3.4, N), 1.4, 0.4, 'transform-origin:50% 100%;') +
        D(50, 98, 2, N) + L('M48 104 Q54 108 60 104', N, 2) +
        C(112, 82, 30, '#FFB347') + C(112, 82, 20, '#FFD27A') + C(112, 82, 10, '#FFB347') + L('M112 82 L112 74', N, 2), 7, 0, 'animation-timing-function:ease-in-out;'),
    'fast': () => BG('#FFE6DE') + GND(124, '#6B7089') +
      A('va-road', '<g fill="#fff">' + [0, 40, 80, 120, 160, 200, 240, 280].map((x) => '<rect x="' + (x - 10) + '" y="131" width="22" height="4" rx="2"/>').join('') + '</g>', 0.5, 0, 'animation-timing-function:linear;') +
      A('va-drift', L('M10 70 H44'), 0.8, 0, 'animation-timing-function:linear;') + A('va-drift', L('M4 88 H38'), 0.8, 0.3, 'animation-timing-function:linear;') + A('va-drift', L('M14 106 H46'), 0.8, 0.55, 'animation-timing-function:linear;') +
      A('va-shake', P('M62 100 L70 80 Q76 66 92 66 L134 66 Q148 66 156 80 L176 86 Q190 88 190 100 L190 110 L62 110 Z', '#FF4D4D') +
        P('M80 82 Q84 72 94 72 L112 72 L112 86 L76 86 Z', MI) + P('M118 72 L134 72 Q142 74 148 86 L118 86 Z', MI) + R(176, 94, 12, 8, 3, Y) +
        '<g>' + C(92, 111, 14, '#2B2F52') + A('va-spin', C(92, 111, 6, GY) + L('M92 105 V117 M86 111 H98', N, 1.6), 0.4, 0, 'animation-timing-function:linear;') + C(160, 111, 14, '#2B2F52') + A('va-spin', C(160, 111, 6, GY) + L('M160 105 V117 M154 111 H166', N, 1.6), 0.4, 0, 'animation-timing-function:linear;') + '</g>', 0.22, 0, 'animation-timing-function:linear;'),
    'dirty': () => BG('#F3EBDD') + GND(122, '#E2D6BE') +
      A('va-float', L('M96 56 q-6 -8 0 -16 q6 -8 0 -16', '#8FB339', 3), 2.6, 0, '--d:-12px;') + A('va-float', L('M120 50 q-6 -8 0 -16 q6 -8 0 -16', '#8FB339', 3), 2.6, 0.8, '--d:-12px;') + A('va-float', L('M144 56 q-6 -8 0 -16 q6 -8 0 -16', '#8FB339', 3), 2.6, 1.6, '--d:-12px;') +
      P('M86 40 L104 34 Q120 48 136 34 L154 40 L186 62 L168 82 L152 72 L152 120 L88 120 L88 72 L72 82 L54 62 Z', '#CDD3E8') +
      '<ellipse cx="108" cy="78" rx="12" ry="8" fill="#8B5A2B"/><ellipse cx="136" cy="98" rx="14" ry="9" fill="#8B5A2B"/><ellipse cx="116" cy="108" rx="7" ry="5" fill="#6F4521"/><ellipse cx="140" cy="68" rx="6" ry="4" fill="#6F4521"/><ellipse cx="66" cy="66" rx="8" ry="5" fill="#8B5A2B"/><ellipse cx="176" cy="68" rx="6" ry="4" fill="#6F4521"/>' +
      A('va-orbit', '<g transform="translate(40 80)">' + D(0, 0, 4, N) + '<ellipse cx="-3" cy="-4" rx="4" ry="2.4" fill="#fff" opacity=".8"/></g>', 3, 0, VB(120, 76) + 'animation-timing-function:linear;') +
      A('va-orbit', '<g transform="translate(190 60)">' + D(0, 0, 3.4, N) + '<ellipse cx="-3" cy="-3" rx="3.4" ry="2" fill="#fff" opacity=".8"/></g>', 4.2, 0, VB(120, 76) + 'animation-timing-function:linear;animation-direction:reverse;'),
    'clean': () => BG('#E6F6FF') + GND(122, '#CBE7F5') +
      E(120, 82, 66, 26, WH) + E(120, 82, 46, 15, '#EAF1FF') + L('M72 70 Q84 62 100 60', '#fff', 5) +
      spark(54, 40, 10, 0, '#fff') + spark(188, 36, 12, 0.5, Y) + spark(120, 30, 8, 1) + spark(206, 86, 7, 0.9, '#fff') + spark(36, 92, 7, 1.3, Y) +
      A('va-float', '<circle cx="76" cy="108" r="7" fill="#fff" fill-opacity=".6" stroke="#7FB5FF" stroke-width="2"/>', 3.2, 0, '--d:-38px;') + A('va-float', '<circle cx="164" cy="112" r="9" fill="#fff" fill-opacity=".6" stroke="#7FB5FF" stroke-width="2"/>', 3.2, 1, '--d:-42px;') + A('va-float', '<circle cx="132" cy="114" r="5" fill="#fff" fill-opacity=".6" stroke="#7FB5FF" stroke-width="2"/>', 3.2, 2, '--d:-36px;'),
    'weak': () => BG('#F1EEF6') + GND(124, '#DDD6E8') +
      A('va-float', '<ellipse cx="0" cy="0" rx="4" ry="6" fill="#FFB3CC" transform="translate(176 90)"/>', 3, 0.4, '--d:24px;') +
      L('M120 98 Q120 60 138 46 Q152 38 160 58', '#2B2F52', 10) + L('M120 98 Q120 60 138 46 Q152 38 160 58', GR, 5) +
      P('M120 84 Q96 78 88 92 Q108 98 120 88 Z', GR) +
      A('va-droop', '<g transform="translate(160 72)">' + [0, 60, 120, 180, 240, 300].map((a) => '<ellipse cx="0" cy="-12" rx="6.5" ry="11" fill="#FFB3CC" stroke="' + N + '" stroke-width="2" transform="rotate(' + a + ')"/>').join('') + C(0, 0, 6, Y) + '</g>', 3, 0, 'transform-origin:50% 0%;') +
      P('M92 104 H148 L142 126 H98 Z', '#D98B5F') + R(86, 96, 68, 10, 4, '#C77A50'),
    'strong': () => BG('#FFE9D6') + GND(124, '#F5D3B4') +
      A('va-spin', burst(120, 70, 66, 50, 12, '#FFD966'), 16, 0, 'animation-timing-function:linear;') +
      A('va-lift', R(106, 106, 12, 18, 5, '#2B2F52') + R(124, 106, 12, 18, 5, '#2B2F52') +
        L('M104 86 L92 28', N, 12) + L('M104 86 L92 28', SKN, 7) + L('M136 86 L148 28', N, 12) + L('M136 86 L148 28', SKN, 7) +
        R(100, 76, 40, 36, 12, '#4B3FE0') + C(120, 60, 19, SKN) + P('M101 56 Q104 38 120 38 Q136 38 139 56 Q130 46 120 47 Q110 46 101 56 Z', '#5A3A2A') +
        L('M108 53 L117 56 M132 53 L123 56', N, 2.6) + D(113, 60, 2.8, N) + D(127, 60, 2.8, N) + R(113, 67, 14, 6, 2, WH) +
        C(92, 28, 7, SKN) + C(148, 28, 7, SKN) + L('M34 24 H206', N, 7) +
        R(38, 6, 12, 36, 4, O) + R(50, 12, 10, 24, 3, '#FF9F7A') + R(190, 6, 12, 36, 4, O) + R(180, 12, 10, 24, 3, '#FF9F7A'), 1.6, 0, 'transform-origin:50% 100%;') +
      A('va-fall', '<path d="M0 -6 Q5 2 0 6 Q-5 2 0 -6 Z" fill="#7FD3FF" stroke="' + N + '" stroke-width="1.4" transform="translate(146 52)"/>', 1.6, 0, '--d:24px;') +
      spark(36, 84, 8, 0) + spark(206, 90, 9, 0.6) + spark(30, 52, 6, 1.1),
    'sophisticated': () => BG('#E7F0FF') + GND(126, '#CBD9F5') +
      A('va-spin', gear(36, 40, 18, 13, 8, Y, '#E7F0FF'), 6, 0, 'animation-timing-function:linear;') + A('va-spin', gear(206, 52, 15, 11, 8, '#FF9F7A', '#E7F0FF'), 5, 0, 'animation-timing-function:linear;animation-direction:reverse;') +
      A('va-bob', L('M120 24 V12') + A('va-blink', C(120, 9, 5.5, O), 1, 0) + R(84, 24, 72, 52, 14, '#C9D3F5') + R(75, 40, 9, 20, 4, GY) + R(156, 40, 9, 20, 4, GY) + R(94, 36, 52, 28, 11, N) +
        A('va-blink', D(108, 50, 6, '#7FE8FF') + D(132, 50, 6, '#7FE8FF'), 3, 0.6) + L('M112 58 Q120 62 128 58', '#7FE8FF', 2) +
        R(112, 76, 16, 8, 2, GY) + R(76, 84, 88, 40, 12, '#A9B8EE') + R(92, 94, 56, 22, 6, N) +
        A('va-blink', D(106, 105, 4.2, GR), 1.4, 0) + A('va-blink', D(120, 105, 4.2, Y), 1.4, 0.4) + A('va-blink', D(134, 105, 4.2, O), 1.4, 0.8) +
        R(58, 88, 16, 32, 8, GY) + R(166, 88, 16, 32, 8, GY), 2.4, 0),
    'simple': () => BG('#F6F2E8') + GND(122, '#E8E0CC') +
      A('va-float', L('M104 48 q-8 -10 0 -20 q8 -10 0 -20', GY, 4), 3.2, 0, '--d:-14px;') + A('va-float', L('M120 48 q-8 -10 0 -20 q8 -10 0 -20', GY, 4), 3.2, 1, '--d:-14px;') + A('va-float', L('M136 48 q-8 -10 0 -20 q8 -10 0 -20', GY, 4), 3.2, 2, '--d:-14px;') +
      E(120, 118, 56, 8, '#EDE6D4') + L('M150 70 Q176 70 176 88 Q176 106 150 104', N, 7) + R(86, 56, 64, 58, 14, WH) + D(118, 86, 9, O),
    /* ---------- Kosakata lain ---------- */
    'made of': () => BG('#FFF1DB') + GND(122, '#F1D6A4') +
      R(22, 78, 64, 40, 7, '#B67A46') + E(22, 98, 11, 20, '#E8B77C') + E(22, 98, 5, 10, '#C48A55') + L('M40 88 H76 M44 100 H80 M40 110 H72', '#8F5A2C', 2) +
      T(56, 136, 13, 'wood') +
      A('va-dash', '<path d="M94 98 H136" fill="none" stroke="' + O + '" stroke-width="4" stroke-linecap="round" stroke-dasharray="9 8"/><polygon points="132,88 150,98 132,108" fill="' + O + '"/>', 0.9, 0, 'animation-timing-function:linear;') +
      A('va-pulse', R(188, 32, 12, 66, 3, '#C48A55') + R(188, 46, 12, 8, 2, '#D39A63') + R(188, 64, 12, 8, 2, '#D39A63') + R(158, 86, 46, 12, 4, '#C48A55') + R(160, 98, 9, 24, 3, '#B67A46') + R(194, 98, 9, 24, 3, '#B67A46') + L('M164 92 H198', '#8F5A2C', 1.6), 2.4, 0, 'transform-origin:50% 100%;'),
    'made in': () => BG('#E4F1FF') +
      '<defs><clipPath id="vaGlobe"><circle cx="104" cy="82" r="44"/></clipPath></defs>' +
      C(104, 82, 44, '#7FC8FF') +
      '<g clip-path="url(#vaGlobe)">' + A('va-globe', [0, 120].map((o) => '<g transform="translate(' + o + ' 0)"><path d="M70 66 Q82 56 96 62 Q104 72 94 82 Q80 80 72 76 Z" fill="#7BD88F" stroke="' + N + '" stroke-width="1.8"/><path d="M110 88 Q124 80 138 90 Q142 104 128 114 Q116 108 110 98 Z" fill="#7BD88F" stroke="' + N + '" stroke-width="1.8"/><path d="M118 46 Q130 42 142 50 Q136 60 124 58 Z" fill="#7BD88F" stroke="' + N + '" stroke-width="1.8"/></g>').join('') + '', 7, 0, 'animation-timing-function:linear;') + '</g>' +
      '<circle cx="104" cy="82" r="44" fill="none"' + ST + '/>' +
      A('va-hop', '<g transform="translate(150 54)"><path d="M0 0 C-10 -14 -16 -22 -16 -30 A16 16 0 0 1 16 -30 C16 -22 10 -14 0 0 Z" fill="' + O + '"' + ST + '/><circle cx="0" cy="-30" r="6" fill="#fff"/></g>', 1.6, 0, 'transform-origin:50% 100%;') +
      R(166, 88, 60, 36, 7, '#E9C79A') + T(196, 111, 10.5, 'MADE IN', N),
    'metal': () => BG('#E9EDF7') + GND(124, '#D0D6E8') +
      '<defs><clipPath id="vaMetal"><path d="M70 76 H120 L130 100 H60 Z"/><path d="M122 76 H172 L182 100 H112 Z"/><path d="M96 50 H146 L156 74 H86 Z"/></clipPath></defs>' +
      P('M70 76 H120 L130 100 H60 Z', '#C7CEE3') + P('M122 76 H172 L182 100 H112 Z', '#C7CEE3') + P('M96 50 H146 L156 74 H86 Z', '#D8DEF0') +
      '<g clip-path="url(#vaMetal)">' + A('va-sweep', '<path d="M0 0 H22 L-6 140 H-28 Z" fill="#fff" opacity=".8"/>', 2.8, 0, 'animation-timing-function:ease-in-out;') + '</g>' +
      P('M58 100 H130 L140 124 H48 Z', '#B2BAD4') + P('M112 100 H184 L194 124 H102 Z', '#B2BAD4') +
      spark(48, 50, 8, 0, '#fff') + spark(196, 40, 10, 0.8, '#fff') + spark(206, 84, 6, 1.4, '#fff'),
    'glass': () => BG('#E6F6FF') + GND(124, '#CBE7F5') +
      '<defs><clipPath id="vaGlass"><path d="M84 26 H156 L146 112 Q145 118 139 118 H101 Q95 118 94 112 Z"/></clipPath></defs>' +
      P('M84 26 H156 L146 112 Q145 118 139 118 H101 Q95 118 94 112 Z', '#F2FBFF') +
      '<g clip-path="url(#vaGlass)">' + A('va-wave', '<path d="M70 58 Q85 50 100 58 T130 58 T160 58 T190 58 V130 H70 Z" fill="#7FD3FF"/>', 2.2, 0) +
        A('va-bob', '<rect x="112" y="64" width="22" height="22" rx="5" fill="#fff" fill-opacity=".7" stroke="' + N + '" stroke-width="2"/>', 2.6, 0) +
        A('va-float', '<circle cx="104" cy="104" r="4" fill="#fff" fill-opacity=".7" stroke="' + N + '" stroke-width="1.5"/>', 2.4, 0, '--d:-44px;') + A('va-float', '<circle cx="136" cy="108" r="3.4" fill="#fff" fill-opacity=".7" stroke="' + N + '" stroke-width="1.5"/>', 2.4, 1, '--d:-48px;') + '</g>' +
      P('M84 26 H156 L146 112 Q145 118 139 118 H101 Q95 118 94 112 Z', 'none') + L('M96 36 L102 104', '#fff', 5) +
      spark(180, 40, 10, 0, '#fff') + spark(58, 60, 8, 0.8, Y),
    'size': () => BG('#F0EEFF') + GND(122, '#D8D2F2') +
      A('va-hop', R(26, 86, 36, 36, 8, BL) + T(44, 112, 20, 'S'), 2.4, 0, 'transform-origin:50% 100%;') +
      A('va-hop', R(78, 68, 52, 54, 10, Y) + T(104, 104, 30, 'M'), 2.4, 0.3, 'transform-origin:50% 100%;') +
      A('va-hop', R(146, 36, 70, 86, 12, PK) + T(181, 94, 44, 'L'), 2.4, 0.6, 'transform-origin:50% 100%;'),
    'shape': () => BG('#FFF3E0') + GND(122, '#F3DDB4') +
      A('va-hop', C(52, 84, 30, O) + D(42, 80, 3.4, N) + D(62, 80, 3.4, N) + L('M44 92 Q52 99 60 92', N, 2.6), 2.2, 0, 'transform-origin:50% 100%;') +
      A('va-sway', P('M122 44 L158 108 H86 Z', Y) + D(112, 90, 3.4, N) + D(132, 90, 3.4, N) + L('M114 98 Q122 105 130 98', N, 2.6), 2.4, 0.4, 'transform-origin:50% 100%;') +
      A('va-turn', R(172, 62, 46, 46, 7, BL) + D(185, 80, 3.4, N) + D(205, 80, 3.4, N) + L('M187 92 Q195 99 203 92', N, 2.6), 3.2, 0),
    'condition': () => BG('#E8F8EE') +
      '<path d="M50 112 A70 70 0 0 1 85 51.4" fill="none" stroke="' + N + '" stroke-width="26"/><path d="M85 51.4 A70 70 0 0 1 155 51.4" fill="none" stroke="' + N + '" stroke-width="26"/><path d="M155 51.4 A70 70 0 0 1 190 112" fill="none" stroke="' + N + '" stroke-width="26"/>' +
      '<path d="M50 112 A70 70 0 0 1 85 51.4" fill="none" stroke="#FF6B6B" stroke-width="20"/><path d="M85 51.4 A70 70 0 0 1 155 51.4" fill="none" stroke="' + Y + '" stroke-width="20"/><path d="M155 51.4 A70 70 0 0 1 190 112" fill="none" stroke="' + GR + '" stroke-width="20"/>' +
      A('va-needle', L('M120 112 L120 54', N, 5) + C(120, 112, 9, N), 4.2, 0, VB(120, 112) + 'animation-timing-function:ease-in-out;') +
      T(120, 134, 14, 'GOOD', '#1E9E78') + spark(196, 40, 9, 0.3),
    'take care of': () => BG('#E9F8EE') + GND(124, '#CFE9C8') +
      A('va-grow', L('M120 98 V64', '#2B2F52', 9) + L('M120 98 V64', GR, 4.5) + P('M120 84 Q96 82 90 66 Q112 64 120 80 Z', GR) + P('M120 76 Q142 76 150 60 Q128 56 120 72 Z', GR) + C(120, 58, 9, Y), 3, 0, 'transform-origin:50% 100%;') +
      A('va-float', heart(158, 52, 1.8), 3, 0, '--d:-26px;') +
      P('M92 100 H148 L142 124 H98 Z', '#E08A5C') + R(88, 94, 64, 10, 4, '#CC7447') +
      A('va-tilt', '<g transform="translate(14 22)">' + R(0, 8, 46, 34, 9, '#6EA8FF') + '<path d="M46 20 L74 6" fill="none" stroke="' + N + '" stroke-width="9" stroke-linecap="round"/><path d="M46 20 L74 6" fill="none" stroke="#6EA8FF" stroke-width="4.5" stroke-linecap="round"/>' + P('M70 -2 L82 10 L86 -2 Z', '#6EA8FF') + L('M8 8 Q22 -10 38 8', N, 3.5) + '</g>', 3, 0, VB(48, 50)) +
      A('va-fall', '<path d="M0 -6 Q5 2 0 6 Q-5 2 0 -6 Z" fill="#6EC4FF" stroke="' + N + '" stroke-width="1.4" transform="translate(98 36)"/>', 1.4, 0, '--d:52px;') + A('va-fall', '<path d="M0 -6 Q5 2 0 6 Q-5 2 0 -6 Z" fill="#6EC4FF" stroke="' + N + '" stroke-width="1.4" transform="translate(104 34)"/>', 1.4, 0.45, '--d:54px;') + A('va-fall', '<path d="M0 -6 Q5 2 0 6 Q-5 2 0 -6 Z" fill="#6EC4FF" stroke="' + N + '" stroke-width="1.4" transform="translate(92 35)"/>', 1.4, 0.9, '--d:50px;')
  };

  /* ---------- Tempat umum, jalan, istilah jam, penghubung urutan ---------- */
  const star5 = (cx, cy, R1, r1, f) => { const p = []; for (let i = 0; i < 10; i++) { const r = i % 2 ? r1 : R1, a = -Math.PI / 2 + i * Math.PI / 5; p.push((cx + r * Math.cos(a)).toFixed(1) + ',' + (cy + r * Math.sin(a)).toFixed(1)); } return '<polygon points="' + p.join(' ') + '" fill="' + f + '"' + ST + '/>'; };
  const wheel = (x, y, r) => C(x, y, r, '#2B2F52') + A('va-spin', C(x, y, r * 0.45, GY) + L('M' + x + ' ' + (y - r * 0.4) + ' V' + (y + r * 0.4), N, 1.4), 0.5, 0, 'animation-timing-function:linear;');
  const roadCar = (x, y) => '<g transform="translate(' + x + ' ' + y + ')">' + R(0, 0, 44, 16, 6, '#4B3FE0') + R(10, -8, 22, 10, 4, '#3A30C4') + R(14, -6, 14, 7, 2, MI) + C(10, 17, 5, '#2B2F52') + C(34, 17, 5, '#2B2F52') + '</g>';
  const topCar = () => R(-8, -14, 16, 28, 5, '#4B3FE0') + R(-5, -7, 10, 6, 2, MI) + R(-5, 3, 10, 5, 2, '#3A30C4');
  const pie = (deg, f) => { const a = deg * Math.PI / 180; return '<path d="M120 66 L120 20 A46 46 0 ' + (deg > 180 ? 1 : 0) + ' 1 ' + (120 + 46 * Math.sin(a)).toFixed(1) + ' ' + (66 - 46 * Math.cos(a)).toFixed(1) + ' Z" fill="' + f + '"/>'; };
  const clockFace = () => C(120, 66, 48, WH) + [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => { const a = i * Math.PI / 6, r1 = i % 3 ? 41 : 38; return '<line x1="' + (120 + r1 * Math.sin(a)).toFixed(1) + '" y1="' + (66 - r1 * Math.cos(a)).toFixed(1) + '" x2="' + (120 + 44 * Math.sin(a)).toFixed(1) + '" y2="' + (66 - 44 * Math.cos(a)).toFixed(1) + '" stroke="' + N + '" stroke-width="2.2" stroke-linecap="round"/>'; }).join('');
  const clockScene = (bg, deg, label, handDeg) => BG(bg) + GND(122, '#E8DEC4') + clockFace() + A('va-pulse', pie(deg, Y).replace('fill="' + Y + '"', 'fill="' + Y + '" fill-opacity=".8"'), 2.4, 0, 'transform-origin:50% 50%;') +
    L('M120 66 H128', N, 1) + A('va-hand', L('M120 66 V26', N, 4.5), 4, 0, VB(120, 66) + '--r:' + handDeg + 'deg;') + C(120, 66, 5, N) + T(120, 136, 13, label);
  const steps = (idx) => {
    let s = BG('#F1ECFF') + GND(112, '#DDD3F7') + A('va-dash', '<path d="M30 78 H210" fill="none" stroke="#B8B0E8" stroke-width="6" stroke-linecap="round" stroke-dasharray="10 10"/>', 1.4, 0, 'animation-timing-function:linear;');
    [30, 75, 120, 165, 210].forEach((x, j) => {
      const num = String(j + 1);
      if (j < idx) s += C(x, 78, 13, '#7AD9B5') + T(x, 83, 14, num);
      else if (j === idx) s += A('va-hop', C(x, 78, 20, O) + T(x, 85, 20, num, WH), 1.4, 0);
      else s += C(x, 78, 13, GY) + T(x, 83, 14, num, '#6B7089');
    });
    if (idx === 4) s += '<path d="M210 58 V22" stroke="' + N + '" stroke-width="3" stroke-linecap="round"/>' + A('va-flag', P('M210 22 L236 29 L210 38 Z', GR), 1.4, 0, 'transform-origin:0% 50%;') + spark(176, 30, 8, 0) + spark(194, 112, 6, .6, PK) + spark(40, 40, 6, 1);
    else s += A('va-bob', '<polygon points="' + [30, 75, 120, 165, 210][idx] + ',48 ' + ([30, 75, 120, 165, 210][idx] - 9) + ',34 ' + ([30, 75, 120, 165, 210][idx] + 9) + ',34" fill="' + O + '"/>', 1.4, 0);
    return s;
  };
  Object.assign(ART, {
    'cinema': () => BG('#2B2F6B') + GND(122, '#3B3F7A') + spark(34, 22, 6, 0, '#fff') + spark(206, 26, 7, .7, '#fff') + spark(120, 16, 5, 1.2, '#fff') +
      R(34, 36, 172, 88, 6, '#7C73F0') + R(34, 36, 172, 28, 6, '#E5322D') + T(120, 57, 16, 'CINEMA', WH) +
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => A('va-blink', D(46 + i * 16.5, 70, 3.4, Y), 1.2, (i % 2) * 0.6)).join('') +
      R(48, 80, 36, 40, 3, Y) + star5(66, 100, 10, 4.5, WH) + R(156, 80, 36, 40, 3, PK) + C(174, 100, 9, WH) + R(102, 82, 36, 42, 5, '#2B2F52') + L('M120 82 V124', '#7C73F0', 2) + D(114, 104, 2, Y) + D(126, 104, 2, Y),
    'school': () => BG('#E6F4FF') + GND(120, '#CDEBC8') + A('va-pulse', C(206, 28, 13, Y), 3, 0) +
      L('M120 34 V10', N, 3) + A('va-flag', P('M120 10 L150 17 L120 26 Z', O), 1.4, 0, 'transform-origin:0% 50%;') +
      R(44, 62, 152, 58, 4, '#FFB347') + P('M36 62 L120 30 L204 62 Z', '#E5322D') + C(120, 50, 9, WH) + L('M120 50 V44 M120 50 H125', N, 2) +
      R(58, 78, 30, 26, 3, MI) + L('M73 78 V104 M58 91 H88', N, 1.6) + R(152, 78, 30, 26, 3, MI) + L('M167 78 V104 M152 91 H182', N, 1.6) + R(104, 86, 32, 34, 4, '#6B4A2B') + D(129, 104, 2.2, Y),
    'market': () => BG('#FFF3E0') + GND(120, '#F1D6A4') + L('M44 40 V120 M196 40 V120', N, 4) +
      [0, 1, 2, 3, 4, 5, 6, 7].map((i) => '<rect x="' + (40 + i * 20) + '" y="30" width="20" height="24" fill="' + (i % 2 ? WH : '#E5322D') + '"' + ST + '/>').join('') +
      [0, 1, 2, 3, 4, 5, 6, 7].map((i) => '<circle cx="' + (50 + i * 20) + '" cy="54" r="10" fill="' + (i % 2 ? WH : '#E5322D') + '"' + ST + '/>').join('') +
      R(48, 92, 144, 28, 5, '#B8794A') +
      A('va-hop', C(76, 82, 11, '#E5322D') + L('M76 71 q2 -6 6 -7', '#2E8B57', 2.5), 2, 0) + A('va-hop', C(108, 82, 11, '#FF9F43'), 2, .3) + A('va-hop', C(140, 82, 11, '#7BD88F'), 2, .6) + A('va-hop', C(170, 82, 11, Y), 2, .9),
    'train station': () => BG('#E6F4FF') + GND(112, '#C9CFE0') + R(24, 24, 192, 10, 3, '#7C73F0') + R(34, 34, 6, 78, 1, GY) + R(200, 34, 6, 78, 1, GY) +
      C(120, 52, 14, WH) + A('va-spin', L('M120 52 V43', N, 2.4), 8, 0, VB(120, 52) + 'animation-timing-function:linear;') + L('M120 52 H127', N, 2.4) +
      R(0, 124, 240, 6, 0, '#6B7089') + [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => '<rect x="' + (i * 22 - 4) + '" y="130" width="10" height="5" fill="#8B5A2B"/>').join('') +
      A('va-arrive', R(30, 68, 150, 44, 10, '#4B3FE0') + [0, 1, 2, 3].map((i) => R(44 + i * 33, 76, 24, 18, 3, MI)).join('') + R(30, 100, 150, 6, 0, Y) + P('M180 72 Q204 78 206 102 L206 112 L180 112 Z', '#4B3FE0') + R(190, 80, 10, 12, 3, MI) + wheel(56, 114, 9) + wheel(96, 114, 9) + wheel(142, 114, 9) + wheel(186, 114, 9), 4, 0, 'animation-direction:alternate;'),
    'gas station': () => BG('#EAF2FF') + GND(122, '#CBD3E6') + R(36, 22, 168, 14, 4, '#E5322D') + R(52, 36, 8, 86, 1, GY) + R(180, 36, 8, 86, 1, GY) +
      A('va-bob', P('M50 56 C64 78 74 90 50 108 C26 90 36 78 50 56 Z', Y), 1.8, 0) +
      R(94, 48, 52, 74, 8, '#FF6B4A') + R(102, 56, 36, 22, 4, MI) + T(120, 73, 16, '$') + T(120, 104, 15, 'GAS', WH) +
      A('va-swing', '<path d="M146 84 Q174 84 174 108" fill="none" stroke="' + N + '" stroke-width="5" stroke-linecap="round"/>' + R(168, 104, 12, 16, 3, '#2B2F52'), 3, 0, 'transform-origin:0% 0%;'),
    'police office': () => BG('#E6F0FF') + GND(122, '#C9D3E8') +
      R(48, 50, 144, 72, 6, '#7FB5FF') + R(48, 50, 144, 22, 6, '#2B3A8C') + T(120, 66, 14, 'POLICE', WH) +
      R(96, 32, 48, 18, 4, GY) + A('va-blink', C(108, 34, 8, '#FF3B30'), 0.9, 0) + A('va-blink', C(132, 34, 8, '#3B6BFF'), 0.9, 0.45) +
      A('va-pulse', star5(86, 100, 14, 6, Y), 2, 0) + R(124, 84, 32, 38, 4, '#2B3A8C') + R(160, 82, 24, 22, 3, MI) + D(150, 104, 2, Y),
    'city park': () => BG('#E6F6FF') + GND(100, '#9ADB8F') + P('M0 130 Q120 100 240 130 V140 H0 Z', '#E9D8A6') +
      A('va-pulse', C(206, 26, 13, Y), 3, 0) + A('va-fly', L('M0 0 q6 -7 12 0 q6 -7 12 0', N, 2.2), 7, 0, 'animation-timing-function:linear;') +
      R(52, 58, 10, 50, 3, '#8B5A2B') + A('va-sway', C(57, 44, 24, '#4CAF6A') + C(40, 56, 15, '#5BC57B') + C(74, 56, 15, '#5BC57B'), 4, 0, 'transform-origin:50% 100%;') +
      R(184, 70, 8, 38, 3, '#8B5A2B') + A('va-sway', C(188, 58, 18, '#4CAF6A') + C(176, 66, 11, '#5BC57B') + C(200, 66, 11, '#5BC57B'), 3.4, .6, 'transform-origin:50% 100%;') +
      R(104, 88, 52, 8, 3, '#B8794A') + R(106, 76, 48, 8, 3, '#B8794A') + R(110, 96, 6, 14, 2, '#8B5A2B') + R(144, 96, 6, 14, 2, '#8B5A2B') +
      A('va-hop', L('M88 118 V108') + C(88, 105, 5, PK), 2, 0) + A('va-hop', L('M168 120 V110') + C(168, 107, 5, '#FF9F43'), 2, .5),
    'store': () => BG('#FFF0F5') + GND(122, '#EAD1DB') + R(40, 40, 160, 82, 4, WH) +
      [0, 1, 2, 3, 4, 5, 6, 7].map((i) => '<rect x="' + (40 + i * 20) + '" y="38" width="20" height="24" fill="' + (i % 2 ? WH : '#4B3FE0') + '"' + ST + '/>').join('') +
      [0, 1, 2, 3, 4, 5, 6, 7].map((i) => '<circle cx="' + (50 + i * 20) + '" cy="62" r="10" fill="' + (i % 2 ? WH : '#4B3FE0') + '"' + ST + '/>').join('') +
      R(54, 80, 70, 40, 4, MI) + A('va-bob', R(62, 96, 16, 18, 3, O) + R(84, 100, 16, 14, 3, Y) + R(104, 94, 14, 20, 3, PK), 2, 0) +
      R(138, 76, 48, 46, 4, Y) + R(146, 86, 32, 18, 3, WH) + A('va-blink', T(162, 99, 11, 'OPEN', '#1E9E78'), 1.6, 0),
    'airport': () => BG('#DFF1FF') + GND(112, '#8E94AD') + '<ellipse cx="60" cy="28" rx="26" ry="9" fill="#fff"/><ellipse cx="190" cy="40" rx="24" ry="8" fill="#fff"/>' +
      [0, 1, 2, 3, 4, 5].map((i) => '<rect x="' + (i * 44 - 10) + '" y="124" width="26" height="4" rx="2" fill="#fff"/>').join('') +
      R(24, 52, 18, 60, 3, WH) + R(16, 36, 34, 18, 6, '#7FB5FF') + L('M33 36 V26') + A('va-blink', C(33, 24, 5, O), 0.9, 0) +
      '<g transform="translate(120 78)">' + A('va-takeoff', E(0, 0, 36, 9, WH) + P('M-28 -2 L-38 -20 L-22 -8 Z', '#E5322D') + P('M-2 3 L-20 26 L8 6 Z', '#E5322D') + P('M-2 -4 L-12 -22 L6 -6 Z', '#B8BDD4') + D(18, -1, 2.4, '#7FB5FF') + D(8, -1, 2.4, '#7FB5FF') + D(-2, -1, 2.4, '#7FB5FF'), 4, 0, 'animation-timing-function:ease-in;') + '</g>',
    'bus station': () => BG('#FFF6E0') + GND(112, '#8E94AD') + [0, 1, 2, 3, 4, 5].map((i) => '<rect x="' + (i * 44 - 10) + '" y="124" width="26" height="4" rx="2" fill="#fff"/>').join('') +
      R(196, 44, 6, 68, 2, GY) + C(199, 38, 17, '#4B3FE0') + T(199, 43, 12, 'BUS', WH) +
      A('va-bob', C(176, 84, 7, SKN) + R(169, 92, 14, 20, 5, O), 1.6, 0) +
      A('va-arrive', R(22, 58, 142, 52, 10, '#FFB347') + [0, 1, 2, 3].map((i) => R(34 + i * 30, 66, 24, 20, 3, MI)).join('') + R(22, 94, 142, 6, 0, WH) + R(150, 66, 14, 20, 3, MI) + wheel(52, 112, 10) + wheel(134, 112, 10), 4, 0, 'animation-direction:alternate;'),
    'mosque': () => BG('#E3F5EF') + GND(120, '#CFE9C8') + spark(36, 30, 7, 0) + spark(206, 40, 8, .7) + spark(78, 14, 5, 1.2) +
      R(58, 86, 124, 34, 4, WH) + P('M72 86 A48 48 0 0 1 168 86 Z', GR) + L('M120 38 V42') + A('va-pulse', '<path d="M122 14 A12 12 0 1 0 122 38 A9.5 9.5 0 1 1 122 14 Z" fill="' + Y + '"' + ST + '/>', 2.4, 0) +
      R(32, 52, 16, 68, 3, WH) + P('M30 52 L40 30 L50 52 Z', GR) + R(192, 52, 16, 68, 3, WH) + P('M190 52 L200 30 L210 52 Z', GR) +
      P('M106 120 V104 A14 14 0 0 1 134 104 V120 Z', '#2B2F52') + R(70, 98, 18, 20, 3, MI) + R(152, 98, 18, 20, 3, MI),
    'sidewalk': () => BG('#E6F4FF') + R(0, 20, 240, 52, 0, '#FFE3B8').replace(ST, ' stroke="none"') + R(10, 28, 44, 44, 3, '#FFB347') + R(66, 22, 50, 50, 3, '#FF8FB1') + R(132, 30, 40, 42, 3, '#7FB5FF') + R(184, 24, 46, 48, 3, '#7BD88F') +
      R(-4, 72, 248, 30, 0, '#E9E3D3') + [0, 1, 2, 3, 4, 5, 6, 7].map((i) => '<line x1="' + (i * 34) + '" y1="72" x2="' + (i * 34 - 6) + '" y2="102" stroke="#CFC6AE" stroke-width="2"/>').join('') + L('M-4 102 H244', N, 3) +
      R(0, 104, 240, 36, 0, '#6B7089').replace(ST, ' stroke="none"') + L('M0 122 H240', WH, 3).replace('fill="none"', 'fill="none" stroke-dasharray="14 12"') +
      A('va-drive', roadCar(0, 108), 5, 0, 'animation-timing-function:linear;') +
      '<g transform="translate(120 96)">' + A('va-stroll', L('M-4 -2 V8 M4 -2 V8', N, 3.5) + R(-8, -26, 16, 26, 7, O) + C(0, -34, 9, SKN), 5, 0, 'animation-direction:alternate;') + '</g>',
    'crossroad': () => BG('#CDEBC8') + R(0, 50, 240, 40, 0, '#6B7089').replace(ST, ' stroke="none"') + R(100, 0, 40, 140, 0, '#6B7089').replace(ST, ' stroke="none"') +
      '<path d="M0 70 H100 M140 70 H240 M120 0 V50 M120 90 V140" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="12 10"/>' +
      A('va-pulse', '<rect x="100" y="50" width="40" height="40" fill="#8E94AD" fill-opacity=".9"/>', 1.6, 0) +
      A('va-drive', '<g transform="translate(0 52)">' + R(0, 0, 36, 14, 5, O) + R(8, -5, 18, 8, 3, '#E5322D') + '</g>', 4.5, 0, 'animation-timing-function:linear;') +
      A('va-blink', '<polygon points="10,70 24,62 24,78" fill="#fff"/>', 1.4, 0) + A('va-blink', '<polygon points="230,70 216,62 216,78" fill="#fff"/>', 1.4, .35) + A('va-blink', '<polygon points="120,8 112,22 128,22" fill="#fff"/>', 1.4, .7) + A('va-blink', '<polygon points="120,132 112,118 128,118" fill="#fff"/>', 1.4, 1.05),
    't-junction': () => BG('#CDEBC8') + R(0, 28, 240, 38, 0, '#6B7089').replace(ST, ' stroke="none"') + R(100, 28, 40, 112, 0, '#6B7089').replace(ST, ' stroke="none"') +
      '<path d="M0 47 H240" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="12 10"/><path d="M120 66 V140" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="12 10"/>' +
      '<g transform="translate(120 112)">' + A('va-up', topCar(), 4, 0, '--u:-58px;') + '</g>' +
      A('va-blink', '<polygon points="14,47 30,38 30,56" fill="#fff"/>', 1.2, 0) + A('va-blink', '<polygon points="226,47 210,38 210,56" fill="#fff"/>', 1.2, .6) + T(60, 112, 34, 'T', '#2E8B57'),
    'roundabout': () => BG('#CDEBC8') + R(104, 0, 32, 40, 0, '#6B7089').replace(ST, ' stroke="none"') + R(104, 100, 32, 40, 0, '#6B7089').replace(ST, ' stroke="none"') + R(0, 54, 50, 32, 0, '#6B7089').replace(ST, ' stroke="none"') + R(190, 54, 50, 32, 0, '#6B7089').replace(ST, ' stroke="none"') +
      '<circle cx="120" cy="70" r="46" fill="#6B7089"/><circle cx="120" cy="70" r="26" fill="#7BD88F" stroke="' + N + '" stroke-width="2.5"/><circle cx="120" cy="70" r="36" fill="none" stroke="#fff" stroke-width="2.5" stroke-dasharray="8 8"/>' +
      A('va-sway', R(116, 66, 8, 16, 2, '#8B5A2B') + C(120, 62, 12, '#4CAF6A'), 3, 0, 'transform-origin:50% 100%;') +
      A('va-orbit', '<g transform="translate(120 34)">' + R(-8, -5, 16, 10, 4, O) + '</g>', 4, 0, VB(120, 70) + 'animation-timing-function:linear;') +
      A('va-orbit', '<g transform="translate(120 106)">' + R(-8, -5, 16, 10, 4, '#4B3FE0') + '</g>', 4, 0, VB(120, 70) + 'animation-timing-function:linear;animation-delay:-2s;'),
    'the second turn': () => BG('#CDEBC8') + R(100, 0, 40, 140, 0, '#6B7089').replace(ST, ' stroke="none"') + R(140, 8, 100, 28, 0, '#6B7089').replace(ST, ' stroke="none"') + R(140, 62, 100, 28, 0, '#6B7089').replace(ST, ' stroke="none"') +
      '<path d="M120 0 V140" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="12 10"/>' +
      C(200, 76, 11, WH) + T(200, 81, 14, '1') + A('va-pulse', C(200, 22, 13, Y) + T(200, 28, 17, '2'), 1.4, 0) +
      A('va-blink', '<polygon points="218,22 230,22 224,14" fill="#fff" transform="rotate(90 224 22)"/>', 1, 0) +
      '<g transform="translate(120 124)">' + A('va-up', topCar(), 4.6, 0, '--u:-102px;') + '</g>',
    'a.m.': () => BG('#FFE9C7') + A('va-spin', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => { const a = i * Math.PI / 6; return L('M' + (120 + 44 * Math.cos(a)).toFixed(1) + ' ' + (92 + 44 * Math.sin(a)).toFixed(1) + ' L' + (120 + 58 * Math.cos(a)).toFixed(1) + ' ' + (92 + 58 * Math.sin(a)).toFixed(1), '#FFB347', 5); }).join(''), 14, 0, VB(120, 92) + 'animation-timing-function:linear;') +
      A('va-rise', C(120, 96, 36, Y), 4, 0, 'animation-direction:alternate;') + P('M-4 100 Q120 82 244 100 V140 H-4 Z', '#7BD88F') + T(120, 130, 22, 'a.m.') + A('va-fly', L('M0 0 q5 -6 10 0 q5 -6 10 0', N, 2), 8, 0, 'animation-timing-function:linear;'),
    'p.m.': () => BG('#2B2F6B') + P('M-4 108 Q120 96 244 108 V140 H-4 Z', '#1F2350') + spark(40, 30, 7, 0, '#fff') + spark(196, 24, 8, .6, '#fff') + spark(70, 76, 5, 1.1, '#fff') + spark(206, 80, 6, .3, '#fff') + spark(150, 18, 5, 1.5, '#fff') +
      A('va-bob', '<path d="M130 22 A36 36 0 1 0 152 82 A29 29 0 1 1 130 22 Z" fill="#FFF3B0" stroke="#fff" stroke-width="2" stroke-linejoin="round"/>', 3, 0) + T(120, 130, 22, 'p.m.', WH),
    'a half': () => clockScene('#FFF3E0', 180, '30 min', 180),
    'a quarter': () => clockScene('#EAF6FF', 90, '15 min', 90),
    'sharp': () => BG('#E8F8EE') + GND(122, '#C9EBDC') + A('va-pulse', '<circle cx="120" cy="66" r="56" fill="none" stroke="' + Y + '" stroke-width="5"/>', 1.6, 0) + clockFace() + L('M120 66 H152', N, 5.5) + L('M120 66 V28', N, 4.5) + C(120, 66, 5, N) +
      A('va-pulse', C(188, 28, 15, GR) + L('M181 28 L186 34 L196 22', WH, 4.5), 1.6, 0) + T(120, 136, 13, '3:00'),
    'first': () => steps(0), 'then': () => steps(1), 'next': () => steps(2), 'after that': () => steps(3), 'finally': () => steps(4)
  });

  /* ---------- gambar sampul pelajaran (tampil di bagian pertama tiap pelajaran) ---------- */
  const HERO = (id, c1, c2, inner) => '<defs><linearGradient id="lg-' + id + '" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="' + c1 + '"/><stop offset="1" stop-color="' + c2 + '"/></linearGradient></defs><rect width="240" height="140" fill="url(#lg-' + id + ')"/>' +
    A('va-bob', '<circle cx="214" cy="24" r="30" fill="#fff" fill-opacity=".3"/>', 5, 0) + A('va-bob', '<circle cx="18" cy="120" r="34" fill="#fff" fill-opacity=".28"/>', 6, 1) + A('va-bob', '<circle cx="40" cy="22" r="9" fill="#fff" fill-opacity=".5"/>', 3.4, .4) + A('va-bob', '<circle cx="226" cy="112" r="7" fill="#fff" fill-opacity=".5"/>', 3, 1.2) + inner;
  const bubble = (x, y, w, h, f, tailLeft) => P(tailLeft ? 'M' + (x + 18) + ' ' + (y + h - 2) + ' L' + (x + 8) + ' ' + (y + h + 14) + ' L' + (x + 36) + ' ' + (y + h - 2) + ' Z' : 'M' + (x + w - 36) + ' ' + (y + h - 2) + ' L' + (x + w - 8) + ' ' + (y + h + 14) + ' L' + (x + w - 18) + ' ' + (y + h - 2) + ' Z', f) + R(x, y, w, h, 16, f);
  const hand = () => '<g transform="translate(46 112)">' + A('va-wavehand', [-34, -12, 10, 32].map((a, i) => '<ellipse cx="0" cy="-20" rx="5.5" ry="14" fill="' + SKN + '"' + ST + ' transform="rotate(' + a + ' 0 6)"/>').join('') + E(0, 4, 17, 18, SKN) + '<ellipse cx="-17" cy="0" rx="5.5" ry="12" fill="' + SKN + '"' + ST + ' transform="rotate(-50 -14 6)"/>', 1.3, 0, 'transform-origin:50% 100%;') + '</g>';
  const bigClock = (cx, cy, r) => C(cx, cy, r, WH) + [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => { const a = i * Math.PI / 6, r1 = r - (i % 3 ? 7 : 11); return '<line x1="' + (cx + r1 * Math.sin(a)).toFixed(1) + '" y1="' + (cy - r1 * Math.cos(a)).toFixed(1) + '" x2="' + (cx + (r - 3) * Math.sin(a)).toFixed(1) + '" y2="' + (cy - (r - 3) * Math.cos(a)).toFixed(1) + '" stroke="' + N + '" stroke-width="2.4" stroke-linecap="round"/>'; }).join('');
  const bell = (x, y, dir) => '<g transform="translate(' + x + ' ' + y + ')">' + A('va-ring', P('M0 -8 Q-13 -8 -13 8 V14 H13 V8 Q13 -8 0 -8 Z', Y) + L('M-16 14 H16', N, 3) + D(0, 20, 3.5, N), 0.35, 0, 'transform-origin:50% 0%;animation-direction:' + dir + ';') + '</g>';
  const chip = (x, y, txt, f, d) => A('va-bob', R(x - 24, y - 11, 48, 22, 11, f) + T(x, y + 5, 12.5, txt, WH), 2.2, d);
  const calCell = (c, r, on, delay) => { const x = 64 + c * 17, y = 62 + r * 17; return R(x, y, 13, 13, 3, '#EEF1FA') + (on ? A('va-pop', L('M' + (x + 3) + ' ' + (y + 7) + ' l3 3 l5 -7', GR, 3), 6, delay, 'transform-origin:50% 50%;') : ''); };
  window.LESSON_ART = {
    salam: () => HERO('salam', '#FFE9A8', '#FFB3C7',
      A('va-spin', [0, 1, 2, 3, 4, 5, 6, 7].map((i) => { const a = i * Math.PI / 4; return L('M' + (206 + 20 * Math.cos(a)).toFixed(1) + ' ' + (32 + 20 * Math.sin(a)).toFixed(1) + ' L' + (206 + 28 * Math.cos(a)).toFixed(1) + ' ' + (32 + 28 * Math.sin(a)).toFixed(1), '#FFB347', 4); }).join(''), 14, 0, VB(206, 32) + 'animation-timing-function:linear;') + A('va-pulse', C(206, 32, 14, Y), 2.4, 0) +
      A('va-hop', bubble(80, 26, 92, 40, WH, true) + T(126, 54, 20, 'Hello!'), 2, 0, 'transform-origin:50% 100%;') +
      A('va-hop', bubble(98, 76, 126, 34, '#E8F4FF', false) + T(161, 98, 14, 'Good morning!', N), 2, .7, 'transform-origin:50% 100%;') + hand() + spark(70, 20, 6, 0) + spark(30, 66, 5, .8, WH)),
    perkenalan: () => HERO('perkenalan', '#CFEAFF', '#E7D4FF',
      A('va-swing', L('M120 6 V30', N, 3) + R(54, 28, 132, 92, 12, WH) + R(54, 28, 132, 30, 12, '#E5322D') + R(54, 44, 132, 14, 0, '#E5322D').replace(' stroke="' + N + '"', ' stroke="#E5322D"') + T(120, 49, 16, 'HELLO', WH) + T(120, 72, 11.5, 'my name is', N) + R(70, 80, 100, 26, 6, '#FFF3B0') + T(120, 99, 15, 'Your name', N) + C(120, 28, 5, GY), 3.2, 0, 'transform-origin:50% 0%;') +
      A('va-hop', C(26, 100, 15, SKN) + D(21, 97, 2.2, N) + D(31, 97, 2.2, N) + L('M20 105 Q26 111 32 105', N, 2.2), 2, 0, 'transform-origin:50% 100%;') + A('va-hop', C(214, 98, 15, '#FFC9A8') + D(209, 95, 2.2, N) + D(219, 95, 2.2, N) + L('M208 103 Q214 109 220 103', N, 2.2), 2, .8, 'transform-origin:50% 100%;') + spark(30, 40, 6, 0) + spark(210, 50, 7, .6, '#FF8FB1')),
    alphabet: () => HERO('alphabet', '#E3F8D8', '#FFF3B0',
      L('M20 76 Q120 -6 220 76', '#FF6B6B', 6) + L('M30 82 Q120 8 210 82', Y, 6) + L('M40 88 Q120 22 200 88', '#7FB5FF', 6) +
      [['A', O, 22], ['B', Y, 68], ['C', '#7FB5FF', 114], ['D', PK, 160]].map((l, i) => A('va-hop', R(l[2], 66, 46, 46, 10, l[1]) + T(l[2] + 23, 101, 32, l[0], i === 1 ? N : WH), 1.8, i * .25, 'transform-origin:50% 100%;')).join('') +
      spark(212, 54, 8, 0) + spark(18, 40, 6, .7, WH) + spark(120, 22, 6, 1.1, '#FF8FB1')),
    jam: () => HERO('jam', '#D9F2FF', '#FFE9C7',
      bell(66, 32, 'alternate') + bell(174, 32, 'alternate-reverse') + L('M56 40 L74 40 M166 40 L184 40', N, 3) +
      bigClock(120, 78, 44) + A('va-spin', L('M120 78 V46', N, 4.5), 8, 0, VB(120, 78) + 'animation-timing-function:linear;') + A('va-spin', L('M120 78 V60', N, 6), 60, 0, VB(120, 78) + 'animation-timing-function:linear;') + C(120, 78, 5, N) +
      spark(30, 96, 7, 0) + spark(212, 100, 7, .6, '#FF8FB1') + spark(210, 56, 5, 1.1, WH)),
    arah: () => HERO('arah', '#CDEBC8', '#E4F7DC',
      R(-4, 80, 248, 26, 0, '#6B7089').replace(' stroke="' + N + '"', ' stroke="none"') + R(146, -4, 26, 148, 0, '#6B7089').replace(' stroke="' + N + '"', ' stroke="none"') + '<path d="M0 93 H146 M159 0 V80 M159 106 V140 M172 93 H240" stroke="#fff" stroke-width="2.5" stroke-dasharray="10 8" fill="none"/>' +
      R(16, 26, 36, 36, 6, '#FFB347') + R(62, 18, 30, 44, 6, '#FF8FB1') + R(190, 112, 34, 16, 6, '#7FB5FF') + R(186, 20, 38, 36, 6, '#B28AF5') +
      A('va-dash', '<path d="M20 93 H159 V56" fill="none" stroke="' + O + '" stroke-width="5" stroke-linecap="round" stroke-dasharray="10 9"/>', 1.1, 0, 'animation-timing-function:linear;') +
      '<g transform="translate(159 54)">' + A('va-hop', '<path d="M0 0 C-10 -14 -16 -22 -16 -30 A16 16 0 0 1 16 -30 C16 -22 10 -14 0 0 Z" fill="' + O + '"' + ST + '/><circle cx="0" cy="-30" r="6" fill="#fff"/>', 1.4, 0, 'transform-origin:50% 100%;') + '</g>' +
      C(36, 104, 15, WH) + A('va-sway', '<polygon points="36,91 31,104 41,104" fill="#E5322D"/><polygon points="36,117 31,104 41,104" fill="' + GY + '"/>', 2.4, 0, 'transform-origin:50% 50%;') + spark(110, 40, 6, .3, WH)),
    deskripsi: () => HERO('deskripsi', '#F1E3FF', '#FFE0EC',
      R(88, 16, 64, 106, 12, '#4B3FE0') + R(95, 30, 50, 78, 4, MI) + D(120, 23, 2.5, WH) + R(106, 40, 28, 28, 6, '#FFD9BF') + L('M102 80 H138 M102 90 H130 M102 99 H134', GY, 3) +
      chip(44, 36, 'big', O, 0) + chip(198, 52, 'new', GR, .5) + chip(46, 100, 'small', '#7FB5FF', 1) + chip(196, 106, 'nice', '#FF6FA0', 1.5) +
      A('va-flut', '<circle cx="124" cy="64" r="17" fill="#fff" fill-opacity=".45"' + ST + '/><path d="M136 77 L152 94" stroke="' + N + '" stroke-width="6" stroke-linecap="round"/>', 4, 0) + spark(70, 70, 6, 0) + spark(172, 28, 6, .8, '#FF8FB1')),
    andalan: () => HERO('andalan', '#FFF0C9', '#FFD3C2',
      A('va-pop', bubble(24, 20, 112, 30, WH, true) + T(80, 41, 14, 'Excuse me,'), 6, 0, 'transform-origin:20% 100%;') +
      A('va-pop', bubble(76, 54, 140, 30, '#E8F4FF', false) + T(146, 75, 14, 'Could you help?'), 6, 1, 'transform-origin:80% 100%;') +
      A('va-pop', bubble(40, 90, 120, 26, '#DDF6EF', true) + T(100, 108, 13, 'Thank you!'), 6, 2, 'transform-origin:20% 100%;') +
      spark(206, 30, 8, 0) + spark(30, 76, 5, .7, '#FF8FB1') + spark(208, 112, 6, 1.2, WH)),
    simplepresent: () => HERO('simplepresent', '#DFF3FF', '#E8FFE3',
      A('va-spin', [0, 1, 2, 3, 4, 5, 6, 7].map((i) => { const a = i * Math.PI / 4; return L('M' + (204 + 17 * Math.cos(a)).toFixed(1) + ' ' + (34 + 17 * Math.sin(a)).toFixed(1) + ' L' + (204 + 25 * Math.cos(a)).toFixed(1) + ' ' + (34 + 25 * Math.sin(a)).toFixed(1), '#FFB347', 4); }).join(''), 14, 0, VB(204, 34) + 'animation-timing-function:linear;') + A('va-pulse', C(204, 34, 12, Y), 2.4, 0) +
      R(46, 24, 136, 96, 12, WH) + R(46, 24, 136, 26, 12, '#E5322D') + R(46, 38, 136, 12, 0, '#E5322D').replace(' stroke="' + N + '"', ' stroke="#E5322D"') + L('M76 18 V32 M152 18 V32', N, 4) + T(114, 44, 13, 'every day', WH) +
      [0, 1, 2].map((r) => [0, 1, 2, 3, 4, 5, 6].map((c) => calCell(c, r, (r * 7 + c) % 2 === 0, ((r * 7 + c) % 6) * .9)).join('')).join('') + spark(30, 70, 6, 0) + spark(206, 92, 7, .8, '#FF8FB1'))
  };
  function AC2() { return '#4B3FE0'; }
  window.VOCAB_ART = ART;
})();
