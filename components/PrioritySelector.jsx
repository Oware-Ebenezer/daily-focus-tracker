import { PRIORITIES } from "@/constants/priority";
import { Text, TouchableOpacity, View } from "react-native";

export const PrioritySelector = ({ value, onChange, label = "Priority" }) => {
  return (
    <View>
      <Text className="text-[13px] font-semibold text-slate mb-2">{label}</Text>
      <View className="flex-row gap-2" accessibilityRole="radiogroup">
        {PRIORITIES.map((level) => {
          const selected = value === level;
          return (
            <TouchableOpacity
              key={level}
              onPress={() => onChange(level)}
              activeOpacity={0.7}
              accessibilityRole="radio"
              accessibilityState={{ selected }}
              className={`flex-1 h-11 rounded-xl border-[1.5px] items-center justify-center ${
                selected
                  ? "bg-primary/10 border-primary"
                  : "bg-field border-slate/10"
              }`}
            >
              <Text
                className={`text-[15px] font-semibold ${
                  selected ? "text-slate" : "text-slate/60"
                }`}
              >
                {level}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};
