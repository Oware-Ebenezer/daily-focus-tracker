import { colors } from "@/constants/theme";
import { useState } from "react";
import { Image, Text, View } from "react-native";

function getInitials(name = "") {
  return name
    .trim()
    .split(/\s+/)
    .map((word) => word[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

// Remote avatar with an initials fallback when there is no URL or it fails to load.
export const Avatar = ({ uri, name, size = 40 }) => {
  const [failed, setFailed] = useState(false);
  const shape = { width: size, height: size, borderRadius: size / 2 };

  if (!uri || failed) {
    return (
      <View
        accessibilityLabel={name}
        style={{
          ...shape,
          backgroundColor: colors.slate,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: colors.background,
            fontWeight: "600",
            fontSize: Math.round(size * 0.38),
          }}
        >
          {getInitials(name)}
        </Text>
      </View>
    );
  }

  return (
    <Image
      source={{ uri }}
      onError={() => setFailed(true)}
      accessibilityLabel={name}
      style={{
        ...shape,
        borderWidth: 1,
        borderColor: colors.border,
        backgroundColor: colors.surface,
      }}
    />
  );
};
