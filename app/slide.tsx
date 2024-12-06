import React, { useRef, useEffect } from "react";
import { Animated, Text, StyleSheet } from "react-native";

export default function Slide({
  show,
  children,
  direction,
}: {
  show: boolean;
  children: any;
  direction: "left" | "right" | "up" | "down";
}) {
  const slideAnim = useRef(new Animated.Value(0)).current; // Initialize with 0

  useEffect(() => {
    let toValue;

    switch (direction) {
      case "left":
        toValue = show ? 0 : -1000;
        break;
      case "right":
        toValue = show ? 0 : 1000;
        break;
      case "up":
        toValue = show ? 0 : -1000;
        break;
      case "down":
        toValue = show ? 0 : 1000;
        break;
      default:
        toValue = 0;
    }

    const property =
      direction === "left" || direction === "right"
        ? "translateX"
        : "translateY";

    Animated.timing(slideAnim, {
      toValue,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [show, direction]);

  const transformStyle =
    direction === "left" || direction === "right"
      ? { transform: [{ translateX: slideAnim }] }
      : { transform: [{ translateY: slideAnim }] };

  return (
    <Animated.View style={{ ...styles.animatedView, ...transformStyle }}>
      <Text style={styles.text}>{children}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  animatedView: {
    marginTop: 20,
  },
  text: {
    fontSize: 24,
    color: "#333",
  },
});
