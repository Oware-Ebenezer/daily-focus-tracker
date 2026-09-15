export const PRIORITIES = ["Low", "Medium", "High"];
export const DEFAULT_PRIORITY = "Medium";

// Priority is expressed by tint weight, not by a second hue, so orange keeps one meaning.
// These are NativeWind class strings; this folder is in tailwind.config.js `content`.
export const PRIORITY_STYLES = {
  High: { container: "bg-primary/15", text: "text-slate" },
  Medium: { container: "bg-slate/10", text: "text-slate" },
  Low: { container: "border border-slate/15", text: "text-slate/60" },
};

export function isPriority(value) {
  return PRIORITIES.includes(value);
}
