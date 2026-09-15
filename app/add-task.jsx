import { Card } from "@/components/Card";
import { colors, PRIORITIES } from "@/constants/theme";
import { useTasks } from "@/hooks/useTasks";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const inputBase =
  "rounded-xl px-3.5 text-base text-slate border-[1.5px]";
const inputIdle = "bg-field border-slate/10";
const inputFocused = "bg-surface border-primary";

/**
 * "New task" sheet: collects a title, optional details and a priority, then saves.
 * Save is disabled until the title has non-whitespace content.
 */
export default function AddTaskScreen() {
  const router = useRouter();
  const { addTask } = useTasks();

  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [focused, setFocused] = useState(null);

  const canSave = title.trim().length > 0;

  const handleSave = () => {
    if (!canSave) return;
    addTask(title.trim(), details.trim(), priority);
    router.back();
  };

  return (
    <SafeAreaView edges={["top", "bottom"]} className="flex-1 bg-background">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        className="flex-1"
      >
        <ScrollView
          contentContainerClassName="px-5 pb-6"
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View className="flex-row items-center justify-between pt-3 mb-5">
            <TouchableOpacity
              onPress={() => router.back()}
              accessibilityRole="button"
              accessibilityLabel="Close"
              className="w-10 h-10 rounded-full bg-surface border border-slate/10 items-center justify-center"
            >
              <Ionicons name="close" size={20} color={colors.slate} />
            </TouchableOpacity>
            <Text className="text-[17px] font-semibold text-ink">New task</Text>
            <View className="w-10" />
          </View>

          {/* Form */}
          <Card className="p-5 mb-5">
            <View className="mb-[18px]">
              <Text className="text-[13px] font-semibold text-slate mb-2">
                Title
              </Text>
              <TextInput
                value={title}
                onChangeText={setTitle}
                onFocus={() => setFocused("title")}
                onBlur={() => setFocused(null)}
                placeholder="What needs to be done?"
                placeholderTextColor={colors.slateFaint}
                autoFocus
                returnKeyType="next"
                className={`${inputBase} h-12 ${focused === "title" ? inputFocused : inputIdle}`}
              />
            </View>

            <View className="mb-[18px]">
              <Text className="text-[13px] font-semibold text-slate mb-2">
                Details
              </Text>
              <TextInput
                value={details}
                onChangeText={setDetails}
                onFocus={() => setFocused("details")}
                onBlur={() => setFocused(null)}
                placeholder="Add notes or details (optional)"
                placeholderTextColor={colors.slateFaint}
                multiline
                textAlignVertical="top"
                className={`${inputBase} h-24 py-3 ${focused === "details" ? inputFocused : inputIdle}`}
              />
            </View>

            <View>
              <Text className="text-[13px] font-semibold text-slate mb-2">
                Priority
              </Text>
              <View className="flex-row gap-2">
                {PRIORITIES.map((level) => {
                  const isSelected = priority === level;
                  return (
                    <TouchableOpacity
                      key={level}
                      onPress={() => setPriority(level)}
                      activeOpacity={0.7}
                      accessibilityRole="radio"
                      accessibilityState={{ selected: isSelected }}
                      className={`flex-1 h-11 rounded-xl border-[1.5px] items-center justify-center ${
                        isSelected
                          ? "bg-primary/10 border-primary"
                          : "bg-field border-slate/10"
                      }`}
                    >
                      <Text
                        className={`text-[15px] font-semibold ${
                          isSelected ? "text-slate" : "text-slate/60"
                        }`}
                      >
                        {level}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          </Card>

          {/* Save */}
          <TouchableOpacity
            onPress={handleSave}
            disabled={!canSave}
            activeOpacity={0.8}
            accessibilityRole="button"
            accessibilityState={{ disabled: !canSave }}
            className={`h-[52px] rounded-xl bg-primary flex-row items-center justify-center ${
              canSave ? "" : "opacity-40"
            }`}
          >
            <Ionicons
              name="checkmark"
              size={20}
              color={colors.ink}
              style={{ marginRight: 8 }}
            />
            <Text className="text-[17px] font-semibold text-ink">Save task</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
