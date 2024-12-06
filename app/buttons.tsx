import { Button, Image, View } from "react-native";
import { styles, vibrate } from "./utils";

export default function Buttons() {
  async function tapped() {
    // TODO: Log  your name here
    vibrate();
  }

  return (
    <View>
      {/* TODO: Change this to a different image */}
      <Image
        source={require("../assets/images/cat.png")}
        style={styles.image}
      />

      {/* TODO: Make this button say your name */}
      <Button title="Vibrate" onPress={tapped} />
    </View>
  );
}
