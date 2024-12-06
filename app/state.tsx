import { useState } from "react";
import { Button, Image, View } from "react-native";
import { styles } from "./utils";
import SoundPlayer from "react-native-sound-player";

export default function State() {
  const [isPlaying, setIsPlaying] = useState<boolean | undefined>();

  function toggleMusic() {
    if (isPlaying === true) {
      console.log("Pausing...");
      SoundPlayer.pause();
      setIsPlaying(false);
    } else if (isPlaying === undefined) {
      console.log("Playing...");
      SoundPlayer.playAsset(require("../assets/aura.mp3"));
      setIsPlaying(true);
    } else {
      console.log("Resuming...");
      SoundPlayer.resume();
      setIsPlaying(true);
    }
  }

  return (
    <View>
      {/* TODO: Factor out the onPress function */}
      <Button title="Toggle music" onPress={toggleMusic} />
      <Image
        style={styles.image}
        source={require("../assets/images/cool-capybara.webp")}
      />
    </View>
  );
}
