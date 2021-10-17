import React from 'react';
import NavButton from '../NavButton/NavButton';
import * as Styled from './NavBar.styles';

type NavBarProps = {
  isPickerView: boolean;
  handleSetPicker: (state: boolean) => void;
};

const NavBar: React.FC<NavBarProps> = ({ isPickerView, handleSetPicker }) => {
  const openPicker = () => {
    handleSetPicker(true);
  };

  const openLibrary = () => {
    handleSetPicker(false);
  };

  return (
    <Styled.NavWrapper>
      <Styled.NavButtonsWrapper>
        <NavButton onClick={openPicker} buttonText="Picker" />
        <NavButton onClick={openLibrary} buttonText="Library" />
      </Styled.NavButtonsWrapper>
    </Styled.NavWrapper>
  );
};

export default NavBar;
