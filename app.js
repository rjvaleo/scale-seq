// ─── SCALE LIBRARY ───────────────────────────────────────────────────────────
// Each scale defined as cent values per degree from root
// These are TRUE intervals — not approximated to 12-TET

const SCALES = [
  // WESTERN DIATONIC MODES (12-TET)
  {
    cat: "WESTERN DIATONIC — 12-TET",
    name: "Ionian (Major)",
    info: "Western · 7 notes",
    cents: [0, 200, 400, 500, 700, 900, 1100],
  },
  {
    cat: "WESTERN DIATONIC — 12-TET",
    name: "Dorian",
    info: "Western/Medieval · 7 notes",
    cents: [0, 200, 300, 500, 700, 900, 1000],
  },
  {
    cat: "WESTERN DIATONIC — 12-TET",
    name: "Phrygian",
    info: "Western/Medieval · 7 notes",
    cents: [0, 100, 300, 500, 700, 800, 1000],
  },
  {
    cat: "WESTERN DIATONIC — 12-TET",
    name: "Lydian",
    info: "Western/Medieval · 7 notes",
    cents: [0, 200, 400, 600, 700, 900, 1100],
  },
  {
    cat: "WESTERN DIATONIC — 12-TET",
    name: "Mixolydian",
    info: "Western/Medieval · 7 notes",
    cents: [0, 200, 400, 500, 700, 900, 1000],
  },
  {
    cat: "WESTERN DIATONIC — 12-TET",
    name: "Aeolian (Natural Minor)",
    info: "Western · 7 notes",
    cents: [0, 200, 300, 500, 700, 800, 1000],
  },
  {
    cat: "WESTERN DIATONIC — 12-TET",
    name: "Locrian",
    info: "Western/Medieval · 7 notes",
    cents: [0, 100, 300, 500, 600, 800, 1000],
  },

  // WESTERN EXTENDED (12-TET)
  {
    cat: "WESTERN EXTENDED — 12-TET",
    name: "Harmonic Minor",
    info: "Western · 7 notes",
    cents: [0, 200, 300, 500, 700, 800, 1100],
  },
  {
    cat: "WESTERN EXTENDED — 12-TET",
    name: "Melodic Minor (ascending)",
    info: "Western · 7 notes",
    cents: [0, 200, 300, 500, 700, 900, 1100],
  },
  {
    cat: "WESTERN EXTENDED — 12-TET",
    name: "Major Pentatonic",
    info: "Global · 5 notes",
    cents: [0, 200, 400, 700, 900],
  },
  {
    cat: "WESTERN EXTENDED — 12-TET",
    name: "Minor Pentatonic",
    info: "Global · 5 notes",
    cents: [0, 300, 500, 700, 1000],
  },
  {
    cat: "WESTERN EXTENDED — 12-TET",
    name: "Blues Scale",
    info: "American · 6 notes",
    cents: [0, 300, 500, 600, 700, 1000],
  },
  {
    cat: "WESTERN EXTENDED — 12-TET",
    name: "Whole Tone",
    info: "French Impressionist · 6 notes",
    cents: [0, 200, 400, 600, 800, 1000],
  },
  {
    cat: "WESTERN EXTENDED — 12-TET",
    name: "Diminished (Half-Whole)",
    info: "Jazz · 8 notes",
    cents: [0, 100, 300, 400, 600, 700, 900, 1000],
  },
  {
    cat: "WESTERN EXTENDED — 12-TET",
    name: "Diminished (Whole-Half)",
    info: "Jazz · 8 notes",
    cents: [0, 200, 300, 500, 600, 800, 900, 1100],
  },
  {
    cat: "WESTERN EXTENDED — 12-TET",
    name: "Double Harmonic (Byzantine)",
    info: "Eastern/Western · 7 notes",
    cents: [0, 100, 400, 500, 700, 800, 1100],
  },
  {
    cat: "WESTERN EXTENDED — 12-TET",
    name: "Hungarian Minor",
    info: "Eastern European · 7 notes",
    cents: [0, 200, 300, 600, 700, 800, 1100],
  },
  {
    cat: "WESTERN EXTENDED — 12-TET",
    name: "Spanish Phrygian Dominant",
    info: "Flamenco/Middle Eastern · 7 notes",
    cents: [0, 100, 400, 500, 700, 800, 1000],
  },
  {
    cat: "WESTERN EXTENDED — 12-TET",
    name: "Persian",
    info: "Middle Eastern · 7 notes",
    cents: [0, 100, 400, 500, 600, 800, 1100],
  },
  {
    cat: "WESTERN EXTENDED — 12-TET",
    name: "Prometheus (Scriabin)",
    info: "Western · 6 notes",
    cents: [0, 200, 400, 600, 900, 1000],
  },
  {
    cat: "WESTERN EXTENDED — 12-TET",
    name: "Augmented Scale",
    info: "Western · 6 notes",
    cents: [0, 300, 400, 700, 800, 1100],
  },
  {
    cat: "WESTERN EXTENDED — 12-TET",
    name: "Enigmatic",
    info: "Western/Verdi · 7 notes",
    cents: [0, 100, 400, 600, 800, 1000, 1100],
  },
  {
    cat: "WESTERN EXTENDED — 12-TET",
    name: "Neapolitan Major",
    info: "Western · 7 notes",
    cents: [0, 100, 300, 500, 700, 900, 1100],
  },
  {
    cat: "WESTERN EXTENDED — 12-TET",
    name: "Neapolitan Minor",
    info: "Western · 7 notes",
    cents: [0, 100, 300, 500, 700, 800, 1100],
  },
  {
    cat: "WESTERN EXTENDED — 12-TET",
    name: "Romanian Minor",
    info: "Eastern European · 7 notes",
    cents: [0, 200, 300, 600, 700, 900, 1000],
  },
  {
    cat: "WESTERN EXTENDED — 12-TET",
    name: "Bebop Dominant",
    info: "Jazz · 8 notes",
    cents: [0, 200, 400, 500, 700, 900, 1000, 1100],
  },
  {
    cat: "WESTERN EXTENDED — 12-TET",
    name: "Bebop Major",
    info: "Jazz · 8 notes",
    cents: [0, 200, 400, 500, 700, 800, 900, 1100],
  },

  // JUST INTONATION — TRUE RATIOS
  {
    cat: "JUST INTONATION — TRUE RATIOS",
    name: "Pythagorean Tuning",
    info: "Ancient Greek · 12 notes · 3-limit",
    cents: [
      0, 114.0, 204.0, 294.1, 408.0, 498.0, 612.0, 702.0, 816.0, 906.1, 996.1,
      1110.0,
    ],
  },
  {
    cat: "JUST INTONATION — TRUE RATIOS",
    name: "Ptolemy's Intense Diatonic (Just Major)",
    info: "Ancient Greek · 7 notes · 5-limit",
    cents: [0, 203.9, 386.3, 498.0, 702.0, 884.4, 1088.3],
  },
  {
    cat: "JUST INTONATION — TRUE RATIOS",
    name: "Ptolemy's Soft Diatonic",
    info: "Ancient Greek · 7 notes",
    cents: [0, 182.4, 386.3, 498.0, 702.0, 884.4, 1086.8],
  },
  {
    cat: "JUST INTONATION — TRUE RATIOS",
    name: "Five-Limit Just Intonation",
    info: "Historical · 12 notes · 5-limit",
    cents: [
      0, 111.7, 203.9, 315.6, 386.3, 498.0, 590.2, 702.0, 813.7, 884.4, 996.1,
      1088.3,
    ],
  },
  {
    cat: "JUST INTONATION — TRUE RATIOS",
    name: "Seven-Limit Just Intonation",
    info: "Contemporary · 12 notes · 7-limit",
    cents: [
      0, 119.4, 203.9, 231.2, 386.3, 470.8, 582.5, 702.0, 764.9, 884.4, 968.8,
      1017.6,
    ],
  },
  {
    cat: "JUST INTONATION — TRUE RATIOS",
    name: "Harmonic Series (partials 1–16)",
    info: "Universal/Overtone-based · 15 notes",
    cents: [
      0, 203.9, 386.3, 498.0, 582.5, 702.0, 772.6, 840.5, 884.4, 968.8, 1017.6,
      1049.4, 1088.3, 1145.0, 1200.0,
    ].slice(0, 14),
  },
  {
    cat: "JUST INTONATION — TRUE RATIOS",
    name: "Partch 43-Tone Scale (first octave)",
    info: "Harry Partch · 43 notes · 11-limit",
    cents: [
      0, 21.5, 35.7, 49.4, 63.2, 84.5, 111.7, 119.4, 139.5, 155.1, 168.9, 203.9,
      222.5, 231.2, 266.9, 274.6, 294.1, 315.6, 333.8, 345.0, 386.3, 413.6,
      422.1, 470.8, 498.0, 519.5, 529.0, 551.3, 582.5, 600.9, 617.5, 631.3,
      649.0, 672.0, 700.0, 722.0, 741.2, 764.9, 772.6, 784.1, 813.7, 840.5,
      884.4, 906.1, 914.8, 932.5, 996.1, 1017.6,
    ].slice(0, 20),
  },

  // HISTORICAL TEMPERAMENTS
  {
    cat: "HISTORICAL TEMPERAMENTS",
    name: "Meantone (Quarter-Comma)",
    info: "Renaissance/Baroque · 12 notes",
    cents: [
      0, 76.0, 193.2, 310.3, 386.3, 503.4, 579.5, 696.6, 772.6, 889.7, 1006.8,
      1082.9,
    ],
  },
  {
    cat: "HISTORICAL TEMPERAMENTS",
    name: "Werckmeister III",
    info: "Baroque · 12 notes · J.S. Bach era",
    cents: [
      0, 90.2, 192.0, 294.1, 390.2, 498.0, 588.3, 696.1, 792.2, 888.3, 996.1,
      1092.2,
    ],
  },
  {
    cat: "HISTORICAL TEMPERAMENTS",
    name: "Kirnberger III",
    info: "18th century German · 12 notes",
    cents: [
      0, 90.2, 203.9, 294.1, 386.3, 498.0, 590.2, 702.0, 792.2, 895.1, 996.1,
      1088.3,
    ],
  },
  {
    cat: "HISTORICAL TEMPERAMENTS",
    name: "Vallotti Temperament",
    info: "18th century Italian · 12 notes",
    cents: [
      0, 94.1, 196.1, 298.0, 392.2, 501.9, 594.1, 698.0, 796.1, 894.1, 1000.0,
      1094.1,
    ],
  },
  {
    cat: "HISTORICAL TEMPERAMENTS",
    name: "19-EDO",
    info: "Renaissance onward · 19 equal divisions",
    cents: Array.from({ length: 19 }, (_, i) => i * (1200 / 19)),
  },
  {
    cat: "HISTORICAL TEMPERAMENTS",
    name: "31-EDO",
    info: "Theoretical/Huygens · 31 equal divisions",
    cents: Array.from({ length: 31 }, (_, i) => i * (1200 / 31)),
  },
  {
    cat: "HISTORICAL TEMPERAMENTS",
    name: "53-EDO",
    info: "Theoretical · 53 equal divisions",
    cents: Array.from({ length: 53 }, (_, i) => i * (1200 / 53)).slice(0, 12),
  },

  // MICROTONAL AND CONTEMPORARY
  {
    cat: "MICROTONAL & CONTEMPORARY",
    name: "Quarter-Tone Scale (24-EDO)",
    info: "Middle Eastern/Contemporary · 24 divisions",
    cents: Array.from({ length: 24 }, (_, i) => i * 50),
  },
  {
    cat: "MICROTONAL & CONTEMPORARY",
    name: "17-EDO",
    info: "Arabic approximation · 17 equal divisions",
    cents: Array.from({ length: 17 }, (_, i) => i * (1200 / 17)),
  },
  {
    cat: "MICROTONAL & CONTEMPORARY",
    name: "22-EDO",
    info: "Indian sruti approximation · 22 equal divisions",
    cents: Array.from({ length: 22 }, (_, i) => i * (1200 / 22)),
  },
  {
    cat: "MICROTONAL & CONTEMPORARY",
    name: "72-EDO",
    info: "Franz Richter Herf · 72 divisions · sixth-tones",
    cents: Array.from({ length: 72 }, (_, i) => i * (1200 / 72)).slice(0, 13),
  },
  {
    cat: "MICROTONAL & CONTEMPORARY",
    name: "Wendy Carlos Alpha",
    info: "1986 Beauty in the Beast · 15.39¢/step",
    cents: Array.from({ length: 19 }, (_, i) => i * 15.39),
  },
  {
    cat: "MICROTONAL & CONTEMPORARY",
    name: "Wendy Carlos Beta",
    info: "1986 · 18.75¢/step",
    cents: Array.from({ length: 16 }, (_, i) => i * 18.75),
  },
  {
    cat: "MICROTONAL & CONTEMPORARY",
    name: "Bohlen-Pierce Scale",
    info: "Bohlen/Pierce · 13 divisions of tritave (3:1)",
    cents: Array.from({ length: 13 }, (_, i) => i * (1902 / 13)),
  },

  // MIDDLE EASTERN / MAQAM
  {
    cat: "MIDDLE EASTERN — MAQAM",
    name: "Maqam Rast",
    info: "Arabic/Turkish · 7 notes · neutral third",
    cents: [0, 204, 351, 498, 702, 906, 1053],
  },
  {
    cat: "MIDDLE EASTERN — MAQAM",
    name: "Maqam Bayati",
    info: "Arabic/Turkish · 7 notes · neutral second",
    cents: [0, 150, 300, 498, 702, 852, 1002],
  },
  {
    cat: "MIDDLE EASTERN — MAQAM",
    name: "Maqam Hijaz",
    info: "Arabic/Turkish · 7 notes · augmented second",
    cents: [0, 100, 400, 500, 700, 800, 1000],
  },
  {
    cat: "MIDDLE EASTERN — MAQAM",
    name: "Maqam Hijaz Kar",
    info: "Arabic · 7 notes · double augmented second",
    cents: [0, 100, 400, 500, 700, 800, 1100],
  },
  {
    cat: "MIDDLE EASTERN — MAQAM",
    name: "Maqam Saba",
    info: "Arabic · 7 notes · very low third",
    cents: [0, 150, 280, 498, 648, 798, 1002],
  },
  {
    cat: "MIDDLE EASTERN — MAQAM",
    name: "Maqam Sikah",
    info: "Arabic/Turkish · built on neutral third",
    cents: [0, 204, 351, 551, 702, 853, 1002],
  },
  {
    cat: "MIDDLE EASTERN — MAQAM",
    name: "Maqam Nahawand",
    info: "Arabic · 7 notes · harmonic minor character",
    cents: [0, 200, 300, 500, 700, 800, 1100],
  },
  {
    cat: "MIDDLE EASTERN — MAQAM",
    name: "Maqam Nawa Athar",
    info: "Arabic · 7 notes",
    cents: [0, 200, 300, 600, 700, 800, 1100],
  },
  {
    cat: "MIDDLE EASTERN — MAQAM",
    name: "Makam Ussak",
    info: "Turkish · 7 notes · microtonal inflections",
    cents: [0, 150, 300, 500, 700, 850, 1000],
  },
  {
    cat: "MIDDLE EASTERN — MAQAM",
    name: "Persian Shur",
    info: "Iranian classical · 7 notes",
    cents: [0, 150, 300, 500, 700, 800, 1000],
  },
  {
    cat: "MIDDLE EASTERN — MAQAM",
    name: "Persian Chahargah",
    info: "Iranian · 7 notes",
    cents: [0, 200, 350, 500, 700, 900, 1050],
  },
  {
    cat: "MIDDLE EASTERN — MAQAM",
    name: "Persian Segah",
    info: "Iranian · 7 notes",
    cents: [0, 150, 350, 500, 700, 850, 1050],
  },

  // SOUTH & EAST ASIAN
  {
    cat: "SOUTH & EAST ASIAN",
    name: "Raga Bhairav",
    info: "Indian Hindustani · 7 notes · morning raga",
    cents: [0, 100, 400, 500, 700, 800, 1100],
  },
  {
    cat: "SOUTH & EAST ASIAN",
    name: "Raga Bhairavi",
    info: "Indian classical · 7 notes · all flat",
    cents: [0, 100, 300, 500, 700, 800, 1000],
  },
  {
    cat: "SOUTH & EAST ASIAN",
    name: "Raga Yaman (Kalyan)",
    info: "Indian classical · 7 notes · raised fourth · evening",
    cents: [0, 200, 400, 600, 700, 900, 1100],
  },
  {
    cat: "SOUTH & EAST ASIAN",
    name: "Raga Kafi",
    info: "Indian classical · 7 notes · Dorian with microtones",
    cents: [0, 200, 290, 500, 700, 900, 980],
  },
  {
    cat: "SOUTH & EAST ASIAN",
    name: "Raga Todi",
    info: "Indian classical · 7 notes · complex microtonal",
    cents: [0, 100, 300, 600, 700, 800, 1100],
  },
  {
    cat: "SOUTH & EAST ASIAN",
    name: "Raga Marwa",
    info: "Indian classical · 7 notes · no perfect fifth",
    cents: [0, 100, 400, 600, 900, 1100, 0],
  },
  {
    cat: "SOUTH & EAST ASIAN",
    name: "Raga Asavari",
    info: "Indian classical · 7 notes · descending emphasis",
    cents: [0, 200, 300, 500, 700, 800, 1000],
  },
  {
    cat: "SOUTH & EAST ASIAN",
    name: "22-Shruti Scale",
    info: "Indian classical theory · 22 microtones",
    cents: [
      0, 22, 90, 112, 182, 204, 270, 294, 316, 386, 408, 498, 520, 590, 612,
      702, 724, 792, 814, 884, 906, 996,
    ],
  },
  {
    cat: "SOUTH & EAST ASIAN",
    name: "Slendro (Javanese Gamelan)",
    info: "Java/Bali · 5 notes · non-equal spacing",
    cents: [0, 231, 474, 711, 951],
  },
  {
    cat: "SOUTH & EAST ASIAN",
    name: "Pelog (Javanese Gamelan)",
    info: "Java/Bali · 7 notes · highly unequal",
    cents: [0, 122, 271, 540, 675, 785, 947],
  },
  {
    cat: "SOUTH & EAST ASIAN",
    name: "Pelog Selisir (Balinese)",
    info: "Balinese Gamelan · 5-note Pelog mode",
    cents: [0, 122, 271, 675, 785],
  },
  {
    cat: "SOUTH & EAST ASIAN",
    name: "Japanese In Scale",
    info: "Japanese traditional · 5 notes · hemitonic",
    cents: [0, 100, 500, 700, 800],
  },
  {
    cat: "SOUTH & EAST ASIAN",
    name: "Japanese Yo Scale (Gagaku)",
    info: "Japanese · 5 notes · anhemitonic",
    cents: [0, 200, 500, 700, 900],
  },
  {
    cat: "SOUTH & EAST ASIAN",
    name: "Japanese Hirajoshi",
    info: "Japanese Koto · 5 notes · dark",
    cents: [0, 200, 300, 700, 800],
  },
  {
    cat: "SOUTH & EAST ASIAN",
    name: "Japanese Insen",
    info: "Japanese · 5 notes · very sparse",
    cents: [0, 100, 500, 700, 1000],
  },
  {
    cat: "SOUTH & EAST ASIAN",
    name: "Chinese Gong (Major Pentatonic)",
    info: "Chinese traditional · 5 notes",
    cents: [0, 204, 408, 702, 906],
  },
  {
    cat: "SOUTH & EAST ASIAN",
    name: "Chinese Yu (Minor Pentatonic)",
    info: "Chinese traditional · 5 notes",
    cents: [0, 294, 498, 702, 996],
  },
  {
    cat: "SOUTH & EAST ASIAN",
    name: "Mongolian Pentatonic",
    info: "Central Asian · 5 notes",
    cents: [0, 200, 400, 700, 900],
  },
  {
    cat: "SOUTH & EAST ASIAN",
    name: "Thai Ranat Scale",
    info: "Thai traditional · 7 near-equidistant tones",
    cents: [0, 171, 343, 514, 686, 857, 1029],
  },
  {
    cat: "SOUTH & EAST ASIAN",
    name: "Gamelan Degung (Sundanese)",
    info: "West Java · 5 notes",
    cents: [0, 176, 410, 702, 878],
  },
  {
    cat: "SOUTH & EAST ASIAN",
    name: "Sanfen Sunyi (Chinese Pythagorean)",
    info: "Ancient Chinese · 12 notes · stacked fifths",
    cents: [0, 114, 204, 294, 408, 498, 612, 702, 816, 906, 996, 1110],
  },
];

