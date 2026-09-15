import { PRIORITY_STYLES } from "@/constants/theme";
import { Text, View } from "react-native";

export const PriorityBadge = ({ priority, muted = false }) => {
  const style = PRIORITY_STYLES[priority] ?? PRIORITY_STYLES.Medium;

  return (
    <View
      className={`h-[22px] px-2 rounded-full justify-center ${style.container} ${muted ? "opacity-50" : ""}`}
    >
      <Text className={`text-xs font-semibold ${style.text}`}>{priority}</Text>
    </View>
  );
};
