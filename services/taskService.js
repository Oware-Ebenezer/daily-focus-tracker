import AsyncStorage from "@react-native-async-storage/async-storage";

const TASK_KEY = "TASKS";

export async function saveTasks(tasks) {
  try {
    await AsyncStorage.setItem(TASK_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.log("Save error:", error);
  }
}

export async function loadTasks() {
  try {
    const data = await AsyncStorage.getItem(TASK_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log("Load error:", error);
    return [];
  }
}