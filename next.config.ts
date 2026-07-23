import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // U roditeljskom folderu postoji još jedan package-lock.json, pa root
  // fiksiramo eksplicitno da Turbopack ne bi pogodio pogrešan direktorijum.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
