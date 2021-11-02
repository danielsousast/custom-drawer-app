import React from "react";
import { useDrawerProgress } from "@react-navigation/drawer";

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Header, TabButton } from "../../components";
import { COLORS, constants, dummyData, icons, SIZES } from "../../constants";
import { Content, Footer, TabContainer } from "./styles";
import { useNavigation } from "@react-navigation/core";
import LinearGradient from "react-native-linear-gradient";
import LeftButton from "./LeftButton";
import ProfileButton from "./ProfileButton";
import CustomTabBar from "../../components/CustomTabBar";

export default function MainLayout({
  getDrawerAnimation,
  selectedTab,
  setSelectedTab,
}) {
  const navigation = useNavigation();
  const drawerProgress = useDrawerProgress();
  const animatedStyle = getDrawerAnimation(drawerProgress);

  React.useEffect(() => {
    setSelectedTab(constants.screens.home);
  }, []);

  return (
    <Animated.View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        ...animatedStyle,
      }}
    >
      <Header
        title={selectedTab.toUpperCase()}
        leftComponent={<LeftButton onPress={() => navigation.openDrawer()} />}
        containerStyle={{
          height: 50,
          paddingHorizontal: SIZES.padding,
          marginTop: 40,
          alignItems: "center",
        }}
        rightComponent={<ProfileButton onPress={() => {}} />}
      />

      <Content></Content>

      <Footer>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 4 }}
          colors={[COLORS.transparent, COLORS.lightGray1]}
          style={{
            position: "absolute",
            top: -20,
            left: 0,

            right: 0,
            height: 100,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
        />
        <CustomTabBar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      </Footer>
    </Animated.View>
  );
}
