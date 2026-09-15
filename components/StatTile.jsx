import { Card } from "@/components/Card";
import { Text } from "react-native";

export const StatTile = ({ label, value, className = "" }) => {
  return (
    <Card className={`p-4 ${className}`}>
      <Text className="text-[13px] leading-[18px] font-medium text-slate/60 mb-1.5">
        {label}
      </Text>
      <Text className="text-[28px] leading-[34px] font-bold text-ink">
        {value}
      </Text>
    </Card>
  );
};
