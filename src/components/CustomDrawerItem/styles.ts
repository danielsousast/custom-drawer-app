import styled from "styled-components/native";
import { COLORS, FONTS, SIZES } from "../../constants";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 40px;
  padding-left: ${SIZES.radius}px;
  border-radius: ${SIZES.base}px;
  margin-bottom: ${SIZES.base}px;
`;

export const Icon = styled.Image`
  height: 20px;
  width: 20px;
  tint-color: ${COLORS.white};
`;

export const Label = styled.Text`
  margin-left: 15px;
  color: ${COLORS.white};

  font-size: ${FONTS.h3.fontSize}px;
  line-height: ${FONTS.h3.lineHeight}px;
`;
