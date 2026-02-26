import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "TASKS_V1";

export async function saveTasks(data) {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.log("Save error:", error);
  }
}

export async function loadTasks() {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.log("Load error:", error);
    return null;
  }
}