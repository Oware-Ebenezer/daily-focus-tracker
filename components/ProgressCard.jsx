import { CircularProgress } from "@/components/CircularProgress";
import { Text, View } from "react-native";

export const ProgressCard = ({ progress }) => {
  return (
    <View className="bg-card p-5 rounded-2xl shadow-sm mb-6 flex-row items-center">
      <CircularProgress progress={progress} />

      <View className="ml-6 flex-1">
        <Text className="text-lg font-semibold text-gray-800">
          Great start!
        </Text>
        <Text className="text-gray-500 mt-2">Keep focusing on your goals.</Text>
      </View>
    </View>
  );
};
