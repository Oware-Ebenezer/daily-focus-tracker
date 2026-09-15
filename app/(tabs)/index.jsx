import { EmptyState } from "@/components/EmptyState";
import { FloatingButton } from "@/components/FloatingButton";
import { Header } from "@/components/Header";
import { ProgressCard } from "@/components/ProgressCard";
import { Screen } from "@/components/Screen";
import { TaskItem } from "@/components/TaskItem";
import { ROUTES } from "@/constants/routes";
import { useTasks } from "@/hooks/useTasks";
import { useRouter } from "expo-router";
import { FlatList, Text, View } from "react-native";

/**
 * Home screen: overall progress, the task list, and a button to add a task.
 * Renders only the background until storage has been read, so nothing flashes.
 */
export default function HomeScreen() {
  const router = useRouter();
  const { tasks, stats, isReady, persistError, toggleTask } = useTasks();

  if (!isReady) return <Screen />;

  return (
    <Screen>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onToggle={toggleTask}
            onPress={(task) => router.push(ROUTES.task(task.id))}
          />
        )}
        ListHeaderComponent={
          <View>
            <Header />
            {persistError && (
              <View className="bg-slate rounded-xl px-4 py-3 mb-4">
                <Text className="text-[13px] leading-[18px] text-background">
                  Changes couldn&apos;t be saved on this device. They will be
                  lost when the app closes.
                </Text>
              </View>
            )}
            <ProgressCard stats={stats} />
            <View className="flex-row items-center justify-between mb-3">
              <Text className="text-[17px] font-semibold text-ink">Your tasks</Text>
              <View className="h-6 px-2.5 rounded-full bg-slate/10 justify-center">
                <Text className="text-[13px] font-semibold text-slate">
                  {stats.total}
                </Text>
              </View>
            </View>
          </View>
        }
        ListEmptyComponent={
          <EmptyState title="No tasks yet" body="Add your first task." />
        }
        contentContainerStyle={{ paddingBottom: 96 }}
        showsVerticalScrollIndicator={false}
      />
      <FloatingButton onPress={() => router.push(ROUTES.addTask)} />
    </Screen>
  );
}
