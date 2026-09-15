import { Card } from "@/components/Card";
import { Screen } from "@/components/Screen";
import { ScreenTitle } from "@/components/ScreenTitle";
import { StatTile } from "@/components/StatTile";
import { useTasks } from "@/hooks/useTasks";
import { Text, View } from "react-native";

export default function StatsScreen() {
  const { stats } = useTasks();

  const remainingLabel =
    stats.total === 0
      ? "Add a task to start tracking progress."
      : stats.remaining === 0
        ? "Everything is done for today."
        : `${stats.remaining} ${stats.remaining === 1 ? "task" : "tasks"} left to reach 100% for today.`;

  return (
    <Screen>
      <ScreenTitle title="Statistics" subtitle="Today" />

      <View className="flex-row gap-3 mb-3">
        <StatTile label="Total tasks" value={stats.total} className="flex-1" />
        <StatTile label="Completed" value={stats.completed} className="flex-1" />
      </View>
      <View className="flex-row gap-3 mb-5">
        <StatTile label="Remaining" value={stats.remaining} className="flex-1" />
        <StatTile
          label="Completion rate"
          value={`${stats.percentage}%`}
          className="flex-1"
        />
      </View>

      <Card className="p-5">
        <View className="flex-row items-center justify-between mb-3">
          <Text className="text-[17px] font-semibold text-slate">Progress</Text>
          <Text className="text-[15px] font-semibold text-ink">
            {stats.completed} / {stats.total}
          </Text>
        </View>
        <View className="h-2 rounded-full bg-background overflow-hidden">
          <View
            className="h-2 rounded-full bg-primary"
            style={{ width: `${stats.percentage}%` }}
          />
        </View>
        <Text className="text-[13px] leading-[18px] text-slate/60 mt-3">
          {remainingLabel}
        </Text>
      </Card>
    </Screen>
  );
}
