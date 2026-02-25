import { Image, Text, View } from "react-native";

export const Header = () => {
  return (
    <View className="flex-row items-center justify-between mb-6 ">
      <View>
        <Text className="text-2xl font-bold text-gray-900">Daily Focus</Text>
        <Text className="text-gray-600 mt-1">Wednesday, Feb 25</Text>
      </View>
      <Image
        className="w-10 h-10 rounded-full"
        source={{
          uri: "https://avatars.githubusercontent.com/u/181800897?v=4&size=64",
        }}
      />
    </View>
  );
};
