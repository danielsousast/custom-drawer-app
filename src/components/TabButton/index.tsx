import { useRoute } from "@react-navigation/core";
import React from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { COLORS } from "../../constants";

import { Container, Icon, TabLabel } from "./styles";

interface ComponentProps {
  label: string;
  icon: any;
  isFocused: boolean;
  onPress: () => void;
  selectedTab: string;
  innerContainerStyle: any;
}

const TabButton: React.FC<ComponentProps> = ({
  onPress,
  icon,
  isFocused,
  label,
  selectedTab,
}) => {
  const { name } = useRoute();

  console.log(name);
  const tabFlex = useSharedValue(1);
  const tabColor = useSharedValue(COLORS.white);

  const flexStyle = useAnimatedStyle(() => {
    return {
      flex: tabFlex.value,
    };
  });
  const screenColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: tabColor.value,
    };
  });

  React.useEffect(() => {
    if (selectedTab === label) {
      tabFlex.value = withTiming(4, { duration: 500 });
      tabColor.value = withTiming(COLORS.primary, { duration: 500 });
    } else {
      tabFlex.value = withTiming(1, { duration: 500 });
      tabColor.value = withTiming(COLORS.white, { duration: 500 });
    }
  }, [selectedTab]);

  return (
    <Animated.View
      style={[
        {
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          width: "100%",
          height: 44,

          borderRadius: 25,
        },
        flexStyle,
      ]}
    >
      <Container onPress={onPress}>
        <Animated.View
          style={[
            {
              flexDirection: "row",
              width: "100%",
              height: 44,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 25,
            },
            screenColorStyle,
          ]}
        >
          <Icon isFocused={isFocused} source={icon} />
          {isFocused && <TabLabel isFocused={isFocused}>{label}</TabLabel>}
        </Animated.View>
      </Container>
    </Animated.View>
  );
};

export default TabButton;
