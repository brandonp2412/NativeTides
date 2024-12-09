import { Text, View } from "react-native";
import Bouncing from "./bouncing";

export default function Styling() {
  return (
    <View style={{ gap: 32 }}>
      {/* Make these two side-by-side */}
      <Text style={{ fontSize: 30 }}>Im very big</Text>
      <Text style={{ color: "purple" }}>But i'm awfully small...</Text>

      {/* Switch this to be light mode */}
      <Bouncing>
        <Text style={{ backgroundColor: "black", color: "white" }}>
          Im in dark mode!
        </Text>
      </Bouncing>

      {/* Make this entire thing bounce */}
      <View style={{ flexDirection: "row", gap: 16 }}>
        <Text style={{ color: "pink", backgroundColor: "black" }}>We are</Text>
        <Text style={{ color: "cyan", backgroundColor: "black" }}>
          Side-by-side!
        </Text>
      </View>
    </View>
  );
}
