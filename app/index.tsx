import { Text, View } from "react-native";
import { styles } from "./styles";

export default function Index() {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>Code placed in the app/index.tsx file runs first.</Text>

      {/* This is how we comment in JSX. */}
      {/* TODO: Make the Buttons lesson the home page */}
    </View>
  );
}
