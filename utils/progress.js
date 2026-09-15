import { pluralize } from "@/utils/text";

/**
 * Headline + body shown on the Home progress card.
 * @param {{ total: number, completed: number, remaining: number, percentage: number }} stats
 */
export function getProgressMessage({ total, completed, remaining, percentage }) {
  if (total === 0) {
    return { title: "Nothing planned yet", body: "Add a task to get started." };
  }
  if (completed === 0) {
    return {
      title: "Let's get started",
      body: `${pluralize(total, "task")} waiting for you.`,
    };
  }
  if (percentage === 100) {
    return { title: "All done", body: "Every task completed. Nice work." };
  }
  return {
    title: "Keep going",
    body: `${completed} of ${total} done. ${remaining} left.`,
  };
}

/** Caption under the progress bar on the Stats screen. */
export function getRemainingMessage({ total, remaining }) {
  if (total === 0) return "Add a task to start tracking progress.";
  if (remaining === 0) return "Everything is done.";
  return `${pluralize(remaining, "task")} left to reach 100%.`;
}
