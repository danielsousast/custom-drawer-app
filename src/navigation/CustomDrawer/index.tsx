import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  useDrawerProgress,
} from "@react-navigation/drawer";
//import MainLayout from "../screens/MainLayout";

const { Navigator, Screen } = createDrawerNavigator();

import {
  Avatar,
  CloseButton,
  Container,
  Content,
  Divider,
  DrawerItems,
  Footer,
  Header,
  Icon,
  ProfileContent,
  User,
  UserLabel,
  UserName,
} from "./styles";
import MainLayout from "../../screens/MainLayout";
import { COLORS, constants, dummyData, icons, SIZES } from "../../constants";
import CustomDrawerItem from "../../components/CustomDrawerItem";
import Animated from "react-native-reanimated";

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{
        flex: 1,
      }}
    >
      <Content>
        <Header>
          <CloseButton onPress={() => props.navigation.closeDrawer()}>
            <Icon source={icons.cross} />
          </CloseButton>
        </Header>
        <ProfileContent>
          <Avatar source={dummyData.myProfile?.profile_image} />
          <User>
            <UserName>{dummyData.myProfile.name}</UserName>
            <UserLabel>View your profile</UserLabel>
          </User>
        </ProfileContent>
        <DrawerItems>
          <CustomDrawerItem label={constants.screens.home} icon={icons.home} />
          <CustomDrawerItem
            label={constants.screens.my_wallet}
            icon={icons.wallet}
          />
          <CustomDrawerItem
            label={constants.screens.notification}
            icon={icons.notification}
          />

          <CustomDrawerItem
            label={constants.screens.favorite}
            icon={icons.favorite}
          />
          <Divider />

          <CustomDrawerItem label="Track Your Order" icon={icons.location} />
          <CustomDrawerItem label="Coupons" icon={icons.coupon} />
          <CustomDrawerItem label="Settings" icon={icons.setting} />
          <CustomDrawerItem label="Invite a Friend" icon={icons.profile} />
          <CustomDrawerItem label="Help Center" icon={icons.help} />
        </DrawerItems>
        <Footer>
          <CustomDrawerItem label="Logout" icon={icons.logout} />
        </Footer>
      </Content>
    </DrawerContentScrollView>
  );
};

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
  const [progress, setProgress] = React.useState(new Animated.Value(0));

  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 16],
  });

  const animatedStyle = { borderRadius, transform: [{ scale }] };

  return (
    <Container>
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
    </Container>
  );
};

export default CustomDrawer;
