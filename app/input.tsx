import { View, TextInput, Text } from "react-native";
import { notify, styles } from "./utils";
import { useState } from "react";

export default function Input() {
  const [name, setName] = useState("");

  function sayName() {
    notify("Your name is", name);
  }

  return (
    <View style={styles.center}>
      <Text style={styles.title}>Input</Text>
      <Text>To get input from the user, use TextInput</Text>

      <TextInput
        value={name}
        onChangeText={setName}
        onSubmitEditing={sayName}
        style={styles.input}
        placeholder="Type your name here..."
      />

      {/* TODO: Ask for the users age */}
      {/* TODO: Ask for the users date of birth */}
    </View>
  );
}
