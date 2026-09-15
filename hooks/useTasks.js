import { TaskContext } from "@/context/TaskContext";
import { useContext } from "react";

export function useTasks() {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error("useTasks must be used inside a TaskProvider");
  }
  return context;
}
