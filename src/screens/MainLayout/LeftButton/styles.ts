import styled from "styled-components/native";
import { COLORS, SIZES } from "../../../constants";

export const LeftButtonContainer = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: ${COLORS.gray2};
  border-radius: ${SIZES.radius}px;
`;

export const Icon = styled.Image``;
