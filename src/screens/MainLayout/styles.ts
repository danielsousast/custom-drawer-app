import { View } from "react-native";
import styled from "styled-components/native";
import { COLORS } from "../../constants";

export const Container = styled(View)`
  flex: 1;
  background-color: ${COLORS.gray3};
`;

export const Content = styled.View`
  flex: 1;
`;

export const Footer = styled.View`
  height: 100px;
  justify-content: flex-end;
`;

export const TabContainer = styled.View`
  flex-direction: row;
  padding-left: 10%;
  padding-right: 10px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${COLORS.white};
`;
