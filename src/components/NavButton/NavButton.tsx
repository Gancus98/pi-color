import React from 'react';
import * as Styled from './NavButton.styles';

type NavButtonProps = {
  buttonText: string;
  onClick: () => void;
  active: boolean;
};

const NavButton: React.FC<NavButtonProps> = ({
  buttonText,
  onClick,
  active,
}) => {
  return (
    <Styled.NavButton active={active} onClick={onClick}>
      {buttonText}
    </Styled.NavButton>
  );
};

export default NavButton;