// ─── STATE ───────────────────────────────────────────────────────────────────
let audioCtx = null;
let masterGain = null;
let isPlaying = false;
let currentStep = 0;
let schedulerTimer = null;
let nextNoteTime = 0;
let bpm = 120;
let stepBeats = 0.5; // 1/8 note
let numSteps = 8;
let direction = "fwd";
let pingDir = 1;
let waveType = "sine";
let adsr = { a: 10, d: 80, s: 0.6, r: 200 };
let volume = 0.7;
let selectedScaleIdx = 0;
let rootHz = 440.0;
let rootMidi = 9; // A
let rootOctave = 4;
let playingStepIdx = -1;

// ─── FILTER + LFO STATE ──────────────────────────────────────────────────────
let filterCutoff = 2046; // Hz (log-scale, slider default=67)
let filterRes = 2.09; // Q factor
let filterNode = null;
let lfoOsc = null;
let lfoGain = null;
let lfoRate = 1.0; // Hz
let lfoDepth = 0.2; // 0–1
let lfoWave = "sine";
let lfoPhase = 0; // phase tracker for per-step PWM
let pulseWidth = 0.5; // base duty cycle for pulse wave
let currentPW = 0.5; // LFO-modulated pulse width
let lfoAnimId = null;
let lfoAnimPhase = 0;

