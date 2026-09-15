import { Card } from "@/components/Card";
import { Screen } from "@/components/Screen";
import { ScreenTitle } from "@/components/ScreenTitle";
import { colors } from "@/constants/theme";
import { user } from "@/constants/user";
import { Ionicons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";

const SettingsRow = ({ icon, label, last = false, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.7}
    accessibilityRole="button"
    className={`h-14 px-4 flex-row items-center ${last ? "" : "border-b border-slate/10"}`}
  >
    <Ionicons name={icon} size={22} color={colors.slate} />
    <Text className="flex-1 ml-3 text-[15px] font-medium text-slate">
      {label}
    </Text>
    <Ionicons name="chevron-forward" size={18} color={colors.slateFaint} />
  </TouchableOpacity>
);

export default function ProfileScreen() {
  return (
    <Screen>
      <ScreenTitle title="Profile" />

      <Card className="p-5 mb-4 flex-row items-center">
        <Image
          source={{ uri: user.avatarUrl }}
          accessibilityLabel={user.name}
          style={{
            width: 56,
            height: 56,
            borderRadius: 28,
            marginRight: 16,
            backgroundColor: colors.slate,
          }}
        />
        <View>
          <Text className="text-[17px] leading-[22px] font-semibold text-ink">
            {user.name}
          </Text>
          <Text className="text-[15px] leading-5 text-slate/60 mt-1">
            {user.title}
          </Text>
        </View>
      </Card>

      <Card className="mb-4">
        <SettingsRow icon="options-outline" label="Account settings" />
        <SettingsRow icon="notifications-outline" label="Notifications" last />
      </Card>

      <Card>
        <View className="h-14 px-4 flex-row items-center">
          <Ionicons name="log-out-outline" size={22} color={colors.slate} />
          <Text className="ml-3 text-[15px] font-medium text-slate">Log out</Text>
        </View>
      </Card>
    </Screen>
  );
}
