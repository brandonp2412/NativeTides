import { View, TextInput } from "react-native";
import { styles } from "./utils";

export default function Input() {
  return (
    <View>
      <TextInput style={styles.input} placeholder="Type your name here..." />
    </View>
  );
}
