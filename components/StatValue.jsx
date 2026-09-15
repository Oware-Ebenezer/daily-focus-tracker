import { Text, View } from "react-native";

// Label over a large number. Used inside StatTile and directly in cards.
export const StatValue = ({ label, value, className = "" }) => {
  return (
    <View className={className}>
      <Text className="text-[13px] leading-[18px] font-medium text-slate/60 mb-1.5">
        {label}
      </Text>
      <Text className="text-[28px] leading-[34px] font-bold text-ink">
        {value}
      </Text>
    </View>
  );
};