// ─── LFO 2 (PWM) STATE ───────────────────────────────────────────────────────
let lfo2Rate = 0.6; // Hz
let lfo2Depth = 0.25; // 0–1
let lfo2Wave = "sine";
let lfo2Phase = 0;
let lfo2AnimId = null;
let lfo2AnimPhase = 0;

// ─── FILTER ADSR STATE ───────────────────────────────────────────────────────
let filterADSR = { a: 10, d: 150, s: 0.3, r: 300 };
let filterADSRamt = 0.5; // -1..+1 (mapped from -100..+100 slider)

// ─── KEY FOLLOW STATE ────────────────────────────────────────────────────────
let keyFollow = 0.0; // 0..1 (slider 0–100)
// Reference MIDI note for key-follow (centre of keyboard, C4 = MIDI 60)
const KEY_FOLLOW_REF_MIDI = 60;

// ─── DELAY STATE ─────────────────────────────────────────────────────────────
let delaySubdiv = 0.5; // beats (1/8 note default)
let delayFeedback = 0.35;
let delayWet = 0.25;
let delaySpread = 1.0;
let delayHiCutFreq = 6300;
let delayDryGain = null;
let delayWetGain = null;
let delayL = null,
  delayR = null;
let delayPanL = null,
  delayPanR = null;
let delayHiCutLR = null,
  delayHiCutRL = null;
let delayFbGainLR = null,
  delayFbGainRL = null;
let ppAnimId = null;

// Step data: array of { degree: number, rest: boolean }
let steps = Array.from({ length: 16 }, (_, i) => ({
  degree: i % 7,
  rest: false,
}));

