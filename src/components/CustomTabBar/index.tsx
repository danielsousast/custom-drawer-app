import React from "react";
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { TabButton } from "..";
import { COLORS, constants, icons } from "../../constants";

import { TabContainer } from "./styles";

interface ComponentProps {
  selectedTab: string;
  setSelectedTab: (route: string) => void;
}

const CustomTabBar: React.FC<ComponentProps> = ({
  selectedTab,
  setSelectedTab,
}) => {
  return (
    <TabContainer>
      {Object.keys(constants.tabs).map((screen) => (
        <TabButton
          label={screen}
          icon={icons[screen]}
          isFocused={selectedTab == screen}
          onPress={() => setSelectedTab(screen)}
          selectedTab={selectedTab}
        />
      ))}
    </TabContainer>
  );
};

export default CustomTabBar;
