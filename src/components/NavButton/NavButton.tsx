import React from 'react';
import * as Styled from './NavButton.styles';

type NavButtonProps = {
  buttonText: string;
  onClick: () => void;
};

const NavButton: React.FC<NavButtonProps> = ({ buttonText, onClick }) => {
  return <Styled.NavButton onClick={onClick}>{buttonText}</Styled.NavButton>;
};

export default NavButton;
