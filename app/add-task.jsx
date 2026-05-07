import { TaskContext } from "@/context/TaskContext";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const PRIORITY_CONFIG = {
  Low: { color: "#22C55E", icon: "arrow-down" },
  Medium: { color: "#EAB308", icon: "remove" },
  High: { color: "#EF4444", icon: "arrow-up" },
};

/**
 * Render a "New Task" screen that collects a title, details, and priority and lets the user save the task.
 *
 * The Save action adds the task via TaskContext and navigates back; the save is a no-op if the title is empty or whitespace.
 * The UI includes inputs for title and details, a three-way priority selector (Low, Medium, High), and a save button.
 *
 * @returns {JSX.Element} The rendered "New Task" screen component.
 */
export default function AddTaskScreen() {
  const router = useRouter();
  const { addTask } = useContext(TaskContext);

  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleSave = () => {
    if (!title.trim()) return;
    addTask(title, details, priority);
    router.back();
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1 px-6"
      >
        {/* Header */}
        <View className="flex-row items-center justify-between mt-4 mb-6">
          <TouchableOpacity
            onPress={() => router.back()}
            className="w-10 h-10 bg-white rounded-full items-center justify-center shadow-sm"
          >
            <Ionicons name="arrow-back" size={20} color="#374151" />
          </TouchableOpacity>

          <Text className="text-xl font-bold text-gray-900">New Task</Text>

          <View className="w-10" />
        </View>

        {/* Form Card */}
        <View className="bg-white rounded-xl p-6 shadow-lg mb-6">
          {/* Title Input */}
          <View className="mb-6">
            <Text className="text-gray-700 text-sm font-medium mb-2 ml-1">
              Task Title
            </Text>
            <TextInput
              placeholder="What needs to be done?"
              value={title}
              onChangeText={setTitle}
              placeholderTextColor="#9CA3AF"
              className="bg-gray-50 p-4 rounded-2xl border border-gray-100 text-gray-800 text-base"
            />
          </View>

          {/* Details Input */}
          <View className="mb-4">
            <Text className="text-gray-500 text-sm font-medium mb-2 ml-1">
              Task Details
            </Text>
            <TextInput
              placeholder="Add some notes or details..."
              value={details}
              onChangeText={setDetails}
              placeholderTextColor="#9CA3AF"
              multiline
              numberOfLines={4}
              textAlignVertical="top"
              className="bg-gray-50 p-4 rounded-2xl border border-gray-100 text-gray-800 text-base h-28"
            />
          </View>
        </View>

        {/* Priority Section */}
        <View className="mb-8">
          <Text className="text-gray-500 text-sm font-medium mb-3 ml-1">
            Priority Level
          </Text>

          <View className="flex-row gap-3">
            {["Low", "Medium", "High"].map((level) => {
              const config = PRIORITY_CONFIG[level];
              const isSelected = priority === level;

              return (
                <TouchableOpacity
                  key={level}
                  onPress={() => setPriority(level)}
                  activeOpacity={0.7}
                  className={`flex-1 flex-row items-center justify-center py-4 rounded-2xl border-2 transition-all duration-200 ${
                    isSelected
                      ? "border-primary bg-primary/10"
                      : "border-gray-100 bg-white"
                  }`}
                >
                  <Ionicons
                    name={config.icon}
                    size={16}
                    color={isSelected ? config.color : "#9CA3AF"}
                    style={{ marginRight: 6 }}
                  />
                  <Text
                    className={`font-semibold text-base ${
                      isSelected ? "text-primary" : "text-gray-400"
                    }`}
                  >
                    {level}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Save Button */}
        <TouchableOpacity
          onPress={handleSave}
          activeOpacity={0.8}
          className="bg-primary p-5 rounded-2xl items-center shadow-lg shadow-primary/30"
        >
          <View className="flex-row items-center">
            <Ionicons
              name="checkmark-circle"
              size={22}
              color="white"
              style={{ marginRight: 8 }}
            />
            <Text className="text-white font-bold text-lg">Save Task</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
