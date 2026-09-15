import { TaskForm } from "@/components/TaskForm";
import { useDismiss } from "@/hooks/useDismiss";
import { useTasks } from "@/hooks/useTasks";

export default function AddTaskScreen() {
  const { addTask } = useTasks();
  const dismiss = useDismiss();

  return (
    <TaskForm
      heading="New task"
      submitLabel="Save task"
      onDismiss={dismiss}
      onSubmit={({ title, details, priority }) => {
        addTask(title, details, priority);
        dismiss();
      }}
    />
  );
}
