"use client";

import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { BTeknoLogo } from "./Navbar";

const footerDict = {
  id: {
    tagline:
      "Solusi aplikasi perangkat lunak industri, perangkat keras IIoT tersertifikasi, dan keamanan siber OT/IT untuk sektor energi dan manufaktur.",
    navTitle: "Navigasi",
    contactTitle: "Kontak Langsung",
    rights: "Hak cipta dilindungi undang-undang.",
    locationText: "Kawasan Industri Cikampek, Karawang, Jawa Barat, Indonesia",
    hoursLabel: "Jam Operasional",
    hoursValue: "Senin – Jumat: 09:00 – 17:00 WIB",
    links: [
      { label: "Beranda", href: "#home" },
      { label: "Tantangan Integrasi", href: "#bottleneck" },
      { label: "Produk & Solusi", href: "#solutions" },
      { label: "Arsitektur DMZ 3.5", href: "#architecture" },
      { label: "Enterprise Historian", href: "#features" },
      { label: "Lokasi & Peta", href: "#location" },
    ],
  },
  en: {
    tagline:
      "Industrial software applications, certified IIoT edge hardware, and OT/IT cybersecurity solutions for energy and manufacturing.",
    navTitle: "Navigation",
    contactTitle: "Direct Contacts",
    rights: "All rights reserved.",
    locationText: "Cikampek Industrial Corridor, Karawang, West Java, Indonesia",
    hoursLabel: "Operational Hours",
    hoursValue: "Monday – Friday: 09:00 – 17:00 WIB",
    links: [
      { label: "Home", href: "#home" },
      { label: "Integration Bottleneck", href: "#bottleneck" },
      { label: "Products & Solutions", href: "#solutions" },
      { label: "DMZ 3.5 Architecture", href: "#architecture" },
      { label: "Enterprise Historian", href: "#features" },
      { label: "Location & Map", href: "#location" },
    ],
  },
};

export default function Footer({ lang = "id" }) {
  const t = footerDict[lang] || footerDict.id;

  return (
    <footer className="w-full bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Compact Edge-to-Edge Main Footer */}
      <div className="w-full px-4 sm:px-8 lg:px-10 py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Brand, Location & Operational Hours */}
        <div className="lg:col-span-4 space-y-3.5">
          <BTeknoLogo />
          <p className="text-sm leading-relaxed text-slate-400 pt-1">
            {t.tagline}
          </p>
          <div className="space-y-1.5 pt-1 text-xs">
            <p className="font-mono text-slate-400">
              PT Bumi Teknologi Berkah (B-Tekno)
            </p>
            <a
              href="https://www.google.com/maps?q=-6.4189,107.4567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>{t.locationText} (-6.4189, 107.4567)</span>
            </a>
            <div className="flex items-center gap-2 text-slate-300 pt-0.5">
              <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>
                <strong className="font-semibold text-white">
                  {t.hoursLabel}:
                </strong>{" "}
                {t.hoursValue}
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="lg:col-span-2 space-y-3">
          <h4 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-white">
            {t.navTitle}
          </h4>
          <ul className="space-y-2 text-sm text-slate-400">
            {t.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Enlarged Direct Contacts (50% Width on Desktop) */}
        <div className="lg:col-span-6 space-y-3.5">
          <h4 className="text-sm sm:text-base font-mono font-bold uppercase tracking-widest text-white">
            {t.contactTitle}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-colors space-y-3">
              <div>
                <p className="text-base sm:text-lg font-bold text-white leading-snug">
                  Fachrul Lingga Pramadia
                </p>
                <p className="text-xs sm:text-sm font-mono text-cyan-400 mt-0.5">
                  Manager Technical
                </p>
              </div>
              <div className="flex flex-col gap-2 text-sm sm:text-[15px] text-slate-200 pt-1">
                <a
                  href="mailto:fachrul.lingga@b-tekno.com"
                  className="inline-flex items-center gap-2.5 hover:text-cyan-300 transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  fachrul.lingga@b-tekno.com
                </a>
                <a
                  href="https://wa.me/6282128027268"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 hover:text-emerald-300 transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  +62 821-2802-7268
                </a>
              </div>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-colors space-y-3">
              <div>
                <p className="text-base sm:text-lg font-bold text-white leading-snug">
                  Angga Kusumah
                </p>
                <p className="text-xs sm:text-sm font-mono text-cyan-400 mt-0.5">
                  Marketing
                </p>
              </div>
              <div className="flex flex-col gap-2 text-sm sm:text-[15px] text-slate-200 pt-1">
                <a
                  href="mailto:angga.k@b-tekno.com"
                  className="inline-flex items-center gap-2.5 hover:text-cyan-300 transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  angga.k@b-tekno.com
                </a>
                <a
                  href="https://wa.me/6281322522708"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 hover:text-emerald-300 transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  +62 813-2252-2708
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Compact Edge-to-Edge Bottom Strip */}
      <div className="w-full border-t border-slate-800/80 pt-4 pb-16 sm:py-4 px-4 sm:px-8 lg:pl-10 sm:pr-20">
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} B-Tekno. {t.rights}
          </p>
          <p className="font-mono text-slate-500 text-center sm:text-right">
            SCADA • DCS • IIoT • LEVEL 3.5 DMZ • HISTORIAN
          </p>
        </div>
      </div>
    </footer>
  );
}