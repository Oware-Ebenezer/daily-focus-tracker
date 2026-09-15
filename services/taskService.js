import { DEFAULT_PRIORITY, isPriority } from "@/constants/priority";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "TASKS_V1";

// Coerces one stored record into a valid Task, or returns null if it is unusable.
function normalizeTask(record, id) {
  if (!record || typeof record !== "object") return null;
  if (typeof record.title !== "string") return null;
  return {
    id,
    title: record.title,
    details: typeof record.details === "string" ? record.details : "",
    priority: isPriority(record.priority) ? record.priority : DEFAULT_PRIORITY,
    completed: Boolean(record.completed),
    date: typeof record.date === "string" ? record.date : new Date().toISOString(),
  };
}

// Rebuilds { byId, allIds } keeping only ids that have a valid record,
// so a corrupted or partially written payload can never crash the UI.
function normalizeState(data) {
  if (!data || typeof data !== "object") return null;
  if (!data.byId || typeof data.byId !== "object") return null;
  if (!Array.isArray(data.allIds)) return null;

  const byId = {};
  const allIds = [];
  const seen = new Set();
  for (const id of data.allIds) {
    if (typeof id !== "string" || seen.has(id)) continue;
    const task = normalizeTask(data.byId[id], id);
    if (!task) continue;
    seen.add(id);
    byId[id] = task;
    allIds.push(id);
  }
  return { byId, allIds };
}

/** @returns {Promise<boolean>} true when the write succeeded */
export async function saveTasks(data) {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return true;
  } catch (error) {
    console.warn("Could not save tasks:", error);
    return false;
  }
}

/** @returns {Promise<import("@/context/taskReducer").TaskState | null>} */
export async function loadTasks() {
  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return normalizeState(JSON.parse(raw));
  } catch (error) {
    console.warn("Could not load tasks:", error);
    return null;
  }
}
