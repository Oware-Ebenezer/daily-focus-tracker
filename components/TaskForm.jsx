import { Card } from "@/components/Card";
import { PrimaryButton } from "@/components/PrimaryButton";
import { PrioritySelector } from "@/components/PrioritySelector";
import { Screen } from "@/components/Screen";
import { TextField } from "@/components/TextField";
import { DEFAULT_PRIORITY } from "@/constants/priority";
import { colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

/**
 * The task sheet used for both creating and editing.
 * Owns form state and validation; the caller decides what submit means.
 *
 * @param {object} props
 * @param {string} props.heading            Sheet title ("New task", "Edit task")
 * @param {string} props.submitLabel
 * @param {{title?: string, details?: string, priority?: string}} [props.initialValues]
 * @param {(values: {title: string, details: string, priority: string}) => void} props.onSubmit
 * @param {() => void} props.onDismiss
 * @param {React.ReactNode} [props.footer]  Extra actions rendered under the submit button
 */
export const TaskForm = ({
  heading,
  submitLabel,
  initialValues = {},
  onSubmit,
  onDismiss,
  footer,
}) => {
  const [title, setTitle] = useState(initialValues.title ?? "");
  const [details, setDetails] = useState(initialValues.details ?? "");
  const [priority, setPriority] = useState(
    initialValues.priority ?? DEFAULT_PRIORITY,
  );
  const detailsRef = useRef(null);

  const canSubmit = title.trim().length > 0;

  const handleSubmit = () => {
    if (!canSubmit) return;
    onSubmit({ title: title.trim(), details: details.trim(), priority });
  };

  return (
    <Screen edges={["top", "bottom"]} padded={false}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        className="flex-1"
      >
        <ScrollView
          contentContainerClassName="px-5 pb-6"
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View className="flex-row items-center justify-between pt-3 mb-5">
            <TouchableOpacity
              onPress={onDismiss}
              accessibilityRole="button"
              accessibilityLabel="Close"
              className="w-10 h-10 rounded-full bg-surface border border-slate/10 items-center justify-center"
            >
              <Ionicons name="close" size={20} color={colors.slate} />
            </TouchableOpacity>
            <Text className="text-[17px] font-semibold text-ink">{heading}</Text>
            <View className="w-10" />
          </View>

          <Card className="p-5 mb-5">
            <TextField
              label="Title"
              value={title}
              onChangeText={setTitle}
              placeholder="What needs to be done?"
              autoFocus
              returnKeyType="next"
              blurOnSubmit={false}
              onSubmitEditing={() => detailsRef.current?.focus()}
              className="mb-[18px]"
            />
            <TextField
              ref={detailsRef}
              label="Details"
              value={details}
              onChangeText={setDetails}
              placeholder="Add notes or details (optional)"
              multiline
              className="mb-[18px]"
            />
            <PrioritySelector value={priority} onChange={setPriority} />
          </Card>

          <PrimaryButton
            label={submitLabel}
            icon="checkmark"
            onPress={handleSubmit}
            disabled={!canSubmit}
          />

          {footer}
        </ScrollView>
      </KeyboardAvoidingView>
    </Screen>
  );
};
