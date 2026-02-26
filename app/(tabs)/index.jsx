import { FloatingButton } from "@/components/FloatingButton";
import { Header } from "@/components/Header";
import { ProgressCard } from "@/components/ProgressCard";
import { TaskItem } from "@/components/TaskItem";
import { TaskContext } from "@/context/TaskContext";
import "@/global.css";
import { useRouter } from "expo-router";
import { useContext, useMemo } from "react";
import { FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

/**
 * Render the home screen UI that displays task progress, a list of tasks, and a button to add a new task.
 *
 * The component reads tasks and a toggle handler from TaskContext, computes the overall completion percentage,
 * renders a header and progress card, lists tasks with toggle support, and provides a floating button to navigate
 * to the add-task screen.
 *
 * @returns {JSX.Element} The home screen view containing the header, progress indicator, task list, and add-task button.
 */
export default function HomeScreen() {
  const router = useRouter();

  const { tasks, toggleTask } = useContext(TaskContext);

  const progress = useMemo(() => {
    if (tasks.length === 0) return 0;
    const completed = tasks.filter((t) => t.completed).length;
    return Math.round((completed / tasks.length) * 100);
  }, [tasks]);

  return (
    <SafeAreaView className="flex-1 px-5 pt-15">
      <Header />
      <ProgressCard progress={progress} />
      <FlatList
        ListHeaderComponent={
          +(
            <Text className="text-xl mb-3 font-semibold">
              Today&apos;s Tasks
            </Text>
          )
        }
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem task={item} onToggle={toggleTask} />
        )}
        showsVerticalScrollIndicator={false}
      />
      <FloatingButton onPress={() => router.push("/add-task")} />
    </SafeAreaView>
  );
}
