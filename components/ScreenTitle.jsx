import { Text, View } from "react-native";

export const ScreenTitle = ({ title, subtitle, right }) => {
  return (
    <View className="flex-row items-center justify-between pt-3 mb-5">
      <View>
        <Text className="text-[28px] leading-[34px] font-bold text-ink">
          {title}
        </Text>
        {subtitle ? (
          <Text className="text-[15px] leading-5 text-slate/60 mt-1">
            {subtitle}
          </Text>
        ) : null}
      </View>
      {right}
    </View>
  );
};
