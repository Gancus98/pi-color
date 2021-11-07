import React from 'react';
import * as Styled from './Button.styles';

type ButtonProps = {
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return <Styled.Button onClick={onClick}>{children}</Styled.Button>;
};

export default Button;
