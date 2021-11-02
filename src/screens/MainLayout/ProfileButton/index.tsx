import React from "react";
import { dummyData } from "../../../constants";

import { ProfileButtonContainer, ProfileImage } from "./styles";

interface ComponentProps {
  onPress: () => void;
}

const ProfileButton: React.FC<ComponentProps> = ({ onPress }) => {
  return (
    <ProfileButtonContainer onPress={onPress}>
      <ProfileImage source={dummyData.myProfile.profile_image} />
    </ProfileButtonContainer>
  );
};

export default ProfileButton;
