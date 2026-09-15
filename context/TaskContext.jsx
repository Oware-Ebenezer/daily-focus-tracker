import {
  ACTIONS,
  createTask,
  EMPTY_STATE,
  selectStats,
  selectTasks,
  taskReducer,
} from "@/context/taskReducer";
import { loadTasks, saveTasks } from "@/services/taskService";
import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";

export const TaskContext = createContext(undefined);

/**
 * Owns task state, exposes CRUD actions, and keeps AsyncStorage in sync.
 * Domain rules live in taskReducer.js; this file only orchestrates.
 *
 * @param {{ children: React.ReactNode }} props
 */
export function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(taskReducer, EMPTY_STATE);
  // False until storage has been read; the save effect never runs before that.
  const [isReady, setIsReady] = useState(false);
  const [persistError, setPersistError] = useState(false);
  // The exact state object produced by hydration, so we can skip writing it straight back.
  const hydratedRef = useRef(EMPTY_STATE);

  useEffect(() => {
    let cancelled = false;
    loadTasks().then((stored) => {
      if (cancelled) return;
      if (stored) {
        hydratedRef.current = stored;
        dispatch({ type: ACTIONS.HYDRATE, state: stored });
      }
      setIsReady(true);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!isReady || state === hydratedRef.current) return;
    let cancelled = false;
    saveTasks(state).then((ok) => {
      if (!cancelled) setPersistError(!ok);
    });
    return () => {
      cancelled = true;
    };
  }, [state, isReady]);

  const addTask = useCallback((title, details, priority) => {
    dispatch({ type: ACTIONS.ADD, task: createTask(title, details, priority) });
  }, []);

  const updateTask = useCallback((id, changes) => {
    dispatch({ type: ACTIONS.UPDATE, id, changes });
  }, []);

  const toggleTask = useCallback((id) => {
    dispatch({ type: ACTIONS.TOGGLE, id });
  }, []);

  const removeTask = useCallback((id) => {
    dispatch({ type: ACTIONS.REMOVE, id });
  }, []);

  const tasks = useMemo(() => selectTasks(state), [state]);
  const stats = useMemo(() => selectStats(state), [state]);

  const value = useMemo(
    () => ({
      tasks,
      tasksById: state.byId,
      stats,
      isReady,
      persistError,
      addTask,
      updateTask,
      toggleTask,
      removeTask,
    }),
    [
      tasks,
      state.byId,
      stats,
      isReady,
      persistError,
      addTask,
      updateTask,
      toggleTask,
      removeTask,
    ],
  );

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}
