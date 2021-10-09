import React from "react";
import { useDrawerProgress } from "@react-navigation/drawer";

import Animated from "react-native-reanimated";

export default function MainLayout({ getDrawerAnimation }) {
  const drawerProgress = useDrawerProgress();

  const animatedStyle = getDrawerAnimation(drawerProgress);

  return (
    <Animated.View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        ...animatedStyle,
      }}
    ></Animated.View>
  );
}
