import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import { Image, Text, TouchableOpacity, View } from "react-native";

export default function ProfileScreen() {
  const router = useRouter();
  return (
    <View className="flex-1 bg-background px-5 pt-14">
      <Text className="text-2xl font-bold text-gray-900 mb-6">Profile</Text>

      <View className="bg-card p-6 rounded-2xl shadow-sm mb-8">
        <View className="flex-row justify-between items-center">
          <View>
            <Text className="text-lg font-semibold text-gray-900">
              Ebenezer
            </Text>
            <Text className="text-gray-500">Computer Science Student</Text>
          </View>
          <Image
            className="w-14 h-14 rounded-full border-2 border-amber-300 shadow-sm"
            source={{
              uri: "https://avatars.githubusercontent.com/u/181800897?v=4&size=64",
            }}
          />
        </View>
      </View>

      <View className="bg-card rounded-2xl shadow-sm">
        <TouchableOpacity className="flex-row justify-between items-center p-5 border-b border-gray-100">
          <Text className="text-gray-700">Account Settings</Text>
          <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
        </TouchableOpacity>

        <TouchableOpacity className="flex-row justify-between items-center p-5 border-b border-gray-100">
          <Text className="text-gray-700">Notifications</Text>
          <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.back()}
          className="flex-row justify-between items-center p-5"
        >
          <Text className="text-button  font-semibold">Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
