import { Card } from "@/components/Card";
import { colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export const EmptyState = ({ title, body }) => {
  return (
    <Card className="p-6 items-center">
      <View className="w-11 h-11 rounded-full bg-primary/10 items-center justify-center mb-2">
        <Ionicons name="add" size={22} color={colors.slate} />
      </View>
      <Text className="text-[17px] font-semibold text-slate">{title}</Text>
      <Text className="text-[15px] leading-5 text-slate/60 mt-1 text-center">
        {body}
      </Text>
    </Card>
  );
};
