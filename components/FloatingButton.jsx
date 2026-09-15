import { colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export const FloatingButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      accessibilityRole="button"
      accessibilityLabel="Add task"
      className="absolute bottom-6 right-5 w-14 h-14 bg-primary rounded-full items-center justify-center"
      style={{
        shadowColor: colors.slate,
        shadowOpacity: 0.18,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 6 },
        elevation: 6,
      }}
    >
      <Ionicons name="add" size={28} color={colors.ink} />
    </TouchableOpacity>
  );
};
