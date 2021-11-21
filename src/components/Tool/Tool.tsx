import React from 'react';
import * as Styled from './Tool.styles';

type ToolProps = {
  src: string;
  alt: string;
  onClick: () => void;
  isActive?: boolean;
};

const Tool: React.FC<ToolProps> = ({ src, alt, onClick, isActive = false }) => {
  return (
    <Styled.Wrapper active={isActive} onClick={onClick}>
      <Styled.IconImg alt={alt} src={src} />
    </Styled.Wrapper>
  );
};

export default Tool;
