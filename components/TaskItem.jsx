import { PriorityBadge } from "@/components/PriorityBadge";
import { colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, TouchableOpacity, View } from "react-native";

/**
 * One task row. The checkbox toggles completion; tapping anywhere else opens the task.
 */
export const TaskItem = ({ task, onToggle, onPress }) => {
  const hasDetails = task.details && task.details.trim().length > 0;
  const done = task.completed;

  return (
    <TouchableOpacity
      onPress={() => onPress(task)}
      activeOpacity={0.7}
      accessibilityRole="button"
      accessibilityLabel={`Edit ${task.title}`}
      className="bg-surface border border-slate/10 rounded-2xl px-4 py-3.5 mb-2.5 flex-row items-center"
    >
      <Pressable
        onPress={() => onToggle(task.id)}
        hitSlop={12}
        accessibilityRole="checkbox"
        accessibilityState={{ checked: done }}
        accessibilityLabel={done ? "Mark as not done" : "Mark as done"}
        className={`w-[22px] h-[22px] rounded-md mr-3 items-center justify-center ${
          done ? "bg-primary" : "border-2 border-slate/30"
        }`}
      >
        {done && <Ionicons name="checkmark" size={16} color={colors.ink} />}
      </Pressable>

      <View className="flex-1 mr-3">
        <Text
          className={`text-base leading-[21px] font-semibold ${
            done ? "line-through text-slate/45" : "text-slate"
          }`}
          numberOfLines={hasDetails ? 1 : 2}
        >
          {task.title}
        </Text>
        {hasDetails && (
          <Text
            className={`text-[13px] leading-[18px] mt-0.5 ${
              done ? "line-through text-slate/40" : "text-slate/60"
            }`}
            numberOfLines={1}
          >
            {task.details}
          </Text>
        )}
      </View>

      <PriorityBadge priority={task.priority} muted={done} />
    </TouchableOpacity>
  );
};
