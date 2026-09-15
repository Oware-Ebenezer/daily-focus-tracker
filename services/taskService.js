import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "TASKS_V1"; //Remember to move to env variable in production

// Guards against a corrupted or differently shaped payload under the same key.
function isValidTaskState(data) {
  return (
    data !== null &&
    typeof data === "object" &&
    data.byId !== null &&
    typeof data.byId === "object" &&
    Array.isArray(data.allIds)
  );
}

export async function saveTasks(data) {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.log("Save error:", error);
  }
}

export async function loadTasks() {
  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    return isValidTaskState(data) ? data : null;
  } catch (error) {
    console.log("Load error:", error);
    return null;
  }
}
