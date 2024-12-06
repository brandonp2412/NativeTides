import { Stack } from "expo-router";
import { Text } from "react-native";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Native tides",
          headerLeft: () => <Text style={{ marginRight: 8 }}>🌀</Text>,
        }}
      />
    </Stack>
  );
}
