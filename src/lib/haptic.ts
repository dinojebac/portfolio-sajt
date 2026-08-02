/**
 * Short vibrations for moments the visitor caused. Silently does nothing on
 * desktop, on iOS (no Vibration API), or when reduced motion is requested —
 * every caller can fire and forget.
 *
 * Kept deliberately sparse: haptics earn their keep by being rare. Buzzing on
 * every tap trains people to ignore the buzz, so only outcomes get one.
 */
const patterns = {
  /** Request accepted — two quick beats, reads as a nod. */
  success: [12, 40, 22],
  /** Something needs fixing — one flat pulse. */
  error: 45,
  // `satisfies` rather than `as const`: keeps the keys narrow for the signature
  // below while leaving the arrays mutable, which is what vibrate() wants.
} satisfies Record<string, VibratePattern>;

export function haptic(kind: keyof typeof patterns) {
  if (typeof window === "undefined" || !("vibrate" in navigator)) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  try {
    navigator.vibrate(patterns[kind]);
  } catch {
    // Some browsers gate vibrate behind engagement rules and throw; a missing
    // buzz is never worth surfacing.
  }
}
