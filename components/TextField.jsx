import { colors } from "@/constants/theme";
import { forwardRef, useState } from "react";
import { Text, TextInput, View } from "react-native";

// Labelled input that owns its focus styling. All other TextInput props pass through.
export const TextField = forwardRef(function TextField(
  { label, multiline = false, className = "", onFocus, onBlur, ...inputProps },
  ref,
) {
  const [focused, setFocused] = useState(false);

  return (
    <View className={className}>
      <Text className="text-[13px] font-semibold text-slate mb-2">{label}</Text>
      <TextInput
        ref={ref}
        multiline={multiline}
        textAlignVertical={multiline ? "top" : "center"}
        placeholderTextColor={colors.slateFaint}
        onFocus={(e) => {
          setFocused(true);
          onFocus?.(e);
        }}
        onBlur={(e) => {
          setFocused(false);
          onBlur?.(e);
        }}
        className={`rounded-xl px-3.5 text-base text-slate border-[1.5px] ${
          multiline ? "h-24 py-3" : "h-12"
        } ${focused ? "bg-surface border-primary" : "bg-field border-slate/10"}`}
        {...inputProps}
      />
    </View>
  );
});
