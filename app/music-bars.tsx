import React, { useRef, useEffect } from "react";
import { View, Animated, StyleSheet } from "react-native";

const MusicBars: React.FC = () => {
  const bar1Anim = useRef(new Animated.Value(1)).current;
  const bar2Anim = useRef(new Animated.Value(1)).current;
  const bar3Anim = useRef(new Animated.Value(1)).current;
  const bar4Anim = useRef(new Animated.Value(1)).current;
  const bar5Anim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const animateBar = (barAnim: Animated.Value, delay: number) => {
      Animated.loop(
        Animated.sequence([
          Animated.delay(delay),
          Animated.timing(barAnim, {
            toValue: 3,
            duration: 400,
            useNativeDriver: true,
          }),
          Animated.timing(barAnim, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true,
          }),
        ])
      ).start();
    };

    animateBar(bar1Anim, 0);
    animateBar(bar2Anim, 200);
    animateBar(bar3Anim, 400);
    animateBar(bar4Anim, 600);
    animateBar(bar5Anim, 800);
  }, [bar1Anim, bar2Anim, bar3Anim, bar4Anim, bar5Anim]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.bar, { transform: [{ scaleY: bar1Anim }] }]}
      />
      <Animated.View
        style={[styles.bar, { transform: [{ scaleY: bar2Anim }] }]}
      />
      <Animated.View
        style={[styles.bar, { transform: [{ scaleY: bar3Anim }] }]}
      />
      <Animated.View
        style={[styles.bar, { transform: [{ scaleY: bar4Anim }] }]}
      />
      <Animated.View
        style={[styles.bar, { transform: [{ scaleY: bar5Anim }] }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    height: 100,
  },
  bar: {
    width: 10,
    height: 40,
    backgroundColor: "#3498db",
    marginHorizontal: 5,
  },
});

export default MusicBars;
