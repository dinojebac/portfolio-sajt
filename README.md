# BSB — Premium portfolio sajt

Cinematic one-page portfolio za BSB studio: panter video intro vezan za skrol,
premium sekcije (Services, Showreel, Selected Work sa case study modalima,
Why BSB, Studio, FAQ, Contact) i kontakt forma.

**Stack:** Next.js 16 (App Router, Turbopack) · React 19 · Tailwind CSS v4 ·
GSAP ScrollTrigger + SplitText · Lenis smooth scroll.

## Pokretanje

```bash
npm install
npm run dev      # development (http://localhost:3000)
npm run build    # production build
npm start        # production server
```

## Struktura

- `src/sections/` — sekcije stranice (Hero, Services, Showcase, SelectedWork…)
- `src/components/` — deljene komponente (Navbar, CaseModal, Reveal, MockSite…)
- `src/data/` — sav sadržaj (services, projects, faq, site config) — copy i
  projekti se menjaju ovde, bez diranja komponenti
- `src/lib/` — gsap/lenis setup, perf-mode heuristika
- `public/videos/` — panter klipovi: `panther-720/540.mp4` su enkodovani sa
  keyframe-om na svakom frejmu (`ffmpeg -g 1`) zbog glatkog scroll scrubbinga;
  `panther-loop.mp4` je isti klip za showreel sekciju

## Šta je ostalo da se doda (TODO)

- Pravi Instagram nalog i email → `src/data/site.ts`
- Pravi domen → `metadataBase` u `src/app/layout.tsx`
- Email servis za kontakt formu (preporuka: Resend) → `src/app/api/contact/route.ts`
- Pravi screenshotovi/video za projekte → `src/data/projects.ts` (`media` polje
  podržava `image` i `video` pored postojećeg `mock` prikaza)
- Pravi showreel → zameniti `src` u `src/sections/Showcase.tsx`

## Deploy

Spreman za Vercel: `vercel` iz ovog foldera ili import repoa na vercel.com.
