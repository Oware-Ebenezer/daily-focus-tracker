import { TaskContext } from "@/context/TaskContext";
import { useContext, useMemo } from "react";
import { Text, View } from "react-native";

export default function StatScreen() {
  const { tasks } = useContext(TaskContext);

  const stats = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter((t) => t.completed).length;
    const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);
    return { total, completed, percentage };
  }, [tasks]);
  return (
    <View className="flex-1 px-5 pt-14 bg-background">
      <Text className="text-xl font-bold text-gray-900 mb-6">Statistics</Text>

      <View className="bg-card p-6 rounded-xl shadow-sm mb-4">
        <Text className="text-gray-500 mb-2">Completion Rate</Text>
        <Text className="text-2xl font-bold text-primary">
          {stats.percentage}%
        </Text>
      </View>

      <View className="bg-card p-6 rounded-xl shadow-sm mb-4">
        <View className="flex-row justify-between mb-3">
          <Text className="text-gray-500 mb-2">Total Tasks</Text>
          <Text className="text-2xl font-bold text-primary">{stats.total}</Text>
        </View>

        <View className="flex-row justify-between">
          <Text className="text-gray-600">Completed</Text>
          <Text className="text-2xl font-bold text-primary">
            {stats.completed}
          </Text>
        </View>
      </View>
    </View>
  );
}
