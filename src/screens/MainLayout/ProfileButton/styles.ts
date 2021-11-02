import styled from "styled-components/native";
import { COLORS, SIZES } from "../../../constants";

export const ProfileButtonContainer = styled.TouchableOpacity`
  background-color: ${COLORS.white};
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-radius: ${SIZES.radius}px;
`;

export const ProfileImage = styled.Image`
  height: 40px;
  width: 40px;
  border-radius: ${SIZES.radius}px;
  background-color: ${COLORS.white};
`;
