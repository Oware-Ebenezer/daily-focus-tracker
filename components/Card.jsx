import { View } from "react-native";

export const Card = ({ children, className = "" }) => {
  return (
    <View
      className={`bg-surface border border-slate/10 rounded-2xl ${className}`}
    >
      {children}
    </View>
  );
};
