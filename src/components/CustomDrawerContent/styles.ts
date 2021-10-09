import styled from "styled-components/native";
import { COLORS, FONTS, SIZES } from "../../constants";

export const Content = styled.View`
  flex: 1;
  padding-right: ${SIZES.radius}px;
  padding-left: ${SIZES.radius}px;
`;

export const Header = styled.View`
  align-items: flex-start;
  justify-content: center;
`;

export const Icon = styled.Image`
  height: 35px;
  width: 35px;
  tint-color: ${COLORS.white};
`;

export const CloseButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const ProfileContent = styled.TouchableOpacity`
  flex-direction: row;
  margin-top: ${SIZES.radius}px;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: ${SIZES.radius}px;
`;

export const User = styled.View`
  margin-left: ${SIZES.radius}px;
`;

export const UserName = styled.Text`
  color: ${COLORS.white};
  font-weight: bold;
  font-size: ${FONTS.h3.fontSize}px;
  line-height: ${FONTS.h3.lineHeight}px;
`;

export const UserLabel = styled.Text`
  color: ${COLORS.white};

  font-size: ${FONTS.body4.fontSize}px;
  line-height: ${FONTS.body4.lineHeight}px;
`;

export const DrawerItems = styled.View`
  flex: 1;
  margin-top: ${SIZES.padding}px;
`;

export const Divider = styled.View`
  height: 1px;
  margin: ${SIZES.radius}px 0;
  margin-left: ${SIZES.radius}px;
  background-color: ${COLORS.lightGray1};
`;

export const Footer = styled.View`
  margin-bottom: ${SIZES.padding}px;
`;
