import { DEFAULT_PRIORITY } from "@/constants/priority";

/**
 * @typedef {"Low" | "Medium" | "High"} Priority
 *
 * @typedef {Object} Task
 * @property {string} id
 * @property {string} title
 * @property {string} details
 * @property {Priority} priority
 * @property {boolean} completed
 * @property {string} date ISO timestamp of creation
 *
 * @typedef {Object} TaskState
 * @property {Record<string, Task>} byId
 * @property {string[]} allIds insertion order
 */

/** @type {TaskState} */
export const EMPTY_STATE = { byId: {}, allIds: [] };

export const ACTIONS = {
  HYDRATE: "HYDRATE",
  ADD: "ADD",
  UPDATE: "UPDATE",
  TOGGLE: "TOGGLE",
  REMOVE: "REMOVE",
};

export function createId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

/** @returns {Task} */
export function createTask(title, details = "", priority = DEFAULT_PRIORITY) {
  return {
    id: createId(),
    title,
    details,
    priority,
    completed: false,
    date: new Date().toISOString(),
  };
}

/**
 * Pure state transitions. Every case returns the previous state unchanged
 * when the action cannot apply, so callers never need to pre-check.
 *
 * @param {TaskState} state
 * @returns {TaskState}
 */
export function taskReducer(state, action) {
  switch (action.type) {
    case ACTIONS.HYDRATE: {
      const stored = action.state;
      // Nothing was added before storage resolved: take the stored state as-is.
      if (state.allIds.length === 0) return stored;
      // Otherwise merge so tasks created before hydration are not lost.
      return {
        byId: { ...stored.byId, ...state.byId },
        allIds: [
          ...stored.allIds,
          ...state.allIds.filter((id) => !stored.byId[id]),
        ],
      };
    }

    case ACTIONS.ADD: {
      const task = action.task;
      return {
        byId: { ...state.byId, [task.id]: task },
        allIds: [...state.allIds, task.id],
      };
    }

    case ACTIONS.UPDATE: {
      const existing = state.byId[action.id];
      if (!existing) return state;
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.id]: { ...existing, ...action.changes, id: existing.id },
        },
      };
    }

    case ACTIONS.TOGGLE: {
      const existing = state.byId[action.id];
      if (!existing) return state;
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.id]: { ...existing, completed: !existing.completed },
        },
      };
    }

    case ACTIONS.REMOVE: {
      if (!state.byId[action.id]) return state;
      const { [action.id]: _removed, ...byId } = state.byId;
      return {
        byId,
        allIds: state.allIds.filter((id) => id !== action.id),
      };
    }

    default:
      return state;
  }
}

/** @param {TaskState} state @returns {Task[]} */
export function selectTasks(state) {
  return state.allIds.map((id) => state.byId[id]);
}

/** @param {TaskState} state */
export function selectStats(state) {
  const total = state.allIds.length;
  let completed = 0;
  for (const id of state.allIds) {
    if (state.byId[id].completed) completed++;
  }
  return {
    total,
    completed,
    remaining: total - completed,
    percentage: total === 0 ? 0 : Math.round((completed / total) * 100),
  };
}
