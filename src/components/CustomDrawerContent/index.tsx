import React from "react";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { constants, dummyData, icons } from "../../constants";
import CustomDrawerItem from "../CustomDrawerItem";
import {
  Content,
  CloseButton,
  Header,
  ProfileContent,
  Avatar,
  Icon,
  User,
  UserName,
  UserLabel,
  Footer,
  DrawerItems,
  Divider,
} from "./styles";

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

export default CustomDrawerContent;
