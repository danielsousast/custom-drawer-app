import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../screens/Home";
import CustomDrawer from "./CustomDrawer";

const { Navigator, Screen } = createNativeStackNavigator();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }} initialRouteName="Main">
        <Screen name="Home" component={Home} />
        <Screen name="Main" component={CustomDrawer} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
