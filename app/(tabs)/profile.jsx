import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

export default function ProfileScreen() {
  return (
    <View className="flex-1 bg-background px-5 pt-14">
     
      <Text className="text-2xl font-bold text-gray-900 mb-6">Profile</Text>

     
      <View className="bg-card p-6 rounded-2xl shadow-sm mb-8">
        <Text className="text-lg font-semibold text-gray-900">Ebenezer</Text>
        <Text className="text-gray-500">Computer Science Student</Text>
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

        <TouchableOpacity className="flex-row bg-red-600 justify-between items-center p-5">
          <Text className="text-button  font-semibold">Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
