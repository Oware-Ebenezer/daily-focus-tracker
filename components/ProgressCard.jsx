import { Card } from "@/components/Card";
import { CircularProgress } from "@/components/CircularProgress";
import { getProgressMessage } from "@/utils/progress";
import { Text, View } from "react-native";

export const ProgressCard = ({ stats }) => {
  const message = getProgressMessage(stats);

  return (
    <Card className="p-5 mb-5 flex-row items-center">
      <CircularProgress progress={stats.percentage} />

      <View className="ml-5 flex-1">
        <Text className="text-[17px] leading-[22px] font-semibold text-slate">
          {message.title}
        </Text>
        <Text className="text-[15px] leading-5 text-slate/60 mt-1.5">
          {message.body}
        </Text>
      </View>
    </Card>
  );
};
