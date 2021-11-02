import styled from "styled-components/native";
import { COLORS, SIZES } from "../../constants";

export const Container = styled.TouchableOpacity`
  height: 40px;
  padding: 16px 0;
`;

export const Icon = styled.Image`
  width: 20px;
  height: 20px;
  tint-color: ${({ isFocused }) => (isFocused ? COLORS.white : COLORS.gray)};
`;

export const TabLabel = styled.Text.attrs({
  numberOfLines: 1,
})`
  margin-left: ${SIZES.base}px;
  color: ${({ isFocused }) => (isFocused ? COLORS.white : COLORS.gray)};
`;
