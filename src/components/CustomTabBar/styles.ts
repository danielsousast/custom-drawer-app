import styled from "styled-components/native";
import { COLORS } from "../../constants";

export const TabContainer = styled.SafeAreaView`
  flex: 1;
  flex-direction: row;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${COLORS.white};
  align-items: center;
`;
