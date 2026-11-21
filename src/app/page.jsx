"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowDown,
  ArrowUp,
  Cpu,
  ShieldCheck,
  Server,
  Activity,
  Database,
  Layers,
  Network,
  Lock,
  Smartphone,
  Monitor,
  Sparkles,
  Factory,
  Flame,
  FlaskConical,
  FileSpreadsheet,
  Utensils,
  Cog,
  Mail,
  MessageSquare,
  Radio,
  CheckCircle2,
  Send,
  MapPin,
  Copy,
  Check,
  ExternalLink,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// --- EDITABLE COMPANY LOCATION & COORDINATES ---
const COMPANY_LOCATION = {
  lat: -6.4189,
  lng: 107.4567,
  coordDisplay: "6°25'08.0\"S 107°27'24.1\"E (-6.4189, 107.4567)",
  googleMapsUrl: "https://www.google.com/maps?q=-6.4189,107.4567",
  googleMapsEmbedUrl:
    "https://maps.google.com/maps?q=-6.4189,107.4567&t=&z=14&ie=UTF8&iwloc=&output=embed",
};

// --- FULL-BLEED DUMMY HERO PICTURE (Replace with /images/hero-plant.jpg later) ---
const DUMMY_FULL_HERO_IMAGE = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" fill="none">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="1920" y2="1080" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0B192C"/>
      <stop offset="50%" stop-color="#132A46"/>
      <stop offset="100%" stop-color="#091322"/>
    </linearGradient>
    <radialGradient id="horizonGlow" cx="0.28" cy="0.58" r="0.55">
      <stop offset="0%" stop-color="#06B6D4" stop-opacity="0.32"/>
      <stop offset="60%" stop-color="#0284C7" stop-opacity="0.1"/>
      <stop offset="100%" stop-color="#091322" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="water" x1="0" y1="860" x2="0" y2="1080" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#07111F"/>
      <stop offset="100%" stop-color="#040911"/>
    </linearGradient>
  </defs>
  <rect width="1920" height="1080" fill="url(#sky)"/>
  <rect width="1920" height="1080" fill="url(#horizonGlow)"/>
  <g fill="#0E2036" opacity="0.85">
    <rect x="80" y="540" width="44" height="330"/>
    <rect x="150" y="470" width="60" height="400"/>
    <rect x="240" y="580" width="90" height="290"/>
    <rect x="640" y="510" width="48" height="360"/>
    <rect x="720" y="560" width="110" height="310"/>
  </g>
  <g>
    <rect x="190" y="290" width="68" height="580" rx="6" fill="#0B1728" stroke="#38BDF8" stroke-opacity="0.45" stroke-width="2"/>
    <rect x="212" y="220" width="24" height="70" fill="#0B1728" stroke="#22D3EE" stroke-width="2"/>
    <line x1="175" y1="380" x2="273" y2="380" stroke="#38BDF8" stroke-opacity="0.5" stroke-width="3"/>
    <line x1="175" y1="490" x2="273" y2="490" stroke="#38BDF8" stroke-opacity="0.5" stroke-width="3"/>
    <line x1="175" y1="600" x2="273" y2="600" stroke="#38BDF8" stroke-opacity="0.5" stroke-width="3"/>
    <rect x="310" y="360" width="84" height="510" rx="6" fill="#0D1C30" stroke="#38BDF8" stroke-opacity="0.4" stroke-width="2"/>
    <circle cx="352" cy="430" r="6" fill="#22D3EE"/>
    <circle cx="352" cy="520" r="6" fill="#10B981"/>
    <circle cx="352" cy="610" r="6" fill="#22D3EE"/>
    <ellipse cx="565" cy="660" rx="145" ry="34" fill="#11243D" stroke="#38BDF8" stroke-opacity="0.55" stroke-width="2"/>
    <rect x="420" y="660" width="290" height="210" fill="#0C192B" stroke="#38BDF8" stroke-opacity="0.4" stroke-width="2"/>
    <ellipse cx="565" cy="870" rx="145" ry="30" fill="#091322" stroke="#38BDF8" stroke-opacity="0.3" stroke-width="2"/>
    <path d="M258 430 H440 V540 H860" stroke="#22D3EE" stroke-width="2.5" stroke-dasharray="8 8" opacity="0.75"/>
    <path d="M710 720 H830 V540 H1020" stroke="#10B981" stroke-width="2.5" opacity="0.75"/>
    <circle cx="860" cy="540" r="8" fill="#22D3EE"/>
    <circle cx="1020" cy="540" r="8" fill="#10B981"/>
  </g>
  <rect x="0" y="870" width="1920" height="210" fill="url(#water)"/>
  <line x1="0" y1="870" x2="1920" y2="870" stroke="#22D3EE" stroke-opacity="0.25" stroke-width="2"/>
  <rect x="40" y="1008" width="350" height="32" rx="6" fill="#060D18" fill-opacity="0.75" stroke="#334155"/>
  <text x="56" y="1028" fill="#94A3B8" font-family="monospace" font-size="13">DUMMY HERO VISUAL // REPLACE WITH PLANT PHOTO</text>
</svg>
`)}`;

// --- SECTION 02 BACKGROUND: SOFTWARE, MOBILE, IIoT EDGE HARDWARE & CYBERSECURITY ---
const DUMMY_BG_SOLUTIONS = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" fill="none">
  <rect width="1600" height="900" fill="#F4F7F9"/>
  <circle cx="1320" cy="180" r="320" fill="#06B6D4" fill-opacity="0.09"/>
  <circle cx="240" cy="760" r="280" fill="#0EA5E9" fill-opacity="0.07"/>
  <!-- Stylized Industrial Software Trend Monitor (Top Right) -->
  <g stroke="#0891B2" stroke-opacity="0.26" stroke-width="2">
    <rect x="980" y="85" width="490" height="290" rx="18" fill="#FFFFFF" fill-opacity="0.5"/>
    <line x1="980" y1="130" x2="1470" y2="130"/>
    <polyline points="1025,295 1095,245 1165,265 1235,190 1315,215 1415,155" stroke-width="3"/>
    <circle cx="1235" cy="190" r="6" fill="#0891B2" fill-opacity="0.35"/>
    <circle cx="1415" cy="155" r="6" fill="#10B981" fill-opacity="0.45"/>
  </g>
  <!-- Stylized IIoT Edge Gateway Module & Antenna (Bottom Left) -->
  <g stroke="#0F172A" stroke-opacity="0.18" stroke-width="2">
    <rect x="90" y="540" width="320" height="230" rx="16" fill="#FFFFFF" fill-opacity="0.55"/>
    <line x1="145" y1="540" x2="145" y2="465" stroke-width="3"/>
    <circle cx="145" cy="458" r="7" fill="#0891B2" fill-opacity="0.35"/>
    <rect x="125" y="585" width="250" height="44" rx="8"/>
    <circle cx="152" cy="607" r="6" fill="#10B981" fill-opacity="0.45"/>
    <circle cx="176" cy="607" r="6" fill="#0891B2" fill-opacity="0.45"/>
    <rect x="125" y="650" width="115" height="75" rx="8"/>
    <rect x="260" y="650" width="115" height="75" rx="8"/>
  </g>
  <!-- Security Perimeter Shield Outline (Center-Right) -->
  <path d="M840 490 L920 520 V595 C920 650 885 695 840 715 C795 695 760 650 760 595 V520 L840 490 Z" stroke="#0891B2" stroke-opacity="0.22" stroke-width="2.5" fill="#FFFFFF" fill-opacity="0.35"/>
  <path d="M410 640 H760" stroke="#0891B2" stroke-opacity="0.25" stroke-width="2" stroke-dasharray="8 8"/>
  <path d="M920 595 H1180 V375" stroke="#0891B2" stroke-opacity="0.25" stroke-width="2" stroke-dasharray="8 8"/>
