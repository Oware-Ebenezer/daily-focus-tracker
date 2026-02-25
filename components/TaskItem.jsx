import { Text, TouchableOpacity, View } from "react-native";

export const TaskItem = ({ task, onToggle }) => {
  return (
    <TouchableOpacity
      onPress={() => onToggle(task.id)}
      className="bg-card p-4 rounded-2xl mb-3 shadow-sm flex-row items-center"
    >
      <View
        className={`w-5 h-5 rounded-md border-2 mr-3 ${task.completed ? "bg-primary border-primary" : "border-gray-500"}`}
      >
        <Text
          className={`text-base ${task.completed ? "line-through text-gray-400" : "text-gray-800"}`}
        >
          {task.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
