import { Image, Text, View } from "react-native";

export const Header = () => {
  const getFormattedDate = () => {
    const options = { weekday: "long", month: "long", day: "numeric" };
    return new Date().toLocaleDateString(undefined, options);
  }
  
  return (
    <View className="flex-row items-center justify-between mb-6 ">
      <View>
        <Text className="text-2xl font-bold text-gray-900">Daily Focus</Text>
        <Text className="text-gray-600 mt-1">{getFormattedDate()}</Text>
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
