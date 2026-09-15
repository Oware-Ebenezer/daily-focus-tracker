import palette from "@/constants/colors";

// Colors for use outside NativeWind class names (navigation options, SVG strokes,
// icon colors, style objects). Class names get the same palette via tailwind.config.js.
export const colors = {
  ...palette,
  // Derived tints
  slateMuted: "rgba(35, 61, 77, 0.6)",
  slateFaint: "rgba(35, 61, 77, 0.45)",
  border: "rgba(35, 61, 77, 0.12)",
  tabInactive: "rgba(234, 236, 240, 0.6)",
};
