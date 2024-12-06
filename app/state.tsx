import { useState } from "react";
import { Button, Image, View } from "react-native";
import Slide from "./slide";
import { styles } from "./utils";

export default function State() {
  // TODO: Hide the image by default
  const [show, setShow] = useState(true);

  return (
    <View>
      {/* TODO: Factor out the onPress function */}
      <Button title="Show/hide" onPress={() => setShow(!show)} />
      {/* TODO: Add new buttons to slide in different directions*/}

      <Slide show={show} direction="left">
        <Image
          source={require("../assets/images/capybara.png")}
          style={styles.image}
        />
      </Slide>
    </View>
  );
}
