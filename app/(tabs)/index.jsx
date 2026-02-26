import { FloatingButton } from "@/components/FloatingButton";
import { Header } from "@/components/Header";
import { ProgressCard } from "@/components/ProgressCard";
import { TaskItem } from "@/components/TaskItem";
import { TaskContext } from "@/context/TaskContext";
import "@/global.css";
import { useRouter } from "expo-router";
import { useContext, useMemo } from "react";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
