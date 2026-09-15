// Single source of truth for colors used outside NativeWind class names
// (navigation options, SVG strokes, icon colors). Keep in sync with tailwind.config.js.
export const colors = {
  background: "#EAECF0",
  surface: "#FFFFFF",
  field: "#F4F5F7",
  primary: "#FE7F2D",
  slate: "#233D4D",
  ink: "#000000",
  // Derived tints
  slateMuted: "rgba(35, 61, 77, 0.6)",
  slateFaint: "rgba(35, 61, 77, 0.45)",
  border: "rgba(35, 61, 77, 0.12)",
  tabInactive: "rgba(234, 236, 240, 0.6)",
};

export const PRIORITIES = ["Low", "Medium", "High"];

// Priority is expressed by tint weight, not by a second hue, so orange keeps one meaning.
export const PRIORITY_STYLES = {
  High: { container: "bg-primary/15", text: "text-slate" },
  Medium: { container: "bg-slate/10", text: "text-slate" },
  Low: { container: "border border-slate/15", text: "text-slate/60" },
};
