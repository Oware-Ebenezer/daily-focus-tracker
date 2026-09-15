import { Card } from "@/components/Card";
import { CircularProgress } from "@/components/CircularProgress";
import { Text, View } from "react-native";

function getMessage({ total, completed, remaining, percentage }) {
  if (total === 0) {
    return { title: "Nothing planned yet", body: "Add a task to get started." };
  }
  if (completed === 0) {
    return {
      title: "Let's get started",
      body: `${total} ${total === 1 ? "task" : "tasks"} waiting for you.`,
    };
  }
  if (percentage === 100) {
    return { title: "All done", body: "Every task completed. Nice work." };
  }
  return {
    title: "Keep going",
    body: `${completed} of ${total} done. ${remaining} left for today.`,
  };
}

export const ProgressCard = ({ stats }) => {
  const message = getMessage(stats);

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
