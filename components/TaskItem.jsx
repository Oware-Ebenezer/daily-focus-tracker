import { Text, TouchableOpacity, View } from "react-native";

export const TaskItem = ({ task, onToggle }) => {

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-500";
      case "Medium":
        return "bg-yellow-500";
      case "Low":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  const hasDetails = task.details && task.details.trim().length > 0;

  return (
    <View>
      <View>
        <Text className="text-xl mb-3 font-semibold">Today&apos;s Tasks</Text>
      </View>
    <TouchableOpacity
      onPress={() => onToggle(task.id)}
      className="bg-card p-4 rounded-2xl mb-3 shadow-sm flex-row items-center justify-between"
    >
      <View className="flex-row items-center flex-1 mr-3">
        <View
          className={`w-5 h-5 rounded-md border-2 mr-3 ${task.completed ? "bg-primary border-primary" : "border-gray-500"}`}
        />
        <View className="flex-1">
          <Text
            className={`text-xl font-bold ${task.completed ? "line-through text-gray-400" : "text-gray-800"}`}
            numberOfLines={hasDetails ? 1 : 2}
          >
            {task.title}
          </Text>
          {hasDetails && (
            <Text
              className={`text-sm mt-1 ${task.completed ? "line-through text-gray-400" : "text-gray-500"}`}
              numberOfLines={1}
            >
              {task.details}
            </Text>
          )}
        </View>
      </View>
      <View
        className={`w-3 h-3 rounded-full ${getPriorityColor(task.priority)}`}
      />
    </TouchableOpacity></View>
  );
};
