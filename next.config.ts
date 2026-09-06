import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // U roditeljskom folderu postoji još jedan package-lock.json, pa root
  // fiksiramo eksplicitno da Turbopack ne bi pogodio pogrešan direktorijum.
  turbopack: {
    root: __dirname,
  },

  // Rute usluga su preimenovane u adrese koje opisuju uslugu onako kako je
  // ljudi kucaju u pretragu. Stare adrese su vec bile objavljene, pa svaka
  // dobija trajni redirect umesto 404: 301 prenosi i posetioca i ono sto je
  // Google do sada zabelezio o staroj adresi.
  async redirects() {
    return [
      { source: "/usluge/vebsajt", destination: "/usluge/izrada-sajta", permanent: true },
      { source: "/usluge/prodavnica", destination: "/usluge/online-prodavnica", permanent: true },
      { source: "/usluge/seo", destination: "/usluge/seo-optimizacija", permanent: true },
      { source: "/usluge/oglasi", destination: "/usluge/google-ads", permanent: true },
    ];
  },
};

export default nextConfig;
