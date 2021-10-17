import React from 'react';
import * as Styled from './ColorInfo.styles';

type ColorInfoProps = {
  color: string;
};

const ColorInfo: React.FC<ColorInfoProps> = ({ color }) => {
  return <Styled.Wrapper color={color}>Selected color: {color}</Styled.Wrapper>;
};

export default ColorInfo;
