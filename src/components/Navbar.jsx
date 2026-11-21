"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navDict = {
  id: {
    links: [
      { label: "Beranda", href: "#home" },
      { label: "Solusi", href: "#solutions" },
      { label: "Arsitektur OT/IT", href: "#architecture" },
      { label: "Fitur Utama", href: "#features" },
      { label: "Industri", href: "#industries" },
      { label: "Lokasi", href: "#location" },
      { label: "Konsultasi", href: "#contact" },
    ],
  },
  en: {
    links: [
      { label: "Home", href: "#home" },
      { label: "Solutions", href: "#solutions" },
      { label: "OT/IT Architecture", href: "#architecture" },
      { label: "Core Features", href: "#features" },
      { label: "Industries", href: "#industries" },
      { label: "Location", href: "#location" },
      { label: "Consult Us", href: "#contact" },
    ],
  },
};

export function BTeknoLogo({ className = "" }) {
  return (
    <a href="#home" className={`inline-flex items-center shrink-0 ${className}`}>
      <img
        src="/logo.png"
        alt="B-Tekno"
        className="h-10 sm:h-12 w-auto object-contain"
      />
    </a>
  );
}

export default function Navbar({ lang = "id", onLangChange }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const t = navDict[lang] || navDict.id;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isOverlay = !scrolled && !mobileOpen;

  return (
    <header
      className={`fixed top-0 inset-x-0 w-full z-50 transition-all duration-300 ${
        isOverlay
          ? "bg-gradient-to-b from-slate-950/75 to-transparent py-4"
          : "bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs py-3"
      }`}
    >
      {/* Full Edge-to-Edge Bar */}
      <div className="w-full px-4 sm:px-8 lg:px-10 flex items-center justify-between gap-4">
        <BTeknoLogo />

        {/* Right Side: Menu Links + ID/EN Switcher */}
        <div className="flex items-center gap-6 lg:gap-8">
          <nav className="hidden lg:flex items-center gap-6">
            {t.links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isOverlay
                    ? "text-white/90 hover:text-cyan-300"
                    : "text-slate-700 hover:text-cyan-700"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Compact ID / EN Switcher */}
          <div
            className={`inline-flex items-center rounded-full p-0.5 text-xs font-mono border transition-colors ${
              isOverlay
                ? "bg-slate-950/40 border-white/30 text-white backdrop-blur-md"
                : "bg-slate-100 border-slate-200 text-slate-700"
            }`}
            role="group"
            aria-label="Language Switcher"
          >
            <button
              type="button"
              onClick={() => onLangChange("id")}
              className={`px-2.5 py-1 rounded-full font-semibold transition-colors ${
                lang === "id"
                  ? isOverlay
                    ? "bg-white text-slate-950"
                    : "bg-slate-900 text-white"
                  : "opacity-75 hover:opacity-100"
              }`}
            >
              ID
            </button>
            <button
              type="button"
              onClick={() => onLangChange("en")}
              className={`px-2.5 py-1 rounded-full font-semibold transition-colors ${
                lang === "en"
                  ? isOverlay
                    ? "bg-white text-slate-950"
                    : "bg-slate-900 text-white"
                  : "opacity-75 hover:opacity-100"
              }`}
            >
              EN
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className={`lg:hidden p-2 rounded-lg border transition-colors ${
              isOverlay
                ? "border-white/30 text-white bg-slate-950/30"
                : "border-slate-200 text-slate-800 bg-slate-50"
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileOpen && (
        <div className="lg:hidden w-full bg-white border-b border-slate-200 px-4 sm:px-8 py-4 space-y-1 shadow-lg">
          {t.links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2.5 text-sm font-medium text-slate-800 hover:text-cyan-700 border-b border-slate-100 last:border-none"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}