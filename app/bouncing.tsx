import React, { useRef, useEffect } from "react";
import { Animated, View, StyleSheet } from "react-native";

const Bouncing = ({ children }: { children: any }) => {
  const bounceAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const bounce = () => {
      Animated.sequence([
        Animated.timing(bounceAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(bounceAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start(() => bounce());
    };

    bounce();
  }, [bounceAnim]);

  const bounceInterpolate = bounceAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, -30, 0],
  });

  const bounceStyle = {
    transform: [{ translateY: bounceInterpolate }],
  };

  return (
    <Animated.View style={[styles.bounceContainer, bounceStyle]}>
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  bounceContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Bouncing;
