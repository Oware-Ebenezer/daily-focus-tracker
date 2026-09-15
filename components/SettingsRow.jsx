import { colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity } from "react-native";

export const SettingsRow = ({
  icon,
  label,
  onPress,
  showChevron = true,
  divider = true,
}) => {
  // A row with no handler is presentational: no press feedback, announced as disabled.
  const disabled = !onPress;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      className={`h-14 px-4 flex-row items-center ${divider ? "border-b border-slate/10" : ""}`}
    >
      <Ionicons name={icon} size={22} color={colors.slate} />
      <Text className="flex-1 ml-3 text-[15px] font-medium text-slate">
        {label}
      </Text>
      {showChevron && (
        <Ionicons
          name="chevron-forward"
          size={18}
          color={disabled ? colors.border : colors.slateFaint}
        />
      )}
    </TouchableOpacity>
  );
};
