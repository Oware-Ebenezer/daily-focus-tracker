import { Text, TouchableOpacity } from "react-native";

export const FloatingButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="absolute bottom-8 right-6 w-14 h-14 bg-primary rounded-full items-center justify-center shadow-lg"
    >
      <Text className="text-white text-2xl font-bold">+</Text>
    </TouchableOpacity>
  );
};
