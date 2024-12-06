import { useState } from "react";
import { Button, Image, View } from "react-native";
import { styles } from "./utils";
import SoundPlayer from "react-native-sound-player";
import MusicBars from "./music-bars";

export default function State() {
  const [isPlaying, setIsPlaying] = useState(false);

  // TODO: Make this toggle the music on/off
  function toggleMusic() {
    SoundPlayer.playAsset(require("../assets/aura.mp3"));
    setIsPlaying(true);
  }

  return (
    <View style={styles.center}>
      <Button title="Toggle music" onPress={toggleMusic} />
      <Image
        style={styles.image}
        source={require("../assets/images/cool-capybara.webp")}
      />

      {isPlaying && <MusicBars />}
    </View>
  );
}
