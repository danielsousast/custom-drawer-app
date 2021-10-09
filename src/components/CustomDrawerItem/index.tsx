import React from "react";

import { View } from "react-native";
import { Container, Icon, Label } from "./styles";

interface ComponentProps {
  label: string;
  icon: any;
}

const CustomDrawerItem: React.FC<ComponentProps> = ({ icon, label }) => {
  return (
    <Container>
      <Icon source={icon} />
      <Label>{label}</Label>
    </Container>
  );
};

export default CustomDrawerItem;
