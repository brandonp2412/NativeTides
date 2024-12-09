import React, { useEffect, useRef } from "react";
import { Animated, View, StyleSheet } from "react-native";

const Glow = ({ children }: { children: any }) => {
  const glowAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(glowAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(glowAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, [glowAnim]);

  const glowInterpolate = glowAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 30], // Increase shadow radius for a stronger glow
  });

  const glowColorInterpolate = glowAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["rgba(255, 255, 255, 0.5)", "rgba(255, 255, 255, 1.0)"],
  });

  const glowStyle = {
    shadowColor: glowColorInterpolate,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: glowInterpolate,
    elevation: glowInterpolate, // For Android, matches the shadow effect
  };

  return (
    <Animated.View style={[styles.glowContainer, glowStyle]}>
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  glowContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Glow;
