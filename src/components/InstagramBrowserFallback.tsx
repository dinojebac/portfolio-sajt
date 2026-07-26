"use client";

import { useEffect, useState, type MouseEvent } from "react";

const SITE_URL = "https://bitsitebuilder.com";
const CHROME_INTENT = "intent://bitsitebuilder.com/#Intent;scheme=https;package=com.android.chrome;end";

export default function InstagramBrowserFallback() {
  const [isInstagram, setIsInstagram] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || "";
    const openedInInstagram = /Instagram/i.test(userAgent);
    setIsInstagram(openedInInstagram);
    setIsAndroid(/Android/i.test(userAgent));
    if (!openedInInstagram) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  if (!isInstagram) return null;

  function openChrome(event: MouseEvent<HTMLAnchorElement>) {
    if (!isAndroid) return;
    event.preventDefault();

    let fallbackTimer = window.setTimeout(() => {
      window.location.assign(SITE_URL);
    }, 1200);

    const clearFallback = () => {
      window.clearTimeout(fallbackTimer);
      window.removeEventListener("pagehide", clearFallback);
    };
    window.addEventListener("pagehide", clearFallback, { once: true });

    try {
      window.location.assign(CHROME_INTENT);
    } catch {
      clearFallback();
      window.location.assign(SITE_URL);
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 px-5 text-center backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="instagram-browser-title"
    >
      <div className="max-w-sm rounded-2xl border border-line bg-black px-7 py-9 shadow-2xl">
        <p className="label text-eye">BSB®</p>
        <h2 id="instagram-browser-title" className="mt-4 text-2xl font-semibold tracking-[-0.03em]">
          Otvorite u Chrome-u za pun doživljaj
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-fg/65">
          Instagram browser ne prikazuje sajt i animacije kako treba.
        </p>
        <a
          href={SITE_URL}
          onClick={openChrome}
          className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-fg px-5 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.02]"
        >
          Otvori u Chrome-u
        </a>
      </div>
    </div>
  );
}
