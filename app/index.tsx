import { View } from "react-native";
import Buttons from "./buttons";
import { styles } from "./utils";
import Input from "./input";
import State from "./state";

export default function Index() {
  return (
    <View style={styles.center}>
      <State />
    </View>
  );
}
