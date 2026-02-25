import React, { createContext, useState, useEffect } from "react";
import { loadTasks, saveTasks } from "../services/taskService";

export const TaskContext = createContext();

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

  function addTask(title, details = "") {
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
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTask }}>
      {children}
    </TaskContext.Provider>
  );
}