// ─── AUDIO SETUP ─────────────────────────────────────────────────────────────
function initAudio() {
  if (audioCtx) return;
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  masterGain = audioCtx.createGain();
  masterGain.gain.value = volume * 0.3;
  filterNode = audioCtx.createBiquadFilter();
  filterNode.type = "lowpass";
  filterNode.frequency.value = filterCutoff;
  filterNode.Q.value = filterRes;
  masterGain.connect(audioCtx.destination);

  // Dry path: filter → dryGain → masterGain
  delayDryGain = audioCtx.createGain();
  delayDryGain.gain.value = 1 - delayWet;
  filterNode.connect(delayDryGain);
  delayDryGain.connect(masterGain);

  // Ping-pong delay wet path
  delayL = audioCtx.createDelay(4.0);
  delayR = audioCtx.createDelay(4.0);
  const dTime = (60 / bpm) * delaySubdiv;
  delayL.delayTime.value = dTime;
  delayR.delayTime.value = dTime;
  delayPanL = audioCtx.createStereoPanner();
  delayPanR = audioCtx.createStereoPanner();
  delayPanL.pan.value = -delaySpread;
  delayPanR.pan.value = delaySpread;
  delayWetGain = audioCtx.createGain();
  delayWetGain.gain.value = delayWet;
  delayWetGain.connect(masterGain);
  delayHiCutLR = audioCtx.createBiquadFilter();
  delayHiCutLR.type = "lowpass";
  delayHiCutLR.Q.value = 0.5;
  delayHiCutLR.frequency.value = delayHiCutFreq;
  delayHiCutRL = audioCtx.createBiquadFilter();
  delayHiCutRL.type = "lowpass";
  delayHiCutRL.Q.value = 0.5;
  delayHiCutRL.frequency.value = delayHiCutFreq;
  delayFbGainLR = audioCtx.createGain();
  delayFbGainLR.gain.value = delayFeedback;
  delayFbGainRL = audioCtx.createGain();
  delayFbGainRL.gain.value = delayFeedback;
  // Graph: input → delayL → panL → wetOut
  //               delayL → hiCut → fbGain → delayR → panR → wetOut
  //               delayR → hiCut → fbGain → delayL  (ping-pong loop)
  filterNode.connect(delayL);
  delayL.connect(delayPanL);
  delayPanL.connect(delayWetGain);
  delayL.connect(delayHiCutLR);
  delayHiCutLR.connect(delayFbGainLR);
  delayFbGainLR.connect(delayR);
  delayR.connect(delayPanR);
  delayPanR.connect(delayWetGain);
  delayR.connect(delayHiCutRL);
  delayHiCutRL.connect(delayFbGainRL);
  delayFbGainRL.connect(delayL);

  // LFO oscillator modulates filter cutoff
  lfoOsc = audioCtx.createOscillator();
  lfoGain = audioCtx.createGain();
  lfoOsc.type = lfoWave;
  lfoOsc.frequency.value = lfoRate;
  lfoGain.gain.value = lfoDepth * filterCutoff;
  lfoOsc.connect(lfoGain);
  lfoGain.connect(filterNode.frequency);
  lfoOsc.start();
}

function playNote(freq, time) {
  if (!audioCtx) return;
  const osc = audioCtx.createOscillator();
  const env = audioCtx.createGain();
  if (waveType === "pulse") {
    osc.setPeriodicWave(buildPulseWave(currentPW));
  } else {
    osc.type = waveType;
  }
  osc.frequency.value = freq;
  osc.connect(env);
  env.connect(filterNode);
  const a = adsr.a / 1000;
  const d = adsr.d / 1000;
  const s = adsr.s;
  const r = adsr.r / 1000;
  const stepDur = (60 / bpm) * stepBeats;
  const noteDur = stepDur * 0.85;
  env.gain.setValueAtTime(0, time);
  env.gain.linearRampToValueAtTime(1, time + a);
  env.gain.linearRampToValueAtTime(s, time + a + d);
  env.gain.setValueAtTime(s, time + noteDur);
  env.gain.linearRampToValueAtTime(0, time + noteDur + r);
  osc.start(time);
  osc.stop(time + noteDur + r + 0.05);

  // ── Filter ADSR + Key-Follow per note ──────────────────────────────────────
  // Key-follow: shift cutoff by semitones relative to KEY_FOLLOW_REF_MIDI
  // freq → approximate MIDI pitch
  const noteMidi = 69 + 12 * Math.log2(freq / 440);
  const semiOffset = (noteMidi - KEY_FOLLOW_REF_MIDI) * keyFollow;
  const kfMult = Math.pow(2, semiOffset / 12);
  const baseCutoff = Math.min(20000, filterCutoff * kfMult);

  // Filter ADSR modulation: automate filterNode.frequency
  const fa = filterADSR.a / 1000;
  const fd = filterADSR.d / 1000;
  const fs = filterADSR.s;
  const fr = filterADSR.r / 1000;
  // amount: map filterADSRamt (-1..+1) to a semitone range (±48 semitones)
  const maxDelta = baseCutoff * (Math.pow(2, 4) - 1); // 4 octaves max sweep
  const peakCutoff = Math.min(
    20000,
    Math.max(20, baseCutoff + filterADSRamt * maxDelta),
  );
  const susCutoff = Math.min(
    20000,
    Math.max(20, baseCutoff + filterADSRamt * maxDelta * fs),
  );

  filterNode.frequency.cancelScheduledValues(time);
  filterNode.frequency.setValueAtTime(baseCutoff, time);
  filterNode.frequency.linearRampToValueAtTime(peakCutoff, time + fa);
  filterNode.frequency.linearRampToValueAtTime(susCutoff, time + fa + fd);
  filterNode.frequency.setValueAtTime(susCutoff, time + noteDur);
  filterNode.frequency.linearRampToValueAtTime(baseCutoff, time + noteDur + fr);
}

// ─── SCALE COMPUTATION ───────────────────────────────────────────────────────
// Convert cents offset from root to frequency
function centsToHz(rootHz, cents) {
  return rootHz * Math.pow(2, cents / 1200);
}

// Get all frequencies for current scale across 88 notes (A0 to C8)
function compute88Notes() {
  const scale = SCALES[selectedScaleIdx];
  const deg = scale.cents;
  const numDegrees = deg.length;
  // A0 = MIDI 21, C8 = MIDI 108
  const notes = [];
  for (let midi = 21; midi <= 108; midi++) {
    // Find which octave and degree this midi note falls on
    // Root is at rootMidi + rootOctave * 12 (roughly)
    const rootMidiNum = rootMidi + rootOctave * 12;
    const diff = midi - rootMidiNum;
    // Find closest degree in the scale
    // We need to find which octave and degree
    const totalCentsFromRoot = diff * 100; // 12-TET as reference for MIDI position
    // Find octave
    const scaleOctave = Math.floor(totalCentsFromRoot / 1200);
    // Find degree by finding closest scale cent
    let bestDeg = 0;
    let bestDist = Infinity;
    for (let d = 0; d < numDegrees; d++) {
      const scaleCents = deg[d] + scaleOctave * 1200;
      const dist = Math.abs(totalCentsFromRoot - scaleCents);
      if (dist < bestDist) {
        bestDist = dist;
        bestDeg = d;
      }
    }
    const inScale = bestDist < 60; // within 60 cents = "in scale"
    const trueCents = deg[bestDeg] + scaleOctave * 1200;
    const trueHz = centsToHz(rootHz, trueCents);
    notes.push({
      midi,
      inScale,
      degree: bestDeg,
      hz: trueHz,
      isRoot: bestDeg === 0 && bestDist < 30,
    });
  }
  return notes;
}

function getFreqForDegree(degree) {
  const scale = SCALES[selectedScaleIdx];
  const deg = scale.cents;
  const numDegrees = deg.length;
  const oct = Math.floor(degree / numDegrees);
  const d = degree % numDegrees;
  const cents = deg[d] + oct * 1200;
  return centsToHz(rootHz, cents);
}

// ─── SEQUENCER ───────────────────────────────────────────────────────────────
function getNextStep() {
  const active = numSteps;
  if (direction === "fwd") {
    currentStep = (currentStep + 1) % active;
  } else if (direction === "rev") {
    currentStep = (currentStep - 1 + active) % active;
  } else if (direction === "ping") {
    currentStep += pingDir;
    if (currentStep >= active) {
      currentStep = active - 2;
      pingDir = -1;
    }
    if (currentStep < 0) {
      currentStep = 1;
      pingDir = 1;
    }
  } else {
    currentStep = Math.floor(Math.random() * active);
  }
  return currentStep;
}

function scheduler() {
  const lookAhead = 0.1;
  while (nextNoteTime < audioCtx.currentTime + lookAhead) {
    const step = steps[currentStep];
    const stepDur = (60 / bpm) * stepBeats;
    // LFO 2 phase-advance per step for PWM modulation
    if (waveType === "pulse") {
      const lfo2Val = Math.sin(lfo2Phase);
      currentPW = Math.max(
        0.05,
        Math.min(0.95, pulseWidth + lfo2Val * lfo2Depth * 0.45),
      );
    }
    if (!step.rest) {
      const freq = getFreqForDegree(step.degree);
      playNote(freq, nextNoteTime);
      // Update UI
      const si = currentStep;
      const f = freq;
      const scale = SCALES[selectedScaleIdx];
      const deg = step.degree % scale.cents.length;
      setTimeout(
        () => {
          updatePlayingUI(si, f, deg);
        },
        Math.max(0, (nextNoteTime - audioCtx.currentTime) * 1000),
      );
    }
    lfoPhase += lfoRate * stepDur * 2 * Math.PI;
    lfo2Phase += lfo2Rate * stepDur * 2 * Math.PI;
    nextNoteTime += stepDur;
    getNextStep();
  }
  schedulerTimer = setTimeout(scheduler, 25);
}

