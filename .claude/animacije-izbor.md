# Izbor animacija za BSB portfolio sajt

Izvor: `animacije_sajtova.xlsx` (OneDrive) — 52 efekta.
Cilj: posetilac ne može da prestane da skroluje → javlja se za svoj sajt.
Ograničenje: mobile-first, sve mora da radi na dodir.

## Psihološki okvir

Trigger animacije (okine se jednom) prave gledaoca. Scrub animacije (vezane za
poziciju prsta) prave učesnika. Zavisnost od skrola gradi se na četiri poluge:

1. **Uzročnost** — scrub umesto trigger; stvar se pomera tačno koliko i prst
2. **Zeigarnik** — sekcija se završava nedovršeno, sledeća je delimično vidljiva
3. **Varijabilna nagrada** — efekti se ne ponavljaju predvidljivim redom
4. **Peak-end** — jedan spektakl na sredini, najjači trenutak pred formom

## Odabrano

| # | Efekat | Uloga | Gde živi |
|---|--------|-------|----------|
| 29 | Scrub-highlight teksta reč po reč | jezgro uzročnosti | `components/ScrubText.tsx` → About, OfferDetails |
| 12 | Scroll-velocity skew | materijalnost | `components/ScrollFX.tsx` (`data-skew`) |
| 32 | Multi-speed parallax | dubina | `components/ScrollFX.tsx` (`data-speed`) |
| 37 | Progres po poglavljima | Zeigarnik / orijentacija | `components/ChapterProgress.tsx` → Navbar |
| 49 | Ambijentalno svetlo koje putuje | atmosfera putovanja | `components/AmbientGlow.tsx` |
| 27 | Odometer cifre | mikro-nagrada | `components/Odometer.tsx` → Hero |
| 10 | Text scramble | mikro-nagrada | `components/ScrambleLabel.tsx`, Hero labela |
| 42 | Tap-ripple u bojama brenda | dodir dobija odgovor | `components/TapRipple.tsx` |
| 52 | Vibracija pri slanju forme | telesna potvrda | `lib/haptic.ts` → Contact |
| 20 | Horizontalni swipe carousel | dokaz koji se vidi | SelectedWork (scroll-snap, samo mobilni) |

Već postojalo: #13 Lenis, #31 film grain, #11 SplitText.
Hero je dobio ulaznu koreografiju + scrub parallax (pozadina zaostaje za tekstom).

## Odbačeno svesno

- **#35 scroll-snap sekcije** — bori se sa prirodnim skrolom na telefonu,
  pravi frustraciju umesto zavisnosti
- **#1 / #3 / #6 / #21** WebGL i physics — ubijaju mobilni (tabela: Ne/Delimično)
- **#51 live brojač zaliha** — lažna oskudica, ruši poverenje kod B2B klijenta
- **#44 depth-of-field blur** — blur filter na skrolu = jank
- **#45 favicon trik** — jeftino za ovaj ton
- **#46 audio waveform** — nema audio sadržaja
- **#15 WebGL displacement** — hover-zavisno
- **#48 variable-font težina na skrol** — menja metriku slova svaki frejm →
  relayout i pomeranje teksta; jank na telefonu za malu dobit
- **#38 puna promena palete po sekcijama** — na sajtu koji je strogo crn sa
  jednim akcentom, prebojavanje sekcija čita se kao drugi sajt svaki ekran.
  Zamenjeno sa #49 (jedno svetlo koje putuje) — isti osećaj kretanja, brend ostaje
- **#36 video kao tekstura u tekstu** — tehnika traži `mix-blend-mode`; ako
  blend zakaže, naslov je nevidljiv. Neprihvatljiv rizik na Contact sekciji gde
  se konverzija dešava, plus decode videa troši bateriju na telefonu

## Tehnički okviri

- GSAP 3.15 — svi premium plugini dostupni (Webflow ih je oslobodio)
- ScrollSmoother se NE koristi: sudara se sa Lenis-om koji je već postavljen;
  `data-speed` parallax radi se ručno preko ScrollTrigger
- Sve animacije samo na `transform` / `opacity` (composited)
- Svaki efekat mora proći kroz `prefersReducedMotion()` iz `src/lib/gsap.ts`
- Debug iz konzole: `__lenis`, `__gsap`, `__ST`

## Testiranje u Browser panelu

`requestAnimationFrame` ne kuca dok je tab `hidden`. Pre svakog merenja
animacija pozvati `tabs_select` na taj tab, inače GSAP ticker stoji na 0 i sve
izgleda kao da je polomljeno.
