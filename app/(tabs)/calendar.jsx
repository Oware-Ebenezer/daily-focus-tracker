import { Card } from "@/components/Card";
import { Screen } from "@/components/Screen";
import { ScreenTitle } from "@/components/ScreenTitle";
import { useTasks } from "@/hooks/useTasks";
import { getCalendarParts } from "@/utils/date";
import { Text, View } from "react-native";

export default function CalendarScreen() {
  const { stats } = useTasks();
  const today = getCalendarParts();

  return (
    <Screen>
      <ScreenTitle title="Calendar" subtitle="Your day at a glance" />

      <Card className="p-5 mb-4 flex-row items-center">
        <View className="w-16 h-16 rounded-[14px] bg-slate items-center justify-center mr-4">
          <Text className="text-[11px] leading-[14px] font-semibold text-primary tracking-wider">
            {today.monthShort}
          </Text>
          <Text className="text-[26px] leading-[30px] font-bold text-background">
            {today.day}
          </Text>
        </View>
        <View>
          <Text className="text-xl leading-[26px] font-bold text-ink">
            {today.weekday}
          </Text>
          <Text className="text-[15px] leading-5 text-slate/60 mt-1">
            {today.long}
          </Text>
        </View>
      </Card>

      <Card className="p-5">
        <Text className="text-[17px] font-semibold text-slate mb-4">Today</Text>
        <View className="flex-row gap-3">
          <View className="flex-1">
            <Text className="text-[13px] leading-[18px] font-medium text-slate/60 mb-1">
              Tasks created
            </Text>
            <Text className="text-[28px] leading-[34px] font-bold text-ink">
              {stats.total}
            </Text>
          </View>
          <View className="flex-1">
            <Text className="text-[13px] leading-[18px] font-medium text-slate/60 mb-1">
              Completed
            </Text>
            <Text className="text-[28px] leading-[34px] font-bold text-ink">
              {stats.completed}
            </Text>
          </View>
        </View>
      </Card>
    </Screen>
  );
}
