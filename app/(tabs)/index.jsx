import { EmptyState } from "@/components/EmptyState";
import { FloatingButton } from "@/components/FloatingButton";
import { Header } from "@/components/Header";
import { ProgressCard } from "@/components/ProgressCard";
import { Screen } from "@/components/Screen";
import { TaskItem } from "@/components/TaskItem";
import { useTasks } from "@/hooks/useTasks";
import { useRouter } from "expo-router";
import { FlatList, Text, View } from "react-native";

/**
 * Home screen: overall progress, today's task list, and a button to add a task.
 */
export default function HomeScreen() {
  const router = useRouter();
  const { tasks, stats, isReady, toggleTask } = useTasks();

  return (
    <Screen>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem task={item} onToggle={toggleTask} />
        )}
        ListHeaderComponent={
          <View>
            <Header />
            <ProgressCard stats={stats} />
            <View className="flex-row items-center justify-between mb-3">
              <Text className="text-[17px] font-semibold text-ink">
                Today&apos;s tasks
              </Text>
              <View className="h-6 px-2.5 rounded-full bg-slate/10 justify-center">
                <Text className="text-[13px] font-semibold text-slate">
                  {stats.total}
                </Text>
              </View>
            </View>
          </View>
        }
        ListEmptyComponent={
          isReady ? (
            <EmptyState
              title="No tasks yet"
              body="Add your first task for today."
            />
          ) : null
        }
        contentContainerStyle={{ paddingBottom: 96 }}
        showsVerticalScrollIndicator={false}
      />
      <FloatingButton onPress={() => router.push("/add-task")} />
    </Screen>
  );
}
