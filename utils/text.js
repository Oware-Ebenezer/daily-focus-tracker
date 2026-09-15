// pluralize(1, "task") -> "1 task"; pluralize(3, "task") -> "3 tasks"
export function pluralize(count, singular, plural = `${singular}s`) {
  return `${count} ${count === 1 ? singular : plural}`;
}
