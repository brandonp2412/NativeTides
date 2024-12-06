import { Link, useRouter } from "expo-router";
import { Button, Text, View } from "react-native";
import { styles } from "./utils";

export default function Routing() {
  const router = useRouter();

  function goToButtons() {
    router.navigate("/buttons");
  }

  return (
    <View style={styles.center}>
      <Text style={styles.title}>Routing</Text>
      <Text>Buttons and links can separate content in React Native apps</Text>

      {/* TODO: Make this a button instead of a link */}
      <Link href="/input" style={styles.link}>
        Input lesson
      </Link>

      {/* TODO: Make this a link instead of a button */}
      <Button title="Go to buttons" onPress={goToButtons} />

      {/* TODO: Add a new page, and link it below */}
    </View>
  );
}