function updatePlayingUI(stepIdx, freq, deg) {
  // Clear previous
  document
    .querySelectorAll(".step")
    .forEach((s) => s.classList.remove("playing-step"));
  document
    .querySelectorAll(".kb-key")
    .forEach((k) => k.classList.remove("playing-key"));
  const stepEl = document.getElementById(`step-${stepIdx}`);
  if (stepEl) stepEl.classList.add("playing-step");
  // Find closest key on keyboard
  const notes88 = compute88Notes();
  let bestKey = -1,
    bestDist = Infinity;
  notes88.forEach((n, i) => {
    if (!n.inScale) return;
    const d = Math.abs(n.degree - deg);
    if (d < bestDist) {
      bestDist = d;
      bestKey = i;
    }
  });
  const keyEl = document.getElementById(`key-${bestKey}`);
  if (keyEl) keyEl.classList.add("playing-key");
  // Status
  document.getElementById("statusNote").textContent = `DEG ${deg + 1}`;
  document.getElementById("statusFreq").textContent = `${freq.toFixed(2)} Hz`;
  document.getElementById("statusStep").textContent = stepIdx + 1;
  const bar = Math.floor(stepIdx / 4) + 1;
  const beat = (stepIdx % 4) + 1;
  document.getElementById("posDisplay").textContent = `0${bar} · 0${beat}`;
}

function togglePlay() {
  initAudio();
  if (isPlaying) {
    isPlaying = false;
    clearTimeout(schedulerTimer);
    document.getElementById("playBtn").textContent = "▶ PLAY";
    document.getElementById("playBtn").classList.remove("active");
  } else {
    isPlaying = true;
    currentStep = 0;
    nextNoteTime = audioCtx.currentTime + 0.05;
    scheduler();
    document.getElementById("playBtn").textContent = "⏸ PAUSE";
    document.getElementById("playBtn").classList.add("active");
  }
}

function stopSeq() {
  isPlaying = false;
  clearTimeout(schedulerTimer);
  currentStep = 0;
  document.getElementById("playBtn").textContent = "▶ PLAY";
  document.getElementById("playBtn").classList.remove("active");
  document
    .querySelectorAll(".step")
    .forEach((s) => s.classList.remove("playing-step"));
  document
    .querySelectorAll(".kb-key")
    .forEach((k) => k.classList.remove("playing-key"));
  document.getElementById("posDisplay").textContent = "01 · 01";
  document.getElementById("statusNote").textContent = "—";
  document.getElementById("statusFreq").textContent = "—";
  document.getElementById("statusStep").textContent = "—";
}

// ─── CONTROLS ────────────────────────────────────────────────────────────────
function updateBPM(v) {
  bpm = parseInt(v);
  document.getElementById("bpmVal").textContent = v;
  updateDelay();
}

function updateSteps(v) {
  numSteps = parseInt(v);
  document.getElementById("stepsVal").textContent = v;
  renderStepGrid();
}

function updateStepLen(v) {
  stepBeats = parseFloat(v);
}

function updateEnv() {
  adsr.a = parseInt(document.getElementById("atkSlider").value);
  adsr.d = parseInt(document.getElementById("decSlider").value);
  adsr.s = parseInt(document.getElementById("susSlider").value) / 100;
  adsr.r = parseInt(document.getElementById("relSlider").value);
  document.getElementById("atkVal").textContent = adsr.a + "ms";
  document.getElementById("decVal").textContent = adsr.d + "ms";
  document.getElementById("susVal").textContent =
    Math.round(adsr.s * 100) + "%";
  document.getElementById("relVal").textContent = adsr.r + "ms";
  drawADSRCanvas();
  if (window.updateKnobVisual) {
    ["atkSlider", "decSlider", "susSlider", "relSlider", "volSlider"].forEach(
      window.updateKnobVisual,
    );
  }
}

function updateVol(v) {
  volume = parseInt(v) / 100;
  document.getElementById("volVal").textContent = v + "%";
  if (masterGain) masterGain.gain.value = volume * 0.3;
}

// ─── PULSE WAVE ───────────────────────────────────────────────────────────────
function buildPulseWave(width) {
  const N = 256;
  const real = new Float32Array(N);
  const imag = new Float32Array(N);
  real[0] = 2 * width - 1; // DC offset
  for (let n = 1; n < N; n++) {
    real[n] = (2 / (n * Math.PI)) * Math.sin(n * Math.PI * width);
  }
  return audioCtx.createPeriodicWave(real, imag, {
    disableNormalization: false,
  });
}

function setWaveType(v) {
  waveType = v;
  const isPulse = v === "pulse";
  document.getElementById("pwGroup").style.opacity = isPulse ? "1" : "0.35";
  document.getElementById("pwm2Group").style.opacity = isPulse ? "1" : "0.35";
  document.getElementById("pwm2DepthGroup").style.opacity = isPulse
    ? "1"
    : "0.35";
  document.getElementById("pwm2ShapeGroup").style.opacity = isPulse
    ? "1"
    : "0.35";
  document.getElementById("pwm2CanvasGroup").style.opacity = isPulse
    ? "1"
    : "0.35";
}

// ─── FILTER CONTROLS ──────────────────────────────────────────────────────────
function updateFilter() {
  const cv = parseInt(document.getElementById("cutoffSlider").value);
  const rv = parseInt(document.getElementById("resSlider").value);
  filterCutoff = 20 * Math.pow(1000, cv / 100);
  filterRes = 0.1 + (rv / 100) * 19.9;
  if (filterNode) {
    filterNode.frequency.value = filterCutoff;
    filterNode.Q.value = filterRes;
    if (lfoGain) lfoGain.gain.value = lfoDepth * filterCutoff;
  }
  document.getElementById("cutoffVal").textContent =
    filterCutoff >= 1000
      ? (filterCutoff / 1000).toFixed(1) + "kHz"
      : Math.round(filterCutoff) + "Hz";
  document.getElementById("resVal").textContent = "Q " + filterRes.toFixed(1);
}

// ─── LFO CONTROLS ─────────────────────────────────────────────────────────────
function updateLFO() {
  const rv = parseInt(document.getElementById("lfoRateSlider").value);
  const dv = parseInt(document.getElementById("lfoDepthSlider").value);
  lfoWave = document.getElementById("lfoWaveSelect").value;
  lfoRate = 0.05 * Math.pow(400, rv / 100);
  lfoDepth = dv / 100;
  if (lfoOsc) {
    lfoOsc.type = lfoWave;
    lfoOsc.frequency.value = lfoRate;
  }
  if (lfoGain) lfoGain.gain.value = lfoDepth * filterCutoff;
  document.getElementById("lfoRateVal").textContent =
    (lfoRate < 1 ? lfoRate.toFixed(2) : lfoRate.toFixed(1)) + "Hz";
  document.getElementById("lfoDepthVal").textContent = dv + "%";
}

function updatePW(v) {
  pulseWidth = parseInt(v) / 100;
  document.getElementById("pwVal").textContent = v + "%";
}

// ─── LFO 2 (PWM) CONTROLS ─────────────────────────────────────────────────
function updatePwLFO() {
  const rv = parseInt(document.getElementById("lfo2RateSlider").value);
  const dv = parseInt(document.getElementById("lfo2DepthSlider").value);
  lfo2Wave = document.getElementById("lfo2WaveSelect").value;
  lfo2Rate = 0.05 * Math.pow(400, rv / 100);
  lfo2Depth = dv / 100;
  document.getElementById("lfo2RateVal").textContent =
    (lfo2Rate < 1 ? lfo2Rate.toFixed(2) : lfo2Rate.toFixed(1)) + "Hz";
  document.getElementById("lfo2DepthVal").textContent = dv + "%";
}

// ─── FILTER ADSR CONTROLS ─────────────────────────────────────────────────
function updateFilterADSR() {
  filterADSR.a = parseInt(document.getElementById("fatkSlider").value);
  filterADSR.d = parseInt(document.getElementById("fdecSlider").value);
  filterADSR.s = parseInt(document.getElementById("fsusSlider").value) / 100;
  filterADSR.r = parseInt(document.getElementById("frelSlider").value);
  const amtRaw = parseInt(document.getElementById("famtSlider").value);
  filterADSRamt = amtRaw / 100;
  document.getElementById("fatkVal").textContent = filterADSR.a + "ms";
  document.getElementById("fdecVal").textContent = filterADSR.d + "ms";
  document.getElementById("fsusVal").textContent =
    Math.round(filterADSR.s * 100) + "%";
  document.getElementById("frelVal").textContent = filterADSR.r + "ms";
  document.getElementById("famtVal").textContent =
    (amtRaw >= 0 ? "+" : "") + amtRaw + "%";
  drawFilterADSRCanvas();
}

