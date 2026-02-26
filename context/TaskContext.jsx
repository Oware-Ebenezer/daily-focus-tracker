import React, { createContext, useEffect, useState } from "react";
import { loadTasks, saveTasks } from "../services/taskService";

export const TaskContext = createContext();

/**
 * Provides task state and actions to descendants via TaskContext.
 *
 * @param {{ children: React.ReactNode }} props - The provider's children.
 * @returns {JSX.Element} A TaskContext.Provider that supplies { tasks, addTask, toggleTask } to descendant components.
 */
export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchTasks() {
      const stored = await loadTasks();
      setTasks(stored);
    }
    fetchTasks();
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  function addTask(title, details = "", priority = "Medium") {
    const newTask = {
      id: Date.now().toString(),
      title,
      details,
      completed: false,
      priority: "Medium",
      date: new Date().toISOString(),
    };

    setTasks((prev) => [...prev, newTask]);
  }

  function toggleTask(id) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  }

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTask }}>
      {children}
    </TaskContext.Provider>
  );
}
