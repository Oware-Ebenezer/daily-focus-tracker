import { loadTasks, saveTasks } from "@/services/taskService";
import React, { createContext, useEffect, useMemo, useState } from "react";
export const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasksState, setTasksState] = useState({
    byId: {},
    allIds: [],
  });

  function addTask(title, details = "", priority = "Medium") {
    const id = Date.now().toString();

    const newTask = {
      id,
      title,
      details,
      priority,
      completed: false,
      date: new Date().toISOString(),
    };

    setTasksState((prev) => ({
      byId: {
        ...prev.byId,
        [id]: newTask,
      },
      allIds: [...prev.allIds, id],
    }));
  }

  function toggleTask(id) {
    setTasksState((prev) => ({
      ...prev,
      byId: {
        ...prev.byId,
        [id]: {
          ...prev.byId[id],
          completed: !prev.byId[id].completed,
        },
      },
    }));
  }

  const tasks = useMemo(() => {
    return tasksState.allIds.map((id) => tasksState.byId[id]);
  }, [tasksState]);

  const stats = useMemo(() => {
    const total = tasksState.allIds.length;

    let completed = 0;
    for (let id of tasksState.allIds) {
      if (tasksState.byId[id].completed) completed++;
    }

    return {
      total,
      completed,
      percentage: total === 0 ? 0 : Math.round((completed / total) * 100),
    };
  }, [tasksState]);
  useEffect(() => {
    loadTasks().then((data) => {
      if (data) setTasksState(data);
    });
  }, []);

  useEffect(()=> {
    saveTasks(tasksState);  },[tasksState])
    
  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        toggleTask,
        stats,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