// ─── KEY FOLLOW CONTROLS ──────────────────────────────────────────────────
function updateKeyFollow() {
  keyFollow = parseInt(document.getElementById("keyFollowSlider").value) / 100;
  document.getElementById("keyFollowVal").textContent =
    Math.round(keyFollow * 100) + "%";
}

// ─── DELAY CONTROLS ──────────────────────────────────────────────────────────
function updateDelay() {
  delaySubdiv = parseFloat(document.getElementById("delayTimeSelect").value);
  const fbV = parseInt(document.getElementById("delayFbSlider").value);
  const wetV = parseInt(document.getElementById("delayWetSlider").value);
  const sprV = parseInt(document.getElementById("delaySpreadSlider").value);
  const hcV = parseInt(document.getElementById("delayHiCutSlider").value);
  delayFeedback = fbV / 100;
  delayWet = wetV / 100;
  delaySpread = sprV / 100;
  // Log scale hi-cut: 200Hz → 20kHz
  delayHiCutFreq = 200 * Math.pow(100, hcV / 100);
  const dTime = (60 / bpm) * delaySubdiv;
  if (delayL) delayL.delayTime.value = dTime;
  if (delayR) delayR.delayTime.value = dTime;
  if (delayFbGainLR) delayFbGainLR.gain.value = delayFeedback;
  if (delayFbGainRL) delayFbGainRL.gain.value = delayFeedback;
  if (delayPanL) delayPanL.pan.value = -delaySpread;
  if (delayPanR) delayPanR.pan.value = delaySpread;
  if (delayHiCutLR) delayHiCutLR.frequency.value = delayHiCutFreq;
  if (delayHiCutRL) delayHiCutRL.frequency.value = delayHiCutFreq;
  if (delayDryGain) delayDryGain.gain.value = 1 - delayWet;
  if (delayWetGain) delayWetGain.gain.value = delayWet;
  document.getElementById("delayFbVal").textContent = fbV + "%";
  document.getElementById("delayWetVal").textContent = wetV + "%";
  document.getElementById("delaySpreadVal").textContent = sprV + "%";
  document.getElementById("delayHiCutVal").textContent =
    delayHiCutFreq >= 1000
      ? (delayHiCutFreq / 1000).toFixed(1) + "kHz"
      : Math.round(delayHiCutFreq) + "Hz";
  // Show tempo-synced delay time in ms
  const ms = Math.round((60 / bpm) * delaySubdiv * 1000);
  document.getElementById("delayTimeVal").textContent = ms + "ms";
}

