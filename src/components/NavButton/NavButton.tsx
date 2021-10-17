import React from 'react';
import * as Styled from './NavButton.styles';

type NavButtonProps = {
  buttonText: string;
  isPickerView: boolean;
  handleSetPicker: (state: boolean) => void;
};

const NavButton: React.FC<NavButtonProps> = ({
  buttonText,
  isPickerView,
  handleSetPicker,
}) => {
  const handleNavButtonClick = () => {
    isPickerView ? handleSetPicker(false) : handleSetPicker(true);
  };

  return (
    <Styled.NavButton onClick={handleNavButtonClick}>
      {buttonText}
    </Styled.NavButton>
  );
};

export default NavButton;
