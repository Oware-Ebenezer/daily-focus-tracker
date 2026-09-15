import { SafeAreaView } from "react-native-safe-area-context";

// Every screen goes through this wrapper so top spacing comes from the
// device's safe-area inset instead of a fixed padding guess.
// `padded={false}` lets a scrolling screen own its horizontal gutter.
export const Screen = ({
  children,
  edges = ["top"],
  padded = true,
  className = "",
}) => {
  return (
    <SafeAreaView
      edges={edges}
      className={`flex-1 bg-background ${padded ? "px-5" : ""} ${className}`}
    >
      {children}
    </SafeAreaView>
  );
};
