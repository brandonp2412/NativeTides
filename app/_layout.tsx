import { Stack } from "expo-router";
import { Text } from "react-native";

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      title: 'Native tides',
      headerLeft: () => (
        <Text style={{ marginRight: 8 }}>
          🌀
        </Text>
      )
    }} />
  );
}
