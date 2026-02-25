import { Text, View } from "react-native";
import Svg, { Circle } from "react-native-svg";

export const CircularProgress = ({
  size = 120,
  strokeWidth = 12,
  progress = 0,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const strokeDashOffset = circumference - (circumference * progress) / 100;

  return (
    <View className="items-center justify-center">
      <Svg width={size} height={size}>
        <Circle
          stroke="#e5e7eb"
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <Circle
          stroke="#5b3eff"
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashOffset={strokeDashOffset}
          strokeLinecap="round"
          rotation="-90"
          origin={`${size / 2}, ${size / 2}`}
        />
      </Svg>
      <View className="absolute">
        <Text className="text-xl font-bold text-gray-900">{progress}%</Text>
      </View>
    </View>
  );
};
