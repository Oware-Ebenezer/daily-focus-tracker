import { EmptyState } from "@/components/EmptyState";
import { PrimaryButton } from "@/components/PrimaryButton";
import { Screen } from "@/components/Screen";
import { TaskForm } from "@/components/TaskForm";
import { useDismiss } from "@/hooks/useDismiss";
import { useTasks } from "@/hooks/useTasks";
import { confirmAction } from "@/utils/confirm";
import { useLocalSearchParams } from "expo-router";

/**
 * Edit sheet for an existing task. Opened from a task row on Home.
 */
export default function EditTaskScreen() {
  const { id } = useLocalSearchParams();
  const { tasksById, isReady, updateTask, removeTask } = useTasks();
  const dismiss = useDismiss();

  const task = tasksById[id];

  // Storage not read yet (deep link / refresh): render nothing rather than "not found".
  if (!isReady) return <Screen />;

  if (!task) {
    return (
      <Screen edges={["top", "bottom"]}>
        <EmptyState
          title="Task not found"
          body="It may have been deleted."
          icon="alert-circle-outline"
        />
        <PrimaryButton
          label="Back to tasks"
          onPress={dismiss}
          variant="secondary"
          className="mt-4"
        />
      </Screen>
    );
  }

  const handleDelete = async () => {
    const confirmed = await confirmAction({
      title: "Delete this task?",
      message: `"${task.title}" will be removed permanently.`,
    });
    if (!confirmed) return;
    removeTask(task.id);
    dismiss();
  };

  return (
    <TaskForm
      heading="Edit task"
      submitLabel="Save changes"
      initialValues={task}
      onDismiss={dismiss}
      onSubmit={(changes) => {
        updateTask(task.id, changes);
        dismiss();
      }}
      footer={
        <PrimaryButton
          label="Delete task"
          icon="trash-outline"
          variant="secondary"
          onPress={handleDelete}
          className="mt-3"
        />
      }
    />
  );
}
