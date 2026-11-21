import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "B-Tekno | Industrial IoT & OT/IT Convergence Solutions",
  description:
    "Menjembatani aset OT dan kecerdasan IT melalui perangkat lunak industri, perangkat keras IoT, dan keamanan siber untuk sektor energi dan manufaktur.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased bg-white text-slate-900`}
    >
      <body className="bg-white text-slate-900 min-h-screen overflow-x-hidden selection:bg-cyan-500/20 selection:text-cyan-900">
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}