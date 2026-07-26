"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";

const VIDEO_DURATION_FALLBACK = 5.04;

export default function Showcase() {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoFailed, setVideoFailed] = useState(false);
  const [isInstagram, setIsInstagram] = useState(false);

  useEffect(() => {
    const instagram = /Instagram/i.test(navigator.userAgent || "");
    setIsInstagram(instagram);
    if (instagram && videoRef.current) {
      const video = videoRef.current;
      const mobile = window.matchMedia("(max-width: 768px)").matches;
      video.src = mobile ? "/videos/panther-540.mp4" : "/videos/panther-720.mp4";
      video.load();
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) void video.play().catch(() => undefined);
        else video.pause();
      }, { threshold: 0.2 });
      observer.observe(ref.current as HTMLElement);
      return () => observer.disconnect();
    }
  }, []);

  useGSAP(
    (_, contextSafe) => {
      if (!contextSafe || videoFailed || isInstagram) return;
      const section = ref.current;
      const video = videoRef.current;
      if (!section || !video) return;

      const mobile = window.matchMedia("(max-width: 768px)").matches;
      video.src = mobile ? "/videos/panther-540.mp4" : "/videos/panther-720.mp4";
      video.load();

      const build = contextSafe(() => {
        const duration = video.duration || VIDEO_DURATION_FALLBACK;
        const frame = 1 / 24;
        const proxy = { time: 0 };

        gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: { trigger: section, start: "top top", end: "bottom bottom", scrub: 0.35 },
        })
          .to(proxy, { time: duration, duration: 0.82, onUpdate: () => {
            const nextFrame = Math.round(proxy.time / frame) * frame;
            if (Math.abs(nextFrame - video.currentTime) > frame / 2) video.currentTime = nextFrame;
          } }, 0)
          .fromTo("[data-showreel-media]", { scale: 0.58, autoAlpha: 0.18, filter: "brightness(0.12) contrast(1.15) blur(6px)" }, { scale: 1, autoAlpha: 1, filter: "brightness(1) contrast(1) blur(0px)", duration: 0.5 }, 0)
          .fromTo("[data-showreel-blackout]", { autoAlpha: 1 }, { autoAlpha: 0, duration: 0.24 }, 0.06)
          .fromTo("[data-showreel-veil]", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.12 }, 0.82)
          .fromTo("[data-showreel-copy]", { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.12 }, 0.84);
      });

      if (video.readyState >= 1) build();
      else video.addEventListener("loadedmetadata", build, { once: true });
      const onError = contextSafe(() => setVideoFailed(true));
      video.addEventListener("error", onError, { once: true });
      return () => {
        video.removeEventListener("loadedmetadata", build);
        video.removeEventListener("error", onError);
      };
    },
    { scope: ref, dependencies: [videoFailed, isInstagram] }
  );

  return (
    <section id="showreel" ref={ref} className={`relative bg-black ${isInstagram ? "h-[100svh]" : "h-[300vh]"}`}>
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <div data-showreel-media className="absolute inset-0 origin-center will-change-transform">
          {videoFailed ? (
            <Image src="/images/panther-poster.jpg" alt="Crni panter gleda pravo u kameru" fill sizes="100vw" className="object-cover" />
          ) : (
            <video ref={videoRef} muted playsInline loop preload="auto" poster="/images/panther-poster.jpg" aria-hidden className="absolute left-1/2 top-1/2 h-auto w-[200vw] max-w-none -translate-x-1/2 -translate-y-1/2 md:inset-0 md:left-0 md:top-0 md:h-full md:w-full md:translate-x-0 md:translate-y-0 md:object-cover" />
          )}
        </div>
        <div data-showreel-blackout className={`absolute inset-0 bg-black ${isInstagram ? "hidden" : ""}`} />
        <div data-showreel-veil className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-black/35 ${isInstagram ? "opacity-100" : "opacity-0"}`} />
        <div data-showreel-copy className={`absolute inset-x-0 bottom-0 px-5 pb-[10svh] md:px-10 md:pb-[12svh] ${isInstagram ? "opacity-100" : "opacity-0"}`}>
          <p className="max-w-3xl text-[clamp(1.8rem,4.5vw,4.2rem)] font-semibold leading-[1.05] tracking-[-0.03em]">Nemoj da se plašiš, neće izaći.</p>
        </div>
      </div>
    </section>
  );
}
