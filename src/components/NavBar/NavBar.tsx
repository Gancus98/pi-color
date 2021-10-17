import React, { SetStateAction } from 'react';
import NavButton from '../NavButton/NavButton';
import * as Styled from './NavBar.styles';

type NavBarProps = {
  isPickerView: boolean;
  handleSetPicker: (state: boolean) => void;
};

const NavBar: React.FC<NavBarProps> = ({ isPickerView, handleSetPicker }) => {
  return (
    <Styled.NavWrapper>
      <Styled.NavButtonsWrapper>
        <NavButton
          buttonText="Picker"
          isPickerView={isPickerView}
          handleSetPicker={handleSetPicker}
        />
        <NavButton
          buttonText="Library"
          isPickerView={isPickerView}
          handleSetPicker={handleSetPicker}
        />
      </Styled.NavButtonsWrapper>
    </Styled.NavWrapper>
  );
};

export default NavBar;