</svg>
`)}`;

// --- SECTION 03 BACKGROUND: 3-TIER OT-TO-IT INTEGRATION TOPOLOGY ---
const DUMMY_BG_ARCHITECTURE = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 860" fill="none">
  <rect width="1600" height="860" fill="#FFFFFF"/>
  <ellipse cx="800" cy="440" rx="520" ry="260" fill="#06B6D4" fill-opacity="0.06"/>
  <!-- Left Tier (OT Field Nodes) -->
  <g stroke="#0F172A" stroke-opacity="0.16" stroke-width="2">
    <rect x="110" y="240" width="240" height="110" rx="14" fill="#F8FAFC"/>
    <rect x="110" y="400" width="240" height="110" rx="14" fill="#F8FAFC"/>
    <rect x="110" y="560" width="240" height="110" rx="14" fill="#F8FAFC"/>
  </g>
  <!-- Center Tier (Level 3.5 DMZ Security Boundary) -->
  <g stroke="#0891B2" stroke-opacity="0.28" stroke-width="2.5">
    <rect x="650" y="180" width="300" height="530" rx="22" stroke-dasharray="10 8" fill="#ECFEFF" fill-opacity="0.45"/>
    <rect x="695" y="340" width="210" height="210" rx="18" fill="#FFFFFF" fill-opacity="0.75"/>
    <circle cx="800" cy="445" r="46" stroke-width="2"/>
  </g>
  <!-- Right Tier (Enterprise Cloud & Historian Nodes) -->
  <g stroke="#0F172A" stroke-opacity="0.16" stroke-width="2">
    <rect x="1250" y="240" width="240" height="110" rx="14" fill="#F8FAFC"/>
    <rect x="1250" y="400" width="240" height="110" rx="14" fill="#F8FAFC"/>
    <rect x="1250" y="560" width="240" height="110" rx="14" fill="#F8FAFC"/>
  </g>
  <!-- Bidirectional / Controlled Data Pipelines -->
  <g stroke="#0891B2" stroke-opacity="0.28" stroke-width="2.5">
    <path d="M350 295 H520 V415 H695"/>
    <path d="M350 455 H695"/>
    <path d="M350 615 H520 V495 H695"/>
    <path d="M905 415 H1080 V295 H1250"/>
    <path d="M905 455 H1250"/>
    <path d="M905 495 H1080 V615 H1250"/>
  </g>
</svg>
`)}`;

// --- SECTION 05 BACKGROUND: HEAVY INDUSTRY & ENERGY INFRASTRUCTURE PANORAMA ---
const DUMMY_BG_INDUSTRIES = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 760" fill="none">
  <rect width="1600" height="760" fill="#FFFFFF"/>
  <radialGradient id="indGlow" cx="0.72" cy="0.35" r="0.5">
    <stop offset="0%" stop-color="#06B6D4" stop-opacity="0.09"/>
    <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0"/>
  </radialGradient>
  <rect width="1600" height="760" fill="url(#indGlow)"/>
  <!-- Horizon Line -->
  <line x1="0" y1="650" x2="1600" y2="650" stroke="#0F172A" stroke-opacity="0.15" stroke-width="2"/>
  <!-- Oil & Gas Distillation Columns -->
  <g stroke="#0F172A" stroke-opacity="0.16" stroke-width="2" fill="#F8FAFC">
    <rect x="130" y="250" width="56" height="400" rx="6"/>
    <rect x="148" y="195" width="20" height="55"/>
    <rect x="225" y="310" width="70" height="340" rx="6"/>
    <line x1="115" y1="340" x2="200" y2="340"/>
    <line x1="115" y1="440" x2="200" y2="440"/>
  </g>
  <!-- Spherical LNG Storage Tanks -->
  <g stroke="#0891B2" stroke-opacity="0.24" stroke-width="2" fill="#ECFEFF" fill-opacity="0.45">
    <circle cx="540" cy="510" r="105"/>
    <line x1="465" y1="585" x2="465" y2="650"/>
    <line x1="615" y1="585" x2="615" y2="650"/>
    <circle cx="800" cy="525" r="90"/>
    <line x1="735" y1="590" x2="735" y2="650"/>
    <line x1="865" y1="590" x2="865" y2="650"/>
  </g>
  <!-- Chemical & Manufacturing Plant Sawtooth Roof + Stacks -->
  <g stroke="#0F172A" stroke-opacity="0.16" stroke-width="2" fill="#F8FAFC">
    <path d="M1020 650 V440 L1120 385 V440 L1220 385 V440 L1320 385 V650 Z"/>
    <rect x="1370" y="270" width="44" height="380" rx="4"/>
    <rect x="1445" y="320" width="44" height="330" rx="4"/>
  </g>
  <!-- Overhead Process Pipeline -->
  <path d="M295 470 H435 M645 510 H710 M890 525 H1020" stroke="#0891B2" stroke-opacity="0.25" stroke-width="2.5"/>
</svg>
`)}`;

// --- DUMMY COMPANY ENGINEERING LAB PHOTO ---
const DUMMY_COMPANY_VISUAL = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" fill="none">
  <rect width="800" height="500" fill="#0F172A"/>
  <circle cx="620" cy="140" r="200" fill="#06B6D4" fill-opacity="0.1"/>
  <rect x="65" y="85" width="280" height="330" rx="12" fill="#1E293B" stroke="#334155" stroke-width="2"/>
  <rect x="90" y="115" width="230" height="46" rx="6" fill="#0F172A" stroke="#22D3EE" stroke-width="1.5"/>
  <circle cx="114" cy="138" r="5" fill="#10B981"/>
  <circle cx="132" cy="138" r="5" fill="#10B981"/>
  <rect x="90" y="178" width="230" height="46" rx="6" fill="#0F172A" stroke="#334155"/>
  <circle cx="114" cy="201" r="5" fill="#22D3EE"/>
  <rect x="90" y="241" width="230" height="46" rx="6" fill="#0F172A" stroke="#334155"/>
  <rect x="405" y="120" width="330" height="260" rx="12" fill="#1E293B" stroke="#22D3EE" stroke-width="1.5"/>
  <polyline points="435,305 490,265 545,280 600,205 655,225 705,165" fill="none" stroke="#22D3EE" stroke-width="3.5"/>
  <polyline points="435,335 490,320 545,325 600,290 655,295 705,260" fill="none" stroke="#10B981" stroke-width="2.5"/>
  <rect x="24" y="24" width="320" height="32" rx="6" fill="#0F172A" stroke="#334155"/>
  <text x="40" y="44" fill="#94A3B8" font-family="monospace" font-size="12">DUMMY PHOTO // B-TEKNO ENGINEERING LAB</text>
</svg>
`)}`;