// ─── PING-PONG CANVAS ────────────────────────────────────────────────────────
function drawPPCanvas() {
  const canvas = document.getElementById("ppCanvas");
  if (!canvas) return;
  const W = canvas.width,
    H = canvas.height;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#0a0c0e";
  ctx.fillRect(0, 0, W, H);
  // Divider
  ctx.strokeStyle = "#1e2830";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(W / 2, 2);
  ctx.lineTo(W / 2, H - 13);
  ctx.stroke();
  // Labels
  ctx.fillStyle = "#4a6070";
  ctx.font = "8px monospace";
  ctx.textAlign = "center";
  ctx.fillText("L", W * 0.25, H - 2);
  ctx.fillText("R", W * 0.75, H - 2);
  const T = delayL ? delayL.delayTime.value : (60 / bpm) * delaySubdiv;
  const now = audioCtx ? audioCtx.currentTime : performance.now() / 1000;
  const phase2 = (now % (T * 2)) / (T * 2); // 0..1 over L+R cycle
  const midY = H * 0.4;
  // L echo (first half of cycle)
  const lPulse = phase2 < 0.5 ? Math.pow(1 - phase2 * 2, 0.4) : 0;
  ctx.beginPath();
  ctx.arc(W * 0.25, midY, 4 + lPulse * 5, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(0,229,255,${0.12 + lPulse * 0.88})`;
  ctx.fill();
  // glow ring
  if (lPulse > 0.1) {
    ctx.beginPath();
    ctx.arc(W * 0.25, midY, 10 + lPulse * 6, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(0,229,255,${lPulse * 0.25})`;
    ctx.lineWidth = 2;
    ctx.stroke();
  }
  // R echo (second half)
  const rPulse = phase2 >= 0.5 ? Math.pow(1 - (phase2 - 0.5) * 2, 0.4) : 0;
  ctx.beginPath();
  ctx.arc(W * 0.75, midY, 4 + rPulse * 5, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(255,107,53,${0.12 + rPulse * 0.88})`;
  ctx.fill();
  if (rPulse > 0.1) {
    ctx.beginPath();
    ctx.arc(W * 0.75, midY, 10 + rPulse * 6, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(255,107,53,${rPulse * 0.25})`;
    ctx.lineWidth = 2;
    ctx.stroke();
  }
  // Feedback echo dots (green, fading)
  let fbAmp = delayFeedback;
  for (let i = 1; i <= 5 && fbAmp > 0.04; i++) {
    const ePhase = (((phase2 - i * 0.5) % 1) + 1) % 1;
    const isR = i % 2 === 1;
    const ePulse = ePhase < 0.5 ? Math.pow(1 - ePhase * 2, 0.4) : 0;
    const cx = isR ? W * 0.75 : W * 0.25;
    ctx.beginPath();
    ctx.arc(cx, midY, 2 + ePulse * 3, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(127,255,0,${fbAmp * ePulse})`;
    ctx.fill();
    fbAmp *= delayFeedback;
  }
  ppAnimId = requestAnimationFrame(drawPPCanvas);
}

// ─── ADSR CANVAS ─────────────────────────────────────────────────────────────
function drawADSRCanvas() {
  const canvas = document.getElementById("adsrCanvas");
  if (!canvas) return;
  const W = canvas.width,
    H = canvas.height;
  const c = canvas.getContext("2d");
  c.clearRect(0, 0, W, H);
  c.fillStyle = "#0a0c0e";
  c.fillRect(0, 0, W, H);
  const a = adsr.a,
    d = adsr.d,
    s = adsr.s,
    r = adsr.r;
  const hold = Math.max(a + d, 120);
  const total = a + d + hold + r;
  const pad = 5;
  const w = W - pad * 2,
    h = H - pad * 2;
  const xA = pad + (a / total) * w;
  const xD = xA + (d / total) * w;
  const xS = xD + (hold / total) * w;
  const xR = pad + w;
  const yTop = pad,
    yBot = pad + h;
  const ySus = pad + h * (1 - s);
  // Filled area
  c.beginPath();
  c.moveTo(pad, yBot);
  c.lineTo(xA, yTop);
  c.lineTo(xD, ySus);
  c.lineTo(xS, ySus);
  c.lineTo(xR, yBot);
  c.closePath();
  c.fillStyle = "rgba(0,229,255,0.07)";
  c.fill();
  // Envelope line
  c.beginPath();
  c.moveTo(pad, yBot);
  c.lineTo(xA, yTop);
  c.lineTo(xD, ySus);
  c.lineTo(xS, ySus);
  c.lineTo(xR, yBot);
  c.strokeStyle = "#00e5ff";
  c.lineWidth = 1.5;
  c.stroke();
  // Breakpoint dots
  [
    [xA, yTop],
    [xD, ySus],
    [xS, ySus],
  ].forEach(([x, y]) => {
    c.beginPath();
    c.arc(x, y, 2, 0, Math.PI * 2);
    c.fillStyle = "#00e5ff";
    c.fill();
  });
  // Segment labels
  c.fillStyle = "#4a6070";
  c.font = "7px monospace";
  c.textAlign = "center";
  c.fillText("A", (pad + xA) / 2, yBot - 2);
  c.fillText("D", (xA + xD) / 2, yBot - 2);
  c.fillText("S", (xD + xS) / 2, yBot - 2);
  c.fillText("R", (xS + xR) / 2, yBot - 2);
}

// ─── FILTER ADSR CANVAS ──────────────────────────────────────────────────────
function drawFilterADSRCanvas() {
  const canvas = document.getElementById("fadsrCanvas");
  if (!canvas) return;
  const W = canvas.width,
    H = canvas.height;
  const c = canvas.getContext("2d");
  c.clearRect(0, 0, W, H);
  c.fillStyle = "#0a0c0e";
  c.fillRect(0, 0, W, H);
  const a = filterADSR.a,
    d = filterADSR.d,
    s = filterADSR.s,
    r = filterADSR.r;
  const hold = Math.max(a + d, 120);
  const total = a + d + hold + r;
  const pad = 4;
  const w = W - pad * 2,
    h = H - pad * 2 - 6;
  const xA = pad + (a / total) * w;
  const xD = xA + (d / total) * w;
  const xS = xD + (hold / total) * w;
  const xR = pad + w;
  const yTop = pad,
    yBot = pad + h;
  // for positive amt: peak is at top; for negative: peak is at bottom
  const ySus = yBot - h * s * Math.abs(filterADSRamt);
  const yPeak = filterADSRamt >= 0 ? yTop : yBot;
  c.beginPath();
  c.moveTo(pad, yBot);
  c.lineTo(xA, yPeak);
  c.lineTo(xD, ySus);
  c.lineTo(xS, ySus);
  c.lineTo(xR, yBot);
  c.closePath();
  c.fillStyle = "rgba(255,107,53,0.07)";
  c.fill();
  c.beginPath();
  c.moveTo(pad, yBot);
  c.lineTo(xA, yPeak);
  c.lineTo(xD, ySus);
  c.lineTo(xS, ySus);
  c.lineTo(xR, yBot);
  c.strokeStyle = "#ff6b35";
  c.lineWidth = 1.5;
  c.stroke();
  c.fillStyle = "#4a6070";
  c.font = "7px monospace";
  c.textAlign = "center";
  c.fillText("A", (pad + xA) / 2, yBot + 6);
  c.fillText("D", (xA + xD) / 2, yBot + 6);
  c.fillText("S", (xD + xS) / 2, yBot + 6);
  c.fillText("R", (xS + xR) / 2, yBot + 6);
}

// ─── LFO CANVAS ──────────────────────────────────────────────────────────────
function drawLFOCanvas() {
  const canvas = document.getElementById("lfoCanvas");
  if (!canvas) return;
  const W = canvas.width,
    H = canvas.height;
  const c = canvas.getContext("2d");
  c.clearRect(0, 0, W, H);
  c.fillStyle = "#0a0c0e";
  c.fillRect(0, 0, W, H);
  // Center reference line
  c.beginPath();
  c.moveTo(0, H / 2);
  c.lineTo(W, H / 2);
  c.strokeStyle = "#1e2830";
  c.lineWidth = 1;
  c.stroke();
  const shape = lfoWave;
  const cycles = 2.5;
  c.beginPath();
  for (let x = 0; x <= W; x++) {
    const t = (x / W) * cycles * 2 * Math.PI + lfoAnimPhase;
    let y;
    if (shape === "sine") {
      y = Math.sin(t);
    } else if (shape === "triangle") {
      const p = (((t / (2 * Math.PI)) % 1) + 1) % 1;
      y = p < 0.5 ? 4 * p - 1 : 3 - 4 * p;
    } else {
      const p = (((t / (2 * Math.PI)) % 1) + 1) % 1;
      y = 2 * p - 1;
    }
    const cy = H / 2 - y * (H / 2 - 4);
    if (x === 0) c.moveTo(x, cy);
    else c.lineTo(x, cy);
  }
  c.strokeStyle = "#ff6b35";
  c.lineWidth = 1.5;
  c.stroke();
  lfoAnimPhase += 0.04 * lfoRate;
  lfoAnimId = requestAnimationFrame(drawLFOCanvas);
}

// ─── LFO 2 CANVAS ────────────────────────────────────────────────────────────
function drawLFO2Canvas() {
  const canvas = document.getElementById("lfo2Canvas");
  if (!canvas) return;
  const W = canvas.width,
    H = canvas.height;
  const c = canvas.getContext("2d");
  c.clearRect(0, 0, W, H);
  c.fillStyle = "#0a0c0e";
  c.fillRect(0, 0, W, H);
  c.beginPath();
  c.moveTo(0, H / 2);
  c.lineTo(W, H / 2);
  c.strokeStyle = "#1e2830";
  c.lineWidth = 1;
  c.stroke();
  const shape = lfo2Wave;
  const cycles = 2.5;
  c.beginPath();
  for (let x = 0; x <= W; x++) {
    const t = (x / W) * cycles * 2 * Math.PI + lfo2AnimPhase;
    let y;
    if (shape === "sine") {
      y = Math.sin(t);
    } else if (shape === "triangle") {
      const p = (((t / (2 * Math.PI)) % 1) + 1) % 1;
      y = p < 0.5 ? 4 * p - 1 : 3 - 4 * p;
    } else {
      const p = (((t / (2 * Math.PI)) % 1) + 1) % 1;
      y = 2 * p - 1;
    }
    const cy = H / 2 - y * (H / 2 - 4);
    if (x === 0) c.moveTo(x, cy);
    else c.lineTo(x, cy);
  }
  c.strokeStyle = "#00e5ff";
  c.lineWidth = 1.5;
  c.stroke();
  lfo2AnimPhase += 0.04 * lfo2Rate;
  lfo2AnimId = requestAnimationFrame(drawLFO2Canvas);
}

function updateRoot() {
  rootMidi = parseInt(document.getElementById("rootSelect").value);
  rootOctave = parseInt(document.getElementById("octaveSelect").value);
  // Compute Hz: MIDI note to Hz
  // A4 = MIDI 69 = 440 Hz
  const midiNum = rootMidi + rootOctave * 12;
  rootHz = 440 * Math.pow(2, (midiNum - 69) / 12);
  document.getElementById("rootHzDisplay").textContent = rootHz.toFixed(2);
  const noteNames = ["C", "D", "E", "F", "G", "A", "B"];
  const noteName =
    noteNames[
      Object.values({
        0: "C",
        2: "D",
        4: "E",
        5: "F",
        7: "G",
        9: "A",
        11: "B",
      })[
        Object.keys({
          0: "C",
          2: "D",
          4: "E",
          5: "F",
          7: "G",
          9: "A",
          11: "B",
        }).indexOf(String(rootMidi))
      ]
    ];
  document.getElementById("statusRoot").textContent = `${rootHz.toFixed(2)} Hz`;
  renderScaleDegrees();
  renderKeyboard();
}

// ─── RENDER FUNCTIONS ─────────────────────────────────────────────────────────
function selectScale(idx) {
  selectedScaleIdx = idx;
  document.querySelectorAll(".scale-item").forEach((el, i) => {
    el.classList.toggle("selected", i === idx);
  });
  const scale = SCALES[idx];
  document.getElementById("activeScaleName").textContent =
    scale.name.toUpperCase();
  document.getElementById("activeScaleInfo").textContent = scale.info;
  document.getElementById("statusScale").textContent = scale.name.toUpperCase();
  renderScaleDegrees();
  renderKeyboard();
  renderStepGrid();
}

function renderScaleDegrees() {
  const scale = SCALES[selectedScaleIdx];
  const container = document.getElementById("scaleDegrees");
  container.innerHTML = "";
  scale.cents.forEach((c, i) => {
    const hz = centsToHz(rootHz, c);
    const chip = document.createElement("div");
    chip.className = "degree-chip" + (i === 0 ? " root-chip" : "");
    chip.innerHTML = `
<div class="degree-num">DEG ${i + 1}</div>
<div style="font-size:11px; color:${i === 0 ? "var(--accent)" : "var(--text)"}">${c === 0 ? "ROOT" : c % 1200 === 0 ? "OCT" : c.toFixed(1) + "¢"}</div>
<div class="degree-hz">${hz.toFixed(1)}Hz</div>
    `;
    chip.onclick = () => {
      initAudio();
      playNote(hz, audioCtx.currentTime);
    };
    container.appendChild(chip);
  });
}

function renderKeyboard() {
  const strip = document.getElementById("kbStrip");
  strip.innerHTML = "";
  const notes = compute88Notes();
  notes.forEach((n, i) => {
    const key = document.createElement("div");
    key.className =
      "kb-key" + (n.isRoot ? " root-key" : n.inScale ? " in-scale" : "");
    key.id = `key-${i}`;
    key.title = `MIDI ${n.midi} · ${n.hz.toFixed(2)} Hz · ${n.inScale ? "IN SCALE (deg " + (n.degree + 1) + ")" : "OUT OF SCALE"}`;
    key.onclick = () => {
      initAudio();
      playNote(n.hz, audioCtx.currentTime);
    };
    strip.appendChild(key);
  });
}

function renderStepGrid() {
  const grid = document.getElementById("stepGrid");
  grid.innerHTML = "";
  const scale = SCALES[selectedScaleIdx];
  const maxDeg = scale.cents.length * 3; // 3 octaves of range

  for (let i = 0; i < 16; i++) {
    const step = steps[i];
    const freq = getFreqForDegree(step.degree);
    const degName = `D${(step.degree % scale.cents.length) + 1}`;
    const oct = Math.floor(step.degree / scale.cents.length) + 1;

    const el = document.createElement("div");
    el.className = `step${i < numSteps ? " active-step" : ""}${step.rest ? "" : ""}`;
    el.id = `step-${i}`;
    el.innerHTML = `
<div class="step-num">${String(i + 1).padStart(2, "0")}</div>
${
  step.rest
    ? '<div class="step-rest">REST</div>'
    : `<div class="step-note">${degName}</div>
   <div style="font-size:9px; color:var(--accent3)">OCT${oct}</div>
   <div class="step-hz">${freq.toFixed(1)}Hz</div>`
}
<div class="step-btns">
  <div class="step-btn-row">
    <div class="step-mini-btn" onclick="stepDegChange(${i}, -1)">◀</div>
    <div class="step-mini-btn" onclick="stepDegChange(${i}, 1)">▶</div>
  </div>
  <div class="step-btn-row">
    <div class="step-mini-btn" onclick="stepOctChange(${i}, -1)">▼</div>
    <div class="step-mini-btn" onclick="stepOctChange(${i}, 1)">▲</div>
  </div>
  <div class="step-btn-row">
    <div class="step-mini-btn${step.rest ? " rest-active" : ""}" onclick="toggleRest(${i})">RST</div>
    <div class="step-mini-btn" onclick="previewStep(${i})">▶</div>
  </div>
</div>
    `;
    grid.appendChild(el);
  }
}

function stepDegChange(i, delta) {
  const scale = SCALES[selectedScaleIdx];
  const oct = Math.floor(steps[i].degree / scale.cents.length);
  let deg = (steps[i].degree % scale.cents.length) + delta;
  if (deg < 0) deg = scale.cents.length - 1;
  if (deg >= scale.cents.length) deg = 0;
  steps[i].degree = oct * scale.cents.length + deg;
  renderStepGrid();
}

function stepOctChange(i, delta) {
  const scale = SCALES[selectedScaleIdx];
  const oct = Math.floor(steps[i].degree / scale.cents.length) + delta;
  const deg = steps[i].degree % scale.cents.length;
  const newOct = Math.max(0, Math.min(3, oct));
  steps[i].degree = newOct * scale.cents.length + deg;
  renderStepGrid();
}

function toggleRest(i) {
  steps[i].rest = !steps[i].rest;
  renderStepGrid();
}

function previewStep(i) {
  if (steps[i].rest) return;
  initAudio();
  playNote(getFreqForDegree(steps[i].degree), audioCtx.currentTime);
}

function renderScaleList() {
  const list = document.getElementById("scaleList");
  list.innerHTML = "";
  let currentCat = "";
  document.getElementById("scaleCount").textContent = SCALES.length;

  SCALES.forEach((scale, idx) => {
    if (scale.cat !== currentCat) {
      currentCat = scale.cat;
      const catEl = document.createElement("div");
      catEl.className = "scale-category";
      catEl.textContent = scale.cat;
      list.appendChild(catEl);
    }
    const item = document.createElement("div");
    item.className = "scale-item" + (idx === 0 ? " selected" : "");
    item.innerHTML = `
<span class="scale-name">${scale.name}</span>
<span class="scale-info">${scale.cents.length}n</span>
    `;
    item.onclick = () => selectScale(idx);
    list.appendChild(item);
  });
}

// ─── ROTARY KNOB DRAG SYSTEM ─────────────────────────────────────────────────
(function () {
  let activeKnobInput = null;
  let dragStartY = 0;
  let dragStartVal = 0;

  function getKnobAngle(inputId) {
    const inp = document.getElementById(inputId);
    if (!inp) return -135;
    const min = parseFloat(inp.min);
    const max = parseFloat(inp.max);
    const val = parseFloat(inp.value);
    const t = (val - min) / (max - min);
    return -135 + t * 270;
  }

  function updateKnobVisual(inputId) {
    // find sibling .knob via closest .knob-group
    const inp = document.getElementById(inputId);
    if (!inp) return;
    const group = inp.closest(".knob-group");
    if (!group) return;
    const knobEl = group.querySelector(".knob");
    if (!knobEl) return;
    const angle = getKnobAngle(inputId);
    // Rotate the indicator pseudo-element via CSS variable
    knobEl.style.setProperty("--rot", angle + "deg");
    // Update conic gradient to show filled arc
    const min = parseFloat(inp.min);
    const max = parseFloat(inp.max);
    const val = parseFloat(inp.value);
    const t = (val - min) / (max - min);
    const startDeg = 135; // conic starts at 0 = top, rotated by transform
    const fillDeg = t * 270;
    knobEl.style.background = `conic-gradient(
      from ${startDeg}deg,
      var(--accent) 0deg,
      var(--accent) ${fillDeg}deg,
      var(--dim) ${fillDeg}deg,
      var(--dim) 270deg,
      transparent 270deg
    )`;
    const pseudo = knobEl.querySelector ? null : null;
    knobEl.style.transform = ""; // marker handled via ::after rotation
    // hacky but effective: use a CSS custom property that we read in style
    knobEl.style.setProperty("--rot", angle + "deg");
  }

  function onMove(e) {
    if (!activeKnobInput) return;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const delta = dragStartY - clientY; // positive = drag up = increase
    const inp = document.getElementById(activeKnobInput);
    if (!inp) return;
    const min = parseFloat(inp.min);
    const max = parseFloat(inp.max);
    const range = max - min;
    // sensitivity: full range over ~200px drag
    const newVal = Math.min(
      max,
      Math.max(min, dragStartVal + (delta / 200) * range),
    );
    inp.value = newVal;
    inp.dispatchEvent(new Event("input", { bubbles: true }));
    updateKnobVisual(activeKnobInput);
  }

  function onUp() {
    if (activeKnobInput) {
      const inp = document.getElementById(activeKnobInput);
      if (inp) {
        const group = inp.closest(".knob-group");
        if (group) {
          const knobEl = group.querySelector(".knob");
          if (knobEl) knobEl.classList.remove("active");
        }
      }
    }
    activeKnobInput = null;
    document.removeEventListener("mousemove", onMove);
    document.removeEventListener("mouseup", onUp);
    document.removeEventListener("touchmove", onMove);
    document.removeEventListener("touchend", onUp);
  }

  window.knobDown = function (e, inputId) {
    e.preventDefault();
    activeKnobInput = inputId;
    dragStartY = e.clientY;
    const inp = document.getElementById(inputId);
    dragStartVal = inp ? parseFloat(inp.value) : 0;
    const group = inp ? inp.closest(".knob-group") : null;
    if (group) {
      const knobEl = group.querySelector(".knob");
      if (knobEl) knobEl.classList.add("active");
    }
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
  };

  window.knobTouchStart = function (e, inputId) {
    e.preventDefault();
    activeKnobInput = inputId;
    dragStartY = e.touches[0].clientY;
    const inp = document.getElementById(inputId);
    dragStartVal = inp ? parseFloat(inp.value) : 0;
    document.addEventListener("touchmove", onMove, { passive: false });
    document.addEventListener("touchend", onUp);
  };

  // Initialize all knob visuals after DOM is ready
  function initKnobVisuals() {
    document.querySelectorAll(".knob-hidden").forEach((inp) => {
      updateKnobVisual(inp.id);
    });
  }

  // Run after page load
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initKnobVisuals);
  } else {
    initKnobVisuals();
  }

  // Expose for external calls (e.g. after updateEnv)
  window.updateKnobVisual = updateKnobVisual;
})();

// ─── INIT ────────────────────────────────────────────────────────────────────
renderScaleList();
selectScale(0); // Default: Pythagorean
renderStepGrid();
updateEnv();
updateFilter();
updateLFO();
updatePwLFO();
updateFilterADSR();
updateKeyFollow();
updateDelay();
drawLFOCanvas();
drawLFO2Canvas();
drawPPCanvas();

// Auto-resume AudioContext on first interaction
document.addEventListener(
  "click",
  () => {
    if (audioCtx && audioCtx.state === "suspended") audioCtx.resume();
  },
  { once: false },
);
