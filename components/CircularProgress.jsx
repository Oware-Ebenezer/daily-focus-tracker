import { colors } from "@/constants/theme";
import { Text, View } from "react-native";
import Svg, { Circle } from "react-native-svg";

export const CircularProgress = ({
  size = 96,
  strokeWidth = 10,
  progress = 0,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const clamped = Math.min(100, Math.max(0, progress));
  const strokeDashoffset = circumference - (circumference * clamped) / 100;

  return (
    <View
      className="items-center justify-center"
      style={{ width: size, height: size }}
      accessibilityRole="progressbar"
      accessibilityValue={{ min: 0, max: 100, now: clamped }}
    >
      <Svg width={size} height={size}>
        <Circle
          stroke={colors.background}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <Circle
          stroke={colors.primary}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          rotation="-90"
          origin={`${size / 2}, ${size / 2}`}
        />
      </Svg>
      <View className="absolute">
        <Text className="text-xl font-bold text-ink">{clamped}%</Text>
      </View>
    </View>
  );
};
