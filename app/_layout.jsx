import { colors } from "@/constants/theme";
import { TaskProvider } from "@/context/TaskContext";
import "@/global.css";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <TaskProvider>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.background },
        }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="add-task" options={{ presentation: "modal" }} />
      </Stack>
    </TaskProvider>
  );
}
