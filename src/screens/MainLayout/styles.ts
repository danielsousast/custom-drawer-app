import { View } from "react-native";
import styled from "styled-components/native";
import { COLORS } from "../../constants";

export const Container = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.white};
`;
