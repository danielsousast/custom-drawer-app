import React from "react";
import { icons } from "../../../constants";

import { LeftButtonContainer, Icon } from "./styles";

interface ComponentProps {
  onPress: () => void;
}

const LeftButton: React.FC<ComponentProps> = ({ onPress }) => {
  return (
    <LeftButtonContainer onPress={onPress}>
      <Icon source={icons.menu} />
    </LeftButtonContainer>
  );
};

export default LeftButton;