// --- CONTENT DICTIONARY (INDONESIAN DEFAULT, ENGLISH SECONDARY, BRAND-NEUTRAL) ---
const dict = {
  id: {
    hero: {
      brandLead: "B-TEKNO",
      headline:
        "menjembatani aset OT dan kecerdasan IT melalui perangkat lunak industri, perangkat keras IIoT, dan keamanan siber terintegrasi.",
      subtext:
        "Solusi konvergensi operasional berkeandalan tinggi untuk sektor energi, minyak & gas, dan manufaktur.",
      ctaOutline: "Tentang B-Tekno",
      ctaSolid: "Konsultasi Teknis",
      dock: [
        { label: "Solusi", href: "#solutions" },
        { label: "Arsitektur", href: "#architecture" },
        { label: "Historian", href: "#features" },
        { label: "Lokasi", href: "#location" },
        { label: "WhatsApp", href: "https://wa.me/6282128027268", external: true },
      ],
    },
    bottleneck: {
      tag: "01 // TANTANGAN INTEGRASI",
      title: "Data Terisolasi pada Aset Lapangan Legacy",
      subtitle:
        "Infrastruktur pabrik konvensional sering menyimpan data operasional kritis di dalam sistem tertutup yang sulit diakses oleh jaringan enterprise.",
      items: [
        {
          code: "SILO-01",
          title: "SCADA / DCS Terisolasi",
          desc: "Data operasional kritis terjebak dalam silo protokol proprietary tanpa visibilitas lintas departemen.",
        },
        {
          code: "PROTO-02",
          title: "Inkompatibilitas Protokol",
          desc: "Kesulitan mentransmisikan data Modbus atau OPC secara aman menuju database cloud maupun ERP modern.",
        },
        {
          code: "LATENCY-03",
          title: "Analitik yang Tertunda",
          desc: "Ketiadaan pemantauan real-time menghambat pengambilan keputusan cepat dan pemeliharaan prediktif.",
        },
      ],
    },
    solutions: {
      tag: "02 // PRODUK & LAYANAN",
      title: "Kecerdasan Operasional End-to-End",
      subtitle:
        "Rangkaian perangkat lunak kustom, perangkat keras edge industri, dan keamanan siber yang dirancang khusus untuk lingkungan operasi berkeandalan tinggi.",
      cards: [
        {
          title: "Perangkat Lunak Web & Desktop",
          desc: "Aplikasi kustom untuk pemantauan real-time, trending historian, pelaporan otomatis, dan analisis data proses.",
          specs: ["Desktop & Web", "Historian Trending", "Shift Reporting"],
        },
        {
          title: "Aplikasi Mobile Operasional",
          desc: "Perangkat mobile native agar operator dan manajer menerima wawasan operasional serta notifikasi alarm kritis di mana saja.",
          specs: ["Mobile Native", "Push Alert Kritis", "KPI Lapangan"],
        },
        {
          title: "Keamanan Siber OT & IT",
          desc: "Sistem keamanan end-to-end yang menjembatani jaringan kontrol pabrik dan jaringan IT perusahaan secara terisolasi.",
          specs: ["Level 3.5 DMZ", "Firewall Industri", "Kontrol Akses Ketat"],
        },
        {
          title: "Perangkat Keras Industri (IIoT)",
          desc: "Perangkat edge Industrial IoT tersertifikasi Postel yang dirancang tangguh untuk ekstraksi data dan gateway komunikasi protokol.",
          specs: ["Sertifikasi Postel", "Edge Telemetry", "Gateway Agnostik"],
        },
      ],
      roadmapBadge: "ROADMAP MASA DEPAN",
      roadmapTitle: "Integrasi AI & Machine Learning",
      roadmapDesc:
        "Secara aktif mengembangkan sistem AI/ML berkeamanan tinggi dengan analitik prediktif untuk deteksi anomali dan operasi otonom.",
    },
    architecture: {
      tag: "03 // EKOSISTEM INTEGRASI",
      title: "Arsitektur Modular OT ke IT",
      subtitle:
        "Pendekatan berlapis yang memastikan kompatibilitas penuh antara jaringan otomasi lapangan standar dan infrastruktur server modern.",
      tiers: [
        {
          id: "ot",
          level: "LEVEL 3 // OT & LAPANGAN",
          title: "Akuisisi Data Lapangan",
          desc: "Ekstraksi telemetri deterministik langsung dari kontroler proses dan instrumen lapangan tanpa mengganggu siklus kontrol.",
          protocols: [
            "OPC DA / UA",
            "Modbus TCP / RTU",
            "IEC Protocols & SNMP",
            "Protokol Standar Industri",
          ],
        },
        {
          id: "dmz",
          level: "LEVEL 3.5 // DMZ & KEAMANAN EDGE",
          title: "Perantara Aman OT/IT (Middleman)",
          desc: "Isolasi ketat menggunakan firewall industri, server proxy, dan gateway agnostik untuk mengendalikan arus data terverifikasi.",
          protocols: [
            "Industrial Firewalls",
            "Edge Computing Nodes",
            "Protocol-Agnostic Gateway",
            "Zero-Trust Proxy",
          ],
        },
        {
          id: "it",
          level: "LEVEL 4 // ENTERPRISE IT & CLOUD",
          title: "Platform Analitik & Enterprise",
          desc: "Distribusi data terstruktur ke cloud, historian enterprise, ERP, dan aplikasi operator secara real-time.",
          protocols: [
            "Cloud & On-Premise Servers",
            "Enterprise Historian DB",
            "HTTP/REST, MQTT, WebSockets",
            "Web, Mobile & Desktop Apps",
          ],
        },
      ],
    },
    features: {
      tag: "04 // FITUR INTI PLATFORM",
      title: "Kapabilitas Teknis Teruji",
      tabs: [
        {
          id: "iiot",
          num: "01",
          label: "Solusi Industrial IoT",
          headline: "Telemetri Edge & Kolektor Data Cerdas",
          desc: "Solusi telemetri dan pemantauan skalabel untuk beragam lingkungan operasional. Kami menempatkan kolektor data cerdas untuk menjembatani perangkat lapangan dengan jaringan enterprise.",
          pipeline: [
            "Sensors",
            "DCS / PLC",
            "OPC Server",
            "DMZ Node",
            "IT Server",
            "Cloud",
            "Web / Mobile",
          ],
          highlights: [
            "Simulator perangkat keras kustom dan edge collector",
            "Komunikasi tangguh untuk area terpencil dan fasilitas proses",
            "Normalisasi tag otomatis ke format standar IT",
          ],
        },
        {
          id: "historian",
          num: "02",
          label: "Enterprise Historian & Analisis",
          headline: "Pengarsipan Time-Series Berperforma Tinggi",
          desc: "Penangkapan data time-series berkecepatan tinggi yang dirancang untuk menangani beban kerja enterprise historian skala besar dengan biaya kepemilikan lebih efisien.",
          highlights: [
            "High-Performance Archiving: Penangkapan data time-series berkecepatan tinggi untuk skala pabrik",
            "Advanced Analytics Engine: Kalkulasi bawaan, agregasi, dan analisis tren proses real-time",
            "Automated Reporting: Laporan shift terjadwal dan dokumentasi kepatuhan otomatis ke jaringan IT",
          ],
        },
        {
          id: "dmz",
          num: "03",
          label: "Keamanan Siber OT/IT DMZ",
          headline: "Arsitektur Perantara Level 3.5",
          desc: "Isolasi ketat memastikan tim IT dan manajemen memperoleh akses data real-time tanpa pernah mengekspos aset kontrol kritis OT ke risiko jaringan eksternal.",
          zones: [
            {
              zone: "Level 3: Jaringan OT",
              detail: "Sistem SCADA, PLC, dan DCS yang menghasilkan telemetri proses mentah.",
            },
            {
              zone: "DMZ Edge Node (3.5)",
              detail: "Firewall industri dan server proxy yang mengontrol aliran data secara ketat.",
            },
            {
              zone: "Level 4: Jaringan IT",
              detail: "Aplikasi cloud, sistem ERP, dan pelaporan enterprise.",
            },
          ],
        },
      ],
      metrics: [
        { label: "Efisiensi Rata-Rata", value: "94.2%" },
        { label: "Uptime Sistem", value: "99.8%" },
        { label: "Laju Pengarsipan", value: "25.4k/s" },
        { label: "Rata-Rata Aliran", value: "53.7 m³/h" },
      ],
    },
    industries: {
      tag: "05 // PENERAPAN LINTAS INDUSTRI",
      title: "Dirancang untuk Infrastruktur Kritis",
      subtitle:
        "Platform konvergensi OT/IT B-Tekno memenuhi standar kepatuhan, keselamatan, dan ketersediaan tinggi di berbagai sektor industri berat.",
      list: [
        "Minyak & Gas (Oil & Gas)",
        "Fasilitas LNG",
        "Pabrik Kimia (Chemical Plants)",
        "Pulp & Kertas",
        "Makanan & Minuman (F&B)",
        "Industri Manufaktur Berat",
      ],
    },
    foundation: {
      tag: "06 // FONDASI REKAYASA",
      title: "10+ Tahun Keahlian Spesialis",
      desc: "Pengalaman mendalam dalam mengintegrasikan arsitektur SCADA, logika DCS, dan pipeline perangkat lunak kompleks untuk aplikasi industri skala enterprise.",
      pillars: [
        "Arsitektur Enterprise DCS / SCADA",
        "Telemetri Armada IoT (IoT Fleet Telemetry)",
        "Aplikasi Web & Desktop Industri",
      ],
    },
    location: {
      tag: "07 // LOKASI OPERASIONAL",
      title: "Kantor & Laboratorium Rekayasa",
      subtitle:
        "Terletak strategis di koridor industri Jawa Barat untuk mendukung kebutuhan integrasi sistem dan komisioning lapangan dengan respons cepat.",
      companyName: "PT Bumi Teknologi Berkah (B-Tekno)",
      address: "Kawasan Industri Cikampek, Kabupaten Karawang, Jawa Barat, Indonesia",
      coordLabel: "KOORDINAT GPS",
      openMapBtn: "Buka di Google Maps",
      copyBtn: "Salin Koordinat",
      copiedBtn: "Tersalin",
    },
    contact: {
      tag: "08 // MULAI TRANSFORMASI",
      title: "Siap Mendigitalisasi Operasi Anda?",
      subtitle:
        "Diskusikan bagaimana middleware OT/IT yang disesuaikan dapat membuka potensi data yang selama ini tersimpan di aset lapangan Anda.",
      formTitle: "Kirim Ringkasan Kebutuhan Teknis",
      nameLabel: "Nama Lengkap / Perusahaan",
      namePlaceholder: "Contoh: Budi Santoso — PT Energi Nusantara",
      topicLabel: "Fokus Kebutuhan",
      topics: [
        "Integrasi SCADA / DCS ke IT",
        "Enterprise Historian & Dashboard",
        "Arsitektur Keamanan DMZ 3.5",
        "Hardware Edge IIoT Postel",
      ],
      msgLabel: "Detail Sistem / Protokol Saat Ini",
      msgPlaceholder:
        "Jelaskan arsitektur kontrol saat ini (mis. DCS, PLC, RTU, protokol Modbus/OPC) dan target integrasi Anda...",
      sendBtn: "Kirim via Email Klien",
      whatsappBtn: "Chat Langsung WhatsApp",
    },
  },
  en: {
    hero: {
      brandLead: "B-TEKNO",
      headline:
        "bridges OT assets and IT intelligence through industrial software, certified IIoT hardware, and integrated cybersecurity.",
      subtext:
        "High-availability operational convergence solutions engineered for energy, oil & gas, and manufacturing.",
      ctaOutline: "About B-Tekno",
      ctaSolid: "Schedule Consultation",
      dock: [
        { label: "Solutions", href: "#solutions" },
        { label: "Architecture", href: "#architecture" },
        { label: "Historian", href: "#features" },
        { label: "Location", href: "#location" },
        { label: "WhatsApp", href: "https://wa.me/6282128027268", external: true },
      ],
    },
    bottleneck: {
      tag: "01 // THE INTEGRATION BOTTLENECK",
      title: "Stranded Data in Legacy Field Assets",
      subtitle:
        "Conventional plant infrastructures lock critical operational telemetry inside closed automation networks inaccessible to enterprise decision-makers.",
      items: [
        {
          code: "SILO-01",
          title: "Isolated SCADA / DCS",
          desc: "Critical operational data trapped in proprietary silos without cross-enterprise visibility.",
        },
        {
          code: "PROTO-02",
          title: "Protocol Incompatibility",
          desc: "Inability to push Modbus or OPC telemetry securely to modern cloud databases and ERP platforms.",
        },
        {
          code: "LATENCY-03",
          title: "Delayed Analytics",
          desc: "Lack of real-time process visibility limits proactive maintenance and executive decision-making.",
        },
      ],
    },
    solutions: {
      tag: "02 // PRODUCTS & SERVICES",
      title: "End-to-End Operational Intelligence",
      subtitle:
        "Custom software applications, ruggedized edge hardware, and defense-in-depth cybersecurity tailored for mission-critical plants.",
      cards: [
        {
          title: "Web & Desktop Software",
          desc: "Custom applications tailored for real-time monitoring, historian trending, automated reporting, and data analysis.",
          specs: ["Desktop & Web", "Historian Trending", "Automated Reports"],
        },
        {
          title: "Mobile Applications",
          desc: "Native mobile tools ensuring operators receive real-time operational insights and critical alert notifications anywhere.",
          specs: ["Native Mobile", "Critical Alerting", "Remote KPI Access"],
        },
        {
          title: "OT & IT Cybersecurity",
          desc: "End-to-end security systems bridging control networks and enterprise IT safely with strict boundary enforcement.",
          specs: ["Level 3.5 DMZ", "Industrial Firewalls", "Strict Isolation"],
        },
        {
          title: "Industrial Hardware (IIoT)",
          desc: "Postel-Certified Industrial IoT edge devices engineered for rugged telemetry, reliable data extraction, and protocol gateways.",
          specs: ["Postel Certified", "Rugged Telemetry", "Protocol Gateway"],
        },
      ],
      roadmapBadge: "FUTURE ROADMAP",
      roadmapTitle: "AI & Machine Learning Integration",
      roadmapDesc:
        "Actively developing advanced AI/ML systems featuring robust, high-security predictive analytics for autonomous operations.",
    },
    architecture: {
      tag: "03 // INTEGRATION ECOSYSTEM",
      title: "Modular OT-to-IT Architecture",
      subtitle:
        "A layered engineering approach ensuring seamless compatibility across standard automation networks and modern server infrastructures.",
      tiers: [
        {
          id: "ot",
          level: "LEVEL 3 // OT & FIELD LEVEL",
          title: "Edge Data Acquisition",
          desc: "Deterministic telemetry collection from field controllers and instrumentation without impacting control loop scan cycles.",
          protocols: [
            "OPC DA / UA",
            "Modbus TCP / RTU",
            "IEC Protocols & SNMP",
            "Industrial Application Protocols",
          ],
        },
        {
          id: "dmz",
          level: "LEVEL 3.5 // DMZ & EDGE SECURITY",
          title: "Secure OT/IT Middleman",
          desc: "Strict boundary isolation via industrial firewalls, proxy nodes, and protocol-agnostic gateways governing every packet.",
          protocols: [
            "Industrial Firewalls",
            "Edge Computing Nodes",
            "Protocol-Agnostic Gateway",
            "Controlled Proxy Flow",
          ],
        },
        {
          id: "it",
          level: "LEVEL 4 // ENTERPRISE IT & CLOUD",
          title: "Enterprise Intelligence Layer",
          desc: "Structured delivery of real-time process tags to cloud infrastructure, historian databases, ERP, and operator apps.",
          protocols: [
            "Cloud & On-Premise Servers",
            "Enterprise Historian DBs",
            "HTTP/REST, MQTT, WebSockets",
            "Web, Mobile & Desktop Apps",
          ],
        },
      ],
    },
    features: {
      tag: "04 // CORE PLATFORM FEATURES",
      title: "Field-Proven Engineering Capabilities",
      tabs: [
        {
          id: "iiot",
          num: "01",
          label: "Industrial IoT Solutions",
          headline: "Scalable Edge Telemetry & Data Collectors",
          desc: "Scalable edge telemetry and monitoring solutions designed for diverse operational environments. We deploy intelligent data collectors to bridge field devices with enterprise networks.",
          pipeline: [
            "Sensors",
            "DCS / PLC",
            "OPC Server",
            "DMZ Node",
            "IT Server",
            "Cloud",
            "Web / Mobile",
          ],
          highlights: [
            "Custom hardware simulators and industrial edge collectors",
            "Reliable telemetry across distributed energy and process assets",
            "Automated tag normalization into standard IT schemas",
          ],
        },
        {
          id: "historian",
          num: "02",
          label: "Enterprise Historian & Analysis",
          headline: "High-Performance Time-Series Archiving",
          desc: "High-throughput time-series data capture engineered to handle large-scale enterprise historian workloads with integrated process analytics.",
          highlights: [
            "High-Performance Archiving: High-speed time-series capture for plant-wide tag volumes",
            "Advanced Analytics Engine: Built-in calculations, aggregations, and real-time process trend analysis",
            "Automated Reporting: Scheduled shift reports and compliance documentation delivered to IT networks",
          ],
        },
        {
          id: "dmz",
          num: "03",
          label: "Cybersecurity OT/IT DMZ",
          headline: "Level 3.5 Middleman Architecture",
          desc: "Strict isolation ensures IT access to real-time operational data without exposing critical OT control assets to external network threats.",
          zones: [
            {
              zone: "Level 3: OT Network",
              detail: "SCADA, PLC, and DCS systems generating raw process telemetry.",
            },
            {
              zone: "DMZ Edge Node (3.5)",
              detail: "Industrial firewalls and proxy servers strictly controlling data flow.",
            },
            {
              zone: "Level 4: IT Network",
              detail: "Cloud applications, ERP systems, and enterprise reporting.",
            },
          ],
        },
      ],
      metrics: [
        { label: "Average Efficiency", value: "94.2%" },
        { label: "System Uptime", value: "99.8%" },
        { label: "Archival Rate", value: "25.4k/s" },
        { label: "Avg Flow Rate", value: "53.7 m³/h" },
      ],
    },
    industries: {
      tag: "05 // PROVEN VERSATILITY",
      title: "Cross-Industry Applicability",
      subtitle:
        "Our OT/IT convergence platforms are engineered to handle the rigorous compliance, safety, and high-availability demands of heavy industries.",
      list: [
        "Oil & Gas",
        "LNG Facilities",
        "Chemical Plants",
        "Pulp & Paper",
        "Food & Beverage",
        "Heavy Manufacturing",
      ],
    },
    foundation: {
      tag: "06 // ENGINEERING FOUNDATION",
      title: "10+ Years of Specialized Expertise",
      desc: "Deep-rooted experience integrating SCADA, DCS logic, and complex software pipelines for enterprise industrial applications.",
      pillars: [
        "Enterprise DCS / SCADA Architecture",
        "IoT Fleet Telemetry",
        "Web & Desktop Industrial Applications",
      ],
    },
    location: {
      tag: "07 // OPERATIONAL BASE",
      title: "Office & Engineering Laboratory",
      subtitle:
        "Strategically positioned in the West Java industrial corridor to support rapid system integration and on-site commissioning.",
      companyName: "PT Bumi Teknologi Berkah (B-Tekno)",
      address: "Cikampek Industrial Corridor, Karawang Regency, West Java, Indonesia",
      coordLabel: "GPS COORDINATES",
      openMapBtn: "Open in Google Maps",
      copyBtn: "Copy Coordinates",
      copiedBtn: "Copied",
    },
    contact: {
      tag: "08 // READY TO DIGITIZE",
      title: "Ready to Digitize Your Operations?",
      subtitle:
        "Let’s discuss how customized OT/IT middleware can unlock the operational data stranded in your field assets.",
      formTitle: "Prepare a Technical Inquiry",
      nameLabel: "Full Name / Company",
      namePlaceholder: "e.g., Budi Santoso — PT Energi Nusantara",
      topicLabel: "Primary Interest",
      topics: [
        "SCADA / DCS to IT Integration",
        "Enterprise Historian & Analytics",
        "Level 3.5 DMZ Cybersecurity",
        "Postel-Certified IIoT Hardware",
      ],
      msgLabel: "Current Control Environment & Goals",
      msgPlaceholder:
        "Describe your current control systems (e.g., DCS, PLC, RTU, Modbus/OPC servers) and integration goals...",
      sendBtn: "Open in Email Client",
      whatsappBtn: "Chat via WhatsApp",
    },
  },
};

