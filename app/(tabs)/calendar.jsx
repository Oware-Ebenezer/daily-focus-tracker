import { TaskContext } from "@/context/TaskContext";
import { useContext } from "react";
import { Text, View } from "react-native";

export default function CalendarScreen() {
  const { tasks } = useContext(TaskContext);

  const today = new Date().toDateString();
  return (
    <View className="flex-1  bg-background px-5 pt-14">
      <Text className="text-2xl font-bold text-gray-800">Calendar</Text>

      <View className="bg-card p-6 rounded-xl shadow-sm mb-4">
        <Text className="text-gray-500 mb-2">Today</Text>
        <Text className="text-lg font-semibold text-gray-900">{today}</Text>
      </View>

      <View className="bg-card p-6 rounded-xl shadow-sm">
        <Text className="text-gray-500 mb-2">Tasks Created</Text>
        <Text className="text-2xl font-bold text-primary">{tasks.length}</Text>
      </View>
    </View>
  );
}
