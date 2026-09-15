// "Tuesday, September 15"
export function formatHeaderDate(date = new Date()) {
  return date.toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

// { weekday: "Tuesday", monthShort: "SEP", day: "15", long: "15 September 2026" }
export function getCalendarParts(date = new Date()) {
  return {
    weekday: date.toLocaleDateString(undefined, { weekday: "long" }),
    monthShort: date
      .toLocaleDateString(undefined, { month: "short" })
      .toUpperCase(),
    day: String(date.getDate()),
    long: date.toLocaleDateString(undefined, {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
  };
}
