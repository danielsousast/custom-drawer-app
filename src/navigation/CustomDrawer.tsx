import React from "react";
import { View } from "react-native";
import Animated from "react-native-reanimated";
import { createDrawerNavigator } from "@react-navigation/drawer";

const { Navigator, Screen } = createDrawerNavigator();

import MainLayout from "../screens/MainLayout";

import CustomDrawerContent from "../components/CustomDrawerContent";

import { COLORS } from "../constants";

const CustomDrawer: React.FC = () => {
  function getDrawerAnimation(progress) {
    const scale = Animated.interpolateNode(progress, {
      inputRange: [0, 1],
      outputRange: [1, 0.8],
    });
    const borderRadius = Animated.interpolateNode(progress, {
      inputRange: [0, 1],
      outputRange: [0, 16],
    });

    const animatedStyle = { borderRadius, transform: [{ scale }] };

    return animatedStyle;
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
      }}
    >
      <Navigator
        screenOptions={{
          drawerType: "slide",
          headerShown: false,
          overlayColor: "transparent",
          drawerStyle: {
            flex: 1,
            width: "65%",
            paddingRight: 20,
            backgroundColor: "transparent",
          },
          sceneContainerStyle: {
            backgroundColor: "transparent",
          },
        }}
        drawerContent={(props) => {
          return <CustomDrawerContent {...props} />;
        }}
      >
        <Screen name="MainLayout">
          {(props) => (
            <MainLayout {...props} getDrawerAnimation={getDrawerAnimation} />
          )}
        </Screen>
      </Navigator>
    </View>
  );
};

export default CustomDrawer;
