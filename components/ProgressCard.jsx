import { Text, View } from "react-native";

export const ProgressCard = ({ progress }) => {
  return (
    <View className="bg-card p-5 rounded-2xl shadow-sm mb-6">
      <Text className="text-lg font-semibold text-gray-600 ">Great Start</Text>

      <View className="mt-3">
        <View className="h-4 bg-gray-200 rounded-full overflow-hidden">
          <View
            className="h-4 bg-primary rounded-full"
            style={{ width: `${progress}%` }}
          ></View>
          <Text className="text-gray-500 mt-2">{progress}% completed</Text>
        </View>
      </View>
    </View>
  );
};
