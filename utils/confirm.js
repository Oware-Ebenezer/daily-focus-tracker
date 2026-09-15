import { Alert, Platform } from "react-native";

/**
 * Asks the user to confirm a destructive action. Resolves true when confirmed.
 * Uses the native alert on iOS/Android and window.confirm on web, where
 * React Native's Alert is not implemented.
 */
export function confirmAction({
  title,
  message,
  confirmLabel = "Delete",
  cancelLabel = "Cancel",
}) {
  if (Platform.OS === "web") {
    return Promise.resolve(window.confirm(message ? `${title}\n\n${message}` : title));
  }
  return new Promise((resolve) => {
    Alert.alert(
      title,
      message,
      [
        { text: cancelLabel, style: "cancel", onPress: () => resolve(false) },
        { text: confirmLabel, style: "destructive", onPress: () => resolve(true) },
      ],
      { cancelable: true, onDismiss: () => resolve(false) },
    );
  });
}
