"use client";

import { useEffect, useState, type MouseEvent } from "react";

const SITE_URL = "https://bitsitebuilder.com";
const CHROME_INTENT = "intent://bitsitebuilder.com/#Intent;scheme=https;package=com.android.chrome;end";

export default function InstagramBrowserFallback() {
  const [isInstagram, setIsInstagram] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || "";
    setIsInstagram(/Instagram/i.test(userAgent));
    setIsAndroid(/Android/i.test(userAgent));
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
    <a
      href={SITE_URL}
      onClick={openChrome}
      className="mt-4 inline-flex items-center rounded-full border border-line px-4 py-2 text-xs text-fg/70 transition-colors hover:border-eye hover:text-eye"
    >
      Otvorite u Chrome-u za pun doživljaj
    </a>
  );
}