const smoothEase = [0.22, 1, 0.36, 1];

export default function BTeknoLandingPage() {
  const [lang, setLang] = useState("id");
  const [activeFeatureTab, setActiveFeatureTab] = useState("iiot");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [copiedCoords, setCopiedCoords] = useState(false);

  const [senderName, setSenderName] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [inquiryMessage, setInquiryMessage] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("btekno_lang");
    if (saved === "id" || saved === "en") {
      setLang(saved);
    }
  }, []);

  const handleLangChange = (newLang) => {
    setLang(newLang);
    localStorage.setItem("btekno_lang", newLang);
  };

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 450);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const t = dict[lang] || dict.id;

  const handleCopyCoords = () => {
    navigator.clipboard.writeText(
      `${COMPANY_LOCATION.lat}, ${COMPANY_LOCATION.lng}`
    );
    setCopiedCoords(true);
    setTimeout(() => setCopiedCoords(false), 2500);
  };

  const handleStaticEmailSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `[B-Tekno Inquiry] ${selectedTopic || "OT/IT Convergence"} - ${senderName}`
    );
    const body = encodeURIComponent(
      `Name / Company: ${senderName}\nTopic: ${selectedTopic || "General Consultation"}\n\nDetails:\n${inquiryMessage}`
    );
    window.location.href = `mailto:fachrul.lingga@b-tekno.com?cc=angga.ka@b-tekno.com&subject=${subject}&body=${body}`;
  };

  const currentTab =
    t.features.tabs.find((tab) => tab.id === activeFeatureTab) ||
    t.features.tabs[0];

  const industryIcons = [
    Flame,
    Radio,
    FlaskConical,
    FileSpreadsheet,
    Utensils,
    Factory,
  ];

  const dockIcons = [Cpu, Layers, Database, MapPin, MessageSquare];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar lang={lang} onLangChange={handleLangChange} />

      {/* =========================================================
          FULL-BLEED HERO PICTURE WITH EDITORIAL OVERLAY TEXT
      ========================================================= */}
      <section
        id="home"
        className="relative w-full min-h-[92vh] sm:min-h-screen flex items-center overflow-hidden bg-slate-950"
      >
        <motion.div
          initial={{ scale: 1.06, opacity: 0.85 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: smoothEase }}
          className="absolute inset-0 z-0"
        >
          <img
            src={DUMMY_FULL_HERO_IMAGE}
            alt="B-Tekno Industrial OT/IT Infrastructure"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        <div
          aria-hidden="true"
          className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/90 via-slate-950/55 to-slate-950/35 lg:bg-gradient-to-r lg:from-slate-950/45 lg:via-slate-950/65 lg:to-slate-950/85"
        />

        <div className="relative z-20 w-full px-5 sm:px-8 lg:px-14 pt-28 pb-16 lg:py-0">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="hidden lg:block lg:col-span-5" />

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: smoothEase, delay: 0.15 }}
              className="lg:col-span-7 lg:pl-8 lg:pr-14 space-y-6"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-normal text-white leading-[1.3] tracking-tight">
                <span className="inline-flex items-center gap-2 font-extrabold tracking-wider text-cyan-400 mr-2.5">
                  {t.hero.brandLead}
                </span>
                {t.hero.headline}
              </h1>

              <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                {t.hero.subtext}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
                <a
                  href="#foundation"
                  className="px-8 py-3.5 rounded-full border border-white/80 bg-slate-950/35 hover:bg-white/15 text-white text-sm font-semibold text-center backdrop-blur-sm transition-all"
                >
                  {t.hero.ctaOutline}
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3.5 rounded-full bg-white hover:bg-cyan-50 text-slate-950 text-sm font-semibold text-center shadow-lg transition-all"
                >
                  {t.hero.ctaSolid}
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right-Edge Floating Quick-Action Dock */}
        <motion.aside
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: smoothEase, delay: 0.35 }}
          aria-label="Quick Navigation"
          className="hidden md:flex flex-col gap-1 fixed right-3 top-1/2 -translate-y-1/2 z-40 p-1.5 rounded-2xl bg-white/85 backdrop-blur-md border border-slate-200/90 shadow-lg"
        >
          {t.hero.dock.map((item, idx) => {
            const Icon = dockIcons[idx] || Cpu;
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="w-16 py-2.5 px-1 rounded-xl flex flex-col items-center justify-center gap-1 text-slate-700 hover:text-cyan-700 hover:bg-cyan-50/80 transition-colors text-center"
              >
                <Icon className="w-4 h-4 stroke-[2px]" />
                <span className="text-[10px] font-medium leading-tight">
                  {item.label}
                </span>
              </a>
            );
          })}
        </motion.aside>
      </section>

      {/* =========================================================
          01 // THE INTEGRATION BOTTLENECK
      ========================================================= */}
      <section
        id="bottleneck"
        className="py-16 sm:py-24 px-5 sm:px-8 lg:px-12 bg-white border-b border-slate-200/80"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: smoothEase }}
            className="max-w-3xl mb-12"
          >
            <p className="text-xs font-mono tracking-widest text-cyan-700 uppercase mb-3">
              {t.bottleneck.tag}
            </p>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              {t.bottleneck.title}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {t.bottleneck.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.bottleneck.items.map((item, index) => {
              const icons = [Server, Network, Activity];
              const Icon = icons[index];
              return (
                <motion.div
                  key={item.code}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: smoothEase,
                  }}
                  className="p-7 rounded-2xl bg-[#F4F7F9] border border-slate-200/90 hover:border-cyan-500/50 hover:shadow-md transition-all"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-cyan-700 shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      {item.code}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          02 // PRODUCTS, SERVICES & AI ROADMAP
          (Includes Thematic Dummy Background Picture)
      ========================================================= */}
      <section
        id="solutions"
        className="relative overflow-hidden py-16 sm:py-24 px-5 sm:px-8 lg:px-12 bg-[#F4F7F9] border-b border-slate-200/80"
      >
        {/* Dummy Background Picture for Section 02 */}
        <img
          src={DUMMY_BG_SOLUTIONS}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none z-0 opacity-90"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0 bg-gradient-to-b from-[#F4F7F9]/75 via-[#F4F7F9]/45 to-[#F4F7F9]/80 pointer-events-none"
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: smoothEase }}
            className="max-w-3xl mb-12"
          >
            <p className="text-xs font-mono tracking-widest text-cyan-700 uppercase mb-3">
              {t.solutions.tag}
            </p>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              {t.solutions.title}
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {t.solutions.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.solutions.cards.map((card, idx) => {
              const cardIcons = [Monitor, Smartphone, ShieldCheck, Cpu];
              const Icon = cardIcons[idx];
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.08,
                    ease: smoothEase,
                  }}
                  className="p-7 rounded-2xl bg-white/95 backdrop-blur-xs border border-slate-200/90 hover:border-cyan-500/50 hover:shadow-md transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-cyan-50 border border-cyan-200 text-cyan-700 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2.5">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {card.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {card.specs.map((spec) => (
                      <span
                        key={spec}
                        className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Future Roadmap Banner */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: smoothEase }}
            className="mt-8 p-7 rounded-2xl bg-slate-900 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-md"
          >
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400">
                <Sparkles className="w-4 h-4" />
                {t.solutions.roadmapBadge}
              </div>
              <h3 className="text-xl font-bold text-white">
                {t.solutions.roadmapTitle}
              </h3>
              <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
                {t.solutions.roadmapDesc}
              </p>
            </div>
            <span className="shrink-0 px-4 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/40 text-cyan-300 text-xs font-mono">
              PREDICTIVE ANALYTICS // R&D
            </span>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          03 // SUPPORTED INTEGRATION ECOSYSTEM
          (Includes Thematic Dummy Background Picture)
      ========================================================= */}
      <section
        id="architecture"
        className="relative overflow-hidden py-16 sm:py-24 px-5 sm:px-8 lg:px-12 bg-white border-b border-slate-200/80"
      >
        {/* Dummy Background Picture for Section 03 */}
        <img
          src={DUMMY_BG_ARCHITECTURE}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none z-0 opacity-95"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0 bg-gradient-to-b from-white/75 via-white/40 to-white/75 pointer-events-none"
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: smoothEase }}
            className="max-w-3xl mb-12"
          >
            <p className="text-xs font-mono tracking-widest text-cyan-700 uppercase mb-3">
              {t.architecture.tag}
            </p>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              {t.architecture.title}
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {t.architecture.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {t.architecture.tiers.map((tier, idx) => {
              const isDmz = tier.id === "dmz";
              return (
                <motion.div
                  key={tier.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.08,
                    ease: smoothEase,
                  }}
                  className={`p-7 rounded-2xl border backdrop-blur-xs flex flex-col justify-between transition-all ${
                    isDmz
                      ? "bg-cyan-50/85 border-cyan-400 shadow-sm"
                      : "bg-[#F4F7F9]/90 border-slate-200/90"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span
                        className={`text-[11px] sm:text-xs font-mono px-3 py-1 rounded-full ${
                          isDmz
                            ? "bg-cyan-600 text-white"
                            : "bg-white text-slate-700 border border-slate-200"
                        }`}
                      >
                        {tier.level}
                      </span>
                      {isDmz ? (
                        <Lock className="w-4 h-4 text-cyan-700 shrink-0" />
                      ) : (
                        <Layers className="w-4 h-4 text-slate-500 shrink-0" />
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-2.5">
                      {tier.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {tier.desc}
                    </p>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-slate-200/80">
                    {tier.protocols.map((proto) => (
                      <div
                        key={proto}
                        className="flex items-center gap-2.5 text-xs font-mono text-slate-800 bg-white px-3.5 py-2.5 rounded-xl border border-slate-200/90"
                      >
                        <span
                          className={`w-2 h-2 rounded-full shrink-0 ${
                            isDmz ? "bg-cyan-600" : "bg-emerald-500"
                          }`}
                        />
                        {proto}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          04 // CORE PLATFORM FEATURES (INTERACTIVE TABS)
      ========================================================= */}
      <section
        id="features"
        className="py-16 sm:py-24 px-5 sm:px-8 lg:px-12 bg-[#F4F7F9] border-b border-slate-200/80"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: smoothEase }}
            className="mb-8"
          >
            <p className="text-xs font-mono tracking-widest text-cyan-700 uppercase mb-3">
              {t.features.tag}
            </p>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              {t.features.title}
            </h2>
          </motion.div>

          {/* Pill Feature Tabs */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-8">
            {t.features.tabs.map((tab) => {
              const isActive = tab.id === activeFeatureTab;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFeatureTab(tab.id)}
                  className={`px-5 py-3 rounded-full text-sm font-semibold transition-all flex items-center gap-2.5 border text-left ${
                    isActive
                      ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                      : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <span
                    className={`font-mono text-xs ${
                      isActive ? "text-cyan-400" : "text-cyan-700"
                    }`}
                  >
                    {tab.num}
                  </span>
                  {tab.label}
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentTab.id + lang}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: smoothEase }}
              className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-white border border-slate-200/90 shadow-xs"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                <div className="lg:col-span-6 space-y-5">
                  <span className="text-xs font-mono text-cyan-700">
                    CORE FEATURE {currentTab.num}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                    {currentTab.headline}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {currentTab.desc}
                  </p>

                  {currentTab.highlights && (
                    <ul className="space-y-3 pt-2">
                      {currentTab.highlights.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-sm text-slate-700"
                        >
                          <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {currentTab.zones && (
                    <div className="space-y-3 pt-2">
                      {currentTab.zones.map((z) => (
                        <div
                          key={z.zone}
                          className="p-4 rounded-xl bg-[#F4F7F9] border border-slate-200"
                        >
                          <p className="text-xs font-mono text-cyan-700 mb-1">
                            {z.zone}
                          </p>
                          <p className="text-sm text-slate-700">{z.detail}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right High-Tech Visualization Card (Vertically Centered) */}
                <div className="lg:col-span-6 flex items-center justify-center">
                  {currentTab.id === "iiot" && (
                    <div className="w-full p-5 sm:p-6 rounded-2xl bg-slate-900 text-white border border-slate-800">
                      <p className="text-xs font-mono text-slate-400 mb-4">
                        DATA ACQUISITION PIPELINE // END-TO-END
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {currentTab.pipeline.map((node, i) => (
                          <div
                            key={node}
                            className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-between"
                          >
                            <div>
                              <span className="text-[10px] font-mono text-cyan-400 block">
                                0{i + 1}
                              </span>
                              <span className="text-xs font-semibold text-white">
                                {node}
                              </span>
                            </div>
                            <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {currentTab.id === "historian" && (
                    <div className="w-full p-5 sm:p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-5">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-mono text-slate-300">
                          PROCESS HISTORIAN & ANALYTICS
                        </span>
                        <span className="text-[11px] font-mono text-emerald-400 shrink-0">
                          ● LIVE ARCHIVING
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        {t.features.metrics.map((m) => (
                          <div
                            key={m.label}
                            className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700"
                          >
                            <p className="text-xs text-slate-400">{m.label}</p>
                            <p className="text-lg sm:text-xl font-mono font-bold text-cyan-400 mt-1">
                              {m.value}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="rounded-xl border border-slate-700 overflow-x-auto text-xs font-mono">
                        <div className="min-w-[300px]">
                          <div className="grid grid-cols-3 bg-slate-800 px-3 py-2 text-slate-300">
                            <span>TAG NAME</span>
                            <span>VALUE</span>
                            <span>STATUS</span>
                          </div>
                          {[
                            { tag: "TI-101.PV", val: "24.5 °C", st: "GOOD" },
                            {
                              tag: "FIC-202.PV",
                              val: "19.60k m³/h",
                              st: "GOOD",
                            },
                            { tag: "PI-303.PV", val: "203.5 unit", st: "GOOD" },
                          ].map((row) => (
                            <div
                              key={row.tag}
                              className="grid grid-cols-3 px-3 py-2 border-t border-slate-800 text-slate-100"
                            >
                              <span>{row.tag}</span>
                              <span className="text-cyan-300">{row.val}</span>
                              <span className="text-emerald-400">{row.st}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {currentTab.id === "dmz" && (
                    <div className="w-full p-6 sm:p-7 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-md">
                      <div className="flex items-center justify-between gap-2 pb-4 mb-5 border-b border-slate-800">
                        <span className="text-xs font-mono tracking-wider text-slate-300">
                          SECURITY BOUNDARY TOPOLOGY // LEVEL 3.5
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-[10px] font-mono text-cyan-300 shrink-0">
                          ZERO-TRUST DMZ
                        </span>
                      </div>

                      <div className="space-y-2">
                        <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-between gap-3">
                          <div>
                            <p className="text-[11px] font-mono text-slate-400">
                              ZONE A // CONTROL NETWORK
                            </p>
                            <p className="text-sm sm:text-base font-bold text-white mt-0.5">
                              Level 3: SCADA / PLC / DCS
                            </p>
                          </div>
                          <Database className="w-5 h-5 text-slate-400 shrink-0" />
                        </div>

                        <div className="flex items-center justify-center gap-2 py-1 text-[11px] font-mono text-cyan-400">
                          <ArrowDown className="w-3.5 h-3.5" />
                          <span>ONE-WAY / PROXY TELEMETRY</span>
                        </div>

                        <div className="p-4 rounded-xl bg-cyan-950/70 border border-cyan-500/60 flex items-center justify-between gap-3">
                          <div>
                            <p className="text-[11px] font-mono text-cyan-400">
                              ISOLATION LAYER // FIREWALL & PROXY
                            </p>
                            <p className="text-sm sm:text-base font-bold text-white mt-0.5">
                              Level 3.5: DMZ Edge Node
                            </p>
                          </div>
                          <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0" />
                        </div>

                        <div className="flex items-center justify-center gap-2 py-1 text-[11px] font-mono text-emerald-400">
                          <ArrowDown className="w-3.5 h-3.5" />
                          <span>FILTERED ENTERPRISE STREAM</span>
                        </div>

                        <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-between gap-3">
                          <div>
                            <p className="text-[11px] font-mono text-emerald-400">
                              ZONE B // ENTERPRISE NETWORK
                            </p>
                            <p className="text-sm sm:text-base font-bold text-white mt-0.5">
                              Level 4: Cloud / ERP / Reporting
                            </p>
                          </div>
                          <Server className="w-5 h-5 text-emerald-400 shrink-0" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* =========================================================
          05 // CROSS-INDUSTRY APPLICABILITY
          (Includes Thematic Dummy Background Picture)
      ========================================================= */}
      <section
        id="industries"
        className="relative overflow-hidden py-16 sm:py-24 px-5 sm:px-8 lg:px-12 bg-white border-b border-slate-200/80"
      >
        {/* Dummy Background Picture for Section 05 */}
        <img
          src={DUMMY_BG_INDUSTRIES}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-bottom pointer-events-none select-none z-0 opacity-95"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0 bg-gradient-to-b from-white/80 via-white/45 to-white/75 pointer-events-none"
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: smoothEase }}
            className="max-w-3xl mb-12"
          >
            <p className="text-xs font-mono tracking-widest text-cyan-700 uppercase mb-3">
              {t.industries.tag}
            </p>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              {t.industries.title}
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {t.industries.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.industries.list.map((sector, idx) => {
              const Icon = industryIcons[idx] || Cog;
              return (
                <motion.div
                  key={sector}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.45,
                    delay: idx * 0.05,
                    ease: smoothEase,
                  }}
                  className="p-5 rounded-2xl bg-[#F4F7F9]/90 backdrop-blur-xs border border-slate-200/90 hover:border-cyan-500/50 transition-colors flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-cyan-700 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-semibold text-slate-900 text-sm sm:text-base">
                    {sector}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          06 // ENGINEERING FOUNDATION
      ========================================================= */}
      <section
        id="foundation"
        className="py-16 sm:py-24 px-5 sm:px-8 lg:px-12 bg-[#F4F7F9] border-b border-slate-200/80"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: smoothEase }}
            className="lg:col-span-6 space-y-6"
          >
            <p className="text-xs font-mono tracking-widest text-cyan-700 uppercase">
              {t.foundation.tag}
            </p>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              {t.foundation.title}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {t.foundation.desc}
            </p>

            <div className="space-y-3 pt-2">
              {t.foundation.pillars.map((pillar, idx) => (
                <div
                  key={pillar}
                  className="p-4 rounded-xl bg-white border border-slate-200/90 flex items-center gap-4"
                >
                  <span className="text-xs font-mono font-bold text-cyan-700">
                    0{idx + 1}
                  </span>
                  <span className="text-sm font-semibold text-slate-900">
                    {pillar}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: smoothEase }}
            className="lg:col-span-6"
          >
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 shadow-lg">
              <img
                src={DUMMY_COMPANY_VISUAL}
                alt="B-Tekno Engineering Team & Control Lab Dummy"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          07 // LOCATION, COORDINATE LINK & GOOGLE MAP
      ========================================================= */}
      <section
        id="location"
        className="py-16 sm:py-24 px-5 sm:px-8 lg:px-12 bg-white border-b border-slate-200/80"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: smoothEase }}
            className="max-w-3xl mb-12"
          >
            <p className="text-xs font-mono tracking-widest text-cyan-700 uppercase mb-3">
              {t.location.tag}
            </p>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              {t.location.title}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {t.location.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#F4F7F9] border border-slate-200/90 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 text-cyan-700 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {t.location.companyName}
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    {t.location.address}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
                  <p className="text-[11px] font-mono text-slate-500">
                    {t.location.coordLabel}
                  </p>
                  <a
                    href={COMPANY_LOCATION.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block font-mono text-sm text-cyan-700 hover:text-cyan-800 underline underline-offset-4 break-all"
                  >
                    {COMPANY_LOCATION.coordDisplay}
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={COMPANY_LOCATION.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  {t.location.openMapBtn}
                </a>

                <button
                  type="button"
                  onClick={handleCopyCoords}
                  className="py-3 px-5 rounded-full bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-colors"
                >
                  {copiedCoords ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      {t.location.copiedBtn}
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-cyan-700" />
                      {t.location.copyBtn}
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 min-h-[320px] sm:min-h-[380px] shadow-xs">
              <iframe
                title="B-Tekno Location Map"
                src={COMPANY_LOCATION.googleMapsEmbedUrl}
                className="w-full h-full min-h-[320px] sm:min-h-[380px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          08 // CONTACT & TECHNICAL CONSULTATION
      ========================================================= */}
      <section
        id="contact"
        className="py-16 sm:py-24 px-5 sm:px-8 lg:px-12 bg-[#F4F7F9]"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: smoothEase }}
            className="max-w-3xl mb-12"
          >
            <p className="text-xs font-mono tracking-widest text-cyan-700 uppercase mb-3">
              {t.contact.tag}
            </p>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              {t.contact.title}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {t.contact.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <form
              onSubmit={handleStaticEmailSubmit}
              className="lg:col-span-7 p-6 sm:p-9 rounded-2xl bg-white border border-slate-200/90 space-y-5 shadow-xs"
            >
              <h3 className="text-lg font-bold text-slate-900">
                {t.contact.formTitle}
              </h3>

              <div>
                <label className="block text-xs font-mono text-slate-600 mb-2">
                  {t.contact.nameLabel}
                </label>
                <input
                  type="text"
                  required
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder={t.contact.namePlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-cyan-600 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-600 mb-2">
                  {t.contact.topicLabel}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {t.contact.topics.map((topic) => (
                    <button
                      key={topic}
                      type="button"
                      onClick={() => setSelectedTopic(topic)}
                      className={`px-3.5 py-2.5 rounded-xl text-left text-xs font-medium border transition-colors ${
                        selectedTopic === topic
                          ? "bg-cyan-50 border-cyan-600 text-cyan-900 font-semibold"
                          : "bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300"
                      }`}
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-600 mb-2">
                  {t.contact.msgLabel}
                </label>
                <textarea
                  rows={4}
                  required
                  value={inquiryMessage}
                  onChange={(e) => setInquiryMessage(e.target.value)}
                  placeholder={t.contact.msgPlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-cyan-600 focus:bg-white resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm inline-flex items-center justify-center gap-2 transition-colors"
              >
                <Send className="w-4 h-4" />
                {t.contact.sendBtn}
              </button>
            </form>

            {/* Direct Representative Cards */}
            <div className="lg:col-span-5 space-y-5">
              <div className="p-6 rounded-2xl bg-white border border-slate-200/90 space-y-4 shadow-xs">
                <div>
                  <p className="text-xs font-mono text-cyan-700">
                    MANAGER TECHNICAL
                  </p>
                  <h4 className="text-lg font-bold text-slate-900 mt-0.5">
                    Fachrul Lingga Pramadia
                  </h4>
                </div>
                <div className="space-y-2 text-sm text-slate-700">
                  <a
                    href="mailto:fachrul.lingga@b-tekno.com "
                    className="flex items-center gap-2.5 hover:text-cyan-700 transition-colors break-all"
                  >
                    <Mail className="w-4 h-4 text-cyan-700 shrink-0" />
                    fachrul.lingga@b-tekno.com 
                  </a>
                </div>
                <a
                  href="https://wa.me/6282128027268"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono font-semibold inline-flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 shrink-0" />
                  {t.contact.whatsappBtn} (+62 821-2802-7268)
                </a>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200/90 space-y-4 shadow-xs">
                <div>
                  <p className="text-xs font-mono text-cyan-700">MARKETING</p>
                  <h4 className="text-lg font-bold text-slate-900 mt-0.5">
                    Angga Kusumah
                  </h4>
                </div>
                <div className="space-y-2 text-sm text-slate-700">
                  <a
                    href="mailto:angga.ka@b-tekno.com"
                    className="flex items-center gap-2.5 hover:text-cyan-700 transition-colors break-all"
                  >
                    <Mail className="w-4 h-4 text-cyan-700 shrink-0" />
                    angga.ka@b-tekno.com
                  </a>
                </div>
                <a
                  href="https://wa.me/6281322522708"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono font-semibold inline-flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 shrink-0" />
                  {t.contact.whatsappBtn} (+62 813-2252-2708)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer lang={lang} />

      {/* Scroll To Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-5 right-5 p-3 rounded-full bg-slate-900 hover:bg-cyan-700 text-white border border-slate-700/80 shadow-lg transition-colors z-50"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}