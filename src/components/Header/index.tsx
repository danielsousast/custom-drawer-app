import React from "react";
import { FONTS } from "../../constants";
import { HeaderContainer, HeaderTitle } from "./styles";

interface ComponentProps {
  containerStyle: any;
  title: string;
  leftComponent: any;
  rightComponent: any;
}

const Header: React.FC<ComponentProps> = ({
  containerStyle,
  title,
  leftComponent,
  rightComponent,
}) => {
  return (
    <HeaderContainer style={{ ...containerStyle }}>
      {leftComponent}
      <HeaderTitle>{title}</HeaderTitle>
      {rightComponent}
    </HeaderContainer>
  );
};

export default Header;
