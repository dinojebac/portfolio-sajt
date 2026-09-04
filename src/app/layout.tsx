import type { Metadata, Viewport } from "next";
import { Instrument_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollFX from "@/components/ScrollFX";
import AmbientGlow from "@/components/AmbientGlow";
import TapRipple from "@/components/TapRipple";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// latin-ext subset is required for full Serbian Latin coverage (Č/Ć/Š/Đ/Ž).
const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin", "latin-ext"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  weight: ["400", "500"],
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "BSB — Sajtovi koji izgledaju skuplje",
    // Podstranice šalju samo svoje ime; sufiks dolazi odavde.
    template: "%s | BSB",
  },
  description:
    "BSB je studio za premium sajtove, cinematic scroll animacije i kompletnu digitalnu prezentaciju. Za brendove koji ne žele da izgledaju prosečno.",
  openGraph: {
    title: "BSB — Sajtovi koji izgledaju skuplje",
    description:
      "Premium sajtovi, cinematic animacije i digitalna prezentacija za ozbiljne brendove.",
    type: "website",
    images: ["/images/panther-still.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#060606",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr" className={`${instrumentSans.variable} ${plexMono.variable}`}>
      <body className="bg-bg text-fg antialiased">
        <SmoothScroll />
        <AmbientGlow />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <TapRipple />
        {/* Last so every [data-speed] / [data-skew] node is already committed. */}
        <ScrollFX />
      </body>
    </html>
  );
}
