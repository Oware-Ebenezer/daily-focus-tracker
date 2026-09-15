import { colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity } from "react-native";

const VARIANTS = {
  // Orange fill with black label (8.2:1) — the one call-to-action style.
  primary: {
    container: "bg-primary",
    text: "text-ink",
    icon: colors.ink,
  },
  // Outlined slate — for secondary or destructive actions, so orange keeps one meaning.
  secondary: {
    container: "bg-surface border-[1.5px] border-slate",
    text: "text-slate",
    icon: colors.slate,
  },
};

export const PrimaryButton = ({
  label,
  icon,
  onPress,
  disabled = false,
  variant = "primary",
  className = "",
}) => {
  const style = VARIANTS[variant] ?? VARIANTS.primary;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      className={`h-[52px] rounded-xl flex-row items-center justify-center ${style.container} ${
        disabled ? "opacity-40" : ""
      } ${className}`}
    >
      {icon && (
        <Ionicons
          name={icon}
          size={20}
          color={style.icon}
          style={{ marginRight: 8 }}
        />
      )}
      <Text className={`text-[17px] font-semibold ${style.text}`}>{label}</Text>
    </TouchableOpacity>
  );
};
