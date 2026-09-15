import { Avatar } from "@/components/Avatar";
import { Card } from "@/components/Card";
import { Screen } from "@/components/Screen";
import { ScreenTitle } from "@/components/ScreenTitle";
import { SettingsRow } from "@/components/SettingsRow";
import { user } from "@/constants/user";
import { Text, View } from "react-native";

export default function ProfileScreen() {
  return (
    <Screen>
      <ScreenTitle title="Profile" />

      <Card className="p-5 mb-4 flex-row items-center">
        <Avatar uri={user.avatarUrl} name={user.name} size={56} />
        <View className="ml-4">
          <Text className="text-[17px] leading-[22px] font-semibold text-ink">
            {user.name}
          </Text>
          <Text className="text-[15px] leading-5 text-slate/60 mt-1">
            {user.title}
          </Text>
        </View>
      </Card>

      {/* Rows without an onPress are rendered as disabled until their screens exist. */}
      <Card className="mb-4">
        <SettingsRow icon="options-outline" label="Account settings" />
        <SettingsRow
          icon="notifications-outline"
          label="Notifications"
          divider={false}
        />
      </Card>

      <Card>
        <SettingsRow
          icon="log-out-outline"
          label="Log out"
          showChevron={false}
          divider={false}
        />
      </Card>
    </Screen>
  );
}
