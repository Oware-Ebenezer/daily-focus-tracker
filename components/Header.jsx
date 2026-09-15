import { ScreenTitle } from "@/components/ScreenTitle";
import { colors } from "@/constants/theme";
import { user } from "@/constants/user";
import { formatHeaderDate } from "@/utils/date";
import { Image } from "react-native";

export const Header = () => {
  return (
    <ScreenTitle
      title="Daily Focus"
      subtitle={formatHeaderDate()}
      right={
        <Image
          source={{ uri: user.avatarUrl }}
          accessibilityLabel={user.name}
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: colors.border,
            backgroundColor: colors.surface,
          }}
        />
      }
    />
  );
};
