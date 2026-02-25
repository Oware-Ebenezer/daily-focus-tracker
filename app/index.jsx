import { FloatingButton } from "@/components/FloatingButton";
import { Header } from "@/components/Header";
import { ProgressCard } from "@/components/ProgressCard";
import "@/global.css";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
export default function HomeScreen() {
  const router = useRouter();
  return (
    <SafeAreaView className="px-2">
      <Header />
      <ProgressCard progress={45} />
      <FloatingButton onPress={() => router.push("/add-task")} />
    </SafeAreaView>
  );
}
